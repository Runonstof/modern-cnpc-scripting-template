# net.minecraft.world.level.portal

- [PortalForcer](#portalforcer)
- [PortalInfo](#portalinfo)
- [PortalShape](#portalshape)
## PortalForcer

*class* `net.minecraft.world.level.portal.PortalForcer`

### Fields
- `private static final int TICKET_RADIUS` (= 3)
- `private static final int SEARCH_RADIUS` (= 128)
- `private static final int CREATE_RADIUS` (= 16)
- `private static final int FRAME_HEIGHT` (= 5)
- `private static final int FRAME_WIDTH` (= 4)
- `private static final int FRAME_BOX` (= 3)
- `private static final int FRAME_HEIGHT_START` (= -1)
- `private static final int FRAME_HEIGHT_END` (= 4)
- `private static final int FRAME_WIDTH_START` (= -1)
- `private static final int FRAME_WIDTH_END` (= 3)
- `private static final int FRAME_BOX_START` (= -1)
- `private static final int FRAME_BOX_END` (= 2)
- `private static final int NOTHING_FOUND` (= -1)
- `protected final ServerLevel level`

### Methods
- `public Optional<BlockUtil.FoundRectangle> findPortalAround(BlockPos p_192986_,  boolean p_192987_,  WorldBorder p_192988_)`
- `public Optional<BlockUtil.FoundRectangle> createPortal(BlockPos p_77667_,  Direction.Axis p_77668_)`
- `private boolean canPortalReplaceBlock(BlockPos.MutableBlockPos p_248971_)`
- `private boolean canHostFrame(BlockPos p_77662_,  BlockPos.MutableBlockPos p_77663_,  Direction p_77664_,  int p_77665_)`

### Inherited methods
- from `net.minecraftforge.common.util.ITeleporter`: `getPortalInfo`, `isVanilla`, `placeEntity`, `playTeleportSound`

## PortalInfo

*class* `net.minecraft.world.level.portal.PortalInfo`

### Fields
- `public final Vec3 pos`
- `public final Vec3 speed`
- `public final float yRot`
- `public final float xRot`

## PortalShape

*class* `net.minecraft.world.level.portal.PortalShape`

### Fields
- `private static final int MIN_WIDTH` (= 2)
- `public static final int MAX_WIDTH` (= 21)
- `private static final int MIN_HEIGHT` (= 3)
- `public static final int MAX_HEIGHT` (= 21)
- `private static final BlockBehaviour.StatePredicate FRAME`
- `private static final float SAFE_TRAVEL_MAX_ENTITY_XY` (= 4.0f)
- `private static final double SAFE_TRAVEL_MAX_VERTICAL_DELTA` (= 1.0)
- `private final LevelAccessor level`
- `private final Direction.Axis axis`
- `private final Direction rightDir`
- `private int numPortalBlocks`
- `@Nullable private BlockPos bottomLeft`
- `private int height`
- `private final int width`

### Methods
- `public static Optional<PortalShape> findEmptyPortalShape(LevelAccessor p_77709_,  BlockPos p_77710_,  Direction.Axis p_77711_)`
- `public static Optional<PortalShape> findPortalShape(LevelAccessor p_77713_,  BlockPos p_77714_,  Predicate<PortalShape> p_77715_,  Direction.Axis p_77716_)`
- `@Nullable private BlockPos calculateBottomLeft(BlockPos p_77734_)`
- `private int calculateWidth()`
- `private int getDistanceUntilEdgeAboveFrame(BlockPos p_77736_,  Direction p_77737_)`
- `private int calculateHeight()`
- `private boolean hasTopFrame(BlockPos.MutableBlockPos p_77731_,  int p_77732_)`
- `private int getDistanceUntilTop(BlockPos.MutableBlockPos p_77729_)`
- `private static boolean isEmpty(BlockState p_77718_)`
- `public boolean isValid()`
- `public void createPortalBlocks()`
- `public boolean isComplete()`
- `public static Vec3 getRelativePosition(BlockUtil.FoundRectangle p_77739_,  Direction.Axis p_77740_,  Vec3 p_77741_,  EntityDimensions p_77742_)`
- `public static PortalInfo createPortalInfo(ServerLevel p_259301_,  BlockUtil.FoundRectangle p_259931_,  Direction.Axis p_259901_,  Vec3 p_259630_,  Entity p_259166_,  Vec3 p_260043_,  float p_259853_,  float p_259667_)`
- `private static Vec3 findCollisionFreePosition(Vec3 p_260315_,  ServerLevel p_259704_,  Entity p_259626_,  EntityDimensions p_259816_)`
