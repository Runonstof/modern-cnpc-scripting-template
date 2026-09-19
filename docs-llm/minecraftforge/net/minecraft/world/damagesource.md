# net.minecraft.world.damagesource

- [Class DamageEffects](#class-damageeffects)
- [Class DamageScaling](#class-damagescaling)
- [Class DeathMessageType](#class-deathmessagetype)
- [CombatEntry](#combatentry)
- [CombatRules](#combatrules)
- [CombatTracker](#combattracker)
- [DamageSource](#damagesource)
- [DamageSources](#damagesources)
- [DamageType](#damagetype)
- [DamageTypes](#damagetypes)
- [FallLocation](#falllocation)
## Class DamageEffects

*enum* `net.minecraft.world.damagesource.Class DamageEffects`

### Fields
- `public static final com.mojang.serialization.Codec<DamageEffects> CODEC`
- `private final String id`
- `private final SoundEvent sound`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DamageEffects[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DamageEffects valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public SoundEvent sound()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class DamageScaling

*enum* `net.minecraft.world.damagesource.Class DamageScaling`

### Fields
- `public static final com.mojang.serialization.Codec<DamageScaling> CODEC`
- `private final String id`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DamageScaling[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DamageScaling valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class DeathMessageType

*enum* `net.minecraft.world.damagesource.Class DeathMessageType`

### Fields
- `public static final com.mojang.serialization.Codec<DeathMessageType> CODEC`
- `private final String id`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DeathMessageType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DeathMessageType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CombatEntry

*record* `net.minecraft.world.damagesource.CombatEntry`

### Fields
- `private final DamageSource source`
  The field for the source record component.
- `private final float damage`
  The field for the damage record component.
- `@Nullable private final FallLocation fallLocation`
  The field for the fallLocation record component.
- `private final float fallDistance`
  The field for the fallDistance record component.

### Methods
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
- `public DamageSource source()`
  Returns the value of the source record component.
  - returns: the value of the source record component
- `public float damage()`
  Returns the value of the damage record component.
  - returns: the value of the damage record component
- `@Nullable public FallLocation fallLocation()`
  Returns the value of the fallLocation record component.
  - returns: the value of the fallLocation record component
- `public float fallDistance()`
  Returns the value of the fallDistance record component.
  - returns: the value of the fallDistance record component

## CombatRules

*class* `net.minecraft.world.damagesource.CombatRules`

### Fields
- `public static final float MAX_ARMOR` (= 20.0f)
- `public static final float ARMOR_PROTECTION_DIVIDER` (= 25.0f)
- `public static final float BASE_ARMOR_TOUGHNESS` (= 2.0f)
- `public static final float MIN_ARMOR_RATIO` (= 0.20000000298023224f)
- `private static final int NUM_ARMOR_ITEMS` (= 4)

### Methods
- `public static float getDamageAfterAbsorb(float p_19273_,  float p_19274_,  float p_19275_)`
- `public static float getDamageAfterMagicAbsorb(float p_19270_,  float p_19271_)`

## CombatTracker

*class* `net.minecraft.world.damagesource.CombatTracker`

### Fields
- `public static final int RESET_DAMAGE_STATUS_TIME` (= 100)
- `public static final int RESET_COMBAT_STATUS_TIME` (= 300)
- `private static final Style INTENTIONAL_GAME_DESIGN_STYLE`
- `private final List<CombatEntry> entries`
- `private final LivingEntity mob`
- `private int lastDamageTime`
- `private int combatStartTime`
- `private int combatEndTime`
- `private boolean inCombat`
- `private boolean takingDamage`

### Methods
- `public void recordDamage(DamageSource p_289533_,  float p_289559_)`
- `private static boolean shouldEnterCombat(DamageSource p_289554_)`
- `private Component getMessageForAssistedFall(Entity p_289547_,  Component p_289532_,  String p_289555_,  String p_289548_)`
- `private Component getFallMessage(CombatEntry p_289570_,  @Nullable  Entity p_289561_)`
- `@Nullable private static Component getDisplayName(@Nullable  Entity p_289557_)`
- `public Component getDeathMessage()`
- `@Nullable private CombatEntry getMostSignificantFall()`
- `public int getCombatDuration()`
- `public void recheckStatus()`

## DamageSource

*class* `net.minecraft.world.damagesource.DamageSource`

### Fields
- `private final Holder<DamageType> type`
- `@Nullable private final Entity causingEntity`
- `@Nullable private final Entity directEntity`
- `@Nullable private final Vec3 damageSourcePosition`

### Methods
- `public String toString()`
- `public float getFoodExhaustion()`
- `public boolean isIndirect()`
- `@Nullable public Entity getDirectEntity()`
- `@Nullable public Entity getEntity()`
- `public Component getLocalizedDeathMessage(LivingEntity p_19343_)`
- `public String getMsgId()`
- `public boolean scalesWithDifficulty()`
- `public boolean isCreativePlayer()`
- `@Nullable public Vec3 getSourcePosition()`
- `@Nullable public Vec3 sourcePositionRaw()`
- `public boolean is(TagKey<DamageType> p_270890_)`
- `public boolean is(ResourceKey<DamageType> p_276108_)`
- `public DamageType type()`
- `public Holder<DamageType> typeHolder()`

## DamageSources

*class* `net.minecraft.world.damagesource.DamageSources`

### Fields
- `private final Registry<DamageType> damageTypes`
- `private final DamageSource inFire`
- `private final DamageSource lightningBolt`
- `private final DamageSource onFire`
- `private final DamageSource lava`
- `private final DamageSource hotFloor`
- `private final DamageSource inWall`
- `private final DamageSource cramming`
- `private final DamageSource drown`
- `private final DamageSource starve`
- `private final DamageSource cactus`
- `private final DamageSource fall`
- `private final DamageSource flyIntoWall`
- `private final DamageSource fellOutOfWorld`
- `private final DamageSource generic`
- `private final DamageSource magic`
- `private final DamageSource wither`
- `private final DamageSource dragonBreath`
- `private final DamageSource dryOut`
- `private final DamageSource sweetBerryBush`
- `private final DamageSource freeze`
- `private final DamageSource stalagmite`
- `private final DamageSource outsideBorder`
- `private final DamageSource genericKill`

### Methods
- `private DamageSource source(ResourceKey<DamageType> p_270957_)`
- `private DamageSource source(ResourceKey<DamageType> p_270142_,  @Nullable  Entity p_270696_)`
- `private DamageSource source(ResourceKey<DamageType> p_270076_,  @Nullable  Entity p_270656_,  @Nullable  Entity p_270242_)`
- `public DamageSource inFire()`
- `public DamageSource lightningBolt()`
- `public DamageSource onFire()`
- `public DamageSource lava()`
- `public DamageSource hotFloor()`
- `public DamageSource inWall()`
- `public DamageSource cramming()`
- `public DamageSource drown()`
- `public DamageSource starve()`
- `public DamageSource cactus()`
- `public DamageSource fall()`
- `public DamageSource flyIntoWall()`
- `public DamageSource fellOutOfWorld()`
- `public DamageSource generic()`
- `public DamageSource magic()`
- `public DamageSource wither()`
- `public DamageSource dragonBreath()`
- `public DamageSource dryOut()`
- `public DamageSource sweetBerryBush()`
- `public DamageSource freeze()`
- `public DamageSource stalagmite()`
- `public DamageSource fallingBlock(Entity p_270643_)`
- `public DamageSource anvil(Entity p_270112_)`
- `public DamageSource fallingStalactite(Entity p_270720_)`
- `public DamageSource sting(LivingEntity p_270689_)`
- `public DamageSource mobAttack(LivingEntity p_270357_)`
- `public DamageSource noAggroMobAttack(LivingEntity p_270502_)`
- `public DamageSource playerAttack(Player p_270723_)`
- `public DamageSource arrow(AbstractArrow p_270570_,  @Nullable  Entity p_270857_)`
- `public DamageSource trident(Entity p_270146_,  @Nullable  Entity p_270358_)`
- `public DamageSource mobProjectile(Entity p_270210_,  @Nullable  LivingEntity p_270757_)`
- `public DamageSource fireworks(FireworkRocketEntity p_270571_,  @Nullable  Entity p_270768_)`
- `public DamageSource fireball(Fireball p_270147_,  @Nullable  Entity p_270824_)`
- `public DamageSource witherSkull(WitherSkull p_270367_,  Entity p_270887_)`
- `public DamageSource thrown(Entity p_270388_,  @Nullable  Entity p_270485_)`
- `public DamageSource indirectMagic(Entity p_270560_,  @Nullable  Entity p_270646_)`
- `public DamageSource thorns(Entity p_270917_)`
- `public DamageSource explosion(@Nullable  Explosion p_270369_)`
- `public DamageSource explosion(@Nullable  Entity p_271016_,  @Nullable  Entity p_270814_)`
- `public DamageSource sonicBoom(Entity p_270401_)`
- `public DamageSource badRespawnPointExplosion(Vec3 p_270175_)`
- `public DamageSource outOfBorder()`
- `public DamageSource genericKill()`

## DamageType

*record* `net.minecraft.world.damagesource.DamageType`

### Fields
- `private final String msgId`
  The field for the msgId record component.
- `private final DamageScaling scaling`
  The field for the scaling record component.
- `private final float exhaustion`
  The field for the exhaustion record component.
- `private final DamageEffects effects`
  The field for the effects record component.
- `private final DeathMessageType deathMessageType`
  The field for the deathMessageType record component.
- `public static final com.mojang.serialization.Codec<DamageType> CODEC`

### Methods
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
- `public String msgId()`
  Returns the value of the msgId record component.
  - returns: the value of the msgId record component
- `public DamageScaling scaling()`
  Returns the value of the scaling record component.
  - returns: the value of the scaling record component
- `public float exhaustion()`
  Returns the value of the exhaustion record component.
  - returns: the value of the exhaustion record component
- `public DamageEffects effects()`
  Returns the value of the effects record component.
  - returns: the value of the effects record component
- `public DeathMessageType deathMessageType()`
  Returns the value of the deathMessageType record component.
  - returns: the value of the deathMessageType record component

## DamageTypes

*interface* `net.minecraft.world.damagesource.DamageTypes`

### Fields
- `static final ResourceKey<DamageType> IN_FIRE`
- `static final ResourceKey<DamageType> LIGHTNING_BOLT`
- `static final ResourceKey<DamageType> ON_FIRE`
- `static final ResourceKey<DamageType> LAVA`
- `static final ResourceKey<DamageType> HOT_FLOOR`
- `static final ResourceKey<DamageType> IN_WALL`
- `static final ResourceKey<DamageType> CRAMMING`
- `static final ResourceKey<DamageType> DROWN`
- `static final ResourceKey<DamageType> STARVE`
- `static final ResourceKey<DamageType> CACTUS`
- `static final ResourceKey<DamageType> FALL`
- `static final ResourceKey<DamageType> FLY_INTO_WALL`
- `static final ResourceKey<DamageType> FELL_OUT_OF_WORLD`
- `static final ResourceKey<DamageType> GENERIC`
- `static final ResourceKey<DamageType> MAGIC`
- `static final ResourceKey<DamageType> WITHER`
- `static final ResourceKey<DamageType> DRAGON_BREATH`
- `static final ResourceKey<DamageType> DRY_OUT`
- `static final ResourceKey<DamageType> SWEET_BERRY_BUSH`
- `static final ResourceKey<DamageType> FREEZE`
- `static final ResourceKey<DamageType> STALAGMITE`
- `static final ResourceKey<DamageType> FALLING_BLOCK`
- `static final ResourceKey<DamageType> FALLING_ANVIL`
- `static final ResourceKey<DamageType> FALLING_STALACTITE`
- `static final ResourceKey<DamageType> STING`
- `static final ResourceKey<DamageType> MOB_ATTACK`
- `static final ResourceKey<DamageType> MOB_ATTACK_NO_AGGRO`
- `static final ResourceKey<DamageType> PLAYER_ATTACK`
- `static final ResourceKey<DamageType> ARROW`
- `static final ResourceKey<DamageType> TRIDENT`
- `static final ResourceKey<DamageType> MOB_PROJECTILE`
- `static final ResourceKey<DamageType> FIREWORKS`
- `static final ResourceKey<DamageType> FIREBALL`
- `static final ResourceKey<DamageType> UNATTRIBUTED_FIREBALL`
- `static final ResourceKey<DamageType> WITHER_SKULL`
- `static final ResourceKey<DamageType> THROWN`
- `static final ResourceKey<DamageType> INDIRECT_MAGIC`
- `static final ResourceKey<DamageType> THORNS`
- `static final ResourceKey<DamageType> EXPLOSION`
- `static final ResourceKey<DamageType> PLAYER_EXPLOSION`
- `static final ResourceKey<DamageType> SONIC_BOOM`
- `static final ResourceKey<DamageType> BAD_RESPAWN_POINT`
- `static final ResourceKey<DamageType> OUTSIDE_BORDER`
- `static final ResourceKey<DamageType> GENERIC_KILL`

### Methods
- `static void bootstrap(BootstapContext<DamageType> p_270331_)`

## FallLocation

*record* `net.minecraft.world.damagesource.FallLocation`

### Fields
- `private final String id`
  The field for the id record component.
- `public static final FallLocation GENERIC`
- `public static final FallLocation LADDER`
- `public static final FallLocation VINES`
- `public static final FallLocation WEEPING_VINES`
- `public static final FallLocation TWISTING_VINES`
- `public static final FallLocation SCAFFOLDING`
- `public static final FallLocation OTHER_CLIMBABLE`
- `public static final FallLocation WATER`

### Methods
- `public static FallLocation blockToFallLocation(BlockState p_289530_)`
- `@Nullable public static FallLocation getCurrentFallLocation(LivingEntity p_289566_)`
- `public String languageKey()`
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
- `public String id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
