# net.minecraftforge.common.animation

- [Event](#event)
- [IEventHandler](#ieventhandler)
- [ITimeValue](#itimevalue)
- [TimeValues](#timevalues)
- [TimeValues.CommonTimeValueTypeAdapterFactory](#timevalues.commontimevaluetypeadapterfactory)
- [TimeValues.CompositionValue](#timevalues.compositionvalue)
- [TimeValues.ConstValue](#timevalues.constvalue)
- [TimeValues.IdentityValue](#timevalues.identityvalue)
- [TimeValues.ParameterValue](#timevalues.parametervalue)
- [TimeValues.SimpleExprValue](#timevalues.simpleexprvalue)
- [TimeValues.VariableValue](#timevalues.variablevalue)
## Event

*class* `net.minecraftforge.common.animation.Event`

Event stored in the clip

All Implemented Interfaces: java.lang.Comparable<Event>

### Methods
- `public java.lang.String event()`
  - returns: the name of the event.
- `public float offset()`
  - returns: how long ago the event happened, relative to the next event / first query time
- `public int compareTo(Event event)`
- `public java.lang.String toString()`

## IEventHandler

*interface* `net.minecraftforge.common.animation.IEventHandler`

Handler for animation events;

### Methods
- `void handleEvents(T instance,  float time,  java.lang.Iterable<Event> pastEvents)`

## ITimeValue

*interface* `net.minecraftforge.common.animation.ITimeValue`

Time-varying value associated with the animation.
 Return value should be constant with the respect to the input and reasonable context (current render frame).
 Simplest example is the input time itself.
 Unity calls them Parameters, Unreal calls them Variables.

### Methods
- `float apply(float input)`

## TimeValues

*class* `net.minecraftforge.common.animation.TimeValues`

Various implementations of ITimeValue.

## TimeValues.CommonTimeValueTypeAdapterFactory

*enum* `net.minecraftforge.common.animation.TimeValues.CommonTimeValueTypeAdapterFactory`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TimeValues.CommonTimeValueTypeAdapterFactory>

Enclosing class: TimeValues

### Fields
- `public static final TimeValues.CommonTimeValueTypeAdapterFactory INSTANCE`

### Methods
- `public static TimeValues.CommonTimeValueTypeAdapterFactory[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TimeValues.CommonTimeValueTypeAdapterFactory c : TimeValues.CommonTimeValueTypeAdapterFactory.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TimeValues.CommonTimeValueTypeAdapterFactory valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void setValueResolver(java.util.function.Function<java.lang.String,ITimeValue> valueResolver)`
- `public <T> <any> create(Gson gson,  <any> type)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## TimeValues.CompositionValue

*class* `net.minecraftforge.common.animation.TimeValues.CompositionValue`

All Implemented Interfaces: ITimeValue

Enclosing class: TimeValues

### Methods
- `public float apply(float input)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## TimeValues.ConstValue

*class* `net.minecraftforge.common.animation.TimeValues.ConstValue`

All Implemented Interfaces: ITimeValue

Enclosing class: TimeValues

### Methods
- `public float apply(float input)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## TimeValues.IdentityValue

*enum* `net.minecraftforge.common.animation.TimeValues.IdentityValue`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TimeValues.IdentityValue>, IStringSerializable, ITimeValue

Enclosing class: TimeValues

### Fields
- `public static final TimeValues.IdentityValue INSTANCE`

### Methods
- `public static TimeValues.IdentityValue[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TimeValues.IdentityValue c : TimeValues.IdentityValue.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TimeValues.IdentityValue valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public float apply(float input)`
- `public java.lang.String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## TimeValues.ParameterValue

*class* `net.minecraftforge.common.animation.TimeValues.ParameterValue`

All Implemented Interfaces: IStringSerializable, ITimeValue

Enclosing class: TimeValues

### Methods
- `public java.lang.String getName()`
- `public float apply(float input)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## TimeValues.SimpleExprValue

*class* `net.minecraftforge.common.animation.TimeValues.SimpleExprValue`

All Implemented Interfaces: ITimeValue

Enclosing class: TimeValues

### Methods
- `public float apply(float input)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## TimeValues.VariableValue

*class* `net.minecraftforge.common.animation.TimeValues.VariableValue`

Simple value holder.

All Implemented Interfaces: ITimeValue

Enclosing class: TimeValues

### Methods
- `public void setValue(float newValue)`
- `public float apply(float input)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`
