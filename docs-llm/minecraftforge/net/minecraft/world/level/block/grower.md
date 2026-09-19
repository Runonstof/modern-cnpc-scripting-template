# net.minecraft.world.level.block.grower

- [AbstractMegaTreeGrower](#abstractmegatreegrower)
- [AbstractTreeGrower](#abstracttreegrower)
- [AcaciaTreeGrower](#acaciatreegrower)
- [AzaleaTreeGrower](#azaleatreegrower)
- [BirchTreeGrower](#birchtreegrower)
- [CherryTreeGrower](#cherrytreegrower)
- [DarkOakTreeGrower](#darkoaktreegrower)
- [JungleTreeGrower](#jungletreegrower)
- [MangroveTreeGrower](#mangrovetreegrower)
- [OakTreeGrower](#oaktreegrower)
- [SpruceTreeGrower](#sprucetreegrower)
## AbstractMegaTreeGrower

*class* `net.minecraft.world.level.block.grower.AbstractMegaTreeGrower`

### Methods
- `public boolean growTree(ServerLevel p_222891_,  ChunkGenerator p_222892_,  BlockPos p_222893_,  BlockState p_222894_,  RandomSource p_222895_)`
- `@Nullable protected abstract ResourceKey<ConfiguredFeature<?,?>> getConfiguredMegaFeature(RandomSource p_222904_)`
- `public boolean placeMega(ServerLevel p_222897_,  ChunkGenerator p_222898_,  BlockPos p_222899_,  BlockState p_222900_,  RandomSource p_222901_,  int p_222902_,  int p_222903_)`
- `public static boolean isTwoByTwoSapling(BlockState p_59999_,  BlockGetter p_60000_,  BlockPos p_60001_,  int p_60002_,  int p_60003_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractTreeGrower`: `getConfiguredFeature`

## AbstractTreeGrower

*class* `net.minecraft.world.level.block.grower.AbstractTreeGrower`

### Methods
- `@Nullable protected abstract ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_222910_,  boolean p_222911_)`
- `public boolean growTree(ServerLevel p_222905_,  ChunkGenerator p_222906_,  BlockPos p_222907_,  BlockState p_222908_,  RandomSource p_222909_)`
- `private boolean hasFlowers(LevelAccessor p_60012_,  BlockPos p_60013_)`

## AcaciaTreeGrower

*class* `net.minecraft.world.level.block.grower.AcaciaTreeGrower`

### Methods
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_256308_,  boolean p_256632_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractTreeGrower`: `growTree`

## AzaleaTreeGrower

*class* `net.minecraft.world.level.block.grower.AzaleaTreeGrower`

### Methods
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_255997_,  boolean p_255923_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractTreeGrower`: `growTree`

## BirchTreeGrower

*class* `net.minecraft.world.level.block.grower.BirchTreeGrower`

### Methods
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_256345_,  boolean p_255618_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractTreeGrower`: `growTree`

## CherryTreeGrower

*class* `net.minecraft.world.level.block.grower.CherryTreeGrower`

### Methods
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_272730_,  boolean p_273684_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractTreeGrower`: `growTree`

## DarkOakTreeGrower

*class* `net.minecraft.world.level.block.grower.DarkOakTreeGrower`

### Methods
- `@Nullable protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_222924_,  boolean p_222925_)`
- `@Nullable protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredMegaFeature(RandomSource p_255891_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractMegaTreeGrower`: `growTree`, `isTwoByTwoSapling`, `placeMega`

## JungleTreeGrower

*class* `net.minecraft.world.level.block.grower.JungleTreeGrower`

### Methods
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_255992_,  boolean p_255946_)`
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredMegaFeature(RandomSource p_256359_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractMegaTreeGrower`: `growTree`, `isTwoByTwoSapling`, `placeMega`

## MangroveTreeGrower

*class* `net.minecraft.world.level.block.grower.MangroveTreeGrower`

### Fields
- `private final float tallProbability`

### Methods
- `@Nullable protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_255870_,  boolean p_256508_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractTreeGrower`: `growTree`

## OakTreeGrower

*class* `net.minecraft.world.level.block.grower.OakTreeGrower`

### Methods
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_256119_,  boolean p_256536_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractTreeGrower`: `growTree`

## SpruceTreeGrower

*class* `net.minecraft.world.level.block.grower.SpruceTreeGrower`

### Methods
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredFeature(RandomSource p_255637_,  boolean p_255764_)`
- `protected ResourceKey<ConfiguredFeature<?,?>> getConfiguredMegaFeature(RandomSource p_255928_)`

### Inherited methods
- from `net.minecraft.world.level.block.grower.AbstractMegaTreeGrower`: `growTree`, `isTwoByTwoSapling`, `placeMega`
