# net.minecraft.client.renderer.color

- [BlockColors](#blockcolors)
- [IBlockColor](#iblockcolor)
- [IItemColor](#iitemcolor)
- [ItemColors](#itemcolors)
## BlockColors

*class* `net.minecraft.client.renderer.color.BlockColors`

### Methods
- `public static BlockColors init()`
- `public int getColor(IBlockState state,  World p_189991_2_,  BlockPos p_189991_3_)`
- `public int colorMultiplier(IBlockState state,  IBlockAccess blockAccess,  BlockPos pos,  int renderPass)`
- `public void registerBlockColorHandler(IBlockColor blockColor,  Block... blocksIn)`

## IBlockColor

*interface* `net.minecraft.client.renderer.color.IBlockColor`

### Methods
- `int colorMultiplier(IBlockState state,  IBlockAccess worldIn,  BlockPos pos,  int tintIndex)`

## IItemColor

*interface* `net.minecraft.client.renderer.color.IItemColor`

### Methods
- `int colorMultiplier(ItemStack stack,  int tintIndex)`

## ItemColors

*class* `net.minecraft.client.renderer.color.ItemColors`

### Methods
- `public static ItemColors init(BlockColors colors)`
- `public int colorMultiplier(ItemStack stack,  int tintIndex)`
- `public void registerItemColorHandler(IItemColor itemColor,  Block... blocksIn)`
- `public void registerItemColorHandler(IItemColor itemColor,  Item... itemsIn)`
