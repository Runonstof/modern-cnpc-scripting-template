# net.minecraft.client.renderer.block.model.multipart

- [AndCondition](#andcondition)
- [Condition](#condition)
- [KeyValueCondition](#keyvaluecondition)
- [MultiPart](#multipart)
- [MultiPart.Deserializer](#multipart.deserializer)
- [OrCondition](#orcondition)
- [Selector](#selector)
- [Selector.Deserializer](#selector.deserializer)
## AndCondition

*class* `net.minecraft.client.renderer.block.model.multipart.AndCondition`

### Fields
- `public static final String TOKEN` (= "AND")
- `private final Iterable<? extends Condition> conditions`

### Inherited fields
- from `net.minecraft.client.renderer.block.model.multipart.Condition`: `FALSE`, `TRUE`

### Methods
- `public Predicate<BlockState> getPredicate(StateDefinition<Block,BlockState> p_111921_)`

## Condition

*interface* `net.minecraft.client.renderer.block.model.multipart.Condition`

### Fields
- `static final Condition TRUE`
- `static final Condition FALSE`

### Methods
- `Predicate<BlockState> getPredicate(StateDefinition<Block,BlockState> p_111933_)`

## KeyValueCondition

*class* `net.minecraft.client.renderer.block.model.multipart.KeyValueCondition`

### Fields
- `private static final com.google.common.base.Splitter PIPE_SPLITTER`
- `private final String key`
- `private final String value`

### Inherited fields
- from `net.minecraft.client.renderer.block.model.multipart.Condition`: `FALSE`, `TRUE`

### Methods
- `public Predicate<BlockState> getPredicate(StateDefinition<Block,BlockState> p_111960_)`
- `private Predicate<BlockState> getBlockStatePredicate(StateDefinition<Block,BlockState> p_111945_,  Property<?> p_111946_,  String p_111947_)`
- `public String toString()`

## MultiPart

*class* `net.minecraft.client.renderer.block.model.multipart.MultiPart`

### Fields
- `private final StateDefinition<Block,BlockState> definition`
- `private final List<Selector> selectors`

### Methods
- `public List<Selector> getSelectors()`
- `public Set<MultiVariant> getMultiVariants()`
- `public boolean equals(Object p_111984_)`
- `public int hashCode()`
- `public Collection<ResourceLocation> getDependencies()`
- `public void resolveParents(Function<ResourceLocation,UnbakedModel> p_251539_)`
- `@Nullable public BakedModel bake(ModelBaker p_249988_,  Function<Material,TextureAtlasSprite> p_111972_,  ModelState p_111973_,  ResourceLocation p_111974_)`

## MultiPart.Deserializer

*class* `net.minecraft.client.renderer.block.model.multipart.MultiPart.Deserializer`

Enclosing class: MultiPart

### Fields
- `private final BlockModelDefinition.Context context`

### Methods
- `public MultiPart deserialize(com.google.gson.JsonElement p_111994_,  Type p_111995_,  com.google.gson.JsonDeserializationContext p_111996_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private List<Selector> getSelectors(com.google.gson.JsonDeserializationContext p_111991_,  com.google.gson.JsonArray p_111992_)`

## OrCondition

*class* `net.minecraft.client.renderer.block.model.multipart.OrCondition`

### Fields
- `public static final String TOKEN` (= "OR")
- `private final Iterable<? extends Condition> conditions`

### Inherited fields
- from `net.minecraft.client.renderer.block.model.multipart.Condition`: `FALSE`, `TRUE`

### Methods
- `public Predicate<BlockState> getPredicate(StateDefinition<Block,BlockState> p_112014_)`

## Selector

*class* `net.minecraft.client.renderer.block.model.multipart.Selector`

### Fields
- `private final Condition condition`
- `private final MultiVariant variant`

### Methods
- `public MultiVariant getVariant()`
- `public Predicate<BlockState> getPredicate(StateDefinition<Block,BlockState> p_112022_)`
- `public boolean equals(Object p_112024_)`
- `public int hashCode()`

## Selector.Deserializer

*class* `net.minecraft.client.renderer.block.model.multipart.Selector.Deserializer`

Enclosing class: Selector

### Methods
- `public Selector deserialize(com.google.gson.JsonElement p_112030_,  Type p_112031_,  com.google.gson.JsonDeserializationContext p_112032_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private Condition getSelector(com.google.gson.JsonObject p_112040_)`
- `static Condition getCondition(com.google.gson.JsonObject p_112034_)`
- `private static Condition getKeyValueCondition(Map.Entry<String,com.google.gson.JsonElement> p_112036_)`
