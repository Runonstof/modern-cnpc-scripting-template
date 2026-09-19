# net.minecraft.block.state.pattern

- [BlockMatcher](#blockmatcher)
- [BlockMaterialMatcher](#blockmaterialmatcher)
- [BlockPattern](#blockpattern)
- [BlockPattern.PatternHelper](#blockpattern.patternhelper)
- [BlockStateMatcher](#blockstatematcher)
- [FactoryBlockPattern](#factoryblockpattern)
## BlockMatcher

*class* `net.minecraft.block.state.pattern.BlockMatcher`

### Methods
- `public static BlockMatcher forBlock(Block blockType)`
- `public boolean apply(IBlockState p_apply_1_)`

## BlockMaterialMatcher

*class* `net.minecraft.block.state.pattern.BlockMaterialMatcher`

### Methods
- `public static BlockMaterialMatcher forMaterial(Material materialIn)`
- `public boolean apply(IBlockState p_apply_1_)`

## BlockPattern

*class* `net.minecraft.block.state.pattern.BlockPattern`

### Methods
- `public int getFingerLength()`
- `public int getThumbLength()`
- `public int getPalmLength()`
- `public BlockPattern.PatternHelper match(World worldIn,  BlockPos pos)`
- `public static <any> createLoadingCache(World worldIn,  boolean forceLoadIn)`
- `protected static BlockPos translateOffset(BlockPos pos,  EnumFacing finger,  EnumFacing thumb,  int palmOffset,  int thumbOffset,  int fingerOffset)`

## BlockPattern.PatternHelper

*class* `net.minecraft.block.state.pattern.BlockPattern.PatternHelper`

Enclosing class: BlockPattern

### Methods
- `public BlockPos getFrontTopLeft()`
- `public EnumFacing getForwards()`
- `public EnumFacing getUp()`
- `public int getWidth()`
- `public int getHeight()`
- `public BlockWorldState translateOffset(int palmOffset,  int thumbOffset,  int fingerOffset)`
- `public java.lang.String toString()`

## BlockStateMatcher

*class* `net.minecraft.block.state.pattern.BlockStateMatcher`

### Fields
- `public static final <any> ANY`

### Methods
- `public static BlockStateMatcher forBlock(Block blockIn)`
- `public boolean apply(IBlockState p_apply_1_)`
- `protected <T extends java.lang.Comparable<T>> boolean matches(IBlockState blockState,  IProperty<T> property,  <any> predicate)`
- `public <V extends java.lang.Comparable<V>> BlockStateMatcher where(IProperty<V> property,  <any> is)`

## FactoryBlockPattern

*class* `net.minecraft.block.state.pattern.FactoryBlockPattern`

### Methods
- `public FactoryBlockPattern aisle(java.lang.String... aisle)`
- `public static FactoryBlockPattern start()`
- `public FactoryBlockPattern where(char symbol,  <any> blockMatcher)`
- `public BlockPattern build()`
