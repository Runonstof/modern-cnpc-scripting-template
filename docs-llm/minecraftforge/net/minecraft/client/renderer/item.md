# net.minecraft.client.renderer.item

- [ClampedItemPropertyFunction](#clampeditempropertyfunction)
- [CompassItemPropertyFunction](#compassitempropertyfunction)
- [CompassItemPropertyFunction.CompassTarget](#compassitempropertyfunction.compasstarget)
- [CompassItemPropertyFunction.CompassWobble](#compassitempropertyfunction.compasswobble)
- [ItemProperties](#itemproperties)
- [ItemPropertyFunction](#itempropertyfunction)
## ClampedItemPropertyFunction

*interface* `net.minecraft.client.renderer.item.ClampedItemPropertyFunction`

All Superinterfaces: ItemPropertyFunction

### Methods
- `@Deprecated default float call(ItemStack p_174560_,  @Nullable  ClientLevel p_174561_,  @Nullable  LivingEntity p_174562_,  int p_174563_)` (deprecated)
- `float unclampedCall(ItemStack p_174564_,  @Nullable  ClientLevel p_174565_,  @Nullable  LivingEntity p_174566_,  int p_174567_)`

## CompassItemPropertyFunction

*class* `net.minecraft.client.renderer.item.CompassItemPropertyFunction`

### Fields
- `public static final int DEFAULT_ROTATION` (= 0)
- `private final CompassItemPropertyFunction.CompassWobble wobble`
- `private final CompassItemPropertyFunction.CompassWobble wobbleRandom`
- `public final CompassItemPropertyFunction.CompassTarget compassTarget`

### Methods
- `public float unclampedCall(ItemStack p_234960_,  @Nullable  ClientLevel p_234961_,  @Nullable  LivingEntity p_234962_,  int p_234963_)`
- `private float getCompassRotation(ItemStack p_234955_,  ClientLevel p_234956_,  int p_234957_,  Entity p_234958_)`
- `private float getRandomlySpinningRotation(int p_234937_,  long p_234938_)`
- `private float getRotationTowardsCompassTarget(Entity p_234942_,  long p_234943_,  BlockPos p_234944_)`
- `@Nullable private ClientLevel tryFetchLevelIfMissing(Entity p_234946_,  @Nullable  ClientLevel p_234947_)`
- `private boolean isValidCompassTargetPos(Entity p_234952_,  @Nullable  GlobalPos p_234953_)`
- `private double getAngleFromEntityToPos(Entity p_234949_,  BlockPos p_234950_)`
- `private double getWrappedVisualRotationY(Entity p_234940_)`
- `private int hash(int p_234935_)`

### Inherited methods
- from `net.minecraft.client.renderer.item.ClampedItemPropertyFunction`: `call`

## CompassItemPropertyFunction.CompassTarget

*interface* `net.minecraft.client.renderer.item.CompassItemPropertyFunction.CompassTarget`

Enclosing class: CompassItemPropertyFunction

### Methods
- `@Nullable GlobalPos getPos(ClientLevel p_234965_,  ItemStack p_234966_,  Entity p_234967_)`

## CompassItemPropertyFunction.CompassWobble

*class* `net.minecraft.client.renderer.item.CompassItemPropertyFunction.CompassWobble`

Enclosing class: CompassItemPropertyFunction

### Fields
- `double rotation`
- `private double deltaRotation`
- `private long lastUpdateTick`

### Methods
- `boolean shouldUpdate(long p_234973_)`
- `void update(long p_234975_,  double p_234976_)`

## ItemProperties

*class* `net.minecraft.client.renderer.item.ItemProperties`

### Fields
- `private static final Map<ResourceLocation,ItemPropertyFunction> GENERIC_PROPERTIES`
- `private static final String TAG_CUSTOM_MODEL_DATA` (= "CustomModelData")
- `private static final ResourceLocation DAMAGED`
- `private static final ResourceLocation DAMAGE`
- `private static final ClampedItemPropertyFunction PROPERTY_DAMAGED`
- `private static final ClampedItemPropertyFunction PROPERTY_DAMAGE`
- `private static final Map<Item,Map<ResourceLocation,ItemPropertyFunction>> PROPERTIES`

### Methods
- `private static ClampedItemPropertyFunction registerGeneric(ResourceLocation p_174582_,  ClampedItemPropertyFunction p_174583_)`
- `public static ItemPropertyFunction registerGeneric(ResourceLocation p_174582_,  ItemPropertyFunction p_174583_)`
- `private static void registerCustomModelData(ItemPropertyFunction p_174580_)`
- `private static void register(Item p_174571_,  ResourceLocation p_174572_,  ClampedItemPropertyFunction p_174573_)`
- `public static void register(Item p_174571_,  ResourceLocation p_174572_,  ItemPropertyFunction p_174573_)`
- `@Nullable public static ItemPropertyFunction getProperty(Item p_117830_,  ResourceLocation p_117831_)`

## ItemPropertyFunction

*interface* `net.minecraft.client.renderer.item.ItemPropertyFunction`

### Methods
- `float call(ItemStack p_174676_,  @Nullable  ClientLevel p_174677_,  @Nullable  LivingEntity p_174678_,  int p_174679_)` (deprecated)
