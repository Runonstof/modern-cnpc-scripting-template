# net.minecraft.world.storage.loot.properties

- [EntityOnFire](#entityonfire)
- [EntityOnFire.Serializer](#entityonfire.serializer)
- [EntityProperty](#entityproperty)
- [EntityProperty.Serializer](#entityproperty.serializer)
- [EntityPropertyManager](#entitypropertymanager)
## EntityOnFire

*class* `net.minecraft.world.storage.loot.properties.EntityOnFire`

All Implemented Interfaces: EntityProperty

### Methods
- `public boolean testProperty(java.util.Random random,  Entity entityIn)`

## EntityOnFire.Serializer

*class* `net.minecraft.world.storage.loot.properties.EntityOnFire.Serializer`

Enclosing class: EntityOnFire

### Methods
- `public JsonElement serialize(EntityOnFire property,  JsonSerializationContext serializationContext)`
- `public EntityOnFire deserialize(JsonElement element,  JsonDeserializationContext deserializationContext)`

### Inherited methods
- from `net.minecraft.world.storage.loot.properties.EntityProperty.Serializer`: `getName`, `getPropertyClass`

## EntityProperty

*interface* `net.minecraft.world.storage.loot.properties.EntityProperty`

### Methods
- `boolean testProperty(java.util.Random random,  Entity entityIn)`

## EntityProperty.Serializer

*class* `net.minecraft.world.storage.loot.properties.EntityProperty.Serializer`

Enclosing interface: EntityProperty

### Methods
- `public ResourceLocation getName()`
- `public java.lang.Class<T> getPropertyClass()`
- `public abstract JsonElement serialize(T property,  JsonSerializationContext serializationContext)`
- `public abstract T deserialize(JsonElement element,  JsonDeserializationContext deserializationContext)`

## EntityPropertyManager

*class* `net.minecraft.world.storage.loot.properties.EntityPropertyManager`

### Methods
- `public static <T extends EntityProperty> void registerProperty(EntityProperty.Serializer<? extends T> serializer)`
- `public static EntityProperty.Serializer<?> getSerializerForName(ResourceLocation name)`
- `public static <T extends EntityProperty> EntityProperty.Serializer<T> getSerializerFor(T property)`
