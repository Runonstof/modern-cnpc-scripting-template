# net.minecraft.world.item.armortrim

- [ArmorTrim](#armortrim)
- [TrimMaterial](#trimmaterial)
- [TrimMaterials](#trimmaterials)
- [TrimPattern](#trimpattern)
- [TrimPatterns](#trimpatterns)
## ArmorTrim

*class* `net.minecraft.world.item.armortrim.ArmorTrim`

### Fields
- `public static final com.mojang.serialization.Codec<ArmorTrim> CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `public static final String TAG_TRIM_ID` (= "Trim")
- `private static final Component UPGRADE_TITLE`
- `private final Holder<TrimMaterial> material`
- `private final Holder<TrimPattern> pattern`
- `private final Function<ArmorMaterial,ResourceLocation> innerTexture`
- `private final Function<ArmorMaterial,ResourceLocation> outerTexture`

### Methods
- `private String getColorPaletteSuffix(ArmorMaterial p_268122_)`
- `public boolean hasPatternAndMaterial(Holder<TrimPattern> p_266942_,  Holder<TrimMaterial> p_267247_)`
- `public Holder<TrimPattern> pattern()`
- `public Holder<TrimMaterial> material()`
- `public ResourceLocation innerTexture(ArmorMaterial p_268043_)`
- `public ResourceLocation outerTexture(ArmorMaterial p_268143_)`
- `public boolean equals(Object p_267123_)`
- `public static boolean setTrim(RegistryAccess p_267181_,  ItemStack p_266994_,  ArmorTrim p_267002_)`
- `public static Optional<ArmorTrim> getTrim(RegistryAccess p_266952_,  ItemStack p_266766_,  boolean p_297853_)`
- `public static void appendUpgradeHoverText(ItemStack p_266761_,  RegistryAccess p_266979_,  List<Component> p_267199_)`

## TrimMaterial

*record* `net.minecraft.world.item.armortrim.TrimMaterial`

### Fields
- `private final String assetName`
  The field for the assetName record component.
- `private final Holder<Item> ingredient`
  The field for the ingredient record component.
- `private final float itemModelIndex`
  The field for the itemModelIndex record component.
- `private final Map<ArmorMaterials,String> overrideArmorMaterials`
  The field for the overrideArmorMaterials record component.
- `private final Component description`
  The field for the description record component.
- `public static final com.mojang.serialization.Codec<TrimMaterial> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<TrimMaterial>> CODEC`

### Methods
- `public static TrimMaterial create(String p_268108_,  Item p_268361_,  float p_268202_,  Component p_268273_,  Map<ArmorMaterials,String> p_267977_)`
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
- `public String assetName()`
  Returns the value of the assetName record component.
  - returns: the value of the assetName record component
- `public Holder<Item> ingredient()`
  Returns the value of the ingredient record component.
  - returns: the value of the ingredient record component
- `public float itemModelIndex()`
  Returns the value of the itemModelIndex record component.
  - returns: the value of the itemModelIndex record component
- `public Map<ArmorMaterials,String> overrideArmorMaterials()`
  Returns the value of the overrideArmorMaterials record component.
  - returns: the value of the overrideArmorMaterials record component
- `public Component description()`
  Returns the value of the description record component.
  - returns: the value of the description record component

## TrimMaterials

*class* `net.minecraft.world.item.armortrim.TrimMaterials`

### Fields
- `public static final ResourceKey<TrimMaterial> QUARTZ`
- `public static final ResourceKey<TrimMaterial> IRON`
- `public static final ResourceKey<TrimMaterial> NETHERITE`
- `public static final ResourceKey<TrimMaterial> REDSTONE`
- `public static final ResourceKey<TrimMaterial> COPPER`
- `public static final ResourceKey<TrimMaterial> GOLD`
- `public static final ResourceKey<TrimMaterial> EMERALD`
- `public static final ResourceKey<TrimMaterial> DIAMOND`
- `public static final ResourceKey<TrimMaterial> LAPIS`
- `public static final ResourceKey<TrimMaterial> AMETHYST`

### Methods
- `public static void bootstrap(BootstapContext<TrimMaterial> p_267033_)`
- `public static Optional<Holder.Reference<TrimMaterial>> getFromIngredient(RegistryAccess p_266981_,  ItemStack p_267327_)`
- `private static void register(BootstapContext<TrimMaterial> p_268176_,  ResourceKey<TrimMaterial> p_268293_,  Item p_268156_,  Style p_268174_,  float p_268274_)`
- `private static void register(BootstapContext<TrimMaterial> p_268244_,  ResourceKey<TrimMaterial> p_268139_,  Item p_268311_,  Style p_268232_,  float p_268197_,  Map<ArmorMaterials,String> p_268352_)`
- `private static ResourceKey<TrimMaterial> registryKey(String p_266965_)`

## TrimPattern

*record* `net.minecraft.world.item.armortrim.TrimPattern`

### Fields
- `private final ResourceLocation assetId`
  The field for the assetId record component.
- `private final Holder<Item> templateItem`
  The field for the templateItem record component.
- `private final Component description`
  The field for the description record component.
- `private final boolean decal`
  The field for the decal record component.
- `public static final com.mojang.serialization.Codec<TrimPattern> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<TrimPattern>> CODEC`

### Methods
- `public Component copyWithStyle(Holder<TrimMaterial> p_266827_)`
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
- `public ResourceLocation assetId()`
  Returns the value of the assetId record component.
  - returns: the value of the assetId record component
- `public Holder<Item> templateItem()`
  Returns the value of the templateItem record component.
  - returns: the value of the templateItem record component
- `public Component description()`
  Returns the value of the description record component.
  - returns: the value of the description record component
- `public boolean decal()`
  Returns the value of the decal record component.
  - returns: the value of the decal record component

## TrimPatterns

*class* `net.minecraft.world.item.armortrim.TrimPatterns`

### Fields
- `public static final ResourceKey<TrimPattern> SENTRY`
- `public static final ResourceKey<TrimPattern> DUNE`
- `public static final ResourceKey<TrimPattern> COAST`
- `public static final ResourceKey<TrimPattern> WILD`
- `public static final ResourceKey<TrimPattern> WARD`
- `public static final ResourceKey<TrimPattern> EYE`
- `public static final ResourceKey<TrimPattern> VEX`
- `public static final ResourceKey<TrimPattern> TIDE`
- `public static final ResourceKey<TrimPattern> SNOUT`
- `public static final ResourceKey<TrimPattern> RIB`
- `public static final ResourceKey<TrimPattern> SPIRE`
- `public static final ResourceKey<TrimPattern> WAYFINDER`
- `public static final ResourceKey<TrimPattern> SHAPER`
- `public static final ResourceKey<TrimPattern> SILENCE`
- `public static final ResourceKey<TrimPattern> RAISER`
- `public static final ResourceKey<TrimPattern> HOST`

### Methods
- `public static void bootstrap(BootstapContext<TrimPattern> p_267319_)`
- `public static Optional<Holder.Reference<TrimPattern>> getFromTemplate(RegistryAccess p_267205_,  ItemStack p_267001_)`
- `private static void register(BootstapContext<TrimPattern> p_267064_,  Item p_267097_,  ResourceKey<TrimPattern> p_267079_)`
- `private static ResourceKey<TrimPattern> registryKey(String p_266889_)`
