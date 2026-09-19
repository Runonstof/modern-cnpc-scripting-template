# net.minecraft.world.item

- [AdventureModeCheck](#adventuremodecheck)
- [AirItem](#airitem)
- [ArmorItem](#armoritem)
- [ArmorMaterial](#armormaterial)
- [ArmorStandItem](#armorstanditem)
- [ArrowItem](#arrowitem)
- [AxeItem](#axeitem)
- [BannerItem](#banneritem)
- [BannerPatternItem](#bannerpatternitem)
- [BedItem](#beditem)
- [BlockItem](#blockitem)
- [BoatItem](#boatitem)
- [BoneMealItem](#bonemealitem)
- [BookItem](#bookitem)
- [BottleItem](#bottleitem)
- [BowItem](#bowitem)
- [BowlFoodItem](#bowlfooditem)
- [BrushItem](#brushitem)
- [BrushItem.DustParticlesDelta](#brushitem.dustparticlesdelta)
- [BucketItem](#bucketitem)
- [BundleItem](#bundleitem)
- [ChorusFruitItem](#chorusfruititem)
- [Class ArmorItem.Type](#class-armoritem.type)
- [Class ArmorMaterials](#class-armormaterials)
- [Class CreativeModeTab.Row](#class-creativemodetab.row)
- [Class CreativeModeTab.TabVisibility](#class-creativemodetab.tabvisibility)
- [Class CreativeModeTab.Type](#class-creativemodetab.type)
- [Class DyeColor](#class-dyecolor)
- [Class FireworkRocketItem.Shape](#class-fireworkrocketitem.shape)
- [Class ItemDisplayContext](#class-itemdisplaycontext)
- [Class ItemStack.TooltipPart](#class-itemstack.tooltippart)
- [Class Rarity](#class-rarity)
- [Class Tiers](#class-tiers)
- [Class UseAnim](#class-useanim)
- [CompassItem](#compassitem)
- [ComplexItem](#complexitem)
- [CreativeModeTab](#creativemodetab)
- [CreativeModeTab.Builder](#creativemodetab.builder)
- [CreativeModeTab.DisplayItemsGenerator](#creativemodetab.displayitemsgenerator)
- [CreativeModeTab.ItemDisplayBuilder](#creativemodetab.itemdisplaybuilder)
- [CreativeModeTab.ItemDisplayParameters](#creativemodetab.itemdisplayparameters)
- [CreativeModeTab.Output](#creativemodetab.output)
- [CreativeModeTabs](#creativemodetabs)
- [CrossbowItem](#crossbowitem)
- [DebugStickItem](#debugstickitem)
- [DiggerItem](#diggeritem)
- [DiscFragmentItem](#discfragmentitem)
- [DispensibleContainerItem](#dispensiblecontaineritem)
- [DoubleHighBlockItem](#doublehighblockitem)
- [DyeableArmorItem](#dyeablearmoritem)
- [DyeableHorseArmorItem](#dyeablehorsearmoritem)
- [DyeableLeatherItem](#dyeableleatheritem)
- [DyeItem](#dyeitem)
- [EggItem](#eggitem)
- [ElytraItem](#elytraitem)
- [EmptyMapItem](#emptymapitem)
- [EnchantedBookItem](#enchantedbookitem)
- [EnchantedGoldenAppleItem](#enchantedgoldenappleitem)
- [EndCrystalItem](#endcrystalitem)
- [EnderEyeItem](#endereyeitem)
- [EnderpearlItem](#enderpearlitem)
- [Equipable](#equipable)
- [ExperienceBottleItem](#experiencebottleitem)
- [FireChargeItem](#firechargeitem)
- [FireworkRocketItem](#fireworkrocketitem)
- [FireworkStarItem](#fireworkstaritem)
- [FishingRodItem](#fishingroditem)
- [FlintAndSteelItem](#flintandsteelitem)
- [FoodOnAStickItem](#foodonastickitem)
- [GameMasterBlockItem](#gamemasterblockitem)
- [GlowInkSacItem](#glowinksacitem)
- [HangingEntityItem](#hangingentityitem)
- [HangingSignItem](#hangingsignitem)
- [HoeItem](#hoeitem)
- [HoneyBottleItem](#honeybottleitem)
- [HoneycombItem](#honeycombitem)
- [HorseArmorItem](#horsearmoritem)
- [InkSacItem](#inksacitem)
- [Instrument](#instrument)
- [InstrumentItem](#instrumentitem)
- [Instruments](#instruments)
- [Item](#item)
- [Item.Properties](#item.properties)
- [ItemCooldowns](#itemcooldowns)
- [ItemCooldowns.CooldownInstance](#itemcooldowns.cooldowninstance)
- [ItemFrameItem](#itemframeitem)
- [ItemNameBlockItem](#itemnameblockitem)
- [Items](#items)
- [ItemStack](#itemstack)
- [ItemStackLinkedSet](#itemstacklinkedset)
- [ItemUtils](#itemutils)
- [KnowledgeBookItem](#knowledgebookitem)
- [LeadItem](#leaditem)
- [LingeringPotionItem](#lingeringpotionitem)
- [MapItem](#mapitem)
- [MilkBucketItem](#milkbucketitem)
- [MinecartItem](#minecartitem)
- [MobBucketItem](#mobbucketitem)
- [NameTagItem](#nametagitem)
- [PickaxeItem](#pickaxeitem)
- [PlaceOnWaterBlockItem](#placeonwaterblockitem)
- [PlayerHeadItem](#playerheaditem)
- [PotionItem](#potionitem)
- [ProjectileWeaponItem](#projectileweaponitem)
- [RecordItem](#recorditem)
- [SaddleItem](#saddleitem)
- [ScaffoldingBlockItem](#scaffoldingblockitem)
- [ServerItemCooldowns](#serveritemcooldowns)
- [ShearsItem](#shearsitem)
- [ShieldItem](#shielditem)
- [ShovelItem](#shovelitem)
- [SignApplicator](#signapplicator)
- [SignItem](#signitem)
- [SimpleFoiledItem](#simplefoileditem)
- [SmithingTemplateItem](#smithingtemplateitem)
- [SnowballItem](#snowballitem)
- [SolidBucketItem](#solidbucketitem)
- [SpawnEggItem](#spawneggitem)
- [SpectralArrowItem](#spectralarrowitem)
- [SplashPotionItem](#splashpotionitem)
- [SpyglassItem](#spyglassitem)
- [StandingAndWallBlockItem](#standingandwallblockitem)
- [SuspiciousStewItem](#suspiciousstewitem)
- [SwordItem](#sworditem)
- [ThrowablePotionItem](#throwablepotionitem)
- [Tier](#tier)
- [TieredItem](#tiereditem)
- [TippedArrowItem](#tippedarrowitem)
- [TooltipFlag](#tooltipflag)
- [TooltipFlag.Default](#tooltipflag.default)
- [TridentItem](#tridentitem)
- [Vanishable](#vanishable)
- [WritableBookItem](#writablebookitem)
- [WrittenBookItem](#writtenbookitem)
## AdventureModeCheck

*class* `net.minecraft.world.item.AdventureModeCheck`

### Fields
- `private final String tagName`
- `@Nullable private BlockInWorld lastCheckedBlock`
- `private boolean lastResult`
- `private boolean checksBlockEntity`

### Methods
- `private static boolean areSameBlocks(BlockInWorld p_186333_,  @Nullable  BlockInWorld p_186334_,  boolean p_186335_)`
- `public boolean test(ItemStack p_204086_,  Registry<Block> p_204087_,  BlockInWorld p_204088_)`

## AirItem

*class* `net.minecraft.world.item.AirItem`

### Fields
- `private final Block block`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public String getDescriptionId()`
- `public void appendHoverText(ItemStack p_40372_,  @Nullable  Level p_40373_,  List<Component> p_40374_,  TooltipFlag p_40375_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ArmorItem

*class* `net.minecraft.world.item.ArmorItem`

### Fields
- `private static final EnumMap<ArmorItem.Type,UUID> ARMOR_MODIFIER_UUID_PER_TYPE`
- `public static final DispenseItemBehavior DISPENSE_ITEM_BEHAVIOR`
- `protected final ArmorItem.Type type`
- `private final int defense`
- `private final float toughness`
- `protected final float knockbackResistance`
- `protected final ArmorMaterial material`
- `private final com.google.common.collect.Multimap<Attribute,AttributeModifier> defaultModifiers`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static boolean dispenseArmor(BlockSource p_40399_,  ItemStack p_40400_)`
- `public ArmorItem.Type getType()`
- `public int getEnchantmentValue()`
  Description copied from class: Item
  Forge: Use ItemStack sensitive version.
- `public ArmorMaterial getMaterial()`
- `public boolean isValidRepairItem(ItemStack p_40392_,  ItemStack p_40393_)`
- `public InteractionResultHolder<ItemStack> use(Level p_40395_,  Player p_40396_,  InteractionHand p_40397_)`
- `public com.google.common.collect.Multimap<Attribute,AttributeModifier> getDefaultAttributeModifiers(EquipmentSlot p_40390_)`
- `public int getDefense()`
- `public float getToughness()`
- `public EquipmentSlot getEquipmentSlot()`
- `public SoundEvent getEquipSound()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.item.Equipable`: `swapWithEquipmentSlot`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ArmorMaterial

*interface* `net.minecraft.world.item.ArmorMaterial`

### Methods
- `int getDurabilityForType(ArmorItem.Type p_266807_)`
- `int getDefenseForType(ArmorItem.Type p_267168_)`
- `int getEnchantmentValue()`
- `SoundEvent getEquipSound()`
- `Ingredient getRepairIngredient()`
- `String getName()`
- `float getToughness()`
- `float getKnockbackResistance()`

## ArmorStandItem

*class* `net.minecraft.world.item.ArmorStandItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_40510_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ArrowItem

*class* `net.minecraft.world.item.ArrowItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public AbstractArrow createArrow(Level p_40513_,  ItemStack p_40514_,  LivingEntity p_40515_)`
- `public boolean isInfinite(ItemStack stack,  ItemStack bow,  Player player)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## AxeItem

*class* `net.minecraft.world.item.AxeItem`

### Fields
- `protected static final Map<Block,Block> STRIPPABLES`

### Inherited fields
- from `net.minecraft.world.item.DiggerItem`: `speed`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_40529_)`
- `@Nullable public static @Nullable BlockState getAxeStrippingState(BlockState originalState)`
- `private Optional<BlockState> getStripped(BlockState p_150691_)`
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action

### Inherited methods
- from `net.minecraft.world.item.DiggerItem`: `getAttackDamage`, `getDefaultAttributeModifiers`, `getDestroySpeed`, `hurtEnemy`, `isCorrectToolForDrops`, `isCorrectToolForDrops`, `mineBlock`
- from `net.minecraft.world.item.TieredItem`: `getEnchantmentValue`, `getTier`, `isValidRepairItem`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BannerItem

*class* `net.minecraft.world.item.BannerItem`

### Fields
- `private static final String PATTERN_PREFIX` (= "block.minecraft.banner.")

### Inherited fields
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `wallBlock`
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static void appendHoverTextFromBannerBlockEntityTag(ItemStack p_40543_,  List<Component> p_40544_)`
- `public DyeColor getColor()`
- `public void appendHoverText(ItemStack p_40538_,  @Nullable  Level p_40539_,  List<Component> p_40540_,  TooltipFlag p_40541_)`

### Inherited methods
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `canPlace`, `getPlacementState`, `registerBlocks`, `removeFromBlockToItemMap`
- from `net.minecraft.world.item.BlockItem`: `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BannerPatternItem

*class* `net.minecraft.world.item.BannerPatternItem`

### Fields
- `private final TagKey<BannerPattern> bannerPattern`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public TagKey<BannerPattern> getBannerPattern()`
- `public void appendHoverText(ItemStack p_40551_,  @Nullable  Level p_40552_,  List<Component> p_40553_,  TooltipFlag p_40554_)`
- `public MutableComponent getDisplayName()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BedItem

*class* `net.minecraft.world.item.BedItem`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `protected boolean placeBlock(BlockPlaceContext p_40561_,  BlockState p_40562_)`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlacementState`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `registerBlocks`, `removeFromBlockToItemMap`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BlockItem

*class* `net.minecraft.world.item.BlockItem`

### Fields
- `public static final String BLOCK_ENTITY_TAG` (= "BlockEntityTag")
- `public static final String BLOCK_STATE_TAG` (= "BlockStateTag")
- `@Deprecated private final Block block` (deprecated)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_40581_)`
- `public InteractionResult place(BlockPlaceContext p_40577_)`
- `@Deprecated protected SoundEvent getPlaceSound(BlockState p_40588_)` (deprecated)
- `protected SoundEvent getPlaceSound(BlockState state,  Level world,  BlockPos pos,  Player entity)`
- `@Nullable public BlockPlaceContext updatePlacementContext(BlockPlaceContext p_40609_)`
- `protected boolean updateCustomBlockEntityTag(BlockPos p_40597_,  Level p_40598_,  @Nullable  Player p_40599_,  ItemStack p_40600_,  BlockState p_40601_)`
- `@Nullable protected BlockState getPlacementState(BlockPlaceContext p_40613_)`
- `private BlockState updateBlockStateFromTag(BlockPos p_40603_,  Level p_40604_,  ItemStack p_40605_,  BlockState p_40606_)`
- `private static <T extends Comparable<T>> BlockState updateState(BlockState p_40594_,  Property<T> p_40595_,  String p_40596_)`
- `protected boolean canPlace(BlockPlaceContext p_40611_,  BlockState p_40612_)`
- `protected boolean mustSurvive()`
- `protected boolean placeBlock(BlockPlaceContext p_40578_,  BlockState p_40579_)`
- `public static boolean updateCustomBlockEntityTag(Level p_40583_,  @Nullable  Player p_40584_,  BlockPos p_40585_,  ItemStack p_40586_)`
- `public String getDescriptionId()`
- `public void appendHoverText(ItemStack p_40572_,  @Nullable  Level p_40573_,  List<Component> p_40574_,  TooltipFlag p_40575_)`
- `public Block getBlock()`
- `private Block getBlockRaw()`
- `public void registerBlocks(Map<Block,Item> p_40607_,  Item p_40608_)`
- `public void removeFromBlockToItemMap(Map<Block,Item> blockToItemMap,  Item itemIn)`
- `public boolean canFitInsideContainerItems()`
- `public void onDestroyed(ItemEntity p_150700_)`
- `@Nullable public static CompoundTag getBlockEntityData(ItemStack p_186337_)`
- `public static void setBlockEntityData(ItemStack p_186339_,  BlockEntityType<?> p_186340_,  CompoundTag p_186341_)`
- `public FeatureFlagSet requiredFeatures()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BoatItem

*class* `net.minecraft.world.item.BoatItem`

### Fields
- `private static final Predicate<Entity> ENTITY_PREDICATE`
- `private final Boat.Type type`
- `private final boolean hasChest`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_40622_,  Player p_40623_,  InteractionHand p_40624_)`
- `private Boat getBoat(Level p_220017_,  HitResult p_220018_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BoneMealItem

*class* `net.minecraft.world.item.BoneMealItem`

### Fields
- `public static final int GRASS_SPREAD_WIDTH` (= 3)
- `public static final int GRASS_SPREAD_HEIGHT` (= 1)
- `public static final int GRASS_COUNT_MULTIPLIER` (= 3)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_40637_)`
- `@Deprecated public static boolean growCrop(ItemStack p_40628_,  Level p_40629_,  BlockPos p_40630_)` (deprecated)
- `public static boolean applyBonemeal(ItemStack p_40628_,  Level p_40629_,  BlockPos p_40630_,  Player player)`
- `public static boolean growWaterPlant(ItemStack p_40632_,  Level p_40633_,  BlockPos p_40634_,  @Nullable  Direction p_40635_)`
- `public static void addGrowthParticles(LevelAccessor p_40639_,  BlockPos p_40640_,  int p_40641_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BookItem

*class* `net.minecraft.world.item.BookItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean isEnchantable(ItemStack p_40646_)`
- `public int getEnchantmentValue()`
  Description copied from class: Item
  Forge: Use ItemStack sensitive version.

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BottleItem

*class* `net.minecraft.world.item.BottleItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_40656_,  Player p_40657_,  InteractionHand p_40658_)`
- `protected ItemStack turnBottleIntoItem(ItemStack p_40652_,  Player p_40653_,  ItemStack p_40654_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BowItem

*class* `net.minecraft.world.item.BowItem`

### Fields
- `public static final int MAX_DRAW_DURATION` (= 20)
- `public static final int DEFAULT_RANGE` (= 15)

### Inherited fields
- from `net.minecraft.world.item.ProjectileWeaponItem`: `ARROW_ONLY`, `ARROW_OR_FIREWORK`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public void releaseUsing(ItemStack p_40667_,  Level p_40668_,  LivingEntity p_40669_,  int p_40670_)`
- `public static float getPowerForTime(int p_40662_)`
- `public int getUseDuration(ItemStack p_40680_)`
- `public UseAnim getUseAnimation(ItemStack p_40678_)`
- `public InteractionResultHolder<ItemStack> use(Level p_40672_,  Player p_40673_,  InteractionHand p_40674_)`
- `public Predicate<ItemStack> getAllSupportedProjectiles()`
- `public AbstractArrow customArrow(AbstractArrow arrow)`
- `public int getDefaultProjectileRange()`

### Inherited methods
- from `net.minecraft.world.item.ProjectileWeaponItem`: `getEnchantmentValue`, `getHeldProjectile`, `getSupportedHeldProjectiles`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BowlFoodItem

*class* `net.minecraft.world.item.BowlFoodItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ItemStack finishUsingItem(ItemStack p_40684_,  Level p_40685_,  LivingEntity p_40686_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BrushItem

*class* `net.minecraft.world.item.BrushItem`

### Fields
- `public static final int ANIMATION_DURATION` (= 10)
- `private static final int USE_DURATION` (= 200)
- `private static final double MAX_BRUSH_DISTANCE`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_272607_)`
- `public UseAnim getUseAnimation(ItemStack p_273490_)`
- `public int getUseDuration(ItemStack p_272765_)`
- `public void onUseTick(Level p_273467_,  LivingEntity p_273619_,  ItemStack p_273316_,  int p_273101_)`
- `private HitResult calculateHitResult(LivingEntity p_281264_)`
- `private void spawnDustParticles(Level p_278327_,  BlockHitResult p_278272_,  BlockState p_278235_,  Vec3 p_278337_,  HumanoidArm p_285071_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BrushItem.DustParticlesDelta

*record* `net.minecraft.world.item.BrushItem.DustParticlesDelta`

Enclosing class: BrushItem

### Fields
- `private final double xd`
  The field for the xd record component.
- `private final double yd`
  The field for the yd record component.
- `private final double zd`
  The field for the zd record component.
- `private static final double ALONG_SIDE_DELTA` (= 1.0)
- `private static final double OUT_FROM_SIDE_DELTA` (= 0.1)

### Methods
- `public static BrushItem.DustParticlesDelta fromDirection(Vec3 p_273421_,  Direction p_272987_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public double xd()`
  Returns the value of the xd record component.
  - returns: the value of the xd record component
- `public double yd()`
  Returns the value of the yd record component.
  - returns: the value of the yd record component
- `public double zd()`
  Returns the value of the zd record component.
  - returns: the value of the zd record component

## BucketItem

*class* `net.minecraft.world.item.BucketItem`

### Fields
- `private final Fluid content`
- `private final Supplier<? extends Fluid> fluidSupplier`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_40703_,  Player p_40704_,  InteractionHand p_40705_)`
- `public static ItemStack getEmptySuccessItem(ItemStack p_40700_,  Player p_40701_)`
- `public void checkExtraContent(@Nullable  Player p_150711_,  Level p_150712_,  ItemStack p_150713_,  BlockPos p_150714_)`
- `@Deprecated public boolean emptyContents(@Nullable  Player p_150716_,  Level p_150717_,  BlockPos p_150718_,  @Nullable  BlockHitResult p_150719_)` (deprecated)
- `public boolean emptyContents(@Nullable  Player p_150716_,  Level p_150717_,  BlockPos p_150718_,  @Nullable  BlockHitResult p_150719_,  @Nullable  ItemStack container)`
  Description copied from interface: IForgeDispensibleContainerItem
  Empties the contents of the container and returns whether it was successful.
  - param: p_150716_ - Player who empties the container. May be null for blocks like dispensers.
  - param: p_150717_ - Level to place the content in
  - param: p_150718_ - The position in the level to empty the content
  - param: p_150719_ - Hit result of the interaction. May be null for blocks like dispensers.
  - param: container - ItemStack of the container. May be null for backwards compatibility.
  - returns: true if emptying the contents of the container was successful, false otherwise
- `protected void playEmptySound(@Nullable  Player p_40696_,  LevelAccessor p_40697_,  BlockPos p_40698_)`
- `public ICapabilityProvider initCapabilities(ItemStack stack,  @Nullable  CompoundTag nbt)`
  Description copied from interface: IForgeItem
  Called from ItemStack.setItem, will hold extra data for the life of this
   ItemStack. Can be retrieved from stack.getCapabilities() The NBT can be null
   if this is not called from readNBT or if the item the stack is changing FROM
   is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem()
   to see the OLD item. Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold
 capabilities for the life of this item.
- `public Fluid getFluid()`
- `protected boolean canBlockContainFluid(Level worldIn,  BlockPos posIn,  BlockState blockstate)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## BundleItem

*class* `net.minecraft.world.item.BundleItem`

### Fields
- `private static final String TAG_ITEMS` (= "Items")
- `public static final int MAX_WEIGHT` (= 64)
- `private static final int BUNDLE_IN_BUNDLE_WEIGHT` (= 4)
- `private static final int BAR_COLOR`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static float getFullnessDisplay(ItemStack p_150767_)`
- `public boolean overrideStackedOnOther(ItemStack p_150733_,  Slot p_150734_,  ClickAction p_150735_,  Player p_150736_)`
- `public boolean overrideOtherStackedOnMe(ItemStack p_150742_,  ItemStack p_150743_,  Slot p_150744_,  ClickAction p_150745_,  Player p_150746_,  SlotAccess p_150747_)`
- `public InteractionResultHolder<ItemStack> use(Level p_150760_,  Player p_150761_,  InteractionHand p_150762_)`
- `public boolean isBarVisible(ItemStack p_150769_)`
- `public int getBarWidth(ItemStack p_150771_)`
- `public int getBarColor(ItemStack p_150773_)`
- `private static int add(ItemStack p_150764_,  ItemStack p_150765_)`
- `private static Optional<CompoundTag> getMatchingItem(ItemStack p_150757_,  ListTag p_150758_)`
- `private static int getWeight(ItemStack p_150777_)`
- `private static int getContentWeight(ItemStack p_150779_)`
- `private static Optional<ItemStack> removeOne(ItemStack p_150781_)`
- `private static boolean dropContents(ItemStack p_150730_,  Player p_150731_)`
- `private static Stream<ItemStack> getContents(ItemStack p_150783_)`
- `public Optional<TooltipComponent> getTooltipImage(ItemStack p_150775_)`
- `public void appendHoverText(ItemStack p_150749_,  Level p_150750_,  List<Component> p_150751_,  TooltipFlag p_150752_)`
- `public void onDestroyed(ItemEntity p_150728_)`
- `private void playRemoveOneSound(Entity p_186343_)`
- `private void playInsertSound(Entity p_186352_)`
- `private void playDropContentsSound(Entity p_186354_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ChorusFruitItem

*class* `net.minecraft.world.item.ChorusFruitItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ItemStack finishUsingItem(ItemStack p_40712_,  Level p_40713_,  LivingEntity p_40714_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## Class ArmorItem.Type

*enum* `net.minecraft.world.item.Class ArmorItem.Type`

Enclosing class: ArmorItem

### Fields
- `private final EquipmentSlot slot`
- `private final String name`

### Methods
- `public static ArmorItem.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ArmorItem.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public EquipmentSlot getSlot()`
- `public String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ArmorMaterials

*enum* `net.minecraft.world.item.Class ArmorMaterials`

### Fields
- `public static final StringRepresentable.EnumCodec<ArmorMaterials> CODEC`
- `private static final EnumMap<ArmorItem.Type,Integer> HEALTH_FUNCTION_FOR_TYPE`
- `private final String name`
- `private final int durabilityMultiplier`
- `private final EnumMap<ArmorItem.Type,Integer> protectionFunctionForType`
- `private final int enchantmentValue`
- `private final SoundEvent sound`
- `private final float toughness`
- `private final float knockbackResistance`
- `private final LazyLoadedValue<Ingredient> repairIngredient`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ArmorMaterials[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ArmorMaterials valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getDurabilityForType(ArmorItem.Type p_266745_)`
- `public int getDefenseForType(ArmorItem.Type p_266752_)`
- `public int getEnchantmentValue()`
- `public SoundEvent getEquipSound()`
- `public Ingredient getRepairIngredient()`
- `public String getName()`
- `public float getToughness()`
- `public float getKnockbackResistance()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class CreativeModeTab.Row

*enum* `net.minecraft.world.item.Class CreativeModeTab.Row`

Enclosing class: CreativeModeTab

### Methods
- `public static CreativeModeTab.Row[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CreativeModeTab.Row valueOf(String name)`
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

## Class CreativeModeTab.TabVisibility

*enum* `net.minecraft.world.item.Class CreativeModeTab.TabVisibility`

Enclosing class: CreativeModeTab

### Methods
- `public static CreativeModeTab.TabVisibility[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CreativeModeTab.TabVisibility valueOf(String name)`
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

## Class CreativeModeTab.Type

*enum* `net.minecraft.world.item.Class CreativeModeTab.Type`

Enclosing class: CreativeModeTab

### Methods
- `public static CreativeModeTab.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CreativeModeTab.Type valueOf(String name)`
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

## Class DyeColor

*enum* `net.minecraft.world.item.Class DyeColor`

### Fields
- `private static final IntFunction<DyeColor> BY_ID`
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap<DyeColor> BY_FIREWORK_COLOR`
- `public static final StringRepresentable.EnumCodec<DyeColor> CODEC`
- `private final int id`
- `private final String name`
- `private final MapColor mapColor`
- `private final float[] textureDiffuseColors`
- `private final int fireworkColor`
- `private final TagKey<Item> tag`
- `private final int textColor`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DyeColor[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DyeColor valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public String getName()`
- `public float[] getTextureDiffuseColors()`
- `public MapColor getMapColor()`
- `public int getFireworkColor()`
- `public int getTextColor()`
- `public static DyeColor byId(int p_41054_)`
- `@Nullable @Contract("_,!null->!null;_,null->_") public static DyeColor byName(String p_41058_,  @Nullable  DyeColor p_41059_)`
- `@Nullable public static DyeColor byFireworkColor(int p_41062_)`
- `public String toString()`
- `public String getSerializedName()`
- `public TagKey<Item> getTag()`
- `@Nullable public static DyeColor getColor(ItemStack stack)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class FireworkRocketItem.Shape

*enum* `net.minecraft.world.item.Class FireworkRocketItem.Shape`

Enclosing class: FireworkRocketItem

### Fields
- `private static final IntFunction<FireworkRocketItem.Shape> BY_ID`
- `private final int id`
- `private final String name`

### Methods
- `public static FireworkRocketItem.Shape[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FireworkRocketItem.Shape valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public String getName()`
- `public void save(CompoundTag tag)`
- `@Deprecated public static FireworkRocketItem.Shape byId(int p_41238_)` (deprecated)
  Use {getShape(ComoundTag)}
- `public static FireworkRocketItem.Shape getShape(CompoundTag tag)`
- `public static FireworkRocketItem.Shape create(String registryName,  int id,  String shapeName)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Class ItemDisplayContext

*enum* `net.minecraft.world.item.Class ItemDisplayContext`

### Fields
- `public static final com.mojang.serialization.Codec<ItemDisplayContext> CODEC`
- `public static final IntFunction<ItemDisplayContext> BY_ID`
- `private byte id`
- `private final String name`
- `private final boolean isModded`
- `@Nullable private final ItemDisplayContext fallback`
- `public static final IForgeRegistry.AddCallback<ItemDisplayContext> ADD_CALLBACK`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ItemDisplayContext[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ItemDisplayContext valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public byte getId()`
- `public boolean firstPerson()`
- `public boolean isModded()`
- `@Nullable public ItemDisplayContext fallback()`
- `public static ItemDisplayContext create(String keyName,  ResourceLocation serializedName,  @Nullable  ItemDisplayContext fallback)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Class ItemStack.TooltipPart

*enum* `net.minecraft.world.item.Class ItemStack.TooltipPart`

Enclosing class: ItemStack

### Fields
- `private final int mask`

### Methods
- `public static ItemStack.TooltipPart[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ItemStack.TooltipPart valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getMask()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Rarity

*enum* `net.minecraft.world.item.Class Rarity`

### Fields
- `@Deprecated public final ChatFormatting color` (deprecated)
- `private final UnaryOperator<Style> styleModifier`

### Methods
- `public static Rarity[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Rarity valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public UnaryOperator<Style> getStyleModifier()`
- `public static Rarity create(String name,  ChatFormatting p_43028_)`
- `public static Rarity create(String name,  UnaryOperator<Style> styleModifier)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Class Tiers

*enum* `net.minecraft.world.item.Class Tiers`

### Fields
- `private final int level`
- `private final int uses`
- `private final float speed`
- `private final float damage`
- `private final int enchantmentValue`
- `private final LazyLoadedValue<Ingredient> repairIngredient`

### Methods
- `public static Tiers[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Tiers valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getUses()`
- `public float getSpeed()`
- `public float getAttackDamageBonus()`
- `public int getLevel()`
- `public int getEnchantmentValue()`
- `public Ingredient getRepairIngredient()`
- `@Nullable public TagKey<Block> getTag()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class UseAnim

*enum* `net.minecraft.world.item.Class UseAnim`

### Methods
- `public static UseAnim[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static UseAnim valueOf(String name)`
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

## CompassItem

*class* `net.minecraft.world.item.CompassItem`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String TAG_LODESTONE_POS` (= "LodestonePos")
- `public static final String TAG_LODESTONE_DIMENSION` (= "LodestoneDimension")
- `public static final String TAG_LODESTONE_TRACKED` (= "LodestoneTracked")

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static boolean isLodestoneCompass(ItemStack p_40737_)`
- `private static Optional<ResourceKey<Level>> getLodestoneDimension(CompoundTag p_40728_)`
- `@Nullable public static GlobalPos getLodestonePosition(CompoundTag p_220022_)`
- `@Nullable public static GlobalPos getSpawnPosition(Level p_220020_)`
- `public boolean isFoil(ItemStack p_40739_)`
- `public void inventoryTick(ItemStack p_40720_,  Level p_40721_,  Entity p_40722_,  int p_40723_,  boolean p_40724_)`
- `public InteractionResult useOn(UseOnContext p_40726_)`
- `private void addLodestoneTags(ResourceKey<Level> p_40733_,  BlockPos p_40734_,  CompoundTag p_40735_)`
- `public String getDescriptionId(ItemStack p_40741_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ComplexItem

*class* `net.minecraft.world.item.ComplexItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean isComplex()`
- `@Nullable public Packet<?> getUpdatePacket(ItemStack p_40744_,  Level p_40745_,  Player p_40746_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## CreativeModeTab

*class* `net.minecraft.world.item.CreativeModeTab`

### Fields
- `private final Component displayName`
- `String backgroundSuffix`
- `boolean canScroll`
- `boolean showTitle`
- `boolean alignedRight`
- `private final CreativeModeTab.Row row`
- `private final int column`
- `private final CreativeModeTab.Type type`
- `@Nullable private ItemStack iconItemStack`
- `private Collection<ItemStack> displayItems`
- `private Set<ItemStack> displayItemsSearchTab`
- `@Nullable private Consumer<List<ItemStack>> searchTreeBuilder`
- `private final Supplier<ItemStack> iconGenerator`
- `private final CreativeModeTab.DisplayItemsGenerator displayItemsGenerator`
- `private ResourceLocation backgroundLocation`
- `private final boolean hasSearchBar`
- `private final int searchBarWidth`
- `private final int labelColor`
- `private final int slotColor`
- `public final List<ResourceLocation> tabsBefore`
- `public final List<ResourceLocation> tabsAfter`

### Methods
- `public static CreativeModeTab.Builder builder()`
- `@Deprecated public static CreativeModeTab.Builder builder(CreativeModeTab.Row p_259342_,  int p_260312_)` (deprecated)
- `public Component getDisplayName()`
- `public ItemStack getIconItem()`
- `@Deprecated public String getBackgroundSuffix()` (deprecated)
  Forge: Use getBackgroundLocation() instead.
- `public boolean showTitle()`
- `public boolean canScroll()`
- `public int column()`
- `public CreativeModeTab.Row row()`
- `public boolean hasAnyItems()`
- `public boolean shouldDisplay()`
- `public boolean isAlignedRight()`
- `public CreativeModeTab.Type getType()`
- `public void buildContents(CreativeModeTab.ItemDisplayParameters p_270156_)`
- `public Collection<ItemStack> getDisplayItems()`
- `public Collection<ItemStack> getSearchTabDisplayItems()`
- `public boolean contains(ItemStack p_259317_)`
- `public void setSearchTreeBuilder(Consumer<List<ItemStack>> p_259669_)`
- `public void rebuildSearchTree()`
- `public ResourceLocation getBackgroundLocation()`
- `public boolean hasSearchBar()`
- `public int getSearchBarWidth()`
- `public int getLabelColor()`
- `public int getSlotColor()`

## CreativeModeTab.Builder

*class* `net.minecraft.world.item.CreativeModeTab.Builder`

Enclosing class: CreativeModeTab

### Fields
- `private static final CreativeModeTab.DisplayItemsGenerator EMPTY_GENERATOR`
- `private final CreativeModeTab.Row row`
- `private final int column`
- `private Component displayName`
- `private Supplier<ItemStack> iconGenerator`
- `private CreativeModeTab.DisplayItemsGenerator displayItemsGenerator`
- `private boolean canScroll`
- `private boolean showTitle`
- `private boolean alignedRight`
- `private CreativeModeTab.Type type`
- `private String backgroundSuffix`
- `@Nullable private ResourceLocation backgroundLocation`
- `private boolean hasSearchBar`
- `private int searchBarWidth`
- `private int labelColor`
- `private int slotColor`
- `private Function<CreativeModeTab.Builder,CreativeModeTab> tabFactory`
- `private final List<ResourceLocation> tabsBefore`
- `private final List<ResourceLocation> tabsAfter`

### Methods
- `public CreativeModeTab.Builder title(Component p_259616_)`
- `public CreativeModeTab.Builder icon(Supplier<ItemStack> p_259333_)`
- `public CreativeModeTab.Builder displayItems(CreativeModeTab.DisplayItemsGenerator p_259814_)`
- `public CreativeModeTab.Builder alignedRight()`
- `public CreativeModeTab.Builder hideTitle()`
- `public CreativeModeTab.Builder noScrollBar()`
- `protected CreativeModeTab.Builder type(CreativeModeTab.Type p_259283_)`
- `public CreativeModeTab.Builder backgroundSuffix(String p_259981_)`
- `public CreativeModeTab.Builder withBackgroundLocation(ResourceLocation background)`
  Sets the location of the tab background.
- `public CreativeModeTab.Builder withSearchBar()`
  Gives this tab a search bar.
   Note that, if using a custom background image, you will need to make sure that your image contains the input box and the scroll bar.
- `public CreativeModeTab.Builder withSearchBar(int searchBarWidth)`
  Gives this tab a search bar, with a specific width.
  - param: searchBarWidth - the width of the search bar
- `public CreativeModeTab.Builder withLabelColor(int labelColor)`
  Sets the color of the tab label.
- `public CreativeModeTab.Builder withSlotColor(int slotColor)`
  Sets the color of tab's slots.
- `public CreativeModeTab.Builder withTabFactory(Function<CreativeModeTab.Builder,CreativeModeTab> tabFactory)`
- `public CreativeModeTab.Builder withTabsBefore(ResourceLocation... tabs)`
  Define tabs that should come before this tab. This tab will be placed after the tabs.
- `public CreativeModeTab.Builder withTabsAfter(ResourceLocation... tabs)`
  Define tabs that should come after this tab. This tab will be placed before the tabs.
- `@SafeVarargs public final CreativeModeTab.Builder withTabsBefore(ResourceKey<CreativeModeTab>... tabs)`
  Define tabs that should come before this tab. This tab will be placed after the tabs.
- `@SafeVarargs public final CreativeModeTab.Builder withTabsAfter(ResourceKey<CreativeModeTab>... tabs)`
  Define tabs that should come after this tab. This tab will be placed before the tabs.
- `public CreativeModeTab build()`

## CreativeModeTab.DisplayItemsGenerator

*interface* `net.minecraft.world.item.CreativeModeTab.DisplayItemsGenerator`

Enclosing class: CreativeModeTab

### Methods
- `void accept(CreativeModeTab.ItemDisplayParameters p_270258_,  CreativeModeTab.Output p_259752_)`

## CreativeModeTab.ItemDisplayBuilder

*class* `net.minecraft.world.item.CreativeModeTab.ItemDisplayBuilder`

Enclosing class: CreativeModeTab

### Fields
- `public final Collection<ItemStack> tabContents`
- `public final Set<ItemStack> searchTabContents`
- `private final CreativeModeTab tab`
- `private final FeatureFlagSet featureFlagSet`

### Methods
- `public void accept(ItemStack p_250391_,  CreativeModeTab.TabVisibility p_251472_)`

### Inherited methods
- from `net.minecraft.world.item.CreativeModeTab.Output`: `accept`, `accept`, `accept`, `acceptAll`, `acceptAll`

## CreativeModeTab.ItemDisplayParameters

*record* `net.minecraft.world.item.CreativeModeTab.ItemDisplayParameters`

Enclosing class: CreativeModeTab

### Fields
- `private final FeatureFlagSet enabledFeatures`
  The field for the enabledFeatures record component.
- `private final boolean hasPermissions`
  The field for the hasPermissions record component.
- `private final HolderLookup.Provider holders`
  The field for the holders record component.

### Methods
- `public boolean needsUpdate(FeatureFlagSet p_270338_,  boolean p_270835_,  HolderLookup.Provider p_270575_)`
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
- `public FeatureFlagSet enabledFeatures()`
  Returns the value of the enabledFeatures record component.
  - returns: the value of the enabledFeatures record component
- `public boolean hasPermissions()`
  Returns the value of the hasPermissions record component.
  - returns: the value of the hasPermissions record component
- `public HolderLookup.Provider holders()`
  Returns the value of the holders record component.
  - returns: the value of the holders record component

## CreativeModeTab.Output

*interface* `net.minecraft.world.item.CreativeModeTab.Output`

Enclosing class: CreativeModeTab

### Methods
- `void accept(ItemStack p_251806_,  CreativeModeTab.TabVisibility p_249603_)`
- `default void accept(ItemStack p_249977_)`
- `default void accept(ItemLike p_251528_,  CreativeModeTab.TabVisibility p_249821_)`
- `default void accept(ItemLike p_248610_)`
- `default void acceptAll(Collection<ItemStack> p_251548_,  CreativeModeTab.TabVisibility p_252285_)`
- `default void acceptAll(Collection<ItemStack> p_250244_)`

## CreativeModeTabs

*class* `net.minecraft.world.item.CreativeModeTabs`

### Fields
- `public static final ResourceKey<CreativeModeTab> BUILDING_BLOCKS`
- `public static final ResourceKey<CreativeModeTab> COLORED_BLOCKS`
- `public static final ResourceKey<CreativeModeTab> NATURAL_BLOCKS`
- `public static final ResourceKey<CreativeModeTab> FUNCTIONAL_BLOCKS`
- `public static final ResourceKey<CreativeModeTab> REDSTONE_BLOCKS`
- `public static final ResourceKey<CreativeModeTab> HOTBAR`
- `public static final ResourceKey<CreativeModeTab> SEARCH`
- `public static final ResourceKey<CreativeModeTab> TOOLS_AND_UTILITIES`
- `public static final ResourceKey<CreativeModeTab> COMBAT`
- `public static final ResourceKey<CreativeModeTab> FOOD_AND_DRINKS`
- `public static final ResourceKey<CreativeModeTab> INGREDIENTS`
- `public static final ResourceKey<CreativeModeTab> SPAWN_EGGS`
- `public static final ResourceKey<CreativeModeTab> OP_BLOCKS`
- `public static final ResourceKey<CreativeModeTab> INVENTORY`
- `private static final Comparator<Holder<PaintingVariant>> PAINTING_COMPARATOR`
- `@Nullable private static CreativeModeTab.ItemDisplayParameters CACHED_PARAMETERS`

### Methods
- `private static ResourceKey<CreativeModeTab> createKey(String p_281544_)`
- `public static CreativeModeTab bootstrap(Registry<CreativeModeTab> p_283144_)`
- `public static void validate()`
- `public static CreativeModeTab getDefaultTab()`
- `private static void generatePotionEffectTypes(CreativeModeTab.Output p_270129_,  HolderLookup<Potion> p_270334_,  Item p_270968_,  CreativeModeTab.TabVisibility p_270778_)`
- `private static void generateEnchantmentBookTypesOnlyMaxLevel(CreativeModeTab.Output p_270868_,  HolderLookup<Enchantment> p_270903_,  Set<EnchantmentCategory> p_270380_,  CreativeModeTab.TabVisibility p_270407_)`
- `private static void generateEnchantmentBookTypesAllLevels(CreativeModeTab.Output p_270961_,  HolderLookup<Enchantment> p_270628_,  Set<EnchantmentCategory> p_271024_,  CreativeModeTab.TabVisibility p_270805_)`
- `private static void generateInstrumentTypes(CreativeModeTab.Output p_270699_,  HolderLookup<Instrument> p_270948_,  Item p_270421_,  TagKey<Instrument> p_270798_,  CreativeModeTab.TabVisibility p_270817_)`
- `private static void generateSuspiciousStews(CreativeModeTab.Output p_259484_,  CreativeModeTab.TabVisibility p_260051_)`
- `private static void generateFireworksAllDurations(CreativeModeTab.Output p_259586_,  CreativeModeTab.TabVisibility p_259372_)`
- `private static void generatePresetPaintings(CreativeModeTab.Output p_271007_,  HolderLookup.RegistryLookup<PaintingVariant> p_270618_,  Predicate<Holder<PaintingVariant>> p_270878_,  CreativeModeTab.TabVisibility p_270261_)`
- `public static List<CreativeModeTab> tabs()`
- `public static List<CreativeModeTab> allTabs()`
- `private static Stream<CreativeModeTab> streamAllTabs()`
- `public static CreativeModeTab searchTab()`
- `private static void buildAllTabContents(CreativeModeTab.ItemDisplayParameters p_270447_)`
- `public static boolean tryRebuildTabContents(FeatureFlagSet p_270988_,  boolean p_270090_,  HolderLookup.Provider p_270799_)`

## CrossbowItem

*class* `net.minecraft.world.item.CrossbowItem`

### Fields
- `private static final String TAG_CHARGED` (= "Charged")
- `private static final String TAG_CHARGED_PROJECTILES` (= "ChargedProjectiles")
- `private static final int MAX_CHARGE_DURATION` (= 25)
- `public static final int DEFAULT_RANGE` (= 8)
- `private boolean startSoundPlayed`
- `private boolean midLoadSoundPlayed`
- `private static final float START_SOUND_PERCENT` (= 0.20000000298023224f)
- `private static final float MID_SOUND_PERCENT` (= 0.5f)
- `private static final float ARROW_POWER` (= 3.1500000953674316f)
- `private static final float FIREWORK_POWER` (= 1.600000023841858f)

### Inherited fields
- from `net.minecraft.world.item.ProjectileWeaponItem`: `ARROW_ONLY`, `ARROW_OR_FIREWORK`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public Predicate<ItemStack> getSupportedHeldProjectiles()`
- `public Predicate<ItemStack> getAllSupportedProjectiles()`
- `public InteractionResultHolder<ItemStack> use(Level p_40920_,  Player p_40921_,  InteractionHand p_40922_)`
- `private static float getShootingPower(ItemStack p_40946_)`
- `public void releaseUsing(ItemStack p_40875_,  Level p_40876_,  LivingEntity p_40877_,  int p_40878_)`
- `private static boolean tryLoadProjectiles(LivingEntity p_40860_,  ItemStack p_40861_)`
- `private static boolean loadProjectile(LivingEntity p_40863_,  ItemStack p_40864_,  ItemStack p_40865_,  boolean p_40866_,  boolean p_40867_)`
- `public static boolean isCharged(ItemStack p_40933_)`
- `public static void setCharged(ItemStack p_40885_,  boolean p_40886_)`
- `private static void addChargedProjectile(ItemStack p_40929_,  ItemStack p_40930_)`
- `private static List<ItemStack> getChargedProjectiles(ItemStack p_40942_)`
- `private static void clearChargedProjectiles(ItemStack p_40944_)`
- `public static boolean containsChargedProjectile(ItemStack p_40872_,  Item p_40873_)`
- `private static void shootProjectile(Level p_40895_,  LivingEntity p_40896_,  InteractionHand p_40897_,  ItemStack p_40898_,  ItemStack p_40899_,  float p_40900_,  boolean p_40901_,  float p_40902_,  float p_40903_,  float p_40904_)`
- `private static AbstractArrow getArrow(Level p_40915_,  LivingEntity p_40916_,  ItemStack p_40917_,  ItemStack p_40918_)`
- `public static void performShooting(Level p_40888_,  LivingEntity p_40889_,  InteractionHand p_40890_,  ItemStack p_40891_,  float p_40892_,  float p_40893_)`
- `private static float[] getShotPitches(RandomSource p_220024_)`
- `private static float getRandomShotPitch(boolean p_220026_,  RandomSource p_220027_)`
- `private static void onCrossbowShot(Level p_40906_,  LivingEntity p_40907_,  ItemStack p_40908_)`
- `public void onUseTick(Level p_40910_,  LivingEntity p_40911_,  ItemStack p_40912_,  int p_40913_)`
- `public int getUseDuration(ItemStack p_40938_)`
- `public static int getChargeDuration(ItemStack p_40940_)`
- `public UseAnim getUseAnimation(ItemStack p_40935_)`
- `private SoundEvent getStartSound(int p_40852_)`
- `private static float getPowerForTime(int p_40854_,  ItemStack p_40855_)`
- `public void appendHoverText(ItemStack p_40880_,  @Nullable  Level p_40881_,  List<Component> p_40882_,  TooltipFlag p_40883_)`
- `public boolean useOnRelease(ItemStack p_150801_)`
- `public int getDefaultProjectileRange()`

### Inherited methods
- from `net.minecraft.world.item.ProjectileWeaponItem`: `getEnchantmentValue`, `getHeldProjectile`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## DebugStickItem

*class* `net.minecraft.world.item.DebugStickItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean isFoil(ItemStack p_40978_)`
- `public boolean canAttackBlock(BlockState p_40962_,  Level p_40963_,  BlockPos p_40964_,  Player p_40965_)`
- `public InteractionResult useOn(UseOnContext p_40960_)`
- `private boolean handleInteraction(Player p_150803_,  BlockState p_150804_,  LevelAccessor p_150805_,  BlockPos p_150806_,  boolean p_150807_,  ItemStack p_150808_)`
- `private static <T extends Comparable<T>> BlockState cycleState(BlockState p_40970_,  Property<T> p_40971_,  boolean p_40972_)`
- `private static <T> T getRelative(Iterable<T> p_40974_,  @Nullable  T p_40975_,  boolean p_40976_)`
- `private static void message(Player p_40957_,  Component p_40958_)`
- `private static <T extends Comparable<T>> String getNameHelper(BlockState p_40967_,  Property<T> p_40968_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## DiggerItem

*class* `net.minecraft.world.item.DiggerItem`

### Fields
- `private final TagKey<Block> blocks`
- `protected final float speed`
- `private final float attackDamageBaseline`
- `private final com.google.common.collect.Multimap<Attribute,AttributeModifier> defaultModifiers`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public float getDestroySpeed(ItemStack p_41004_,  BlockState p_41005_)`
- `public boolean hurtEnemy(ItemStack p_40994_,  LivingEntity p_40995_,  LivingEntity p_40996_)`
- `public boolean mineBlock(ItemStack p_40998_,  Level p_40999_,  BlockState p_41000_,  BlockPos p_41001_,  LivingEntity p_41002_)`
- `public com.google.common.collect.Multimap<Attribute,AttributeModifier> getDefaultAttributeModifiers(EquipmentSlot p_40990_)`
- `public float getAttackDamage()`
- `@Deprecated public boolean isCorrectToolForDrops(BlockState p_150816_)` (deprecated)
- `public boolean isCorrectToolForDrops(ItemStack stack,  BlockState state)`
  Description copied from interface: IForgeItem
  ItemStack sensitive version of Item.isCorrectToolForDrops(BlockState)
  - param: stack - The itemstack used to harvest the block
  - param: state - The block trying to harvest
  - returns: true if the stack can harvest the block

### Inherited methods
- from `net.minecraft.world.item.TieredItem`: `getEnchantmentValue`, `getTier`, `isValidRepairItem`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## DiscFragmentItem

*class* `net.minecraft.world.item.DiscFragmentItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public void appendHoverText(ItemStack p_220031_,  @Nullable  Level p_220032_,  List<Component> p_220033_,  TooltipFlag p_220034_)`
- `public MutableComponent getDisplayName()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## DispensibleContainerItem

*interface* `net.minecraft.world.item.DispensibleContainerItem`

All Superinterfaces: IForgeDispensibleContainerItem

### Methods
- `default void checkExtraContent(@Nullable  Player p_150817_,  Level p_150818_,  ItemStack p_150819_,  BlockPos p_150820_)`
- `@Deprecated boolean emptyContents(@Nullable  Player p_150821_,  Level p_150822_,  BlockPos p_150823_,  @Nullable  BlockHitResult p_150824_)` (deprecated)

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeDispensibleContainerItem`: `emptyContents`

## DoubleHighBlockItem

*class* `net.minecraft.world.item.DoubleHighBlockItem`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `protected boolean placeBlock(BlockPlaceContext p_41013_,  BlockState p_41014_)`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlacementState`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `registerBlocks`, `removeFromBlockToItemMap`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## DyeableArmorItem

*class* `net.minecraft.world.item.DyeableArmorItem`

### Inherited fields
- from `net.minecraft.world.item.ArmorItem`: `DISPENSE_ITEM_BEHAVIOR`, `knockbackResistance`, `material`, `type`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.item.DyeableLeatherItem`: `DEFAULT_LEATHER_COLOR`, `TAG_COLOR`, `TAG_DISPLAY`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Inherited methods
- from `net.minecraft.world.item.ArmorItem`: `dispenseArmor`, `getDefaultAttributeModifiers`, `getDefense`, `getEnchantmentValue`, `getEquipmentSlot`, `getEquipSound`, `getMaterial`, `getToughness`, `getType`, `isValidRepairItem`, `use`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.item.DyeableLeatherItem`: `clearColor`, `getColor`, `hasCustomColor`, `setColor`
- from `net.minecraft.world.item.Equipable`: `swapWithEquipmentSlot`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## DyeableHorseArmorItem

*class* `net.minecraft.world.item.DyeableHorseArmorItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.item.DyeableLeatherItem`: `DEFAULT_LEATHER_COLOR`, `TAG_COLOR`, `TAG_DISPLAY`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Inherited methods
- from `net.minecraft.world.item.HorseArmorItem`: `getProtection`, `getTexture`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.item.DyeableLeatherItem`: `clearColor`, `getColor`, `hasCustomColor`, `setColor`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## DyeableLeatherItem

*interface* `net.minecraft.world.item.DyeableLeatherItem`

### Fields
- `static final String TAG_COLOR` (= "color")
- `static final String TAG_DISPLAY` (= "display")
- `static final int DEFAULT_LEATHER_COLOR` (= 10511680)

### Methods
- `default boolean hasCustomColor(ItemStack p_41114_)`
- `default int getColor(ItemStack p_41122_)`
- `default void clearColor(ItemStack p_41124_)`
- `default void setColor(ItemStack p_41116_,  int p_41117_)`
- `static ItemStack dyeArmor(ItemStack p_41119_,  List<DyeItem> p_41120_)`

## DyeItem

*class* `net.minecraft.world.item.DyeItem`

### Fields
- `private static final Map<DyeColor,DyeItem> ITEM_BY_COLOR`
- `private final DyeColor dyeColor`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult interactLivingEntity(ItemStack p_41085_,  Player p_41086_,  LivingEntity p_41087_,  InteractionHand p_41088_)`
- `public DyeColor getDyeColor()`
- `public static DyeItem byColor(DyeColor p_41083_)`
- `public boolean tryApplyToSign(Level p_277691_,  SignBlockEntity p_277488_,  boolean p_277951_,  Player p_277932_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`
- from `net.minecraft.world.item.SignApplicator`: `canApplyToSign`

## EggItem

*class* `net.minecraft.world.item.EggItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_41128_,  Player p_41129_,  InteractionHand p_41130_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ElytraItem

*class* `net.minecraft.world.item.ElytraItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static boolean isFlyEnabled(ItemStack p_41141_)`
- `public boolean isValidRepairItem(ItemStack p_41134_,  ItemStack p_41135_)`
- `public InteractionResultHolder<ItemStack> use(Level p_41137_,  Player p_41138_,  InteractionHand p_41139_)`
- `public boolean canElytraFly(ItemStack stack,  LivingEntity entity)`
  Description copied from interface: IForgeItem
  Used to determine if the player can use Elytra flight.
   This is called Client and Server side.
  - param: stack - The ItemStack in the Chest slot of the entity.
  - param: entity - The entity trying to fly.
  - returns: True if the entity can use Elytra flight.
- `public boolean elytraFlightTick(ItemStack stack,  LivingEntity entity,  int flightTicks)`
  Description copied from interface: IForgeItem
  Used to determine if the player can continue Elytra flight,
   this is called each tick, and can be used to apply ItemStack damage,
   consume Energy, or what have you.
   For example the Vanilla implementation of this, applies damage to the
   ItemStack every 20 ticks.
  - param: stack - ItemStack in the Chest slot of the entity.
  - param: entity - The entity currently in Elytra flight.
  - param: flightTicks - The number of ticks the entity has been Elytra flying for.
  - returns: True if the entity should continue Elytra flight or False to stop.
- `public SoundEvent getEquipSound()`
- `public EquipmentSlot getEquipmentSlot()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.item.Equipable`: `swapWithEquipmentSlot`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## EmptyMapItem

*class* `net.minecraft.world.item.EmptyMapItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_41145_,  Player p_41146_,  InteractionHand p_41147_)`

### Inherited methods
- from `net.minecraft.world.item.ComplexItem`: `getUpdatePacket`, `isComplex`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## EnchantedBookItem

*class* `net.minecraft.world.item.EnchantedBookItem`

### Fields
- `public static final String TAG_STORED_ENCHANTMENTS` (= "StoredEnchantments")

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean isFoil(ItemStack p_41166_)`
- `public boolean isEnchantable(ItemStack p_41168_)`
- `public static ListTag getEnchantments(ItemStack p_41164_)`
- `public void appendHoverText(ItemStack p_41157_,  @Nullable  Level p_41158_,  List<Component> p_41159_,  TooltipFlag p_41160_)`
- `public static void addEnchantment(ItemStack p_41154_,  EnchantmentInstance p_41155_)`
- `public static ItemStack createForEnchantment(EnchantmentInstance p_41162_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## EnchantedGoldenAppleItem

*class* `net.minecraft.world.item.EnchantedGoldenAppleItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean isFoil(ItemStack p_41172_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## EndCrystalItem

*class* `net.minecraft.world.item.EndCrystalItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_41176_)`
- `public boolean isFoil(ItemStack p_41178_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## EnderEyeItem

*class* `net.minecraft.world.item.EnderEyeItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_41182_)`
- `public InteractionResultHolder<ItemStack> use(Level p_41184_,  Player p_41185_,  InteractionHand p_41186_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## EnderpearlItem

*class* `net.minecraft.world.item.EnderpearlItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_41190_,  Player p_41191_,  InteractionHand p_41192_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## Equipable

*interface* `net.minecraft.world.item.Equipable`

All Superinterfaces: Vanishable

### Methods
- `EquipmentSlot getEquipmentSlot()`
- `default SoundEvent getEquipSound()`
- `default InteractionResultHolder<ItemStack> swapWithEquipmentSlot(Item p_270453_,  Level p_270395_,  Player p_270300_,  InteractionHand p_270262_)`
- `@Nullable static Equipable get(ItemStack p_270317_)`

## ExperienceBottleItem

*class* `net.minecraft.world.item.ExperienceBottleItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean isFoil(ItemStack p_41200_)`
- `public InteractionResultHolder<ItemStack> use(Level p_41196_,  Player p_41197_,  InteractionHand p_41198_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## FireChargeItem

*class* `net.minecraft.world.item.FireChargeItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_41204_)`
- `private void playSound(Level p_41206_,  BlockPos p_41207_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## FireworkRocketItem

*class* `net.minecraft.world.item.FireworkRocketItem`

### Fields
- `public static final byte[] CRAFTABLE_DURATIONS`
- `public static final String TAG_FIREWORKS` (= "Fireworks")
- `public static final String TAG_EXPLOSION` (= "Explosion")
- `public static final String TAG_EXPLOSIONS` (= "Explosions")
- `public static final String TAG_FLIGHT` (= "Flight")
- `public static final String TAG_EXPLOSION_TYPE` (= "Type")
- `public static final String TAG_EXPLOSION_TRAIL` (= "Trail")
- `public static final String TAG_EXPLOSION_FLICKER` (= "Flicker")
- `public static final String TAG_EXPLOSION_COLORS` (= "Colors")
- `public static final String TAG_EXPLOSION_FADECOLORS` (= "FadeColors")
- `public static final double ROCKET_PLACEMENT_OFFSET` (= 0.15)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_41216_)`
- `public InteractionResultHolder<ItemStack> use(Level p_41218_,  Player p_41219_,  InteractionHand p_41220_)`
- `public void appendHoverText(ItemStack p_41211_,  @Nullable  Level p_41212_,  List<Component> p_41213_,  TooltipFlag p_41214_)`
- `public static void setDuration(ItemStack p_260106_,  byte p_260332_)`
- `public ItemStack getDefaultInstance()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## FireworkStarItem

*class* `net.minecraft.world.item.FireworkStarItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public void appendHoverText(ItemStack p_41252_,  @Nullable  Level p_41253_,  List<Component> p_41254_,  TooltipFlag p_41255_)`
- `public static void appendHoverText(CompoundTag p_41257_,  List<Component> p_41258_)`
- `private static Component appendColors(MutableComponent p_41260_,  int[] p_41261_)`
- `private static Component getColorName(int p_41250_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## FishingRodItem

*class* `net.minecraft.world.item.FishingRodItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_41290_,  Player p_41291_,  InteractionHand p_41292_)`
- `public int getEnchantmentValue()`
  Description copied from class: Item
  Forge: Use ItemStack sensitive version.
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## FlintAndSteelItem

*class* `net.minecraft.world.item.FlintAndSteelItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_41297_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## FoodOnAStickItem

*class* `net.minecraft.world.item.FoodOnAStickItem`

### Fields
- `private final EntityType<T extends Entity & ItemSteerable> canInteractWith`
- `private final int consumeItemDamage`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_41314_,  Player p_41315_,  InteractionHand p_41316_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## GameMasterBlockItem

*class* `net.minecraft.world.item.GameMasterBlockItem`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `@Nullable protected BlockState getPlacementState(BlockPlaceContext p_41321_)`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `registerBlocks`, `removeFromBlockToItemMap`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## GlowInkSacItem

*class* `net.minecraft.world.item.GlowInkSacItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean tryApplyToSign(Level p_278089_,  SignBlockEntity p_277706_,  boolean p_277442_,  Player p_277983_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`
- from `net.minecraft.world.item.SignApplicator`: `canApplyToSign`

## HangingEntityItem

*class* `net.minecraft.world.item.HangingEntityItem`

### Fields
- `private static final Component TOOLTIP_RANDOM_VARIANT`
- `private final EntityType<? extends HangingEntity> type`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_41331_)`
- `protected boolean mayPlace(Player p_41326_,  Direction p_41327_,  ItemStack p_41328_,  BlockPos p_41329_)`
- `public void appendHoverText(ItemStack p_270235_,  @Nullable  Level p_270688_,  List<Component> p_270630_,  TooltipFlag p_270170_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## HangingSignItem

*class* `net.minecraft.world.item.HangingSignItem`

### Inherited fields
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `wallBlock`
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `protected boolean canPlace(LevelReader p_252032_,  BlockState p_252230_,  BlockPos p_252075_)`

### Inherited methods
- from `net.minecraft.world.item.SignItem`: `updateCustomBlockEntityTag`
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `getPlacementState`, `registerBlocks`, `removeFromBlockToItemMap`
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## HoeItem

*class* `net.minecraft.world.item.HoeItem`

### Fields
- `@Deprecated protected static final Map<Block,com.mojang.datafixers.util.Pair<Predicate<UseOnContext>,Consumer<UseOnContext>>> TILLABLES` (deprecated)

### Inherited fields
- from `net.minecraft.world.item.DiggerItem`: `speed`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_41341_)`
- `public static Consumer<UseOnContext> changeIntoState(BlockState p_150859_)`
- `public static Consumer<UseOnContext> changeIntoStateAndDropItem(BlockState p_150850_,  ItemLike p_150851_)`
- `public static boolean onlyIfAirAbove(UseOnContext p_150857_)`
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action

### Inherited methods
- from `net.minecraft.world.item.DiggerItem`: `getAttackDamage`, `getDefaultAttributeModifiers`, `getDestroySpeed`, `hurtEnemy`, `isCorrectToolForDrops`, `isCorrectToolForDrops`, `mineBlock`
- from `net.minecraft.world.item.TieredItem`: `getEnchantmentValue`, `getTier`, `isValidRepairItem`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## HoneyBottleItem

*class* `net.minecraft.world.item.HoneyBottleItem`

### Fields
- `private static final int DRINK_DURATION` (= 40)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ItemStack finishUsingItem(ItemStack p_41348_,  Level p_41349_,  LivingEntity p_41350_)`
- `public int getUseDuration(ItemStack p_41360_)`
- `public UseAnim getUseAnimation(ItemStack p_41358_)`
- `public SoundEvent getDrinkingSound()`
- `public SoundEvent getEatingSound()`
- `public InteractionResultHolder<ItemStack> use(Level p_41352_,  Player p_41353_,  InteractionHand p_41354_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## HoneycombItem

*class* `net.minecraft.world.item.HoneycombItem`

### Fields
- `public static final Supplier<com.google.common.collect.BiMap<Block,Block>> WAXABLES`
- `public static final Supplier<com.google.common.collect.BiMap<Block,Block>> WAX_OFF_BY_BLOCK`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_150869_)`
- `public static Optional<BlockState> getWaxed(BlockState p_150879_)`
- `public boolean tryApplyToSign(Level p_277838_,  SignBlockEntity p_277988_,  boolean p_277394_,  Player p_277816_)`
- `public boolean canApplyToSign(SignText p_277550_,  Player p_277640_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## HorseArmorItem

*class* `net.minecraft.world.item.HorseArmorItem`

### Fields
- `private static final String TEX_FOLDER` (= "textures/entity/horse/")
- `private final int protection`
- `private final ResourceLocation texture`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ResourceLocation getTexture()`
- `public int getProtection()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## InkSacItem

*class* `net.minecraft.world.item.InkSacItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean tryApplyToSign(Level p_277633_,  SignBlockEntity p_277698_,  boolean p_277634_,  Player p_277815_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`
- from `net.minecraft.world.item.SignApplicator`: `canApplyToSign`

## Instrument

*record* `net.minecraft.world.item.Instrument`

### Fields
- `private final Holder<SoundEvent> soundEvent`
  The field for the soundEvent record component.
- `private final int useDuration`
  The field for the useDuration record component.
- `private final float range`
  The field for the range record component.
- `public static final com.mojang.serialization.Codec<Instrument> CODEC`

### Methods
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
- `public Holder<SoundEvent> soundEvent()`
  Returns the value of the soundEvent record component.
  - returns: the value of the soundEvent record component
- `public int useDuration()`
  Returns the value of the useDuration record component.
  - returns: the value of the useDuration record component
- `public float range()`
  Returns the value of the range record component.
  - returns: the value of the range record component

## InstrumentItem

*class* `net.minecraft.world.item.InstrumentItem`

### Fields
- `private static final String TAG_INSTRUMENT` (= "instrument")
- `private final TagKey<Instrument> instruments`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public void appendHoverText(ItemStack p_220115_,  @Nullable  Level p_220116_,  List<Component> p_220117_,  TooltipFlag p_220118_)`
- `public static ItemStack create(Item p_220108_,  Holder<Instrument> p_220109_)`
- `public static void setRandom(ItemStack p_220111_,  TagKey<Instrument> p_220112_,  RandomSource p_220113_)`
- `private static void setSoundVariantId(ItemStack p_220120_,  Holder<Instrument> p_220121_)`
- `public InteractionResultHolder<ItemStack> use(Level p_220123_,  Player p_220124_,  InteractionHand p_220125_)`
- `public int getUseDuration(ItemStack p_220131_)`
- `private Optional<? extends Holder<Instrument>> getInstrument(ItemStack p_220135_)`
- `public UseAnim getUseAnimation(ItemStack p_220133_)`
- `private static void play(Level p_220127_,  Player p_220128_,  Instrument p_220129_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## Instruments

*interface* `net.minecraft.world.item.Instruments`

### Fields
- `static final int GOAT_HORN_RANGE_BLOCKS` (= 256)
- `static final int GOAT_HORN_DURATION` (= 140)
- `static final ResourceKey<Instrument> PONDER_GOAT_HORN`
- `static final ResourceKey<Instrument> SING_GOAT_HORN`
- `static final ResourceKey<Instrument> SEEK_GOAT_HORN`
- `static final ResourceKey<Instrument> FEEL_GOAT_HORN`
- `static final ResourceKey<Instrument> ADMIRE_GOAT_HORN`
- `static final ResourceKey<Instrument> CALL_GOAT_HORN`
- `static final ResourceKey<Instrument> YEARN_GOAT_HORN`
- `static final ResourceKey<Instrument> DREAM_GOAT_HORN`

### Methods
- `private static ResourceKey<Instrument> create(String p_220151_)`
- `static Instrument bootstrap(Registry<Instrument> p_220149_)`

## Item

*class* `net.minecraft.world.item.Item`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final Map<Block,Item> BY_BLOCK`
- `protected static final UUID BASE_ATTACK_DAMAGE_UUID`
- `protected static final UUID BASE_ATTACK_SPEED_UUID`
- `public static final int MAX_STACK_SIZE` (= 64)
- `public static final int EAT_DURATION` (= 32)
- `public static final int MAX_BAR_WIDTH` (= 13)
- `private final Holder.Reference<Item> builtInRegistryHolder`
- `private final Rarity rarity`
- `private final int maxStackSize`
- `private final int maxDamage`
- `private final boolean isFireResistant`
- `@Nullable private final Item craftingRemainingItem`
- `@Nullable private String descriptionId`
- `@Nullable private final FoodProperties foodProperties`
- `private final FeatureFlagSet requiredFeatures`
- `protected final boolean canRepair`
- `private Object renderProperties`

### Inherited fields
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static int getId(Item p_41394_)`
- `public static Item byId(int p_41446_)`
- `@Deprecated public static Item byBlock(Block p_41440_)` (deprecated)
- `@Deprecated public Holder.Reference<Item> builtInRegistryHolder()` (deprecated)
- `public void onUseTick(Level p_41428_,  LivingEntity p_41429_,  ItemStack p_41430_,  int p_41431_)`
- `@Deprecated public void onDestroyed(ItemEntity p_150887_)` (deprecated)
- `public void verifyTagAfterLoad(CompoundTag p_150898_)`
- `public boolean canAttackBlock(BlockState p_41441_,  Level p_41442_,  BlockPos p_41443_,  Player p_41444_)`
- `public Item asItem()`
- `public InteractionResult useOn(UseOnContext p_41427_)`
- `public float getDestroySpeed(ItemStack p_41425_,  BlockState p_41426_)`
- `public InteractionResultHolder<ItemStack> use(Level p_41432_,  Player p_41433_,  InteractionHand p_41434_)`
- `public ItemStack finishUsingItem(ItemStack p_41409_,  Level p_41410_,  LivingEntity p_41411_)`
- `@Deprecated public final int getMaxStackSize()` (deprecated)
- `@Deprecated public final int getMaxDamage()` (deprecated)
- `public boolean canBeDepleted()`
- `public boolean isBarVisible(ItemStack p_150899_)`
- `public int getBarWidth(ItemStack p_150900_)`
- `public int getBarColor(ItemStack p_150901_)`
- `public boolean overrideStackedOnOther(ItemStack p_150888_,  Slot p_150889_,  ClickAction p_150890_,  Player p_150891_)`
- `public boolean overrideOtherStackedOnMe(ItemStack p_150892_,  ItemStack p_150893_,  Slot p_150894_,  ClickAction p_150895_,  Player p_150896_,  SlotAccess p_150897_)`
- `public boolean hurtEnemy(ItemStack p_41395_,  LivingEntity p_41396_,  LivingEntity p_41397_)`
- `public boolean mineBlock(ItemStack p_41416_,  Level p_41417_,  BlockState p_41418_,  BlockPos p_41419_,  LivingEntity p_41420_)`
- `public boolean isCorrectToolForDrops(BlockState p_41450_)`
- `public InteractionResult interactLivingEntity(ItemStack p_41398_,  Player p_41399_,  LivingEntity p_41400_,  InteractionHand p_41401_)`
- `public Component getDescription()`
- `public String toString()`
- `protected String getOrCreateDescriptionId()`
- `public String getDescriptionId()`
- `public String getDescriptionId(ItemStack p_41455_)`
- `public boolean shouldOverrideMultiplayerNbt()`
- `@Nullable @Deprecated public final Item getCraftingRemainingItem()` (deprecated)
- `@Deprecated public boolean hasCraftingRemainingItem()` (deprecated)
- `public void inventoryTick(ItemStack p_41404_,  Level p_41405_,  Entity p_41406_,  int p_41407_,  boolean p_41408_)`
- `public void onCraftedBy(ItemStack p_41447_,  Level p_41448_,  Player p_41449_)`
- `public boolean isComplex()`
- `public UseAnim getUseAnimation(ItemStack p_41452_)`
- `public int getUseDuration(ItemStack p_41454_)`
- `public void releaseUsing(ItemStack p_41412_,  Level p_41413_,  LivingEntity p_41414_,  int p_41415_)`
- `public void appendHoverText(ItemStack p_41421_,  @Nullable  Level p_41422_,  List<Component> p_41423_,  TooltipFlag p_41424_)`
- `public Optional<TooltipComponent> getTooltipImage(ItemStack p_150902_)`
- `public Component getName(ItemStack p_41458_)`
- `public boolean isFoil(ItemStack p_41453_)`
- `public Rarity getRarity(ItemStack p_41461_)`
- `public boolean isEnchantable(ItemStack p_41456_)`
- `protected static BlockHitResult getPlayerPOVHitResult(Level p_41436_,  Player p_41437_,  ClipContext.Fluid p_41438_)`
- `@Deprecated public int getEnchantmentValue()` (deprecated)
  Forge: Use ItemStack sensitive version.
- `public boolean isValidRepairItem(ItemStack p_41402_,  ItemStack p_41403_)`
- `@Deprecated public com.google.common.collect.Multimap<Attribute,AttributeModifier> getDefaultAttributeModifiers(EquipmentSlot p_41388_)` (deprecated)
- `public boolean isRepairable(ItemStack stack)`
  Description copied from interface: IForgeItem
  Called by CraftingManager to determine if an item is reparable.
  - returns: True if reparable
- `public boolean useOnRelease(ItemStack p_41464_)`
- `public ItemStack getDefaultInstance()`
- `public boolean isEdible()`
- `@Deprecated @Nullable public FoodProperties getFoodProperties()` (deprecated)
- `public SoundEvent getDrinkingSound()`
- `public SoundEvent getEatingSound()`
- `public boolean isFireResistant()`
- `public boolean canBeHurtBy(DamageSource p_41387_)`
- `public boolean canFitInsideContainerItems()`
- `public FeatureFlagSet requiredFeatures()`
- `public Object getRenderPropertiesInternal()`
- `private void initClient()`
- `public void initializeClient(Consumer<IClientItemExtensions> consumer)`

### Inherited methods
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## Item.Properties

*class* `net.minecraft.world.item.Item.Properties`

Enclosing class: Item

### Fields
- `int maxStackSize`
- `int maxDamage`
- `@Nullable Item craftingRemainingItem`
- `Rarity rarity`
- `@Nullable FoodProperties foodProperties`
- `boolean isFireResistant`
- `FeatureFlagSet requiredFeatures`
- `private boolean canRepair`

### Methods
- `public Item.Properties food(FoodProperties p_41490_)`
- `public Item.Properties stacksTo(int p_41488_)`
- `public Item.Properties defaultDurability(int p_41500_)`
- `public Item.Properties durability(int p_41504_)`
- `public Item.Properties craftRemainder(Item p_41496_)`
- `public Item.Properties rarity(Rarity p_41498_)`
- `public Item.Properties fireResistant()`
- `public Item.Properties setNoRepair()`
- `public Item.Properties requiredFeatures(FeatureFlag... p_250948_)`

## ItemCooldowns

*class* `net.minecraft.world.item.ItemCooldowns`

### Fields
- `private final Map<Item,ItemCooldowns.CooldownInstance> cooldowns`
- `private int tickCount`

### Methods
- `public boolean isOnCooldown(Item p_41520_)`
- `public float getCooldownPercent(Item p_41522_,  float p_41523_)`
- `public void tick()`
- `public void addCooldown(Item p_41525_,  int p_41526_)`
- `public void removeCooldown(Item p_41528_)`
- `protected void onCooldownStarted(Item p_41529_,  int p_41530_)`
- `protected void onCooldownEnded(Item p_41531_)`

## ItemCooldowns.CooldownInstance

*class* `net.minecraft.world.item.ItemCooldowns.CooldownInstance`

Enclosing class: ItemCooldowns

### Fields
- `final int startTime`
- `final int endTime`

## ItemFrameItem

*class* `net.minecraft.world.item.ItemFrameItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `protected boolean mayPlace(Player p_41551_,  Direction p_41552_,  ItemStack p_41553_,  BlockPos p_41554_)`

### Inherited methods
- from `net.minecraft.world.item.HangingEntityItem`: `appendHoverText`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ItemNameBlockItem

*class* `net.minecraft.world.item.ItemNameBlockItem`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public String getDescriptionId()`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getPlacementState`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `registerBlocks`, `removeFromBlockToItemMap`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## Items

*class* `net.minecraft.world.item.Items`

### Fields
- `public static final Item AIR`
- `public static final Item STONE`
- `public static final Item GRANITE`
- `public static final Item POLISHED_GRANITE`
- `public static final Item DIORITE`
- `public static final Item POLISHED_DIORITE`
- `public static final Item ANDESITE`
- `public static final Item POLISHED_ANDESITE`
- `public static final Item DEEPSLATE`
- `public static final Item COBBLED_DEEPSLATE`
- `public static final Item POLISHED_DEEPSLATE`
- `public static final Item CALCITE`
- `public static final Item TUFF`
- `public static final Item DRIPSTONE_BLOCK`
- `public static final Item GRASS_BLOCK`
- `public static final Item DIRT`
- `public static final Item COARSE_DIRT`
- `public static final Item PODZOL`
- `public static final Item ROOTED_DIRT`
- `public static final Item MUD`
- `public static final Item CRIMSON_NYLIUM`
- `public static final Item WARPED_NYLIUM`
- `public static final Item COBBLESTONE`
- `public static final Item OAK_PLANKS`
- `public static final Item SPRUCE_PLANKS`
- `public static final Item BIRCH_PLANKS`
- `public static final Item JUNGLE_PLANKS`
- `public static final Item ACACIA_PLANKS`
- `public static final Item CHERRY_PLANKS`
- `public static final Item DARK_OAK_PLANKS`
- `public static final Item MANGROVE_PLANKS`
- `public static final Item BAMBOO_PLANKS`
- `public static final Item CRIMSON_PLANKS`
- `public static final Item WARPED_PLANKS`
- `public static final Item BAMBOO_MOSAIC`
- `public static final Item OAK_SAPLING`
- `public static final Item SPRUCE_SAPLING`
- `public static final Item BIRCH_SAPLING`
- `public static final Item JUNGLE_SAPLING`
- `public static final Item ACACIA_SAPLING`
- `public static final Item CHERRY_SAPLING`
- `public static final Item DARK_OAK_SAPLING`
- `public static final Item MANGROVE_PROPAGULE`
- `public static final Item BEDROCK`
- `public static final Item SAND`
- `public static final Item SUSPICIOUS_SAND`
- `public static final Item SUSPICIOUS_GRAVEL`
- `public static final Item RED_SAND`
- `public static final Item GRAVEL`
- `public static final Item COAL_ORE`
- `public static final Item DEEPSLATE_COAL_ORE`
- `public static final Item IRON_ORE`
- `public static final Item DEEPSLATE_IRON_ORE`
- `public static final Item COPPER_ORE`
- `public static final Item DEEPSLATE_COPPER_ORE`
- `public static final Item GOLD_ORE`
- `public static final Item DEEPSLATE_GOLD_ORE`
- `public static final Item REDSTONE_ORE`
- `public static final Item DEEPSLATE_REDSTONE_ORE`
- `public static final Item EMERALD_ORE`
- `public static final Item DEEPSLATE_EMERALD_ORE`
- `public static final Item LAPIS_ORE`
- `public static final Item DEEPSLATE_LAPIS_ORE`
- `public static final Item DIAMOND_ORE`
- `public static final Item DEEPSLATE_DIAMOND_ORE`
- `public static final Item NETHER_GOLD_ORE`
- `public static final Item NETHER_QUARTZ_ORE`
- `public static final Item ANCIENT_DEBRIS`
- `public static final Item COAL_BLOCK`
- `public static final Item RAW_IRON_BLOCK`
- `public static final Item RAW_COPPER_BLOCK`
- `public static final Item RAW_GOLD_BLOCK`
- `public static final Item AMETHYST_BLOCK`
- `public static final Item BUDDING_AMETHYST`
- `public static final Item IRON_BLOCK`
- `public static final Item COPPER_BLOCK`
- `public static final Item GOLD_BLOCK`
- `public static final Item DIAMOND_BLOCK`
- `public static final Item NETHERITE_BLOCK`
- `public static final Item EXPOSED_COPPER`
- `public static final Item WEATHERED_COPPER`
- `public static final Item OXIDIZED_COPPER`
- `public static final Item CUT_COPPER`
- `public static final Item EXPOSED_CUT_COPPER`
- `public static final Item WEATHERED_CUT_COPPER`
- `public static final Item OXIDIZED_CUT_COPPER`
- `public static final Item CUT_COPPER_STAIRS`
- `public static final Item EXPOSED_CUT_COPPER_STAIRS`
- `public static final Item WEATHERED_CUT_COPPER_STAIRS`
- `public static final Item OXIDIZED_CUT_COPPER_STAIRS`
- `public static final Item CUT_COPPER_SLAB`
- `public static final Item EXPOSED_CUT_COPPER_SLAB`
- `public static final Item WEATHERED_CUT_COPPER_SLAB`
- `public static final Item OXIDIZED_CUT_COPPER_SLAB`
- `public static final Item WAXED_COPPER_BLOCK`
- `public static final Item WAXED_EXPOSED_COPPER`
- `public static final Item WAXED_WEATHERED_COPPER`
- `public static final Item WAXED_OXIDIZED_COPPER`
- `public static final Item WAXED_CUT_COPPER`
- `public static final Item WAXED_EXPOSED_CUT_COPPER`
- `public static final Item WAXED_WEATHERED_CUT_COPPER`
- `public static final Item WAXED_OXIDIZED_CUT_COPPER`
- `public static final Item WAXED_CUT_COPPER_STAIRS`
- `public static final Item WAXED_EXPOSED_CUT_COPPER_STAIRS`
- `public static final Item WAXED_WEATHERED_CUT_COPPER_STAIRS`
- `public static final Item WAXED_OXIDIZED_CUT_COPPER_STAIRS`
- `public static final Item WAXED_CUT_COPPER_SLAB`
- `public static final Item WAXED_EXPOSED_CUT_COPPER_SLAB`
- `public static final Item WAXED_WEATHERED_CUT_COPPER_SLAB`
- `public static final Item WAXED_OXIDIZED_CUT_COPPER_SLAB`
- `public static final Item OAK_LOG`
- `public static final Item SPRUCE_LOG`
- `public static final Item BIRCH_LOG`
- `public static final Item JUNGLE_LOG`
- `public static final Item ACACIA_LOG`
- `public static final Item CHERRY_LOG`
- `public static final Item DARK_OAK_LOG`
- `public static final Item MANGROVE_LOG`
- `public static final Item MANGROVE_ROOTS`
- `public static final Item MUDDY_MANGROVE_ROOTS`
- `public static final Item CRIMSON_STEM`
- `public static final Item WARPED_STEM`
- `public static final Item BAMBOO_BLOCK`
- `public static final Item STRIPPED_OAK_LOG`
- `public static final Item STRIPPED_SPRUCE_LOG`
- `public static final Item STRIPPED_BIRCH_LOG`
- `public static final Item STRIPPED_JUNGLE_LOG`
- `public static final Item STRIPPED_ACACIA_LOG`
- `public static final Item STRIPPED_CHERRY_LOG`
- `public static final Item STRIPPED_DARK_OAK_LOG`
- `public static final Item STRIPPED_MANGROVE_LOG`
- `public static final Item STRIPPED_CRIMSON_STEM`
- `public static final Item STRIPPED_WARPED_STEM`
- `public static final Item STRIPPED_OAK_WOOD`
- `public static final Item STRIPPED_SPRUCE_WOOD`
- `public static final Item STRIPPED_BIRCH_WOOD`
- `public static final Item STRIPPED_JUNGLE_WOOD`
- `public static final Item STRIPPED_ACACIA_WOOD`
- `public static final Item STRIPPED_CHERRY_WOOD`
- `public static final Item STRIPPED_DARK_OAK_WOOD`
- `public static final Item STRIPPED_MANGROVE_WOOD`
- `public static final Item STRIPPED_CRIMSON_HYPHAE`
- `public static final Item STRIPPED_WARPED_HYPHAE`
- `public static final Item STRIPPED_BAMBOO_BLOCK`
- `public static final Item OAK_WOOD`
- `public static final Item SPRUCE_WOOD`
- `public static final Item BIRCH_WOOD`
- `public static final Item JUNGLE_WOOD`
- `public static final Item ACACIA_WOOD`
- `public static final Item CHERRY_WOOD`
- `public static final Item DARK_OAK_WOOD`
- `public static final Item MANGROVE_WOOD`
- `public static final Item CRIMSON_HYPHAE`
- `public static final Item WARPED_HYPHAE`
- `public static final Item OAK_LEAVES`
- `public static final Item SPRUCE_LEAVES`
- `public static final Item BIRCH_LEAVES`
- `public static final Item JUNGLE_LEAVES`
- `public static final Item ACACIA_LEAVES`
- `public static final Item CHERRY_LEAVES`
- `public static final Item DARK_OAK_LEAVES`
- `public static final Item MANGROVE_LEAVES`
- `public static final Item AZALEA_LEAVES`
- `public static final Item FLOWERING_AZALEA_LEAVES`
- `public static final Item SPONGE`
- `public static final Item WET_SPONGE`
- `public static final Item GLASS`
- `public static final Item TINTED_GLASS`
- `public static final Item LAPIS_BLOCK`
- `public static final Item SANDSTONE`
- `public static final Item CHISELED_SANDSTONE`
- `public static final Item CUT_SANDSTONE`
- `public static final Item COBWEB`
- `public static final Item GRASS`
- `public static final Item FERN`
- `public static final Item AZALEA`
- `public static final Item FLOWERING_AZALEA`
- `public static final Item DEAD_BUSH`
- `public static final Item SEAGRASS`
- `public static final Item SEA_PICKLE`
- `public static final Item WHITE_WOOL`
- `public static final Item ORANGE_WOOL`
- `public static final Item MAGENTA_WOOL`
- `public static final Item LIGHT_BLUE_WOOL`
- `public static final Item YELLOW_WOOL`
- `public static final Item LIME_WOOL`
- `public static final Item PINK_WOOL`
- `public static final Item GRAY_WOOL`
- `public static final Item LIGHT_GRAY_WOOL`
- `public static final Item CYAN_WOOL`
- `public static final Item PURPLE_WOOL`
- `public static final Item BLUE_WOOL`
- `public static final Item BROWN_WOOL`
- `public static final Item GREEN_WOOL`
- `public static final Item RED_WOOL`
- `public static final Item BLACK_WOOL`
- `public static final Item DANDELION`
- `public static final Item POPPY`
- `public static final Item BLUE_ORCHID`
- `public static final Item ALLIUM`
- `public static final Item AZURE_BLUET`
- `public static final Item RED_TULIP`
- `public static final Item ORANGE_TULIP`
- `public static final Item WHITE_TULIP`
- `public static final Item PINK_TULIP`
- `public static final Item OXEYE_DAISY`
- `public static final Item CORNFLOWER`
- `public static final Item LILY_OF_THE_VALLEY`
- `public static final Item WITHER_ROSE`
- `public static final Item TORCHFLOWER`
- `public static final Item PITCHER_PLANT`
- `public static final Item SPORE_BLOSSOM`
- `public static final Item BROWN_MUSHROOM`
- `public static final Item RED_MUSHROOM`
- `public static final Item CRIMSON_FUNGUS`
- `public static final Item WARPED_FUNGUS`
- `public static final Item CRIMSON_ROOTS`
- `public static final Item WARPED_ROOTS`
- `public static final Item NETHER_SPROUTS`
- `public static final Item WEEPING_VINES`
- `public static final Item TWISTING_VINES`
- `public static final Item SUGAR_CANE`
- `public static final Item KELP`
- `public static final Item MOSS_CARPET`
- `public static final Item PINK_PETALS`
- `public static final Item MOSS_BLOCK`
- `public static final Item HANGING_ROOTS`
- `public static final Item BIG_DRIPLEAF`
- `public static final Item SMALL_DRIPLEAF`
- `public static final Item BAMBOO`
- `public static final Item OAK_SLAB`
- `public static final Item SPRUCE_SLAB`
- `public static final Item BIRCH_SLAB`
- `public static final Item JUNGLE_SLAB`
- `public static final Item ACACIA_SLAB`
- `public static final Item CHERRY_SLAB`
- `public static final Item DARK_OAK_SLAB`
- `public static final Item MANGROVE_SLAB`
- `public static final Item BAMBOO_SLAB`
- `public static final Item BAMBOO_MOSAIC_SLAB`
- `public static final Item CRIMSON_SLAB`
- `public static final Item WARPED_SLAB`
- `public static final Item STONE_SLAB`
- `public static final Item SMOOTH_STONE_SLAB`
- `public static final Item SANDSTONE_SLAB`
- `public static final Item CUT_STANDSTONE_SLAB`
- `public static final Item PETRIFIED_OAK_SLAB`
- `public static final Item COBBLESTONE_SLAB`
- `public static final Item BRICK_SLAB`
- `public static final Item STONE_BRICK_SLAB`
- `public static final Item MUD_BRICK_SLAB`
- `public static final Item NETHER_BRICK_SLAB`
- `public static final Item QUARTZ_SLAB`
- `public static final Item RED_SANDSTONE_SLAB`
- `public static final Item CUT_RED_SANDSTONE_SLAB`
- `public static final Item PURPUR_SLAB`
- `public static final Item PRISMARINE_SLAB`
- `public static final Item PRISMARINE_BRICK_SLAB`
- `public static final Item DARK_PRISMARINE_SLAB`
- `public static final Item SMOOTH_QUARTZ`
- `public static final Item SMOOTH_RED_SANDSTONE`
- `public static final Item SMOOTH_SANDSTONE`
- `public static final Item SMOOTH_STONE`
- `public static final Item BRICKS`
- `public static final Item BOOKSHELF`
- `public static final Item CHISELED_BOOKSHELF`
- `public static final Item DECORATED_POT`
- `public static final Item MOSSY_COBBLESTONE`
- `public static final Item OBSIDIAN`
- `public static final Item TORCH`
- `public static final Item END_ROD`
- `public static final Item CHORUS_PLANT`
- `public static final Item CHORUS_FLOWER`
- `public static final Item PURPUR_BLOCK`
- `public static final Item PURPUR_PILLAR`
- `public static final Item PURPUR_STAIRS`
- `public static final Item SPAWNER`
- `public static final Item CHEST`
- `public static final Item CRAFTING_TABLE`
- `public static final Item FARMLAND`
- `public static final Item FURNACE`
- `public static final Item LADDER`
- `public static final Item COBBLESTONE_STAIRS`
- `public static final Item SNOW`
- `public static final Item ICE`
- `public static final Item SNOW_BLOCK`
- `public static final Item CACTUS`
- `public static final Item CLAY`
- `public static final Item JUKEBOX`
- `public static final Item OAK_FENCE`
- `public static final Item SPRUCE_FENCE`
- `public static final Item BIRCH_FENCE`
- `public static final Item JUNGLE_FENCE`
- `public static final Item ACACIA_FENCE`
- `public static final Item CHERRY_FENCE`
- `public static final Item DARK_OAK_FENCE`
- `public static final Item MANGROVE_FENCE`
- `public static final Item BAMBOO_FENCE`
- `public static final Item CRIMSON_FENCE`
- `public static final Item WARPED_FENCE`
- `public static final Item PUMPKIN`
- `public static final Item CARVED_PUMPKIN`
- `public static final Item JACK_O_LANTERN`
- `public static final Item NETHERRACK`
- `public static final Item SOUL_SAND`
- `public static final Item SOUL_SOIL`
- `public static final Item BASALT`
- `public static final Item POLISHED_BASALT`
- `public static final Item SMOOTH_BASALT`
- `public static final Item SOUL_TORCH`
- `public static final Item GLOWSTONE`
- `public static final Item INFESTED_STONE`
- `public static final Item INFESTED_COBBLESTONE`
- `public static final Item INFESTED_STONE_BRICKS`
- `public static final Item INFESTED_MOSSY_STONE_BRICKS`
- `public static final Item INFESTED_CRACKED_STONE_BRICKS`
- `public static final Item INFESTED_CHISELED_STONE_BRICKS`
- `public static final Item INFESTED_DEEPSLATE`
- `public static final Item STONE_BRICKS`
- `public static final Item MOSSY_STONE_BRICKS`
- `public static final Item CRACKED_STONE_BRICKS`
- `public static final Item CHISELED_STONE_BRICKS`
- `public static final Item PACKED_MUD`
- `public static final Item MUD_BRICKS`
- `public static final Item DEEPSLATE_BRICKS`
- `public static final Item CRACKED_DEEPSLATE_BRICKS`
- `public static final Item DEEPSLATE_TILES`
- `public static final Item CRACKED_DEEPSLATE_TILES`
- `public static final Item CHISELED_DEEPSLATE`
- `public static final Item REINFORCED_DEEPSLATE`
- `public static final Item BROWN_MUSHROOM_BLOCK`
- `public static final Item RED_MUSHROOM_BLOCK`
- `public static final Item MUSHROOM_STEM`
- `public static final Item IRON_BARS`
- `public static final Item CHAIN`
- `public static final Item GLASS_PANE`
- `public static final Item MELON`
- `public static final Item VINE`
- `public static final Item GLOW_LICHEN`
- `public static final Item BRICK_STAIRS`
- `public static final Item STONE_BRICK_STAIRS`
- `public static final Item MUD_BRICK_STAIRS`
- `public static final Item MYCELIUM`
- `public static final Item LILY_PAD`
- `public static final Item NETHER_BRICKS`
- `public static final Item CRACKED_NETHER_BRICKS`
- `public static final Item CHISELED_NETHER_BRICKS`
- `public static final Item NETHER_BRICK_FENCE`
- `public static final Item NETHER_BRICK_STAIRS`
- `public static final Item SCULK`
- `public static final Item SCULK_VEIN`
- `public static final Item SCULK_CATALYST`
- `public static final Item SCULK_SHRIEKER`
- `public static final Item ENCHANTING_TABLE`
- `public static final Item END_PORTAL_FRAME`
- `public static final Item END_STONE`
- `public static final Item END_STONE_BRICKS`
- `public static final Item DRAGON_EGG`
- `public static final Item SANDSTONE_STAIRS`
- `public static final Item ENDER_CHEST`
- `public static final Item EMERALD_BLOCK`
- `public static final Item OAK_STAIRS`
- `public static final Item SPRUCE_STAIRS`
- `public static final Item BIRCH_STAIRS`
- `public static final Item JUNGLE_STAIRS`
- `public static final Item ACACIA_STAIRS`
- `public static final Item CHERRY_STAIRS`
- `public static final Item DARK_OAK_STAIRS`
- `public static final Item MANGROVE_STAIRS`
- `public static final Item BAMBOO_STAIRS`
- `public static final Item BAMBOO_MOSAIC_STAIRS`
- `public static final Item CRIMSON_STAIRS`
- `public static final Item WARPED_STAIRS`
- `public static final Item COMMAND_BLOCK`
- `public static final Item BEACON`
- `public static final Item COBBLESTONE_WALL`
- `public static final Item MOSSY_COBBLESTONE_WALL`
- `public static final Item BRICK_WALL`
- `public static final Item PRISMARINE_WALL`
- `public static final Item RED_SANDSTONE_WALL`
- `public static final Item MOSSY_STONE_BRICK_WALL`
- `public static final Item GRANITE_WALL`
- `public static final Item STONE_BRICK_WALL`
- `public static final Item MUD_BRICK_WALL`
- `public static final Item NETHER_BRICK_WALL`
- `public static final Item ANDESITE_WALL`
- `public static final Item RED_NETHER_BRICK_WALL`
- `public static final Item SANDSTONE_WALL`
- `public static final Item END_STONE_BRICK_WALL`
- `public static final Item DIORITE_WALL`
- `public static final Item BLACKSTONE_WALL`
- `public static final Item POLISHED_BLACKSTONE_WALL`
- `public static final Item POLISHED_BLACKSTONE_BRICK_WALL`
- `public static final Item COBBLED_DEEPSLATE_WALL`
- `public static final Item POLISHED_DEEPSLATE_WALL`
- `public static final Item DEEPSLATE_BRICK_WALL`
- `public static final Item DEEPSLATE_TILE_WALL`
- `public static final Item ANVIL`
- `public static final Item CHIPPED_ANVIL`
- `public static final Item DAMAGED_ANVIL`
- `public static final Item CHISELED_QUARTZ_BLOCK`
- `public static final Item QUARTZ_BLOCK`
- `public static final Item QUARTZ_BRICKS`
- `public static final Item QUARTZ_PILLAR`
- `public static final Item QUARTZ_STAIRS`
- `public static final Item WHITE_TERRACOTTA`
- `public static final Item ORANGE_TERRACOTTA`
- `public static final Item MAGENTA_TERRACOTTA`
- `public static final Item LIGHT_BLUE_TERRACOTTA`
- `public static final Item YELLOW_TERRACOTTA`
- `public static final Item LIME_TERRACOTTA`
- `public static final Item PINK_TERRACOTTA`
- `public static final Item GRAY_TERRACOTTA`
- `public static final Item LIGHT_GRAY_TERRACOTTA`
- `public static final Item CYAN_TERRACOTTA`
- `public static final Item PURPLE_TERRACOTTA`
- `public static final Item BLUE_TERRACOTTA`
- `public static final Item BROWN_TERRACOTTA`
- `public static final Item GREEN_TERRACOTTA`
- `public static final Item RED_TERRACOTTA`
- `public static final Item BLACK_TERRACOTTA`
- `public static final Item BARRIER`
- `public static final Item LIGHT`
- `public static final Item HAY_BLOCK`
- `public static final Item WHITE_CARPET`
- `public static final Item ORANGE_CARPET`
- `public static final Item MAGENTA_CARPET`
- `public static final Item LIGHT_BLUE_CARPET`
- `public static final Item YELLOW_CARPET`
- `public static final Item LIME_CARPET`
- `public static final Item PINK_CARPET`
- `public static final Item GRAY_CARPET`
- `public static final Item LIGHT_GRAY_CARPET`
- `public static final Item CYAN_CARPET`
- `public static final Item PURPLE_CARPET`
- `public static final Item BLUE_CARPET`
- `public static final Item BROWN_CARPET`
- `public static final Item GREEN_CARPET`
- `public static final Item RED_CARPET`
- `public static final Item BLACK_CARPET`
- `public static final Item TERRACOTTA`
- `public static final Item PACKED_ICE`
- `public static final Item DIRT_PATH`
- `public static final Item SUNFLOWER`
- `public static final Item LILAC`
- `public static final Item ROSE_BUSH`
- `public static final Item PEONY`
- `public static final Item TALL_GRASS`
- `public static final Item LARGE_FERN`
- `public static final Item WHITE_STAINED_GLASS`
- `public static final Item ORANGE_STAINED_GLASS`
- `public static final Item MAGENTA_STAINED_GLASS`
- `public static final Item LIGHT_BLUE_STAINED_GLASS`
- `public static final Item YELLOW_STAINED_GLASS`
- `public static final Item LIME_STAINED_GLASS`
- `public static final Item PINK_STAINED_GLASS`
- `public static final Item GRAY_STAINED_GLASS`
- `public static final Item LIGHT_GRAY_STAINED_GLASS`
- `public static final Item CYAN_STAINED_GLASS`
- `public static final Item PURPLE_STAINED_GLASS`
- `public static final Item BLUE_STAINED_GLASS`
- `public static final Item BROWN_STAINED_GLASS`
- `public static final Item GREEN_STAINED_GLASS`
- `public static final Item RED_STAINED_GLASS`
- `public static final Item BLACK_STAINED_GLASS`
- `public static final Item WHITE_STAINED_GLASS_PANE`
- `public static final Item ORANGE_STAINED_GLASS_PANE`
- `public static final Item MAGENTA_STAINED_GLASS_PANE`
- `public static final Item LIGHT_BLUE_STAINED_GLASS_PANE`
- `public static final Item YELLOW_STAINED_GLASS_PANE`
- `public static final Item LIME_STAINED_GLASS_PANE`
- `public static final Item PINK_STAINED_GLASS_PANE`
- `public static final Item GRAY_STAINED_GLASS_PANE`
- `public static final Item LIGHT_GRAY_STAINED_GLASS_PANE`
- `public static final Item CYAN_STAINED_GLASS_PANE`
- `public static final Item PURPLE_STAINED_GLASS_PANE`
- `public static final Item BLUE_STAINED_GLASS_PANE`
- `public static final Item BROWN_STAINED_GLASS_PANE`
- `public static final Item GREEN_STAINED_GLASS_PANE`
- `public static final Item RED_STAINED_GLASS_PANE`
- `public static final Item BLACK_STAINED_GLASS_PANE`
- `public static final Item PRISMARINE`
- `public static final Item PRISMARINE_BRICKS`
- `public static final Item DARK_PRISMARINE`
- `public static final Item PRISMARINE_STAIRS`
- `public static final Item PRISMARINE_BRICK_STAIRS`
- `public static final Item DARK_PRISMARINE_STAIRS`
- `public static final Item SEA_LANTERN`
- `public static final Item RED_SANDSTONE`
- `public static final Item CHISELED_RED_SANDSTONE`
- `public static final Item CUT_RED_SANDSTONE`
- `public static final Item RED_SANDSTONE_STAIRS`
- `public static final Item REPEATING_COMMAND_BLOCK`
- `public static final Item CHAIN_COMMAND_BLOCK`
- `public static final Item MAGMA_BLOCK`
- `public static final Item NETHER_WART_BLOCK`
- `public static final Item WARPED_WART_BLOCK`
- `public static final Item RED_NETHER_BRICKS`
- `public static final Item BONE_BLOCK`
- `public static final Item STRUCTURE_VOID`
- `public static final Item SHULKER_BOX`
- `public static final Item WHITE_SHULKER_BOX`
- `public static final Item ORANGE_SHULKER_BOX`
- `public static final Item MAGENTA_SHULKER_BOX`
- `public static final Item LIGHT_BLUE_SHULKER_BOX`
- `public static final Item YELLOW_SHULKER_BOX`
- `public static final Item LIME_SHULKER_BOX`
- `public static final Item PINK_SHULKER_BOX`
- `public static final Item GRAY_SHULKER_BOX`
- `public static final Item LIGHT_GRAY_SHULKER_BOX`
- `public static final Item CYAN_SHULKER_BOX`
- `public static final Item PURPLE_SHULKER_BOX`
- `public static final Item BLUE_SHULKER_BOX`
- `public static final Item BROWN_SHULKER_BOX`
- `public static final Item GREEN_SHULKER_BOX`
- `public static final Item RED_SHULKER_BOX`
- `public static final Item BLACK_SHULKER_BOX`
- `public static final Item WHITE_GLAZED_TERRACOTTA`
- `public static final Item ORANGE_GLAZED_TERRACOTTA`
- `public static final Item MAGENTA_GLAZED_TERRACOTTA`
- `public static final Item LIGHT_BLUE_GLAZED_TERRACOTTA`
- `public static final Item YELLOW_GLAZED_TERRACOTTA`
- `public static final Item LIME_GLAZED_TERRACOTTA`
- `public static final Item PINK_GLAZED_TERRACOTTA`
- `public static final Item GRAY_GLAZED_TERRACOTTA`
- `public static final Item LIGHT_GRAY_GLAZED_TERRACOTTA`
- `public static final Item CYAN_GLAZED_TERRACOTTA`
- `public static final Item PURPLE_GLAZED_TERRACOTTA`
- `public static final Item BLUE_GLAZED_TERRACOTTA`
- `public static final Item BROWN_GLAZED_TERRACOTTA`
- `public static final Item GREEN_GLAZED_TERRACOTTA`
- `public static final Item RED_GLAZED_TERRACOTTA`
- `public static final Item BLACK_GLAZED_TERRACOTTA`
- `public static final Item WHITE_CONCRETE`
- `public static final Item ORANGE_CONCRETE`
- `public static final Item MAGENTA_CONCRETE`
- `public static final Item LIGHT_BLUE_CONCRETE`
- `public static final Item YELLOW_CONCRETE`
- `public static final Item LIME_CONCRETE`
- `public static final Item PINK_CONCRETE`
- `public static final Item GRAY_CONCRETE`
- `public static final Item LIGHT_GRAY_CONCRETE`
- `public static final Item CYAN_CONCRETE`
- `public static final Item PURPLE_CONCRETE`
- `public static final Item BLUE_CONCRETE`
- `public static final Item BROWN_CONCRETE`
- `public static final Item GREEN_CONCRETE`
- `public static final Item RED_CONCRETE`
- `public static final Item BLACK_CONCRETE`
- `public static final Item WHITE_CONCRETE_POWDER`
- `public static final Item ORANGE_CONCRETE_POWDER`
- `public static final Item MAGENTA_CONCRETE_POWDER`
- `public static final Item LIGHT_BLUE_CONCRETE_POWDER`
- `public static final Item YELLOW_CONCRETE_POWDER`
- `public static final Item LIME_CONCRETE_POWDER`
- `public static final Item PINK_CONCRETE_POWDER`
- `public static final Item GRAY_CONCRETE_POWDER`
- `public static final Item LIGHT_GRAY_CONCRETE_POWDER`
- `public static final Item CYAN_CONCRETE_POWDER`
- `public static final Item PURPLE_CONCRETE_POWDER`
- `public static final Item BLUE_CONCRETE_POWDER`
- `public static final Item BROWN_CONCRETE_POWDER`
- `public static final Item GREEN_CONCRETE_POWDER`
- `public static final Item RED_CONCRETE_POWDER`
- `public static final Item BLACK_CONCRETE_POWDER`
- `public static final Item TURTLE_EGG`
- `public static final Item SNIFFER_EGG`
- `public static final Item DEAD_TUBE_CORAL_BLOCK`
- `public static final Item DEAD_BRAIN_CORAL_BLOCK`
- `public static final Item DEAD_BUBBLE_CORAL_BLOCK`
- `public static final Item DEAD_FIRE_CORAL_BLOCK`
- `public static final Item DEAD_HORN_CORAL_BLOCK`
- `public static final Item TUBE_CORAL_BLOCK`
- `public static final Item BRAIN_CORAL_BLOCK`
- `public static final Item BUBBLE_CORAL_BLOCK`
- `public static final Item FIRE_CORAL_BLOCK`
- `public static final Item HORN_CORAL_BLOCK`
- `public static final Item TUBE_CORAL`
- `public static final Item BRAIN_CORAL`
- `public static final Item BUBBLE_CORAL`
- `public static final Item FIRE_CORAL`
- `public static final Item HORN_CORAL`
- `public static final Item DEAD_BRAIN_CORAL`
- `public static final Item DEAD_BUBBLE_CORAL`
- `public static final Item DEAD_FIRE_CORAL`
- `public static final Item DEAD_HORN_CORAL`
- `public static final Item DEAD_TUBE_CORAL`
- `public static final Item TUBE_CORAL_FAN`
- `public static final Item BRAIN_CORAL_FAN`
- `public static final Item BUBBLE_CORAL_FAN`
- `public static final Item FIRE_CORAL_FAN`
- `public static final Item HORN_CORAL_FAN`
- `public static final Item DEAD_TUBE_CORAL_FAN`
- `public static final Item DEAD_BRAIN_CORAL_FAN`
- `public static final Item DEAD_BUBBLE_CORAL_FAN`
- `public static final Item DEAD_FIRE_CORAL_FAN`
- `public static final Item DEAD_HORN_CORAL_FAN`
- `public static final Item BLUE_ICE`
- `public static final Item CONDUIT`
- `public static final Item POLISHED_GRANITE_STAIRS`
- `public static final Item SMOOTH_RED_SANDSTONE_STAIRS`
- `public static final Item MOSSY_STONE_BRICK_STAIRS`
- `public static final Item POLISHED_DIORITE_STAIRS`
- `public static final Item MOSSY_COBBLESTONE_STAIRS`
- `public static final Item END_STONE_BRICK_STAIRS`
- `public static final Item STONE_STAIRS`
- `public static final Item SMOOTH_SANDSTONE_STAIRS`
- `public static final Item SMOOTH_QUARTZ_STAIRS`
- `public static final Item GRANITE_STAIRS`
- `public static final Item ANDESITE_STAIRS`
- `public static final Item RED_NETHER_BRICK_STAIRS`
- `public static final Item POLISHED_ANDESITE_STAIRS`
- `public static final Item DIORITE_STAIRS`
- `public static final Item COBBLED_DEEPSLATE_STAIRS`
- `public static final Item POLISHED_DEEPSLATE_STAIRS`
- `public static final Item DEEPSLATE_BRICK_STAIRS`
- `public static final Item DEEPSLATE_TILE_STAIRS`
- `public static final Item POLISHED_GRANITE_SLAB`
- `public static final Item SMOOTH_RED_SANDSTONE_SLAB`
- `public static final Item MOSSY_STONE_BRICK_SLAB`
- `public static final Item POLISHED_DIORITE_SLAB`
- `public static final Item MOSSY_COBBLESTONE_SLAB`
- `public static final Item END_STONE_BRICK_SLAB`
- `public static final Item SMOOTH_SANDSTONE_SLAB`
- `public static final Item SMOOTH_QUARTZ_SLAB`
- `public static final Item GRANITE_SLAB`
- `public static final Item ANDESITE_SLAB`
- `public static final Item RED_NETHER_BRICK_SLAB`
- `public static final Item POLISHED_ANDESITE_SLAB`
- `public static final Item DIORITE_SLAB`
- `public static final Item COBBLED_DEEPSLATE_SLAB`
- `public static final Item POLISHED_DEEPSLATE_SLAB`
- `public static final Item DEEPSLATE_BRICK_SLAB`
- `public static final Item DEEPSLATE_TILE_SLAB`
- `public static final Item SCAFFOLDING`
- `public static final Item REDSTONE`
- `public static final Item REDSTONE_TORCH`
- `public static final Item REDSTONE_BLOCK`
- `public static final Item REPEATER`
- `public static final Item COMPARATOR`
- `public static final Item PISTON`
- `public static final Item STICKY_PISTON`
- `public static final Item SLIME_BLOCK`
- `public static final Item HONEY_BLOCK`
- `public static final Item OBSERVER`
- `public static final Item HOPPER`
- `public static final Item DISPENSER`
- `public static final Item DROPPER`
- `public static final Item LECTERN`
- `public static final Item TARGET`
- `public static final Item LEVER`
- `public static final Item LIGHTNING_ROD`
- `public static final Item DAYLIGHT_DETECTOR`
- `public static final Item SCULK_SENSOR`
- `public static final Item CALIBRATED_SCULK_SENSOR`
- `public static final Item TRIPWIRE_HOOK`
- `public static final Item TRAPPED_CHEST`
- `public static final Item TNT`
- `public static final Item REDSTONE_LAMP`
- `public static final Item NOTE_BLOCK`
- `public static final Item STONE_BUTTON`
- `public static final Item POLISHED_BLACKSTONE_BUTTON`
- `public static final Item OAK_BUTTON`
- `public static final Item SPRUCE_BUTTON`
- `public static final Item BIRCH_BUTTON`
- `public static final Item JUNGLE_BUTTON`
- `public static final Item ACACIA_BUTTON`
- `public static final Item CHERRY_BUTTON`
- `public static final Item DARK_OAK_BUTTON`
- `public static final Item MANGROVE_BUTTON`
- `public static final Item BAMBOO_BUTTON`
- `public static final Item CRIMSON_BUTTON`
- `public static final Item WARPED_BUTTON`
- `public static final Item STONE_PRESSURE_PLATE`
- `public static final Item POLISHED_BLACKSTONE_PRESSURE_PLATE`
- `public static final Item LIGHT_WEIGHTED_PRESSURE_PLATE`
- `public static final Item HEAVY_WEIGHTED_PRESSURE_PLATE`
- `public static final Item OAK_PRESSURE_PLATE`
- `public static final Item SPRUCE_PRESSURE_PLATE`
- `public static final Item BIRCH_PRESSURE_PLATE`
- `public static final Item JUNGLE_PRESSURE_PLATE`
- `public static final Item ACACIA_PRESSURE_PLATE`
- `public static final Item CHERRY_PRESSURE_PLATE`
- `public static final Item DARK_OAK_PRESSURE_PLATE`
- `public static final Item MANGROVE_PRESSURE_PLATE`
- `public static final Item BAMBOO_PRESSURE_PLATE`
- `public static final Item CRIMSON_PRESSURE_PLATE`
- `public static final Item WARPED_PRESSURE_PLATE`
- `public static final Item IRON_DOOR`
- `public static final Item OAK_DOOR`
- `public static final Item SPRUCE_DOOR`
- `public static final Item BIRCH_DOOR`
- `public static final Item JUNGLE_DOOR`
- `public static final Item ACACIA_DOOR`
- `public static final Item CHERRY_DOOR`
- `public static final Item DARK_OAK_DOOR`
- `public static final Item MANGROVE_DOOR`
- `public static final Item BAMBOO_DOOR`
- `public static final Item CRIMSON_DOOR`
- `public static final Item WARPED_DOOR`
- `public static final Item IRON_TRAPDOOR`
- `public static final Item OAK_TRAPDOOR`
- `public static final Item SPRUCE_TRAPDOOR`
- `public static final Item BIRCH_TRAPDOOR`
- `public static final Item JUNGLE_TRAPDOOR`
- `public static final Item ACACIA_TRAPDOOR`
- `public static final Item CHERRY_TRAPDOOR`
- `public static final Item DARK_OAK_TRAPDOOR`
- `public static final Item MANGROVE_TRAPDOOR`
- `public static final Item BAMBOO_TRAPDOOR`
- `public static final Item CRIMSON_TRAPDOOR`
- `public static final Item WARPED_TRAPDOOR`
- `public static final Item OAK_FENCE_GATE`
- `public static final Item SPRUCE_FENCE_GATE`
- `public static final Item BIRCH_FENCE_GATE`
- `public static final Item JUNGLE_FENCE_GATE`
- `public static final Item ACACIA_FENCE_GATE`
- `public static final Item CHERRY_FENCE_GATE`
- `public static final Item DARK_OAK_FENCE_GATE`
- `public static final Item MANGROVE_FENCE_GATE`
- `public static final Item BAMBOO_FENCE_GATE`
- `public static final Item CRIMSON_FENCE_GATE`
- `public static final Item WARPED_FENCE_GATE`
- `public static final Item POWERED_RAIL`
- `public static final Item DETECTOR_RAIL`
- `public static final Item RAIL`
- `public static final Item ACTIVATOR_RAIL`
- `public static final Item SADDLE`
- `public static final Item MINECART`
- `public static final Item CHEST_MINECART`
- `public static final Item FURNACE_MINECART`
- `public static final Item TNT_MINECART`
- `public static final Item HOPPER_MINECART`
- `public static final Item CARROT_ON_A_STICK`
- `public static final Item WARPED_FUNGUS_ON_A_STICK`
- `public static final Item ELYTRA`
- `public static final Item OAK_BOAT`
- `public static final Item OAK_CHEST_BOAT`
- `public static final Item SPRUCE_BOAT`
- `public static final Item SPRUCE_CHEST_BOAT`
- `public static final Item BIRCH_BOAT`
- `public static final Item BIRCH_CHEST_BOAT`
- `public static final Item JUNGLE_BOAT`
- `public static final Item JUNGLE_CHEST_BOAT`
- `public static final Item ACACIA_BOAT`
- `public static final Item ACACIA_CHEST_BOAT`
- `public static final Item CHERRY_BOAT`
- `public static final Item CHERRY_CHEST_BOAT`
- `public static final Item DARK_OAK_BOAT`
- `public static final Item DARK_OAK_CHEST_BOAT`
- `public static final Item MANGROVE_BOAT`
- `public static final Item MANGROVE_CHEST_BOAT`
- `public static final Item BAMBOO_RAFT`
- `public static final Item BAMBOO_CHEST_RAFT`
- `public static final Item STRUCTURE_BLOCK`
- `public static final Item JIGSAW`
- `public static final Item TURTLE_HELMET`
- `public static final Item SCUTE`
- `public static final Item FLINT_AND_STEEL`
- `public static final Item APPLE`
- `public static final Item BOW`
- `public static final Item ARROW`
- `public static final Item COAL`
- `public static final Item CHARCOAL`
- `public static final Item DIAMOND`
- `public static final Item EMERALD`
- `public static final Item LAPIS_LAZULI`
- `public static final Item QUARTZ`
- `public static final Item AMETHYST_SHARD`
- `public static final Item RAW_IRON`
- `public static final Item IRON_INGOT`
- `public static final Item RAW_COPPER`
- `public static final Item COPPER_INGOT`
- `public static final Item RAW_GOLD`
- `public static final Item GOLD_INGOT`
- `public static final Item NETHERITE_INGOT`
- `public static final Item NETHERITE_SCRAP`
- `public static final Item WOODEN_SWORD`
- `public static final Item WOODEN_SHOVEL`
- `public static final Item WOODEN_PICKAXE`
- `public static final Item WOODEN_AXE`
- `public static final Item WOODEN_HOE`
- `public static final Item STONE_SWORD`
- `public static final Item STONE_SHOVEL`
- `public static final Item STONE_PICKAXE`
- `public static final Item STONE_AXE`
- `public static final Item STONE_HOE`
- `public static final Item GOLDEN_SWORD`
- `public static final Item GOLDEN_SHOVEL`
- `public static final Item GOLDEN_PICKAXE`
- `public static final Item GOLDEN_AXE`
- `public static final Item GOLDEN_HOE`
- `public static final Item IRON_SWORD`
- `public static final Item IRON_SHOVEL`
- `public static final Item IRON_PICKAXE`
- `public static final Item IRON_AXE`
- `public static final Item IRON_HOE`
- `public static final Item DIAMOND_SWORD`
- `public static final Item DIAMOND_SHOVEL`
- `public static final Item DIAMOND_PICKAXE`
- `public static final Item DIAMOND_AXE`
- `public static final Item DIAMOND_HOE`
- `public static final Item NETHERITE_SWORD`
- `public static final Item NETHERITE_SHOVEL`
- `public static final Item NETHERITE_PICKAXE`
- `public static final Item NETHERITE_AXE`
- `public static final Item NETHERITE_HOE`
- `public static final Item STICK`
- `public static final Item BOWL`
- `public static final Item MUSHROOM_STEW`
- `public static final Item STRING`
- `public static final Item FEATHER`
- `public static final Item GUNPOWDER`
- `public static final Item WHEAT_SEEDS`
- `public static final Item WHEAT`
- `public static final Item BREAD`
- `public static final Item LEATHER_HELMET`
- `public static final Item LEATHER_CHESTPLATE`
- `public static final Item LEATHER_LEGGINGS`
- `public static final Item LEATHER_BOOTS`
- `public static final Item CHAINMAIL_HELMET`
- `public static final Item CHAINMAIL_CHESTPLATE`
- `public static final Item CHAINMAIL_LEGGINGS`
- `public static final Item CHAINMAIL_BOOTS`
- `public static final Item IRON_HELMET`
- `public static final Item IRON_CHESTPLATE`
- `public static final Item IRON_LEGGINGS`
- `public static final Item IRON_BOOTS`
- `public static final Item DIAMOND_HELMET`
- `public static final Item DIAMOND_CHESTPLATE`
- `public static final Item DIAMOND_LEGGINGS`
- `public static final Item DIAMOND_BOOTS`
- `public static final Item GOLDEN_HELMET`
- `public static final Item GOLDEN_CHESTPLATE`
- `public static final Item GOLDEN_LEGGINGS`
- `public static final Item GOLDEN_BOOTS`
- `public static final Item NETHERITE_HELMET`
- `public static final Item NETHERITE_CHESTPLATE`
- `public static final Item NETHERITE_LEGGINGS`
- `public static final Item NETHERITE_BOOTS`
- `public static final Item FLINT`
- `public static final Item PORKCHOP`
- `public static final Item COOKED_PORKCHOP`
- `public static final Item PAINTING`
- `public static final Item GOLDEN_APPLE`
- `public static final Item ENCHANTED_GOLDEN_APPLE`
- `public static final Item OAK_SIGN`
- `public static final Item SPRUCE_SIGN`
- `public static final Item BIRCH_SIGN`
- `public static final Item JUNGLE_SIGN`
- `public static final Item ACACIA_SIGN`
- `public static final Item CHERRY_SIGN`
- `public static final Item DARK_OAK_SIGN`
- `public static final Item MANGROVE_SIGN`
- `public static final Item BAMBOO_SIGN`
- `public static final Item CRIMSON_SIGN`
- `public static final Item WARPED_SIGN`
- `public static final Item OAK_HANGING_SIGN`
- `public static final Item SPRUCE_HANGING_SIGN`
- `public static final Item BIRCH_HANGING_SIGN`
- `public static final Item JUNGLE_HANGING_SIGN`
- `public static final Item ACACIA_HANGING_SIGN`
- `public static final Item CHERRY_HANGING_SIGN`
- `public static final Item DARK_OAK_HANGING_SIGN`
- `public static final Item MANGROVE_HANGING_SIGN`
- `public static final Item BAMBOO_HANGING_SIGN`
- `public static final Item CRIMSON_HANGING_SIGN`
- `public static final Item WARPED_HANGING_SIGN`
- `public static final Item BUCKET`
- `public static final Item WATER_BUCKET`
- `public static final Item LAVA_BUCKET`
- `public static final Item POWDER_SNOW_BUCKET`
- `public static final Item SNOWBALL`
- `public static final Item LEATHER`
- `public static final Item MILK_BUCKET`
- `public static final Item PUFFERFISH_BUCKET`
- `public static final Item SALMON_BUCKET`
- `public static final Item COD_BUCKET`
- `public static final Item TROPICAL_FISH_BUCKET`
- `public static final Item AXOLOTL_BUCKET`
- `public static final Item TADPOLE_BUCKET`
- `public static final Item BRICK`
- `public static final Item CLAY_BALL`
- `public static final Item DRIED_KELP_BLOCK`
- `public static final Item PAPER`
- `public static final Item BOOK`
- `public static final Item SLIME_BALL`
- `public static final Item EGG`
- `public static final Item COMPASS`
- `public static final Item RECOVERY_COMPASS`
- `public static final Item BUNDLE`
- `public static final Item FISHING_ROD`
- `public static final Item CLOCK`
- `public static final Item SPYGLASS`
- `public static final Item GLOWSTONE_DUST`
- `public static final Item COD`
- `public static final Item SALMON`
- `public static final Item TROPICAL_FISH`
- `public static final Item PUFFERFISH`
- `public static final Item COOKED_COD`
- `public static final Item COOKED_SALMON`
- `public static final Item INK_SAC`
- `public static final Item GLOW_INK_SAC`
- `public static final Item COCOA_BEANS`
- `public static final Item WHITE_DYE`
- `public static final Item ORANGE_DYE`
- `public static final Item MAGENTA_DYE`
- `public static final Item LIGHT_BLUE_DYE`
- `public static final Item YELLOW_DYE`
- `public static final Item LIME_DYE`
- `public static final Item PINK_DYE`
- `public static final Item GRAY_DYE`
- `public static final Item LIGHT_GRAY_DYE`
- `public static final Item CYAN_DYE`
- `public static final Item PURPLE_DYE`
- `public static final Item BLUE_DYE`
- `public static final Item BROWN_DYE`
- `public static final Item GREEN_DYE`
- `public static final Item RED_DYE`
- `public static final Item BLACK_DYE`
- `public static final Item BONE_MEAL`
- `public static final Item BONE`
- `public static final Item SUGAR`
- `public static final Item CAKE`
- `public static final Item WHITE_BED`
- `public static final Item ORANGE_BED`
- `public static final Item MAGENTA_BED`
- `public static final Item LIGHT_BLUE_BED`
- `public static final Item YELLOW_BED`
- `public static final Item LIME_BED`
- `public static final Item PINK_BED`
- `public static final Item GRAY_BED`
- `public static final Item LIGHT_GRAY_BED`
- `public static final Item CYAN_BED`
- `public static final Item PURPLE_BED`
- `public static final Item BLUE_BED`
- `public static final Item BROWN_BED`
- `public static final Item GREEN_BED`
- `public static final Item RED_BED`
- `public static final Item BLACK_BED`
- `public static final Item COOKIE`
- `public static final Item FILLED_MAP`
- `public static final Item SHEARS`
- `public static final Item MELON_SLICE`
- `public static final Item DRIED_KELP`
- `public static final Item PUMPKIN_SEEDS`
- `public static final Item MELON_SEEDS`
- `public static final Item BEEF`
- `public static final Item COOKED_BEEF`
- `public static final Item CHICKEN`
- `public static final Item COOKED_CHICKEN`
- `public static final Item ROTTEN_FLESH`
- `public static final Item ENDER_PEARL`
- `public static final Item BLAZE_ROD`
- `public static final Item GHAST_TEAR`
- `public static final Item GOLD_NUGGET`
- `public static final Item NETHER_WART`
- `public static final Item POTION`
- `public static final Item GLASS_BOTTLE`
- `public static final Item SPIDER_EYE`
- `public static final Item FERMENTED_SPIDER_EYE`
- `public static final Item BLAZE_POWDER`
- `public static final Item MAGMA_CREAM`
- `public static final Item BREWING_STAND`
- `public static final Item CAULDRON`
- `public static final Item ENDER_EYE`
- `public static final Item GLISTERING_MELON_SLICE`
- `public static final Item ALLAY_SPAWN_EGG`
- `public static final Item AXOLOTL_SPAWN_EGG`
- `public static final Item BAT_SPAWN_EGG`
- `public static final Item BEE_SPAWN_EGG`
- `public static final Item BLAZE_SPAWN_EGG`
- `public static final Item CAT_SPAWN_EGG`
- `public static final Item CAMEL_SPAWN_EGG`
- `public static final Item CAVE_SPIDER_SPAWN_EGG`
- `public static final Item CHICKEN_SPAWN_EGG`
- `public static final Item COD_SPAWN_EGG`
- `public static final Item COW_SPAWN_EGG`
- `public static final Item CREEPER_SPAWN_EGG`
- `public static final Item DOLPHIN_SPAWN_EGG`
- `public static final Item DONKEY_SPAWN_EGG`
- `public static final Item DROWNED_SPAWN_EGG`
- `public static final Item ELDER_GUARDIAN_SPAWN_EGG`
- `public static final Item ENDER_DRAGON_SPAWN_EGG`
- `public static final Item ENDERMAN_SPAWN_EGG`
- `public static final Item ENDERMITE_SPAWN_EGG`
- `public static final Item EVOKER_SPAWN_EGG`
- `public static final Item FOX_SPAWN_EGG`
- `public static final Item FROG_SPAWN_EGG`
- `public static final Item GHAST_SPAWN_EGG`
- `public static final Item GLOW_SQUID_SPAWN_EGG`
- `public static final Item GOAT_SPAWN_EGG`
- `public static final Item GUARDIAN_SPAWN_EGG`
- `public static final Item HOGLIN_SPAWN_EGG`
- `public static final Item HORSE_SPAWN_EGG`
- `public static final Item HUSK_SPAWN_EGG`
- `public static final Item IRON_GOLEM_SPAWN_EGG`
- `public static final Item LLAMA_SPAWN_EGG`
- `public static final Item MAGMA_CUBE_SPAWN_EGG`
- `public static final Item MOOSHROOM_SPAWN_EGG`
- `public static final Item MULE_SPAWN_EGG`
- `public static final Item OCELOT_SPAWN_EGG`
- `public static final Item PANDA_SPAWN_EGG`
- `public static final Item PARROT_SPAWN_EGG`
- `public static final Item PHANTOM_SPAWN_EGG`
- `public static final Item PIG_SPAWN_EGG`
- `public static final Item PIGLIN_SPAWN_EGG`
- `public static final Item PIGLIN_BRUTE_SPAWN_EGG`
- `public static final Item PILLAGER_SPAWN_EGG`
- `public static final Item POLAR_BEAR_SPAWN_EGG`
- `public static final Item PUFFERFISH_SPAWN_EGG`
- `public static final Item RABBIT_SPAWN_EGG`
- `public static final Item RAVAGER_SPAWN_EGG`
- `public static final Item SALMON_SPAWN_EGG`
- `public static final Item SHEEP_SPAWN_EGG`
- `public static final Item SHULKER_SPAWN_EGG`
- `public static final Item SILVERFISH_SPAWN_EGG`
- `public static final Item SKELETON_SPAWN_EGG`
- `public static final Item SKELETON_HORSE_SPAWN_EGG`
- `public static final Item SLIME_SPAWN_EGG`
- `public static final Item SNIFFER_SPAWN_EGG`
- `public static final Item SNOW_GOLEM_SPAWN_EGG`
- `public static final Item SPIDER_SPAWN_EGG`
- `public static final Item SQUID_SPAWN_EGG`
- `public static final Item STRAY_SPAWN_EGG`
- `public static final Item STRIDER_SPAWN_EGG`
- `public static final Item TADPOLE_SPAWN_EGG`
- `public static final Item TRADER_LLAMA_SPAWN_EGG`
- `public static final Item TROPICAL_FISH_SPAWN_EGG`
- `public static final Item TURTLE_SPAWN_EGG`
- `public static final Item VEX_SPAWN_EGG`
- `public static final Item VILLAGER_SPAWN_EGG`
- `public static final Item VINDICATOR_SPAWN_EGG`
- `public static final Item WANDERING_TRADER_SPAWN_EGG`
- `public static final Item WARDEN_SPAWN_EGG`
- `public static final Item WITCH_SPAWN_EGG`
- `public static final Item WITHER_SPAWN_EGG`
- `public static final Item WITHER_SKELETON_SPAWN_EGG`
- `public static final Item WOLF_SPAWN_EGG`
- `public static final Item ZOGLIN_SPAWN_EGG`
- `public static final Item ZOMBIE_SPAWN_EGG`
- `public static final Item ZOMBIE_HORSE_SPAWN_EGG`
- `public static final Item ZOMBIE_VILLAGER_SPAWN_EGG`
- `public static final Item ZOMBIFIED_PIGLIN_SPAWN_EGG`
- `public static final Item EXPERIENCE_BOTTLE`
- `public static final Item FIRE_CHARGE`
- `public static final Item WRITABLE_BOOK`
- `public static final Item WRITTEN_BOOK`
- `public static final Item ITEM_FRAME`
- `public static final Item GLOW_ITEM_FRAME`
- `public static final Item FLOWER_POT`
- `public static final Item CARROT`
- `public static final Item POTATO`
- `public static final Item BAKED_POTATO`
- `public static final Item POISONOUS_POTATO`
- `public static final Item MAP`
- `public static final Item GOLDEN_CARROT`
- `public static final Item SKELETON_SKULL`
- `public static final Item WITHER_SKELETON_SKULL`
- `public static final Item PLAYER_HEAD`
- `public static final Item ZOMBIE_HEAD`
- `public static final Item CREEPER_HEAD`
- `public static final Item DRAGON_HEAD`
- `public static final Item PIGLIN_HEAD`
- `public static final Item NETHER_STAR`
- `public static final Item PUMPKIN_PIE`
- `public static final Item FIREWORK_ROCKET`
- `public static final Item FIREWORK_STAR`
- `public static final Item ENCHANTED_BOOK`
- `public static final Item NETHER_BRICK`
- `public static final Item PRISMARINE_SHARD`
- `public static final Item PRISMARINE_CRYSTALS`
- `public static final Item RABBIT`
- `public static final Item COOKED_RABBIT`
- `public static final Item RABBIT_STEW`
- `public static final Item RABBIT_FOOT`
- `public static final Item RABBIT_HIDE`
- `public static final Item ARMOR_STAND`
- `public static final Item IRON_HORSE_ARMOR`
- `public static final Item GOLDEN_HORSE_ARMOR`
- `public static final Item DIAMOND_HORSE_ARMOR`
- `public static final Item LEATHER_HORSE_ARMOR`
- `public static final Item LEAD`
- `public static final Item NAME_TAG`
- `public static final Item COMMAND_BLOCK_MINECART`
- `public static final Item MUTTON`
- `public static final Item COOKED_MUTTON`
- `public static final Item WHITE_BANNER`
- `public static final Item ORANGE_BANNER`
- `public static final Item MAGENTA_BANNER`
- `public static final Item LIGHT_BLUE_BANNER`
- `public static final Item YELLOW_BANNER`
- `public static final Item LIME_BANNER`
- `public static final Item PINK_BANNER`
- `public static final Item GRAY_BANNER`
- `public static final Item LIGHT_GRAY_BANNER`
- `public static final Item CYAN_BANNER`
- `public static final Item PURPLE_BANNER`
- `public static final Item BLUE_BANNER`
- `public static final Item BROWN_BANNER`
- `public static final Item GREEN_BANNER`
- `public static final Item RED_BANNER`
- `public static final Item BLACK_BANNER`
- `public static final Item END_CRYSTAL`
- `public static final Item CHORUS_FRUIT`
- `public static final Item POPPED_CHORUS_FRUIT`
- `public static final Item TORCHFLOWER_SEEDS`
- `public static final Item PITCHER_POD`
- `public static final Item BEETROOT`
- `public static final Item BEETROOT_SEEDS`
- `public static final Item BEETROOT_SOUP`
- `public static final Item DRAGON_BREATH`
- `public static final Item SPLASH_POTION`
- `public static final Item SPECTRAL_ARROW`
- `public static final Item TIPPED_ARROW`
- `public static final Item LINGERING_POTION`
- `public static final Item SHIELD`
- `public static final Item TOTEM_OF_UNDYING`
- `public static final Item SHULKER_SHELL`
- `public static final Item IRON_NUGGET`
- `public static final Item KNOWLEDGE_BOOK`
- `public static final Item DEBUG_STICK`
- `public static final Item MUSIC_DISC_13`
- `public static final Item MUSIC_DISC_CAT`
- `public static final Item MUSIC_DISC_BLOCKS`
- `public static final Item MUSIC_DISC_CHIRP`
- `public static final Item MUSIC_DISC_FAR`
- `public static final Item MUSIC_DISC_MALL`
- `public static final Item MUSIC_DISC_MELLOHI`
- `public static final Item MUSIC_DISC_STAL`
- `public static final Item MUSIC_DISC_STRAD`
- `public static final Item MUSIC_DISC_WARD`
- `public static final Item MUSIC_DISC_11`
- `public static final Item MUSIC_DISC_WAIT`
- `public static final Item MUSIC_DISC_OTHERSIDE`
- `public static final Item MUSIC_DISC_RELIC`
- `public static final Item MUSIC_DISC_5`
- `public static final Item MUSIC_DISC_PIGSTEP`
- `public static final Item DISC_FRAGMENT_5`
- `public static final Item TRIDENT`
- `public static final Item PHANTOM_MEMBRANE`
- `public static final Item NAUTILUS_SHELL`
- `public static final Item HEART_OF_THE_SEA`
- `public static final Item CROSSBOW`
- `public static final Item SUSPICIOUS_STEW`
- `public static final Item LOOM`
- `public static final Item FLOWER_BANNER_PATTERN`
- `public static final Item CREEPER_BANNER_PATTERN`
- `public static final Item SKULL_BANNER_PATTERN`
- `public static final Item MOJANG_BANNER_PATTERN`
- `public static final Item GLOBE_BANNER_PATTERN`
- `public static final Item PIGLIN_BANNER_PATTERN`
- `public static final Item GOAT_HORN`
- `public static final Item COMPOSTER`
- `public static final Item BARREL`
- `public static final Item SMOKER`
- `public static final Item BLAST_FURNACE`
- `public static final Item CARTOGRAPHY_TABLE`
- `public static final Item FLETCHING_TABLE`
- `public static final Item GRINDSTONE`
- `public static final Item SMITHING_TABLE`
- `public static final Item STONECUTTER`
- `public static final Item BELL`
- `public static final Item LANTERN`
- `public static final Item SOUL_LANTERN`
- `public static final Item SWEET_BERRIES`
- `public static final Item GLOW_BERRIES`
- `public static final Item CAMPFIRE`
- `public static final Item SOUL_CAMPFIRE`
- `public static final Item SHROOMLIGHT`
- `public static final Item HONEYCOMB`
- `public static final Item BEE_NEST`
- `public static final Item BEEHIVE`
- `public static final Item HONEY_BOTTLE`
- `public static final Item HONEYCOMB_BLOCK`
- `public static final Item LODESTONE`
- `public static final Item CRYING_OBSIDIAN`
- `public static final Item BLACKSTONE`
- `public static final Item BLACKSTONE_SLAB`
- `public static final Item BLACKSTONE_STAIRS`
- `public static final Item GILDED_BLACKSTONE`
- `public static final Item POLISHED_BLACKSTONE`
- `public static final Item POLISHED_BLACKSTONE_SLAB`
- `public static final Item POLISHED_BLACKSTONE_STAIRS`
- `public static final Item CHISELED_POLISHED_BLACKSTONE`
- `public static final Item POLISHED_BLACKSTONE_BRICKS`
- `public static final Item POLISHED_BLACKSTONE_BRICK_SLAB`
- `public static final Item POLISHED_BLACKSTONE_BRICK_STAIRS`
- `public static final Item CRACKED_POLISHED_BLACKSTONE_BRICKS`
- `public static final Item RESPAWN_ANCHOR`
- `public static final Item CANDLE`
- `public static final Item WHITE_CANDLE`
- `public static final Item ORANGE_CANDLE`
- `public static final Item MAGENTA_CANDLE`
- `public static final Item LIGHT_BLUE_CANDLE`
- `public static final Item YELLOW_CANDLE`
- `public static final Item LIME_CANDLE`
- `public static final Item PINK_CANDLE`
- `public static final Item GRAY_CANDLE`
- `public static final Item LIGHT_GRAY_CANDLE`
- `public static final Item CYAN_CANDLE`
- `public static final Item PURPLE_CANDLE`
- `public static final Item BLUE_CANDLE`
- `public static final Item BROWN_CANDLE`
- `public static final Item GREEN_CANDLE`
- `public static final Item RED_CANDLE`
- `public static final Item BLACK_CANDLE`
- `public static final Item SMALL_AMETHYST_BUD`
- `public static final Item MEDIUM_AMETHYST_BUD`
- `public static final Item LARGE_AMETHYST_BUD`
- `public static final Item AMETHYST_CLUSTER`
- `public static final Item POINTED_DRIPSTONE`
- `public static final Item OCHRE_FROGLIGHT`
- `public static final Item VERDANT_FROGLIGHT`
- `public static final Item PEARLESCENT_FROGLIGHT`
- `public static final Item FROGSPAWN`
- `public static final Item ECHO_SHARD`
- `public static final Item BRUSH`
- `public static final Item NETHERITE_UPGRADE_SMITHING_TEMPLATE`
- `public static final Item SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item DUNE_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item COAST_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item WILD_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item WARD_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item EYE_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item VEX_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item TIDE_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item RIB_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item RAISER_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item HOST_ARMOR_TRIM_SMITHING_TEMPLATE`
- `public static final Item ANGLER_POTTERY_SHERD`
- `public static final Item ARCHER_POTTERY_SHERD`
- `public static final Item ARMS_UP_POTTERY_SHERD`
- `public static final Item BLADE_POTTERY_SHERD`
- `public static final Item BREWER_POTTERY_SHERD`
- `public static final Item BURN_POTTERY_SHERD`
- `public static final Item DANGER_POTTERY_SHERD`
- `public static final Item EXPLORER_POTTERY_SHERD`
- `public static final Item FRIEND_POTTERY_SHERD`
- `public static final Item HEART_POTTERY_SHERD`
- `public static final Item HEARTBREAK_POTTERY_SHERD`
- `public static final Item HOWL_POTTERY_SHERD`
- `public static final Item MINER_POTTERY_SHERD`
- `public static final Item MOURNER_POTTERY_SHERD`
- `public static final Item PLENTY_POTTERY_SHERD`
- `public static final Item PRIZE_POTTERY_SHERD`
- `public static final Item SHEAF_POTTERY_SHERD`
- `public static final Item SHELTER_POTTERY_SHERD`
- `public static final Item SKULL_POTTERY_SHERD`
- `public static final Item SNORT_POTTERY_SHERD`

### Methods
- `public static Item registerBlock(Block p_42806_)`
- `public static Item registerBlock(Block p_252092_,  Block... p_248886_)`
- `public static Item registerBlock(BlockItem p_42804_)`
- `public static Item registerBlock(Block p_42811_,  Item p_42812_)`
- `public static Item registerItem(String p_42814_,  Item p_42815_)`
- `public static Item registerItem(ResourceLocation p_42817_,  Item p_42818_)`
- `public static Item registerItem(ResourceKey<Item> p_281502_,  Item p_283159_)`

## ItemStack

*class* `net.minecraft.world.item.ItemStack`

### Fields
- `public static final com.mojang.serialization.Codec<ItemStack> CODEC`
- `@Nullable private final Holder.Reference<Item> delegate`
- `private CompoundTag capNBT`
- `private static final org.slf4j.Logger LOGGER`
- `public static final ItemStack EMPTY`
- `public static final DecimalFormat ATTRIBUTE_MODIFIER_FORMAT`
- `public static final String TAG_ENCH` (= "Enchantments")
- `public static final String TAG_DISPLAY` (= "display")
- `public static final String TAG_DISPLAY_NAME` (= "Name")
- `public static final String TAG_LORE` (= "Lore")
- `public static final String TAG_DAMAGE` (= "Damage")
- `public static final String TAG_COLOR` (= "color")
- `private static final String TAG_UNBREAKABLE` (= "Unbreakable")
- `private static final String TAG_REPAIR_COST` (= "RepairCost")
- `private static final String TAG_CAN_DESTROY_BLOCK_LIST` (= "CanDestroy")
- `private static final String TAG_CAN_PLACE_ON_BLOCK_LIST` (= "CanPlaceOn")
- `private static final String TAG_HIDE_FLAGS` (= "HideFlags")
- `private static final Component DISABLED_ITEM_TOOLTIP`
- `private static final int DONT_HIDE_TOOLTIP` (= 0)
- `private static final Style LORE_STYLE`
- `private int count`
- `private int popTime`
- `@Deprecated @Nullable private final Item item` (deprecated)
- `@Nullable private CompoundTag tag`
- `@Nullable private Entity entityRepresentation`
- `@Nullable private AdventureModeCheck adventureBreakCheck`
- `@Nullable private AdventureModeCheck adventurePlaceCheck`

### Methods
- `public Optional<TooltipComponent> getTooltipImage()`
- `public static ItemStack of(CompoundTag p_41713_)`
- `public boolean isEmpty()`
- `public boolean isItemEnabled(FeatureFlagSet p_250869_)`
- `public ItemStack split(int p_41621_)`
- `public ItemStack copyAndClear()`
- `public Item getItem()`
- `public Holder<Item> getItemHolder()`
- `public boolean is(TagKey<Item> p_204118_)`
- `public boolean is(Item p_150931_)`
- `public boolean is(Predicate<Holder<Item>> p_220168_)`
- `public boolean is(Holder<Item> p_220166_)`
- `public boolean is(HolderSet<Item> p_299078_)`
- `public Stream<TagKey<Item>> getTags()`
- `public InteractionResult useOn(UseOnContext p_41662_)`
- `public InteractionResult onItemUseFirst(UseOnContext p_41662_)`
- `private InteractionResult onItemUse(UseOnContext p_41662_,  Function<UseOnContext,InteractionResult> callback)`
- `public float getDestroySpeed(BlockState p_41692_)`
- `public InteractionResultHolder<ItemStack> use(Level p_41683_,  Player p_41684_,  InteractionHand p_41685_)`
- `public ItemStack finishUsingItem(Level p_41672_,  LivingEntity p_41673_)`
- `public CompoundTag save(CompoundTag p_41740_)`
- `public int getMaxStackSize()`
- `public boolean isStackable()`
- `public boolean isDamageableItem()`
- `public boolean isDamaged()`
- `public int getDamageValue()`
- `public void setDamageValue(int p_41722_)`
- `public int getMaxDamage()`
- `public boolean hurt(int p_220158_,  RandomSource p_220159_,  @Nullable  ServerPlayer p_220160_)`
- `public <T extends LivingEntity> void hurtAndBreak(int p_41623_,  T p_41624_,  Consumer<T> p_41625_)`
- `public boolean isBarVisible()`
- `public int getBarWidth()`
- `public int getBarColor()`
- `public boolean overrideStackedOnOther(Slot p_150927_,  ClickAction p_150928_,  Player p_150929_)`
- `public boolean overrideOtherStackedOnMe(ItemStack p_150933_,  Slot p_150934_,  ClickAction p_150935_,  Player p_150936_,  SlotAccess p_150937_)`
- `public void hurtEnemy(LivingEntity p_41641_,  Player p_41642_)`
- `public void mineBlock(Level p_41687_,  BlockState p_41688_,  BlockPos p_41689_,  Player p_41690_)`
- `public boolean isCorrectToolForDrops(BlockState p_41736_)`
- `public InteractionResult interactLivingEntity(Player p_41648_,  LivingEntity p_41649_,  InteractionHand p_41650_)`
- `public ItemStack copy()`
- `public ItemStack copyWithCount(int p_256354_)`
- `public static boolean matches(ItemStack p_41729_,  ItemStack p_41730_)`
- `public static boolean isSameItem(ItemStack p_287761_,  ItemStack p_287676_)`
- `public static boolean isSameItemSameTags(ItemStack p_150943_,  ItemStack p_150944_)`
- `public String getDescriptionId()`
- `public String toString()`
- `public void inventoryTick(Level p_41667_,  Entity p_41668_,  int p_41669_,  boolean p_41670_)`
- `public void onCraftedBy(Level p_41679_,  Player p_41680_,  int p_41681_)`
- `public int getUseDuration()`
- `public UseAnim getUseAnimation()`
- `public void releaseUsing(Level p_41675_,  LivingEntity p_41676_,  int p_41677_)`
- `public boolean useOnRelease()`
- `public boolean hasTag()`
- `@Nullable public CompoundTag getTag()`
- `public CompoundTag getOrCreateTag()`
- `public CompoundTag getOrCreateTagElement(String p_41699_)`
- `@Nullable public CompoundTag getTagElement(String p_41738_)`
- `public void removeTagKey(String p_41750_)`
- `public ListTag getEnchantmentTags()`
- `public void setTag(@Nullable  CompoundTag p_41752_)`
- `public Component getHoverName()`
- `public ItemStack setHoverName(@Nullable  Component p_41715_)`
- `public void resetHoverName()`
- `public boolean hasCustomHoverName()`
- `public List<Component> getTooltipLines(@Nullable  Player p_41652_,  TooltipFlag p_41653_)`
- `private static boolean shouldShowInTooltip(int p_41627_,  ItemStack.TooltipPart p_41628_)`
- `private int getHideFlags()`
- `public void hideTooltipPart(ItemStack.TooltipPart p_41655_)`
- `public static void appendEnchantmentNames(List<Component> p_41710_,  ListTag p_41711_)`
- `private static Collection<Component> expandBlockState(String p_41762_)`
- `public boolean hasFoil()`
- `public Rarity getRarity()`
- `public boolean isEnchantable()`
- `public void enchant(Enchantment p_41664_,  int p_41665_)`
- `public boolean isEnchanted()`
- `public void addTagElement(String p_41701_,  Tag p_41702_)`
- `public boolean isFramed()`
- `public void setEntityRepresentation(@Nullable  Entity p_41637_)`
- `@Nullable public ItemFrame getFrame()`
- `@Nullable public Entity getEntityRepresentation()`
- `public int getBaseRepairCost()`
- `public void setRepairCost(int p_41743_)`
- `public com.google.common.collect.Multimap<Attribute,AttributeModifier> getAttributeModifiers(EquipmentSlot p_41639_)`
- `public void addAttributeModifier(Attribute p_41644_,  AttributeModifier p_41645_,  @Nullable  EquipmentSlot p_41646_)`
- `public Component getDisplayName()`
- `public boolean hasAdventureModePlaceTagForBlock(Registry<Block> p_204122_,  BlockInWorld p_204123_)`
- `public boolean hasAdventureModeBreakTagForBlock(Registry<Block> p_204129_,  BlockInWorld p_204130_)`
- `public int getPopTime()`
- `public void setPopTime(int p_41755_)`
- `public int getCount()`
- `public void setCount(int p_41765_)`
- `public void grow(int p_41770_)`
- `public void shrink(int p_41775_)`
- `public void onUseTick(Level p_41732_,  LivingEntity p_41733_,  int p_41734_)`
- `@Deprecated public void onDestroyed(ItemEntity p_150925_)` (deprecated)
- `public boolean isEdible()`
- `public void deserializeNBT(CompoundTag nbt)`
- `private void forgeInit()`
  Set up forge's ItemStack additions.
- `public SoundEvent getDrinkingSound()`
- `public SoundEvent getEatingSound()`

### Inherited methods
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeItemStack`: `areShareTagsEqual`, `canApplyAtEnchantingTable`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `doesSneakBypassUse`, `elytraFlightTick`, `equals`, `getAllEnchantments`, `getBurnTime`, `getCraftingRemainingItem`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `isBookEnchantable`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `isRepairable`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onStopUsing`, `readShareTag`, `serializeNBT`, `shouldCauseBlockBreakReset`

## ItemStackLinkedSet

*class* `net.minecraft.world.item.ItemStackLinkedSet`

### Fields
- `public static final it.unimi.dsi.fastutil.Hash.Strategy<? super ItemStack> TYPE_AND_TAG`

### Methods
- `static int hashStackAndTag(@Nullable  ItemStack p_262160_)`
- `public static Set<ItemStack> createTypeAndTagSet()`

## ItemUtils

*class* `net.minecraft.world.item.ItemUtils`

### Methods
- `public static InteractionResultHolder<ItemStack> startUsingInstantly(Level p_150960_,  Player p_150961_,  InteractionHand p_150962_)`
- `public static ItemStack createFilledResult(ItemStack p_41818_,  Player p_41819_,  ItemStack p_41820_,  boolean p_41821_)`
- `public static ItemStack createFilledResult(ItemStack p_41814_,  Player p_41815_,  ItemStack p_41816_)`
- `public static void onContainerDestroyed(ItemEntity p_150953_,  Stream<ItemStack> p_150954_)`

## KnowledgeBookItem

*class* `net.minecraft.world.item.KnowledgeBookItem`

### Fields
- `private static final String RECIPE_TAG` (= "Recipes")
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_42824_,  Player p_42825_,  InteractionHand p_42826_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## LeadItem

*class* `net.minecraft.world.item.LeadItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_42834_)`
- `public static InteractionResult bindPlayerMobs(Player p_42830_,  Level p_42831_,  BlockPos p_42832_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## LingeringPotionItem

*class* `net.minecraft.world.item.LingeringPotionItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public void appendHoverText(ItemStack p_42838_,  @Nullable  Level p_42839_,  List<Component> p_42840_,  TooltipFlag p_42841_)`
- `public InteractionResultHolder<ItemStack> use(Level p_42843_,  Player p_42844_,  InteractionHand p_42845_)`

### Inherited methods
- from `net.minecraft.world.item.PotionItem`: `finishUsingItem`, `getDefaultInstance`, `getDescriptionId`, `getUseAnimation`, `getUseDuration`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## MapItem

*class* `net.minecraft.world.item.MapItem`

### Fields
- `public static final int IMAGE_WIDTH` (= 128)
- `public static final int IMAGE_HEIGHT` (= 128)
- `private static final int DEFAULT_MAP_COLOR` (= -12173266)
- `private static final String TAG_MAP` (= "map")
- `public static final String MAP_SCALE_TAG` (= "map_scale_direction")
- `public static final String MAP_LOCK_TAG` (= "map_to_lock")

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static ItemStack create(Level p_42887_,  int p_42888_,  int p_42889_,  byte p_42890_,  boolean p_42891_,  boolean p_42892_)`
- `@Nullable public static MapItemSavedData getSavedData(@Nullable  Integer p_151129_,  Level p_151130_)`
- `@Nullable public static MapItemSavedData getSavedData(ItemStack p_42854_,  Level p_42855_)`
- `@Nullable protected MapItemSavedData getCustomMapData(ItemStack p_42910_,  Level p_42911_)`
- `@Nullable public static Integer getMapId(ItemStack p_151132_)`
- `private static int createNewSavedData(Level p_151121_,  int p_151122_,  int p_151123_,  int p_151124_,  boolean p_151125_,  boolean p_151126_,  ResourceKey<Level> p_151127_)`
- `private static void storeMapData(ItemStack p_151109_,  int p_151110_)`
- `private static void createAndStoreSavedData(ItemStack p_151112_,  Level p_151113_,  int p_151114_,  int p_151115_,  int p_151116_,  boolean p_151117_,  boolean p_151118_,  ResourceKey<Level> p_151119_)`
- `public static String makeKey(int p_42849_)`
- `public void update(Level p_42894_,  Entity p_42895_,  MapItemSavedData p_42896_)`
- `private BlockState getCorrectStateForFluidBlock(Level p_42901_,  BlockState p_42902_,  BlockPos p_42903_)`
- `private static boolean isBiomeWatery(boolean[] p_212252_,  int p_212253_,  int p_212254_)`
- `public static void renderBiomePreviewMap(ServerLevel p_42851_,  ItemStack p_42852_)`
- `public void inventoryTick(ItemStack p_42870_,  Level p_42871_,  Entity p_42872_,  int p_42873_,  boolean p_42874_)`
- `@Nullable public Packet<?> getUpdatePacket(ItemStack p_42876_,  Level p_42877_,  Player p_42878_)`
- `public void onCraftedBy(ItemStack p_42913_,  Level p_42914_,  Player p_42915_)`
- `private static void scaleMap(ItemStack p_42857_,  Level p_42858_,  int p_42859_)`
- `public static void lockMap(Level p_42898_,  ItemStack p_42899_)`
- `public void appendHoverText(ItemStack p_42880_,  @Nullable  Level p_42881_,  List<Component> p_42882_,  TooltipFlag p_42883_)`
- `private static Component getTooltipForId(int p_301261_)`
- `public static Component getTooltipForId(ItemStack p_299069_)`
- `public static int getColor(ItemStack p_42919_)`
- `public InteractionResult useOn(UseOnContext p_42885_)`

### Inherited methods
- from `net.minecraft.world.item.ComplexItem`: `isComplex`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `isBarVisible`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## MilkBucketItem

*class* `net.minecraft.world.item.MilkBucketItem`

### Fields
- `private static final int DRINK_DURATION` (= 32)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ItemStack finishUsingItem(ItemStack p_42923_,  Level p_42924_,  LivingEntity p_42925_)`
- `public int getUseDuration(ItemStack p_42933_)`
- `public UseAnim getUseAnimation(ItemStack p_42931_)`
- `public InteractionResultHolder<ItemStack> use(Level p_42927_,  Player p_42928_,  InteractionHand p_42929_)`
- `public ICapabilityProvider initCapabilities(ItemStack stack,  @Nullable  CompoundTag nbt)`
  Description copied from interface: IForgeItem
  Called from ItemStack.setItem, will hold extra data for the life of this
   ItemStack. Can be retrieved from stack.getCapabilities() The NBT can be null
   if this is not called from readNBT or if the item the stack is changing FROM
   is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem()
   to see the OLD item. Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold
 capabilities for the life of this item.

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## MinecartItem

*class* `net.minecraft.world.item.MinecartItem`

### Fields
- `private static final DispenseItemBehavior DISPENSE_ITEM_BEHAVIOR`
- `final AbstractMinecart.Type type`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_42943_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## MobBucketItem

*class* `net.minecraft.world.item.MobBucketItem`

### Fields
- `private final Supplier<? extends EntityType<?>> entityTypeSupplier`
- `private final Supplier<? extends SoundEvent> emptySoundSupplier`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public void checkExtraContent(@Nullable  Player p_151146_,  Level p_151147_,  ItemStack p_151148_,  BlockPos p_151149_)`
- `protected void playEmptySound(@Nullable  Player p_151151_,  LevelAccessor p_151152_,  BlockPos p_151153_)`
- `private void spawn(ServerLevel p_151142_,  ItemStack p_151143_,  BlockPos p_151144_)`
- `public void appendHoverText(ItemStack p_151155_,  @Nullable  Level p_151156_,  List<Component> p_151157_,  TooltipFlag p_151158_)`
- `protected EntityType<?> getFishType()`
- `protected SoundEvent getEmptySound()`

### Inherited methods
- from `net.minecraft.world.item.BucketItem`: `canBlockContainFluid`, `emptyContents`, `emptyContents`, `getEmptySuccessItem`, `getFluid`, `initCapabilities`, `use`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## NameTagItem

*class* `net.minecraft.world.item.NameTagItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult interactLivingEntity(ItemStack p_42954_,  Player p_42955_,  LivingEntity p_42956_,  InteractionHand p_42957_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## PickaxeItem

*class* `net.minecraft.world.item.PickaxeItem`

### Inherited fields
- from `net.minecraft.world.item.DiggerItem`: `speed`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action

### Inherited methods
- from `net.minecraft.world.item.DiggerItem`: `getAttackDamage`, `getDefaultAttributeModifiers`, `getDestroySpeed`, `hurtEnemy`, `isCorrectToolForDrops`, `isCorrectToolForDrops`, `mineBlock`
- from `net.minecraft.world.item.TieredItem`: `getEnchantmentValue`, `getTier`, `isValidRepairItem`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## PlaceOnWaterBlockItem

*class* `net.minecraft.world.item.PlaceOnWaterBlockItem`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_220229_)`
- `public InteractionResultHolder<ItemStack> use(Level p_220231_,  Player p_220232_,  InteractionHand p_220233_)`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlacementState`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `registerBlocks`, `removeFromBlockToItemMap`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## PlayerHeadItem

*class* `net.minecraft.world.item.PlayerHeadItem`

### Fields
- `public static final String TAG_SKULL_OWNER` (= "SkullOwner")

### Inherited fields
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `wallBlock`
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public Component getName(ItemStack p_42977_)`
- `public void verifyTagAfterLoad(CompoundTag p_151179_)`

### Inherited methods
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `canPlace`, `getPlacementState`, `registerBlocks`, `removeFromBlockToItemMap`
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## PotionItem

*class* `net.minecraft.world.item.PotionItem`

### Fields
- `private static final int DRINK_DURATION` (= 32)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ItemStack getDefaultInstance()`
- `public ItemStack finishUsingItem(ItemStack p_42984_,  Level p_42985_,  LivingEntity p_42986_)`
- `public InteractionResult useOn(UseOnContext p_220235_)`
- `public int getUseDuration(ItemStack p_43001_)`
- `public UseAnim getUseAnimation(ItemStack p_42997_)`
- `public InteractionResultHolder<ItemStack> use(Level p_42993_,  Player p_42994_,  InteractionHand p_42995_)`
- `public String getDescriptionId(ItemStack p_43003_)`
- `public void appendHoverText(ItemStack p_42988_,  @Nullable  Level p_42989_,  List<Component> p_42990_,  TooltipFlag p_42991_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ProjectileWeaponItem

*class* `net.minecraft.world.item.ProjectileWeaponItem`

### Fields
- `public static final Predicate<ItemStack> ARROW_ONLY`
- `public static final Predicate<ItemStack> ARROW_OR_FIREWORK`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public Predicate<ItemStack> getSupportedHeldProjectiles()`
- `public abstract Predicate<ItemStack> getAllSupportedProjectiles()`
- `public static ItemStack getHeldProjectile(LivingEntity p_43011_,  Predicate<ItemStack> p_43012_)`
- `public int getEnchantmentValue()`
  Description copied from class: Item
  Forge: Use ItemStack sensitive version.
- `public abstract int getDefaultProjectileRange()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## RecordItem

*class* `net.minecraft.world.item.RecordItem`

### Fields
- `@Deprecated private static final Map<SoundEvent,RecordItem> BY_NAME` (deprecated)
- `private final int analogOutput`
- `@Deprecated private final SoundEvent sound` (deprecated)
- `private final int lengthInTicks`
- `private final Supplier<SoundEvent> soundSupplier`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_43048_)`
- `public int getAnalogOutput()`
- `public void appendHoverText(ItemStack p_43043_,  @Nullable  Level p_43044_,  List<Component> p_43045_,  TooltipFlag p_43046_)`
- `public MutableComponent getDisplayName()`
- `@Nullable public static RecordItem getBySound(SoundEvent p_43041_)`
- `public SoundEvent getSound()`
- `public int getLengthInTicks()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SaddleItem

*class* `net.minecraft.world.item.SaddleItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult interactLivingEntity(ItemStack p_43055_,  Player p_43056_,  LivingEntity p_43057_,  InteractionHand p_43058_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ScaffoldingBlockItem

*class* `net.minecraft.world.item.ScaffoldingBlockItem`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `@Nullable public BlockPlaceContext updatePlacementContext(BlockPlaceContext p_43063_)`
- `protected boolean mustSurvive()`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlacementState`, `getPlaceSound`, `getPlaceSound`, `onDestroyed`, `place`, `placeBlock`, `registerBlocks`, `removeFromBlockToItemMap`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ServerItemCooldowns

*class* `net.minecraft.world.item.ServerItemCooldowns`

### Fields
- `private final ServerPlayer player`

### Methods
- `protected void onCooldownStarted(Item p_43069_,  int p_43070_)`
- `protected void onCooldownEnded(Item p_43072_)`

### Inherited methods
- from `net.minecraft.world.item.ItemCooldowns`: `addCooldown`, `getCooldownPercent`, `isOnCooldown`, `removeCooldown`, `tick`

## ShearsItem

*class* `net.minecraft.world.item.ShearsItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean mineBlock(ItemStack p_43078_,  Level p_43079_,  BlockState p_43080_,  BlockPos p_43081_,  LivingEntity p_43082_)`
- `public boolean isCorrectToolForDrops(BlockState p_43087_)`
- `public float getDestroySpeed(ItemStack p_43084_,  BlockState p_43085_)`
- `public InteractionResult interactLivingEntity(ItemStack stack,  Player playerIn,  LivingEntity entity,  InteractionHand hand)`
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action
- `public InteractionResult useOn(UseOnContext p_186371_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `inventoryTick`, `isBarVisible`, `isComplex`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ShieldItem

*class* `net.minecraft.world.item.ShieldItem`

### Fields
- `public static final int EFFECTIVE_BLOCK_DELAY` (= 5)
- `public static final float MINIMUM_DURABILITY_DAMAGE` (= 3.0f)
- `public static final String TAG_BASE_COLOR` (= "Base")

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public String getDescriptionId(ItemStack p_43109_)`
- `public void appendHoverText(ItemStack p_43094_,  @Nullable  Level p_43095_,  List<Component> p_43096_,  TooltipFlag p_43097_)`
- `public UseAnim getUseAnimation(ItemStack p_43105_)`
- `public int getUseDuration(ItemStack p_43107_)`
- `public InteractionResultHolder<ItemStack> use(Level p_43099_,  Player p_43100_,  InteractionHand p_43101_)`
- `public boolean isValidRepairItem(ItemStack p_43091_,  ItemStack p_43092_)`
- `public static DyeColor getColor(ItemStack p_43103_)`
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action
- `public EquipmentSlot getEquipmentSlot()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.item.Equipable`: `getEquipSound`, `swapWithEquipmentSlot`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ShovelItem

*class* `net.minecraft.world.item.ShovelItem`

### Fields
- `protected static final Map<Block,BlockState> FLATTENABLES`

### Inherited fields
- from `net.minecraft.world.item.DiggerItem`: `speed`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_43119_)`
- `@Nullable public static @Nullable BlockState getShovelPathingState(BlockState originalState)`
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action

### Inherited methods
- from `net.minecraft.world.item.DiggerItem`: `getAttackDamage`, `getDefaultAttributeModifiers`, `getDestroySpeed`, `hurtEnemy`, `isCorrectToolForDrops`, `isCorrectToolForDrops`, `mineBlock`
- from `net.minecraft.world.item.TieredItem`: `getEnchantmentValue`, `getTier`, `isValidRepairItem`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SignApplicator

*interface* `net.minecraft.world.item.SignApplicator`

### Methods
- `boolean tryApplyToSign(Level p_277619_,  SignBlockEntity p_277811_,  boolean p_277484_,  Player p_277362_)`
- `default boolean canApplyToSign(SignText p_278084_,  Player p_277515_)`

## SignItem

*class* `net.minecraft.world.item.SignItem`

### Inherited fields
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `wallBlock`
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `protected boolean updateCustomBlockEntityTag(BlockPos p_43130_,  Level p_43131_,  @Nullable  Player p_43132_,  ItemStack p_43133_,  BlockState p_43134_)`

### Inherited methods
- from `net.minecraft.world.item.StandingAndWallBlockItem`: `canPlace`, `getPlacementState`, `registerBlocks`, `removeFromBlockToItemMap`
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SimpleFoiledItem

*class* `net.minecraft.world.item.SimpleFoiledItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean isFoil(ItemStack p_43138_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SmithingTemplateItem

*class* `net.minecraft.world.item.SmithingTemplateItem`

### Fields
- `private static final ChatFormatting TITLE_FORMAT`
- `private static final ChatFormatting DESCRIPTION_FORMAT`
- `private static final Component INGREDIENTS_TITLE`
- `private static final Component APPLIES_TO_TITLE`
- `private static final Component NETHERITE_UPGRADE`
- `private static final Component ARMOR_TRIM_APPLIES_TO`
- `private static final Component ARMOR_TRIM_INGREDIENTS`
- `private static final Component ARMOR_TRIM_BASE_SLOT_DESCRIPTION`
- `private static final Component ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION`
- `private static final Component NETHERITE_UPGRADE_APPLIES_TO`
- `private static final Component NETHERITE_UPGRADE_INGREDIENTS`
- `private static final Component NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION`
- `private static final Component NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION`
- `private static final ResourceLocation EMPTY_SLOT_HELMET`
- `private static final ResourceLocation EMPTY_SLOT_CHESTPLATE`
- `private static final ResourceLocation EMPTY_SLOT_LEGGINGS`
- `private static final ResourceLocation EMPTY_SLOT_BOOTS`
- `private static final ResourceLocation EMPTY_SLOT_HOE`
- `private static final ResourceLocation EMPTY_SLOT_AXE`
- `private static final ResourceLocation EMPTY_SLOT_SWORD`
- `private static final ResourceLocation EMPTY_SLOT_SHOVEL`
- `private static final ResourceLocation EMPTY_SLOT_PICKAXE`
- `private static final ResourceLocation EMPTY_SLOT_INGOT`
- `private static final ResourceLocation EMPTY_SLOT_REDSTONE_DUST`
- `private static final ResourceLocation EMPTY_SLOT_QUARTZ`
- `private static final ResourceLocation EMPTY_SLOT_EMERALD`
- `private static final ResourceLocation EMPTY_SLOT_DIAMOND`
- `private static final ResourceLocation EMPTY_SLOT_LAPIS_LAZULI`
- `private static final ResourceLocation EMPTY_SLOT_AMETHYST_SHARD`
- `private final Component appliesTo`
- `private final Component ingredients`
- `private final Component upgradeDescription`
- `private final Component baseSlotDescription`
- `private final Component additionsSlotDescription`
- `private final List<ResourceLocation> baseSlotEmptyIcons`
- `private final List<ResourceLocation> additionalSlotEmptyIcons`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static SmithingTemplateItem createArmorTrimTemplate(ResourceKey<TrimPattern> p_266875_)`
- `public static SmithingTemplateItem createArmorTrimTemplate(ResourceLocation p_266880_)`
- `public static SmithingTemplateItem createNetheriteUpgradeTemplate()`
- `private static List<ResourceLocation> createTrimmableArmorIconList()`
- `private static List<ResourceLocation> createTrimmableMaterialIconList()`
- `private static List<ResourceLocation> createNetheriteUpgradeIconList()`
- `private static List<ResourceLocation> createNetheriteUpgradeMaterialList()`
- `public void appendHoverText(ItemStack p_267313_,  @Nullable  Level p_266896_,  List<Component> p_266820_,  TooltipFlag p_266857_)`
- `public Component getBaseSlotDescription()`
- `public Component getAdditionSlotDescription()`
- `public List<ResourceLocation> getBaseSlotEmptyIcons()`
- `public List<ResourceLocation> getAdditionalSlotEmptyIcons()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SnowballItem

*class* `net.minecraft.world.item.SnowballItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_43142_,  Player p_43143_,  InteractionHand p_43144_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SolidBucketItem

*class* `net.minecraft.world.item.SolidBucketItem`

### Fields
- `private final SoundEvent placeSound`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_151197_)`
- `public String getDescriptionId()`
- `protected SoundEvent getPlaceSound(BlockState p_151199_)`
- `public boolean emptyContents(@Nullable  Player p_151192_,  Level p_151193_,  BlockPos p_151194_,  @Nullable  BlockHitResult p_151195_)`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getPlacementState`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `registerBlocks`, `removeFromBlockToItemMap`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.item.DispensibleContainerItem`: `checkExtraContent`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeDispensibleContainerItem`: `emptyContents`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SpawnEggItem

*class* `net.minecraft.world.item.SpawnEggItem`

### Fields
- `private static final Map<EntityType<? extends Mob>,SpawnEggItem> BY_ID`
- `private final int backgroundColor`
- `private final int highlightColor`
- `private final EntityType<?> defaultType`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_43223_)`
- `public InteractionResultHolder<ItemStack> use(Level p_43225_,  Player p_43226_,  InteractionHand p_43227_)`
- `public boolean spawnsEntity(@Nullable  CompoundTag p_43231_,  EntityType<?> p_43232_)`
- `public int getColor(int p_43212_)`
- `@Deprecated @Nullable public static SpawnEggItem byId(@Nullable  EntityType<?> p_43214_)` (deprecated)
- `public static Iterable<SpawnEggItem> eggs()`
- `public EntityType<?> getType(@Nullable  CompoundTag p_43229_)`
- `public FeatureFlagSet requiredFeatures()`
- `public Optional<Mob> spawnOffspringFromSpawnEgg(Player p_43216_,  Mob p_43217_,  EntityType<? extends Mob> p_43218_,  ServerLevel p_43219_,  Vec3 p_43220_,  ItemStack p_43221_)`
- `protected EntityType<?> getDefaultType()`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SpectralArrowItem

*class* `net.minecraft.world.item.SpectralArrowItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public AbstractArrow createArrow(Level p_43237_,  ItemStack p_43238_,  LivingEntity p_43239_)`

### Inherited methods
- from `net.minecraft.world.item.ArrowItem`: `isInfinite`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SplashPotionItem

*class* `net.minecraft.world.item.SplashPotionItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_43243_,  Player p_43244_,  InteractionHand p_43245_)`

### Inherited methods
- from `net.minecraft.world.item.PotionItem`: `appendHoverText`, `finishUsingItem`, `getDefaultInstance`, `getDescriptionId`, `getUseAnimation`, `getUseDuration`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SpyglassItem

*class* `net.minecraft.world.item.SpyglassItem`

### Fields
- `public static final int USE_DURATION` (= 1200)
- `public static final float ZOOM_FOV_MODIFIER` (= 0.10000000149011612f)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public int getUseDuration(ItemStack p_151222_)`
- `public UseAnim getUseAnimation(ItemStack p_151224_)`
- `public InteractionResultHolder<ItemStack> use(Level p_151218_,  Player p_151219_,  InteractionHand p_151220_)`
- `public ItemStack finishUsingItem(ItemStack p_151209_,  Level p_151210_,  LivingEntity p_151211_)`
- `public void releaseUsing(ItemStack p_151213_,  Level p_151214_,  LivingEntity p_151215_,  int p_151216_)`
- `private void stopUsing(LivingEntity p_151207_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## StandingAndWallBlockItem

*class* `net.minecraft.world.item.StandingAndWallBlockItem`

### Fields
- `protected final Block wallBlock`
- `private final Direction attachmentDirection`

### Inherited fields
- from `net.minecraft.world.item.BlockItem`: `BLOCK_ENTITY_TAG`, `BLOCK_STATE_TAG`
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `protected boolean canPlace(LevelReader p_250350_,  BlockState p_249311_,  BlockPos p_250328_)`
- `@Nullable protected BlockState getPlacementState(BlockPlaceContext p_43255_)`
- `public void registerBlocks(Map<Block,Item> p_43252_,  Item p_43253_)`
- `public void removeFromBlockToItemMap(Map<Block,Item> blockToItemMap,  Item itemIn)`

### Inherited methods
- from `net.minecraft.world.item.BlockItem`: `appendHoverText`, `canFitInsideContainerItems`, `canPlace`, `getBlock`, `getBlockEntityData`, `getDescriptionId`, `getPlaceSound`, `getPlaceSound`, `mustSurvive`, `onDestroyed`, `place`, `placeBlock`, `requiredFeatures`, `setBlockEntityData`, `updateCustomBlockEntityTag`, `updateCustomBlockEntityTag`, `updatePlacementContext`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SuspiciousStewItem

*class* `net.minecraft.world.item.SuspiciousStewItem`

### Fields
- `public static final String EFFECTS_TAG` (= "effects")
- `public static final int DEFAULT_DURATION` (= 160)

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static void saveMobEffects(ItemStack p_298817_,  List<SuspiciousEffectHolder.EffectEntry> p_301117_)`
- `public static void appendMobEffects(ItemStack p_298473_,  List<SuspiciousEffectHolder.EffectEntry> p_301341_)`
- `private static void listPotionEffects(ItemStack p_260126_,  Consumer<SuspiciousEffectHolder.EffectEntry> p_259500_)`
- `public void appendHoverText(ItemStack p_260314_,  @Nullable  Level p_259224_,  List<Component> p_259700_,  TooltipFlag p_260021_)`
- `public ItemStack finishUsingItem(ItemStack p_43263_,  Level p_43264_,  LivingEntity p_43265_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## SwordItem

*class* `net.minecraft.world.item.SwordItem`

### Fields
- `private final float attackDamage`
- `private final com.google.common.collect.Multimap<Attribute,AttributeModifier> defaultModifiers`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public float getDamage()`
- `public boolean canAttackBlock(BlockState p_43291_,  Level p_43292_,  BlockPos p_43293_,  Player p_43294_)`
- `public float getDestroySpeed(ItemStack p_43288_,  BlockState p_43289_)`
- `public boolean hurtEnemy(ItemStack p_43278_,  LivingEntity p_43279_,  LivingEntity p_43280_)`
- `public boolean mineBlock(ItemStack p_43282_,  Level p_43283_,  BlockState p_43284_,  BlockPos p_43285_,  LivingEntity p_43286_)`
- `public boolean isCorrectToolForDrops(BlockState p_43298_)`
- `public com.google.common.collect.Multimap<Attribute,AttributeModifier> getDefaultAttributeModifiers(EquipmentSlot p_43274_)`
- `public boolean canPerformAction(ItemStack stack,  ToolAction toolAction)`
  Description copied from interface: IForgeItem
  Queries if an item can perform the given action.
   See ToolActions for a description of each stock action
  - param: stack - The stack being used
  - param: toolAction - The action being queried
  - returns: True if the stack can perform the action

### Inherited methods
- from `net.minecraft.world.item.TieredItem`: `getEnchantmentValue`, `getTier`, `isValidRepairItem`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ThrowablePotionItem

*class* `net.minecraft.world.item.ThrowablePotionItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResultHolder<ItemStack> use(Level p_43303_,  Player p_43304_,  InteractionHand p_43305_)`

### Inherited methods
- from `net.minecraft.world.item.PotionItem`: `appendHoverText`, `finishUsingItem`, `getDefaultInstance`, `getDescriptionId`, `getUseAnimation`, `getUseDuration`, `useOn`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## Tier

*interface* `net.minecraft.world.item.Tier`

### Methods
- `int getUses()`
- `float getSpeed()`
- `float getAttackDamageBonus()`
- `@Deprecated int getLevel()` (deprecated)
- `int getEnchantmentValue()`
- `Ingredient getRepairIngredient()`
- `@Nullable default TagKey<Block> getTag()`

## TieredItem

*class* `net.minecraft.world.item.TieredItem`

### Fields
- `private final Tier tier`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public Tier getTier()`
- `public int getEnchantmentValue()`
  Description copied from class: Item
  Forge: Use ItemStack sensitive version.
- `public boolean isValidRepairItem(ItemStack p_43311_,  ItemStack p_43312_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## TippedArrowItem

*class* `net.minecraft.world.item.TippedArrowItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public ItemStack getDefaultInstance()`
- `public void appendHoverText(ItemStack p_43359_,  @Nullable  Level p_43360_,  List<Component> p_43361_,  TooltipFlag p_43362_)`
- `public String getDescriptionId(ItemStack p_43364_)`

### Inherited methods
- from `net.minecraft.world.item.ArrowItem`: `createArrow`, `isInfinite`
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDescription`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `use`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## TooltipFlag

*interface* `net.minecraft.world.item.TooltipFlag`

### Fields
- `static final TooltipFlag.Default NORMAL`
- `static final TooltipFlag.Default ADVANCED`

### Methods
- `boolean isAdvanced()`
- `boolean isCreative()`

## TooltipFlag.Default

*record* `net.minecraft.world.item.TooltipFlag.Default`

Enclosing interface: TooltipFlag

### Fields
- `private final boolean advanced`
  The field for the advanced record component.
- `private final boolean creative`
  The field for the creative record component.

### Inherited fields
- from `net.minecraft.world.item.TooltipFlag`: `ADVANCED`, `NORMAL`

### Methods
- `public boolean isAdvanced()`
- `public boolean isCreative()`
- `public TooltipFlag.Default asCreative()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public boolean advanced()`
  Returns the value of the advanced record component.
  - returns: the value of the advanced record component
- `public boolean creative()`
  Returns the value of the creative record component.
  - returns: the value of the creative record component

## TridentItem

*class* `net.minecraft.world.item.TridentItem`

### Fields
- `public static final int THROW_THRESHOLD_TIME` (= 10)
- `public static final float BASE_DAMAGE` (= 8.0f)
- `public static final float SHOOT_POWER` (= 2.5f)
- `private final com.google.common.collect.Multimap<Attribute,AttributeModifier> defaultModifiers`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public boolean canAttackBlock(BlockState p_43409_,  Level p_43410_,  BlockPos p_43411_,  Player p_43412_)`
- `public UseAnim getUseAnimation(ItemStack p_43417_)`
- `public int getUseDuration(ItemStack p_43419_)`
- `public void releaseUsing(ItemStack p_43394_,  Level p_43395_,  LivingEntity p_43396_,  int p_43397_)`
- `public InteractionResultHolder<ItemStack> use(Level p_43405_,  Player p_43406_,  InteractionHand p_43407_)`
- `public boolean hurtEnemy(ItemStack p_43390_,  LivingEntity p_43391_,  LivingEntity p_43392_)`
- `public boolean mineBlock(ItemStack p_43399_,  Level p_43400_,  BlockState p_43401_,  BlockPos p_43402_,  LivingEntity p_43403_)`
- `public com.google.common.collect.Multimap<Attribute,AttributeModifier> getDefaultAttributeModifiers(EquipmentSlot p_43383_)`
- `public int getEnchantmentValue()`
  Description copied from class: Item
  Forge: Use ItemStack sensitive version.

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `hasCraftingRemainingItem`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOn`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## Vanishable

*interface* `net.minecraft.world.item.Vanishable`

## WritableBookItem

*class* `net.minecraft.world.item.WritableBookItem`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public InteractionResult useOn(UseOnContext p_43447_)`
- `public InteractionResultHolder<ItemStack> use(Level p_43449_,  Player p_43450_,  InteractionHand p_43451_)`
- `public static boolean makeSureTagIsValid(@Nullable  CompoundTag p_43453_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## WrittenBookItem

*class* `net.minecraft.world.item.WrittenBookItem`

### Fields
- `public static final int TITLE_LENGTH` (= 16)
- `public static final int TITLE_MAX_LENGTH` (= 32)
- `public static final int PAGE_EDIT_LENGTH` (= 1024)
- `public static final int PAGE_LENGTH` (= 32767)
- `public static final int MAX_PAGES` (= 100)
- `public static final int MAX_GENERATION` (= 2)
- `public static final String TAG_TITLE` (= "title")
- `public static final String TAG_FILTERED_TITLE` (= "filtered_title")
- `public static final String TAG_AUTHOR` (= "author")
- `public static final String TAG_PAGES` (= "pages")
- `public static final String TAG_FILTERED_PAGES` (= "filtered_pages")
- `public static final String TAG_GENERATION` (= "generation")
- `public static final String TAG_RESOLVED` (= "resolved")

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public static boolean makeSureTagIsValid(@Nullable  CompoundTag p_43472_)`
- `public static int getGeneration(ItemStack p_43474_)`
- `public static int getPageCount(ItemStack p_43478_)`
- `public Component getName(ItemStack p_43480_)`
- `public void appendHoverText(ItemStack p_43457_,  @Nullable  Level p_43458_,  List<Component> p_43459_,  TooltipFlag p_43460_)`
- `public InteractionResult useOn(UseOnContext p_43466_)`
- `public InteractionResultHolder<ItemStack> use(Level p_43468_,  Player p_43469_,  InteractionHand p_43470_)`
- `public static boolean resolveBookComponents(ItemStack p_43462_,  @Nullable  CommandSourceStack p_43463_,  @Nullable  Player p_43464_)`
- `private static String resolvePage(@Nullable  CommandSourceStack p_151249_,  @Nullable  Player p_151250_,  String p_151251_)`
- `public boolean isFoil(ItemStack p_43476_)`

### Inherited methods
- from `net.minecraft.world.item.Item`: `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `requiredFeatures`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`
