# net.minecraft.advancements.critereon

- [AbstractCriterionInstance](#abstractcriterioninstance)
- [BredAnimalsTrigger](#bredanimalstrigger)
- [BredAnimalsTrigger.Instance](#bredanimalstrigger.instance)
- [BrewedPotionTrigger](#brewedpotiontrigger)
- [BrewedPotionTrigger.Instance](#brewedpotiontrigger.instance)
- [ChangeDimensionTrigger](#changedimensiontrigger)
- [ChangeDimensionTrigger.Instance](#changedimensiontrigger.instance)
- [ConstructBeaconTrigger](#constructbeacontrigger)
- [ConstructBeaconTrigger.Instance](#constructbeacontrigger.instance)
- [ConsumeItemTrigger](#consumeitemtrigger)
- [ConsumeItemTrigger.Instance](#consumeitemtrigger.instance)
- [CuredZombieVillagerTrigger](#curedzombievillagertrigger)
- [CuredZombieVillagerTrigger.Instance](#curedzombievillagertrigger.instance)
- [DamagePredicate](#damagepredicate)
- [DamageSourcePredicate](#damagesourcepredicate)
- [DistancePredicate](#distancepredicate)
- [EffectsChangedTrigger](#effectschangedtrigger)
- [EffectsChangedTrigger.Instance](#effectschangedtrigger.instance)
- [EnchantedItemTrigger](#enchanteditemtrigger)
- [EnchantedItemTrigger.Instance](#enchanteditemtrigger.instance)
- [EnchantmentPredicate](#enchantmentpredicate)
- [EnterBlockTrigger](#enterblocktrigger)
- [EnterBlockTrigger.Instance](#enterblocktrigger.instance)
- [EntityHurtPlayerTrigger](#entityhurtplayertrigger)
- [EntityHurtPlayerTrigger.Instance](#entityhurtplayertrigger.instance)
- [EntityPredicate](#entitypredicate)
- [ImpossibleTrigger](#impossibletrigger)
- [ImpossibleTrigger.Instance](#impossibletrigger.instance)
- [InventoryChangeTrigger](#inventorychangetrigger)
- [InventoryChangeTrigger.Instance](#inventorychangetrigger.instance)
- [ItemDurabilityTrigger](#itemdurabilitytrigger)
- [ItemDurabilityTrigger.Instance](#itemdurabilitytrigger.instance)
- [ItemPredicate](#itempredicate)
- [KilledTrigger](#killedtrigger)
- [KilledTrigger.Instance](#killedtrigger.instance)
- [LevitationTrigger](#levitationtrigger)
- [LevitationTrigger.Instance](#levitationtrigger.instance)
- [LocationPredicate](#locationpredicate)
- [MinMaxBounds](#minmaxbounds)
- [MobEffectsPredicate](#mobeffectspredicate)
- [MobEffectsPredicate.InstancePredicate](#mobeffectspredicate.instancepredicate)
- [NBTPredicate](#nbtpredicate)
- [NetherTravelTrigger](#nethertraveltrigger)
- [NetherTravelTrigger.Instance](#nethertraveltrigger.instance)
- [PlacedBlockTrigger](#placedblocktrigger)
- [PlacedBlockTrigger.Instance](#placedblocktrigger.instance)
- [PlayerHurtEntityTrigger](#playerhurtentitytrigger)
- [PlayerHurtEntityTrigger.Instance](#playerhurtentitytrigger.instance)
- [PositionTrigger](#positiontrigger)
- [PositionTrigger.Instance](#positiontrigger.instance)
- [RecipeUnlockedTrigger](#recipeunlockedtrigger)
- [RecipeUnlockedTrigger.Instance](#recipeunlockedtrigger.instance)
- [SummonedEntityTrigger](#summonedentitytrigger)
- [SummonedEntityTrigger.Instance](#summonedentitytrigger.instance)
- [TameAnimalTrigger](#tameanimaltrigger)
- [TameAnimalTrigger.Instance](#tameanimaltrigger.instance)
- [TickTrigger](#ticktrigger)
- [TickTrigger.Instance](#ticktrigger.instance)
- [UsedEnderEyeTrigger](#usedendereyetrigger)
- [UsedEnderEyeTrigger.Instance](#usedendereyetrigger.instance)
- [UsedTotemTrigger](#usedtotemtrigger)
- [UsedTotemTrigger.Instance](#usedtotemtrigger.instance)
- [VillagerTradeTrigger](#villagertradetrigger)
- [VillagerTradeTrigger.Instance](#villagertradetrigger.instance)
## AbstractCriterionInstance

*class* `net.minecraft.advancements.critereon.AbstractCriterionInstance`

All Implemented Interfaces: ICriterionInstance

### Methods
- `public ResourceLocation getId()`
- `public java.lang.String toString()`

## BredAnimalsTrigger

*class* `net.minecraft.advancements.critereon.BredAnimalsTrigger`

All Implemented Interfaces: ICriterionTrigger<BredAnimalsTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<BredAnimalsTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<BredAnimalsTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public BredAnimalsTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  EntityAnimal parent1,  EntityAnimal parent2,  EntityAgeable child)`

## BredAnimalsTrigger.Instance

*class* `net.minecraft.advancements.critereon.BredAnimalsTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: BredAnimalsTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  EntityAnimal parent1In,  EntityAnimal parent2In,  EntityAgeable childIn)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## BrewedPotionTrigger

*class* `net.minecraft.advancements.critereon.BrewedPotionTrigger`

All Implemented Interfaces: ICriterionTrigger<BrewedPotionTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<BrewedPotionTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<BrewedPotionTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public BrewedPotionTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  PotionType potionIn)`

## BrewedPotionTrigger.Instance

*class* `net.minecraft.advancements.critereon.BrewedPotionTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: BrewedPotionTrigger

### Methods
- `public boolean test(PotionType potion)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## ChangeDimensionTrigger

*class* `net.minecraft.advancements.critereon.ChangeDimensionTrigger`

All Implemented Interfaces: ICriterionTrigger<ChangeDimensionTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ChangeDimensionTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ChangeDimensionTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public ChangeDimensionTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  DimensionType from,  DimensionType to)`

## ChangeDimensionTrigger.Instance

*class* `net.minecraft.advancements.critereon.ChangeDimensionTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: ChangeDimensionTrigger

### Methods
- `public boolean test(DimensionType from,  DimensionType to)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## ConstructBeaconTrigger

*class* `net.minecraft.advancements.critereon.ConstructBeaconTrigger`

All Implemented Interfaces: ICriterionTrigger<ConstructBeaconTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ConstructBeaconTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ConstructBeaconTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public ConstructBeaconTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  TileEntityBeacon beacon)`

## ConstructBeaconTrigger.Instance

*class* `net.minecraft.advancements.critereon.ConstructBeaconTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: ConstructBeaconTrigger

### Methods
- `public boolean test(TileEntityBeacon beacon)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## ConsumeItemTrigger

*class* `net.minecraft.advancements.critereon.ConsumeItemTrigger`

All Implemented Interfaces: ICriterionTrigger<ConsumeItemTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ConsumeItemTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ConsumeItemTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public ConsumeItemTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  ItemStack item)`

## ConsumeItemTrigger.Instance

*class* `net.minecraft.advancements.critereon.ConsumeItemTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: ConsumeItemTrigger

### Methods
- `public boolean test(ItemStack item)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## CuredZombieVillagerTrigger

*class* `net.minecraft.advancements.critereon.CuredZombieVillagerTrigger`

All Implemented Interfaces: ICriterionTrigger<CuredZombieVillagerTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<CuredZombieVillagerTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<CuredZombieVillagerTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public CuredZombieVillagerTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  EntityZombie zombie,  EntityVillager villager)`

## CuredZombieVillagerTrigger.Instance

*class* `net.minecraft.advancements.critereon.CuredZombieVillagerTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: CuredZombieVillagerTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  EntityZombie zombie,  EntityVillager villager)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## DamagePredicate

*class* `net.minecraft.advancements.critereon.DamagePredicate`

### Fields
- `public static DamagePredicate ANY`

### Methods
- `public boolean test(EntityPlayerMP player,  DamageSource source,  float dealt,  float taken,  boolean blocked)`
- `public static DamagePredicate deserialize(JsonElement element)`

## DamageSourcePredicate

*class* `net.minecraft.advancements.critereon.DamageSourcePredicate`

### Fields
- `public static DamageSourcePredicate ANY`

### Methods
- `public boolean test(EntityPlayerMP player,  DamageSource source)`
- `public static DamageSourcePredicate deserialize(JsonElement element)`

## DistancePredicate

*class* `net.minecraft.advancements.critereon.DistancePredicate`

### Fields
- `public static final DistancePredicate ANY`

### Methods
- `public boolean test(double x1,  double y1,  double z1,  double x2,  double y2,  double z2)`
- `public static DistancePredicate deserialize(JsonElement element)`

## EffectsChangedTrigger

*class* `net.minecraft.advancements.critereon.EffectsChangedTrigger`

All Implemented Interfaces: ICriterionTrigger<EffectsChangedTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EffectsChangedTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EffectsChangedTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public EffectsChangedTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player)`

## EffectsChangedTrigger.Instance

*class* `net.minecraft.advancements.critereon.EffectsChangedTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: EffectsChangedTrigger

### Methods
- `public boolean test(EntityPlayerMP player)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## EnchantedItemTrigger

*class* `net.minecraft.advancements.critereon.EnchantedItemTrigger`

All Implemented Interfaces: ICriterionTrigger<EnchantedItemTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EnchantedItemTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EnchantedItemTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public EnchantedItemTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  ItemStack item,  int levelsSpent)`

## EnchantedItemTrigger.Instance

*class* `net.minecraft.advancements.critereon.EnchantedItemTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: EnchantedItemTrigger

### Methods
- `public boolean test(ItemStack item,  int levelsIn)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## EnchantmentPredicate

*class* `net.minecraft.advancements.critereon.EnchantmentPredicate`

### Fields
- `public static final EnchantmentPredicate ANY`

### Methods
- `public boolean test(java.util.Map<Enchantment,java.lang.Integer> enchantmentsIn)`
- `public static EnchantmentPredicate deserialize(JsonElement element)`
- `public static EnchantmentPredicate[] deserializeArray(JsonElement element)`

## EnterBlockTrigger

*class* `net.minecraft.advancements.critereon.EnterBlockTrigger`

All Implemented Interfaces: ICriterionTrigger<EnterBlockTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EnterBlockTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EnterBlockTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public EnterBlockTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  IBlockState state)`

## EnterBlockTrigger.Instance

*class* `net.minecraft.advancements.critereon.EnterBlockTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: EnterBlockTrigger

### Methods
- `public boolean test(IBlockState state)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## EntityHurtPlayerTrigger

*class* `net.minecraft.advancements.critereon.EntityHurtPlayerTrigger`

All Implemented Interfaces: ICriterionTrigger<EntityHurtPlayerTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EntityHurtPlayerTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<EntityHurtPlayerTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public EntityHurtPlayerTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  DamageSource source,  float amountDealt,  float amountTaken,  boolean wasBlocked)`

## EntityHurtPlayerTrigger.Instance

*class* `net.minecraft.advancements.critereon.EntityHurtPlayerTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: EntityHurtPlayerTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  DamageSource source,  float amountDealt,  float amountTaken,  boolean wasBlocked)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## EntityPredicate

*class* `net.minecraft.advancements.critereon.EntityPredicate`

### Fields
- `public static final EntityPredicate ANY`

### Methods
- `public boolean test(EntityPlayerMP player,  Entity entity)`
- `public static EntityPredicate deserialize(JsonElement element)`

## ImpossibleTrigger

*class* `net.minecraft.advancements.critereon.ImpossibleTrigger`

All Implemented Interfaces: ICriterionTrigger<ImpossibleTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ImpossibleTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ImpossibleTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public ImpossibleTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`

## ImpossibleTrigger.Instance

*class* `net.minecraft.advancements.critereon.ImpossibleTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: ImpossibleTrigger

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## InventoryChangeTrigger

*class* `net.minecraft.advancements.critereon.InventoryChangeTrigger`

All Implemented Interfaces: ICriterionTrigger<InventoryChangeTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<InventoryChangeTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<InventoryChangeTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public InventoryChangeTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  InventoryPlayer inventory)`

## InventoryChangeTrigger.Instance

*class* `net.minecraft.advancements.critereon.InventoryChangeTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: InventoryChangeTrigger

### Methods
- `public boolean test(InventoryPlayer inventory)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## ItemDurabilityTrigger

*class* `net.minecraft.advancements.critereon.ItemDurabilityTrigger`

All Implemented Interfaces: ICriterionTrigger<ItemDurabilityTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ItemDurabilityTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<ItemDurabilityTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public ItemDurabilityTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  ItemStack itemIn,  int newDurability)`

## ItemDurabilityTrigger.Instance

*class* `net.minecraft.advancements.critereon.ItemDurabilityTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: ItemDurabilityTrigger

### Methods
- `public boolean test(ItemStack item,  int p_193197_2_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## ItemPredicate

*class* `net.minecraft.advancements.critereon.ItemPredicate`

### Fields
- `public static final ItemPredicate ANY`

### Methods
- `public boolean test(ItemStack item)`
- `public static ItemPredicate deserialize(JsonElement element)`
- `public static ItemPredicate[] deserializeArray(JsonElement element)`

## KilledTrigger

*class* `net.minecraft.advancements.critereon.KilledTrigger`

All Implemented Interfaces: ICriterionTrigger<KilledTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<KilledTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<KilledTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public KilledTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  Entity entity,  DamageSource source)`

## KilledTrigger.Instance

*class* `net.minecraft.advancements.critereon.KilledTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: KilledTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  Entity entity,  DamageSource source)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## LevitationTrigger

*class* `net.minecraft.advancements.critereon.LevitationTrigger`

All Implemented Interfaces: ICriterionTrigger<LevitationTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<LevitationTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<LevitationTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public LevitationTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  Vec3d startPos,  int duration)`

## LevitationTrigger.Instance

*class* `net.minecraft.advancements.critereon.LevitationTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: LevitationTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  Vec3d startPos,  int durationIn)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## LocationPredicate

*class* `net.minecraft.advancements.critereon.LocationPredicate`

### Fields
- `public static LocationPredicate ANY`

### Methods
- `public boolean test(WorldServer world,  double x,  double y,  double z)`
- `public boolean test(WorldServer world,  float x,  float y,  float z)`
- `public static LocationPredicate deserialize(JsonElement element)`

## MinMaxBounds

*class* `net.minecraft.advancements.critereon.MinMaxBounds`

### Fields
- `public static final MinMaxBounds UNBOUNDED`

### Methods
- `public boolean test(float value)`
- `public boolean testSquare(double value)`
- `public static MinMaxBounds deserialize(JsonElement element)`

## MobEffectsPredicate

*class* `net.minecraft.advancements.critereon.MobEffectsPredicate`

### Fields
- `public static final MobEffectsPredicate ANY`

### Methods
- `public boolean test(Entity entityIn)`
- `public boolean test(EntityLivingBase entityIn)`
- `public boolean test(java.util.Map<Potion,PotionEffect> potions)`
- `public static MobEffectsPredicate deserialize(JsonElement element)`

## MobEffectsPredicate.InstancePredicate

*class* `net.minecraft.advancements.critereon.MobEffectsPredicate.InstancePredicate`

Enclosing class: MobEffectsPredicate

### Methods
- `public boolean test(PotionEffect effect)`
- `public static MobEffectsPredicate.InstancePredicate deserialize(JsonObject object)`

## NBTPredicate

*class* `net.minecraft.advancements.critereon.NBTPredicate`

### Fields
- `public static final NBTPredicate ANY`

### Methods
- `public boolean test(ItemStack item)`
- `public boolean test(Entity entityIn)`
- `public boolean test(NBTBase nbt)`
- `public static NBTPredicate deserialize(JsonElement json)`

## NetherTravelTrigger

*class* `net.minecraft.advancements.critereon.NetherTravelTrigger`

All Implemented Interfaces: ICriterionTrigger<NetherTravelTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<NetherTravelTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<NetherTravelTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public NetherTravelTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  Vec3d enteredNetherPosition)`

## NetherTravelTrigger.Instance

*class* `net.minecraft.advancements.critereon.NetherTravelTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: NetherTravelTrigger

### Methods
- `public boolean test(WorldServer world,  Vec3d enteredNetherPosition,  double x,  double y,  double z)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## PlacedBlockTrigger

*class* `net.minecraft.advancements.critereon.PlacedBlockTrigger`

All Implemented Interfaces: ICriterionTrigger<PlacedBlockTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<PlacedBlockTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<PlacedBlockTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public PlacedBlockTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  BlockPos pos,  ItemStack item)`

## PlacedBlockTrigger.Instance

*class* `net.minecraft.advancements.critereon.PlacedBlockTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: PlacedBlockTrigger

### Methods
- `public boolean test(IBlockState state,  BlockPos pos,  WorldServer world,  ItemStack item)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## PlayerHurtEntityTrigger

*class* `net.minecraft.advancements.critereon.PlayerHurtEntityTrigger`

All Implemented Interfaces: ICriterionTrigger<PlayerHurtEntityTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<PlayerHurtEntityTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<PlayerHurtEntityTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public PlayerHurtEntityTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  Entity entityIn,  DamageSource source,  float amountDealt,  float amountTaken,  boolean blocked)`

## PlayerHurtEntityTrigger.Instance

*class* `net.minecraft.advancements.critereon.PlayerHurtEntityTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: PlayerHurtEntityTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  Entity entity,  DamageSource source,  float dealt,  float taken,  boolean blocked)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## PositionTrigger

*class* `net.minecraft.advancements.critereon.PositionTrigger`

All Implemented Interfaces: ICriterionTrigger<PositionTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<PositionTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<PositionTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public PositionTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player)`

## PositionTrigger.Instance

*class* `net.minecraft.advancements.critereon.PositionTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: PositionTrigger

### Methods
- `public boolean test(WorldServer world,  double x,  double y,  double z)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## RecipeUnlockedTrigger

*class* `net.minecraft.advancements.critereon.RecipeUnlockedTrigger`

All Implemented Interfaces: ICriterionTrigger<RecipeUnlockedTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<RecipeUnlockedTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<RecipeUnlockedTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public RecipeUnlockedTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  IRecipe recipe)`

## RecipeUnlockedTrigger.Instance

*class* `net.minecraft.advancements.critereon.RecipeUnlockedTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: RecipeUnlockedTrigger

### Methods
- `public boolean test(IRecipe recipe)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## SummonedEntityTrigger

*class* `net.minecraft.advancements.critereon.SummonedEntityTrigger`

All Implemented Interfaces: ICriterionTrigger<SummonedEntityTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<SummonedEntityTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<SummonedEntityTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public SummonedEntityTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  Entity entity)`

## SummonedEntityTrigger.Instance

*class* `net.minecraft.advancements.critereon.SummonedEntityTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: SummonedEntityTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  Entity entity)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## TameAnimalTrigger

*class* `net.minecraft.advancements.critereon.TameAnimalTrigger`

All Implemented Interfaces: ICriterionTrigger<TameAnimalTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<TameAnimalTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<TameAnimalTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public TameAnimalTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  EntityAnimal entity)`

## TameAnimalTrigger.Instance

*class* `net.minecraft.advancements.critereon.TameAnimalTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: TameAnimalTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  EntityAnimal entity)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## TickTrigger

*class* `net.minecraft.advancements.critereon.TickTrigger`

All Implemented Interfaces: ICriterionTrigger<TickTrigger.Instance>

### Fields
- `public static final ResourceLocation ID`

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<TickTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<TickTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public TickTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player)`

## TickTrigger.Instance

*class* `net.minecraft.advancements.critereon.TickTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: TickTrigger

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## UsedEnderEyeTrigger

*class* `net.minecraft.advancements.critereon.UsedEnderEyeTrigger`

All Implemented Interfaces: ICriterionTrigger<UsedEnderEyeTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<UsedEnderEyeTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<UsedEnderEyeTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public UsedEnderEyeTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  BlockPos pos)`

## UsedEnderEyeTrigger.Instance

*class* `net.minecraft.advancements.critereon.UsedEnderEyeTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: UsedEnderEyeTrigger

### Methods
- `public boolean test(double distanceSq)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## UsedTotemTrigger

*class* `net.minecraft.advancements.critereon.UsedTotemTrigger`

All Implemented Interfaces: ICriterionTrigger<UsedTotemTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<UsedTotemTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<UsedTotemTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public UsedTotemTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  ItemStack item)`

## UsedTotemTrigger.Instance

*class* `net.minecraft.advancements.critereon.UsedTotemTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: UsedTotemTrigger

### Methods
- `public boolean test(ItemStack item)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`

## VillagerTradeTrigger

*class* `net.minecraft.advancements.critereon.VillagerTradeTrigger`

All Implemented Interfaces: ICriterionTrigger<VillagerTradeTrigger.Instance>

### Methods
- `public ResourceLocation getId()`
- `public void addListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<VillagerTradeTrigger.Instance> listener)`
- `public void removeListener(PlayerAdvancements playerAdvancementsIn,  ICriterionTrigger.Listener<VillagerTradeTrigger.Instance> listener)`
- `public void removeAllListeners(PlayerAdvancements playerAdvancementsIn)`
- `public VillagerTradeTrigger.Instance deserializeInstance(JsonObject json,  JsonDeserializationContext context)`
- `public void trigger(EntityPlayerMP player,  EntityVillager villager,  ItemStack item)`

## VillagerTradeTrigger.Instance

*class* `net.minecraft.advancements.critereon.VillagerTradeTrigger.Instance`

All Implemented Interfaces: ICriterionInstance

Enclosing class: VillagerTradeTrigger

### Methods
- `public boolean test(EntityPlayerMP player,  EntityVillager villager,  ItemStack item)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionInstance`: `getId`, `toString`
