# net.minecraft.data.models.blockstates

- [BlockStateGenerator](#blockstategenerator)
- [Class Condition.Operation](#class-condition.operation)
- [Class VariantProperties.Rotation](#class-variantproperties.rotation)
- [Condition](#condition)
- [Condition.CompositeCondition](#condition.compositecondition)
- [Condition.TerminalCondition](#condition.terminalcondition)
- [MultiPartGenerator](#multipartgenerator)
- [MultiPartGenerator.ConditionalEntry](#multipartgenerator.conditionalentry)
- [MultiPartGenerator.Entry](#multipartgenerator.entry)
- [MultiVariantGenerator](#multivariantgenerator)
- [PropertyDispatch](#propertydispatch)
- [PropertyDispatch.C1>](#propertydispatch.c1)
- [PropertyDispatch.C2,T2 extends Comparable>](#propertydispatch.c2-t2-extends-comparable)
- [PropertyDispatch.C3,T2 extends Comparable,T3 extends Comparable>](#propertydispatch.c3-t2-extends-comparable-t3-extends-comparable)
- [PropertyDispatch.C4,T2 extends Comparable,T3 extends Comparable,T4 extends Comparable>](#propertydispatch.c4-t2-extends-comparable-t3-extends-comparable-t4-extends-comparable)
- [PropertyDispatch.C5,T2 extends Comparable,T3 extends Comparable,T4 extends Comparable,T5 extends Comparable>](#propertydispatch.c5-t2-extends-comparable-t3-extends-comparable-t4-extends-comparable-t5-extends-comparable)
- [PropertyDispatch.PentaFunction](#propertydispatch.pentafunction)
- [PropertyDispatch.QuadFunction](#propertydispatch.quadfunction)
- [PropertyDispatch.TriFunction](#propertydispatch.trifunction)
- [Selector](#selector)
- [Variant](#variant)
- [VariantProperties](#variantproperties)
- [VariantProperty](#variantproperty)
- [VariantProperty.Value](#variantproperty.value)
## BlockStateGenerator

*interface* `net.minecraft.data.models.blockstates.BlockStateGenerator`

All Superinterfaces: Supplier<com.google.gson.JsonElement>

### Methods
- `Block getBlock()`

### Inherited methods
- from `java.util.function.Supplier`: `get`

## Class Condition.Operation

*enum* `net.minecraft.data.models.blockstates.Class Condition.Operation`

Enclosing interface: Condition

### Fields
- `final String id`

### Methods
- `public static Condition.Operation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Condition.Operation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class VariantProperties.Rotation

*enum* `net.minecraft.data.models.blockstates.Class VariantProperties.Rotation`

Enclosing class: VariantProperties

### Fields
- `final int value`

### Methods
- `public static VariantProperties.Rotation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VariantProperties.Rotation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Condition

*interface* `net.minecraft.data.models.blockstates.Condition`

All Superinterfaces: Supplier<com.google.gson.JsonElement>

### Methods
- `void validate(StateDefinition<?,?> p_125136_)`
- `static Condition.TerminalCondition condition()`
- `static Condition and(Condition... p_176294_)`
- `static Condition or(Condition... p_125138_)`

### Inherited methods
- from `java.util.function.Supplier`: `get`

## Condition.CompositeCondition

*class* `net.minecraft.data.models.blockstates.Condition.CompositeCondition`

Enclosing interface: Condition

### Fields
- `private final Condition.Operation operation`
- `private final List<Condition> subconditions`

### Methods
- `public void validate(StateDefinition<?,?> p_125149_)`
- `public com.google.gson.JsonElement get()`

## Condition.TerminalCondition

*class* `net.minecraft.data.models.blockstates.Condition.TerminalCondition`

Enclosing interface: Condition

### Fields
- `private final Map<Property<?>,String> terms`

### Methods
- `private static <T extends Comparable<T>> String joinValues(Property<T> p_125187_,  Stream<T> p_125188_)`
- `private static <T extends Comparable<T>> String getTerm(Property<T> p_125195_,  T p_125196_,  T[] p_125197_)`
- `private <T extends Comparable<T>> void putValue(Property<T> p_125184_,  String p_125185_)`
- `public final <T extends Comparable<T>> Condition.TerminalCondition term(Property<T> p_125177_,  T p_125178_)`
- `@SafeVarargs public final <T extends Comparable<T>> Condition.TerminalCondition term(Property<T> p_125180_,  T p_125181_,  T... p_125182_)`
- `public final <T extends Comparable<T>> Condition.TerminalCondition negatedTerm(Property<T> p_176297_,  T p_176298_)`
- `@SafeVarargs public final <T extends Comparable<T>> Condition.TerminalCondition negatedTerm(Property<T> p_176300_,  T p_176301_,  T... p_176302_)`
- `public com.google.gson.JsonElement get()`
- `public void validate(StateDefinition<?,?> p_125172_)`

## MultiPartGenerator

*class* `net.minecraft.data.models.blockstates.MultiPartGenerator`

### Fields
- `private final Block block`
- `private final List<MultiPartGenerator.Entry> parts`

### Methods
- `public Block getBlock()`
- `public static MultiPartGenerator multiPart(Block p_125205_)`
- `public MultiPartGenerator with(List<Variant> p_125221_)`
- `public MultiPartGenerator with(Variant p_125219_)`
- `public MultiPartGenerator with(Condition p_125213_,  List<Variant> p_125214_)`
- `public MultiPartGenerator with(Condition p_125216_,  Variant... p_125217_)`
- `public MultiPartGenerator with(Condition p_125210_,  Variant p_125211_)`
- `public com.google.gson.JsonElement get()`

## MultiPartGenerator.ConditionalEntry

*class* `net.minecraft.data.models.blockstates.MultiPartGenerator.ConditionalEntry`

Enclosing class: MultiPartGenerator

### Fields
- `private final Condition condition`

### Methods
- `public void validate(StateDefinition<?,?> p_125233_)`
- `public void decorate(com.google.gson.JsonObject p_125235_)`

### Inherited methods
- from `net.minecraft.data.models.blockstates.MultiPartGenerator.Entry`: `get`

## MultiPartGenerator.Entry

*class* `net.minecraft.data.models.blockstates.MultiPartGenerator.Entry`

Enclosing class: MultiPartGenerator

### Fields
- `private final List<Variant> variants`

### Methods
- `public void validate(StateDefinition<?,?> p_125243_)`
- `public void decorate(com.google.gson.JsonObject p_125244_)`
- `public com.google.gson.JsonElement get()`

## MultiVariantGenerator

*class* `net.minecraft.data.models.blockstates.MultiVariantGenerator`

### Fields
- `private final Block block`
- `private final List<Variant> baseVariants`
- `private final Set<Property<?>> seenProperties`
- `private final List<PropertyDispatch> declaredPropertySets`

### Methods
- `public MultiVariantGenerator with(PropertyDispatch p_125272_)`
- `public com.google.gson.JsonElement get()`
- `private static List<Variant> mergeVariants(List<Variant> p_125278_,  List<Variant> p_125279_)`
- `public Block getBlock()`
- `public static MultiVariantGenerator multiVariant(Block p_125255_)`
- `public static MultiVariantGenerator multiVariant(Block p_125257_,  Variant p_125258_)`
- `public static MultiVariantGenerator multiVariant(Block p_125260_,  Variant... p_125261_)`

## PropertyDispatch

*class* `net.minecraft.data.models.blockstates.PropertyDispatch`

### Fields
- `private final Map<Selector,List<Variant>> values`

### Methods
- `protected void putValue(Selector p_125320_,  List<Variant> p_125321_)`
- `Map<Selector,List<Variant>> getEntries()`
- `private void verifyComplete()`
- `abstract List<Property<?>> getDefinedProperties()`
- `public static <T1 extends Comparable<T1>> PropertyDispatch.C1<T1> property(Property<T1> p_125295_)`
- `public static <T1 extends Comparable<T1>, T2 extends Comparable<T2>> PropertyDispatch.C2<T1,T2> properties(Property<T1> p_125297_,  Property<T2> p_125298_)`
- `public static <T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>> PropertyDispatch.C3<T1,T2,T3> properties(Property<T1> p_125300_,  Property<T2> p_125301_,  Property<T3> p_125302_)`
- `public static <T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>, T4 extends Comparable<T4>> PropertyDispatch.C4<T1,T2,T3,T4> properties(Property<T1> p_125304_,  Property<T2> p_125305_,  Property<T3> p_125306_,  Property<T4> p_125307_)`
- `public static <T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>, T4 extends Comparable<T4>, T5 extends Comparable<T5>> PropertyDispatch.C5<T1,T2,T3,T4,T5> properties(Property<T1> p_125309_,  Property<T2> p_125310_,  Property<T3> p_125311_,  Property<T4> p_125312_,  Property<T5> p_125313_)`

## PropertyDispatch.C1>

*class* `net.minecraft.data.models.blockstates.PropertyDispatch.C1>`

Enclosing class: PropertyDispatch

### Fields
- `private final Property<T1 extends Comparable<T1>> property1`

### Methods
- `public List<Property<?>> getDefinedProperties()`
- `public PropertyDispatch.C1<T1> select(T1 p_125333_,  List<Variant> p_125334_)`
- `public PropertyDispatch.C1<T1> select(T1 p_125330_,  Variant p_125331_)`
- `public PropertyDispatch generate(Function<T1,Variant> p_125336_)`
- `public PropertyDispatch generateList(Function<T1,List<Variant>> p_176314_)`

### Inherited methods
- from `net.minecraft.data.models.blockstates.PropertyDispatch`: `getEntries`, `properties`, `properties`, `properties`, `properties`, `property`, `putValue`

## PropertyDispatch.C2,T2 extends Comparable>

*class* `net.minecraft.data.models.blockstates.PropertyDispatch.C2,T2 extends Comparable>`

Enclosing class: PropertyDispatch

### Fields
- `private final Property<T1 extends Comparable<T1>> property1`
- `private final Property<T2 extends Comparable<T2>> property2`

### Methods
- `public List<Property<?>> getDefinedProperties()`
- `public PropertyDispatch.C2<T1,T2> select(T1 p_125355_,  T2 p_125356_,  List<Variant> p_125357_)`
- `public PropertyDispatch.C2<T1,T2> select(T1 p_125351_,  T2 p_125352_,  Variant p_125353_)`
- `public PropertyDispatch generate(BiFunction<T1,T2,Variant> p_125363_)`
- `public PropertyDispatch generateList(BiFunction<T1,T2,List<Variant>> p_125373_)`

### Inherited methods
- from `net.minecraft.data.models.blockstates.PropertyDispatch`: `getEntries`, `properties`, `properties`, `properties`, `properties`, `property`, `putValue`

## PropertyDispatch.C3,T2 extends Comparable,T3 extends Comparable>

*class* `net.minecraft.data.models.blockstates.PropertyDispatch.C3,T2 extends Comparable,T3 extends Comparable>`

Enclosing class: PropertyDispatch

### Fields
- `private final Property<T1 extends Comparable<T1>> property1`
- `private final Property<T2 extends Comparable<T2>> property2`
- `private final Property<T3 extends Comparable<T3>> property3`

### Methods
- `public List<Property<?>> getDefinedProperties()`
- `public PropertyDispatch.C3<T1,T2,T3> select(T1 p_125397_,  T2 p_125398_,  T3 p_125399_,  List<Variant> p_125400_)`
- `public PropertyDispatch.C3<T1,T2,T3> select(T1 p_125392_,  T2 p_125393_,  T3 p_125394_,  Variant p_125395_)`
- `public PropertyDispatch generate(PropertyDispatch.TriFunction<T1,T2,T3,Variant> p_125390_)`
- `public PropertyDispatch generateList(PropertyDispatch.TriFunction<T1,T2,T3,List<Variant>> p_176345_)`

### Inherited methods
- from `net.minecraft.data.models.blockstates.PropertyDispatch`: `getEntries`, `properties`, `properties`, `properties`, `properties`, `property`, `putValue`

## PropertyDispatch.C4,T2 extends Comparable,T3 extends Comparable,T4 extends Comparable>

*class* `net.minecraft.data.models.blockstates.PropertyDispatch.C4,T2 extends Comparable,T3 extends Comparable,T4 extends Comparable>`

Enclosing class: PropertyDispatch

### Fields
- `private final Property<T1 extends Comparable<T1>> property1`
- `private final Property<T2 extends Comparable<T2>> property2`
- `private final Property<T3 extends Comparable<T3>> property3`
- `private final Property<T4 extends Comparable<T4>> property4`

### Methods
- `public List<Property<?>> getDefinedProperties()`
- `public PropertyDispatch.C4<T1,T2,T3,T4> select(T1 p_125436_,  T2 p_125437_,  T3 p_125438_,  T4 p_125439_,  List<Variant> p_125440_)`
- `public PropertyDispatch.C4<T1,T2,T3,T4> select(T1 p_125430_,  T2 p_125431_,  T3 p_125432_,  T4 p_125433_,  Variant p_125434_)`
- `public PropertyDispatch generate(PropertyDispatch.QuadFunction<T1,T2,T3,T4,Variant> p_176362_)`
- `public PropertyDispatch generateList(PropertyDispatch.QuadFunction<T1,T2,T3,T4,List<Variant>> p_176382_)`

### Inherited methods
- from `net.minecraft.data.models.blockstates.PropertyDispatch`: `getEntries`, `properties`, `properties`, `properties`, `properties`, `property`, `putValue`

## PropertyDispatch.C5,T2 extends Comparable,T3 extends Comparable,T4 extends Comparable,T5 extends Comparable>

*class* `net.minecraft.data.models.blockstates.PropertyDispatch.C5,T2 extends Comparable,T3 extends Comparable,T4 extends Comparable,T5 extends Comparable>`

Enclosing class: PropertyDispatch

### Fields
- `private final Property<T1 extends Comparable<T1>> property1`
- `private final Property<T2 extends Comparable<T2>> property2`
- `private final Property<T3 extends Comparable<T3>> property3`
- `private final Property<T4 extends Comparable<T4>> property4`
- `private final Property<T5 extends Comparable<T5>> property5`

### Methods
- `public List<Property<?>> getDefinedProperties()`
- `public PropertyDispatch.C5<T1,T2,T3,T4,T5> select(T1 p_125468_,  T2 p_125469_,  T3 p_125470_,  T4 p_125471_,  T5 p_125472_,  List<Variant> p_125473_)`
- `public PropertyDispatch.C5<T1,T2,T3,T4,T5> select(T1 p_125461_,  T2 p_125462_,  T3 p_125463_,  T4 p_125464_,  T5 p_125465_,  Variant p_125466_)`
- `public PropertyDispatch generate(PropertyDispatch.PentaFunction<T1,T2,T3,T4,T5,Variant> p_176409_)`
- `public PropertyDispatch generateList(PropertyDispatch.PentaFunction<T1,T2,T3,T4,T5,List<Variant>> p_176436_)`

### Inherited methods
- from `net.minecraft.data.models.blockstates.PropertyDispatch`: `getEntries`, `properties`, `properties`, `properties`, `properties`, `property`, `putValue`

## PropertyDispatch.PentaFunction

*interface* `net.minecraft.data.models.blockstates.PropertyDispatch.PentaFunction`

Enclosing class: PropertyDispatch

### Methods
- `R apply(P1 p_176441_,  P2 p_176442_,  P3 p_176443_,  P4 p_176444_,  P5 p_176445_)`

## PropertyDispatch.QuadFunction

*interface* `net.minecraft.data.models.blockstates.PropertyDispatch.QuadFunction`

Enclosing class: PropertyDispatch

### Methods
- `R apply(P1 p_176447_,  P2 p_176448_,  P3 p_176449_,  P4 p_176450_)`

## PropertyDispatch.TriFunction

*interface* `net.minecraft.data.models.blockstates.PropertyDispatch.TriFunction`

Enclosing class: PropertyDispatch

### Methods
- `R apply(P1 p_125476_,  P2 p_125477_,  P3 p_125478_)`

## Selector

*class* `net.minecraft.data.models.blockstates.Selector`

### Fields
- `private static final Selector EMPTY`
- `private static final Comparator<Property.Value<?>> COMPARE_BY_NAME`
- `private final List<Property.Value<?>> values`

### Methods
- `public Selector extend(Property.Value<?> p_125487_)`
- `public Selector extend(Selector p_125489_)`
- `public static Selector empty()`
- `public static Selector of(Property.Value<?>... p_125491_)`
- `public boolean equals(Object p_125496_)`
- `public int hashCode()`
- `public String getKey()`
- `public String toString()`

## Variant

*class* `net.minecraft.data.models.blockstates.Variant`

### Fields
- `private final Map<VariantProperty<?>,VariantProperty<?>.Value> values`

### Methods
- `public <T> Variant with(VariantProperty<T> p_125512_,  T p_125513_)`
- `public static Variant variant()`
- `public static Variant merge(Variant p_125509_,  Variant p_125510_)`
- `public com.google.gson.JsonElement get()`
- `public static com.google.gson.JsonElement convertList(List<Variant> p_125515_)`

## VariantProperties

*class* `net.minecraft.data.models.blockstates.VariantProperties`

### Fields
- `public static final VariantProperty<VariantProperties.Rotation> X_ROT`
- `public static final VariantProperty<VariantProperties.Rotation> Y_ROT`
- `public static final VariantProperty<ResourceLocation> MODEL`
- `public static final VariantProperty<Boolean> UV_LOCK`
- `public static final VariantProperty<Integer> WEIGHT`

## VariantProperty

*class* `net.minecraft.data.models.blockstates.VariantProperty`

### Fields
- `final String key`
- `final Function<T,com.google.gson.JsonElement> serializer`

### Methods
- `public VariantProperty<T>.Value withValue(T p_125554_)`
- `public String toString()`

## VariantProperty.Value

*class* `net.minecraft.data.models.blockstates.VariantProperty.Value`

Enclosing class: VariantProperty<T>

### Fields
- `private final T value`

### Methods
- `public VariantProperty<T> getKey()`
- `public void addToVariant(com.google.gson.JsonObject p_125564_)`
- `public String toString()`
