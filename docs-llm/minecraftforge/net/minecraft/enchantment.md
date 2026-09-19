# net.minecraft.enchantment

- [Enchantment](#enchantment)
- [Enchantment.Rarity](#enchantment.rarity)
- [EnchantmentArrowDamage](#enchantmentarrowdamage)
- [EnchantmentArrowFire](#enchantmentarrowfire)
- [EnchantmentArrowInfinite](#enchantmentarrowinfinite)
- [EnchantmentArrowKnockback](#enchantmentarrowknockback)
- [EnchantmentBindingCurse](#enchantmentbindingcurse)
- [EnchantmentDamage](#enchantmentdamage)
- [EnchantmentData](#enchantmentdata)
- [EnchantmentDigging](#enchantmentdigging)
- [EnchantmentDurability](#enchantmentdurability)
- [EnchantmentFireAspect](#enchantmentfireaspect)
- [EnchantmentFishingSpeed](#enchantmentfishingspeed)
- [EnchantmentFrostWalker](#enchantmentfrostwalker)
- [EnchantmentHelper](#enchantmenthelper)
- [EnchantmentKnockback](#enchantmentknockback)
- [EnchantmentLootBonus](#enchantmentlootbonus)
- [EnchantmentMending](#enchantmentmending)
- [EnchantmentOxygen](#enchantmentoxygen)
- [EnchantmentProtection](#enchantmentprotection)
- [EnchantmentProtection.Type](#enchantmentprotection.type)
- [EnchantmentSweepingEdge](#enchantmentsweepingedge)
- [EnchantmentThorns](#enchantmentthorns)
- [EnchantmentUntouching](#enchantmentuntouching)
- [EnchantmentVanishingCurse](#enchantmentvanishingcurse)
- [EnchantmentWaterWalker](#enchantmentwaterwalker)
- [EnchantmentWaterWorker](#enchantmentwaterworker)
- [EnumEnchantmentType](#enumenchantmenttype)
## Enchantment

*class* `net.minecraft.enchantment.Enchantment`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Fields
- `public static final RegistryNamespaced<ResourceLocation,Enchantment> REGISTRY`
- `public EnumEnchantmentType type`
- `protected java.lang.String name`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static Enchantment getEnchantmentByID(int id)`
- `public static int getEnchantmentID(Enchantment enchantmentIn)`
- `public static Enchantment getEnchantmentByLocation(java.lang.String location)`
- `public java.util.List<ItemStack> getEntityEquipment(EntityLivingBase entityIn)`
- `public Enchantment.Rarity getRarity()`
- `public int getMinLevel()`
- `public int getMaxLevel()`
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int calcModifierDamage(int level,  DamageSource source)`
- `public float calcDamageByCreature(int level,  EnumCreatureAttribute creatureType)`
- `public final boolean isCompatibleWith(Enchantment p_191560_1_)`
- `protected boolean canApplyTogether(Enchantment ench)`
- `public Enchantment setName(java.lang.String enchName)`
- `public java.lang.String getName()`
- `public java.lang.String getTranslatedName(int level)`
- `public boolean canApply(ItemStack stack)`
- `public void onEntityDamaged(EntityLivingBase user,  Entity target,  int level)`
- `public void onUserHurt(EntityLivingBase user,  Entity attacker,  int level)`
- `public boolean isTreasureEnchantment()`
- `public boolean isCurse()`
- `public boolean canApplyAtEnchantingTable(ItemStack stack)`
  This applies specifically to applying at the enchanting table. The other method canApply(ItemStack)
   applies for all possible enchantments.
  - param: stack -
- `public boolean isAllowedOnBooks()`
  Is this enchantment allowed to be enchanted on books via Enchantment Table
  - returns: false to disable the vanilla feature
- `public static void registerEnchantments()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## Enchantment.Rarity

*enum* `net.minecraft.enchantment.Enchantment.Rarity`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Enchantment.Rarity>

Enclosing class: Enchantment

### Fields
- `public static final Enchantment.Rarity COMMON`
- `public static final Enchantment.Rarity UNCOMMON`
- `public static final Enchantment.Rarity RARE`
- `public static final Enchantment.Rarity VERY_RARE`

### Methods
- `public static Enchantment.Rarity[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Enchantment.Rarity c : Enchantment.Rarity.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Enchantment.Rarity valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getWeight()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnchantmentArrowDamage

*class* `net.minecraft.enchantment.EnchantmentArrowDamage`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentArrowFire

*class* `net.minecraft.enchantment.EnchantmentArrowFire`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentArrowInfinite

*class* `net.minecraft.enchantment.EnchantmentArrowInfinite`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean canApplyTogether(Enchantment ench)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentArrowKnockback

*class* `net.minecraft.enchantment.EnchantmentArrowKnockback`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentBindingCurse

*class* `net.minecraft.enchantment.EnchantmentBindingCurse`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean isTreasureEnchantment()`
- `public boolean isCurse()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentDamage

*class* `net.minecraft.enchantment.EnchantmentDamage`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Fields
- `public final int damageType`

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public float calcDamageByCreature(int level,  EnumCreatureAttribute creatureType)`
- `public java.lang.String getName()`
- `public boolean canApplyTogether(Enchantment ench)`
- `public boolean canApply(ItemStack stack)`
- `public void onEntityDamaged(EntityLivingBase user,  Entity target,  int level)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcModifierDamage`, `canApplyAtEnchantingTable`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentData

*class* `net.minecraft.enchantment.EnchantmentData`

### Fields
- `public final Enchantment enchantment`
- `public final int enchantmentLevel`

### Inherited fields
- from `net.minecraft.util.WeightedRandom.Item`: `itemWeight`

## EnchantmentDigging

*class* `net.minecraft.enchantment.EnchantmentDigging`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean canApply(ItemStack stack)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentDurability

*class* `net.minecraft.enchantment.EnchantmentDurability`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean canApply(ItemStack stack)`
- `public static boolean negateDamage(ItemStack stack,  int level,  java.util.Random rand)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentFireAspect

*class* `net.minecraft.enchantment.EnchantmentFireAspect`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentFishingSpeed

*class* `net.minecraft.enchantment.EnchantmentFishingSpeed`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentFrostWalker

*class* `net.minecraft.enchantment.EnchantmentFrostWalker`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public boolean isTreasureEnchantment()`
- `public int getMaxLevel()`
- `public static void freezeNearby(EntityLivingBase living,  World worldIn,  BlockPos pos,  int level)`
- `public boolean canApplyTogether(Enchantment ench)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentHelper

*class* `net.minecraft.enchantment.EnchantmentHelper`

### Methods
- `public static int getEnchantmentLevel(Enchantment enchID,  ItemStack stack)`
- `public static java.util.Map<Enchantment,java.lang.Integer> getEnchantments(ItemStack stack)`
- `public static void setEnchantments(java.util.Map<Enchantment,java.lang.Integer> enchMap,  ItemStack stack)`
- `public static int getEnchantmentModifierDamage(java.lang.Iterable<ItemStack> stacks,  DamageSource source)`
- `public static float getModifierForCreature(ItemStack stack,  EnumCreatureAttribute creatureAttribute)`
- `public static float getSweepingDamageRatio(EntityLivingBase p_191527_0_)`
- `public static void applyThornEnchantments(EntityLivingBase p_151384_0_,  Entity p_151384_1_)`
- `public static void applyArthropodEnchantments(EntityLivingBase p_151385_0_,  Entity p_151385_1_)`
- `public static int getMaxEnchantmentLevel(Enchantment p_185284_0_,  EntityLivingBase p_185284_1_)`
- `public static int getKnockbackModifier(EntityLivingBase player)`
- `public static int getFireAspectModifier(EntityLivingBase player)`
- `public static int getRespirationModifier(EntityLivingBase p_185292_0_)`
- `public static int getDepthStriderModifier(EntityLivingBase p_185294_0_)`
- `public static int getEfficiencyModifier(EntityLivingBase p_185293_0_)`
- `public static int getFishingLuckBonus(ItemStack p_191529_0_)`
- `public static int getFishingSpeedBonus(ItemStack p_191528_0_)`
- `public static int getLootingModifier(EntityLivingBase p_185283_0_)`
- `public static boolean getAquaAffinityModifier(EntityLivingBase p_185287_0_)`
- `public static boolean hasFrostWalkerEnchantment(EntityLivingBase player)`
- `public static boolean hasBindingCurse(ItemStack p_190938_0_)`
- `public static boolean hasVanishingCurse(ItemStack p_190939_0_)`
- `public static ItemStack getEnchantedItem(Enchantment p_92099_0_,  EntityLivingBase p_92099_1_)`
- `public static int calcItemStackEnchantability(java.util.Random rand,  int enchantNum,  int power,  ItemStack stack)`
- `public static ItemStack addRandomEnchantment(java.util.Random random,  ItemStack stack,  int level,  boolean allowTreasure)`
- `public static java.util.List<EnchantmentData> buildEnchantmentList(java.util.Random randomIn,  ItemStack itemStackIn,  int level,  boolean allowTreasure)`
- `public static void removeIncompatible(java.util.List<EnchantmentData> p_185282_0_,  EnchantmentData p_185282_1_)`
- `public static java.util.List<EnchantmentData> getEnchantmentDatas(int p_185291_0_,  ItemStack p_185291_1_,  boolean allowTreasure)`

## EnchantmentKnockback

*class* `net.minecraft.enchantment.EnchantmentKnockback`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentLootBonus

*class* `net.minecraft.enchantment.EnchantmentLootBonus`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean canApplyTogether(Enchantment ench)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentMending

*class* `net.minecraft.enchantment.EnchantmentMending`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public boolean isTreasureEnchantment()`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentOxygen

*class* `net.minecraft.enchantment.EnchantmentOxygen`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentProtection

*class* `net.minecraft.enchantment.EnchantmentProtection`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Fields
- `public final EnchantmentProtection.Type protectionType`

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public int calcModifierDamage(int level,  DamageSource source)`
- `public java.lang.String getName()`
- `public boolean canApplyTogether(Enchantment ench)`
- `public static int getFireTimeForEntity(EntityLivingBase p_92093_0_,  int p_92093_1_)`
- `public static double getBlastDamageReduction(EntityLivingBase entityLivingBaseIn,  double damage)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `canApply`, `canApplyAtEnchantingTable`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentProtection.Type

*enum* `net.minecraft.enchantment.EnchantmentProtection.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnchantmentProtection.Type>

Enclosing class: EnchantmentProtection

### Fields
- `public static final EnchantmentProtection.Type ALL`
- `public static final EnchantmentProtection.Type FIRE`
- `public static final EnchantmentProtection.Type FALL`
- `public static final EnchantmentProtection.Type EXPLOSION`
- `public static final EnchantmentProtection.Type PROJECTILE`

### Methods
- `public static EnchantmentProtection.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnchantmentProtection.Type c : EnchantmentProtection.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnchantmentProtection.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getTypeName()`
- `public int getMinimalEnchantability()`
- `public int getEnchantIncreasePerLevel()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnchantmentSweepingEdge

*class* `net.minecraft.enchantment.EnchantmentSweepingEdge`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public static float getSweepingDamageRatio(int p_191526_0_)`
- `public java.lang.String getName()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentThorns

*class* `net.minecraft.enchantment.EnchantmentThorns`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean canApply(ItemStack stack)`
- `public void onUserHurt(EntityLivingBase user,  Entity attacker,  int level)`
- `public static boolean shouldHit(int level,  java.util.Random rnd)`
- `public static int getDamage(int level,  java.util.Random rnd)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentUntouching

*class* `net.minecraft.enchantment.EnchantmentUntouching`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean canApplyTogether(Enchantment ench)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentVanishingCurse

*class* `net.minecraft.enchantment.EnchantmentVanishingCurse`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean isTreasureEnchantment()`
- `public boolean isCurse()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentWaterWalker

*class* `net.minecraft.enchantment.EnchantmentWaterWalker`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`
- `public boolean canApplyTogether(Enchantment ench)`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnchantmentWaterWorker

*class* `net.minecraft.enchantment.EnchantmentWaterWorker`

All Implemented Interfaces: IForgeRegistryEntry<Enchantment>

### Inherited fields
- from `net.minecraft.enchantment.Enchantment`: `name`, `REGISTRY`, `type`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMinEnchantability(int enchantmentLevel)`
- `public int getMaxEnchantability(int enchantmentLevel)`
- `public int getMaxLevel()`

### Inherited methods
- from `net.minecraft.enchantment.Enchantment`: `calcDamageByCreature`, `calcModifierDamage`, `canApply`, `canApplyAtEnchantingTable`, `canApplyTogether`, `getEnchantmentByID`, `getEnchantmentByLocation`, `getEnchantmentID`, `getEntityEquipment`, `getMinLevel`, `getName`, `getRarity`, `getTranslatedName`, `isAllowedOnBooks`, `isCompatibleWith`, `isCurse`, `isTreasureEnchantment`, `onEntityDamaged`, `onUserHurt`, `registerEnchantments`, `setName`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## EnumEnchantmentType

*enum* `net.minecraft.enchantment.EnumEnchantmentType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumEnchantmentType>

### Fields
- `public static final EnumEnchantmentType ALL`
- `public static final EnumEnchantmentType ARMOR`
- `public static final EnumEnchantmentType ARMOR_FEET`
- `public static final EnumEnchantmentType ARMOR_LEGS`
- `public static final EnumEnchantmentType ARMOR_CHEST`
- `public static final EnumEnchantmentType ARMOR_HEAD`
- `public static final EnumEnchantmentType WEAPON`
- `public static final EnumEnchantmentType DIGGER`
- `public static final EnumEnchantmentType FISHING_ROD`
- `public static final EnumEnchantmentType BREAKABLE`
- `public static final EnumEnchantmentType BOW`
- `public static final EnumEnchantmentType WEARABLE`

### Methods
- `public static EnumEnchantmentType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumEnchantmentType c : EnumEnchantmentType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumEnchantmentType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean canEnchantItem(Item itemIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
