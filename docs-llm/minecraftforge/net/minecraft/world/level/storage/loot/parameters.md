# net.minecraft.world.level.storage.loot.parameters

- [LootContextParam](#lootcontextparam)
- [LootContextParams](#lootcontextparams)
- [LootContextParamSet](#lootcontextparamset)
- [LootContextParamSet.Builder](#lootcontextparamset.builder)
- [LootContextParamSets](#lootcontextparamsets)
## LootContextParam

*class* `net.minecraft.world.level.storage.loot.parameters.LootContextParam`

### Fields
- `private final ResourceLocation name`

### Methods
- `public ResourceLocation getName()`
- `public String toString()`

## LootContextParams

*class* `net.minecraft.world.level.storage.loot.parameters.LootContextParams`

### Fields
- `public static final LootContextParam<Entity> THIS_ENTITY`
- `public static final LootContextParam<Player> LAST_DAMAGE_PLAYER`
- `public static final LootContextParam<DamageSource> DAMAGE_SOURCE`
- `public static final LootContextParam<Entity> KILLER_ENTITY`
- `public static final LootContextParam<Entity> DIRECT_KILLER_ENTITY`
- `public static final LootContextParam<Vec3> ORIGIN`
- `public static final LootContextParam<BlockState> BLOCK_STATE`
- `public static final LootContextParam<BlockEntity> BLOCK_ENTITY`
- `public static final LootContextParam<ItemStack> TOOL`
- `public static final LootContextParam<Float> EXPLOSION_RADIUS`

### Methods
- `private static <T> LootContextParam<T> create(String p_81467_)`

## LootContextParamSet

*class* `net.minecraft.world.level.storage.loot.parameters.LootContextParamSet`

### Fields
- `private final Set<LootContextParam<?>> required`
- `private final Set<LootContextParam<?>> all`

### Methods
- `public boolean isAllowed(LootContextParam<?> p_165476_)`
- `public Set<LootContextParam<?>> getRequired()`
- `public Set<LootContextParam<?>> getAllowed()`
- `public String toString()`
- `public void validateUser(ValidationContext p_81396_,  LootContextUser p_81397_)`
- `public static LootContextParamSet.Builder builder()`

## LootContextParamSet.Builder

*class* `net.minecraft.world.level.storage.loot.parameters.LootContextParamSet.Builder`

Enclosing class: LootContextParamSet

### Fields
- `private final Set<LootContextParam<?>> required`
- `private final Set<LootContextParam<?>> optional`

### Methods
- `public LootContextParamSet.Builder required(LootContextParam<?> p_81407_)`
- `public LootContextParamSet.Builder optional(LootContextParam<?> p_81409_)`
- `public LootContextParamSet build()`

## LootContextParamSets

*class* `net.minecraft.world.level.storage.loot.parameters.LootContextParamSets`

### Fields
- `private static final com.google.common.collect.BiMap<ResourceLocation,LootContextParamSet> REGISTRY`
- `public static final com.mojang.serialization.Codec<LootContextParamSet> CODEC`
- `public static final LootContextParamSet EMPTY`
- `public static final LootContextParamSet CHEST`
- `public static final LootContextParamSet COMMAND`
- `public static final LootContextParamSet SELECTOR`
- `public static final LootContextParamSet FISHING`
- `public static final LootContextParamSet ENTITY`
- `public static final LootContextParamSet ARCHAEOLOGY`
- `public static final LootContextParamSet GIFT`
- `public static final LootContextParamSet PIGLIN_BARTER`
- `public static final LootContextParamSet ADVANCEMENT_REWARD`
- `public static final LootContextParamSet ADVANCEMENT_ENTITY`
- `public static final LootContextParamSet ADVANCEMENT_LOCATION`
- `public static final LootContextParamSet ALL_PARAMS`
- `public static final LootContextParamSet BLOCK`

### Methods
- `private static LootContextParamSet register(String p_81429_,  Consumer<LootContextParamSet.Builder> p_81430_)`
