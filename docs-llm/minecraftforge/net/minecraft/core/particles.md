# net.minecraft.core.particles

- [BlockParticleOption](#blockparticleoption)
- [DustColorTransitionOptions](#dustcolortransitionoptions)
- [DustParticleOptions](#dustparticleoptions)
- [DustParticleOptionsBase](#dustparticleoptionsbase)
- [ItemParticleOption](#itemparticleoption)
- [ParticleGroup](#particlegroup)
- [ParticleOptions](#particleoptions)
- [ParticleOptions.Deserializer](#particleoptions.deserializer)
- [ParticleType](#particletype)
- [ParticleTypes](#particletypes)
- [SculkChargeParticleOptions](#sculkchargeparticleoptions)
- [ShriekParticleOption](#shriekparticleoption)
- [SimpleParticleType](#simpleparticletype)
- [VibrationParticleOption](#vibrationparticleoption)
## BlockParticleOption

*class* `net.minecraft.core.particles.BlockParticleOption`

### Fields
- `public static final ParticleOptions.Deserializer<BlockParticleOption> DESERIALIZER`
- `private final ParticleType<BlockParticleOption> type`
- `private final BlockState state`
- `private BlockPos pos`

### Methods
- `public static com.mojang.serialization.Codec<BlockParticleOption> codec(ParticleType<BlockParticleOption> p_123635_)`
- `public void writeToNetwork(FriendlyByteBuf p_123640_)`
- `public String writeToString()`
- `public ParticleType<BlockParticleOption> getType()`
- `public BlockState getState()`
- `public BlockParticleOption setPos(BlockPos pos)`
- `public BlockPos getPos()`

## DustColorTransitionOptions

*class* `net.minecraft.core.particles.DustColorTransitionOptions`

### Fields
- `public static final org.joml.Vector3f SCULK_PARTICLE_COLOR`
- `public static final DustColorTransitionOptions SCULK_TO_REDSTONE`
- `public static final com.mojang.serialization.Codec<DustColorTransitionOptions> CODEC`
- `public static final ParticleOptions.Deserializer<DustColorTransitionOptions> DESERIALIZER`
- `private final org.joml.Vector3f toColor`

### Inherited fields
- from `net.minecraft.core.particles.DustParticleOptionsBase`: `color`, `MAX_SCALE`, `MIN_SCALE`, `scale`

### Methods
- `public org.joml.Vector3f getFromColor()`
- `public org.joml.Vector3f getToColor()`
- `public void writeToNetwork(FriendlyByteBuf p_175767_)`
- `public String writeToString()`
- `public ParticleType<DustColorTransitionOptions> getType()`

### Inherited methods
- from `net.minecraft.core.particles.DustParticleOptionsBase`: `getColor`, `getScale`, `readVector3f`, `readVector3f`

## DustParticleOptions

*class* `net.minecraft.core.particles.DustParticleOptions`

### Fields
- `public static final org.joml.Vector3f REDSTONE_PARTICLE_COLOR`
- `public static final DustParticleOptions REDSTONE`
- `public static final com.mojang.serialization.Codec<DustParticleOptions> CODEC`
- `public static final ParticleOptions.Deserializer<DustParticleOptions> DESERIALIZER`

### Inherited fields
- from `net.minecraft.core.particles.DustParticleOptionsBase`: `color`, `MAX_SCALE`, `MIN_SCALE`, `scale`

### Methods
- `public ParticleType<DustParticleOptions> getType()`

### Inherited methods
- from `net.minecraft.core.particles.DustParticleOptionsBase`: `getColor`, `getScale`, `readVector3f`, `readVector3f`, `writeToNetwork`, `writeToString`

## DustParticleOptionsBase

*class* `net.minecraft.core.particles.DustParticleOptionsBase`

### Fields
- `public static final float MIN_SCALE` (= 0.009999999776482582f)
- `public static final float MAX_SCALE` (= 4.0f)
- `protected final org.joml.Vector3f color`
- `protected final float scale`

### Methods
- `public static org.joml.Vector3f readVector3f(com.mojang.brigadier.StringReader p_254560_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static org.joml.Vector3f readVector3f(FriendlyByteBuf p_254279_)`
- `public void writeToNetwork(FriendlyByteBuf p_175809_)`
- `public String writeToString()`
- `public org.joml.Vector3f getColor()`
- `public float getScale()`

### Inherited methods
- from `net.minecraft.core.particles.ParticleOptions`: `getType`

## ItemParticleOption

*class* `net.minecraft.core.particles.ItemParticleOption`

### Fields
- `public static final ParticleOptions.Deserializer<ItemParticleOption> DESERIALIZER`
- `private final ParticleType<ItemParticleOption> type`
- `private final ItemStack itemStack`

### Methods
- `public static com.mojang.serialization.Codec<ItemParticleOption> codec(ParticleType<ItemParticleOption> p_123711_)`
- `public void writeToNetwork(FriendlyByteBuf p_123716_)`
- `public String writeToString()`
- `public ParticleType<ItemParticleOption> getType()`
- `public ItemStack getItem()`

## ParticleGroup

*class* `net.minecraft.core.particles.ParticleGroup`

### Fields
- `private final int limit`
- `public static final ParticleGroup SPORE_BLOSSOM`

### Methods
- `public int getLimit()`

## ParticleOptions

*interface* `net.minecraft.core.particles.ParticleOptions`

### Methods
- `ParticleType<?> getType()`
- `void writeToNetwork(FriendlyByteBuf p_123732_)`
- `String writeToString()`

## ParticleOptions.Deserializer

*interface* `net.minecraft.core.particles.ParticleOptions.Deserializer`

Enclosing interface: ParticleOptions

### Methods
- `T fromCommand(ParticleType<T> p_123733_,  com.mojang.brigadier.StringReader p_123734_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException` (deprecated)
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `T fromNetwork(ParticleType<T> p_123735_,  FriendlyByteBuf p_123736_)` (deprecated)

## ParticleType

*class* `net.minecraft.core.particles.ParticleType`

### Fields
- `private final boolean overrideLimiter`
- `private final ParticleOptions.Deserializer<T extends ParticleOptions> deserializer`

### Methods
- `public boolean getOverrideLimiter()`
- `public ParticleOptions.Deserializer<T> getDeserializer()`
- `public abstract com.mojang.serialization.Codec<T> codec()`

## ParticleTypes

*class* `net.minecraft.core.particles.ParticleTypes`

### Fields
- `public static final SimpleParticleType AMBIENT_ENTITY_EFFECT`
- `public static final SimpleParticleType ANGRY_VILLAGER`
- `public static final ParticleType<BlockParticleOption> BLOCK`
- `public static final ParticleType<BlockParticleOption> BLOCK_MARKER`
- `public static final SimpleParticleType BUBBLE`
- `public static final SimpleParticleType CLOUD`
- `public static final SimpleParticleType CRIT`
- `public static final SimpleParticleType DAMAGE_INDICATOR`
- `public static final SimpleParticleType DRAGON_BREATH`
- `public static final SimpleParticleType DRIPPING_LAVA`
- `public static final SimpleParticleType FALLING_LAVA`
- `public static final SimpleParticleType LANDING_LAVA`
- `public static final SimpleParticleType DRIPPING_WATER`
- `public static final SimpleParticleType FALLING_WATER`
- `public static final ParticleType<DustParticleOptions> DUST`
- `public static final ParticleType<DustColorTransitionOptions> DUST_COLOR_TRANSITION`
- `public static final SimpleParticleType EFFECT`
- `public static final SimpleParticleType ELDER_GUARDIAN`
- `public static final SimpleParticleType ENCHANTED_HIT`
- `public static final SimpleParticleType ENCHANT`
- `public static final SimpleParticleType END_ROD`
- `public static final SimpleParticleType ENTITY_EFFECT`
- `public static final SimpleParticleType EXPLOSION_EMITTER`
- `public static final SimpleParticleType EXPLOSION`
- `public static final SimpleParticleType SONIC_BOOM`
- `public static final ParticleType<BlockParticleOption> FALLING_DUST`
- `public static final SimpleParticleType FIREWORK`
- `public static final SimpleParticleType FISHING`
- `public static final SimpleParticleType FLAME`
- `public static final SimpleParticleType CHERRY_LEAVES`
- `public static final SimpleParticleType SCULK_SOUL`
- `public static final ParticleType<SculkChargeParticleOptions> SCULK_CHARGE`
- `public static final SimpleParticleType SCULK_CHARGE_POP`
- `public static final SimpleParticleType SOUL_FIRE_FLAME`
- `public static final SimpleParticleType SOUL`
- `public static final SimpleParticleType FLASH`
- `public static final SimpleParticleType HAPPY_VILLAGER`
- `public static final SimpleParticleType COMPOSTER`
- `public static final SimpleParticleType HEART`
- `public static final SimpleParticleType INSTANT_EFFECT`
- `public static final ParticleType<ItemParticleOption> ITEM`
- `public static final ParticleType<VibrationParticleOption> VIBRATION`
- `public static final SimpleParticleType ITEM_SLIME`
- `public static final SimpleParticleType ITEM_SNOWBALL`
- `public static final SimpleParticleType LARGE_SMOKE`
- `public static final SimpleParticleType LAVA`
- `public static final SimpleParticleType MYCELIUM`
- `public static final SimpleParticleType NOTE`
- `public static final SimpleParticleType POOF`
- `public static final SimpleParticleType PORTAL`
- `public static final SimpleParticleType RAIN`
- `public static final SimpleParticleType SMOKE`
- `public static final SimpleParticleType SNEEZE`
- `public static final SimpleParticleType SPIT`
- `public static final SimpleParticleType SQUID_INK`
- `public static final SimpleParticleType SWEEP_ATTACK`
- `public static final SimpleParticleType TOTEM_OF_UNDYING`
- `public static final SimpleParticleType UNDERWATER`
- `public static final SimpleParticleType SPLASH`
- `public static final SimpleParticleType WITCH`
- `public static final SimpleParticleType BUBBLE_POP`
- `public static final SimpleParticleType CURRENT_DOWN`
- `public static final SimpleParticleType BUBBLE_COLUMN_UP`
- `public static final SimpleParticleType NAUTILUS`
- `public static final SimpleParticleType DOLPHIN`
- `public static final SimpleParticleType CAMPFIRE_COSY_SMOKE`
- `public static final SimpleParticleType CAMPFIRE_SIGNAL_SMOKE`
- `public static final SimpleParticleType DRIPPING_HONEY`
- `public static final SimpleParticleType FALLING_HONEY`
- `public static final SimpleParticleType LANDING_HONEY`
- `public static final SimpleParticleType FALLING_NECTAR`
- `public static final SimpleParticleType FALLING_SPORE_BLOSSOM`
- `public static final SimpleParticleType ASH`
- `public static final SimpleParticleType CRIMSON_SPORE`
- `public static final SimpleParticleType WARPED_SPORE`
- `public static final SimpleParticleType SPORE_BLOSSOM_AIR`
- `public static final SimpleParticleType DRIPPING_OBSIDIAN_TEAR`
- `public static final SimpleParticleType FALLING_OBSIDIAN_TEAR`
- `public static final SimpleParticleType LANDING_OBSIDIAN_TEAR`
- `public static final SimpleParticleType REVERSE_PORTAL`
- `public static final SimpleParticleType WHITE_ASH`
- `public static final SimpleParticleType SMALL_FLAME`
- `public static final SimpleParticleType SNOWFLAKE`
- `public static final SimpleParticleType DRIPPING_DRIPSTONE_LAVA`
- `public static final SimpleParticleType FALLING_DRIPSTONE_LAVA`
- `public static final SimpleParticleType DRIPPING_DRIPSTONE_WATER`
- `public static final SimpleParticleType FALLING_DRIPSTONE_WATER`
- `public static final SimpleParticleType GLOW_SQUID_INK`
- `public static final SimpleParticleType GLOW`
- `public static final SimpleParticleType WAX_ON`
- `public static final SimpleParticleType WAX_OFF`
- `public static final SimpleParticleType ELECTRIC_SPARK`
- `public static final SimpleParticleType SCRAPE`
- `public static final ParticleType<ShriekParticleOption> SHRIEK`
- `public static final SimpleParticleType EGG_CRACK`
- `public static final com.mojang.serialization.Codec<ParticleOptions> CODEC`

### Methods
- `private static SimpleParticleType register(String p_123825_,  boolean p_123826_)`
- `private static <T extends ParticleOptions> ParticleType<T> register(String p_235906_,  boolean p_235907_,  ParticleOptions.Deserializer<T> p_235908_,  Function<ParticleType<T>,com.mojang.serialization.Codec<T>> p_235909_)`

## SculkChargeParticleOptions

*record* `net.minecraft.core.particles.SculkChargeParticleOptions`

### Fields
- `private final float roll`
  The field for the roll record component.
- `public static final com.mojang.serialization.Codec<SculkChargeParticleOptions> CODEC`
- `public static final ParticleOptions.Deserializer<SculkChargeParticleOptions> DESERIALIZER`

### Methods
- `public ParticleType<SculkChargeParticleOptions> getType()`
- `public void writeToNetwork(FriendlyByteBuf p_235924_)`
- `public String writeToString()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public float roll()`
  Returns the value of the roll record component.
  - returns: the value of the roll record component

## ShriekParticleOption

*class* `net.minecraft.core.particles.ShriekParticleOption`

### Fields
- `public static final com.mojang.serialization.Codec<ShriekParticleOption> CODEC`
- `public static final ParticleOptions.Deserializer<ShriekParticleOption> DESERIALIZER`
- `private final int delay`

### Methods
- `public void writeToNetwork(FriendlyByteBuf p_235956_)`
- `public String writeToString()`
- `public ParticleType<ShriekParticleOption> getType()`
- `public int getDelay()`

## SimpleParticleType

*class* `net.minecraft.core.particles.SimpleParticleType`

### Fields
- `private static final ParticleOptions.Deserializer<SimpleParticleType> DESERIALIZER`
- `private final com.mojang.serialization.Codec<SimpleParticleType> codec`

### Methods
- `public SimpleParticleType getType()`
- `public com.mojang.serialization.Codec<SimpleParticleType> codec()`
- `public void writeToNetwork(FriendlyByteBuf p_123840_)`
- `public String writeToString()`

### Inherited methods
- from `net.minecraft.core.particles.ParticleType`: `getDeserializer`, `getOverrideLimiter`

## VibrationParticleOption

*class* `net.minecraft.core.particles.VibrationParticleOption`

### Fields
- `public static final com.mojang.serialization.Codec<VibrationParticleOption> CODEC`
- `public static final ParticleOptions.Deserializer<VibrationParticleOption> DESERIALIZER`
- `private final PositionSource destination`
- `private final int arrivalInTicks`

### Methods
- `public void writeToNetwork(FriendlyByteBuf p_175854_)`
- `public String writeToString()`
- `public ParticleType<VibrationParticleOption> getType()`
- `public PositionSource getDestination()`
- `public int getArrivalInTicks()`
