# net.minecraft.world.entity.ai.behavior.declarative

- [BehaviorBuilder](#behaviorbuilder)
- [BehaviorBuilder.Constant](#behaviorbuilder.constant)
- [BehaviorBuilder.Instance](#behaviorbuilder.instance)
- [BehaviorBuilder.Instance.Mu](#behaviorbuilder.instance.mu)
- [BehaviorBuilder.Mu](#behaviorbuilder.mu)
- [BehaviorBuilder.PureMemory](#behaviorbuilder.purememory)
- [BehaviorBuilder.TriggerWithResult](#behaviorbuilder.triggerwithresult)
- [BehaviorBuilder.TriggerWrapper](#behaviorbuilder.triggerwrapper)
- [MemoryAccessor](#memoryaccessor)
- [MemoryCondition](#memorycondition)
- [MemoryCondition.Absent](#memorycondition.absent)
- [MemoryCondition.Present](#memorycondition.present)
- [MemoryCondition.Registered](#memorycondition.registered)
- [Trigger](#trigger)
## BehaviorBuilder

*class* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder`

### Fields
- `private final BehaviorBuilder.TriggerWithResult<E extends LivingEntity,M> trigger`

### Methods
- `public static <E extends LivingEntity, M> BehaviorBuilder<E,M> unbox(com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,M> p_259593_)`
- `public static <E extends LivingEntity> BehaviorBuilder.Instance<E> instance()`
- `public static <E extends LivingEntity> OneShot<E> create(Function<BehaviorBuilder.Instance<E>,? extends com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,Trigger<E>>> p_259386_)`
- `public static <E extends LivingEntity> OneShot<E> sequence(Trigger<? super E> p_260174_,  Trigger<? super E> p_259134_)`
- `public static <E extends LivingEntity> OneShot<E> triggerIf(Predicate<E> p_260059_,  OneShot<? super E> p_259640_)`
- `public static <E extends LivingEntity> OneShot<E> triggerIf(Predicate<E> p_260112_)`
- `public static <E extends LivingEntity> OneShot<E> triggerIf(BiPredicate<ServerLevel,E> p_259227_)`
- `static <E extends LivingEntity, M> BehaviorBuilder.TriggerWithResult<E,M> get(com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,M> p_259615_)`
- `static <E extends LivingEntity, M> BehaviorBuilder<E,M> create(BehaviorBuilder.TriggerWithResult<E,M> p_259575_)`

## BehaviorBuilder.Constant

*class* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder.Constant`

Enclosing class: BehaviorBuilder<E extends LivingEntity, M>

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder`: `create`, `create`, `get`, `instance`, `sequence`, `triggerIf`, `triggerIf`, `triggerIf`, `unbox`

## BehaviorBuilder.Instance

*class* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder.Instance`

Enclosing class: BehaviorBuilder<E extends LivingEntity, M>

### Methods
- `public <Value> Optional<Value> tryGet(MemoryAccessor<com.mojang.datafixers.kinds.OptionalBox.Mu,Value> p_259352_)`
- `public <Value> Value get(MemoryAccessor<com.mojang.datafixers.kinds.IdF.Mu,Value> p_259206_)`
- `public <Value> BehaviorBuilder<E,MemoryAccessor<com.mojang.datafixers.kinds.OptionalBox.Mu,Value>> registered(MemoryModuleType<Value> p_259477_)`
- `public <Value> BehaviorBuilder<E,MemoryAccessor<com.mojang.datafixers.kinds.IdF.Mu,Value>> present(MemoryModuleType<Value> p_259673_)`
- `public <Value> BehaviorBuilder<E,MemoryAccessor<com.mojang.datafixers.kinds.Const.Mu<com.mojang.datafixers.util.Unit>,Value>> absent(MemoryModuleType<Value> p_260198_)`
- `public BehaviorBuilder<E,com.mojang.datafixers.util.Unit> ifTriggered(Trigger<? super E> p_260247_)`
- `public <A> BehaviorBuilder<E,A> point(A p_259634_)`
- `public <A> BehaviorBuilder<E,A> point(Supplier<String> p_260070_,  A p_260295_)`
- `public <A, R> Function<com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,A>,com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,R>> lift1(com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,Function<A,R>> p_259294_)`
- `public <T, R> BehaviorBuilder<E,R> map(Function<? super T,? extends R> p_259963_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T> p_260355_)`
- `public <A, B, R> BehaviorBuilder<E,R> ap2(com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,BiFunction<A,B,R>> p_259535_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,A> p_259162_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,B> p_259733_)`
- `public <T1, T2, T3, R> BehaviorBuilder<E,R> ap3(com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,com.mojang.datafixers.util.Function3<T1,T2,T3,R>> p_260239_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T1> p_259239_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T2> p_259638_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T3> p_259969_)`
- `public <T1, T2, T3, T4, R> BehaviorBuilder<E,R> ap4(com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,com.mojang.datafixers.util.Function4<T1,T2,T3,T4,R>> p_259519_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T1> p_259829_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T2> p_259314_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T3> p_260089_,  com.mojang.datafixers.kinds.App<BehaviorBuilder.Mu<E>,T4> p_259136_)`

### Inherited methods
- from `com.mojang.datafixers.kinds.Applicative`: `ap`, `ap`, `ap10`, `ap11`, `ap12`, `ap13`, `ap14`, `ap15`, `ap16`, `ap5`, `ap6`, `ap7`, `ap8`, `ap9`, `apply2`, `apply3`, `apply4`, `apply5`, `apply6`, `apply7`, `apply8`, `apply9`, `lift2`, `lift3`, `lift4`, `lift5`, `lift6`, `lift7`, `lift8`, `lift9`
- from `com.mojang.datafixers.kinds.Kind1`: `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`, `group`

## BehaviorBuilder.Instance.Mu

*class* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder.Instance.Mu`

Enclosing class: BehaviorBuilder.Instance<E extends LivingEntity>

## BehaviorBuilder.Mu

*class* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder.Mu`

Enclosing class: BehaviorBuilder<E extends LivingEntity, M>

## BehaviorBuilder.PureMemory

*class* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder.PureMemory`

Enclosing class: BehaviorBuilder<E extends LivingEntity, M>

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder`: `create`, `create`, `get`, `instance`, `sequence`, `triggerIf`, `triggerIf`, `triggerIf`, `unbox`

## BehaviorBuilder.TriggerWithResult

*interface* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder.TriggerWithResult`

Enclosing class: BehaviorBuilder<E extends LivingEntity, M>

### Methods
- `@Nullable R tryTrigger(ServerLevel p_259864_,  E p_259042_,  long p_260282_)`
- `String debugString()`

## BehaviorBuilder.TriggerWrapper

*class* `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder.TriggerWrapper`

Enclosing class: BehaviorBuilder<E extends LivingEntity, M>

### Inherited methods
- from `net.minecraft.world.entity.ai.behavior.declarative.BehaviorBuilder`: `create`, `create`, `get`, `instance`, `sequence`, `triggerIf`, `triggerIf`, `triggerIf`, `unbox`

## MemoryAccessor

*class* `net.minecraft.world.entity.ai.behavior.declarative.MemoryAccessor`

### Fields
- `private final Brain<?> brain`
- `private final MemoryModuleType<Value> memoryType`
- `private final com.mojang.datafixers.kinds.App<F extends com.mojang.datafixers.kinds.K1,Value> value`

### Methods
- `public com.mojang.datafixers.kinds.App<F,Value> value()`
- `public void set(Value p_259728_)`
- `public void setOrErase(Optional<Value> p_259943_)`
- `public void setWithExpiry(Value p_259027_,  long p_260310_)`
- `public void erase()`

## MemoryCondition

*interface* `net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition`

### Methods
- `MemoryModuleType<Value> memory()`
- `MemoryStatus condition()`
- `@Nullable MemoryAccessor<F,Value> createAccessor(Brain<?> p_259936_,  Optional<Value> p_259724_)`

## MemoryCondition.Absent

*record* `net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition.Absent`

Enclosing interface: MemoryCondition<F extends com.mojang.datafixers.kinds.K1, Value>

### Fields
- `private final MemoryModuleType<Value> memory`
  The field for the memory record component.

### Methods
- `public MemoryStatus condition()`
- `public MemoryAccessor<com.mojang.datafixers.kinds.Const.Mu<com.mojang.datafixers.util.Unit>,Value> createAccessor(Brain<?> p_259727_,  Optional<Value> p_260359_)`
- `public MemoryModuleType<Value> memory()`
  Returns the value of the memory record component.
  - returns: the value of the memory record component
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

## MemoryCondition.Present

*record* `net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition.Present`

Enclosing interface: MemoryCondition<F extends com.mojang.datafixers.kinds.K1, Value>

### Fields
- `private final MemoryModuleType<Value> memory`
  The field for the memory record component.

### Methods
- `public MemoryStatus condition()`
- `public MemoryAccessor<com.mojang.datafixers.kinds.IdF.Mu,Value> createAccessor(Brain<?> p_259253_,  Optional<Value> p_260268_)`
- `public MemoryModuleType<Value> memory()`
  Returns the value of the memory record component.
  - returns: the value of the memory record component
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

## MemoryCondition.Registered

*record* `net.minecraft.world.entity.ai.behavior.declarative.MemoryCondition.Registered`

Enclosing interface: MemoryCondition<F extends com.mojang.datafixers.kinds.K1, Value>

### Fields
- `private final MemoryModuleType<Value> memory`
  The field for the memory record component.

### Methods
- `public MemoryStatus condition()`
- `public MemoryAccessor<com.mojang.datafixers.kinds.OptionalBox.Mu,Value> createAccessor(Brain<?> p_260149_,  Optional<Value> p_259303_)`
- `public MemoryModuleType<Value> memory()`
  Returns the value of the memory record component.
  - returns: the value of the memory record component
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

## Trigger

*interface* `net.minecraft.world.entity.ai.behavior.declarative.Trigger`

### Methods
- `boolean trigger(ServerLevel p_259730_,  E p_260017_,  long p_259489_)`
