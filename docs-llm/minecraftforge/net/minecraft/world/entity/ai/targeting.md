# net.minecraft.world.entity.ai.targeting

- [TargetingConditions](#targetingconditions)
## TargetingConditions

*class* `net.minecraft.world.entity.ai.targeting.TargetingConditions`

### Fields
- `public static final TargetingConditions DEFAULT`
- `private static final double MIN_VISIBILITY_DISTANCE_FOR_INVISIBLE_TARGET` (= 2.0)
- `private final boolean isCombat`
- `private double range`
- `private boolean checkLineOfSight`
- `private boolean testInvisible`
- `@Nullable private Predicate<LivingEntity> selector`

### Methods
- `public static TargetingConditions forCombat()`
- `public static TargetingConditions forNonCombat()`
- `public TargetingConditions copy()`
- `public TargetingConditions range(double p_26884_)`
- `public TargetingConditions ignoreLineOfSight()`
- `public TargetingConditions ignoreInvisibilityTesting()`
- `public TargetingConditions selector(@Nullable  Predicate<LivingEntity> p_26889_)`
- `public boolean test(@Nullable  LivingEntity p_26886_,  LivingEntity p_26887_)`
