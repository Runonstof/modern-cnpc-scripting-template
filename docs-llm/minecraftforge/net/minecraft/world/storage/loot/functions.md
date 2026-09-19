# net.minecraft.world.storage.loot.functions

- [EnchantRandomly](#enchantrandomly)
- [EnchantRandomly.Serializer](#enchantrandomly.serializer)
- [EnchantWithLevels](#enchantwithlevels)
- [EnchantWithLevels.Serializer](#enchantwithlevels.serializer)
- [LootFunction](#lootfunction)
- [LootFunction.Serializer](#lootfunction.serializer)
- [LootFunctionManager](#lootfunctionmanager)
- [LootFunctionManager.Serializer](#lootfunctionmanager.serializer)
- [LootingEnchantBonus](#lootingenchantbonus)
- [LootingEnchantBonus.Serializer](#lootingenchantbonus.serializer)
- [SetAttributes](#setattributes)
- [SetAttributes.Serializer](#setattributes.serializer)
- [SetCount](#setcount)
- [SetCount.Serializer](#setcount.serializer)
- [SetDamage](#setdamage)
- [SetDamage.Serializer](#setdamage.serializer)
- [SetMetadata](#setmetadata)
- [SetMetadata.Serializer](#setmetadata.serializer)
- [SetNBT](#setnbt)
- [SetNBT.Serializer](#setnbt.serializer)
- [Smelt](#smelt)
- [Smelt.Serializer](#smelt.serializer)
## EnchantRandomly

*class* `net.minecraft.world.storage.loot.functions.EnchantRandomly`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## EnchantRandomly.Serializer

*class* `net.minecraft.world.storage.loot.functions.EnchantRandomly.Serializer`

Enclosing class: EnchantRandomly

### Methods
- `public void serialize(JsonObject object,  EnchantRandomly functionClazz,  JsonSerializationContext serializationContext)`
- `public EnchantRandomly deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## EnchantWithLevels

*class* `net.minecraft.world.storage.loot.functions.EnchantWithLevels`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## EnchantWithLevels.Serializer

*class* `net.minecraft.world.storage.loot.functions.EnchantWithLevels.Serializer`

Enclosing class: EnchantWithLevels

### Methods
- `public void serialize(JsonObject object,  EnchantWithLevels functionClazz,  JsonSerializationContext serializationContext)`
- `public EnchantWithLevels deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## LootFunction

*class* `net.minecraft.world.storage.loot.functions.LootFunction`

### Methods
- `public abstract ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`
- `public LootCondition[] getConditions()`

## LootFunction.Serializer

*class* `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`

Enclosing class: LootFunction

### Methods
- `public ResourceLocation getFunctionName()`
- `public java.lang.Class<T> getFunctionClass()`
- `public abstract void serialize(JsonObject object,  T functionClazz,  JsonSerializationContext serializationContext)`
- `public abstract T deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

## LootFunctionManager

*class* `net.minecraft.world.storage.loot.functions.LootFunctionManager`

### Methods
- `public static <T extends LootFunction> void registerFunction(LootFunction.Serializer<? extends T> serializer)`
- `public static LootFunction.Serializer<?> getSerializerForName(ResourceLocation location)`
- `public static <T extends LootFunction> LootFunction.Serializer<T> getSerializerFor(T functionClass)`

## LootFunctionManager.Serializer

*class* `net.minecraft.world.storage.loot.functions.LootFunctionManager.Serializer`

Enclosing class: LootFunctionManager

### Methods
- `public LootFunction deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(LootFunction p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## LootingEnchantBonus

*class* `net.minecraft.world.storage.loot.functions.LootingEnchantBonus`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## LootingEnchantBonus.Serializer

*class* `net.minecraft.world.storage.loot.functions.LootingEnchantBonus.Serializer`

Enclosing class: LootingEnchantBonus

### Methods
- `public void serialize(JsonObject object,  LootingEnchantBonus functionClazz,  JsonSerializationContext serializationContext)`
- `public LootingEnchantBonus deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## SetAttributes

*class* `net.minecraft.world.storage.loot.functions.SetAttributes`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## SetAttributes.Serializer

*class* `net.minecraft.world.storage.loot.functions.SetAttributes.Serializer`

Enclosing class: SetAttributes

### Methods
- `public void serialize(JsonObject object,  SetAttributes functionClazz,  JsonSerializationContext serializationContext)`
- `public SetAttributes deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## SetCount

*class* `net.minecraft.world.storage.loot.functions.SetCount`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## SetCount.Serializer

*class* `net.minecraft.world.storage.loot.functions.SetCount.Serializer`

Enclosing class: SetCount

### Methods
- `public void serialize(JsonObject object,  SetCount functionClazz,  JsonSerializationContext serializationContext)`
- `public SetCount deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## SetDamage

*class* `net.minecraft.world.storage.loot.functions.SetDamage`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## SetDamage.Serializer

*class* `net.minecraft.world.storage.loot.functions.SetDamage.Serializer`

Enclosing class: SetDamage

### Methods
- `public void serialize(JsonObject object,  SetDamage functionClazz,  JsonSerializationContext serializationContext)`
- `public SetDamage deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## SetMetadata

*class* `net.minecraft.world.storage.loot.functions.SetMetadata`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## SetMetadata.Serializer

*class* `net.minecraft.world.storage.loot.functions.SetMetadata.Serializer`

Enclosing class: SetMetadata

### Methods
- `public void serialize(JsonObject object,  SetMetadata functionClazz,  JsonSerializationContext serializationContext)`
- `public SetMetadata deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## SetNBT

*class* `net.minecraft.world.storage.loot.functions.SetNBT`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## SetNBT.Serializer

*class* `net.minecraft.world.storage.loot.functions.SetNBT.Serializer`

Enclosing class: SetNBT

### Methods
- `public void serialize(JsonObject object,  SetNBT functionClazz,  JsonSerializationContext serializationContext)`
- `public SetNBT deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`

## Smelt

*class* `net.minecraft.world.storage.loot.functions.Smelt`

### Methods
- `public ItemStack apply(ItemStack stack,  java.util.Random rand,  LootContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction`: `getConditions`

## Smelt.Serializer

*class* `net.minecraft.world.storage.loot.functions.Smelt.Serializer`

Enclosing class: Smelt

### Methods
- `public void serialize(JsonObject object,  Smelt functionClazz,  JsonSerializationContext serializationContext)`
- `public Smelt deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.functions.LootFunction.Serializer`: `getFunctionClass`, `getFunctionName`
