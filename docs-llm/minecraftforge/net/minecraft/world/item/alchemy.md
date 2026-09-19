# net.minecraft.world.item.alchemy

- [Potion](#potion)
- [PotionBrewing](#potionbrewing)
- [PotionBrewing.Mix](#potionbrewing.mix)
- [Potions](#potions)
- [PotionUtils](#potionutils)
## Potion

*class* `net.minecraft.world.item.alchemy.Potion`

### Fields
- `@Nullable private final String name`
- `private final com.google.common.collect.ImmutableList<MobEffectInstance> effects`
- `private final Holder.Reference<Potion> builtInRegistryHolder`

### Methods
- `public static Potion byName(String p_43490_)`
- `public String getName(String p_43493_)`
- `public List<MobEffectInstance> getEffects()`
- `public boolean hasInstantEffects()`
- `@Deprecated public Holder.Reference<Potion> builtInRegistryHolder()` (deprecated)

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgePotion`: `isFoil`

## PotionBrewing

*class* `net.minecraft.world.item.alchemy.PotionBrewing`

### Fields
- `public static final int BREWING_TIME_SECONDS` (= 20)
- `private static final List<PotionBrewing.Mix<Potion>> POTION_MIXES`
- `private static final List<PotionBrewing.Mix<Item>> CONTAINER_MIXES`
- `private static final List<Ingredient> ALLOWED_CONTAINERS`
- `private static final Predicate<ItemStack> ALLOWED_CONTAINER`

### Methods
- `public static boolean isIngredient(ItemStack p_43507_)`
- `protected static boolean isContainerIngredient(ItemStack p_43518_)`
- `protected static boolean isPotionIngredient(ItemStack p_43523_)`
- `public static boolean isBrewablePotion(Potion p_43512_)`
- `public static boolean hasMix(ItemStack p_43509_,  ItemStack p_43510_)`
- `protected static boolean hasContainerMix(ItemStack p_43520_,  ItemStack p_43521_)`
- `protected static boolean hasPotionMix(ItemStack p_43525_,  ItemStack p_43526_)`
- `public static ItemStack mix(ItemStack p_43530_,  ItemStack p_43531_)`
- `public static void bootStrap()`
- `private static void addContainerRecipe(Item p_43503_,  Item p_43504_,  Item p_43505_)`
- `private static void addContainer(Item p_43501_)`
- `private static void addMix(Potion p_43514_,  Item p_43515_,  Potion p_43516_)`

## PotionBrewing.Mix

*class* `net.minecraft.world.item.alchemy.PotionBrewing.Mix`

Enclosing class: PotionBrewing

### Fields
- `public final Holder.Reference<T> from`
- `public final Ingredient ingredient`
- `public final Holder.Reference<T> to`

## Potions

*class* `net.minecraft.world.item.alchemy.Potions`

### Fields
- `public static ResourceKey<Potion> EMPTY_ID`
- `public static final Potion EMPTY`
- `public static final Potion WATER`
- `public static final Potion MUNDANE`
- `public static final Potion THICK`
- `public static final Potion AWKWARD`
- `public static final Potion NIGHT_VISION`
- `public static final Potion LONG_NIGHT_VISION`
- `public static final Potion INVISIBILITY`
- `public static final Potion LONG_INVISIBILITY`
- `public static final Potion LEAPING`
- `public static final Potion LONG_LEAPING`
- `public static final Potion STRONG_LEAPING`
- `public static final Potion FIRE_RESISTANCE`
- `public static final Potion LONG_FIRE_RESISTANCE`
- `public static final Potion SWIFTNESS`
- `public static final Potion LONG_SWIFTNESS`
- `public static final Potion STRONG_SWIFTNESS`
- `public static final Potion SLOWNESS`
- `public static final Potion LONG_SLOWNESS`
- `public static final Potion STRONG_SLOWNESS`
- `public static final Potion TURTLE_MASTER`
- `public static final Potion LONG_TURTLE_MASTER`
- `public static final Potion STRONG_TURTLE_MASTER`
- `public static final Potion WATER_BREATHING`
- `public static final Potion LONG_WATER_BREATHING`
- `public static final Potion HEALING`
- `public static final Potion STRONG_HEALING`
- `public static final Potion HARMING`
- `public static final Potion STRONG_HARMING`
- `public static final Potion POISON`
- `public static final Potion LONG_POISON`
- `public static final Potion STRONG_POISON`
- `public static final Potion REGENERATION`
- `public static final Potion LONG_REGENERATION`
- `public static final Potion STRONG_REGENERATION`
- `public static final Potion STRENGTH`
- `public static final Potion LONG_STRENGTH`
- `public static final Potion STRONG_STRENGTH`
- `public static final Potion WEAKNESS`
- `public static final Potion LONG_WEAKNESS`
- `public static final Potion LUCK`
- `public static final Potion SLOW_FALLING`
- `public static final Potion LONG_SLOW_FALLING`

### Methods
- `private static Potion register(String p_43626_,  Potion p_43627_)`
- `private static Potion register(ResourceKey<Potion> p_270074_,  Potion p_271009_)`

## PotionUtils

*class* `net.minecraft.world.item.alchemy.PotionUtils`

### Fields
- `public static final String TAG_CUSTOM_POTION_EFFECTS` (= "custom_potion_effects")
- `public static final String TAG_CUSTOM_POTION_COLOR` (= "CustomPotionColor")
- `public static final String TAG_POTION` (= "Potion")
- `private static final int EMPTY_COLOR` (= 16253176)
- `private static final Component NO_EFFECT`

### Methods
- `public static List<MobEffectInstance> getMobEffects(ItemStack p_43548_)`
- `public static List<MobEffectInstance> getAllEffects(Potion p_43562_,  Collection<MobEffectInstance> p_43563_)`
- `public static List<MobEffectInstance> getAllEffects(@Nullable  CompoundTag p_43567_)`
- `public static List<MobEffectInstance> getCustomEffects(ItemStack p_43572_)`
- `public static List<MobEffectInstance> getCustomEffects(@Nullable  CompoundTag p_43574_)`
- `public static void getCustomEffects(@Nullable  CompoundTag p_43569_,  List<MobEffectInstance> p_43570_)`
- `public static int getColor(ItemStack p_43576_)`
- `public static int getColor(Potion p_43560_)`
- `public static int getColor(Collection<MobEffectInstance> p_43565_)`
- `public static Potion getPotion(ItemStack p_43580_)`
- `public static Potion getPotion(@Nullable  CompoundTag p_43578_)`
- `public static ItemStack setPotion(ItemStack p_43550_,  Potion p_43551_)`
- `public static ItemStack setCustomEffects(ItemStack p_43553_,  Collection<MobEffectInstance> p_43554_)`
- `public static void addPotionTooltip(ItemStack p_43556_,  List<Component> p_43557_,  float p_43558_)`
- `public static void addPotionTooltip(List<MobEffectInstance> p_259687_,  List<Component> p_259660_,  float p_259949_)`
