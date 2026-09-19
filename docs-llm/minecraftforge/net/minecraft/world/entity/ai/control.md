# net.minecraft.world.entity.ai.control

- [BodyRotationControl](#bodyrotationcontrol)
- [Class MoveControl.Operation](#class-movecontrol.operation)
- [Control](#control)
- [FlyingMoveControl](#flyingmovecontrol)
- [JumpControl](#jumpcontrol)
- [LookControl](#lookcontrol)
- [MoveControl](#movecontrol)
- [SmoothSwimmingLookControl](#smoothswimminglookcontrol)
- [SmoothSwimmingMoveControl](#smoothswimmingmovecontrol)
## BodyRotationControl

*class* `net.minecraft.world.entity.ai.control.BodyRotationControl`

### Fields
- `private final Mob mob`
- `private static final int HEAD_STABLE_ANGLE` (= 15)
- `private static final int DELAY_UNTIL_STARTING_TO_FACE_FORWARD` (= 10)
- `private static final int HOW_LONG_IT_TAKES_TO_FACE_FORWARD` (= 10)
- `private int headStableTime`
- `private float lastStableYHeadRot`

### Methods
- `public void clientTick()`
- `private void rotateBodyIfNecessary()`
- `private void rotateHeadIfNecessary()`
- `private void rotateHeadTowardsFront()`
- `private boolean notCarryingMobPassengers()`
- `private boolean isMoving()`

## Class MoveControl.Operation

*enum* `net.minecraft.world.entity.ai.control.Class MoveControl.Operation`

Enclosing class: MoveControl

### Methods
- `public static MoveControl.Operation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MoveControl.Operation valueOf(String name)`
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

## Control

*interface* `net.minecraft.world.entity.ai.control.Control`

## FlyingMoveControl

*class* `net.minecraft.world.entity.ai.control.FlyingMoveControl`

### Fields
- `private final int maxTurn`
- `private final boolean hoversInPlace`

### Inherited fields
- from `net.minecraft.world.entity.ai.control.MoveControl`: `MAX_TURN`, `MIN_SPEED`, `MIN_SPEED_SQR`, `mob`, `operation`, `speedModifier`, `strafeForwards`, `strafeRight`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.control.MoveControl`: `getSpeedModifier`, `getWantedX`, `getWantedY`, `getWantedZ`, `hasWanted`, `rotlerp`, `setWantedPosition`, `strafe`

## JumpControl

*class* `net.minecraft.world.entity.ai.control.JumpControl`

### Fields
- `private final Mob mob`
- `protected boolean jump`

### Methods
- `public void jump()`
- `public void tick()`

## LookControl

*class* `net.minecraft.world.entity.ai.control.LookControl`

### Fields
- `protected final Mob mob`
- `protected float yMaxRotSpeed`
- `protected float xMaxRotAngle`
- `protected int lookAtCooldown`
- `protected double wantedX`
- `protected double wantedY`
- `protected double wantedZ`

### Methods
- `public void setLookAt(Vec3 p_24965_)`
- `public void setLookAt(Entity p_148052_)`
- `public void setLookAt(Entity p_24961_,  float p_24962_,  float p_24963_)`
- `public void setLookAt(double p_24947_,  double p_24948_,  double p_24949_)`
- `public void setLookAt(double p_24951_,  double p_24952_,  double p_24953_,  float p_24954_,  float p_24955_)`
- `public void tick()`
- `protected void clampHeadRotationToBody()`
- `protected boolean resetXRotOnTick()`
- `public boolean isLookingAtTarget()`
- `public double getWantedX()`
- `public double getWantedY()`
- `public double getWantedZ()`
- `protected Optional<Float> getXRotD()`
- `protected Optional<Float> getYRotD()`
- `protected float rotateTowards(float p_24957_,  float p_24958_,  float p_24959_)`
- `private static double getWantedY(Entity p_24967_)`

## MoveControl

*class* `net.minecraft.world.entity.ai.control.MoveControl`

### Fields
- `public static final float MIN_SPEED` (= 5.000000237487257E-4f)
- `public static final float MIN_SPEED_SQR` (= 2.500000277905201E-7f)
- `protected static final int MAX_TURN` (= 90)
- `protected final Mob mob`
- `protected double wantedX`
- `protected double wantedY`
- `protected double wantedZ`
- `protected double speedModifier`
- `protected float strafeForwards`
- `protected float strafeRight`
- `protected MoveControl.Operation operation`

### Methods
- `public boolean hasWanted()`
- `public double getSpeedModifier()`
- `public void setWantedPosition(double p_24984_,  double p_24985_,  double p_24986_,  double p_24987_)`
- `public void strafe(float p_24989_,  float p_24990_)`
- `public void tick()`
- `private boolean isWalkable(float p_24997_,  float p_24998_)`
- `protected float rotlerp(float p_24992_,  float p_24993_,  float p_24994_)`
- `public double getWantedX()`
- `public double getWantedY()`
- `public double getWantedZ()`

## SmoothSwimmingLookControl

*class* `net.minecraft.world.entity.ai.control.SmoothSwimmingLookControl`

### Fields
- `private final int maxYRotFromCenter`
- `private static final int HEAD_TILT_X` (= 10)
- `private static final int HEAD_TILT_Y` (= 20)

### Inherited fields
- from `net.minecraft.world.entity.ai.control.LookControl`: `lookAtCooldown`, `mob`, `wantedX`, `wantedY`, `wantedZ`, `xMaxRotAngle`, `yMaxRotSpeed`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.world.entity.ai.control.LookControl`: `clampHeadRotationToBody`, `getWantedX`, `getWantedY`, `getWantedZ`, `getXRotD`, `getYRotD`, `isLookingAtTarget`, `resetXRotOnTick`, `rotateTowards`, `setLookAt`, `setLookAt`, `setLookAt`, `setLookAt`, `setLookAt`

## SmoothSwimmingMoveControl

*class* `net.minecraft.world.entity.ai.control.SmoothSwimmingMoveControl`

### Fields
- `private static final float FULL_SPEED_TURN_THRESHOLD` (= 10.0f)
- `private static final float STOP_TURN_THRESHOLD` (= 60.0f)
- `private final int maxTurnX`
- `private final int maxTurnY`
- `private final float inWaterSpeedModifier`
- `private final float outsideWaterSpeedModifier`
- `private final boolean applyGravity`

### Inherited fields
- from `net.minecraft.world.entity.ai.control.MoveControl`: `MAX_TURN`, `MIN_SPEED`, `MIN_SPEED_SQR`, `mob`, `operation`, `speedModifier`, `strafeForwards`, `strafeRight`, `wantedX`, `wantedY`, `wantedZ`

### Methods
- `public void tick()`
- `private static float getTurningSpeedFactor(float p_249853_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.control.MoveControl`: `getSpeedModifier`, `getWantedX`, `getWantedY`, `getWantedZ`, `hasWanted`, `rotlerp`, `setWantedPosition`, `strafe`
