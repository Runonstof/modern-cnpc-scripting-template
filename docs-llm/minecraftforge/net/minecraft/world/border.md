# net.minecraft.world.border

- [EnumBorderStatus](#enumborderstatus)
- [IBorderListener](#iborderlistener)
- [WorldBorder](#worldborder)
## EnumBorderStatus

*enum* `net.minecraft.world.border.EnumBorderStatus`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumBorderStatus>

### Fields
- `public static final EnumBorderStatus GROWING`
- `public static final EnumBorderStatus SHRINKING`
- `public static final EnumBorderStatus STATIONARY`

### Methods
- `public static EnumBorderStatus[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumBorderStatus c : EnumBorderStatus.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumBorderStatus valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getColor()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IBorderListener

*interface* `net.minecraft.world.border.IBorderListener`

### Methods
- `void onSizeChanged(WorldBorder border,  double newSize)`
- `void onTransitionStarted(WorldBorder border,  double oldSize,  double newSize,  long time)`
- `void onCenterChanged(WorldBorder border,  double x,  double z)`
- `void onWarningTimeChanged(WorldBorder border,  int newTime)`
- `void onWarningDistanceChanged(WorldBorder border,  int newDistance)`
- `void onDamageAmountChanged(WorldBorder border,  double newAmount)`
- `void onDamageBufferChanged(WorldBorder border,  double newSize)`

## WorldBorder

*class* `net.minecraft.world.border.WorldBorder`

### Methods
- `public boolean contains(BlockPos pos)`
- `public boolean contains(ChunkPos range)`
- `public boolean contains(AxisAlignedBB bb)`
- `public double getClosestDistance(Entity entityIn)`
- `public double getClosestDistance(double x,  double z)`
- `public EnumBorderStatus getStatus()`
- `public double minX()`
- `public double minZ()`
- `public double maxX()`
- `public double maxZ()`
- `public double getCenterX()`
- `public double getCenterZ()`
- `public void setCenter(double x,  double z)`
- `public double getDiameter()`
- `public long getTimeUntilTarget()`
- `public double getTargetSize()`
- `public void setTransition(double newSize)`
- `public void setTransition(double oldSize,  double newSize,  long time)`
- `protected java.util.List<IBorderListener> getListeners()`
- `public void addListener(IBorderListener listener)`
- `public void setSize(int size)`
- `public int getSize()`
- `public double getDamageBuffer()`
- `public void setDamageBuffer(double bufferSize)`
- `public double getDamageAmount()`
- `public void setDamageAmount(double newAmount)`
- `public double getResizeSpeed()`
- `public int getWarningTime()`
- `public void setWarningTime(int warningTime)`
- `public int getWarningDistance()`
- `public void setWarningDistance(int warningDistance)`
- `public void removeListener(IBorderListener listener)`
