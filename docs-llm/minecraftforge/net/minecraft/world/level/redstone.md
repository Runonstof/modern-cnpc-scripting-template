# net.minecraft.world.level.redstone

- [CollectingNeighborUpdater](#collectingneighborupdater)
- [CollectingNeighborUpdater.FullNeighborUpdate](#collectingneighborupdater.fullneighborupdate)
- [CollectingNeighborUpdater.MultiNeighborUpdate](#collectingneighborupdater.multineighborupdate)
- [CollectingNeighborUpdater.NeighborUpdates](#collectingneighborupdater.neighborupdates)
- [CollectingNeighborUpdater.ShapeUpdate](#collectingneighborupdater.shapeupdate)
- [CollectingNeighborUpdater.SimpleNeighborUpdate](#collectingneighborupdater.simpleneighborupdate)
- [InstantNeighborUpdater](#instantneighborupdater)
- [NeighborUpdater](#neighborupdater)
- [Redstone](#redstone)
## CollectingNeighborUpdater

*class* `net.minecraft.world.level.redstone.CollectingNeighborUpdater`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Level level`
- `private final int maxChainedNeighborUpdates`
- `private final ArrayDeque<CollectingNeighborUpdater.NeighborUpdates> stack`
- `private final List<CollectingNeighborUpdater.NeighborUpdates> addedThisLayer`
- `private int count`

### Inherited fields
- from `net.minecraft.world.level.redstone.NeighborUpdater`: `UPDATE_ORDER`

### Methods
- `public void shapeUpdate(Direction p_230664_,  BlockState p_230665_,  BlockPos p_230666_,  BlockPos p_230667_,  int p_230668_,  int p_230669_)`
- `public void neighborChanged(BlockPos p_230653_,  Block p_230654_,  BlockPos p_230655_)`
- `public void neighborChanged(BlockState p_230647_,  BlockPos p_230648_,  Block p_230649_,  BlockPos p_230650_,  boolean p_230651_)`
- `public void updateNeighborsAtExceptFromFacing(BlockPos p_230657_,  Block p_230658_,  @Nullable  Direction p_230659_)`
- `private void addAndRun(BlockPos p_230661_,  CollectingNeighborUpdater.NeighborUpdates p_230662_)`
- `private void runUpdates()`

## CollectingNeighborUpdater.FullNeighborUpdate

*record* `net.minecraft.world.level.redstone.CollectingNeighborUpdater.FullNeighborUpdate`

Enclosing class: CollectingNeighborUpdater

### Fields
- `private final BlockState state`
  The field for the state record component.
- `private final BlockPos pos`
  The field for the pos record component.
- `private final Block block`
  The field for the block record component.
- `private final BlockPos neighborPos`
  The field for the neighborPos record component.
- `private final boolean movedByPiston`
  The field for the movedByPiston record component.

### Methods
- `public boolean runNext(Level p_230683_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public BlockState state()`
  Returns the value of the state record component.
  - returns: the value of the state record component
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public Block block()`
  Returns the value of the block record component.
  - returns: the value of the block record component
- `public BlockPos neighborPos()`
  Returns the value of the neighborPos record component.
  - returns: the value of the neighborPos record component
- `public boolean movedByPiston()`
  Returns the value of the movedByPiston record component.
  - returns: the value of the movedByPiston record component

## CollectingNeighborUpdater.MultiNeighborUpdate

*class* `net.minecraft.world.level.redstone.CollectingNeighborUpdater.MultiNeighborUpdate`

Enclosing class: CollectingNeighborUpdater

### Fields
- `private final BlockPos sourcePos`
- `private final Block sourceBlock`
- `@Nullable private final Direction skipDirection`
- `private int idx`

### Methods
- `public boolean runNext(Level p_230701_)`

## CollectingNeighborUpdater.NeighborUpdates

*interface* `net.minecraft.world.level.redstone.CollectingNeighborUpdater.NeighborUpdates`

Enclosing class: CollectingNeighborUpdater

### Methods
- `boolean runNext(Level p_230702_)`

## CollectingNeighborUpdater.ShapeUpdate

*record* `net.minecraft.world.level.redstone.CollectingNeighborUpdater.ShapeUpdate`

Enclosing class: CollectingNeighborUpdater

### Fields
- `private final Direction direction`
  The field for the direction record component.
- `private final BlockState state`
  The field for the state record component.
- `private final BlockPos pos`
  The field for the pos record component.
- `private final BlockPos neighborPos`
  The field for the neighborPos record component.
- `private final int updateFlags`
  The field for the updateFlags record component.
- `private final int updateLimit`
  The field for the updateLimit record component.

### Methods
- `public boolean runNext(Level p_230716_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Direction direction()`
  Returns the value of the direction record component.
  - returns: the value of the direction record component
- `public BlockState state()`
  Returns the value of the state record component.
  - returns: the value of the state record component
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public BlockPos neighborPos()`
  Returns the value of the neighborPos record component.
  - returns: the value of the neighborPos record component
- `public int updateFlags()`
  Returns the value of the updateFlags record component.
  - returns: the value of the updateFlags record component
- `public int updateLimit()`
  Returns the value of the updateLimit record component.
  - returns: the value of the updateLimit record component

## CollectingNeighborUpdater.SimpleNeighborUpdate

*record* `net.minecraft.world.level.redstone.CollectingNeighborUpdater.SimpleNeighborUpdate`

Enclosing class: CollectingNeighborUpdater

### Fields
- `private final BlockPos pos`
  The field for the pos record component.
- `private final Block block`
  The field for the block record component.
- `private final BlockPos neighborPos`
  The field for the neighborPos record component.

### Methods
- `public boolean runNext(Level p_230734_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public BlockPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public Block block()`
  Returns the value of the block record component.
  - returns: the value of the block record component
- `public BlockPos neighborPos()`
  Returns the value of the neighborPos record component.
  - returns: the value of the neighborPos record component

## InstantNeighborUpdater

*class* `net.minecraft.world.level.redstone.InstantNeighborUpdater`

### Fields
- `private final Level level`

### Inherited fields
- from `net.minecraft.world.level.redstone.NeighborUpdater`: `UPDATE_ORDER`

### Methods
- `public void shapeUpdate(Direction p_230755_,  BlockState p_230756_,  BlockPos p_230757_,  BlockPos p_230758_,  int p_230759_,  int p_230760_)`
- `public void neighborChanged(BlockPos p_230751_,  Block p_230752_,  BlockPos p_230753_)`
- `public void neighborChanged(BlockState p_230745_,  BlockPos p_230746_,  Block p_230747_,  BlockPos p_230748_,  boolean p_230749_)`

### Inherited methods
- from `net.minecraft.world.level.redstone.NeighborUpdater`: `updateNeighborsAtExceptFromFacing`

## NeighborUpdater

*interface* `net.minecraft.world.level.redstone.NeighborUpdater`

### Fields
- `static final Direction[] UPDATE_ORDER`

### Methods
- `void shapeUpdate(Direction p_230791_,  BlockState p_230792_,  BlockPos p_230793_,  BlockPos p_230794_,  int p_230795_,  int p_230796_)`
- `void neighborChanged(BlockPos p_230785_,  Block p_230786_,  BlockPos p_230787_)`
- `void neighborChanged(BlockState p_230780_,  BlockPos p_230781_,  Block p_230782_,  BlockPos p_230783_,  boolean p_230784_)`
- `default void updateNeighborsAtExceptFromFacing(BlockPos p_230788_,  Block p_230789_,  @Nullable  Direction p_230790_)`
- `static void executeShapeUpdate(LevelAccessor p_230771_,  Direction p_230772_,  BlockState p_230773_,  BlockPos p_230774_,  BlockPos p_230775_,  int p_230776_,  int p_230777_)`
- `static void executeUpdate(Level p_230764_,  BlockState p_230765_,  BlockPos p_230766_,  Block p_230767_,  BlockPos p_230768_,  boolean p_230769_)`

## Redstone

*class* `net.minecraft.world.level.redstone.Redstone`

### Fields
- `public static final int SIGNAL_MIN` (= 0)
- `public static final int SIGNAL_MAX` (= 15)
- `public static final int SIGNAL_NONE` (= 0)
