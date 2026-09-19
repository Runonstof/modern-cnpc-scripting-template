# net.minecraft.world.food

- [FoodConstants](#foodconstants)
- [FoodData](#fooddata)
- [FoodProperties](#foodproperties)
- [FoodProperties.Builder](#foodproperties.builder)
- [Foods](#foods)
## FoodConstants

*class* `net.minecraft.world.food.FoodConstants`

### Fields
- `public static final int MAX_FOOD` (= 20)
- `public static final float MAX_SATURATION` (= 20.0f)
- `public static final float START_SATURATION` (= 5.0f)
- `public static final float SATURATION_FLOOR` (= 2.5f)
- `public static final float EXHAUSTION_DROP` (= 4.0f)
- `public static final int HEALTH_TICK_COUNT` (= 80)
- `public static final int HEALTH_TICK_COUNT_SATURATED` (= 10)
- `public static final int HEAL_LEVEL` (= 18)
- `public static final int SPRINT_LEVEL` (= 6)
- `public static final int STARVE_LEVEL` (= 0)
- `public static final float FOOD_SATURATION_POOR` (= 0.10000000149011612f)
- `public static final float FOOD_SATURATION_LOW` (= 0.30000001192092896f)
- `public static final float FOOD_SATURATION_NORMAL` (= 0.6000000238418579f)
- `public static final float FOOD_SATURATION_GOOD` (= 0.800000011920929f)
- `public static final float FOOD_SATURATION_MAX` (= 1.0f)
- `public static final float FOOD_SATURATION_SUPERNATURAL` (= 1.2000000476837158f)
- `public static final float EXHAUSTION_HEAL` (= 6.0f)
- `public static final float EXHAUSTION_JUMP` (= 0.05000000074505806f)
- `public static final float EXHAUSTION_SPRINT_JUMP` (= 0.20000000298023224f)
- `public static final float EXHAUSTION_MINE` (= 0.004999999888241291f)
- `public static final float EXHAUSTION_ATTACK` (= 0.10000000149011612f)
- `public static final float EXHAUSTION_WALK` (= 0.0f)
- `public static final float EXHAUSTION_CROUCH` (= 0.0f)
- `public static final float EXHAUSTION_SPRINT` (= 0.10000000149011612f)
- `public static final float EXHAUSTION_SWIM` (= 0.009999999776482582f)

## FoodData

*class* `net.minecraft.world.food.FoodData`

### Fields
- `private int foodLevel`
- `private float saturationLevel`
- `private float exhaustionLevel`
- `private int tickTimer`
- `private int lastFoodLevel`

### Methods
- `public void eat(int p_38708_,  float p_38709_)`
- `@Deprecated public void eat(Item p_38713_,  ItemStack p_38714_)` (deprecated)
- `public void eat(Item p_38713_,  ItemStack p_38714_,  @Nullable  LivingEntity entity)`
- `public void tick(Player p_38711_)`
- `public void readAdditionalSaveData(CompoundTag p_38716_)`
- `public void addAdditionalSaveData(CompoundTag p_38720_)`
- `public int getFoodLevel()`
- `public int getLastFoodLevel()`
- `public boolean needsFood()`
- `public void addExhaustion(float p_38704_)`
- `public float getExhaustionLevel()`
- `public float getSaturationLevel()`
- `public void setFoodLevel(int p_38706_)`
- `public void setSaturation(float p_38718_)`
- `public void setExhaustion(float p_150379_)`

## FoodProperties

*class* `net.minecraft.world.food.FoodProperties`

### Fields
- `private final int nutrition`
- `private final float saturationModifier`
- `private final boolean isMeat`
- `private final boolean canAlwaysEat`
- `private final boolean fastFood`
- `private final List<com.mojang.datafixers.util.Pair<Supplier<MobEffectInstance>,Float>> effects`

### Methods
- `public int getNutrition()`
- `public float getSaturationModifier()`
- `public boolean isMeat()`
- `public boolean canAlwaysEat()`
- `public boolean isFastFood()`
- `public List<com.mojang.datafixers.util.Pair<MobEffectInstance,Float>> getEffects()`

## FoodProperties.Builder

*class* `net.minecraft.world.food.FoodProperties.Builder`

Enclosing class: FoodProperties

### Fields
- `private int nutrition`
- `private float saturationModifier`
- `private boolean isMeat`
- `private boolean canAlwaysEat`
- `private boolean fastFood`
- `private final List<com.mojang.datafixers.util.Pair<Supplier<MobEffectInstance>,Float>> effects`

### Methods
- `public FoodProperties.Builder nutrition(int p_38761_)`
- `public FoodProperties.Builder saturationMod(float p_38759_)`
- `public FoodProperties.Builder meat()`
- `public FoodProperties.Builder alwaysEat()`
- `public FoodProperties.Builder fast()`
- `public FoodProperties.Builder effect(Supplier<MobEffectInstance> effectIn,  float probability)`
- `@Deprecated public FoodProperties.Builder effect(MobEffectInstance p_38763_,  float p_38764_)` (deprecated)
- `public FoodProperties build()`

## Foods

*class* `net.minecraft.world.food.Foods`

### Fields
- `public static final FoodProperties APPLE`
- `public static final FoodProperties BAKED_POTATO`
- `public static final FoodProperties BEEF`
- `public static final FoodProperties BEETROOT`
- `public static final FoodProperties BEETROOT_SOUP`
- `public static final FoodProperties BREAD`
- `public static final FoodProperties CARROT`
- `public static final FoodProperties CHICKEN`
- `public static final FoodProperties CHORUS_FRUIT`
- `public static final FoodProperties COD`
- `public static final FoodProperties COOKED_BEEF`
- `public static final FoodProperties COOKED_CHICKEN`
- `public static final FoodProperties COOKED_COD`
- `public static final FoodProperties COOKED_MUTTON`
- `public static final FoodProperties COOKED_PORKCHOP`
- `public static final FoodProperties COOKED_RABBIT`
- `public static final FoodProperties COOKED_SALMON`
- `public static final FoodProperties COOKIE`
- `public static final FoodProperties DRIED_KELP`
- `public static final FoodProperties ENCHANTED_GOLDEN_APPLE`
- `public static final FoodProperties GOLDEN_APPLE`
- `public static final FoodProperties GOLDEN_CARROT`
- `public static final FoodProperties HONEY_BOTTLE`
- `public static final FoodProperties MELON_SLICE`
- `public static final FoodProperties MUSHROOM_STEW`
- `public static final FoodProperties MUTTON`
- `public static final FoodProperties POISONOUS_POTATO`
- `public static final FoodProperties PORKCHOP`
- `public static final FoodProperties POTATO`
- `public static final FoodProperties PUFFERFISH`
- `public static final FoodProperties PUMPKIN_PIE`
- `public static final FoodProperties RABBIT`
- `public static final FoodProperties RABBIT_STEW`
- `public static final FoodProperties ROTTEN_FLESH`
- `public static final FoodProperties SALMON`
- `public static final FoodProperties SPIDER_EYE`
- `public static final FoodProperties SUSPICIOUS_STEW`
- `public static final FoodProperties SWEET_BERRIES`
- `public static final FoodProperties GLOW_BERRIES`
- `public static final FoodProperties TROPICAL_FISH`

### Methods
- `private static FoodProperties.Builder stew(int p_150384_)`
