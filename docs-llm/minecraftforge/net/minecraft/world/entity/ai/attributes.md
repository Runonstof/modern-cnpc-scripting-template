# net.minecraft.world.entity.ai.attributes

- [Attribute](#attribute)
- [AttributeInstance](#attributeinstance)
- [AttributeMap](#attributemap)
- [AttributeModifier](#attributemodifier)
- [Attributes](#attributes)
- [AttributeSupplier](#attributesupplier)
- [AttributeSupplier.Builder](#attributesupplier.builder)
- [Class AttributeModifier.Operation](#class-attributemodifier.operation)
- [DefaultAttributes](#defaultattributes)
- [RangedAttribute](#rangedattribute)
## Attribute

*class* `net.minecraft.world.entity.ai.attributes.Attribute`

### Fields
- `public static final int MAX_NAME_LENGTH` (= 64)
- `private final double defaultValue`
- `private boolean syncable`
- `private final String descriptionId`

### Methods
- `public double getDefaultValue()`
- `public boolean isClientSyncable()`
- `public Attribute setSyncable(boolean p_22085_)`
- `public double sanitizeValue(double p_22083_)`
- `public String getDescriptionId()`

## AttributeInstance

*class* `net.minecraft.world.entity.ai.attributes.AttributeInstance`

### Fields
- `private final Attribute attribute`
- `private final Map<AttributeModifier.Operation,Set<AttributeModifier>> modifiersByOperation`
- `private final Map<UUID,AttributeModifier> modifierById`
- `private final Set<AttributeModifier> permanentModifiers`
- `private double baseValue`
- `private boolean dirty`
- `private double cachedValue`
- `private final Consumer<AttributeInstance> onDirty`

### Methods
- `public Attribute getAttribute()`
- `public double getBaseValue()`
- `public void setBaseValue(double p_22101_)`
- `public Set<AttributeModifier> getModifiers(AttributeModifier.Operation p_22105_)`
- `public Set<AttributeModifier> getModifiers()`
- `@Nullable public AttributeModifier getModifier(UUID p_22112_)`
- `public boolean hasModifier(AttributeModifier p_22110_)`
- `private void addModifier(AttributeModifier p_22134_)`
- `public void addTransientModifier(AttributeModifier p_22119_)`
- `public void addPermanentModifier(AttributeModifier p_22126_)`
- `protected void setDirty()`
- `private void removeModifier(AttributeModifier p_22131_)`
- `public void removeModifier(UUID p_22121_)`
- `public boolean removePermanentModifier(UUID p_22128_)`
- `public void removeModifiers()`
- `public double getValue()`
- `private double calculateValue()`
- `private Collection<AttributeModifier> getModifiersOrEmpty(AttributeModifier.Operation p_22117_)`
- `public void replaceFrom(AttributeInstance p_22103_)`
- `public CompoundTag save()`
- `public void load(CompoundTag p_22114_)`

## AttributeMap

*class* `net.minecraft.world.entity.ai.attributes.AttributeMap`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Map<Attribute,AttributeInstance> attributes`
- `private final Set<AttributeInstance> dirtyAttributes`
- `private final AttributeSupplier supplier`

### Methods
- `private void onAttributeModified(AttributeInstance p_22158_)`
- `public Set<AttributeInstance> getDirtyAttributes()`
- `public Collection<AttributeInstance> getSyncableAttributes()`
- `@Nullable public AttributeInstance getInstance(Attribute p_22147_)`
- `@Nullable public AttributeInstance getInstance(Holder<Attribute> p_250010_)`
- `public boolean hasAttribute(Attribute p_22172_)`
- `public boolean hasAttribute(Holder<Attribute> p_248893_)`
- `public boolean hasModifier(Attribute p_22155_,  UUID p_22156_)`
- `public boolean hasModifier(Holder<Attribute> p_250299_,  UUID p_250415_)`
- `public double getValue(Attribute p_22182_)`
- `public double getBaseValue(Attribute p_22186_)`
- `public double getModifierValue(Attribute p_22174_,  UUID p_22175_)`
- `public double getModifierValue(Holder<Attribute> p_251534_,  UUID p_250438_)`
- `public void removeAttributeModifiers(com.google.common.collect.Multimap<Attribute,AttributeModifier> p_22162_)`
- `public void addTransientAttributeModifiers(com.google.common.collect.Multimap<Attribute,AttributeModifier> p_22179_)`
- `public void assignValues(AttributeMap p_22160_)`
- `public ListTag save()`
- `public void load(ListTag p_22169_)`

## AttributeModifier

*class* `net.minecraft.world.entity.ai.attributes.AttributeModifier`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final double amount`
- `private final AttributeModifier.Operation operation`
- `private final Supplier<String> nameGetter`
- `private final UUID id`

### Methods
- `public UUID getId()`
- `public String getName()`
- `public AttributeModifier.Operation getOperation()`
- `public double getAmount()`
- `public boolean equals(Object p_22221_)`
- `public int hashCode()`
- `public String toString()`
- `public CompoundTag save()`
- `@Nullable public static AttributeModifier load(CompoundTag p_22213_)`

## Attributes

*class* `net.minecraft.world.entity.ai.attributes.Attributes`

### Fields
- `public static final Attribute MAX_HEALTH`
- `public static final Attribute FOLLOW_RANGE`
- `public static final Attribute KNOCKBACK_RESISTANCE`
- `public static final Attribute MOVEMENT_SPEED`
- `public static final Attribute FLYING_SPEED`
- `public static final Attribute ATTACK_DAMAGE`
- `public static final Attribute ATTACK_KNOCKBACK`
- `public static final Attribute ATTACK_SPEED`
- `public static final Attribute ARMOR`
- `public static final Attribute ARMOR_TOUGHNESS`
- `public static final Attribute LUCK`
- `public static final Attribute MAX_ABSORPTION`
- `public static final Attribute SPAWN_REINFORCEMENTS_CHANCE`
- `public static final Attribute JUMP_STRENGTH`

### Methods
- `private static Attribute register(String p_22291_,  Attribute p_22292_)`

## AttributeSupplier

*class* `net.minecraft.world.entity.ai.attributes.AttributeSupplier`

### Fields
- `private final Map<Attribute,AttributeInstance> instances`

### Methods
- `private AttributeInstance getAttributeInstance(Attribute p_22261_)`
- `public double getValue(Attribute p_22246_)`
- `public double getBaseValue(Attribute p_22254_)`
- `public double getModifierValue(Attribute p_22248_,  UUID p_22249_)`
- `@Nullable public AttributeInstance createInstance(Consumer<AttributeInstance> p_22251_,  Attribute p_22252_)`
- `public static AttributeSupplier.Builder builder()`
- `public boolean hasAttribute(Attribute p_22259_)`
- `public boolean hasModifier(Attribute p_22256_,  UUID p_22257_)`

## AttributeSupplier.Builder

*class* `net.minecraft.world.entity.ai.attributes.AttributeSupplier.Builder`

Enclosing class: AttributeSupplier

### Fields
- `private final Map<Attribute,AttributeInstance> builder`
- `private boolean instanceFrozen`
- `private final List<AttributeSupplier.Builder> others`

### Methods
- `public void combine(AttributeSupplier.Builder other)`
- `public boolean hasAttribute(Attribute attribute)`
- `private AttributeInstance create(Attribute p_22275_)`
- `public AttributeSupplier.Builder add(Attribute p_22267_)`
- `public AttributeSupplier.Builder add(Attribute p_22269_,  double p_22270_)`
- `public AttributeSupplier build()`

## Class AttributeModifier.Operation

*enum* `net.minecraft.world.entity.ai.attributes.Class AttributeModifier.Operation`

Enclosing class: AttributeModifier

### Fields
- `private static final AttributeModifier.Operation[] OPERATIONS`
- `public static final com.mojang.serialization.Codec<AttributeModifier.Operation> CODEC`
- `private final String name`
- `private final int value`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static AttributeModifier.Operation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AttributeModifier.Operation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int toValue()`
- `public static AttributeModifier.Operation fromValue(int p_22237_)`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## DefaultAttributes

*class* `net.minecraft.world.entity.ai.attributes.DefaultAttributes`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Map<EntityType<? extends LivingEntity>,AttributeSupplier> SUPPLIERS`

### Methods
- `public static AttributeSupplier getSupplier(EntityType<? extends LivingEntity> p_22298_)`
- `public static boolean hasSupplier(EntityType<?> p_22302_)`
- `public static void validate()`

## RangedAttribute

*class* `net.minecraft.world.entity.ai.attributes.RangedAttribute`

### Fields
- `private final double minValue`
- `private final double maxValue`

### Inherited fields
- from `net.minecraft.world.entity.ai.attributes.Attribute`: `MAX_NAME_LENGTH`

### Methods
- `public double getMinValue()`
- `public double getMaxValue()`
- `public double sanitizeValue(double p_22315_)`

### Inherited methods
- from `net.minecraft.world.entity.ai.attributes.Attribute`: `getDefaultValue`, `getDescriptionId`, `isClientSyncable`, `setSyncable`
