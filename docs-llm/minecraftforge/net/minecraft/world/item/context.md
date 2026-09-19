# net.minecraft.world.item.context

- [BlockPlaceContext](#blockplacecontext)
- [DirectionalPlaceContext](#directionalplacecontext)
- [UseOnContext](#useoncontext)
## BlockPlaceContext

*class* `net.minecraft.world.item.context.BlockPlaceContext`

### Fields
- `private final BlockPos relativePos`
- `protected boolean replaceClicked`

### Methods
- `public static BlockPlaceContext at(BlockPlaceContext p_43645_,  BlockPos p_43646_,  Direction p_43647_)`
- `public BlockPos getClickedPos()`
- `public boolean canPlace()`
- `public boolean replacingClickedOnBlock()`
- `public Direction getNearestLookingDirection()`
- `public Direction getNearestLookingVerticalDirection()`
- `public Direction[] getNearestLookingDirections()`

### Inherited methods
- from `net.minecraft.world.item.context.UseOnContext`: `getClickedFace`, `getClickLocation`, `getHand`, `getHitResult`, `getHorizontalDirection`, `getItemInHand`, `getLevel`, `getPlayer`, `getRotation`, `isInside`, `isSecondaryUseActive`

## DirectionalPlaceContext

*class* `net.minecraft.world.item.context.DirectionalPlaceContext`

### Fields
- `private final Direction direction`

### Inherited fields
- from `net.minecraft.world.item.context.BlockPlaceContext`: `replaceClicked`

### Methods
- `public BlockPos getClickedPos()`
- `public boolean canPlace()`
- `public boolean replacingClickedOnBlock()`
- `public Direction getNearestLookingDirection()`
- `public Direction[] getNearestLookingDirections()`
- `public Direction getHorizontalDirection()`
- `public boolean isSecondaryUseActive()`
- `public float getRotation()`

### Inherited methods
- from `net.minecraft.world.item.context.BlockPlaceContext`: `at`, `getNearestLookingVerticalDirection`
- from `net.minecraft.world.item.context.UseOnContext`: `getClickedFace`, `getClickLocation`, `getHand`, `getHitResult`, `getItemInHand`, `getLevel`, `getPlayer`, `isInside`

## UseOnContext

*class* `net.minecraft.world.item.context.UseOnContext`

### Fields
- `@Nullable private final Player player`
- `private final InteractionHand hand`
- `private final BlockHitResult hitResult`
- `private final Level level`
- `private final ItemStack itemStack`

### Methods
- `protected final BlockHitResult getHitResult()`
- `public BlockPos getClickedPos()`
- `public Direction getClickedFace()`
- `public Vec3 getClickLocation()`
- `public boolean isInside()`
- `public ItemStack getItemInHand()`
- `@Nullable public Player getPlayer()`
- `public InteractionHand getHand()`
- `public Level getLevel()`
- `public Direction getHorizontalDirection()`
- `public boolean isSecondaryUseActive()`
- `public float getRotation()`
