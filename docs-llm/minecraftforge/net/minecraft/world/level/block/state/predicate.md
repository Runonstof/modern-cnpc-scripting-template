# net.minecraft.world.level.block.state.predicate

- [BlockPredicate](#blockpredicate)
- [BlockStatePredicate](#blockstatepredicate)
## BlockPredicate

*class* `net.minecraft.world.level.block.state.predicate.BlockPredicate`

### Fields
- `private final Block block`

### Methods
- `public static BlockPredicate forBlock(Block p_61276_)`
- `public boolean test(@Nullable  BlockState p_61278_)`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## BlockStatePredicate

*class* `net.minecraft.world.level.block.state.predicate.BlockStatePredicate`

### Fields
- `public static final Predicate<BlockState> ANY`
- `private final StateDefinition<Block,BlockState> definition`
- `private final Map<Property<?>,Predicate<Object>> properties`

### Methods
- `public static BlockStatePredicate forBlock(Block p_61288_)`
- `public boolean test(@Nullable  BlockState p_61290_)`
- `protected <T extends Comparable<T>> boolean applies(BlockState p_61292_,  Property<T> p_61293_,  Predicate<Object> p_61294_)`
- `public <V extends Comparable<V>> BlockStatePredicate where(Property<V> p_61296_,  Predicate<Object> p_61297_)`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`
