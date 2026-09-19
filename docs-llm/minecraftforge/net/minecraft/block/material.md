# net.minecraft.block.material

- [EnumPushReaction](#enumpushreaction)
- [MapColor](#mapcolor)
- [Material](#material)
- [MaterialLiquid](#materialliquid)
- [MaterialLogic](#materiallogic)
- [MaterialPortal](#materialportal)
- [MaterialTransparent](#materialtransparent)
## EnumPushReaction

*enum* `net.minecraft.block.material.EnumPushReaction`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumPushReaction>

### Fields
- `public static final EnumPushReaction NORMAL`
- `public static final EnumPushReaction DESTROY`
- `public static final EnumPushReaction BLOCK`
- `public static final EnumPushReaction IGNORE`
- `public static final EnumPushReaction PUSH_ONLY`

### Methods
- `public static EnumPushReaction[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumPushReaction c : EnumPushReaction.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumPushReaction valueOf(java.lang.String name)`
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

## MapColor

*class* `net.minecraft.block.material.MapColor`

### Fields
- `public static final MapColor[] COLORS`
- `public static final MapColor[] BLOCK_COLORS`
- `public static final MapColor AIR`
- `public static final MapColor GRASS`
- `public static final MapColor SAND`
- `public static final MapColor CLOTH`
- `public static final MapColor TNT`
- `public static final MapColor ICE`
- `public static final MapColor IRON`
- `public static final MapColor FOLIAGE`
- `public static final MapColor SNOW`
- `public static final MapColor CLAY`
- `public static final MapColor DIRT`
- `public static final MapColor STONE`
- `public static final MapColor WATER`
- `public static final MapColor WOOD`
- `public static final MapColor QUARTZ`
- `public static final MapColor ADOBE`
- `public static final MapColor MAGENTA`
- `public static final MapColor LIGHT_BLUE`
- `public static final MapColor YELLOW`
- `public static final MapColor LIME`
- `public static final MapColor PINK`
- `public static final MapColor GRAY`
- `public static final MapColor SILVER`
- `public static final MapColor CYAN`
- `public static final MapColor PURPLE`
- `public static final MapColor BLUE`
- `public static final MapColor BROWN`
- `public static final MapColor GREEN`
- `public static final MapColor RED`
- `public static final MapColor BLACK`
- `public static final MapColor GOLD`
- `public static final MapColor DIAMOND`
- `public static final MapColor LAPIS`
- `public static final MapColor EMERALD`
- `public static final MapColor OBSIDIAN`
- `public static final MapColor NETHERRACK`
- `public static final MapColor WHITE_STAINED_HARDENED_CLAY`
- `public static final MapColor ORANGE_STAINED_HARDENED_CLAY`
- `public static final MapColor MAGENTA_STAINED_HARDENED_CLAY`
- `public static final MapColor LIGHT_BLUE_STAINED_HARDENED_CLAY`
- `public static final MapColor YELLOW_STAINED_HARDENED_CLAY`
- `public static final MapColor LIME_STAINED_HARDENED_CLAY`
- `public static final MapColor PINK_STAINED_HARDENED_CLAY`
- `public static final MapColor GRAY_STAINED_HARDENED_CLAY`
- `public static final MapColor SILVER_STAINED_HARDENED_CLAY`
- `public static final MapColor CYAN_STAINED_HARDENED_CLAY`
- `public static final MapColor PURPLE_STAINED_HARDENED_CLAY`
- `public static final MapColor BLUE_STAINED_HARDENED_CLAY`
- `public static final MapColor BROWN_STAINED_HARDENED_CLAY`
- `public static final MapColor GREEN_STAINED_HARDENED_CLAY`
- `public static final MapColor RED_STAINED_HARDENED_CLAY`
- `public static final MapColor BLACK_STAINED_HARDENED_CLAY`
- `public final int colorValue`
- `public final int colorIndex`

### Methods
- `public int getMapColor(int index)`
- `public static MapColor getBlockColor(EnumDyeColor dyeColorIn)`

## Material

*class* `net.minecraft.block.material.Material`

### Fields
- `public static final Material AIR`
- `public static final Material GRASS`
- `public static final Material GROUND`
- `public static final Material WOOD`
- `public static final Material ROCK`
- `public static final Material IRON`
- `public static final Material ANVIL`
- `public static final Material WATER`
- `public static final Material LAVA`
- `public static final Material LEAVES`
- `public static final Material PLANTS`
- `public static final Material VINE`
- `public static final Material SPONGE`
- `public static final Material CLOTH`
- `public static final Material FIRE`
- `public static final Material SAND`
- `public static final Material CIRCUITS`
- `public static final Material CARPET`
- `public static final Material GLASS`
- `public static final Material REDSTONE_LIGHT`
- `public static final Material TNT`
- `public static final Material CORAL`
- `public static final Material ICE`
- `public static final Material PACKED_ICE`
- `public static final Material SNOW`
- `public static final Material CRAFTED_SNOW`
- `public static final Material CACTUS`
- `public static final Material CLAY`
- `public static final Material GOURD`
- `public static final Material DRAGON_EGG`
- `public static final Material PORTAL`
- `public static final Material CAKE`
- `public static final Material WEB`
- `public static final Material PISTON`
- `public static final Material BARRIER`
- `public static final Material STRUCTURE_VOID`

### Methods
- `public boolean isLiquid()`
- `public boolean isSolid()`
- `public boolean blocksLight()`
- `public boolean blocksMovement()`
- `protected Material setRequiresTool()`
- `protected Material setBurning()`
- `public boolean getCanBurn()`
- `public Material setReplaceable()`
- `public boolean isReplaceable()`
- `public boolean isOpaque()`
- `public boolean isToolNotRequired()`
- `public EnumPushReaction getMobilityFlag()`
- `protected Material setNoPushMobility()`
- `protected Material setImmovableMobility()`
- `protected Material setAdventureModeExempt()`
- `public MapColor getMaterialMapColor()`

## MaterialLiquid

*class* `net.minecraft.block.material.MaterialLiquid`

### Inherited fields
- from `net.minecraft.block.material.Material`: `AIR`, `ANVIL`, `BARRIER`, `CACTUS`, `CAKE`, `CARPET`, `CIRCUITS`, `CLAY`, `CLOTH`, `CORAL`, `CRAFTED_SNOW`, `DRAGON_EGG`, `FIRE`, `GLASS`, `GOURD`, `GRASS`, `GROUND`, `ICE`, `IRON`, `LAVA`, `LEAVES`, `PACKED_ICE`, `PISTON`, `PLANTS`, `PORTAL`, `REDSTONE_LIGHT`, `ROCK`, `SAND`, `SNOW`, `SPONGE`, `STRUCTURE_VOID`, `TNT`, `VINE`, `WATER`, `WEB`, `WOOD`

### Methods
- `public boolean isLiquid()`
- `public boolean blocksMovement()`
- `public boolean isSolid()`

### Inherited methods
- from `net.minecraft.block.material.Material`: `blocksLight`, `getCanBurn`, `getMaterialMapColor`, `getMobilityFlag`, `isOpaque`, `isReplaceable`, `isToolNotRequired`, `setAdventureModeExempt`, `setBurning`, `setImmovableMobility`, `setNoPushMobility`, `setReplaceable`, `setRequiresTool`

## MaterialLogic

*class* `net.minecraft.block.material.MaterialLogic`

### Inherited fields
- from `net.minecraft.block.material.Material`: `AIR`, `ANVIL`, `BARRIER`, `CACTUS`, `CAKE`, `CARPET`, `CIRCUITS`, `CLAY`, `CLOTH`, `CORAL`, `CRAFTED_SNOW`, `DRAGON_EGG`, `FIRE`, `GLASS`, `GOURD`, `GRASS`, `GROUND`, `ICE`, `IRON`, `LAVA`, `LEAVES`, `PACKED_ICE`, `PISTON`, `PLANTS`, `PORTAL`, `REDSTONE_LIGHT`, `ROCK`, `SAND`, `SNOW`, `SPONGE`, `STRUCTURE_VOID`, `TNT`, `VINE`, `WATER`, `WEB`, `WOOD`

### Methods
- `public boolean isSolid()`
- `public boolean blocksLight()`
- `public boolean blocksMovement()`

### Inherited methods
- from `net.minecraft.block.material.Material`: `getCanBurn`, `getMaterialMapColor`, `getMobilityFlag`, `isLiquid`, `isOpaque`, `isReplaceable`, `isToolNotRequired`, `setAdventureModeExempt`, `setBurning`, `setImmovableMobility`, `setNoPushMobility`, `setReplaceable`, `setRequiresTool`

## MaterialPortal

*class* `net.minecraft.block.material.MaterialPortal`

### Inherited fields
- from `net.minecraft.block.material.Material`: `AIR`, `ANVIL`, `BARRIER`, `CACTUS`, `CAKE`, `CARPET`, `CIRCUITS`, `CLAY`, `CLOTH`, `CORAL`, `CRAFTED_SNOW`, `DRAGON_EGG`, `FIRE`, `GLASS`, `GOURD`, `GRASS`, `GROUND`, `ICE`, `IRON`, `LAVA`, `LEAVES`, `PACKED_ICE`, `PISTON`, `PLANTS`, `PORTAL`, `REDSTONE_LIGHT`, `ROCK`, `SAND`, `SNOW`, `SPONGE`, `STRUCTURE_VOID`, `TNT`, `VINE`, `WATER`, `WEB`, `WOOD`

### Methods
- `public boolean isSolid()`
- `public boolean blocksLight()`
- `public boolean blocksMovement()`

### Inherited methods
- from `net.minecraft.block.material.Material`: `getCanBurn`, `getMaterialMapColor`, `getMobilityFlag`, `isLiquid`, `isOpaque`, `isReplaceable`, `isToolNotRequired`, `setAdventureModeExempt`, `setBurning`, `setImmovableMobility`, `setNoPushMobility`, `setReplaceable`, `setRequiresTool`

## MaterialTransparent

*class* `net.minecraft.block.material.MaterialTransparent`

### Inherited fields
- from `net.minecraft.block.material.Material`: `AIR`, `ANVIL`, `BARRIER`, `CACTUS`, `CAKE`, `CARPET`, `CIRCUITS`, `CLAY`, `CLOTH`, `CORAL`, `CRAFTED_SNOW`, `DRAGON_EGG`, `FIRE`, `GLASS`, `GOURD`, `GRASS`, `GROUND`, `ICE`, `IRON`, `LAVA`, `LEAVES`, `PACKED_ICE`, `PISTON`, `PLANTS`, `PORTAL`, `REDSTONE_LIGHT`, `ROCK`, `SAND`, `SNOW`, `SPONGE`, `STRUCTURE_VOID`, `TNT`, `VINE`, `WATER`, `WEB`, `WOOD`

### Methods
- `public boolean isSolid()`
- `public boolean blocksLight()`
- `public boolean blocksMovement()`

### Inherited methods
- from `net.minecraft.block.material.Material`: `getCanBurn`, `getMaterialMapColor`, `getMobilityFlag`, `isLiquid`, `isOpaque`, `isReplaceable`, `isToolNotRequired`, `setAdventureModeExempt`, `setBurning`, `setImmovableMobility`, `setNoPushMobility`, `setReplaceable`, `setRequiresTool`
