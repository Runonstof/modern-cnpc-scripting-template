# net.minecraft.client.color.item

- [ItemColor](#itemcolor)
- [ItemColors](#itemcolors)
## ItemColor

*interface* `net.minecraft.client.color.item.ItemColor`

### Methods
- `int getColor(ItemStack p_92672_,  int p_92673_)`

## ItemColors

*class* `net.minecraft.client.color.item.ItemColors`

### Fields
- `private static final int DEFAULT` (= -1)
- `private final Map<Holder.Reference<Item>,ItemColor> itemColors`

### Methods
- `public static ItemColors createDefault(BlockColors p_92684_)`
- `public int getColor(ItemStack p_92677_,  int p_92678_)`
- `@Deprecated public void register(ItemColor p_92690_,  ItemLike... p_92691_)` (deprecated)
