# net.minecraft.world.effect

- [AbsorptionMobEffect](#absorptionmobeffect)
- [AttributeModifierTemplate](#attributemodifiertemplate)
- [BadOmenMobEffect](#badomenmobeffect)
- [Class MobEffectCategory](#class-mobeffectcategory)
- [HealOrHarmMobEffect](#healorharmmobeffect)
- [HungerMobEffect](#hungermobeffect)
- [InstantenousMobEffect](#instantenousmobeffect)
- [MobEffect](#mobeffect)
- [MobEffect.MobEffectAttributeModifierTemplate](#mobeffect.mobeffectattributemodifiertemplate)
- [MobEffectInstance](#mobeffectinstance)
- [MobEffectInstance.FactorData](#mobeffectinstance.factordata)
- [MobEffects](#mobeffects)
- [MobEffectUtil](#mobeffectutil)
- [PoisonMobEffect](#poisonmobeffect)
- [RegenerationMobEffect](#regenerationmobeffect)
- [SaturationMobEffect](#saturationmobeffect)
- [WitherMobEffect](#withermobeffect)
## AbsorptionMobEffect

*class* `net.minecraft.world.effect.AbsorptionMobEffect`

### Methods
- `public void applyEffectTick(LivingEntity p_298017_,  int p_299434_)`
- `public boolean shouldApplyEffectTickThisTick(int p_299365_,  int p_298390_)`
- `public void onEffectStarted(LivingEntity p_298184_,  int p_297925_)`

### Inherited methods
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `isInstantenous`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## AttributeModifierTemplate

*interface* `net.minecraft.world.effect.AttributeModifierTemplate`

### Methods
- `UUID getAttributeModifierId()`
- `AttributeModifier create(int p_297338_)`

## BadOmenMobEffect

*class* `net.minecraft.world.effect.BadOmenMobEffect`

### Methods
- `public boolean shouldApplyEffectTickThisTick(int p_297444_,  int p_300866_)`
- `public void applyEffectTick(LivingEntity p_299568_,  int p_299125_)`

### Inherited methods
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `isInstantenous`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## Class MobEffectCategory

*enum* `net.minecraft.world.effect.Class MobEffectCategory`

### Fields
- `private final ChatFormatting tooltipFormatting`

### Methods
- `public static MobEffectCategory[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MobEffectCategory valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ChatFormatting getTooltipFormatting()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## HealOrHarmMobEffect

*class* `net.minecraft.world.effect.HealOrHarmMobEffect`

### Fields
- `private final boolean isHarm`

### Methods
- `public void applyEffectTick(LivingEntity p_300845_,  int p_301393_)`
- `public void applyInstantenousEffect(@Nullable  Entity p_298495_,  @Nullable  Entity p_298887_,  LivingEntity p_298479_,  int p_298172_,  double p_298163_)`

### Inherited methods
- from `net.minecraft.world.effect.InstantenousMobEffect`: `isInstantenous`, `shouldApplyEffectTickThisTick`
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## HungerMobEffect

*class* `net.minecraft.world.effect.HungerMobEffect`

### Methods
- `public void applyEffectTick(LivingEntity p_301304_,  int p_301079_)`
- `public boolean shouldApplyEffectTickThisTick(int p_301244_,  int p_298950_)`

### Inherited methods
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `isInstantenous`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## InstantenousMobEffect

*class* `net.minecraft.world.effect.InstantenousMobEffect`

### Methods
- `public boolean isInstantenous()`
- `public boolean shouldApplyEffectTickThisTick(int p_19444_,  int p_19445_)`

### Inherited methods
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyEffectTick`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## MobEffect

*class* `net.minecraft.world.effect.MobEffect`

### Fields
- `private final Map<Attribute,AttributeModifierTemplate> attributeModifiers`
- `private final MobEffectCategory category`
- `private final int color`
- `@Nullable private String descriptionId`
- `private Supplier<MobEffectInstance.FactorData> factorDataFactory`
- `private final Holder.Reference<MobEffect> builtInRegistryHolder`
- `private Object effectRenderer`

### Methods
- `public Optional<MobEffectInstance.FactorData> createFactorData()`
- `public void applyEffectTick(LivingEntity p_19467_,  int p_19468_)`
- `public void applyInstantenousEffect(@Nullable  Entity p_19462_,  @Nullable  Entity p_19463_,  LivingEntity p_19464_,  int p_19465_,  double p_19466_)`
- `public boolean shouldApplyEffectTickThisTick(int p_297908_,  int p_301085_)`
- `public void onEffectStarted(LivingEntity p_299085_,  int p_297449_)`
- `public boolean isInstantenous()`
- `protected String getOrCreateDescriptionId()`
- `public String getDescriptionId()`
- `public Component getDisplayName()`
- `public MobEffectCategory getCategory()`
- `public int getColor()`
- `public MobEffect addAttributeModifier(Attribute p_19473_,  String p_19474_,  double p_19475_,  AttributeModifier.Operation p_19476_)`
- `public MobEffect setFactorDataFactory(Supplier<MobEffectInstance.FactorData> p_216880_)`
- `public Map<Attribute,AttributeModifierTemplate> getAttributeModifiers()`
- `public void removeAttributeModifiers(AttributeMap p_19470_)`
- `public void addAttributeModifiers(AttributeMap p_19479_,  int p_19480_)`
- `public boolean isBeneficial()`
- `public Object getEffectRendererInternal()`
- `private void initClient()`
- `public void initializeClient(Consumer<IClientMobEffectExtensions> consumer)`
- `@Deprecated public Holder.Reference<MobEffect> builtInRegistryHolder()` (deprecated)

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## MobEffect.MobEffectAttributeModifierTemplate

*class* `net.minecraft.world.effect.MobEffect.MobEffectAttributeModifierTemplate`

Enclosing class: MobEffect

### Fields
- `private final UUID id`
- `private final double amount`
- `private final AttributeModifier.Operation operation`

### Methods
- `public UUID getAttributeModifierId()`
- `public AttributeModifier create(int p_299158_)`

## MobEffectInstance

*class* `net.minecraft.world.effect.MobEffectInstance`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int INFINITE_DURATION` (= -1)
- `private static final String TAG_ID` (= "id")
- `private static final String TAG_AMBIENT` (= "ambient")
- `private static final String TAG_HIDDEN_EFFECT` (= "hidden_effect")
- `private static final String TAG_AMPLIFIER` (= "amplifier")
- `private static final String TAG_DURATION` (= "duration")
- `private static final String TAG_SHOW_PARTICLES` (= "show_particles")
- `private static final String TAG_SHOW_ICON` (= "show_icon")
- `private static final String TAG_FACTOR_CALCULATION_DATA` (= "factor_calculation_data")
- `private final MobEffect effect`
- `private int duration`
- `private int amplifier`
- `private boolean ambient`
- `private boolean visible`
- `private boolean showIcon`
- `@Nullable private MobEffectInstance hiddenEffect`
- `private final Optional<MobEffectInstance.FactorData> factorData`
- `private List<ItemStack> curativeItems`

### Methods
- `public Optional<MobEffectInstance.FactorData> getFactorData()`
- `void setDetailsFrom(MobEffectInstance p_19549_)`
- `public boolean update(MobEffectInstance p_19559_)`
- `private boolean isShorterDurationThan(MobEffectInstance p_268133_)`
- `public boolean isInfiniteDuration()`
- `public boolean endsWithin(int p_268088_)`
- `public int mapDuration(it.unimi.dsi.fastutil.ints.Int2IntFunction p_268089_)`
- `public MobEffect getEffect()`
- `public int getDuration()`
- `public int getAmplifier()`
- `public boolean isAmbient()`
- `public boolean isVisible()`
- `public boolean showIcon()`
- `public boolean tick(LivingEntity p_19553_,  Runnable p_19554_)`
- `private boolean hasRemainingDuration()`
- `private int tickDownDuration()`
- `public void onEffectStarted(LivingEntity p_297679_)`
- `public String getDescriptionId()`
- `public String toString()`
- `private String describeDuration()`
- `public boolean equals(Object p_19574_)`
- `public int hashCode()`
- `public CompoundTag save(CompoundTag p_19556_)`
- `private void writeDetailsTo(CompoundTag p_19568_)`
- `@Nullable public static MobEffectInstance load(CompoundTag p_19561_)`
- `private static MobEffectInstance loadSpecifiedEffect(MobEffect p_19546_,  CompoundTag p_19547_)`
- `public int compareTo(MobEffectInstance p_19566_)`
- `public List<ItemStack> getCurativeItems()`
  Description copied from interface: IForgeMobEffectInstance
  Returns a list of curative items for the potion effect
   By default, this list is initialized using IForgeMobEffect.getCurativeItems()
  - returns: The list (ItemStack) of curative items for the potion effect
- `public void setCurativeItems(List<ItemStack> curativeItems)`
  Description copied from interface: IForgeMobEffectInstance
  Sets the list of curative items for this potion effect, overwriting any already present
  - param: curativeItems - The list of ItemStacks being set to the potion effect
- `private static MobEffectInstance readCurativeItems(MobEffectInstance effect,  CompoundTag nbt)`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeMobEffectInstance`: `addCurativeItem`, `isCurativeItem`, `writeCurativeItems`

## MobEffectInstance.FactorData

*class* `net.minecraft.world.effect.MobEffectInstance.FactorData`

Enclosing class: MobEffectInstance

### Fields
- `public static final com.mojang.serialization.Codec<MobEffectInstance.FactorData> CODEC`
- `private final int paddingDuration`
- `private float factorStart`
- `private float factorTarget`
- `private float factorCurrent`
- `private int ticksActive`
- `private float factorPreviousFrame`
- `private boolean hadEffectLastTick`

### Methods
- `public void tick(MobEffectInstance p_268212_)`
- `public float getFactor(LivingEntity p_238414_,  float p_238415_)`

## MobEffects

*class* `net.minecraft.world.effect.MobEffects`

### Fields
- `private static final int DARKNESS_EFFECT_FACTOR_PADDING_DURATION_TICKS` (= 22)
- `public static final MobEffect MOVEMENT_SPEED`
- `public static final MobEffect MOVEMENT_SLOWDOWN`
- `public static final MobEffect DIG_SPEED`
- `public static final MobEffect DIG_SLOWDOWN`
- `public static final MobEffect DAMAGE_BOOST`
- `public static final MobEffect HEAL`
- `public static final MobEffect HARM`
- `public static final MobEffect JUMP`
- `public static final MobEffect CONFUSION`
- `public static final MobEffect REGENERATION`
- `public static final MobEffect DAMAGE_RESISTANCE`
- `public static final MobEffect FIRE_RESISTANCE`
- `public static final MobEffect WATER_BREATHING`
- `public static final MobEffect INVISIBILITY`
- `public static final MobEffect BLINDNESS`
- `public static final MobEffect NIGHT_VISION`
- `public static final MobEffect HUNGER`
- `public static final MobEffect WEAKNESS`
- `public static final MobEffect POISON`
- `public static final MobEffect WITHER`
- `public static final MobEffect HEALTH_BOOST`
- `public static final MobEffect ABSORPTION`
- `public static final MobEffect SATURATION`
- `public static final MobEffect GLOWING`
- `public static final MobEffect LEVITATION`
- `public static final MobEffect LUCK`
- `public static final MobEffect UNLUCK`
- `public static final MobEffect SLOW_FALLING`
- `public static final MobEffect CONDUIT_POWER`
- `public static final MobEffect DOLPHINS_GRACE`
- `public static final MobEffect BAD_OMEN`
- `public static final MobEffect HERO_OF_THE_VILLAGE`
- `public static final MobEffect DARKNESS`

### Methods
- `private static MobEffect register(String p_19625_,  MobEffect p_19626_)`

## MobEffectUtil

*class* `net.minecraft.world.effect.MobEffectUtil`

### Methods
- `public static Component formatDuration(MobEffectInstance p_268116_,  float p_268280_)`
- `public static boolean hasDigSpeed(LivingEntity p_19585_)`
- `public static int getDigSpeedAmplification(LivingEntity p_19587_)`
- `public static boolean hasWaterBreathing(LivingEntity p_19589_)`
- `public static List<ServerPlayer> addEffectToPlayersAround(ServerLevel p_216947_,  @Nullable  Entity p_216948_,  Vec3 p_216949_,  double p_216950_,  MobEffectInstance p_216951_,  int p_216952_)`

## PoisonMobEffect

*class* `net.minecraft.world.effect.PoisonMobEffect`

### Methods
- `public void applyEffectTick(LivingEntity p_299064_,  int p_299074_)`
- `public boolean shouldApplyEffectTickThisTick(int p_297494_,  int p_301016_)`

### Inherited methods
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `isInstantenous`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## RegenerationMobEffect

*class* `net.minecraft.world.effect.RegenerationMobEffect`

### Methods
- `public void applyEffectTick(LivingEntity p_301282_,  int p_300945_)`
- `public boolean shouldApplyEffectTickThisTick(int p_300189_,  int p_298417_)`

### Inherited methods
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `isInstantenous`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## SaturationMobEffect

*class* `net.minecraft.world.effect.SaturationMobEffect`

### Methods
- `public void applyEffectTick(LivingEntity p_300503_,  int p_301046_)`

### Inherited methods
- from `net.minecraft.world.effect.InstantenousMobEffect`: `isInstantenous`, `shouldApplyEffectTickThisTick`
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`

## WitherMobEffect

*class* `net.minecraft.world.effect.WitherMobEffect`

### Methods
- `public void applyEffectTick(LivingEntity p_299783_,  int p_298645_)`
- `public boolean shouldApplyEffectTickThisTick(int p_299625_,  int p_297396_)`

### Inherited methods
- from `net.minecraft.world.effect.MobEffect`: `addAttributeModifier`, `addAttributeModifiers`, `applyInstantenousEffect`, `builtInRegistryHolder`, `createFactorData`, `getAttributeModifiers`, `getCategory`, `getColor`, `getDescriptionId`, `getDisplayName`, `getEffectRendererInternal`, `getOrCreateDescriptionId`, `initializeClient`, `isBeneficial`, `isInstantenous`, `onEffectStarted`, `removeAttributeModifiers`, `setFactorDataFactory`
- from `net.minecraftforge.common.extensions.IForgeMobEffect`: `getCurativeItems`, `getSortOrder`
