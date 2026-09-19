# net.minecraft.world.level.border

- [BorderChangeListener](#borderchangelistener)
- [BorderChangeListener.DelegateBorderChangeListener](#borderchangelistener.delegateborderchangelistener)
- [Class BorderStatus](#class-borderstatus)
- [WorldBorder](#worldborder)
- [WorldBorder.BorderExtent](#worldborder.borderextent)
- [WorldBorder.MovingBorderExtent](#worldborder.movingborderextent)
- [WorldBorder.Settings](#worldborder.settings)
- [WorldBorder.StaticBorderExtent](#worldborder.staticborderextent)
## BorderChangeListener

*interface* `net.minecraft.world.level.border.BorderChangeListener`

### Methods
- `void onBorderSizeSet(WorldBorder p_61847_,  double p_61848_)`
- `void onBorderSizeLerping(WorldBorder p_61852_,  double p_61853_,  double p_61854_,  long p_61855_)`
- `void onBorderCenterSet(WorldBorder p_61849_,  double p_61850_,  double p_61851_)`
- `void onBorderSetWarningTime(WorldBorder p_61856_,  int p_61857_)`
- `void onBorderSetWarningBlocks(WorldBorder p_61860_,  int p_61861_)`
- `void onBorderSetDamagePerBlock(WorldBorder p_61858_,  double p_61859_)`
- `void onBorderSetDamageSafeZOne(WorldBorder p_61862_,  double p_61863_)`

## BorderChangeListener.DelegateBorderChangeListener

*class* `net.minecraft.world.level.border.BorderChangeListener.DelegateBorderChangeListener`

Enclosing interface: BorderChangeListener

### Fields
- `private final WorldBorder worldBorder`

### Methods
- `public void onBorderSizeSet(WorldBorder p_61868_,  double p_61869_)`
- `public void onBorderSizeLerping(WorldBorder p_61875_,  double p_61876_,  double p_61877_,  long p_61878_)`
- `public void onBorderCenterSet(WorldBorder p_61871_,  double p_61872_,  double p_61873_)`
- `public void onBorderSetWarningTime(WorldBorder p_61880_,  int p_61881_)`
- `public void onBorderSetWarningBlocks(WorldBorder p_61886_,  int p_61887_)`
- `public void onBorderSetDamagePerBlock(WorldBorder p_61883_,  double p_61884_)`
- `public void onBorderSetDamageSafeZOne(WorldBorder p_61889_,  double p_61890_)`

## Class BorderStatus

*enum* `net.minecraft.world.level.border.Class BorderStatus`

### Fields
- `private final int color`

### Methods
- `public static BorderStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BorderStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getColor()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## WorldBorder

*class* `net.minecraft.world.level.border.WorldBorder`

### Fields
- `public static final double MAX_SIZE` (= 5.9999968E7)
- `public static final double MAX_CENTER_COORDINATE` (= 2.9999984E7)
- `private final List<BorderChangeListener> listeners`
- `private double damagePerBlock`
- `private double damageSafeZone`
- `private int warningTime`
- `private int warningBlocks`
- `private double centerX`
- `private double centerZ`
- `int absoluteMaxSize`
- `private WorldBorder.BorderExtent extent`
- `public static final WorldBorder.Settings DEFAULT_SETTINGS`

### Methods
- `public boolean isWithinBounds(BlockPos p_61938_)`
- `public boolean isWithinBounds(ChunkPos p_61928_)`
- `public boolean isWithinBounds(double p_156094_,  double p_156095_)`
- `public boolean isWithinBounds(double p_187563_,  double p_187564_,  double p_187565_)`
- `public boolean isWithinBounds(AABB p_61936_)`
- `public BlockPos clampToBounds(double p_187570_,  double p_187571_,  double p_187572_)`
- `public double getDistanceToBorder(Entity p_61926_)`
- `public VoxelShape getCollisionShape()`
- `public double getDistanceToBorder(double p_61942_,  double p_61943_)`
- `public boolean isInsideCloseToBorder(Entity p_187567_,  AABB p_187568_)`
- `public BorderStatus getStatus()`
- `public double getMinX()`
- `public double getMinZ()`
- `public double getMaxX()`
- `public double getMaxZ()`
- `public double getCenterX()`
- `public double getCenterZ()`
- `public void setCenter(double p_61950_,  double p_61951_)`
- `public double getSize()`
- `public long getLerpRemainingTime()`
- `public double getLerpTarget()`
- `public void setSize(double p_61918_)`
- `public void lerpSizeBetween(double p_61920_,  double p_61921_,  long p_61922_)`
- `protected List<BorderChangeListener> getListeners()`
- `public void addListener(BorderChangeListener p_61930_)`
- `public void removeListener(BorderChangeListener p_156097_)`
- `public void setAbsoluteMaxSize(int p_61924_)`
- `public int getAbsoluteMaxSize()`
- `public double getDamageSafeZone()`
- `public void setDamageSafeZone(double p_61940_)`
- `public double getDamagePerBlock()`
- `public void setDamagePerBlock(double p_61948_)`
- `public double getLerpSpeed()`
- `public int getWarningTime()`
- `public void setWarningTime(int p_61945_)`
- `public int getWarningBlocks()`
- `public void setWarningBlocks(int p_61953_)`
- `public void tick()`
- `public WorldBorder.Settings createSettings()`
- `public void applySettings(WorldBorder.Settings p_61932_)`

## WorldBorder.BorderExtent

*interface* `net.minecraft.world.level.border.WorldBorder.BorderExtent`

Enclosing class: WorldBorder

### Methods
- `double getMinX()`
- `double getMaxX()`
- `double getMinZ()`
- `double getMaxZ()`
- `double getSize()`
- `double getLerpSpeed()`
- `long getLerpRemainingTime()`
- `double getLerpTarget()`
- `BorderStatus getStatus()`
- `void onAbsoluteMaxSizeChange()`
- `void onCenterChange()`
- `WorldBorder.BorderExtent update()`
- `VoxelShape getCollisionShape()`

## WorldBorder.MovingBorderExtent

*class* `net.minecraft.world.level.border.WorldBorder.MovingBorderExtent`

Enclosing class: WorldBorder

### Fields
- `private final double from`
- `private final double to`
- `private final long lerpEnd`
- `private final long lerpBegin`
- `private final double lerpDuration`

### Methods
- `public double getMinX()`
- `public double getMinZ()`
- `public double getMaxX()`
- `public double getMaxZ()`
- `public double getSize()`
- `public double getLerpSpeed()`
- `public long getLerpRemainingTime()`
- `public double getLerpTarget()`
- `public BorderStatus getStatus()`
- `public void onCenterChange()`
- `public void onAbsoluteMaxSizeChange()`
- `public WorldBorder.BorderExtent update()`
- `public VoxelShape getCollisionShape()`

## WorldBorder.Settings

*class* `net.minecraft.world.level.border.WorldBorder.Settings`

Enclosing class: WorldBorder

### Fields
- `private final double centerX`
- `private final double centerZ`
- `private final double damagePerBlock`
- `private final double safeZone`
- `private final int warningBlocks`
- `private final int warningTime`
- `private final double size`
- `private final long sizeLerpTime`
- `private final double sizeLerpTarget`

### Methods
- `public double getCenterX()`
- `public double getCenterZ()`
- `public double getDamagePerBlock()`
- `public double getSafeZone()`
- `public int getWarningBlocks()`
- `public int getWarningTime()`
- `public double getSize()`
- `public long getSizeLerpTime()`
- `public double getSizeLerpTarget()`
- `public static WorldBorder.Settings read(com.mojang.serialization.DynamicLike<?> p_62038_,  WorldBorder.Settings p_62039_)`
- `public void write(CompoundTag p_62041_)`

## WorldBorder.StaticBorderExtent

*class* `net.minecraft.world.level.border.WorldBorder.StaticBorderExtent`

Enclosing class: WorldBorder

### Fields
- `private final double size`
- `private double minX`
- `private double minZ`
- `private double maxX`
- `private double maxZ`
- `private VoxelShape shape`

### Methods
- `public double getMinX()`
- `public double getMaxX()`
- `public double getMinZ()`
- `public double getMaxZ()`
- `public double getSize()`
- `public BorderStatus getStatus()`
- `public double getLerpSpeed()`
- `public long getLerpRemainingTime()`
- `public double getLerpTarget()`
- `private void updateBox()`
- `public void onAbsoluteMaxSizeChange()`
- `public void onCenterChange()`
- `public WorldBorder.BorderExtent update()`
- `public VoxelShape getCollisionShape()`
