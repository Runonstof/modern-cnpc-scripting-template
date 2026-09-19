# net.minecraft.world.entity.boss.enderdragon.phases

- [AbstractDragonPhaseInstance](#abstractdragonphaseinstance)
- [AbstractDragonSittingPhase](#abstractdragonsittingphase)
- [DragonChargePlayerPhase](#dragonchargeplayerphase)
- [DragonDeathPhase](#dragondeathphase)
- [DragonHoldingPatternPhase](#dragonholdingpatternphase)
- [DragonHoverPhase](#dragonhoverphase)
- [DragonLandingApproachPhase](#dragonlandingapproachphase)
- [DragonLandingPhase](#dragonlandingphase)
- [DragonPhaseInstance](#dragonphaseinstance)
- [DragonSittingAttackingPhase](#dragonsittingattackingphase)
- [DragonSittingFlamingPhase](#dragonsittingflamingphase)
- [DragonSittingScanningPhase](#dragonsittingscanningphase)
- [DragonStrafePlayerPhase](#dragonstrafeplayerphase)
- [DragonTakeoffPhase](#dragontakeoffphase)
- [EnderDragonPhase](#enderdragonphase)
- [EnderDragonPhaseManager](#enderdragonphasemanager)
## AbstractDragonPhaseInstance

*class* `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`

### Fields
- `protected final EnderDragon dragon`

### Methods
- `public boolean isSitting()`
- `public void doClientTick()`
- `public void doServerTick()`
- `public void onCrystalDestroyed(EndCrystal p_31184_,  BlockPos p_31185_,  DamageSource p_31186_,  @Nullable  Player p_31187_)`
- `public void begin()`
- `public void end()`
- `public float getFlySpeed()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `public float onHurt(DamageSource p_31181_,  float p_31182_)`
- `public float getTurnSpeed()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance`: `getPhase`

## AbstractDragonSittingPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public boolean isSitting()`
- `public float onHurt(DamageSource p_31199_,  float p_31200_)`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `begin`, `doClientTick`, `doServerTick`, `end`, `getFlySpeed`, `getFlyTargetLocation`, `getTurnSpeed`, `onCrystalDestroyed`
- from `net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance`: `getPhase`

## DragonChargePlayerPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonChargePlayerPhase`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int CHARGE_RECOVERY_TIME` (= 10)
- `@Nullable private Vec3 targetLocation`
- `private int timeSinceCharge`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doServerTick()`
- `public void begin()`
- `public void setTarget(Vec3 p_31208_)`
- `public float getFlySpeed()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `public EnderDragonPhase<DragonChargePlayerPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `doClientTick`, `end`, `getTurnSpeed`, `isSitting`, `onCrystalDestroyed`, `onHurt`

## DragonDeathPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonDeathPhase`

### Fields
- `@Nullable private Vec3 targetLocation`
- `private int time`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doClientTick()`
- `public void doServerTick()`
- `public void begin()`
- `public float getFlySpeed()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `public EnderDragonPhase<DragonDeathPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `end`, `getTurnSpeed`, `isSitting`, `onCrystalDestroyed`, `onHurt`

## DragonHoldingPatternPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonHoldingPatternPhase`

### Fields
- `private static final TargetingConditions NEW_TARGET_TARGETING`
- `@Nullable private Path currentPath`
- `@Nullable private Vec3 targetLocation`
- `private boolean clockwise`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public EnderDragonPhase<DragonHoldingPatternPhase> getPhase()`
- `public void doServerTick()`
- `public void begin()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `private void findNewTarget()`
- `private void strafePlayer(Player p_31237_)`
- `private void navigateToNextPathNode()`
- `public void onCrystalDestroyed(EndCrystal p_31232_,  BlockPos p_31233_,  DamageSource p_31234_,  @Nullable  Player p_31235_)`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `doClientTick`, `end`, `getFlySpeed`, `getTurnSpeed`, `isSitting`, `onHurt`

## DragonHoverPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonHoverPhase`

### Fields
- `@Nullable private Vec3 targetLocation`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doServerTick()`
- `public boolean isSitting()`
- `public void begin()`
- `public float getFlySpeed()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `public EnderDragonPhase<DragonHoverPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `doClientTick`, `end`, `getTurnSpeed`, `onCrystalDestroyed`, `onHurt`

## DragonLandingApproachPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingApproachPhase`

### Fields
- `private static final TargetingConditions NEAR_EGG_TARGETING`
- `@Nullable private Path currentPath`
- `@Nullable private Vec3 targetLocation`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public EnderDragonPhase<DragonLandingApproachPhase> getPhase()`
- `public void begin()`
- `public void doServerTick()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `private void findNewTarget()`
- `private void navigateToNextPathNode()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `doClientTick`, `end`, `getFlySpeed`, `getTurnSpeed`, `isSitting`, `onCrystalDestroyed`, `onHurt`

## DragonLandingPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonLandingPhase`

### Fields
- `@Nullable private Vec3 targetLocation`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doClientTick()`
- `public void doServerTick()`
- `public float getFlySpeed()`
- `public float getTurnSpeed()`
- `public void begin()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `public EnderDragonPhase<DragonLandingPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `end`, `isSitting`, `onCrystalDestroyed`, `onHurt`

## DragonPhaseInstance

*interface* `net.minecraft.world.entity.boss.enderdragon.phases.DragonPhaseInstance`

### Methods
- `boolean isSitting()`
- `void doClientTick()`
- `void doServerTick()`
- `void onCrystalDestroyed(EndCrystal p_31315_,  BlockPos p_31316_,  DamageSource p_31317_,  @Nullable  Player p_31318_)`
- `void begin()`
- `void end()`
- `float getFlySpeed()`
- `float getTurnSpeed()`
- `EnderDragonPhase<? extends DragonPhaseInstance> getPhase()`
- `@Nullable Vec3 getFlyTargetLocation()`
- `float onHurt(DamageSource p_31313_,  float p_31314_)`

## DragonSittingAttackingPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingAttackingPhase`

### Fields
- `private static final int ROAR_DURATION` (= 40)
- `private int attackingTicks`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doClientTick()`
- `public void doServerTick()`
- `public void begin()`
- `public EnderDragonPhase<DragonSittingAttackingPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase`: `isSitting`, `onHurt`
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `end`, `getFlySpeed`, `getFlyTargetLocation`, `getTurnSpeed`, `onCrystalDestroyed`

## DragonSittingFlamingPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingFlamingPhase`

### Fields
- `private static final int FLAME_DURATION` (= 200)
- `private static final int SITTING_FLAME_ATTACKS_COUNT` (= 4)
- `private static final int WARMUP_TIME` (= 10)
- `private int flameTicks`
- `private int flameCount`
- `@Nullable private AreaEffectCloud flame`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doClientTick()`
- `public void doServerTick()`
- `public void begin()`
- `public void end()`
- `public EnderDragonPhase<DragonSittingFlamingPhase> getPhase()`
- `public void resetFlameCount()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase`: `isSitting`, `onHurt`
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `getFlySpeed`, `getFlyTargetLocation`, `getTurnSpeed`, `onCrystalDestroyed`

## DragonSittingScanningPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonSittingScanningPhase`

### Fields
- `private static final int SITTING_SCANNING_IDLE_TICKS` (= 100)
- `private static final int SITTING_ATTACK_Y_VIEW_RANGE` (= 10)
- `private static final int SITTING_ATTACK_VIEW_RANGE` (= 20)
- `private static final int SITTING_CHARGE_VIEW_RANGE` (= 150)
- `private static final TargetingConditions CHARGE_TARGETING`
- `private final TargetingConditions scanTargeting`
- `private int scanningTime`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doServerTick()`
- `public void begin()`
- `public EnderDragonPhase<DragonSittingScanningPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonSittingPhase`: `isSitting`, `onHurt`
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `doClientTick`, `end`, `getFlySpeed`, `getFlyTargetLocation`, `getTurnSpeed`, `onCrystalDestroyed`

## DragonStrafePlayerPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonStrafePlayerPhase`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int FIREBALL_CHARGE_AMOUNT` (= 5)
- `private int fireballCharge`
- `@Nullable private Path currentPath`
- `@Nullable private Vec3 targetLocation`
- `@Nullable private LivingEntity attackTarget`
- `private boolean holdingPatternClockwise`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doServerTick()`
- `private void findNewTarget()`
- `private void navigateToNextPathNode()`
- `public void begin()`
- `public void setTarget(LivingEntity p_31359_)`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `public EnderDragonPhase<DragonStrafePlayerPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `doClientTick`, `end`, `getFlySpeed`, `getTurnSpeed`, `isSitting`, `onCrystalDestroyed`, `onHurt`

## DragonTakeoffPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.DragonTakeoffPhase`

### Fields
- `private boolean firstTick`
- `@Nullable private Path currentPath`
- `@Nullable private Vec3 targetLocation`

### Inherited fields
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `dragon`

### Methods
- `public void doServerTick()`
- `public void begin()`
- `private void findNewTarget()`
- `private void navigateToNextPathNode()`
- `@Nullable public Vec3 getFlyTargetLocation()`
- `public EnderDragonPhase<DragonTakeoffPhase> getPhase()`

### Inherited methods
- from `net.minecraft.world.entity.boss.enderdragon.phases.AbstractDragonPhaseInstance`: `doClientTick`, `end`, `getFlySpeed`, `getTurnSpeed`, `isSitting`, `onCrystalDestroyed`, `onHurt`

## EnderDragonPhase

*class* `net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhase`

### Fields
- `private static EnderDragonPhase<?>[] phases`
- `public static final EnderDragonPhase<DragonHoldingPatternPhase> HOLDING_PATTERN`
- `public static final EnderDragonPhase<DragonStrafePlayerPhase> STRAFE_PLAYER`
- `public static final EnderDragonPhase<DragonLandingApproachPhase> LANDING_APPROACH`
- `public static final EnderDragonPhase<DragonLandingPhase> LANDING`
- `public static final EnderDragonPhase<DragonTakeoffPhase> TAKEOFF`
- `public static final EnderDragonPhase<DragonSittingFlamingPhase> SITTING_FLAMING`
- `public static final EnderDragonPhase<DragonSittingScanningPhase> SITTING_SCANNING`
- `public static final EnderDragonPhase<DragonSittingAttackingPhase> SITTING_ATTACKING`
- `public static final EnderDragonPhase<DragonChargePlayerPhase> CHARGING_PLAYER`
- `public static final EnderDragonPhase<DragonDeathPhase> DYING`
- `public static final EnderDragonPhase<DragonHoverPhase> HOVERING`
- `private final Class<? extends DragonPhaseInstance> instanceClass`
- `private final int id`
- `private final String name`

### Methods
- `public DragonPhaseInstance createInstance(EnderDragon p_31401_)`
- `protected Constructor<? extends DragonPhaseInstance> getConstructor()  throws NoSuchMethodException`
  - throws: NoSuchMethodException
- `public int getId()`
- `public String toString()`
- `public static EnderDragonPhase<?> getById(int p_31399_)`
- `public static int getCount()`
- `private static <T extends DragonPhaseInstance> EnderDragonPhase<T> create(Class<T> p_31403_,  String p_31404_)`

## EnderDragonPhaseManager

*class* `net.minecraft.world.entity.boss.enderdragon.phases.EnderDragonPhaseManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final EnderDragon dragon`
- `private final DragonPhaseInstance[] phases`
- `@Nullable private DragonPhaseInstance currentPhase`

### Methods
- `public void setPhase(EnderDragonPhase<?> p_31417_)`
- `public DragonPhaseInstance getCurrentPhase()`
- `public <T extends DragonPhaseInstance> T getPhase(EnderDragonPhase<T> p_31419_)`
