# net.minecraft.nbt.visitors

- [CollectFields](#collectfields)
- [CollectToTag](#collecttotag)
- [FieldSelector](#fieldselector)
- [FieldTree](#fieldtree)
- [SkipAll](#skipall)
- [SkipFields](#skipfields)
## CollectFields

*class* `net.minecraft.nbt.visitors.CollectFields`

### Fields
- `private int fieldsToGetCount`
- `private final Set<TagType<?>> wantedTypes`
- `private final Deque<FieldTree> stack`

### Methods
- `public StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197614_)`
- `public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197608_)`
- `public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197610_,  String p_197611_)`
- `public StreamTagVisitor.ValueResult visitContainerEnd()`
- `public int getMissingFieldCount()`

### Inherited methods
- from `net.minecraft.nbt.visitors.CollectToTag`: `depth`, `getResult`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visitElement`, `visitEnd`, `visitList`

## CollectToTag

*class* `net.minecraft.nbt.visitors.CollectToTag`

### Fields
- `private String lastId`
- `@Nullable private Tag rootTag`
- `private final Deque<Consumer<Tag>> consumerStack`

### Methods
- `@Nullable public Tag getResult()`
- `protected int depth()`
- `private void appendEntry(Tag p_197683_)`
- `public StreamTagVisitor.ValueResult visitEnd()`
- `public StreamTagVisitor.ValueResult visit(String p_197678_)`
- `public StreamTagVisitor.ValueResult visit(byte p_197668_)`
- `public StreamTagVisitor.ValueResult visit(short p_197693_)`
- `public StreamTagVisitor.ValueResult visit(int p_197674_)`
- `public StreamTagVisitor.ValueResult visit(long p_197676_)`
- `public StreamTagVisitor.ValueResult visit(float p_197672_)`
- `public StreamTagVisitor.ValueResult visit(double p_197670_)`
- `public StreamTagVisitor.ValueResult visit(byte[] p_197695_)`
- `public StreamTagVisitor.ValueResult visit(int[] p_197697_)`
- `public StreamTagVisitor.ValueResult visit(long[] p_197699_)`
- `public StreamTagVisitor.ValueResult visitList(TagType<?> p_197687_,  int p_197688_)`
- `public StreamTagVisitor.EntryResult visitElement(TagType<?> p_197709_,  int p_197710_)`
- `public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197685_)`
- `public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197690_,  String p_197691_)`
- `private void enterContainerIfNeeded(TagType<?> p_197712_)`
- `public StreamTagVisitor.ValueResult visitContainerEnd()`
- `public StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197707_)`

## FieldSelector

*record* `net.minecraft.nbt.visitors.FieldSelector`

### Fields
- `private final List<String> path`
  The field for the path record component.
- `private final TagType<?> type`
  The field for the type record component.
- `private final String name`
  The field for the name record component.

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
- `public List<String> path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `public TagType<?> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component

## FieldTree

*record* `net.minecraft.nbt.visitors.FieldTree`

### Fields
- `private final int depth`
  The field for the depth record component.
- `private final Map<String,TagType<?>> selectedFields`
  The field for the selectedFields record component.
- `private final Map<String,FieldTree> fieldsToRecurse`
  The field for the fieldsToRecurse record component.

### Methods
- `public static FieldTree createRoot()`
- `public void addEntry(FieldSelector p_202539_)`
- `public boolean isSelected(TagType<?> p_202536_,  String p_202537_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int depth()`
  Returns the value of the depth record component.
  - returns: the value of the depth record component
- `public Map<String,TagType<?>> selectedFields()`
  Returns the value of the selectedFields record component.
  - returns: the value of the selectedFields record component
- `public Map<String,FieldTree> fieldsToRecurse()`
  Returns the value of the fieldsToRecurse record component.
  - returns: the value of the fieldsToRecurse record component

## SkipAll

*interface* `net.minecraft.nbt.visitors.SkipAll`

All Superinterfaces: StreamTagVisitor

### Fields
- `static final SkipAll INSTANCE`

### Methods
- `default StreamTagVisitor.ValueResult visitEnd()`
- `default StreamTagVisitor.ValueResult visit(String p_197729_)`
- `default StreamTagVisitor.ValueResult visit(byte p_197719_)`
- `default StreamTagVisitor.ValueResult visit(short p_197739_)`
- `default StreamTagVisitor.ValueResult visit(int p_197725_)`
- `default StreamTagVisitor.ValueResult visit(long p_197727_)`
- `default StreamTagVisitor.ValueResult visit(float p_197723_)`
- `default StreamTagVisitor.ValueResult visit(double p_197721_)`
- `default StreamTagVisitor.ValueResult visit(byte[] p_197741_)`
- `default StreamTagVisitor.ValueResult visit(int[] p_197743_)`
- `default StreamTagVisitor.ValueResult visit(long[] p_197745_)`
- `default StreamTagVisitor.ValueResult visitList(TagType<?> p_197733_,  int p_197734_)`
- `default StreamTagVisitor.EntryResult visitElement(TagType<?> p_197750_,  int p_197751_)`
- `default StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197731_)`
- `default StreamTagVisitor.EntryResult visitEntry(TagType<?> p_197736_,  String p_197737_)`
- `default StreamTagVisitor.ValueResult visitContainerEnd()`
- `default StreamTagVisitor.ValueResult visitRootEntry(TagType<?> p_197748_)`

## SkipFields

*class* `net.minecraft.nbt.visitors.SkipFields`

### Fields
- `private final Deque<FieldTree> stack`

### Methods
- `public StreamTagVisitor.EntryResult visitEntry(TagType<?> p_202551_,  String p_202552_)`
- `public StreamTagVisitor.ValueResult visitContainerEnd()`

### Inherited methods
- from `net.minecraft.nbt.visitors.CollectToTag`: `depth`, `getResult`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visit`, `visitElement`, `visitEnd`, `visitEntry`, `visitList`, `visitRootEntry`
