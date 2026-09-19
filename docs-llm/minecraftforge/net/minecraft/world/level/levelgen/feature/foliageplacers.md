# net.minecraft.world.level.levelgen.feature.foliageplacers

- [AcaciaFoliagePlacer](#acaciafoliageplacer)
- [BlobFoliagePlacer](#blobfoliageplacer)
- [BushFoliagePlacer](#bushfoliageplacer)
- [CherryFoliagePlacer](#cherryfoliageplacer)
- [DarkOakFoliagePlacer](#darkoakfoliageplacer)
- [FancyFoliagePlacer](#fancyfoliageplacer)
- [FoliagePlacer](#foliageplacer)
- [FoliagePlacer.FoliageAttachment](#foliageplacer.foliageattachment)
- [FoliagePlacer.FoliageSetter](#foliageplacer.foliagesetter)
- [FoliagePlacerType](#foliageplacertype)
- [MegaJungleFoliagePlacer](#megajunglefoliageplacer)
- [MegaPineFoliagePlacer](#megapinefoliageplacer)
- [PineFoliagePlacer](#pinefoliageplacer)
- [RandomSpreadFoliagePlacer](#randomspreadfoliageplacer)
- [SpruceFoliagePlacer](#sprucefoliageplacer)
## AcaciaFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.AcaciaFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<AcaciaFoliagePlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225499_,  FoliagePlacer.FoliageSetter p_273746_,  RandomSource p_225501_,  TreeConfiguration p_225502_,  int p_225503_,  FoliagePlacer.FoliageAttachment p_225504_,  int p_225505_,  int p_225506_,  int p_225507_)`
- `public int foliageHeight(RandomSource p_225495_,  int p_225496_,  TreeConfiguration p_225497_)`
- `protected boolean shouldSkipLocation(RandomSource p_225488_,  int p_225489_,  int p_225490_,  int p_225491_,  int p_225492_,  boolean p_225493_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## BlobFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<BlobFoliagePlacer> CODEC`
- `protected final int height`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected static <P extends BlobFoliagePlacer> com.mojang.datafixers.Products.P3<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<P>,IntProvider,IntProvider,Integer> blobParts(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<P> p_68414_)`
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_273066_,  FoliagePlacer.FoliageSetter p_272716_,  RandomSource p_273178_,  TreeConfiguration p_272850_,  int p_273067_,  FoliagePlacer.FoliageAttachment p_273711_,  int p_273580_,  int p_273511_,  int p_273685_)`
- `public int foliageHeight(RandomSource p_225516_,  int p_225517_,  TreeConfiguration p_225518_)`
- `protected boolean shouldSkipLocation(RandomSource p_225509_,  int p_225510_,  int p_225511_,  int p_225512_,  int p_225513_,  boolean p_225514_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## BushFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.BushFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<BushFoliagePlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer`: `height`
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_273251_,  FoliagePlacer.FoliageSetter p_273782_,  RandomSource p_273626_,  TreeConfiguration p_272956_,  int p_273384_,  FoliagePlacer.FoliageAttachment p_273459_,  int p_273161_,  int p_272989_,  int p_273166_)`
- `protected boolean shouldSkipLocation(RandomSource p_225530_,  int p_225531_,  int p_225532_,  int p_225533_,  int p_225534_,  boolean p_225535_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer`: `blobParts`, `foliageHeight`
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## CherryFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.CherryFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<CherryFoliagePlacer> CODEC`
- `private final IntProvider height`
- `private final float wideBottomLayerHoleChance`
- `private final float cornerHoleChance`
- `private final float hangingLeavesChance`
- `private final float hangingLeavesExtensionChance`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_272723_,  FoliagePlacer.FoliageSetter p_273410_,  RandomSource p_273057_,  TreeConfiguration p_273220_,  int p_272975_,  FoliagePlacer.FoliageAttachment p_273037_,  int p_273647_,  int p_273700_,  int p_273188_)`
- `public int foliageHeight(RandomSource p_273679_,  int p_273336_,  TreeConfiguration p_273643_)`
- `protected boolean shouldSkipLocation(RandomSource p_273294_,  int p_273380_,  int p_272865_,  int p_272853_,  int p_272631_,  boolean p_273432_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## DarkOakFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.DarkOakFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<DarkOakFoliagePlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225558_,  FoliagePlacer.FoliageSetter p_273641_,  RandomSource p_225560_,  TreeConfiguration p_225561_,  int p_225562_,  FoliagePlacer.FoliageAttachment p_225563_,  int p_225564_,  int p_225565_,  int p_225566_)`
- `public int foliageHeight(RandomSource p_225554_,  int p_225555_,  TreeConfiguration p_225556_)`
- `protected boolean shouldSkipLocationSigned(RandomSource p_225568_,  int p_225569_,  int p_225570_,  int p_225571_,  int p_225572_,  boolean p_225573_)`
- `protected boolean shouldSkipLocation(RandomSource p_225547_,  int p_225548_,  int p_225549_,  int p_225550_,  int p_225551_,  boolean p_225552_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `tryPlaceLeaf`

## FancyFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.FancyFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<FancyFoliagePlacer> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer`: `height`
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225582_,  FoliagePlacer.FoliageSetter p_273184_,  RandomSource p_225584_,  TreeConfiguration p_225585_,  int p_225586_,  FoliagePlacer.FoliageAttachment p_225587_,  int p_225588_,  int p_225589_,  int p_225590_)`
- `protected boolean shouldSkipLocation(RandomSource p_225575_,  int p_225576_,  int p_225577_,  int p_225578_,  int p_225579_,  boolean p_225580_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer`: `blobParts`, `foliageHeight`
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## FoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<FoliagePlacer> CODEC`
- `protected final IntProvider radius`
- `protected final IntProvider offset`

### Methods
- `protected static <P extends FoliagePlacer> com.mojang.datafixers.Products.P2<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<P>,IntProvider,IntProvider> foliagePlacerParts(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<P> p_68574_)`
- `protected abstract FoliagePlacerType<?> type()`
- `public void createFoliage(LevelSimulatedReader p_273526_,  FoliagePlacer.FoliageSetter p_273018_,  RandomSource p_273425_,  TreeConfiguration p_273138_,  int p_273282_,  FoliagePlacer.FoliageAttachment p_272944_,  int p_272930_,  int p_272727_)`
- `protected abstract void createFoliage(LevelSimulatedReader p_225613_,  FoliagePlacer.FoliageSetter p_273598_,  RandomSource p_225615_,  TreeConfiguration p_225616_,  int p_225617_,  FoliagePlacer.FoliageAttachment p_225618_,  int p_225619_,  int p_225620_,  int p_225621_)`
- `public abstract int foliageHeight(RandomSource p_225601_,  int p_225602_,  TreeConfiguration p_225603_)`
- `public int foliageRadius(RandomSource p_225593_,  int p_225594_)`
- `private int offset(RandomSource p_225592_)`
- `protected abstract boolean shouldSkipLocation(RandomSource p_225595_,  int p_225596_,  int p_225597_,  int p_225598_,  int p_225599_,  boolean p_225600_)`
- `protected boolean shouldSkipLocationSigned(RandomSource p_225639_,  int p_225640_,  int p_225641_,  int p_225642_,  int p_225643_,  boolean p_225644_)`
- `protected void placeLeavesRow(LevelSimulatedReader p_225629_,  FoliagePlacer.FoliageSetter p_272772_,  RandomSource p_225631_,  TreeConfiguration p_225632_,  BlockPos p_225633_,  int p_225634_,  int p_225635_,  boolean p_225636_)`
- `protected final void placeLeavesRowWithHangingLeavesBelow(LevelSimulatedReader p_273087_,  FoliagePlacer.FoliageSetter p_273225_,  RandomSource p_272629_,  TreeConfiguration p_272885_,  BlockPos p_273412_,  int p_272712_,  int p_272656_,  boolean p_272689_,  float p_273464_,  float p_273068_)`
- `private static boolean tryPlaceExtension(LevelSimulatedReader p_277577_,  FoliagePlacer.FoliageSetter p_277449_,  RandomSource p_277966_,  TreeConfiguration p_277897_,  float p_277979_,  BlockPos p_277833_,  BlockPos.MutableBlockPos p_277567_)`
- `protected static boolean tryPlaceLeaf(LevelSimulatedReader p_273596_,  FoliagePlacer.FoliageSetter p_273054_,  RandomSource p_272977_,  TreeConfiguration p_273040_,  BlockPos p_273406_)`

## FoliagePlacer.FoliageAttachment

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer.FoliageAttachment`

Enclosing class: FoliagePlacer

### Fields
- `private final BlockPos pos`
- `private final int radiusOffset`
- `private final boolean doubleTrunk`

### Methods
- `public BlockPos pos()`
- `public int radiusOffset()`
- `public boolean doubleTrunk()`

## FoliagePlacer.FoliageSetter

*interface* `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer.FoliageSetter`

Enclosing class: FoliagePlacer

### Methods
- `void set(BlockPos p_273742_,  BlockState p_273780_)`
- `boolean isSet(BlockPos p_273118_)`

## FoliagePlacerType

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacerType`

### Fields
- `public static final FoliagePlacerType<BlobFoliagePlacer> BLOB_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<SpruceFoliagePlacer> SPRUCE_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<PineFoliagePlacer> PINE_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<AcaciaFoliagePlacer> ACACIA_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<BushFoliagePlacer> BUSH_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<FancyFoliagePlacer> FANCY_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<MegaJungleFoliagePlacer> MEGA_JUNGLE_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<MegaPineFoliagePlacer> MEGA_PINE_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<DarkOakFoliagePlacer> DARK_OAK_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<RandomSpreadFoliagePlacer> RANDOM_SPREAD_FOLIAGE_PLACER`
- `public static final FoliagePlacerType<CherryFoliagePlacer> CHERRY_FOLIAGE_PLACER`
- `private final com.mojang.serialization.Codec<P extends FoliagePlacer> codec`

### Methods
- `private static <P extends FoliagePlacer> FoliagePlacerType<P> register(String p_68606_,  com.mojang.serialization.Codec<P> p_68607_)`
- `public com.mojang.serialization.Codec<P> codec()`

## MegaJungleFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.MegaJungleFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<MegaJungleFoliagePlacer> CODEC`
- `protected final int height`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225657_,  FoliagePlacer.FoliageSetter p_273447_,  RandomSource p_225659_,  TreeConfiguration p_225660_,  int p_225661_,  FoliagePlacer.FoliageAttachment p_225662_,  int p_225663_,  int p_225664_,  int p_225665_)`
- `public int foliageHeight(RandomSource p_225653_,  int p_225654_,  TreeConfiguration p_225655_)`
- `protected boolean shouldSkipLocation(RandomSource p_225646_,  int p_225647_,  int p_225648_,  int p_225649_,  int p_225650_,  boolean p_225651_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## MegaPineFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.MegaPineFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<MegaPineFoliagePlacer> CODEC`
- `private final IntProvider crownHeight`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225678_,  FoliagePlacer.FoliageSetter p_273345_,  RandomSource p_225680_,  TreeConfiguration p_225681_,  int p_225682_,  FoliagePlacer.FoliageAttachment p_225683_,  int p_225684_,  int p_225685_,  int p_225686_)`
- `public int foliageHeight(RandomSource p_225674_,  int p_225675_,  TreeConfiguration p_225676_)`
- `protected boolean shouldSkipLocation(RandomSource p_225667_,  int p_225668_,  int p_225669_,  int p_225670_,  int p_225671_,  boolean p_225672_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## PineFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.PineFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<PineFoliagePlacer> CODEC`
- `private final IntProvider height`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225702_,  FoliagePlacer.FoliageSetter p_272791_,  RandomSource p_225704_,  TreeConfiguration p_225705_,  int p_225706_,  FoliagePlacer.FoliageAttachment p_225707_,  int p_225708_,  int p_225709_,  int p_225710_)`
- `public int foliageRadius(RandomSource p_225688_,  int p_225689_)`
- `public int foliageHeight(RandomSource p_225698_,  int p_225699_,  TreeConfiguration p_225700_)`
- `protected boolean shouldSkipLocation(RandomSource p_225691_,  int p_225692_,  int p_225693_,  int p_225694_,  int p_225695_,  boolean p_225696_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## RandomSpreadFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.RandomSpreadFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<RandomSpreadFoliagePlacer> CODEC`
- `private final IntProvider foliageHeight`
- `private final int leafPlacementAttempts`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225723_,  FoliagePlacer.FoliageSetter p_272842_,  RandomSource p_225725_,  TreeConfiguration p_225726_,  int p_225727_,  FoliagePlacer.FoliageAttachment p_225728_,  int p_225729_,  int p_225730_,  int p_225731_)`
- `public int foliageHeight(RandomSource p_225719_,  int p_225720_,  TreeConfiguration p_225721_)`
- `protected boolean shouldSkipLocation(RandomSource p_225712_,  int p_225713_,  int p_225714_,  int p_225715_,  int p_225716_,  boolean p_225717_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`

## SpruceFoliagePlacer

*class* `net.minecraft.world.level.levelgen.feature.foliageplacers.SpruceFoliagePlacer`

### Fields
- `public static final com.mojang.serialization.Codec<SpruceFoliagePlacer> CODEC`
- `private final IntProvider trunkHeight`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `offset`, `radius`

### Methods
- `protected FoliagePlacerType<?> type()`
- `protected void createFoliage(LevelSimulatedReader p_225744_,  FoliagePlacer.FoliageSetter p_273256_,  RandomSource p_225746_,  TreeConfiguration p_225747_,  int p_225748_,  FoliagePlacer.FoliageAttachment p_225749_,  int p_225750_,  int p_225751_,  int p_225752_)`
- `public int foliageHeight(RandomSource p_225740_,  int p_225741_,  TreeConfiguration p_225742_)`
- `protected boolean shouldSkipLocation(RandomSource p_225733_,  int p_225734_,  int p_225735_,  int p_225736_,  int p_225737_,  boolean p_225738_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer`: `createFoliage`, `foliagePlacerParts`, `foliageRadius`, `placeLeavesRow`, `placeLeavesRowWithHangingLeavesBelow`, `shouldSkipLocationSigned`, `tryPlaceLeaf`
