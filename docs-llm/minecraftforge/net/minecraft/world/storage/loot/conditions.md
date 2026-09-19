# net.minecraft.world.storage.loot.conditions

- [EntityHasProperty](#entityhasproperty)
- [EntityHasProperty.Serializer](#entityhasproperty.serializer)
- [EntityHasScore](#entityhasscore)
- [EntityHasScore.Serializer](#entityhasscore.serializer)
- [KilledByPlayer](#killedbyplayer)
- [KilledByPlayer.Serializer](#killedbyplayer.serializer)
- [LootCondition](#lootcondition)
- [LootCondition.Serializer](#lootcondition.serializer)
- [LootConditionManager](#lootconditionmanager)
- [LootConditionManager.Serializer](#lootconditionmanager.serializer)
- [RandomChance](#randomchance)
- [RandomChance.Serializer](#randomchance.serializer)
- [RandomChanceWithLooting](#randomchancewithlooting)
- [RandomChanceWithLooting.Serializer](#randomchancewithlooting.serializer)
## EntityHasProperty

*class* `net.minecraft.world.storage.loot.conditions.EntityHasProperty`

All Implemented Interfaces: LootCondition

### Methods
- `public boolean testCondition(java.util.Random rand,  LootContext context)`

## EntityHasProperty.Serializer

*class* `net.minecraft.world.storage.loot.conditions.EntityHasProperty.Serializer`

Enclosing class: EntityHasProperty

### Methods
- `public void serialize(JsonObject json,  EntityHasProperty value,  JsonSerializationContext context)`
- `public EntityHasProperty deserialize(JsonObject json,  JsonDeserializationContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.conditions.LootCondition.Serializer`: `getConditionClass`, `getLootTableLocation`

## EntityHasScore

*class* `net.minecraft.world.storage.loot.conditions.EntityHasScore`

All Implemented Interfaces: LootCondition

### Methods
- `public boolean testCondition(java.util.Random rand,  LootContext context)`
- `protected boolean entityScoreMatch(Entity entityIn,  Scoreboard scoreboardIn,  java.lang.String objectiveStr,  RandomValueRange rand)`

## EntityHasScore.Serializer

*class* `net.minecraft.world.storage.loot.conditions.EntityHasScore.Serializer`

Enclosing class: EntityHasScore

### Methods
- `public void serialize(JsonObject json,  EntityHasScore value,  JsonSerializationContext context)`
- `public EntityHasScore deserialize(JsonObject json,  JsonDeserializationContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.conditions.LootCondition.Serializer`: `getConditionClass`, `getLootTableLocation`

## KilledByPlayer

*class* `net.minecraft.world.storage.loot.conditions.KilledByPlayer`

All Implemented Interfaces: LootCondition

### Methods
- `public boolean testCondition(java.util.Random rand,  LootContext context)`

## KilledByPlayer.Serializer

*class* `net.minecraft.world.storage.loot.conditions.KilledByPlayer.Serializer`

Enclosing class: KilledByPlayer

### Methods
- `public void serialize(JsonObject json,  KilledByPlayer value,  JsonSerializationContext context)`
- `public KilledByPlayer deserialize(JsonObject json,  JsonDeserializationContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.conditions.LootCondition.Serializer`: `getConditionClass`, `getLootTableLocation`

## LootCondition

*interface* `net.minecraft.world.storage.loot.conditions.LootCondition`

### Methods
- `boolean testCondition(java.util.Random rand,  LootContext context)`

## LootCondition.Serializer

*class* `net.minecraft.world.storage.loot.conditions.LootCondition.Serializer`

Enclosing interface: LootCondition

### Methods
- `public ResourceLocation getLootTableLocation()`
- `public java.lang.Class<T> getConditionClass()`
- `public abstract void serialize(JsonObject json,  T value,  JsonSerializationContext context)`
- `public abstract T deserialize(JsonObject json,  JsonDeserializationContext context)`

## LootConditionManager

*class* `net.minecraft.world.storage.loot.conditions.LootConditionManager`

### Methods
- `public static <T extends LootCondition> void registerCondition(LootCondition.Serializer<? extends T> condition)`
- `public static boolean testAllConditions(java.lang.Iterable<LootCondition> conditions,  java.util.Random rand,  LootContext context)`
- `public static boolean testAllConditions(LootCondition[] conditions,  java.util.Random rand,  LootContext context)`
- `public static LootCondition.Serializer<?> getSerializerForName(ResourceLocation location)`
- `public static <T extends LootCondition> LootCondition.Serializer<T> getSerializerFor(T conditionClass)`

## LootConditionManager.Serializer

*class* `net.minecraft.world.storage.loot.conditions.LootConditionManager.Serializer`

Enclosing class: LootConditionManager

### Methods
- `public LootCondition deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(LootCondition p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## RandomChance

*class* `net.minecraft.world.storage.loot.conditions.RandomChance`

All Implemented Interfaces: LootCondition

### Methods
- `public boolean testCondition(java.util.Random rand,  LootContext context)`

## RandomChance.Serializer

*class* `net.minecraft.world.storage.loot.conditions.RandomChance.Serializer`

Enclosing class: RandomChance

### Methods
- `public void serialize(JsonObject json,  RandomChance value,  JsonSerializationContext context)`
- `public RandomChance deserialize(JsonObject json,  JsonDeserializationContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.conditions.LootCondition.Serializer`: `getConditionClass`, `getLootTableLocation`

## RandomChanceWithLooting

*class* `net.minecraft.world.storage.loot.conditions.RandomChanceWithLooting`

All Implemented Interfaces: LootCondition

### Methods
- `public boolean testCondition(java.util.Random rand,  LootContext context)`

## RandomChanceWithLooting.Serializer

*class* `net.minecraft.world.storage.loot.conditions.RandomChanceWithLooting.Serializer`

Enclosing class: RandomChanceWithLooting

### Methods
- `public void serialize(JsonObject json,  RandomChanceWithLooting value,  JsonSerializationContext context)`
- `public RandomChanceWithLooting deserialize(JsonObject json,  JsonDeserializationContext context)`

### Inherited methods
- from `net.minecraft.world.storage.loot.conditions.LootCondition.Serializer`: `getConditionClass`, `getLootTableLocation`
