# net.minecraft.world.storage.loot

- [ILootContainer](#ilootcontainer)
- [LootContext](#lootcontext)
- [LootContext.Builder](#lootcontext.builder)
- [LootContext.EntityTarget](#lootcontext.entitytarget)
- [LootContext.EntityTarget.Serializer](#lootcontext.entitytarget.serializer)
- [LootEntry](#lootentry)
- [LootEntry.Serializer](#lootentry.serializer)
- [LootEntryEmpty](#lootentryempty)
- [LootEntryItem](#lootentryitem)
- [LootEntryTable](#lootentrytable)
- [LootPool](#lootpool)
- [LootPool.Serializer](#lootpool.serializer)
- [LootTable](#loottable)
- [LootTable.Serializer](#loottable.serializer)
- [LootTableList](#loottablelist)
- [LootTableManager](#loottablemanager)
- [RandomValueRange](#randomvaluerange)
- [RandomValueRange.Serializer](#randomvaluerange.serializer)
## ILootContainer

*interface* `net.minecraft.world.storage.loot.ILootContainer`

### Methods
- `ResourceLocation getLootTable()`

## LootContext

*class* `net.minecraft.world.storage.loot.LootContext`

### Methods
- `public Entity getLootedEntity()`
- `public Entity getKillerPlayer()`
- `public Entity getKiller()`
- `public boolean addLootTable(LootTable lootTableIn)`
- `public void removeLootTable(LootTable lootTableIn)`
- `public LootTableManager getLootTableManager()`
- `public float getLuck()`
- `public Entity getEntity(LootContext.EntityTarget target)`
- `public WorldServer getWorld()`
- `public int getLootingModifier()`

## LootContext.Builder

*class* `net.minecraft.world.storage.loot.LootContext.Builder`

Enclosing class: LootContext

### Methods
- `public LootContext.Builder withLuck(float luckIn)`
- `public LootContext.Builder withLootedEntity(Entity entityIn)`
- `public LootContext.Builder withPlayer(EntityPlayer playerIn)`
- `public LootContext.Builder withDamageSource(DamageSource dmgSource)`
- `public LootContext build()`

## LootContext.EntityTarget

*enum* `net.minecraft.world.storage.loot.LootContext.EntityTarget`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<LootContext.EntityTarget>

Enclosing class: LootContext

### Fields
- `public static final LootContext.EntityTarget THIS`
- `public static final LootContext.EntityTarget KILLER`
- `public static final LootContext.EntityTarget KILLER_PLAYER`

### Methods
- `public static LootContext.EntityTarget[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (LootContext.EntityTarget c : LootContext.EntityTarget.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static LootContext.EntityTarget valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static LootContext.EntityTarget fromString(java.lang.String type)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## LootContext.EntityTarget.Serializer

*class* `net.minecraft.world.storage.loot.LootContext.EntityTarget.Serializer`

Enclosing class: LootContext.EntityTarget

### Methods
- `public void write(JsonWriter p_write_1_,  LootContext.EntityTarget p_write_2_)  throws java.io.IOException`
  - throws: java.io.IOException
- `public LootContext.EntityTarget read(JsonReader p_read_1_)  throws java.io.IOException`
  - throws: java.io.IOException

## LootEntry

*class* `net.minecraft.world.storage.loot.LootEntry`

### Fields
- `protected final java.lang.String entryName`
- `protected final int weight`
- `protected final int quality`
- `protected final LootCondition[] conditions`

### Methods
- `public int getEffectiveWeight(float luck)`
- `public java.lang.String getEntryName()`
- `public abstract void addLoot(java.util.Collection<ItemStack> stacks,  java.util.Random rand,  LootContext context)`
- `protected abstract void serialize(JsonObject json,  JsonSerializationContext context)`

## LootEntry.Serializer

*class* `net.minecraft.world.storage.loot.LootEntry.Serializer`

Enclosing class: LootEntry

### Methods
- `public LootEntry deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(LootEntry p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## LootEntryEmpty

*class* `net.minecraft.world.storage.loot.LootEntryEmpty`

### Inherited fields
- from `net.minecraft.world.storage.loot.LootEntry`: `conditions`, `entryName`, `quality`, `weight`

### Methods
- `public void addLoot(java.util.Collection<ItemStack> stacks,  java.util.Random rand,  LootContext context)`
- `protected void serialize(JsonObject json,  JsonSerializationContext context)`
- `public static LootEntryEmpty deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  int weightIn,  int qualityIn,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.LootEntry`: `getEffectiveWeight`, `getEntryName`

## LootEntryItem

*class* `net.minecraft.world.storage.loot.LootEntryItem`

### Fields
- `protected final Item item`
- `protected final LootFunction[] functions`

### Inherited fields
- from `net.minecraft.world.storage.loot.LootEntry`: `conditions`, `entryName`, `quality`, `weight`

### Methods
- `public void addLoot(java.util.Collection<ItemStack> stacks,  java.util.Random rand,  LootContext context)`
- `protected void serialize(JsonObject json,  JsonSerializationContext context)`
- `public static LootEntryItem deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  int weightIn,  int qualityIn,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.LootEntry`: `getEffectiveWeight`, `getEntryName`

## LootEntryTable

*class* `net.minecraft.world.storage.loot.LootEntryTable`

### Fields
- `protected final ResourceLocation table`

### Inherited fields
- from `net.minecraft.world.storage.loot.LootEntry`: `conditions`, `entryName`, `quality`, `weight`

### Methods
- `public void addLoot(java.util.Collection<ItemStack> stacks,  java.util.Random rand,  LootContext context)`
- `protected void serialize(JsonObject json,  JsonSerializationContext context)`
- `public static LootEntryTable deserialize(JsonObject object,  JsonDeserializationContext deserializationContext,  int weightIn,  int qualityIn,  LootCondition[] conditionsIn)`

### Inherited methods
- from `net.minecraft.world.storage.loot.LootEntry`: `getEffectiveWeight`, `getEntryName`

## LootPool

*class* `net.minecraft.world.storage.loot.LootPool`

### Methods
- `protected void createLootRoll(java.util.Collection<ItemStack> stacks,  java.util.Random rand,  LootContext context)`
- `public void generateLoot(java.util.Collection<ItemStack> stacks,  java.util.Random rand,  LootContext context)`
- `public void freeze()`
- `public boolean isFrozen()`
- `public java.lang.String getName()`
- `public RandomValueRange getRolls()`
- `public RandomValueRange getBonusRolls()`
- `public void setRolls(RandomValueRange v)`
- `public void setBonusRolls(RandomValueRange v)`
- `public LootEntry getEntry(java.lang.String name)`
- `public LootEntry removeEntry(java.lang.String name)`
- `public void addEntry(LootEntry entry)`

## LootPool.Serializer

*class* `net.minecraft.world.storage.loot.LootPool.Serializer`

Enclosing class: LootPool

### Methods
- `public LootPool deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(LootPool p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## LootTable

*class* `net.minecraft.world.storage.loot.LootTable`

### Fields
- `public static final LootTable EMPTY_LOOT_TABLE`

### Methods
- `public java.util.List<ItemStack> generateLootForPools(java.util.Random rand,  LootContext context)`
- `public void fillInventory(IInventory inventory,  java.util.Random rand,  LootContext context)`
- `public void freeze()`
- `public boolean isFrozen()`
- `public LootPool getPool(java.lang.String name)`
- `public LootPool removePool(java.lang.String name)`
- `public void addPool(LootPool pool)`

## LootTable.Serializer

*class* `net.minecraft.world.storage.loot.LootTable.Serializer`

Enclosing class: LootTable

### Methods
- `public LootTable deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(LootTable p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## LootTableList

*class* `net.minecraft.world.storage.loot.LootTableList`

### Fields
- `public static final ResourceLocation EMPTY`
- `public static final ResourceLocation CHESTS_SPAWN_BONUS_CHEST`
- `public static final ResourceLocation CHESTS_END_CITY_TREASURE`
- `public static final ResourceLocation CHESTS_SIMPLE_DUNGEON`
- `public static final ResourceLocation CHESTS_VILLAGE_BLACKSMITH`
- `public static final ResourceLocation CHESTS_ABANDONED_MINESHAFT`
- `public static final ResourceLocation CHESTS_NETHER_BRIDGE`
- `public static final ResourceLocation CHESTS_STRONGHOLD_LIBRARY`
- `public static final ResourceLocation CHESTS_STRONGHOLD_CROSSING`
- `public static final ResourceLocation CHESTS_STRONGHOLD_CORRIDOR`
- `public static final ResourceLocation CHESTS_DESERT_PYRAMID`
- `public static final ResourceLocation CHESTS_JUNGLE_TEMPLE`
- `public static final ResourceLocation CHESTS_JUNGLE_TEMPLE_DISPENSER`
- `public static final ResourceLocation CHESTS_IGLOO_CHEST`
- `public static final ResourceLocation CHESTS_WOODLAND_MANSION`
- `public static final ResourceLocation ENTITIES_WITCH`
- `public static final ResourceLocation ENTITIES_BLAZE`
- `public static final ResourceLocation ENTITIES_CREEPER`
- `public static final ResourceLocation ENTITIES_SPIDER`
- `public static final ResourceLocation ENTITIES_CAVE_SPIDER`
- `public static final ResourceLocation ENTITIES_GIANT`
- `public static final ResourceLocation ENTITIES_SILVERFISH`
- `public static final ResourceLocation ENTITIES_ENDERMAN`
- `public static final ResourceLocation ENTITIES_GUARDIAN`
- `public static final ResourceLocation ENTITIES_ELDER_GUARDIAN`
- `public static final ResourceLocation ENTITIES_SHULKER`
- `public static final ResourceLocation ENTITIES_IRON_GOLEM`
- `public static final ResourceLocation ENTITIES_SNOWMAN`
- `public static final ResourceLocation ENTITIES_RABBIT`
- `public static final ResourceLocation ENTITIES_CHICKEN`
- `public static final ResourceLocation ENTITIES_PIG`
- `public static final ResourceLocation ENTITIES_POLAR_BEAR`
- `public static final ResourceLocation ENTITIES_HORSE`
- `public static final ResourceLocation ENTITIES_DONKEY`
- `public static final ResourceLocation ENTITIES_MULE`
- `public static final ResourceLocation ENTITIES_ZOMBIE_HORSE`
- `public static final ResourceLocation ENTITIES_SKELETON_HORSE`
- `public static final ResourceLocation ENTITIES_COW`
- `public static final ResourceLocation ENTITIES_MUSHROOM_COW`
- `public static final ResourceLocation ENTITIES_WOLF`
- `public static final ResourceLocation ENTITIES_OCELOT`
- `public static final ResourceLocation ENTITIES_SHEEP`
- `public static final ResourceLocation ENTITIES_SHEEP_WHITE`
- `public static final ResourceLocation ENTITIES_SHEEP_ORANGE`
- `public static final ResourceLocation ENTITIES_SHEEP_MAGENTA`
- `public static final ResourceLocation ENTITIES_SHEEP_LIGHT_BLUE`
- `public static final ResourceLocation ENTITIES_SHEEP_YELLOW`
- `public static final ResourceLocation ENTITIES_SHEEP_LIME`
- `public static final ResourceLocation ENTITIES_SHEEP_PINK`
- `public static final ResourceLocation ENTITIES_SHEEP_GRAY`
- `public static final ResourceLocation ENTITIES_SHEEP_SILVER`
- `public static final ResourceLocation ENTITIES_SHEEP_CYAN`
- `public static final ResourceLocation ENTITIES_SHEEP_PURPLE`
- `public static final ResourceLocation ENTITIES_SHEEP_BLUE`
- `public static final ResourceLocation ENTITIES_SHEEP_BROWN`
- `public static final ResourceLocation ENTITIES_SHEEP_GREEN`
- `public static final ResourceLocation ENTITIES_SHEEP_RED`
- `public static final ResourceLocation ENTITIES_SHEEP_BLACK`
- `public static final ResourceLocation ENTITIES_BAT`
- `public static final ResourceLocation ENTITIES_SLIME`
- `public static final ResourceLocation ENTITIES_MAGMA_CUBE`
- `public static final ResourceLocation ENTITIES_GHAST`
- `public static final ResourceLocation ENTITIES_SQUID`
- `public static final ResourceLocation ENTITIES_ENDERMITE`
- `public static final ResourceLocation ENTITIES_ZOMBIE`
- `public static final ResourceLocation ENTITIES_ZOMBIE_PIGMAN`
- `public static final ResourceLocation ENTITIES_SKELETON`
- `public static final ResourceLocation ENTITIES_WITHER_SKELETON`
- `public static final ResourceLocation ENTITIES_STRAY`
- `public static final ResourceLocation ENTITIES_HUSK`
- `public static final ResourceLocation ENTITIES_ZOMBIE_VILLAGER`
- `public static final ResourceLocation ENTITIES_VILLAGER`
- `public static final ResourceLocation ENTITIES_EVOCATION_ILLAGER`
- `public static final ResourceLocation ENTITIES_VINDICATION_ILLAGER`
- `public static final ResourceLocation ENTITIES_LLAMA`
- `public static final ResourceLocation ENTITIES_PARROT`
- `public static final ResourceLocation ENTITIES_VEX`
- `public static final ResourceLocation ENTITIES_ENDER_DRAGON`
- `public static final ResourceLocation GAMEPLAY_FISHING`
- `public static final ResourceLocation GAMEPLAY_FISHING_JUNK`
- `public static final ResourceLocation GAMEPLAY_FISHING_TREASURE`
- `public static final ResourceLocation GAMEPLAY_FISHING_FISH`

### Methods
- `public static ResourceLocation register(ResourceLocation id)`
- `public static java.util.Set<ResourceLocation> getAll()`
- `public static boolean test()`

## LootTableManager

*class* `net.minecraft.world.storage.loot.LootTableManager`

### Methods
- `public LootTable getLootTableFromLocation(ResourceLocation ressources)`
- `public void reloadLootTables()`

## RandomValueRange

*class* `net.minecraft.world.storage.loot.RandomValueRange`

### Methods
- `public float getMin()`
- `public float getMax()`
- `public int generateInt(java.util.Random rand)`
- `public float generateFloat(java.util.Random rand)`
- `public boolean isInRange(int value)`

## RandomValueRange.Serializer

*class* `net.minecraft.world.storage.loot.RandomValueRange.Serializer`

Enclosing class: RandomValueRange

### Methods
- `public RandomValueRange deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(RandomValueRange p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`
