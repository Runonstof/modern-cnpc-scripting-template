# net.minecraft.util

- [ActionResult](#actionresult)
- [BitArray](#bitarray)
- [BlockRenderLayer](#blockrenderlayer)
- [ChatAllowedCharacters](#chatallowedcharacters)
- [ClassInheritanceMultiMap](#classinheritancemultimap)
- [CombatEntry](#combatentry)
- [CombatRules](#combatrules)
- [CombatTracker](#combattracker)
- [CooldownTracker](#cooldowntracker)
- [CooldownTrackerServer](#cooldowntrackerserver)
- [CryptManager](#cryptmanager)
- [DamageSource](#damagesource)
- [EnchantmentNameParts](#enchantmentnameparts)
- [EntityDamageSource](#entitydamagesource)
- [EntityDamageSourceIndirect](#entitydamagesourceindirect)
- [EntitySelectors](#entityselectors)
- [EntitySelectors.ArmoredMob](#entityselectors.armoredmob)
- [EnumActionResult](#enumactionresult)
- [EnumBlockRenderType](#enumblockrendertype)
- [EnumFacing](#enumfacing)
- [EnumFacing.Axis](#enumfacing.axis)
- [EnumFacing.AxisDirection](#enumfacing.axisdirection)
- [EnumFacing.Plane](#enumfacing.plane)
- [EnumHand](#enumhand)
- [EnumHandSide](#enumhandside)
- [EnumParticleTypes](#enumparticletypes)
- [EnumTypeAdapterFactory](#enumtypeadapterfactory)
- [FoodStats](#foodstats)
- [FrameTimer](#frametimer)
- [HttpUtil](#httputil)
- [IJsonSerializable](#ijsonserializable)
- [IntegerCache](#integercache)
- [IntHashMap](#inthashmap)
- [IntIdentityHashBiMap](#intidentityhashbimap)
- [IObjectIntIterable](#iobjectintiterable)
- [IProgressUpdate](#iprogressupdate)
- [IStringSerializable](#istringserializable)
- [ITabCompleter](#itabcompleter)
- [IThreadListener](#ithreadlistener)
- [ITickable](#itickable)
- [JsonUtils](#jsonutils)
- [LazyLoadBase](#lazyloadbase)
- [LoggingPrintStream](#loggingprintstream)
- [LowerStringMap](#lowerstringmap)
- [MapPopulator](#mappopulator)
- [MinecraftError](#minecrafterror)
- [Mirror](#mirror)
- [MouseFilter](#mousefilter)
- [MouseHelper](#mousehelper)
- [MovementInput](#movementinput)
- [MovementInputFromOptions](#movementinputfromoptions)
- [NonNullList](#nonnulllist)
- [ObjectIntIdentityMap](#objectintidentitymap)
- [ReportedException](#reportedexception)
- [ResourceLocation](#resourcelocation)
- [ResourceLocation.Serializer](#resourcelocation.serializer)
- [Rotation](#rotation)
- [ScreenShotHelper](#screenshothelper)
- [ServerRecipeBookHelper](#serverrecipebookhelper)
- [Session](#session)
- [Session.Type](#session.type)
- [SoundCategory](#soundcategory)
- [SoundEvent](#soundevent)
- [StringUtils](#stringutils)
- [TabCompleter](#tabcompleter)
- [Timer](#timer)
- [Tuple](#tuple)
- [TupleIntJsonSerializable](#tupleintjsonserializable)
- [Util](#util)
- [Util.EnumOS](#util.enumos)
- [WeightedRandom](#weightedrandom)
- [WeightedRandom.Item](#weightedrandom.item)
- [WeightedSpawnerEntity](#weightedspawnerentity)
## ActionResult

*class* `net.minecraft.util.ActionResult`

### Methods
- `public EnumActionResult getType()`
- `public T getResult()`
- `public static <T> ActionResult<T> newResult(EnumActionResult result,  T value)`

## BitArray

*class* `net.minecraft.util.BitArray`

### Methods
- `public void setAt(int index,  int value)`
- `public int getAt(int index)`
- `public long[] getBackingLongArray()`
- `public int size()`

## BlockRenderLayer

*enum* `net.minecraft.util.BlockRenderLayer`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<BlockRenderLayer>

### Fields
- `public static final BlockRenderLayer SOLID`
- `public static final BlockRenderLayer CUTOUT_MIPPED`
- `public static final BlockRenderLayer CUTOUT`
- `public static final BlockRenderLayer TRANSLUCENT`

### Methods
- `public static BlockRenderLayer[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (BlockRenderLayer c : BlockRenderLayer.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static BlockRenderLayer valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String toString()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## ChatAllowedCharacters

*class* `net.minecraft.util.ChatAllowedCharacters`

### Fields
- `public static final Level NETTY_LEAK_DETECTION`
- `public static final char[] ILLEGAL_STRUCTURE_CHARACTERS`
- `public static final char[] ILLEGAL_FILE_CHARACTERS`

### Methods
- `public static boolean isAllowedCharacter(char character)`
- `public static java.lang.String filterAllowedCharacters(java.lang.String input)`

## ClassInheritanceMultiMap

*class* `net.minecraft.util.ClassInheritanceMultiMap`

All Implemented Interfaces: java.lang.Iterable<T>, java.util.Collection<T>, java.util.Set<T>

### Methods
- `protected void createLookup(java.lang.Class<?> clazz)`
- `protected java.lang.Class<?> initializeClassLookup(java.lang.Class<?> clazz)`
- `public boolean add(T p_add_1_)`
- `public boolean remove(java.lang.Object p_remove_1_)`
- `public boolean contains(java.lang.Object p_contains_1_)`
- `public <S> java.lang.Iterable<S> getByClass(java.lang.Class<S> clazz)`
- `public java.util.Iterator<T> iterator()`
- `public int size()`

### Inherited methods
- from `java.util.AbstractSet`: `equals`, `hashCode`, `removeAll`
- from `java.util.AbstractCollection`: `addAll`, `clear`, `containsAll`, `isEmpty`, `retainAll`, `toArray`, `toArray`, `toString`
- from `java.util.Set`: `addAll`, `clear`, `containsAll`, `isEmpty`, `retainAll`, `spliterator`, `toArray`, `toArray`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`
- from `java.lang.Iterable`: `forEach`

## CombatEntry

*class* `net.minecraft.util.CombatEntry`

### Methods
- `public DamageSource getDamageSrc()`
- `public float getDamage()`
- `public boolean isLivingDamageSrc()`
- `public java.lang.String getFallSuffix()`
- `public ITextComponent getDamageSrcDisplayName()`
- `public float getDamageAmount()`

## CombatRules

*class* `net.minecraft.util.CombatRules`

### Methods
- `public static float getDamageAfterAbsorb(float damage,  float totalArmor,  float toughnessAttribute)`
- `public static float getDamageAfterMagicAbsorb(float damage,  float enchantModifiers)`

## CombatTracker

*class* `net.minecraft.util.CombatTracker`

### Methods
- `public void calculateFallSuffix()`
- `public void trackDamage(DamageSource damageSrc,  float healthIn,  float damageAmount)`
- `public ITextComponent getDeathMessage()`
- `public EntityLivingBase getBestAttacker()`
- `public int getCombatDuration()`
- `public void reset()`
- `public EntityLivingBase getFighter()`

## CooldownTracker

*class* `net.minecraft.util.CooldownTracker`

### Methods
- `public boolean hasCooldown(Item itemIn)`
- `public float getCooldown(Item itemIn,  float partialTicks)`
- `public void tick()`
- `public void setCooldown(Item itemIn,  int ticksIn)`
- `public void removeCooldown(Item itemIn)`
- `protected void notifyOnSet(Item itemIn,  int ticksIn)`
- `protected void notifyOnRemove(Item itemIn)`

## CooldownTrackerServer

*class* `net.minecraft.util.CooldownTrackerServer`

### Methods
- `protected void notifyOnSet(Item itemIn,  int ticksIn)`
- `protected void notifyOnRemove(Item itemIn)`

### Inherited methods
- from `net.minecraft.util.CooldownTracker`: `getCooldown`, `hasCooldown`, `removeCooldown`, `setCooldown`, `tick`

## CryptManager

*class* `net.minecraft.util.CryptManager`

### Methods
- `public static javax.crypto.SecretKey createNewSharedKey()`
- `public static java.security.KeyPair generateKeyPair()`
- `public static byte[] getServerIdHash(java.lang.String serverId,  java.security.PublicKey publicKey,  javax.crypto.SecretKey secretKey)`
- `public static java.security.PublicKey decodePublicKey(byte[] encodedKey)`
- `public static javax.crypto.SecretKey decryptSharedKey(java.security.PrivateKey key,  byte[] secretKeyEncrypted)`
- `public static byte[] encryptData(java.security.Key key,  byte[] data)`
- `public static byte[] decryptData(java.security.Key key,  byte[] data)`
- `public static javax.crypto.Cipher createNetCipherInstance(int opMode,  java.security.Key key)`

## DamageSource

*class* `net.minecraft.util.DamageSource`

### Fields
- `public static final DamageSource IN_FIRE`
- `public static final DamageSource LIGHTNING_BOLT`
- `public static final DamageSource ON_FIRE`
- `public static final DamageSource LAVA`
- `public static final DamageSource HOT_FLOOR`
- `public static final DamageSource IN_WALL`
- `public static final DamageSource CRAMMING`
- `public static final DamageSource DROWN`
- `public static final DamageSource STARVE`
- `public static final DamageSource CACTUS`
- `public static final DamageSource FALL`
- `public static final DamageSource FLY_INTO_WALL`
- `public static final DamageSource OUT_OF_WORLD`
- `public static final DamageSource GENERIC`
- `public static final DamageSource MAGIC`
- `public static final DamageSource WITHER`
- `public static final DamageSource ANVIL`
- `public static final DamageSource FALLING_BLOCK`
- `public static final DamageSource DRAGON_BREATH`
- `public static final DamageSource FIREWORKS`
- `public java.lang.String damageType`

### Methods
- `public static DamageSource causeMobDamage(EntityLivingBase mob)`
- `public static DamageSource causeIndirectDamage(Entity source,  EntityLivingBase indirectEntityIn)`
- `public static DamageSource causePlayerDamage(EntityPlayer player)`
- `public static DamageSource causeArrowDamage(EntityArrow arrow,  Entity indirectEntityIn)`
- `public static DamageSource causeFireballDamage(EntityFireball fireball,  Entity indirectEntityIn)`
- `public static DamageSource causeThrownDamage(Entity source,  Entity indirectEntityIn)`
- `public static DamageSource causeIndirectMagicDamage(Entity source,  Entity indirectEntityIn)`
- `public static DamageSource causeThornsDamage(Entity source)`
- `public static DamageSource causeExplosionDamage(Explosion explosionIn)`
- `public static DamageSource causeExplosionDamage(EntityLivingBase entityLivingBaseIn)`
- `public boolean isProjectile()`
- `public DamageSource setProjectile()`
- `public boolean isExplosion()`
- `public DamageSource setExplosion()`
- `public boolean isUnblockable()`
- `public float getHungerDamage()`
- `public boolean canHarmInCreative()`
- `public boolean isDamageAbsolute()`
- `public Entity getImmediateSource()`
- `public Entity getTrueSource()`
- `public DamageSource setDamageBypassesArmor()`
- `public DamageSource setDamageAllowedInCreativeMode()`
- `public DamageSource setDamageIsAbsolute()`
- `public DamageSource setFireDamage()`
- `public ITextComponent getDeathMessage(EntityLivingBase entityLivingBaseIn)`
- `public boolean isFireDamage()`
- `public java.lang.String getDamageType()`
- `public DamageSource setDifficultyScaled()`
- `public boolean isDifficultyScaled()`
- `public boolean isMagicDamage()`
- `public DamageSource setMagicDamage()`
- `public boolean isCreativePlayer()`
- `public Vec3d getDamageLocation()`

## EnchantmentNameParts

*class* `net.minecraft.util.EnchantmentNameParts`

### Methods
- `public static EnchantmentNameParts getInstance()`
- `public java.lang.String generateNewRandomName(FontRenderer fontRendererIn,  int length)`
- `public void reseedRandomGenerator(long seed)`

## EntityDamageSource

*class* `net.minecraft.util.EntityDamageSource`

### Fields
- `protected Entity damageSourceEntity`

### Inherited fields
- from `net.minecraft.util.DamageSource`: `ANVIL`, `CACTUS`, `CRAMMING`, `damageType`, `DRAGON_BREATH`, `DROWN`, `FALL`, `FALLING_BLOCK`, `FIREWORKS`, `FLY_INTO_WALL`, `GENERIC`, `HOT_FLOOR`, `IN_FIRE`, `IN_WALL`, `LAVA`, `LIGHTNING_BOLT`, `MAGIC`, `ON_FIRE`, `OUT_OF_WORLD`, `STARVE`, `WITHER`

### Methods
- `public EntityDamageSource setIsThornsDamage()`
- `public boolean getIsThornsDamage()`
- `public Entity getTrueSource()`
- `public ITextComponent getDeathMessage(EntityLivingBase entityLivingBaseIn)`
- `public boolean isDifficultyScaled()`
- `public Vec3d getDamageLocation()`

### Inherited methods
- from `net.minecraft.util.DamageSource`: `canHarmInCreative`, `causeArrowDamage`, `causeExplosionDamage`, `causeExplosionDamage`, `causeFireballDamage`, `causeIndirectDamage`, `causeIndirectMagicDamage`, `causeMobDamage`, `causePlayerDamage`, `causeThornsDamage`, `causeThrownDamage`, `getDamageType`, `getHungerDamage`, `getImmediateSource`, `isCreativePlayer`, `isDamageAbsolute`, `isExplosion`, `isFireDamage`, `isMagicDamage`, `isProjectile`, `isUnblockable`, `setDamageAllowedInCreativeMode`, `setDamageBypassesArmor`, `setDamageIsAbsolute`, `setDifficultyScaled`, `setExplosion`, `setFireDamage`, `setMagicDamage`, `setProjectile`

## EntityDamageSourceIndirect

*class* `net.minecraft.util.EntityDamageSourceIndirect`

### Inherited fields
- from `net.minecraft.util.EntityDamageSource`: `damageSourceEntity`
- from `net.minecraft.util.DamageSource`: `ANVIL`, `CACTUS`, `CRAMMING`, `damageType`, `DRAGON_BREATH`, `DROWN`, `FALL`, `FALLING_BLOCK`, `FIREWORKS`, `FLY_INTO_WALL`, `GENERIC`, `HOT_FLOOR`, `IN_FIRE`, `IN_WALL`, `LAVA`, `LIGHTNING_BOLT`, `MAGIC`, `ON_FIRE`, `OUT_OF_WORLD`, `STARVE`, `WITHER`

### Methods
- `public Entity getImmediateSource()`
- `public Entity getTrueSource()`
- `public ITextComponent getDeathMessage(EntityLivingBase entityLivingBaseIn)`

### Inherited methods
- from `net.minecraft.util.EntityDamageSource`: `getDamageLocation`, `getIsThornsDamage`, `isDifficultyScaled`, `setIsThornsDamage`
- from `net.minecraft.util.DamageSource`: `canHarmInCreative`, `causeArrowDamage`, `causeExplosionDamage`, `causeExplosionDamage`, `causeFireballDamage`, `causeIndirectDamage`, `causeIndirectMagicDamage`, `causeMobDamage`, `causePlayerDamage`, `causeThornsDamage`, `causeThrownDamage`, `getDamageType`, `getHungerDamage`, `isCreativePlayer`, `isDamageAbsolute`, `isExplosion`, `isFireDamage`, `isMagicDamage`, `isProjectile`, `isUnblockable`, `setDamageAllowedInCreativeMode`, `setDamageBypassesArmor`, `setDamageIsAbsolute`, `setDifficultyScaled`, `setExplosion`, `setFireDamage`, `setMagicDamage`, `setProjectile`

## EntitySelectors

*class* `net.minecraft.util.EntitySelectors`

### Fields
- `public static final <any> IS_ALIVE`
- `public static final <any> IS_STANDALONE`
- `public static final <any> HAS_INVENTORY`
- `public static final <any> CAN_AI_TARGET`
- `public static final <any> NOT_SPECTATING`

### Methods
- `public static <T extends Entity> <any> withinRange(double x,  double y,  double z,  double range)`
- `public static <T extends Entity> <any> getTeamCollisionPredicate(Entity entityIn)`
- `public static <any> notRiding(Entity p_191324_0_)`

## EntitySelectors.ArmoredMob

*class* `net.minecraft.util.EntitySelectors.ArmoredMob`

Enclosing class: EntitySelectors

### Methods
- `public boolean apply(Entity p_apply_1_)`

## EnumActionResult

*enum* `net.minecraft.util.EnumActionResult`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumActionResult>

### Fields
- `public static final EnumActionResult SUCCESS`
- `public static final EnumActionResult PASS`
- `public static final EnumActionResult FAIL`

### Methods
- `public static EnumActionResult[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumActionResult c : EnumActionResult.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumActionResult valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumBlockRenderType

*enum* `net.minecraft.util.EnumBlockRenderType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumBlockRenderType>

### Fields
- `public static final EnumBlockRenderType INVISIBLE`
- `public static final EnumBlockRenderType LIQUID`
- `public static final EnumBlockRenderType ENTITYBLOCK_ANIMATED`
- `public static final EnumBlockRenderType MODEL`

### Methods
- `public static EnumBlockRenderType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumBlockRenderType c : EnumBlockRenderType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumBlockRenderType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumFacing

*enum* `net.minecraft.util.EnumFacing`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumFacing>, IStringSerializable

### Fields
- `public static final EnumFacing[] VALUES`
- `public static final EnumFacing[] HORIZONTALS`
- `public static final EnumFacing DOWN`
- `public static final EnumFacing UP`
- `public static final EnumFacing NORTH`
- `public static final EnumFacing SOUTH`
- `public static final EnumFacing WEST`
- `public static final EnumFacing EAST`

### Methods
- `public static EnumFacing[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumFacing c : EnumFacing.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumFacing valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getIndex()`
- `public int getHorizontalIndex()`
- `public EnumFacing.AxisDirection getAxisDirection()`
- `public EnumFacing getOpposite()`
- `public EnumFacing rotateAround(EnumFacing.Axis axis)`
- `public EnumFacing rotateY()`
- `public EnumFacing rotateYCCW()`
- `public int getFrontOffsetX()`
- `public int getFrontOffsetY()`
- `public int getFrontOffsetZ()`
- `public java.lang.String getName2()`
- `public EnumFacing.Axis getAxis()`
- `public static EnumFacing byName(java.lang.String name)`
- `public static EnumFacing getFront(int index)`
- `public static EnumFacing getHorizontal(int horizontalIndexIn)`
- `public static EnumFacing fromAngle(double angle)`
- `public float getHorizontalAngle()`
- `public static EnumFacing random(java.util.Random rand)`
- `public static EnumFacing getFacingFromVector(float x,  float y,  float z)`
- `public java.lang.String toString()`
- `public java.lang.String getName()`
- `public static EnumFacing getFacingFromAxis(EnumFacing.AxisDirection axisDirectionIn,  EnumFacing.Axis axisIn)`
- `public static EnumFacing getDirectionFromEntityLiving(BlockPos pos,  EntityLivingBase placer)`
- `public Vec3i getDirectionVec()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## EnumFacing.Axis

*enum* `net.minecraft.util.EnumFacing.Axis`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumFacing.Axis>, IStringSerializable

Enclosing class: EnumFacing

### Fields
- `public static final EnumFacing.Axis X`
- `public static final EnumFacing.Axis Y`
- `public static final EnumFacing.Axis Z`

### Methods
- `public static EnumFacing.Axis[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumFacing.Axis c : EnumFacing.Axis.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumFacing.Axis valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static EnumFacing.Axis byName(java.lang.String name)`
- `public java.lang.String getName2()`
- `public boolean isVertical()`
- `public boolean isHorizontal()`
- `public java.lang.String toString()`
- `public boolean apply(EnumFacing p_apply_1_)`
- `public EnumFacing.Plane getPlane()`
- `public java.lang.String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## EnumFacing.AxisDirection

*enum* `net.minecraft.util.EnumFacing.AxisDirection`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumFacing.AxisDirection>

Enclosing class: EnumFacing

### Fields
- `public static final EnumFacing.AxisDirection POSITIVE`
- `public static final EnumFacing.AxisDirection NEGATIVE`

### Methods
- `public static EnumFacing.AxisDirection[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumFacing.AxisDirection c : EnumFacing.AxisDirection.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumFacing.AxisDirection valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getOffset()`
- `public java.lang.String toString()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## EnumFacing.Plane

*enum* `net.minecraft.util.EnumFacing.Plane`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumFacing.Plane>, java.lang.Iterable<EnumFacing>

Enclosing class: EnumFacing

### Fields
- `public static final EnumFacing.Plane HORIZONTAL`
- `public static final EnumFacing.Plane VERTICAL`

### Methods
- `public static EnumFacing.Plane[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumFacing.Plane c : EnumFacing.Plane.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumFacing.Plane valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public EnumFacing[] facings()`
- `public EnumFacing random(java.util.Random rand)`
- `public boolean apply(EnumFacing p_apply_1_)`
- `public java.util.Iterator<EnumFacing> iterator()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## EnumHand

*enum* `net.minecraft.util.EnumHand`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumHand>

### Fields
- `public static final EnumHand MAIN_HAND`
- `public static final EnumHand OFF_HAND`

### Methods
- `public static EnumHand[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumHand c : EnumHand.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumHand valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumHandSide

*enum* `net.minecraft.util.EnumHandSide`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumHandSide>

### Fields
- `public static final EnumHandSide LEFT`
- `public static final EnumHandSide RIGHT`

### Methods
- `public static EnumHandSide[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumHandSide c : EnumHandSide.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumHandSide valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public EnumHandSide opposite()`
- `public java.lang.String toString()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## EnumParticleTypes

*enum* `net.minecraft.util.EnumParticleTypes`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumParticleTypes>

### Fields
- `public static final EnumParticleTypes EXPLOSION_NORMAL`
- `public static final EnumParticleTypes EXPLOSION_LARGE`
- `public static final EnumParticleTypes EXPLOSION_HUGE`
- `public static final EnumParticleTypes FIREWORKS_SPARK`
- `public static final EnumParticleTypes WATER_BUBBLE`
- `public static final EnumParticleTypes WATER_SPLASH`
- `public static final EnumParticleTypes WATER_WAKE`
- `public static final EnumParticleTypes SUSPENDED`
- `public static final EnumParticleTypes SUSPENDED_DEPTH`
- `public static final EnumParticleTypes CRIT`
- `public static final EnumParticleTypes CRIT_MAGIC`
- `public static final EnumParticleTypes SMOKE_NORMAL`
- `public static final EnumParticleTypes SMOKE_LARGE`
- `public static final EnumParticleTypes SPELL`
- `public static final EnumParticleTypes SPELL_INSTANT`
- `public static final EnumParticleTypes SPELL_MOB`
- `public static final EnumParticleTypes SPELL_MOB_AMBIENT`
- `public static final EnumParticleTypes SPELL_WITCH`
- `public static final EnumParticleTypes DRIP_WATER`
- `public static final EnumParticleTypes DRIP_LAVA`
- `public static final EnumParticleTypes VILLAGER_ANGRY`
- `public static final EnumParticleTypes VILLAGER_HAPPY`
- `public static final EnumParticleTypes TOWN_AURA`
- `public static final EnumParticleTypes NOTE`
- `public static final EnumParticleTypes PORTAL`
- `public static final EnumParticleTypes ENCHANTMENT_TABLE`
- `public static final EnumParticleTypes FLAME`
- `public static final EnumParticleTypes LAVA`
- `public static final EnumParticleTypes FOOTSTEP`
- `public static final EnumParticleTypes CLOUD`
- `public static final EnumParticleTypes REDSTONE`
- `public static final EnumParticleTypes SNOWBALL`
- `public static final EnumParticleTypes SNOW_SHOVEL`
- `public static final EnumParticleTypes SLIME`
- `public static final EnumParticleTypes HEART`
- `public static final EnumParticleTypes BARRIER`
- `public static final EnumParticleTypes ITEM_CRACK`
- `public static final EnumParticleTypes BLOCK_CRACK`
- `public static final EnumParticleTypes BLOCK_DUST`
- `public static final EnumParticleTypes WATER_DROP`
- `public static final EnumParticleTypes ITEM_TAKE`
- `public static final EnumParticleTypes MOB_APPEARANCE`
- `public static final EnumParticleTypes DRAGON_BREATH`
- `public static final EnumParticleTypes END_ROD`
- `public static final EnumParticleTypes DAMAGE_INDICATOR`
- `public static final EnumParticleTypes SWEEP_ATTACK`
- `public static final EnumParticleTypes FALLING_DUST`
- `public static final EnumParticleTypes TOTEM`
- `public static final EnumParticleTypes SPIT`

### Methods
- `public static EnumParticleTypes[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumParticleTypes c : EnumParticleTypes.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumParticleTypes valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static java.util.Set<java.lang.String> getParticleNames()`
- `public java.lang.String getParticleName()`
- `public int getParticleID()`
- `public int getArgumentCount()`
- `public boolean getShouldIgnoreRange()`
- `public static EnumParticleTypes getParticleFromId(int particleId)`
- `public static EnumParticleTypes getByName(java.lang.String nameIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EnumTypeAdapterFactory

*class* `net.minecraft.util.EnumTypeAdapterFactory`

### Methods
- `public <T> <any> create(Gson p_create_1_,  <any> p_create_2_)`

## FoodStats

*class* `net.minecraft.util.FoodStats`

### Methods
- `public void addStats(int foodLevelIn,  float foodSaturationModifier)`
- `public void addStats(ItemFood foodItem,  ItemStack stack)`
- `public void onUpdate(EntityPlayer player)`
- `public void readNBT(NBTTagCompound compound)`
- `public void writeNBT(NBTTagCompound compound)`
- `public int getFoodLevel()`
- `public boolean needFood()`
- `public void addExhaustion(float exhaustion)`
- `public float getSaturationLevel()`
- `public void setFoodLevel(int foodLevelIn)`
- `public void setFoodSaturationLevel(float foodSaturationLevelIn)`

## FrameTimer

*class* `net.minecraft.util.FrameTimer`

### Methods
- `public void addFrame(long runningTime)`
- `public int getLagometerValue(long time,  int multiplier)`
- `public int getLastIndex()`
- `public int getIndex()`
- `public int parseIndex(int rawIndex)`
- `public long[] getFrames()`

## HttpUtil

*class* `net.minecraft.util.HttpUtil`

### Fields
- `public static final ListeningExecutorService DOWNLOADER_EXECUTOR`

### Methods
- `public static java.lang.String buildPostString(java.util.Map<java.lang.String,java.lang.Object> data)`
- `public static java.lang.String postMap(java.net.URL url,  java.util.Map<java.lang.String,java.lang.Object> data,  boolean skipLoggingErrors,  java.net.Proxy proxyIn)`
- `public static <any> downloadResourcePack(java.io.File saveFile,  java.lang.String packUrl,  java.util.Map<java.lang.String,java.lang.String> p_180192_2_,  int maxSize,  IProgressUpdate p_180192_4_,  java.net.Proxy p_180192_5_)`
- `public static int getSuitableLanPort()  throws java.io.IOException`
  - throws: java.io.IOException

## IJsonSerializable

*interface* `net.minecraft.util.IJsonSerializable`

### Methods
- `void fromJson(JsonElement json)`
- `JsonElement getSerializableElement()`

## IntegerCache

*class* `net.minecraft.util.IntegerCache`

### Methods
- `public static java.lang.Integer getInteger(int value)`

## IntHashMap

*class* `net.minecraft.util.IntHashMap`

### Methods
- `public V lookup(int hashEntry)`
- `public boolean containsItem(int hashEntry)`
- `public void addKey(int hashEntry,  V valueEntry)`
- `public V removeObject(int o)`
- `public void clearMap()`

## IntIdentityHashBiMap

*class* `net.minecraft.util.IntIdentityHashBiMap`

All Implemented Interfaces: java.lang.Iterable<K>, IObjectIntIterable<K>

### Methods
- `public int getId(K p_186815_1_)`
- `public K get(int idIn)`
- `public int add(K objectIn)`
- `public void put(K objectIn,  int intKey)`
- `public java.util.Iterator<K> iterator()`
- `public void clear()`
- `public int size()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## IObjectIntIterable

*interface* `net.minecraft.util.IObjectIntIterable`

All Superinterfaces: java.lang.Iterable<V>

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## IProgressUpdate

*interface* `net.minecraft.util.IProgressUpdate`

### Methods
- `void displaySavingString(java.lang.String message)`
- `void resetProgressAndMessage(java.lang.String message)`
- `void displayLoadingString(java.lang.String message)`
- `void setLoadingProgress(int progress)`
- `void setDoneWorking()`

## IStringSerializable

*interface* `net.minecraft.util.IStringSerializable`

### Methods
- `java.lang.String getName()`

## ITabCompleter

*interface* `net.minecraft.util.ITabCompleter`

### Methods
- `void setCompletions(java.lang.String... newCompletions)`

## IThreadListener

*interface* `net.minecraft.util.IThreadListener`

### Methods
- `<any> addScheduledTask(java.lang.Runnable runnableToSchedule)`
- `boolean isCallingFromMinecraftThread()`

## ITickable

*interface* `net.minecraft.util.ITickable`

### Methods
- `void update()`

## JsonUtils

*class* `net.minecraft.util.JsonUtils`

### Methods
- `public static boolean isString(JsonObject json,  java.lang.String memberName)`
- `public static boolean isString(JsonElement json)`
- `public static boolean isNumber(JsonElement json)`
- `public static boolean isBoolean(JsonObject json,  java.lang.String memberName)`
- `public static boolean isJsonArray(JsonObject json,  java.lang.String memberName)`
- `public static boolean isJsonPrimitive(JsonObject json,  java.lang.String memberName)`
- `public static boolean hasField(JsonObject json,  java.lang.String memberName)`
- `public static java.lang.String getString(JsonElement json,  java.lang.String memberName)`
- `public static java.lang.String getString(JsonObject json,  java.lang.String memberName)`
- `public static java.lang.String getString(JsonObject json,  java.lang.String memberName,  java.lang.String fallback)`
- `public static Item getItem(JsonElement json,  java.lang.String memberName)`
- `public static Item getItem(JsonObject json,  java.lang.String memberName)`
- `public static boolean getBoolean(JsonElement json,  java.lang.String memberName)`
- `public static boolean getBoolean(JsonObject json,  java.lang.String memberName)`
- `public static boolean getBoolean(JsonObject json,  java.lang.String memberName,  boolean fallback)`
- `public static float getFloat(JsonElement json,  java.lang.String memberName)`
- `public static float getFloat(JsonObject json,  java.lang.String memberName)`
- `public static float getFloat(JsonObject json,  java.lang.String memberName,  float fallback)`
- `public static int getInt(JsonElement json,  java.lang.String memberName)`
- `public static int getInt(JsonObject json,  java.lang.String memberName)`
- `public static int getInt(JsonObject json,  java.lang.String memberName,  int fallback)`
- `public static JsonObject getJsonObject(JsonElement json,  java.lang.String memberName)`
- `public static JsonObject getJsonObject(JsonObject json,  java.lang.String memberName)`
- `public static JsonObject getJsonObject(JsonObject json,  java.lang.String memberName,  JsonObject fallback)`
- `public static JsonArray getJsonArray(JsonElement json,  java.lang.String memberName)`
- `public static JsonArray getJsonArray(JsonObject json,  java.lang.String memberName)`
- `public static JsonArray getJsonArray(JsonObject json,  java.lang.String memberName,  JsonArray fallback)`
- `public static <T> T deserializeClass(JsonElement json,  java.lang.String memberName,  JsonDeserializationContext context,  java.lang.Class<? extends T> adapter)`
- `public static <T> T deserializeClass(JsonObject json,  java.lang.String memberName,  JsonDeserializationContext context,  java.lang.Class<? extends T> adapter)`
- `public static <T> T deserializeClass(JsonObject json,  java.lang.String memberName,  T fallback,  JsonDeserializationContext context,  java.lang.Class<? extends T> adapter)`
- `public static java.lang.String toString(JsonElement json)`
- `public static <T> T gsonDeserialize(Gson gsonIn,  java.io.Reader readerIn,  java.lang.Class<T> adapter,  boolean lenient)`
- `public static <T> T fromJson(Gson p_193838_0_,  java.io.Reader p_193838_1_,  java.lang.reflect.Type p_193838_2_,  boolean p_193838_3_)`
- `public static <T> T fromJson(Gson p_193837_0_,  java.lang.String p_193837_1_,  java.lang.reflect.Type p_193837_2_,  boolean p_193837_3_)`
- `public static <T> T gsonDeserialize(Gson gsonIn,  java.lang.String json,  java.lang.Class<T> adapter,  boolean lenient)`
- `public static <T> T fromJson(Gson p_193841_0_,  java.io.Reader p_193841_1_,  java.lang.reflect.Type p_193841_2_)`
- `public static <T> T gsonDeserialize(Gson p_193840_0_,  java.lang.String p_193840_1_,  java.lang.reflect.Type p_193840_2_)`
- `public static <T> T fromJson(Gson p_193839_0_,  java.io.Reader p_193839_1_,  java.lang.Class<T> p_193839_2_)`
- `public static <T> T gsonDeserialize(Gson gsonIn,  java.lang.String json,  java.lang.Class<T> adapter)`

## LazyLoadBase

*class* `net.minecraft.util.LazyLoadBase`

### Methods
- `public T getValue()`
- `protected abstract T load()`

## LoggingPrintStream

*class* `net.minecraft.util.LoggingPrintStream`

All Implemented Interfaces: java.io.Closeable, java.io.Flushable, java.lang.Appendable, java.lang.AutoCloseable

### Fields
- `protected static final Logger LOGGER`
- `protected final java.lang.String domain`

### Inherited fields
- from `java.io.FilterOutputStream`: `out`

### Methods
- `public void println(java.lang.String p_println_1_)`
- `public void println(java.lang.Object p_println_1_)`
- `protected void logString(java.lang.String string)`

### Inherited methods
- from `java.io.PrintStream`: `append`, `append`, `append`, `checkError`, `clearError`, `close`, `flush`, `format`, `format`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `print`, `printf`, `printf`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `println`, `setError`, `write`, `write`
- from `java.io.FilterOutputStream`: `write`

## LowerStringMap

*class* `net.minecraft.util.LowerStringMap`

All Implemented Interfaces: java.util.Map<java.lang.String, V>

### Methods
- `public int size()`
- `public boolean isEmpty()`
- `public boolean containsKey(java.lang.Object p_containsKey_1_)`
- `public boolean containsValue(java.lang.Object p_containsValue_1_)`
- `public V get(java.lang.Object p_get_1_)`
- `public V put(java.lang.String p_put_1_,  V p_put_2_)`
- `public V remove(java.lang.Object p_remove_1_)`
- `public void putAll(java.util.Map<? extends java.lang.String,? extends V> p_putAll_1_)`
- `public void clear()`
- `public java.util.Set<java.lang.String> keySet()`
- `public java.util.Collection<V> values()`
- `public java.util.Set<java.util.Map.Entry<java.lang.String,V>> entrySet()`

### Inherited methods
- from `java.util.Map`: `compute`, `computeIfAbsent`, `computeIfPresent`, `equals`, `forEach`, `getOrDefault`, `hashCode`, `merge`, `putIfAbsent`, `remove`, `replace`, `replace`, `replaceAll`

## MapPopulator

*class* `net.minecraft.util.MapPopulator`

### Methods
- `public static <K,V> java.util.Map<K,V> createMap(java.lang.Iterable<K> keys,  java.lang.Iterable<V> values)`
- `public static <K,V> java.util.Map<K,V> populateMap(java.lang.Iterable<K> keys,  java.lang.Iterable<V> values,  java.util.Map<K,V> map)`

## MinecraftError

*class* `net.minecraft.util.MinecraftError`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## Mirror

*enum* `net.minecraft.util.Mirror`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Mirror>

### Fields
- `public static final Mirror NONE`
- `public static final Mirror LEFT_RIGHT`
- `public static final Mirror FRONT_BACK`

### Methods
- `public static Mirror[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Mirror c : Mirror.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Mirror valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int mirrorRotation(int rotationIn,  int rotationCount)`
- `public Rotation toRotation(EnumFacing facing)`
- `public EnumFacing mirror(EnumFacing facing)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## MouseFilter

*class* `net.minecraft.util.MouseFilter`

### Methods
- `public float smooth(float p_76333_1_,  float p_76333_2_)`
- `public void reset()`

## MouseHelper

*class* `net.minecraft.util.MouseHelper`

### Fields
- `public int deltaX`
- `public int deltaY`

### Methods
- `public void grabMouseCursor()`
- `public void ungrabMouseCursor()`
- `public void mouseXYChange()`

## MovementInput

*class* `net.minecraft.util.MovementInput`

### Fields
- `public float moveStrafe`
- `public float moveForward`
- `public boolean forwardKeyDown`
- `public boolean backKeyDown`
- `public boolean leftKeyDown`
- `public boolean rightKeyDown`
- `public boolean jump`
- `public boolean sneak`

### Methods
- `public void updatePlayerMoveState()`
- `public Vec2f getMoveVector()`

## MovementInputFromOptions

*class* `net.minecraft.util.MovementInputFromOptions`

### Inherited fields
- from `net.minecraft.util.MovementInput`: `backKeyDown`, `forwardKeyDown`, `jump`, `leftKeyDown`, `moveForward`, `moveStrafe`, `rightKeyDown`, `sneak`

### Methods
- `public void updatePlayerMoveState()`

### Inherited methods
- from `net.minecraft.util.MovementInput`: `getMoveVector`

## NonNullList

*class* `net.minecraft.util.NonNullList`

All Implemented Interfaces: java.lang.Iterable<E>, java.util.Collection<E>, java.util.List<E>

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `public static <E> NonNullList<E> create()`
- `public static <E> NonNullList<E> withSize(int size,  E fill)`
- `public static <E> NonNullList<E> from(E defaultElementIn,  E... elements)`
- `public E get(int p_get_1_)`
- `public E set(int p_set_1_,  E p_set_2_)`
- `public void add(int p_add_1_,  E p_add_2_)`
- `public E remove(int p_remove_1_)`
- `public int size()`
- `public void clear()`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `equals`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`, `toString`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `replaceAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`
- from `java.lang.Iterable`: `forEach`

## ObjectIntIdentityMap

*class* `net.minecraft.util.ObjectIntIdentityMap`

All Implemented Interfaces: java.lang.Iterable<T>, IObjectIntIterable<T>

### Fields
- `protected final java.util.IdentityHashMap<T,java.lang.Integer> identityMap`
- `protected final java.util.List<T> objectList`

### Methods
- `public void put(T key,  int value)`
- `public int get(T key)`
- `public final T getByValue(int value)`
- `public java.util.Iterator<T> iterator()`
- `public int size()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`

## ReportedException

*class* `net.minecraft.util.ReportedException`

All Implemented Interfaces: java.io.Serializable

### Methods
- `public CrashReport getCrashReport()`
- `public java.lang.Throwable getCause()`
- `public java.lang.String getMessage()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ResourceLocation

*class* `net.minecraft.util.ResourceLocation`

All Implemented Interfaces: java.lang.Comparable<ResourceLocation>

### Fields
- `protected final java.lang.String resourceDomain`
- `protected final java.lang.String resourcePath`

### Methods
- `public static java.lang.String[] splitObjectName(java.lang.String toSplit)`
- `public java.lang.String getResourcePath()`
- `public java.lang.String getResourceDomain()`
- `public java.lang.String toString()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public int compareTo(ResourceLocation p_compareTo_1_)`

## ResourceLocation.Serializer

*class* `net.minecraft.util.ResourceLocation.Serializer`

Enclosing class: ResourceLocation

### Methods
- `public ResourceLocation deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(ResourceLocation p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## Rotation

*enum* `net.minecraft.util.Rotation`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Rotation>

### Fields
- `public static final Rotation NONE`
- `public static final Rotation CLOCKWISE_90`
- `public static final Rotation CLOCKWISE_180`
- `public static final Rotation COUNTERCLOCKWISE_90`

### Methods
- `public static Rotation[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Rotation c : Rotation.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Rotation valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public Rotation add(Rotation rotation)`
- `public EnumFacing rotate(EnumFacing facing)`
- `public int rotate(int p_185833_1_,  int p_185833_2_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ScreenShotHelper

*class* `net.minecraft.util.ScreenShotHelper`

### Methods
- `public static ITextComponent saveScreenshot(java.io.File gameDirectory,  int width,  int height,  Framebuffer buffer)`
- `public static ITextComponent saveScreenshot(java.io.File gameDirectory,  java.lang.String screenshotName,  int width,  int height,  Framebuffer buffer)`
- `public static java.awt.image.BufferedImage createScreenshot(int width,  int height,  Framebuffer framebufferIn)`

## ServerRecipeBookHelper

*class* `net.minecraft.util.ServerRecipeBookHelper`

### Methods
- `public void func_194327_a(EntityPlayerMP p_194327_1_,  IRecipe p_194327_2_,  boolean p_194327_3_)`

## Session

*class* `net.minecraft.util.Session`

### Methods
- `public java.lang.String getSessionID()`
- `public java.lang.String getPlayerID()`
- `public java.lang.String getUsername()`
- `public java.lang.String getToken()`
- `public GameProfile getProfile()`
- `public void setProperties(com.mojang.authlib.properties.PropertyMap properties)`
- `public boolean hasCachedProperties()`

## Session.Type

*enum* `net.minecraft.util.Session.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Session.Type>

Enclosing class: Session

### Fields
- `public static final Session.Type LEGACY`
- `public static final Session.Type MOJANG`

### Methods
- `public static Session.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Session.Type c : Session.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Session.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static Session.Type setSessionType(java.lang.String sessionTypeIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## SoundCategory

*enum* `net.minecraft.util.SoundCategory`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SoundCategory>

### Fields
- `public static final SoundCategory MASTER`
- `public static final SoundCategory MUSIC`
- `public static final SoundCategory RECORDS`
- `public static final SoundCategory WEATHER`
- `public static final SoundCategory BLOCKS`
- `public static final SoundCategory HOSTILE`
- `public static final SoundCategory NEUTRAL`
- `public static final SoundCategory PLAYERS`
- `public static final SoundCategory AMBIENT`
- `public static final SoundCategory VOICE`

### Methods
- `public static SoundCategory[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SoundCategory c : SoundCategory.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SoundCategory valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getName()`
- `public static SoundCategory getByName(java.lang.String categoryName)`
- `public static java.util.Set<java.lang.String> getSoundCategoryNames()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## SoundEvent

*class* `net.minecraft.util.SoundEvent`

All Implemented Interfaces: IForgeRegistryEntry<SoundEvent>

### Fields
- `public static final RegistryNamespaced<ResourceLocation,SoundEvent> REGISTRY`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ResourceLocation getSoundName()`
- `public static void registerSounds()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## StringUtils

*class* `net.minecraft.util.StringUtils`

### Methods
- `public static java.lang.String ticksToElapsedTime(int ticks)`
- `public static java.lang.String stripControlCodes(java.lang.String text)`
- `public static boolean isNullOrEmpty(java.lang.String string)`

## TabCompleter

*class* `net.minecraft.util.TabCompleter`

### Fields
- `protected final GuiTextField textField`
- `protected final boolean hasTargetBlock`
- `protected boolean didComplete`
- `protected boolean requestedCompletions`
- `protected int completionIdx`
- `protected java.util.List<java.lang.String> completions`

### Methods
- `public void complete()`
- `public abstract BlockPos getTargetBlockPos()`
- `public void setCompletions(java.lang.String... newCompl)`
- `public void resetDidComplete()`
- `public void resetRequested()`

## Timer

*class* `net.minecraft.util.Timer`

### Fields
- `public int elapsedTicks`
- `public float renderPartialTicks`
- `public float elapsedPartialTicks`

### Methods
- `public void updateTimer()`

## Tuple

*class* `net.minecraft.util.Tuple`

### Methods
- `public A getFirst()`
- `public B getSecond()`

## TupleIntJsonSerializable

*class* `net.minecraft.util.TupleIntJsonSerializable`

### Methods
- `public int getIntegerValue()`
- `public void setIntegerValue(int integerValueIn)`
- `public <T extends IJsonSerializable> T getJsonSerializableValue()`
- `public void setJsonSerializableValue(IJsonSerializable jsonSerializableValueIn)`

## Util

*class* `net.minecraft.util.Util`

### Methods
- `public static Util.EnumOS getOSType()`
- `public static <V> V runTask(java.util.concurrent.FutureTask<V> task,  Logger logger)`
- `public static <T> T getLastElement(java.util.List<T> list)`

## Util.EnumOS

*enum* `net.minecraft.util.Util.EnumOS`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Util.EnumOS>

Enclosing class: Util

### Fields
- `public static final Util.EnumOS LINUX`
- `public static final Util.EnumOS SOLARIS`
- `public static final Util.EnumOS WINDOWS`
- `public static final Util.EnumOS OSX`
- `public static final Util.EnumOS UNKNOWN`

### Methods
- `public static Util.EnumOS[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Util.EnumOS c : Util.EnumOS.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Util.EnumOS valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## WeightedRandom

*class* `net.minecraft.util.WeightedRandom`

### Methods
- `public static int getTotalWeight(java.util.List<? extends WeightedRandom.Item> collection)`
- `public static <T extends WeightedRandom.Item> T getRandomItem(java.util.Random random,  java.util.List<T> collection,  int totalWeight)`
- `public static <T extends WeightedRandom.Item> T getRandomItem(java.util.List<T> collection,  int weight)`
- `public static <T extends WeightedRandom.Item> T getRandomItem(java.util.Random random,  java.util.List<T> collection)`

## WeightedRandom.Item

*class* `net.minecraft.util.WeightedRandom.Item`

Enclosing class: WeightedRandom

### Fields
- `public int itemWeight`

## WeightedSpawnerEntity

*class* `net.minecraft.util.WeightedSpawnerEntity`

### Inherited fields
- from `net.minecraft.util.WeightedRandom.Item`: `itemWeight`

### Methods
- `public NBTTagCompound toCompoundTag()`
- `public NBTTagCompound getNbt()`
