# net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity

- [AppendLoot](#appendloot)
- [AppendStatic](#appendstatic)
- [Clear](#clear)
- [Passthrough](#passthrough)
- [RuleBlockEntityModifier](#ruleblockentitymodifier)
- [RuleBlockEntityModifierType](#ruleblockentitymodifiertype)
## AppendLoot

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.AppendLoot`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<AppendLoot> CODEC`
- `private final ResourceLocation lootTable`

### Methods
- `public CompoundTag apply(RandomSource p_277994_,  @Nullable  CompoundTag p_277854_)`
- `public RuleBlockEntityModifierType<?> getType()`

## AppendStatic

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.AppendStatic`

### Fields
- `public static final com.mojang.serialization.Codec<AppendStatic> CODEC`
- `private final CompoundTag tag`

### Methods
- `public CompoundTag apply(RandomSource p_277835_,  @Nullable  CompoundTag p_277892_)`
- `public RuleBlockEntityModifierType<?> getType()`

## Clear

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.Clear`

### Fields
- `private static final Clear INSTANCE`
- `public static final com.mojang.serialization.Codec<Clear> CODEC`

### Methods
- `public CompoundTag apply(RandomSource p_277601_,  @Nullable  CompoundTag p_277931_)`
- `public RuleBlockEntityModifierType<?> getType()`

## Passthrough

*class* `net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.Passthrough`

### Fields
- `public static final Passthrough INSTANCE`
- `public static final com.mojang.serialization.Codec<Passthrough> CODEC`

### Methods
- `@Nullable public CompoundTag apply(RandomSource p_277737_,  @Nullable  CompoundTag p_277665_)`
- `public RuleBlockEntityModifierType<?> getType()`

## RuleBlockEntityModifier

*interface* `net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifier`

### Fields
- `static final com.mojang.serialization.Codec<RuleBlockEntityModifier> CODEC`

### Methods
- `@Nullable CompoundTag apply(RandomSource p_277745_,  @Nullable  CompoundTag p_277965_)`
- `RuleBlockEntityModifierType<?> getType()`

## RuleBlockEntityModifierType

*interface* `net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType`

### Fields
- `static final RuleBlockEntityModifierType<Clear> CLEAR`
- `static final RuleBlockEntityModifierType<Passthrough> PASSTHROUGH`
- `static final RuleBlockEntityModifierType<AppendStatic> APPEND_STATIC`
- `static final RuleBlockEntityModifierType<AppendLoot> APPEND_LOOT`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `private static <P extends RuleBlockEntityModifier> RuleBlockEntityModifierType<P> register(String p_277659_,  com.mojang.serialization.Codec<P> p_277876_)`
