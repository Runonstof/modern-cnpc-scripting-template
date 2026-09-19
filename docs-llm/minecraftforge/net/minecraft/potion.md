# net.minecraft.potion

- [Potion](#potion)
- [PotionAbsorption](#potionabsorption)
- [PotionAttackDamage](#potionattackdamage)
- [PotionEffect](#potioneffect)
- [PotionHealth](#potionhealth)
- [PotionHealthBoost](#potionhealthboost)
- [PotionHelper](#potionhelper)
- [PotionType](#potiontype)
- [PotionUtils](#potionutils)
## Potion

*class* `net.minecraft.potion.Potion`

All Implemented Interfaces: IForgeRegistryEntry<Potion>

### Fields
- `public static final RegistryNamespaced<ResourceLocation,Potion> REGISTRY`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static Potion getPotionById(int potionID)`
- `public static int getIdFromPotion(Potion potionIn)`
- `public static Potion getPotionFromResourceLocation(java.lang.String location)`
- `protected Potion setIconIndex(int p_76399_1_,  int p_76399_2_)`
- `public void performEffect(EntityLivingBase entityLivingBaseIn,  int amplifier)`
- `public void affectEntity(Entity source,  Entity indirectSource,  EntityLivingBase entityLivingBaseIn,  int amplifier,  double health)`
- `public boolean isReady(int duration,  int amplifier)`
- `public boolean isInstant()`
- `public Potion setPotionName(java.lang.String nameIn)`
- `public java.lang.String getName()`
- `protected Potion setEffectiveness(double effectivenessIn)`
- `public boolean hasStatusIcon()`
- `public int getStatusIconIndex()`
- `public boolean isBadEffect()`
- `public static java.lang.String getPotionDurationString(PotionEffect effect,  float durationFactor)`
- `public int getLiquidColor()`
- `public Potion registerPotionAttributeModifier(IAttribute attribute,  java.lang.String uniqueId,  double ammount,  int operation)`
- `public void removeAttributesModifiersFromEntity(EntityLivingBase entityLivingBaseIn,  AbstractAttributeMap attributeMapIn,  int amplifier)`
- `public java.util.Map<IAttribute,AttributeModifier> getAttributeModifierMap()`
- `public void applyAttributesModifiersToEntity(EntityLivingBase entityLivingBaseIn,  AbstractAttributeMap attributeMapIn,  int amplifier)`
- `public double getAttributeModifierAmount(int amplifier,  AttributeModifier modifier)`
- `public boolean shouldRender(PotionEffect effect)`
  If the Potion effect should be displayed in the players inventory
  - param: effect - the active PotionEffect
  - returns: true to display it (default), false to hide it.
- `public boolean shouldRenderInvText(PotionEffect effect)`
  If the standard PotionEffect text (name and duration) should be drawn when this potion is active.
  - param: effect - the active PotionEffect
  - returns: true to draw the standard text
- `public boolean shouldRenderHUD(PotionEffect effect)`
  If the Potion effect should be displayed in the player's ingame HUD
  - param: effect - the active PotionEffect
  - returns: true to display it (default), false to hide it.
- `@Deprecated public void renderInventoryEffect(int x,  int y,  PotionEffect effect,  Minecraft mc)` (deprecated)
  Deprecated. use renderInventoryEffect(PotionEffect, net.minecraft.client.gui.Gui, int, int, float)
  Called to draw the this Potion onto the player's inventory when it's active.
   This can be used to e.g. render Potion icons from your own texture.
  - param: x - the x coordinate
  - param: y - the y coordinate
  - param: effect - the active PotionEffect
  - param: mc - the Minecraft instance, for convenience
- `public void renderInventoryEffect(PotionEffect effect,  Gui gui,  int x,  int y,  float z)`
  Called to draw the this Potion onto the player's inventory when it's active.
   This can be used to e.g. render Potion icons from your own texture.
  - param: effect - the active PotionEffect
  - param: gui - the gui instance
  - param: x - the x coordinate
  - param: y - the y coordinate
  - param: z - the z level
- `@Deprecated public void renderHUDEffect(int x,  int y,  PotionEffect effect,  Minecraft mc,  float alpha)` (deprecated)
  Deprecated. use renderHUDEffect(PotionEffect, net.minecraft.client.gui.Gui, int, int, float, float)
  Called to draw the this Potion onto the player's ingame HUD when it's active.
   This can be used to e.g. render Potion icons from your own texture.
  - param: x - the x coordinate
  - param: y - the y coordinate
  - param: effect - the active PotionEffect
  - param: mc - the Minecraft instance, for convenience
  - param: alpha - the alpha value, blinks when the potion is about to run out
- `public void renderHUDEffect(PotionEffect effect,  Gui gui,  int x,  int y,  float z,  float alpha)`
  Called to draw the this Potion onto the player's ingame HUD when it's active.
   This can be used to e.g. render Potion icons from your own texture.
  - param: effect - the active PotionEffect
  - param: gui - the gui instance
  - param: x - the x coordinate
  - param: y - the y coordinate
  - param: z - the z level
  - param: alpha - the alpha value, blinks when the potion is about to run out
- `public java.util.List<ItemStack> getCurativeItems()`
  Get a fresh list of items that can cure this Potion.
   All new PotionEffects created from this Potion will call this to initialize the default curative items
  - returns: A list of items that can cure this Potion
- `public int getGuiSortColor(PotionEffect potionEffect)`
  Used for determining PotionEffect sort order in GUIs.
   Defaults to the PotionEffect's liquid color.
  - param: potionEffect - the PotionEffect instance containing the potion
  - returns: a value used to sort PotionEffects in GUIs
- `public boolean isBeneficial()`
- `public Potion setBeneficial()`
- `public static void registerPotions()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## PotionAbsorption

*class* `net.minecraft.potion.PotionAbsorption`

All Implemented Interfaces: IForgeRegistryEntry<Potion>

### Inherited fields
- from `net.minecraft.potion.Potion`: `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public void removeAttributesModifiersFromEntity(EntityLivingBase entityLivingBaseIn,  AbstractAttributeMap attributeMapIn,  int amplifier)`
- `public void applyAttributesModifiersToEntity(EntityLivingBase entityLivingBaseIn,  AbstractAttributeMap attributeMapIn,  int amplifier)`

### Inherited methods
- from `net.minecraft.potion.Potion`: `affectEntity`, `getAttributeModifierAmount`, `getAttributeModifierMap`, `getCurativeItems`, `getGuiSortColor`, `getIdFromPotion`, `getLiquidColor`, `getName`, `getPotionById`, `getPotionDurationString`, `getPotionFromResourceLocation`, `getStatusIconIndex`, `hasStatusIcon`, `isBadEffect`, `isBeneficial`, `isInstant`, `isReady`, `performEffect`, `registerPotionAttributeModifier`, `registerPotions`, `renderHUDEffect`, `renderHUDEffect`, `renderInventoryEffect`, `renderInventoryEffect`, `setBeneficial`, `setEffectiveness`, `setIconIndex`, `setPotionName`, `shouldRender`, `shouldRenderHUD`, `shouldRenderInvText`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## PotionAttackDamage

*class* `net.minecraft.potion.PotionAttackDamage`

All Implemented Interfaces: IForgeRegistryEntry<Potion>

### Fields
- `protected final double bonusPerLevel`

### Inherited fields
- from `net.minecraft.potion.Potion`: `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public double getAttributeModifierAmount(int amplifier,  AttributeModifier modifier)`

### Inherited methods
- from `net.minecraft.potion.Potion`: `affectEntity`, `applyAttributesModifiersToEntity`, `getAttributeModifierMap`, `getCurativeItems`, `getGuiSortColor`, `getIdFromPotion`, `getLiquidColor`, `getName`, `getPotionById`, `getPotionDurationString`, `getPotionFromResourceLocation`, `getStatusIconIndex`, `hasStatusIcon`, `isBadEffect`, `isBeneficial`, `isInstant`, `isReady`, `performEffect`, `registerPotionAttributeModifier`, `registerPotions`, `removeAttributesModifiersFromEntity`, `renderHUDEffect`, `renderHUDEffect`, `renderInventoryEffect`, `renderInventoryEffect`, `setBeneficial`, `setEffectiveness`, `setIconIndex`, `setPotionName`, `shouldRender`, `shouldRenderHUD`, `shouldRenderInvText`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## PotionEffect

*class* `net.minecraft.potion.PotionEffect`

All Implemented Interfaces: java.lang.Comparable<PotionEffect>

### Methods
- `public void combine(PotionEffect other)`
- `public Potion getPotion()`
- `public int getDuration()`
- `public int getAmplifier()`
- `public boolean getIsAmbient()`
- `public boolean doesShowParticles()`
- `public boolean onUpdate(EntityLivingBase entityIn)`
- `public void performEffect(EntityLivingBase entityIn)`
- `public java.lang.String getEffectName()`
- `public java.lang.String toString()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public NBTTagCompound writeCustomPotionEffectToNBT(NBTTagCompound nbt)`
- `public static PotionEffect readCustomPotionEffectFromNBT(NBTTagCompound nbt)`
- `public void setPotionDurationMax(boolean maxDuration)`
- `public int compareTo(PotionEffect p_compareTo_1_)`
- `public boolean getIsPotionDurationMax()`
- `public java.util.List<ItemStack> getCurativeItems()`
  Returns a list of curative items for the potion effect
   By default, this list is initialized using Potion.getCurativeItems()
  - returns: The list (ItemStack) of curative items for the potion effect
- `public boolean isCurativeItem(ItemStack stack)`
  Checks the given ItemStack to see if it is in the list of curative items for the potion effect
  - param: stack - The ItemStack being checked against the list of curative items for this PotionEffect
  - returns: true if the given ItemStack is in the list of curative items for this PotionEffect, false otherwise
- `public void setCurativeItems(java.util.List<ItemStack> curativeItems)`
  Sets the list of curative items for this potion effect, overwriting any already present
  - param: curativeItems - The list of ItemStacks being set to the potion effect
- `public void addCurativeItem(ItemStack stack)`
  Adds the given stack to the list of curative items for this PotionEffect
  - param: stack - The ItemStack being added to the curative item list

## PotionHealth

*class* `net.minecraft.potion.PotionHealth`

All Implemented Interfaces: IForgeRegistryEntry<Potion>

### Inherited fields
- from `net.minecraft.potion.Potion`: `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean isInstant()`
- `public boolean isReady(int duration,  int amplifier)`

### Inherited methods
- from `net.minecraft.potion.Potion`: `affectEntity`, `applyAttributesModifiersToEntity`, `getAttributeModifierAmount`, `getAttributeModifierMap`, `getCurativeItems`, `getGuiSortColor`, `getIdFromPotion`, `getLiquidColor`, `getName`, `getPotionById`, `getPotionDurationString`, `getPotionFromResourceLocation`, `getStatusIconIndex`, `hasStatusIcon`, `isBadEffect`, `isBeneficial`, `performEffect`, `registerPotionAttributeModifier`, `registerPotions`, `removeAttributesModifiersFromEntity`, `renderHUDEffect`, `renderHUDEffect`, `renderInventoryEffect`, `renderInventoryEffect`, `setBeneficial`, `setEffectiveness`, `setIconIndex`, `setPotionName`, `shouldRender`, `shouldRenderHUD`, `shouldRenderInvText`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## PotionHealthBoost

*class* `net.minecraft.potion.PotionHealthBoost`

All Implemented Interfaces: IForgeRegistryEntry<Potion>

### Inherited fields
- from `net.minecraft.potion.Potion`: `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public void removeAttributesModifiersFromEntity(EntityLivingBase entityLivingBaseIn,  AbstractAttributeMap attributeMapIn,  int amplifier)`

### Inherited methods
- from `net.minecraft.potion.Potion`: `affectEntity`, `applyAttributesModifiersToEntity`, `getAttributeModifierAmount`, `getAttributeModifierMap`, `getCurativeItems`, `getGuiSortColor`, `getIdFromPotion`, `getLiquidColor`, `getName`, `getPotionById`, `getPotionDurationString`, `getPotionFromResourceLocation`, `getStatusIconIndex`, `hasStatusIcon`, `isBadEffect`, `isBeneficial`, `isInstant`, `isReady`, `performEffect`, `registerPotionAttributeModifier`, `registerPotions`, `renderHUDEffect`, `renderHUDEffect`, `renderInventoryEffect`, `renderInventoryEffect`, `setBeneficial`, `setEffectiveness`, `setIconIndex`, `setPotionName`, `shouldRender`, `shouldRenderHUD`, `shouldRenderInvText`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## PotionHelper

*class* `net.minecraft.potion.PotionHelper`

### Methods
- `public static boolean isReagent(ItemStack stack)`
- `protected static boolean isItemConversionReagent(ItemStack stack)`
- `protected static boolean isTypeConversionReagent(ItemStack stack)`
- `public static boolean hasConversions(ItemStack input,  ItemStack reagent)`
- `protected static boolean hasItemConversions(ItemStack input,  ItemStack reagent)`
- `protected static boolean hasTypeConversions(ItemStack input,  ItemStack reagent)`
- `public static ItemStack doReaction(ItemStack reagent,  ItemStack potionIn)`
- `public static void init()`
- `public static void addContainerRecipe(ItemPotion p_193355_0_,  Item p_193355_1_,  ItemPotion p_193355_2_)`
- `public static void addContainer(ItemPotion p_193354_0_)`
- `public static void addMix(PotionType p_193357_0_,  Item p_193357_1_,  PotionType p_193357_2_)`
- `public static void addMix(PotionType p_193356_0_,  Ingredient p_193356_1_,  PotionType p_193356_2_)`

## PotionType

*class* `net.minecraft.potion.PotionType`

All Implemented Interfaces: IForgeRegistryEntry<PotionType>

### Fields
- `public static final RegistryNamespacedDefaultedByKey<ResourceLocation,PotionType> REGISTRY`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static PotionType getPotionTypeForName(java.lang.String p_185168_0_)`
- `public java.lang.String getNamePrefixed(java.lang.String p_185174_1_)`
- `public java.util.List<PotionEffect> getEffects()`
- `public static void registerPotionTypes()`
- `protected static void registerPotionType(java.lang.String p_185173_0_,  PotionType p_185173_1_)`
- `public boolean hasInstantEffect()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## PotionUtils

*class* `net.minecraft.potion.PotionUtils`

### Methods
- `public static java.util.List<PotionEffect> getEffectsFromStack(ItemStack stack)`
- `public static java.util.List<PotionEffect> mergeEffects(PotionType potionIn,  java.util.Collection<PotionEffect> effects)`
- `public static java.util.List<PotionEffect> getEffectsFromTag(NBTTagCompound tag)`
- `public static java.util.List<PotionEffect> getFullEffectsFromItem(ItemStack itemIn)`
- `public static java.util.List<PotionEffect> getFullEffectsFromTag(NBTTagCompound tag)`
- `public static void addCustomPotionEffectToList(NBTTagCompound tag,  java.util.List<PotionEffect> effectList)`
- `public static int getColor(ItemStack p_190932_0_)`
- `public static int getPotionColor(PotionType potionIn)`
- `public static int getPotionColorFromEffectList(java.util.Collection<PotionEffect> effects)`
- `public static PotionType getPotionFromItem(ItemStack itemIn)`
- `public static PotionType getPotionTypeFromNBT(NBTTagCompound tag)`
- `public static ItemStack addPotionToItemStack(ItemStack itemIn,  PotionType potionIn)`
- `public static ItemStack appendEffects(ItemStack itemIn,  java.util.Collection<PotionEffect> effects)`
- `public static void addPotionTooltip(ItemStack itemIn,  java.util.List<java.lang.String> lores,  float durationFactor)`
