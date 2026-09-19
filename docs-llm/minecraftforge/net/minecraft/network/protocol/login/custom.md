# net.minecraft.network.protocol.login.custom

- [CustomQueryAnswerPayload](#customqueryanswerpayload)
- [CustomQueryPayload](#customquerypayload)
- [DiscardedQueryAnswerPayload](#discardedqueryanswerpayload)
- [DiscardedQueryPayload](#discardedquerypayload)
## CustomQueryAnswerPayload

*interface* `net.minecraft.network.protocol.login.custom.CustomQueryAnswerPayload`

### Methods
- `void write(FriendlyByteBuf p_299412_)`

## CustomQueryPayload

*interface* `net.minecraft.network.protocol.login.custom.CustomQueryPayload`

### Methods
- `ResourceLocation id()`
- `void write(FriendlyByteBuf p_297527_)`

## DiscardedQueryAnswerPayload

*record* `net.minecraft.network.protocol.login.custom.DiscardedQueryAnswerPayload`

### Fields
- `@Nullable private final FriendlyByteBuf data`
  The field for the data record component.
- `public static final DiscardedQueryAnswerPayload INSTANCE`

### Methods
- `public void write(FriendlyByteBuf p_299186_)`
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
- `@Nullable public FriendlyByteBuf data()`
  Returns the value of the data record component.
  - returns: the value of the data record component

## DiscardedQueryPayload

*record* `net.minecraft.network.protocol.login.custom.DiscardedQueryPayload`

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `@Nullable private final @Nullable FriendlyByteBuf data`
  The field for the data record component.

### Methods
- `public void write(FriendlyByteBuf p_299949_)`
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
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
- `@Nullable public @Nullable FriendlyByteBuf data()`
  Returns the value of the data record component.
  - returns: the value of the data record component
