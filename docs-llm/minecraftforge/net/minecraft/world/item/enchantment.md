# net.minecraft.world.item.enchantment

- [ArrowDamageEnchantment](#arrowdamageenchantment)
- [ArrowFireEnchantment](#arrowfireenchantment)
- [ArrowInfiniteEnchantment](#arrowinfiniteenchantment)
- [ArrowKnockbackEnchantment](#arrowknockbackenchantment)
- [ArrowPiercingEnchantment](#arrowpiercingenchantment)
- [BindingCurseEnchantment](#bindingcurseenchantment)
- [Class Enchantment.Rarity](#class-enchantment.rarity)
- [Class EnchantmentCategory](#class-enchantmentcategory)
- [Class ProtectionEnchantment.Type](#class-protectionenchantment.type)
- [DamageEnchantment](#damageenchantment)
- [DigDurabilityEnchantment](#digdurabilityenchantment)
- [DiggingEnchantment](#diggingenchantment)
- [Enchantment](#enchantment)
- [EnchantmentHelper](#enchantmenthelper)
- [EnchantmentHelper.EnchantmentVisitor](#enchantmenthelper.enchantmentvisitor)
- [EnchantmentInstance](#enchantmentinstance)
- [Enchantments](#enchantments)
- [FireAspectEnchantment](#fireaspectenchantment)
- [FishingSpeedEnchantment](#fishingspeedenchantment)
- [FrostWalkerEnchantment](#frostwalkerenchantment)
- [KnockbackEnchantment](#knockbackenchantment)
- [LootBonusEnchantment](#lootbonusenchantment)
- [MendingEnchantment](#mendingenchantment)
- [MultiShotEnchantment](#multishotenchantment)
- [OxygenEnchantment](#oxygenenchantment)
- [ProtectionEnchantment](#protectionenchantment)
- [QuickChargeEnchantment](#quickchargeenchantment)
- [SoulSpeedEnchantment](#soulspeedenchantment)
- [SweepingEdgeEnchantment](#sweepingedgeenchantment)
- [SwiftSneakEnchantment](#swiftsneakenchantment)
- [ThornsEnchantment](#thornsenchantment)
- [TridentChannelingEnchantment](#tridentchannelingenchantment)
- [TridentImpalerEnchantment](#tridentimpalerenchantment)
- [TridentLoyaltyEnchantment](#tridentloyaltyenchantment)
- [TridentRiptideEnchantment](#tridentriptideenchantment)
- [UntouchingEnchantment](#untouchingenchantment)
- [VanishingCurseEnchantment](#vanishingcurseenchantment)
- [WaterWalkerEnchantment](#waterwalkerenchantment)
- [WaterWorkerEnchantment](#waterworkerenchantment)
## ArrowDamageEnchantment

*class* `net.minecraft.world.item.enchantment.ArrowDamageEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44572_)`
- `public int getMaxCost(int p_44574_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## ArrowFireEnchantment

*class* `net.minecraft.world.item.enchantment.ArrowFireEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44580_)`
- `public int getMaxCost(int p_44582_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## ArrowInfiniteEnchantment

*class* `net.minecraft.world.item.enchantment.ArrowInfiniteEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44588_)`
- `public int getMaxCost(int p_44592_)`
- `public boolean checkCompatibility(Enchantment p_44590_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## ArrowKnockbackEnchantment

*class* `net.minecraft.world.item.enchantment.ArrowKnockbackEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44598_)`
- `public int getMaxCost(int p_44600_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## ArrowPiercingEnchantment

*class* `net.minecraft.world.item.enchantment.ArrowPiercingEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44606_)`
- `public int getMaxCost(int p_44610_)`
- `public int getMaxLevel()`
- `public boolean checkCompatibility(Enchantment p_44608_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## BindingCurseEnchantment

*class* `net.minecraft.world.item.enchantment.BindingCurseEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44616_)`
- `public int getMaxCost(int p_44619_)`
- `public boolean isTreasureOnly()`
- `public boolean isCurse()`
- `public boolean canEnchant(ItemStack p_270577_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isDiscoverable`, `isTradeable`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## Class Enchantment.Rarity

*enum* `net.minecraft.world.item.enchantment.Class Enchantment.Rarity`

Enclosing class: Enchantment

### Fields
- `private final int weight`

### Methods
- `public static Enchantment.Rarity[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Enchantment.Rarity valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getWeight()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class EnchantmentCategory

*enum* `net.minecraft.world.item.enchantment.Class EnchantmentCategory`

### Fields
- `private Predicate<Item> delegate`

### Methods
- `public static EnchantmentCategory[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static EnchantmentCategory valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static EnchantmentCategory create(String name,  Predicate<Item> delegate)`
- `public boolean canEnchant(Item p_44743_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Class ProtectionEnchantment.Type

*enum* `net.minecraft.world.item.enchantment.Class ProtectionEnchantment.Type`

Enclosing class: ProtectionEnchantment

### Fields
- `private final int minCost`
- `private final int levelCost`

### Methods
- `public static ProtectionEnchantment.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ProtectionEnchantment.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getMinCost()`
- `public int getLevelCost()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DamageEnchantment

*class* `net.minecraft.world.item.enchantment.DamageEnchantment`

### Fields
- `public static final int ALL` (= 0)
- `public static final int UNDEAD` (= 1)
- `public static final int ARTHROPODS` (= 2)
- `private static final String[] NAMES`
- `private static final int[] MIN_COST`
- `private static final int[] LEVEL_COST`
- `private static final int[] LEVEL_COST_SPAN`
- `public final int type`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44633_)`
- `public int getMaxCost(int p_44646_)`
- `public int getMaxLevel()`
- `public float getDamageBonus(int p_44635_,  MobType p_44636_)`
- `public boolean checkCompatibility(Enchantment p_44644_)`
- `public boolean canEnchant(ItemStack p_44642_)`
- `public void doPostAttack(LivingEntity p_44638_,  Entity p_44639_,  int p_44640_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `doPostHurt`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## DigDurabilityEnchantment

*class* `net.minecraft.world.item.enchantment.DigDurabilityEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44652_)`
- `public int getMaxCost(int p_44660_)`
- `public int getMaxLevel()`
- `public boolean canEnchant(ItemStack p_44654_)`
- `public static boolean shouldIgnoreDurabilityDrop(ItemStack p_220283_,  int p_220284_,  RandomSource p_220285_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## DiggingEnchantment

*class* `net.minecraft.world.item.enchantment.DiggingEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_44666_)`
- `public int getMaxCost(int p_44670_)`
- `public int getMaxLevel()`
- `public boolean canEnchant(ItemStack p_44668_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## Enchantment

*class* `net.minecraft.world.item.enchantment.Enchantment`

### Fields
- `private final EquipmentSlot[] slots`
- `private final Enchantment.Rarity rarity`
- `public final EnchantmentCategory category`
- `@Nullable protected String descriptionId`
- `private final Holder.Reference<Enchantment> builtInRegistryHolder`

### Methods
- `@Nullable public static Enchantment byId(int p_44698_)`
- `public Map<EquipmentSlot,ItemStack> getSlotItems(LivingEntity p_44685_)`
- `public Enchantment.Rarity getRarity()`
- `public int getMinLevel()`
- `public int getMaxLevel()`
- `public int getMinCost(int p_44679_)`
- `public int getMaxCost(int p_44691_)`
- `public int getDamageProtection(int p_44680_,  DamageSource p_44681_)`
- `@Deprecated public float getDamageBonus(int p_44682_,  MobType p_44683_)` (deprecated)
- `public final boolean isCompatibleWith(Enchantment p_44696_)`
- `protected boolean checkCompatibility(Enchantment p_44690_)`
- `protected String getOrCreateDescriptionId()`
- `public String getDescriptionId()`
- `public Component getFullname(int p_44701_)`
- `public boolean canEnchant(ItemStack p_44689_)`
- `public void doPostAttack(LivingEntity p_44686_,  Entity p_44687_,  int p_44688_)`
- `public void doPostHurt(LivingEntity p_44692_,  Entity p_44693_,  int p_44694_)`
- `public boolean isTreasureOnly()`
- `public boolean isCurse()`
- `public boolean isTradeable()`
- `public boolean isDiscoverable()`
- `public boolean canApplyAtEnchantingTable(ItemStack stack)`
  This applies specifically to applying at the enchanting table. The other method canEnchant(ItemStack)
   applies for all possible enchantments.
  - param: stack -
- `public boolean isAllowedOnBooks()`
  Is this enchantment allowed to be enchanted on books via Enchantment Table
  - returns: false to disable the vanilla feature
- `@Deprecated public Holder.Reference<Enchantment> builtInRegistryHolder()` (deprecated)

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## EnchantmentHelper

*class* `net.minecraft.world.item.enchantment.EnchantmentHelper`

### Fields
- `private static final String TAG_ENCH_ID` (= "id")
- `private static final String TAG_ENCH_LEVEL` (= "lvl")
- `private static final float SWIFT_SNEAK_EXTRA_FACTOR` (= 0.15000000596046448f)

### Methods
- `public static CompoundTag storeEnchantment(@Nullable  ResourceLocation p_182444_,  int p_182445_)`
- `public static void setEnchantmentLevel(CompoundTag p_182441_,  int p_182442_)`
- `public static int getEnchantmentLevel(CompoundTag p_182439_)`
- `@Nullable public static ResourceLocation getEnchantmentId(CompoundTag p_182447_)`
- `@Nullable public static ResourceLocation getEnchantmentId(Enchantment p_182433_)`
- `@Deprecated public static int getItemEnchantmentLevel(Enchantment p_44844_,  ItemStack p_44845_)` (deprecated)
- `public static int getTagEnchantmentLevel(Enchantment p_44844_,  ItemStack p_44845_)`
  Gets the enchantment level from NBT. Generally should use IForgeItemStack.getEnchantmentLevel(Enchantment) for gameplay logic
- `public static Map<Enchantment,Integer> getEnchantments(ItemStack p_44832_)`
- `public static Map<Enchantment,Integer> deserializeEnchantments(ListTag p_44883_)`
- `public static void setEnchantments(Map<Enchantment,Integer> p_44866_,  ItemStack p_44867_)`
- `private static void runIterationOnItem(EnchantmentHelper.EnchantmentVisitor p_44851_,  ItemStack p_44852_)`
- `private static void runIterationOnInventory(EnchantmentHelper.EnchantmentVisitor p_44854_,  Iterable<ItemStack> p_44855_)`
- `public static int getDamageProtection(Iterable<ItemStack> p_44857_,  DamageSource p_44858_)`
- `public static float getDamageBonus(ItemStack p_44834_,  MobType p_44835_)`
- `public static float getSweepingDamageRatio(LivingEntity p_44822_)`
- `public static void doPostHurtEffects(LivingEntity p_44824_,  Entity p_44825_)`
- `public static void doPostDamageEffects(LivingEntity p_44897_,  Entity p_44898_)`
- `public static int getEnchantmentLevel(Enchantment p_44837_,  LivingEntity p_44838_)`
- `public static float getSneakingSpeedBonus(LivingEntity p_220303_)`
- `public static int getKnockbackBonus(LivingEntity p_44895_)`
- `public static int getFireAspect(LivingEntity p_44915_)`
- `public static int getRespiration(LivingEntity p_44919_)`
- `public static int getDepthStrider(LivingEntity p_44923_)`
- `public static int getBlockEfficiency(LivingEntity p_44927_)`
- `public static int getFishingLuckBonus(ItemStack p_44905_)`
- `public static int getFishingSpeedBonus(ItemStack p_44917_)`
- `public static int getMobLooting(LivingEntity p_44931_)`
- `public static boolean hasAquaAffinity(LivingEntity p_44935_)`
- `public static boolean hasFrostWalker(LivingEntity p_44939_)`
- `public static boolean hasSoulSpeed(LivingEntity p_44943_)`
- `public static boolean hasBindingCurse(ItemStack p_44921_)`
- `public static boolean hasVanishingCurse(ItemStack p_44925_)`
- `public static boolean hasSilkTouch(ItemStack p_273444_)`
- `public static int getLoyalty(ItemStack p_44929_)`
- `public static int getRiptide(ItemStack p_44933_)`
- `public static boolean hasChanneling(ItemStack p_44937_)`
- `@Nullable public static Map.Entry<EquipmentSlot,ItemStack> getRandomItemWith(Enchantment p_44907_,  LivingEntity p_44908_)`
- `@Nullable public static Map.Entry<EquipmentSlot,ItemStack> getRandomItemWith(Enchantment p_44840_,  LivingEntity p_44841_,  Predicate<ItemStack> p_44842_)`
- `public static int getEnchantmentCost(RandomSource p_220288_,  int p_220289_,  int p_220290_,  ItemStack p_220291_)`
- `public static ItemStack enchantItem(RandomSource p_220293_,  ItemStack p_220294_,  int p_220295_,  boolean p_220296_)`
- `public static List<EnchantmentInstance> selectEnchantment(RandomSource p_220298_,  ItemStack p_220299_,  int p_220300_,  boolean p_220301_)`
- `public static void filterCompatibleEnchantments(List<EnchantmentInstance> p_44863_,  EnchantmentInstance p_44864_)`
- `public static boolean isEnchantmentCompatible(Collection<Enchantment> p_44860_,  Enchantment p_44861_)`
- `public static List<EnchantmentInstance> getAvailableEnchantmentResults(int p_44818_,  ItemStack p_44819_,  boolean p_44820_)`

## EnchantmentHelper.EnchantmentVisitor

*interface* `net.minecraft.world.item.enchantment.EnchantmentHelper.EnchantmentVisitor`

Enclosing class: EnchantmentHelper

### Methods
- `void accept(Enchantment p_44945_,  int p_44946_)`

## EnchantmentInstance

*class* `net.minecraft.world.item.enchantment.EnchantmentInstance`

### Fields
- `public final Enchantment enchantment`
- `public final int level`

### Inherited methods
- from `net.minecraft.util.random.WeightedEntry.IntrusiveBase`: `getWeight`

## Enchantments

*class* `net.minecraft.world.item.enchantment.Enchantments`

### Fields
- `private static final EquipmentSlot[] ARMOR_SLOTS`
- `public static final Enchantment ALL_DAMAGE_PROTECTION`
- `public static final Enchantment FIRE_PROTECTION`
- `public static final Enchantment FALL_PROTECTION`
- `public static final Enchantment BLAST_PROTECTION`
- `public static final Enchantment PROJECTILE_PROTECTION`
- `public static final Enchantment RESPIRATION`
- `public static final Enchantment AQUA_AFFINITY`
- `public static final Enchantment THORNS`
- `public static final Enchantment DEPTH_STRIDER`
- `public static final Enchantment FROST_WALKER`
- `public static final Enchantment BINDING_CURSE`
- `public static final Enchantment SOUL_SPEED`
- `public static final Enchantment SWIFT_SNEAK`
- `public static final Enchantment SHARPNESS`
- `public static final Enchantment SMITE`
- `public static final Enchantment BANE_OF_ARTHROPODS`
- `public static final Enchantment KNOCKBACK`
- `public static final Enchantment FIRE_ASPECT`
- `public static final Enchantment MOB_LOOTING`
- `public static final Enchantment SWEEPING_EDGE`
- `public static final Enchantment BLOCK_EFFICIENCY`
- `public static final Enchantment SILK_TOUCH`
- `public static final Enchantment UNBREAKING`
- `public static final Enchantment BLOCK_FORTUNE`
- `public static final Enchantment POWER_ARROWS`
- `public static final Enchantment PUNCH_ARROWS`
- `public static final Enchantment FLAMING_ARROWS`
- `public static final Enchantment INFINITY_ARROWS`
- `public static final Enchantment FISHING_LUCK`
- `public static final Enchantment FISHING_SPEED`
- `public static final Enchantment LOYALTY`
- `public static final Enchantment IMPALING`
- `public static final Enchantment RIPTIDE`
- `public static final Enchantment CHANNELING`
- `public static final Enchantment MULTISHOT`
- `public static final Enchantment QUICK_CHARGE`
- `public static final Enchantment PIERCING`
- `public static final Enchantment MENDING`
- `public static final Enchantment VANISHING_CURSE`

### Methods
- `private static Enchantment register(String p_44993_,  Enchantment p_44994_)`

## FireAspectEnchantment

*class* `net.minecraft.world.item.enchantment.FireAspectEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45000_)`
- `public int getMaxCost(int p_45002_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## FishingSpeedEnchantment

*class* `net.minecraft.world.item.enchantment.FishingSpeedEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45009_)`
- `public int getMaxCost(int p_45011_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## FrostWalkerEnchantment

*class* `net.minecraft.world.item.enchantment.FrostWalkerEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45017_)`
- `public int getMaxCost(int p_45027_)`
- `public boolean isTreasureOnly()`
- `public int getMaxLevel()`
- `public static void onEntityMoved(LivingEntity p_45019_,  Level p_45020_,  BlockPos p_45021_,  int p_45022_)`
- `public boolean checkCompatibility(Enchantment p_45024_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## KnockbackEnchantment

*class* `net.minecraft.world.item.enchantment.KnockbackEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45083_)`
- `public int getMaxCost(int p_45085_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## LootBonusEnchantment

*class* `net.minecraft.world.item.enchantment.LootBonusEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45092_)`
- `public int getMaxCost(int p_45096_)`
- `public int getMaxLevel()`
- `public boolean checkCompatibility(Enchantment p_45094_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## MendingEnchantment

*class* `net.minecraft.world.item.enchantment.MendingEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45102_)`
- `public int getMaxCost(int p_45105_)`
- `public boolean isTreasureOnly()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## MultiShotEnchantment

*class* `net.minecraft.world.item.enchantment.MultiShotEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45111_)`
- `public int getMaxCost(int p_45115_)`
- `public boolean checkCompatibility(Enchantment p_45113_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## OxygenEnchantment

*class* `net.minecraft.world.item.enchantment.OxygenEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45121_)`
- `public int getMaxCost(int p_45123_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## ProtectionEnchantment

*class* `net.minecraft.world.item.enchantment.ProtectionEnchantment`

### Fields
- `public final ProtectionEnchantment.Type type`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45131_)`
- `public int getMaxCost(int p_45144_)`
- `public int getMaxLevel()`
- `public int getDamageProtection(int p_45133_,  DamageSource p_45134_)`
- `public boolean checkCompatibility(Enchantment p_45142_)`
- `public static int getFireAfterDampener(LivingEntity p_45139_,  int p_45140_)`
- `public static double getExplosionKnockbackAfterDampener(LivingEntity p_45136_,  double p_45137_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## QuickChargeEnchantment

*class* `net.minecraft.world.item.enchantment.QuickChargeEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45171_)`
- `public int getMaxCost(int p_45173_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## SoulSpeedEnchantment

*class* `net.minecraft.world.item.enchantment.SoulSpeedEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45179_)`
- `public int getMaxCost(int p_45182_)`
- `public boolean isTreasureOnly()`
- `public boolean isTradeable()`
- `public boolean isDiscoverable()`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## SweepingEdgeEnchantment

*class* `net.minecraft.world.item.enchantment.SweepingEdgeEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45190_)`
- `public int getMaxCost(int p_45192_)`
- `public int getMaxLevel()`
- `public static float getSweepingDamageRatio(int p_45194_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## SwiftSneakEnchantment

*class* `net.minecraft.world.item.enchantment.SwiftSneakEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_220310_)`
- `public int getMaxCost(int p_220313_)`
- `public boolean isTreasureOnly()`
- `public boolean isTradeable()`
- `public boolean isDiscoverable()`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## ThornsEnchantment

*class* `net.minecraft.world.item.enchantment.ThornsEnchantment`

### Fields
- `private static final float CHANCE_PER_LEVEL` (= 0.15000000596046448f)

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45200_)`
- `public int getMaxCost(int p_45210_)`
- `public int getMaxLevel()`
- `public boolean canEnchant(ItemStack p_45205_)`
- `public void doPostHurt(LivingEntity p_45215_,  Entity p_45216_,  int p_45217_)`
- `public static boolean shouldHit(int p_220317_,  RandomSource p_220318_)`
- `public static int getDamage(int p_220320_,  RandomSource p_220321_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `checkCompatibility`, `doPostAttack`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## TridentChannelingEnchantment

*class* `net.minecraft.world.item.enchantment.TridentChannelingEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45223_)`
- `public int getMaxCost(int p_45227_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## TridentImpalerEnchantment

*class* `net.minecraft.world.item.enchantment.TridentImpalerEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45233_)`
- `public int getMaxCost(int p_45238_)`
- `public int getMaxLevel()`
- `public float getDamageBonus(int p_45235_,  MobType p_45236_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## TridentLoyaltyEnchantment

*class* `net.minecraft.world.item.enchantment.TridentLoyaltyEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45244_)`
- `public int getMaxCost(int p_45248_)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## TridentRiptideEnchantment

*class* `net.minecraft.world.item.enchantment.TridentRiptideEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45254_)`
- `public int getMaxCost(int p_45258_)`
- `public int getMaxLevel()`
- `public boolean checkCompatibility(Enchantment p_45256_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## UntouchingEnchantment

*class* `net.minecraft.world.item.enchantment.UntouchingEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45264_)`
- `public int getMaxCost(int p_45268_)`
- `public boolean checkCompatibility(Enchantment p_45266_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## VanishingCurseEnchantment

*class* `net.minecraft.world.item.enchantment.VanishingCurseEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45274_)`
- `public int getMaxCost(int p_45277_)`
- `public boolean isTreasureOnly()`
- `public boolean isCurse()`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isDiscoverable`, `isTradeable`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## WaterWalkerEnchantment

*class* `net.minecraft.world.item.enchantment.WaterWalkerEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45284_)`
- `public int getMaxCost(int p_45288_)`
- `public int getMaxLevel()`
- `public boolean checkCompatibility(Enchantment p_45286_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`

## WaterWorkerEnchantment

*class* `net.minecraft.world.item.enchantment.WaterWorkerEnchantment`

### Inherited fields
- from `net.minecraft.world.item.enchantment.Enchantment`: `category`, `descriptionId`

### Methods
- `public int getMinCost(int p_45294_)`
- `public int getMaxCost(int p_45296_)`

### Inherited methods
- from `net.minecraft.world.item.enchantment.Enchantment`: `builtInRegistryHolder`, `byId`, `canApplyAtEnchantingTable`, `canEnchant`, `checkCompatibility`, `doPostAttack`, `doPostHurt`, `getDamageBonus`, `getDamageProtection`, `getDescriptionId`, `getFullname`, `getMaxLevel`, `getMinLevel`, `getOrCreateDescriptionId`, `getRarity`, `getSlotItems`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isDiscoverable`, `isTradeable`, `isTreasureOnly`
- from `net.minecraftforge.common.extensions.IForgeEnchantment`: `allowedInCreativeTab`, `getDamageBonus`
