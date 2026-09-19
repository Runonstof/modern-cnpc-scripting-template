# net.minecraft.world.entity.ai.util

- [AirAndWaterRandomPos](#airandwaterrandompos)
- [AirRandomPos](#airrandompos)
- [DefaultRandomPos](#defaultrandompos)
- [GoalUtils](#goalutils)
- [HoverRandomPos](#hoverrandompos)
- [LandRandomPos](#landrandompos)
- [RandomPos](#randompos)
## AirAndWaterRandomPos

*class* `net.minecraft.world.entity.ai.util.AirAndWaterRandomPos`

### Methods
- `@Nullable public static Vec3 getPos(PathfinderMob p_148358_,  int p_148359_,  int p_148360_,  int p_148361_,  double p_148362_,  double p_148363_,  double p_148364_)`
- `@Nullable public static BlockPos generateRandomPos(PathfinderMob p_148366_,  int p_148367_,  int p_148368_,  int p_148369_,  double p_148370_,  double p_148371_,  double p_148372_,  boolean p_148373_)`

## AirRandomPos

*class* `net.minecraft.world.entity.ai.util.AirRandomPos`

### Methods
- `@Nullable public static Vec3 getPosTowards(PathfinderMob p_148388_,  int p_148389_,  int p_148390_,  int p_148391_,  Vec3 p_148392_,  double p_148393_)`

## DefaultRandomPos

*class* `net.minecraft.world.entity.ai.util.DefaultRandomPos`

### Methods
- `@Nullable public static Vec3 getPos(PathfinderMob p_148404_,  int p_148405_,  int p_148406_)`
- `@Nullable public static Vec3 getPosTowards(PathfinderMob p_148413_,  int p_148414_,  int p_148415_,  Vec3 p_148416_,  double p_148417_)`
- `@Nullable public static Vec3 getPosAway(PathfinderMob p_148408_,  int p_148409_,  int p_148410_,  Vec3 p_148411_)`
- `@Nullable private static BlockPos generateRandomPosTowardDirection(PathfinderMob p_148437_,  int p_148438_,  boolean p_148439_,  BlockPos p_148440_)`

## GoalUtils

*class* `net.minecraft.world.entity.ai.util.GoalUtils`

### Methods
- `public static boolean hasGroundPathNavigation(Mob p_26895_)`
- `public static boolean mobRestricted(PathfinderMob p_148443_,  int p_148444_)`
- `public static boolean isOutsideLimits(BlockPos p_148452_,  PathfinderMob p_148453_)`
- `public static boolean isRestricted(boolean p_148455_,  PathfinderMob p_148456_,  BlockPos p_148457_)`
- `public static boolean isNotStable(PathNavigation p_148449_,  BlockPos p_148450_)`
- `public static boolean isWater(PathfinderMob p_148446_,  BlockPos p_148447_)`
- `public static boolean hasMalus(PathfinderMob p_148459_,  BlockPos p_148460_)`
- `public static boolean isSolid(PathfinderMob p_148462_,  BlockPos p_148463_)`

## HoverRandomPos

*class* `net.minecraft.world.entity.ai.util.HoverRandomPos`

### Methods
- `@Nullable public static Vec3 getPos(PathfinderMob p_148466_,  int p_148467_,  int p_148468_,  double p_148469_,  double p_148470_,  float p_148471_,  int p_148472_,  int p_148473_)`

## LandRandomPos

*class* `net.minecraft.world.entity.ai.util.LandRandomPos`

### Methods
- `@Nullable public static Vec3 getPos(PathfinderMob p_148489_,  int p_148490_,  int p_148491_)`
- `@Nullable public static Vec3 getPos(PathfinderMob p_148504_,  int p_148505_,  int p_148506_,  ToDoubleFunction<BlockPos> p_148507_)`
- `@Nullable public static Vec3 getPosTowards(PathfinderMob p_148493_,  int p_148494_,  int p_148495_,  Vec3 p_148496_)`
- `@Nullable public static Vec3 getPosAway(PathfinderMob p_148522_,  int p_148523_,  int p_148524_,  Vec3 p_148525_)`
- `@Nullable private static Vec3 getPosInDirection(PathfinderMob p_148498_,  int p_148499_,  int p_148500_,  Vec3 p_148501_,  boolean p_148502_)`
- `@Nullable public static BlockPos movePosUpOutOfSolid(PathfinderMob p_148519_,  BlockPos p_148520_)`
- `@Nullable public static BlockPos generateRandomPosTowardDirection(PathfinderMob p_148514_,  int p_148515_,  boolean p_148516_,  BlockPos p_148517_)`

## RandomPos

*class* `net.minecraft.world.entity.ai.util.RandomPos`

### Fields
- `private static final int RANDOM_POS_ATTEMPTS` (= 10)

### Methods
- `public static BlockPos generateRandomDirection(RandomSource p_217852_,  int p_217853_,  int p_217854_)`
- `@Nullable public static BlockPos generateRandomDirectionWithinRadians(RandomSource p_217856_,  int p_217857_,  int p_217858_,  int p_217859_,  double p_217860_,  double p_217861_,  double p_217862_)`
- `public static BlockPos moveUpOutOfSolid(BlockPos p_148546_,  int p_148547_,  Predicate<BlockPos> p_148548_)`
- `public static BlockPos moveUpToAboveSolid(BlockPos p_26948_,  int p_26949_,  int p_26950_,  Predicate<BlockPos> p_26951_)`
- `@Nullable public static Vec3 generateRandomPos(PathfinderMob p_148543_,  Supplier<BlockPos> p_148544_)`
- `@Nullable public static Vec3 generateRandomPos(Supplier<BlockPos> p_148562_,  ToDoubleFunction<BlockPos> p_148563_)`
- `public static BlockPos generateRandomPosTowardDirection(PathfinderMob p_217864_,  int p_217865_,  RandomSource p_217866_,  BlockPos p_217867_)`
