# net.minecraft.core.cauldron

- [CauldronInteraction](#cauldroninteraction)
## CauldronInteraction

*interface* `net.minecraft.core.cauldron.CauldronInteraction`

### Fields
- `static final Map<Item,CauldronInteraction> EMPTY`
- `static final Map<Item,CauldronInteraction> WATER`
- `static final Map<Item,CauldronInteraction> LAVA`
- `static final Map<Item,CauldronInteraction> POWDER_SNOW`
- `static final CauldronInteraction FILL_WATER`
- `static final CauldronInteraction FILL_LAVA`
- `static final CauldronInteraction FILL_POWDER_SNOW`
- `static final CauldronInteraction SHULKER_BOX`
- `static final CauldronInteraction BANNER`
- `static final CauldronInteraction DYED_ITEM`

### Methods
- `static it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap<Item,CauldronInteraction> newInteractionMap()`
- `InteractionResult interact(BlockState p_175711_,  Level p_175712_,  BlockPos p_175713_,  Player p_175714_,  InteractionHand p_175715_,  ItemStack p_175716_)`
- `static void bootStrap()`
- `static void addDefaultInteractions(Map<Item,CauldronInteraction> p_175648_)`
- `static InteractionResult fillBucket(BlockState p_175636_,  Level p_175637_,  BlockPos p_175638_,  Player p_175639_,  InteractionHand p_175640_,  ItemStack p_175641_,  ItemStack p_175642_,  Predicate<BlockState> p_175643_,  SoundEvent p_175644_)`
- `static InteractionResult emptyBucket(Level p_175619_,  BlockPos p_175620_,  Player p_175621_,  InteractionHand p_175622_,  ItemStack p_175623_,  BlockState p_175624_,  SoundEvent p_175625_)`
