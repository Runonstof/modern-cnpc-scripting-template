# net.minecraft.world.level.levelgen.material

- [MaterialRuleList](#materialrulelist)
- [WorldGenMaterialRule](#worldgenmaterialrule)
## MaterialRuleList

*record* `net.minecraft.world.level.levelgen.material.MaterialRuleList`

### Fields
- `private final List<NoiseChunk.BlockStateFiller> materialRuleList`
  The field for the materialRuleList record component.

### Methods
- `@Nullable public BlockState calculate(DensityFunction.FunctionContext p_209815_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<NoiseChunk.BlockStateFiller> materialRuleList()`
  Returns the value of the materialRuleList record component.
  - returns: the value of the materialRuleList record component

## WorldGenMaterialRule

*interface* `net.minecraft.world.level.levelgen.material.WorldGenMaterialRule`

### Methods
- `@Nullable BlockState apply(NoiseChunk p_191553_,  int p_191554_,  int p_191555_,  int p_191556_)`
