# net.minecraft.world.entity.ai.behavior.warden

- [Digging](#digging)
- [Emerging](#emerging)
- [ForceUnmount](#forceunmount)
- [Roar](#roar)
- [SetRoarTarget](#setroartarget)
- [SetWardenLookTarget](#setwardenlooktarget)
- [Sniffing](#sniffing)
- [SonicBoom](#sonicboom)
- [TryToSniff](#trytosniff)
## Digging

*class* `net.minecraft.world.entity.ai.behavior.warden.Digging`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean canStillUse(ServerLevel p_217527_,  E p_217528_,  long p_217529_)`
- `protected boolean checkExtraStartConditions(ServerLevel p_217524_,  E p_217525_)`
- `protected void start(ServerLevel p_217535_,  E p_217536_,  long p_217537_)`
- `protected void stop(ServerLevel p_217543_,  E p_217544_,  long p_217545_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## Emerging

*class* `net.minecraft.world.entity.ai.behavior.warden.Emerging`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean canStillUse(ServerLevel p_217553_,  E p_217554_,  long p_217555_)`
- `protected void start(ServerLevel p_217561_,  E p_217562_,  long p_217563_)`
- `protected void stop(ServerLevel p_217569_,  E p_217570_,  long p_217571_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## ForceUnmount

*class* `net.minecraft.world.entity.ai.behavior.warden.ForceUnmount`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_238424_,  LivingEntity p_238425_)`
- `protected void start(ServerLevel p_238410_,  LivingEntity p_238411_,  long p_238412_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `canStillUse`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `stop`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## Roar

*class* `net.minecraft.world.entity.ai.behavior.warden.Roar`

### Fields
- `private static final int TICKS_BEFORE_PLAYING_ROAR_SOUND` (= 25)
- `private static final int ROAR_ANGER_INCREASE` (= 20)

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected void start(ServerLevel p_217580_,  Warden p_217581_,  long p_217582_)`
- `protected boolean canStillUse(ServerLevel p_217588_,  Warden p_217589_,  long p_217590_)`
- `protected void tick(ServerLevel p_217596_,  Warden p_217597_,  long p_217598_)`
- `protected void stop(ServerLevel p_217604_,  Warden p_217605_,  long p_217606_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## SetRoarTarget

*class* `net.minecraft.world.entity.ai.behavior.warden.SetRoarTarget`

### Methods
- `public static <E extends Warden> BehaviorControl<E> create(Function<E,Optional<? extends LivingEntity>> p_260275_)`

## SetWardenLookTarget

*class* `net.minecraft.world.entity.ai.behavior.warden.SetWardenLookTarget`

### Methods
- `public static BehaviorControl<LivingEntity> create()`

## Sniffing

*class* `net.minecraft.world.entity.ai.behavior.warden.Sniffing`

### Fields
- `private static final double ANGER_FROM_SNIFFING_MAX_DISTANCE_XZ` (= 6.0)
- `private static final double ANGER_FROM_SNIFFING_MAX_DISTANCE_Y` (= 20.0)

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean canStillUse(ServerLevel p_217653_,  E p_217654_,  long p_217655_)`
- `protected void start(ServerLevel p_217664_,  E p_217665_,  long p_217666_)`
- `protected void stop(ServerLevel p_217672_,  E p_217673_,  long p_217674_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `checkExtraStartConditions`, `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tick`, `tickOrStop`, `timedOut`, `tryStart`

## SonicBoom

*class* `net.minecraft.world.entity.ai.behavior.warden.SonicBoom`

### Fields
- `private static final int DISTANCE_XZ` (= 15)
- `private static final int DISTANCE_Y` (= 20)
- `private static final double KNOCKBACK_VERTICAL` (= 0.5)
- `private static final double KNOCKBACK_HORIZONTAL` (= 2.5)
- `public static final int COOLDOWN` (= 40)
- `private static final int TICKS_BEFORE_PLAYING_SOUND`
- `private static final int DURATION`

### Inherited fields
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `DEFAULT_DURATION`, `entryCondition`

### Methods
- `protected boolean checkExtraStartConditions(ServerLevel p_217692_,  Warden p_217693_)`
- `protected boolean canStillUse(ServerLevel p_217695_,  Warden p_217696_,  long p_217697_)`
- `protected void start(ServerLevel p_217713_,  Warden p_217714_,  long p_217715_)`
- `protected void tick(ServerLevel p_217724_,  Warden p_217725_,  long p_217726_)`
- `protected void stop(ServerLevel p_217732_,  Warden p_217733_,  long p_217734_)`
- `public static void setCooldown(LivingEntity p_217699_,  int p_217700_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.Behavior`: `debugString`, `doStop`, `getStatus`, `hasRequiredMemories`, `tickOrStop`, `timedOut`, `tryStart`

## TryToSniff

*class* `net.minecraft.world.entity.ai.behavior.warden.TryToSniff`

### Fields
- `private static final IntProvider SNIFF_COOLDOWN`

### Methods
- `public static BehaviorControl<LivingEntity> create()`
