# net.minecraft.world.level.levelgen.feature.treedecorators

- [AlterGroundDecorator](#altergrounddecorator)
- [AttachedToLeavesDecorator](#attachedtoleavesdecorator)
- [BeehiveDecorator](#beehivedecorator)
- [CocoaDecorator](#cocoadecorator)
- [LeaveVineDecorator](#leavevinedecorator)
- [TreeDecorator](#treedecorator)
- [TreeDecorator.Context](#treedecorator.context)
- [TreeDecoratorType](#treedecoratortype)
- [TrunkVineDecorator](#trunkvinedecorator)
## AlterGroundDecorator

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.AlterGroundDecorator`

### Fields
- `public static final com.mojang.serialization.Codec<AlterGroundDecorator> CODEC`
- `private final BlockStateProvider provider`

### Methods
- `protected TreeDecoratorType<?> type()`
- `public void place(TreeDecorator.Context p_225969_)`
- `private void placeCircle(TreeDecorator.Context p_225971_,  BlockPos p_225972_)`
- `private void placeBlockAt(TreeDecorator.Context p_225974_,  BlockPos p_225975_)`

## AttachedToLeavesDecorator

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.AttachedToLeavesDecorator`

### Fields
- `public static final com.mojang.serialization.Codec<AttachedToLeavesDecorator> CODEC`
- `protected final float probability`
- `protected final int exclusionRadiusXZ`
- `protected final int exclusionRadiusY`
- `protected final BlockStateProvider blockProvider`
- `protected final int requiredEmptyBlocks`
- `protected final List<Direction> directions`

### Methods
- `public void place(TreeDecorator.Context p_226000_)`
- `private boolean hasRequiredEmptyBlocks(TreeDecorator.Context p_226002_,  BlockPos p_226003_,  Direction p_226004_)`
- `protected TreeDecoratorType<?> type()`

## BeehiveDecorator

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.BeehiveDecorator`

### Fields
- `public static final com.mojang.serialization.Codec<BeehiveDecorator> CODEC`
- `private static final Direction WORLDGEN_FACING`
- `private static final Direction[] SPAWN_DIRECTIONS`
- `private final float probability`

### Methods
- `protected TreeDecoratorType<?> type()`
- `public void place(TreeDecorator.Context p_226019_)`

## CocoaDecorator

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.CocoaDecorator`

### Fields
- `public static final com.mojang.serialization.Codec<CocoaDecorator> CODEC`
- `private final float probability`

### Methods
- `protected TreeDecoratorType<?> type()`
- `public void place(TreeDecorator.Context p_226028_)`

## LeaveVineDecorator

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.LeaveVineDecorator`

### Fields
- `public static final com.mojang.serialization.Codec<LeaveVineDecorator> CODEC`
- `private final float probability`

### Methods
- `protected TreeDecoratorType<?> type()`
- `public void place(TreeDecorator.Context p_226039_)`
- `private static void addHangingVine(BlockPos p_226041_,  BooleanProperty p_226042_,  TreeDecorator.Context p_226043_)`

## TreeDecorator

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator`

### Fields
- `public static final com.mojang.serialization.Codec<TreeDecorator> CODEC`

### Methods
- `protected abstract TreeDecoratorType<?> type()`
- `public abstract void place(TreeDecorator.Context p_226044_)`

## TreeDecorator.Context

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator.Context`

Enclosing class: TreeDecorator

### Fields
- `private final LevelSimulatedReader level`
- `private final BiConsumer<BlockPos,BlockState> decorationSetter`
- `private final RandomSource random`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<BlockPos> logs`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<BlockPos> leaves`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<BlockPos> roots`

### Methods
- `public void placeVine(BlockPos p_226065_,  BooleanProperty p_226066_)`
- `public void setBlock(BlockPos p_226062_,  BlockState p_226063_)`
- `public boolean isAir(BlockPos p_226060_)`
- `public LevelSimulatedReader level()`
- `public RandomSource random()`
- `public it.unimi.dsi.fastutil.objects.ObjectArrayList<BlockPos> logs()`
- `public it.unimi.dsi.fastutil.objects.ObjectArrayList<BlockPos> leaves()`
- `public it.unimi.dsi.fastutil.objects.ObjectArrayList<BlockPos> roots()`

## TreeDecoratorType

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecoratorType`

### Fields
- `public static final TreeDecoratorType<TrunkVineDecorator> TRUNK_VINE`
- `public static final TreeDecoratorType<LeaveVineDecorator> LEAVE_VINE`
- `public static final TreeDecoratorType<CocoaDecorator> COCOA`
- `public static final TreeDecoratorType<BeehiveDecorator> BEEHIVE`
- `public static final TreeDecoratorType<AlterGroundDecorator> ALTER_GROUND`
- `public static final TreeDecoratorType<AttachedToLeavesDecorator> ATTACHED_TO_LEAVES`
- `private final com.mojang.serialization.Codec<P extends TreeDecorator> codec`

### Methods
- `private static <P extends TreeDecorator> TreeDecoratorType<P> register(String p_70053_,  com.mojang.serialization.Codec<P> p_70054_)`
- `public com.mojang.serialization.Codec<P> codec()`

## TrunkVineDecorator

*class* `net.minecraft.world.level.levelgen.feature.treedecorators.TrunkVineDecorator`

### Fields
- `public static final com.mojang.serialization.Codec<TrunkVineDecorator> CODEC`
- `public static final TrunkVineDecorator INSTANCE`

### Methods
- `protected TreeDecoratorType<?> type()`
- `public void place(TreeDecorator.Context p_226077_)`
