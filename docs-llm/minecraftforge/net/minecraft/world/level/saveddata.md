# net.minecraft.world.level.saveddata

- [SavedData](#saveddata)
- [SavedData.Factory](#saveddata.factory)
## SavedData

*class* `net.minecraft.world.level.saveddata.SavedData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private boolean dirty`

### Methods
- `public abstract CompoundTag save(CompoundTag p_77763_)`
- `public void setDirty()`
- `public void setDirty(boolean p_77761_)`
- `public boolean isDirty()`
- `public void save(File p_77758_)`

## SavedData.Factory

*record* `net.minecraft.world.level.saveddata.SavedData.Factory`

Enclosing class: SavedData

### Fields
- `private final Supplier<T extends SavedData> constructor`
  The field for the constructor record component.
- `private final Function<CompoundTag,T extends SavedData> deserializer`
  The field for the deserializer record component.
- `private final DataFixTypes type`
  The field for the type record component.

### Methods
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
- `public Supplier<T> constructor()`
  Returns the value of the constructor record component.
  - returns: the value of the constructor record component
- `public Function<CompoundTag,T> deserializer()`
  Returns the value of the deserializer record component.
  - returns: the value of the deserializer record component
- `public DataFixTypes type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
