# net.minecraft.client.renderer.block.model.multipart

- [ConditionAnd](#conditionand)
- [ConditionOr](#conditionor)
- [ConditionPropertyValue](#conditionpropertyvalue)
- [ICondition](#icondition)
- [Multipart](#multipart)
- [Multipart.Deserializer](#multipart.deserializer)
- [Selector](#selector)
- [Selector.Deserializer](#selector.deserializer)
## ConditionAnd

*class* `net.minecraft.client.renderer.block.model.multipart.ConditionAnd`

All Implemented Interfaces: ICondition

### Inherited fields
- from `net.minecraft.client.renderer.block.model.multipart.ICondition`: `FALSE`, `TRUE`

### Methods
- `public <any> getPredicate(BlockStateContainer blockState)`

## ConditionOr

*class* `net.minecraft.client.renderer.block.model.multipart.ConditionOr`

All Implemented Interfaces: ICondition

### Inherited fields
- from `net.minecraft.client.renderer.block.model.multipart.ICondition`: `FALSE`, `TRUE`

### Methods
- `public <any> getPredicate(BlockStateContainer blockState)`

## ConditionPropertyValue

*class* `net.minecraft.client.renderer.block.model.multipart.ConditionPropertyValue`

All Implemented Interfaces: ICondition

### Inherited fields
- from `net.minecraft.client.renderer.block.model.multipart.ICondition`: `FALSE`, `TRUE`

### Methods
- `public <any> getPredicate(BlockStateContainer blockState)`
- `public java.lang.String toString()`

## ICondition

*interface* `net.minecraft.client.renderer.block.model.multipart.ICondition`

### Fields
- `static final ICondition TRUE`
- `static final ICondition FALSE`

### Methods
- `<any> getPredicate(BlockStateContainer blockState)`

## Multipart

*class* `net.minecraft.client.renderer.block.model.multipart.Multipart`

### Methods
- `public java.util.List<Selector> getSelectors()`
- `public java.util.Set<VariantList> getVariants()`
- `public void setStateContainer(BlockStateContainer stateContainerIn)`
- `public BlockStateContainer getStateContainer()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## Multipart.Deserializer

*class* `net.minecraft.client.renderer.block.model.multipart.Multipart.Deserializer`

Enclosing class: Multipart

### Methods
- `public Multipart deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException

## Selector

*class* `net.minecraft.client.renderer.block.model.multipart.Selector`

### Methods
- `public VariantList getVariantList()`
- `public <any> getPredicate(BlockStateContainer state)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## Selector.Deserializer

*class* `net.minecraft.client.renderer.block.model.multipart.Selector.Deserializer`

Enclosing class: Selector

### Methods
- `public Selector deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
