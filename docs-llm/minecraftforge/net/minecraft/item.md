# net.minecraft.item

- [EnumAction](#enumaction)
- [EnumDyeColor](#enumdyecolor)
- [EnumRarity](#enumrarity)
- [IItemPropertyGetter](#iitempropertygetter)
- [Item](#item)
- [Item.ToolMaterial](#item.toolmaterial)
- [ItemAir](#itemair)
- [ItemAnvilBlock](#itemanvilblock)
- [ItemAppleGold](#itemapplegold)
- [ItemArmor](#itemarmor)
- [ItemArmor.ArmorMaterial](#itemarmor.armormaterial)
- [ItemArmorStand](#itemarmorstand)
- [ItemArrow](#itemarrow)
- [ItemAxe](#itemaxe)
- [ItemBanner](#itembanner)
- [ItemBed](#itembed)
- [ItemBlock](#itemblock)
- [ItemBlockSpecial](#itemblockspecial)
- [ItemBoat](#itemboat)
- [ItemBook](#itembook)
- [ItemBow](#itembow)
- [ItemBucket](#itembucket)
- [ItemBucketMilk](#itembucketmilk)
- [ItemCarrotOnAStick](#itemcarrotonastick)
- [ItemChorusFruit](#itemchorusfruit)
- [ItemClock](#itemclock)
- [ItemCloth](#itemcloth)
- [ItemCoal](#itemcoal)
- [ItemColored](#itemcolored)
- [ItemCompass](#itemcompass)
- [ItemDoor](#itemdoor)
- [ItemDye](#itemdye)
- [ItemEgg](#itemegg)
- [ItemElytra](#itemelytra)
- [ItemEmptyMap](#itememptymap)
- [ItemEnchantedBook](#itemenchantedbook)
- [ItemEndCrystal](#itemendcrystal)
- [ItemEnderEye](#itemendereye)
- [ItemEnderPearl](#itemenderpearl)
- [ItemExpBottle](#itemexpbottle)
- [ItemFireball](#itemfireball)
- [ItemFirework](#itemfirework)
- [ItemFireworkCharge](#itemfireworkcharge)
- [ItemFishFood](#itemfishfood)
- [ItemFishFood.FishType](#itemfishfood.fishtype)
- [ItemFishingRod](#itemfishingrod)
- [ItemFlintAndSteel](#itemflintandsteel)
- [ItemFood](#itemfood)
- [ItemGlassBottle](#itemglassbottle)
- [ItemHangingEntity](#itemhangingentity)
- [ItemHoe](#itemhoe)
- [ItemKnowledgeBook](#itemknowledgebook)
- [ItemLead](#itemlead)
- [ItemLeaves](#itemleaves)
- [ItemLilyPad](#itemlilypad)
- [ItemLingeringPotion](#itemlingeringpotion)
- [ItemMap](#itemmap)
- [ItemMapBase](#itemmapbase)
- [ItemMinecart](#itemminecart)
- [ItemMonsterPlacer](#itemmonsterplacer)
- [ItemMultiTexture](#itemmultitexture)
- [ItemMultiTexture.Mapper](#itemmultitexture.mapper)
- [ItemNameTag](#itemnametag)
- [ItemPickaxe](#itempickaxe)
- [ItemPiston](#itempiston)
- [ItemPotion](#itempotion)
- [ItemRecord](#itemrecord)
- [ItemRedstone](#itemredstone)
- [ItemSaddle](#itemsaddle)
- [ItemSeedFood](#itemseedfood)
- [ItemSeeds](#itemseeds)
- [ItemShears](#itemshears)
- [ItemShield](#itemshield)
- [ItemShulkerBox](#itemshulkerbox)
- [ItemSign](#itemsign)
- [ItemSimpleFoiled](#itemsimplefoiled)
- [ItemSkull](#itemskull)
- [ItemSlab](#itemslab)
- [ItemSnow](#itemsnow)
- [ItemSnowball](#itemsnowball)
- [ItemSoup](#itemsoup)
- [ItemSpade](#itemspade)
- [ItemSpectralArrow](#itemspectralarrow)
- [ItemSplashPotion](#itemsplashpotion)
- [ItemStack](#itemstack)
- [ItemSword](#itemsword)
- [ItemTippedArrow](#itemtippedarrow)
- [ItemTool](#itemtool)
- [ItemWritableBook](#itemwritablebook)
- [ItemWrittenBook](#itemwrittenbook)
## EnumAction

*enum* `net.minecraft.item.EnumAction`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumAction>

### Fields
- `public static final EnumAction NONE`
- `public static final EnumAction EAT`
- `public static final EnumAction DRINK`
- `public static final EnumAction BLOCK`
- `public static final EnumAction BOW`

### Methods
- `public static EnumAction[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumAction c : EnumAction.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumAction valueOf(java.lang.String name)`
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

## EnumDyeColor

*enum* `net.minecraft.item.EnumDyeColor`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumDyeColor>, IStringSerializable

### Fields
- `public static final EnumDyeColor WHITE`
- `public static final EnumDyeColor ORANGE`
- `public static final EnumDyeColor MAGENTA`
- `public static final EnumDyeColor LIGHT_BLUE`
- `public static final EnumDyeColor YELLOW`
- `public static final EnumDyeColor LIME`
- `public static final EnumDyeColor PINK`
- `public static final EnumDyeColor GRAY`
- `public static final EnumDyeColor SILVER`
- `public static final EnumDyeColor CYAN`
- `public static final EnumDyeColor PURPLE`
- `public static final EnumDyeColor BLUE`
- `public static final EnumDyeColor BROWN`
- `public static final EnumDyeColor GREEN`
- `public static final EnumDyeColor RED`
- `public static final EnumDyeColor BLACK`

### Methods
- `public static EnumDyeColor[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumDyeColor c : EnumDyeColor.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumDyeColor valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getMetadata()`
- `public int getDyeDamage()`
- `public java.lang.String getDyeColorName()`
- `public java.lang.String getUnlocalizedName()`
- `public int getColorValue()`
- `public float[] getColorComponentValues()`
- `public static EnumDyeColor byDyeDamage(int damage)`
- `public static EnumDyeColor byMetadata(int meta)`
- `public java.lang.String toString()`
- `public java.lang.String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## EnumRarity

*enum* `net.minecraft.item.EnumRarity`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EnumRarity>, IRarity

### Fields
- `public final TextFormatting rarityColor`
- `public final java.lang.String rarityName`
- `public static final EnumRarity COMMON`
- `public static final EnumRarity UNCOMMON`
- `public static final EnumRarity RARE`
- `public static final EnumRarity EPIC`

### Methods
- `public static EnumRarity[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EnumRarity c : EnumRarity.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EnumRarity valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public TextFormatting getColor()`
- `public java.lang.String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IItemPropertyGetter

*interface* `net.minecraft.item.IItemPropertyGetter`

### Methods
- `float apply(ItemStack stack,  World worldIn,  EntityLivingBase entityIn)`

## Item

*class* `net.minecraft.item.Item`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `public static final RegistryNamespaced<ResourceLocation,Item> REGISTRY`
- `protected static final java.util.UUID ATTACK_DAMAGE_MODIFIER`
- `protected static final java.util.UUID ATTACK_SPEED_MODIFIER`
- `protected static java.util.Random itemRand`
- `protected int maxStackSize`
- `protected boolean bFull3D`
- `protected boolean hasSubtypes`
- `protected boolean canRepair`

### Inherited fields
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static int getIdFromItem(Item itemIn)`
- `public static Item getItemById(int id)`
- `public static Item getItemFromBlock(Block blockIn)`
- `public static Item getByNameOrId(java.lang.String id)`
- `public final void addPropertyOverride(ResourceLocation key,  IItemPropertyGetter getter)`
- `public IItemPropertyGetter getPropertyGetter(ResourceLocation key)`
- `public boolean updateItemStackNBT(NBTTagCompound nbt)`
- `public boolean hasCustomProperties()`
- `public Item setMaxStackSize(int maxStackSize)`
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public float getDestroySpeed(ItemStack stack,  IBlockState state)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public ItemStack onItemUseFinish(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving)`
- `@Deprecated public int getItemStackLimit()` (deprecated)
  Deprecated.
- `public int getMetadata(int damage)`
- `public boolean getHasSubtypes()`
- `public Item setHasSubtypes(boolean hasSubtypes)`
- `@Deprecated public int getMaxDamage()` (deprecated)
  Deprecated.
- `public Item setMaxDamage(int maxDamageIn)`
- `public boolean isDamageable()`
- `public boolean hitEntity(ItemStack stack,  EntityLivingBase target,  EntityLivingBase attacker)`
- `public boolean onBlockDestroyed(ItemStack stack,  World worldIn,  IBlockState state,  BlockPos pos,  EntityLivingBase entityLiving)`
- `public boolean canHarvestBlock(IBlockState blockIn)`
- `public boolean itemInteractionForEntity(ItemStack stack,  EntityPlayer playerIn,  EntityLivingBase target,  EnumHand hand)`
- `public Item setFull3D()`
- `public boolean isFull3D()`
- `public boolean shouldRotateAroundWhenRendering()`
- `public Item setUnlocalizedName(java.lang.String unlocalizedName)`
- `public java.lang.String getUnlocalizedNameInefficiently(ItemStack stack)`
- `public java.lang.String getUnlocalizedName()`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public Item setContainerItem(Item containerItem)`
- `public boolean getShareTag()`
- `public Item getContainerItem()`
- `@Deprecated public boolean hasContainerItem()` (deprecated)
  Deprecated.
- `public void onUpdate(ItemStack stack,  World worldIn,  Entity entityIn,  int itemSlot,  boolean isSelected)`
- `public void onCreated(ItemStack stack,  World worldIn,  EntityPlayer playerIn)`
- `public boolean isMap()`
- `public EnumAction getItemUseAction(ItemStack stack)`
- `public int getMaxItemUseDuration(ItemStack stack)`
- `public void onPlayerStoppedUsing(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving,  int timeLeft)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public boolean hasEffect(ItemStack stack)`
- `@Deprecated public EnumRarity getRarity(ItemStack stack)` (deprecated)
  Deprecated.
- `public boolean isEnchantable(ItemStack stack)`
- `protected RayTraceResult rayTrace(World worldIn,  EntityPlayer playerIn,  boolean useLiquids)`
- `public int getItemEnchantability()`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `protected boolean isInCreativeTab(CreativeTabs targetTab)`
- `public CreativeTabs getCreativeTab()`
- `public Item setCreativeTab(CreativeTabs tab)`
- `public boolean canItemEditBlocks()`
- `public boolean getIsRepairable(ItemStack toRepair,  ItemStack repair)`
- `@Deprecated public <any> getItemAttributeModifiers(EntityEquipmentSlot equipmentSlot)` (deprecated)
  Deprecated.
- `public <any> getAttributeModifiers(EntityEquipmentSlot slot,  ItemStack stack)`
  ItemStack sensitive version of getItemAttributeModifiers
- `public boolean onDroppedByPlayer(ItemStack item,  EntityPlayer player)`
  Called when a player drops the item into the world,
   returning false from this will prevent the item from
   being removed from the players inventory and spawning
   in the world
  - param: player - The player that dropped the item
  - param: item - The item stack, before the item is removed.
- `public java.lang.String getHighlightTip(ItemStack item,  java.lang.String displayName)`
  Allow the item one last chance to modify its name used for the
   tool highlight useful for adding something extra that can't be removed
   by a user in the displayed name, such as a mode of operation.
  - param: item - the ItemStack for the item.
  - param: displayName - the name that will be displayed unless it is changed in this method.
- `public EnumActionResult onItemUseFirst(EntityPlayer player,  World world,  BlockPos pos,  EnumFacing side,  float hitX,  float hitY,  float hitZ,  EnumHand hand)`
  This is called when the item is used, before the block is activated.
  - param: stack - The Item Stack
  - param: player - The Player that used the item
  - param: world - The Current World
  - param: pos - Target position
  - param: side - The side of the target hit
  - param: hand - Which hand the item is being held in.
  - returns: Return PASS to allow vanilla handling, any other to skip normal code.
- `public boolean isRepairable()`
  Called by CraftingManager to determine if an item is reparable.
  - returns: True if reparable
- `public Item setNoRepair()`
  Call to disable repair recipes.
  - returns: The current Item instance
- `public float getXpRepairRatio(ItemStack stack)`
  Determines the amount of durability the mending enchantment
   will repair, on average, per point of experience.
- `public NBTTagCompound getNBTShareTag(ItemStack stack)`
  Override this method to change the NBT data being sent to the client.
   You should ONLY override this when you have no other choice, as this might change behavior client side!
  
   Note that this will sometimes be applied multiple times, the following MUST be supported:
   Item item = stack.getItem();
   NBTTagCompound nbtShare1 = item.getNBTShareTag(stack);
   stack.setTagCompound(nbtShare1);
   NBTTagCompound nbtShare2 = item.getNBTShareTag(stack);
   assert nbtShare1.equals(nbtShare2);
  - param: stack - The stack to send the NBT tag for
  - returns: The NBT tag
- `public void readNBTShareTag(ItemStack stack,  NBTTagCompound nbt)`
  Override this method to decide what to do with the NBT data received from getNBTShareTag().
  - param: stack - The stack that received NBT
  - param: nbt - Received NBT, can be null
- `public boolean onBlockStartBreak(ItemStack itemstack,  BlockPos pos,  EntityPlayer player)`
  Called before a block is broken. Return true to prevent default block harvesting.
  
   Note: In SMP, this is called on both client and server sides!
  - param: itemstack - The current ItemStack
  - param: pos - Block's position in world
  - param: player - The Player that is wielding the item
  - returns: True to prevent harvesting, false to continue as normal
- `public void onUsingTick(ItemStack stack,  EntityLivingBase player,  int count)`
  Called each tick while using an item.
  - param: stack - The Item being used
  - param: player - The Player using the item
  - param: count - The amount of time in tick the item has been used for continuously
- `public boolean onLeftClickEntity(ItemStack stack,  EntityPlayer player,  Entity entity)`
  Called when the player Left Clicks (attacks) an entity.
   Processed before damage is done, if return value is true further processing is canceled
   and the entity is not attacked.
  - param: stack - The Item being used
  - param: player - The player that is attacking
  - param: entity - The entity being attacked
  - returns: True to cancel the rest of the interaction.
- `public ItemStack getContainerItem(ItemStack itemStack)`
  ItemStack sensitive version of getContainerItem.
   Returns a full ItemStack instance of the result.
  - param: itemStack - The current ItemStack
  - returns: The resulting ItemStack
- `public boolean hasContainerItem(ItemStack stack)`
  ItemStack sensitive version of hasContainerItem
  - param: stack - The current item stack
  - returns: True if this item has a 'container'
- `public int getEntityLifespan(ItemStack itemStack,  World world)`
  Retrieves the normal 'lifespan' of this item when it is dropped on the ground as a EntityItem.
   This is in ticks, standard result is 6000, or 5 mins.
  - param: itemStack - The current ItemStack
  - param: world - The world the entity is in
  - returns: The normal lifespan in ticks.
- `public boolean hasCustomEntity(ItemStack stack)`
  Determines if this Item has a special entity for when they are in the world.
   Is called when a EntityItem is spawned in the world, if true and Item#createCustomEntity
   returns non null, the EntityItem will be destroyed and the new Entity will be added to the world.
  - param: stack - The current item stack
  - returns: True of the item has a custom entity, If true, Item#createCustomEntity will be called
- `public Entity createEntity(World world,  Entity location,  ItemStack itemstack)`
  This function should return a new entity to replace the dropped item.
   Returning null here will not kill the EntityItem and will leave it to function normally.
   Called when the item it placed in a world.
  - param: world - The world object
  - param: location - The EntityItem object, useful for getting the position of the entity
  - param: itemstack - The current item stack
  - returns: A new Entity object to spawn or null
- `public boolean onEntityItemUpdate(EntityItem entityItem)`
  Called by the default implemetation of EntityItem's onUpdate method, allowing for cleaner
   control over the update of the item without having to write a subclass.
  - param: entityItem - The entity Item
  - returns: Return true to skip any further update code.
- `public CreativeTabs[] getCreativeTabs()`
  Gets a list of tabs that items belonging to this class can display on,
   combined properly with getSubItems allows for a single item to span
   many sub-items across many tabs.
  - returns: A list of all tabs that this item could possibly be one.
- `public float getSmeltingExperience(ItemStack item)`
  Determines the base experience for a player when they remove this item from a furnace slot.
   This number must be between 0 and 1 for it to be valid.
   This number will be multiplied by the stack size to get the total experience.
  - param: item - The item stack the player is picking up.
  - returns: The amount to award for each item.
- `public boolean doesSneakBypassUse(ItemStack stack,  IBlockAccess world,  BlockPos pos,  EntityPlayer player)`
  Should this item, when held, allow sneak-clicks to pass through to the underlying block?
  - param: world - The world
  - param: pos - Block position in world
  - param: player - The Player that is wielding the item
- `public void onArmorTick(World world,  EntityPlayer player,  ItemStack itemStack)`
  Called to tick armor in the armor slot. Override to do something
- `public boolean isValidArmor(ItemStack stack,  EntityEquipmentSlot armorType,  Entity entity)`
  Determines if the specific ItemStack can be placed in the specified armor slot, for the entity.
  
   TODO: Change name to canEquip in 1.13?
  - param: stack - The ItemStack
  - param: armorType - Armor slot to be verified.
  - param: entity - The entity trying to equip the armor
  - returns: True if the given ItemStack can be inserted in the slot
- `public EntityEquipmentSlot getEquipmentSlot(ItemStack stack)`
  Override this to set a non-default armor slot for an ItemStack, but
   do not use this to get the armor slot of said stack; for that, use
   EntityLiving.getSlotForItemStack(ItemStack).
  - param: stack - the ItemStack
  - returns: the armor slot of the ItemStack, or null to let the default
 vanilla logic as per EntityLiving.getSlotForItemStack(stack) decide
- `public boolean isBookEnchantable(ItemStack stack,  ItemStack book)`
  Allow or forbid the specific book/item combination as an anvil enchant
  - param: stack - The item
  - param: book - The book
  - returns: if the enchantment is allowed
- `public java.lang.String getArmorTexture(ItemStack stack,  Entity entity,  EntityEquipmentSlot slot,  java.lang.String type)`
  Called by RenderBiped and RenderPlayer to determine the armor texture that
   should be use for the currently equipped item.
   This will only be called on instances of ItemArmor.
  
   Returning null from this function will use the default value.
  - param: stack - ItemStack for the equipped armor
  - param: entity - The entity wearing the armor
  - param: slot - The slot the armor is in
  - param: type - The subtype, can be null or "overlay"
  - returns: Path of texture to bind, or null to use default
- `public FontRenderer getFontRenderer(ItemStack stack)`
  Returns the font renderer used to render tooltips and overlays for this item.
   Returning null will use the standard font renderer.
  - param: stack - The current item stack
  - returns: A instance of FontRenderer or null to use default
- `public ModelBiped getArmorModel(EntityLivingBase entityLiving,  ItemStack itemStack,  EntityEquipmentSlot armorSlot,  ModelBiped _default)`
  Override this method to have an item handle its own armor rendering.
  - param: entityLiving - The entity wearing the armor
  - param: itemStack - The itemStack to render the model of
  - param: armorSlot - The slot the armor is in
  - param: _default - Original armor model. Will have attributes set.
  - returns: A ModelBiped to render instead of the default
- `public boolean onEntitySwing(EntityLivingBase entityLiving,  ItemStack stack)`
  Called when a entity tries to play the 'swing' animation.
  - param: entityLiving - The entity swinging the item.
  - param: stack - The Item stack
  - returns: True to cancel any further processing by EntityLiving
- `public void renderHelmetOverlay(ItemStack stack,  EntityPlayer player,  ScaledResolution resolution,  float partialTicks)`
  Called when the client starts rendering the HUD, for whatever item the player currently has as a helmet.
   This is where pumpkins would render there overlay.
  - param: stack - The ItemStack that is equipped
  - param: player - Reference to the current client entity
  - param: resolution - Resolution information about the current viewport and configured GUI Scale
  - param: partialTicks - Partial ticks for the renderer, useful for interpolation
- `public int getDamage(ItemStack stack)`
  Return the itemDamage represented by this ItemStack. Defaults to the itemDamage field on ItemStack, but can be overridden here for other sources such as NBT.
  - param: stack - The itemstack that is damaged
  - returns: the damage value
- `public int getMetadata(ItemStack stack)`
  This used to be 'display damage' but its really just 'aux' data in the ItemStack, usually shares the same variable as damage.
  - param: stack -
- `public boolean showDurabilityBar(ItemStack stack)`
  Determines if the durability bar should be rendered for this item.
   Defaults to vanilla stack.isDamaged behavior.
   But modders can use this for any data they wish.
  - param: stack - The current Item Stack
  - returns: True if it should render the 'durability' bar.
- `public double getDurabilityForDisplay(ItemStack stack)`
  Queries the percentage of the 'Durability' bar that should be drawn.
  - param: stack - The current ItemStack
  - returns: 0.0 for 100% (no damage / full bar), 1.0 for 0% (fully damaged / empty bar)
- `public int getRGBDurabilityForDisplay(ItemStack stack)`
  Returns the packed int RGB value used to render the durability bar in the GUI.
   Defaults to a value based on the hue scaled based on getDurabilityForDisplay(net.minecraft.item.ItemStack), but can be overriden.
  - param: stack - Stack to get durability from
  - returns: A packed RGB value for the durability colour (0x00RRGGBB)
- `public int getMaxDamage(ItemStack stack)`
  Return the maxDamage for this ItemStack. Defaults to the maxDamage field in this item,
   but can be overridden here for other sources such as NBT.
  - param: stack - The itemstack that is damaged
  - returns: the damage value
- `public boolean isDamaged(ItemStack stack)`
  Return if this itemstack is damaged. Note only called if isDamageable() is true.
  - param: stack - the stack
  - returns: if the stack is damaged
- `public void setDamage(ItemStack stack,  int damage)`
  Set the damage for this itemstack. Note, this method is responsible for zero checking.
  - param: stack - the stack
  - param: damage - the new damage value
- `public boolean canDestroyBlockInCreative(World world,  BlockPos pos,  ItemStack stack,  EntityPlayer player)`
  Checked from PlayerControllerMP.onPlayerDestroyBlock()
   when a creative player left-clicks a block with this item.
   Also checked from ForgeHooks.onBlockBreakEvent()
   to prevent sending an event.
  - returns: true if the given player can destroy specified block in creative mode with this item
- `public boolean canHarvestBlock(IBlockState state,  ItemStack stack)`
  ItemStack sensitive version of canHarvestBlock(IBlockState)
  - param: state - The block trying to harvest
  - param: stack - The itemstack used to harvest the block
  - returns: true if can harvest the block
- `public int getItemStackLimit(ItemStack stack)`
  Gets the maximum number of items that this stack should be able to hold.
   This is a ItemStack (and thus NBT) sensitive version of Item.getItemStackLimit()
  - param: stack - The ItemStack
  - returns: The maximum number this item can be stacked to
- `public void setHarvestLevel(java.lang.String toolClass,  int level)`
  Sets or removes the harvest level for the specified tool class.
  - param: toolClass - Class
  - param: level - Harvest level:
 Wood: 0
 Stone: 1
 Iron: 2
 Diamond: 3
 Gold: 0
- `public java.util.Set<java.lang.String> getToolClasses(ItemStack stack)`
- `public int getHarvestLevel(ItemStack stack,  java.lang.String toolClass,  EntityPlayer player,  IBlockState blockState)`
  Queries the harvest level of this item stack for the specified tool class,
   Returns -1 if this tool is not of the specified type
  - param: stack - This item stack instance
  - param: toolClass - Tool Class
  - param: player - The player trying to harvest the given blockstate
  - param: blockState - The block to harvest
  - returns: Harvest level, or -1 if not the specified tool type.
- `public int getItemEnchantability(ItemStack stack)`
  ItemStack sensitive version of getItemEnchantability
  - param: stack - The ItemStack
  - returns: the item echantability value
- `public boolean canApplyAtEnchantingTable(ItemStack stack,  Enchantment enchantment)`
  Checks whether an item can be enchanted with a certain enchantment. This applies specifically to enchanting an item in the enchanting table and is called when retrieving the list of possible enchantments for an item.
   Enchantments may additionally (or exclusively) be doing their own checks in Enchantment.canApplyAtEnchantingTable(ItemStack); check the individual implementation for reference.
   By default this will check if the enchantment type is valid for this item type.
  - param: stack - the item stack to be enchanted
  - param: enchantment - the enchantment to be applied
  - returns: true if the enchantment can be applied to this item
- `public boolean isBeaconPayment(ItemStack stack)`
  Whether this Item can be used as a payment to activate the vanilla beacon.
  - param: stack - the ItemStack
  - returns: true if this Item can be used
- `public boolean shouldCauseReequipAnimation(ItemStack oldStack,  ItemStack newStack,  boolean slotChanged)`
  Determine if the player switching between these two item stacks
  - param: oldStack - The old stack that was equipped
  - param: newStack - The new stack
  - param: slotChanged - If the current equipped slot was changed,
 Vanilla does not play the animation if you switch between two
 slots that hold the exact same item.
  - returns: True to play the item change animation
- `public boolean shouldCauseBlockBreakReset(ItemStack oldStack,  ItemStack newStack)`
  Called when the player is mining a block and the item in his hand changes.
   Allows to not reset blockbreaking if only NBT or similar changes.
  - param: oldStack - The old stack that was used for mining. Item in players main hand
  - param: newStack - The new stack
  - returns: True to reset block break progress
- `public boolean canContinueUsing(ItemStack oldStack,  ItemStack newStack)`
  Called while an item is in 'active' use to determine if usage should continue.
   Allows items to continue being used while sustaining damage, for example.
  - param: oldStack - the previous 'active' stack
  - param: newStack - the stack currently in the active hand
  - returns: true to set the new stack to active and continue using it
- `public java.lang.String getCreatorModId(ItemStack itemStack)`
  Called to get the Mod ID of the mod that *created* the ItemStack,
   instead of the real Mod ID that *registered* it.
  
   For example the Forge Universal Bucket creates a subitem for each modded fluid,
   and it returns the modded fluid's Mod ID here.
  
   Mods that register subitems for other mods can override this.
   Informational mods can call it to show the mod that created the item.
  - param: itemStack - the ItemStack to check
  - returns: the Mod ID for the ItemStack, or
 null when there is no specially associated mod and IForgeRegistryEntry.Impl.getRegistryName() would return null.
- `public ICapabilityProvider initCapabilities(ItemStack stack,  NBTTagCompound nbt)`
  Called from ItemStack.setItem, will hold extra data for the life of this ItemStack.
   Can be retrieved from stack.getCapabilities()
   The NBT can be null if this is not called from readNBT or if the item the stack is
   changing FROM is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem() to see the OLD item.
   Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold capabilities for the life of this item.
- `public <any> getAnimationParameters(ItemStack stack,  World world,  EntityLivingBase entity)`
- `public boolean canDisableShield(ItemStack stack,  ItemStack shield,  EntityLivingBase entity,  EntityLivingBase attacker)`
  Can this Item disable a shield
  - param: stack - The ItemStack
  - param: shield - The shield in question
  - param: entity - The EntityLivingBase holding the shield
  - param: attacker - The EntityLivingBase holding the ItemStack
- `public boolean isShield(ItemStack stack,  EntityLivingBase entity)`
  Is this Item a shield
  - param: stack - The ItemStack
  - param: entity - The Entity holding the ItemStack
  - returns: True if the ItemStack is considered a shield
- `public int getItemBurnTime(ItemStack itemStack)`
  - returns: the fuel burn time for this itemStack in a furnace.
 Return 0 to make it not act as a fuel.
 Return -1 to let the default vanilla logic decide.
- `public HorseArmorType getHorseArmorType(ItemStack stack)`
  Returns an enum constant of type HorseArmorType.
   The returned enum constant will be used to determine the armor value and texture of this item when equipped.
  - param: stack - the armor stack
  - returns: an enum constant of type HorseArmorType. Return HorseArmorType.NONE if this is not horse armor
- `public java.lang.String getHorseArmorTexture(EntityLiving wearer,  ItemStack stack)`
- `public void onHorseArmorTick(World world,  EntityLiving horse,  ItemStack armor)`
  Called every tick from EntityHorse#onUpdate() on the item in the armor slot.
  - param: world - the world the horse is in
  - param: horse - the horse wearing this armor
  - param: armor - the armor itemstack
- `public final TileEntityItemStackRenderer getTileEntityItemStackRenderer()`
  - returns: This Item's renderer, or the default instance if it does not have one.
- `public void setTileEntityItemStackRenderer(TileEntityItemStackRenderer teisr)`
- `public IRarity getForgeRarity(ItemStack stack)`
- `public static void registerItems()`
- `protected static void registerItemBlock(Block blockIn,  Item itemIn)`
- `public ItemStack getDefaultInstance()`

### Inherited methods
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## Item.ToolMaterial

*enum* `net.minecraft.item.Item.ToolMaterial`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Item.ToolMaterial>

Enclosing class: Item

### Fields
- `public static final Item.ToolMaterial WOOD`
- `public static final Item.ToolMaterial STONE`
- `public static final Item.ToolMaterial IRON`
- `public static final Item.ToolMaterial DIAMOND`
- `public static final Item.ToolMaterial GOLD`

### Methods
- `public static Item.ToolMaterial[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Item.ToolMaterial c : Item.ToolMaterial.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Item.ToolMaterial valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getMaxUses()`
- `public float getEfficiency()`
- `public float getAttackDamage()`
- `public int getHarvestLevel()`
- `public int getEnchantability()`
- `@Deprecated public Item getRepairItem()` (deprecated)
  Deprecated.
- `public Item.ToolMaterial setRepairItem(ItemStack stack)`
- `public ItemStack getRepairItemStack()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ItemAir

*class* `net.minecraft.item.ItemAir`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public java.lang.String getUnlocalizedName()`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemAnvilBlock

*class* `net.minecraft.item.ItemAnvilBlock`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemMultiTexture`: `nameFunction`, `unused`
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMetadata(int damage)`

### Inherited methods
- from `net.minecraft.item.ItemMultiTexture`: `getUnlocalizedName`
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemAppleGold

*class* `net.minecraft.item.ItemAppleGold`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemFood`: `itemUseDuration`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean hasEffect(ItemStack stack)`
- `public EnumRarity getRarity(ItemStack stack)`
- `protected void onFoodEaten(ItemStack stack,  World worldIn,  EntityPlayer player)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`

### Inherited methods
- from `net.minecraft.item.ItemFood`: `getHealAmount`, `getItemUseAction`, `getMaxItemUseDuration`, `getSaturationModifier`, `isWolfsFavoriteMeat`, `onItemRightClick`, `onItemUseFinish`, `setAlwaysEdible`, `setPotionEffect`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemArmor

*class* `net.minecraft.item.ItemArmor`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `public static final java.lang.String[] EMPTY_SLOT_NAMES`
- `public static final IBehaviorDispenseItem DISPENSER_BEHAVIOR`
- `public final EntityEquipmentSlot armorType`
- `public final int damageReduceAmount`
- `public final float toughness`
- `public final int renderIndex`

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static ItemStack dispenseArmor(IBlockSource blockSource,  ItemStack stack)`
- `public EntityEquipmentSlot getEquipmentSlot()`
- `public int getItemEnchantability()`
- `public ItemArmor.ArmorMaterial getArmorMaterial()`
- `public boolean hasColor(ItemStack stack)`
- `public int getColor(ItemStack stack)`
- `public void removeColor(ItemStack stack)`
- `public void setColor(ItemStack stack,  int color)`
- `public boolean getIsRepairable(ItemStack toRepair,  ItemStack repair)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public <any> getItemAttributeModifiers(EntityEquipmentSlot equipmentSlot)`
- `public boolean hasOverlay(ItemStack stack)`
  Determines if this armor will be rendered with the secondary 'overlay' texture.
   If this is true, the first texture will be rendered using a tint of the color
   specified by getColor(ItemStack)
  - param: stack - The stack
  - returns: true/false

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemArmor.ArmorMaterial

*enum* `net.minecraft.item.ItemArmor.ArmorMaterial`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ItemArmor.ArmorMaterial>

Enclosing class: ItemArmor

### Fields
- `public ItemStack repairMaterial`
- `public static final ItemArmor.ArmorMaterial LEATHER`
- `public static final ItemArmor.ArmorMaterial CHAIN`
- `public static final ItemArmor.ArmorMaterial IRON`
- `public static final ItemArmor.ArmorMaterial GOLD`
- `public static final ItemArmor.ArmorMaterial DIAMOND`

### Methods
- `public static ItemArmor.ArmorMaterial[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ItemArmor.ArmorMaterial c : ItemArmor.ArmorMaterial.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ItemArmor.ArmorMaterial valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getDurability(EntityEquipmentSlot armorType)`
- `public int getDamageReductionAmount(EntityEquipmentSlot armorType)`
- `public int getEnchantability()`
- `public SoundEvent getSoundEvent()`
- `@Deprecated public Item getRepairItem()` (deprecated)
  Deprecated.
- `public java.lang.String getName()`
- `public float getToughness()`
- `public ItemArmor.ArmorMaterial setRepairItem(ItemStack stack)`
- `public ItemStack getRepairItemStack()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ItemArmorStand

*class* `net.minecraft.item.ItemArmorStand`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemArrow

*class* `net.minecraft.item.ItemArrow`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EntityArrow createArrow(World worldIn,  ItemStack stack,  EntityLivingBase shooter)`
- `public boolean isInfinite(ItemStack stack,  ItemStack bow,  EntityPlayer player)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemAxe

*class* `net.minecraft.item.ItemAxe`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemTool`: `attackDamage`, `attackSpeed`, `efficiency`, `toolMaterial`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public float getDestroySpeed(ItemStack stack,  IBlockState state)`

### Inherited methods
- from `net.minecraft.item.ItemTool`: `getHarvestLevel`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemEnchantability`, `getToolClasses`, `getToolMaterialName`, `hitEntity`, `isFull3D`, `onBlockDestroyed`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBanner

*class* `net.minecraft.item.ItemBanner`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public static void appendHoverTextFromTileEntityTag(ItemStack stack,  java.util.List<java.lang.String> p_185054_1_)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `public static ItemStack makeBanner(EnumDyeColor p_190910_0_,  NBTTagList p_190910_1_)`
- `public CreativeTabs getCreativeTab()`
- `public static EnumDyeColor getBaseColor(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `canPlaceBlockOnSide`, `getBlock`, `getUnlocalizedName`, `getUnlocalizedName`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBed

*class* `net.minecraft.item.ItemBed`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBlock

*class* `net.minecraft.item.ItemBlock`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `protected final Block block`

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public static boolean setTileEntityNBT(World worldIn,  EntityPlayer player,  BlockPos pos,  ItemStack stackIn)`
- `public boolean canPlaceBlockOnSide(World worldIn,  BlockPos pos,  EnumFacing side,  EntityPlayer player,  ItemStack stack)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public java.lang.String getUnlocalizedName()`
- `public CreativeTabs getCreativeTab()`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public Block getBlock()`
- `public boolean placeBlockAt(ItemStack stack,  EntityPlayer player,  World world,  BlockPos pos,  EnumFacing side,  float hitX,  float hitY,  float hitZ,  IBlockState newState)`
  Called to actually place the block, after the location is determined
   and all permission checks have been made.
  - param: stack - The item stack that was used to place the block. This can be changed inside the method.
  - param: player - The player who is placing the block. Can be null if the block is not being placed by a player.
  - param: side - The side the player (or machine) right-clicked on.

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBlockSpecial

*class* `net.minecraft.item.ItemBlockSpecial`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public Block getBlock()`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBoat

*class* `net.minecraft.item.ItemBoat`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBook

*class* `net.minecraft.item.ItemBook`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean isEnchantable(ItemStack stack)`
- `public int getItemEnchantability()`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBow

*class* `net.minecraft.item.ItemBow`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `protected ItemStack findAmmo(EntityPlayer player)`
- `protected boolean isArrow(ItemStack stack)`
- `public void onPlayerStoppedUsing(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving,  int timeLeft)`
- `public static float getArrowVelocity(int charge)`
- `public int getMaxItemUseDuration(ItemStack stack)`
- `public EnumAction getItemUseAction(ItemStack stack)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public int getItemEnchantability()`
- `public EntityArrow customizeArrow(EntityArrow arrow)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBucket

*class* `net.minecraft.item.ItemBucket`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public boolean tryPlaceContainedLiquid(EntityPlayer player,  World worldIn,  BlockPos posIn)`
- `public ICapabilityProvider initCapabilities(ItemStack stack,  NBTTagCompound nbt)`
  Description copied from class: Item
  Called from ItemStack.setItem, will hold extra data for the life of this ItemStack.
   Can be retrieved from stack.getCapabilities()
   The NBT can be null if this is not called from readNBT or if the item the stack is
   changing FROM is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem() to see the OLD item.
   Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold capabilities for the life of this item.

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemBucketMilk

*class* `net.minecraft.item.ItemBucketMilk`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack onItemUseFinish(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving)`
- `public int getMaxItemUseDuration(ItemStack stack)`
- `public EnumAction getItemUseAction(ItemStack stack)`
- `public ICapabilityProvider initCapabilities(ItemStack stack,  NBTTagCompound nbt)`
  Description copied from class: Item
  Called from ItemStack.setItem, will hold extra data for the life of this ItemStack.
   Can be retrieved from stack.getCapabilities()
   The NBT can be null if this is not called from readNBT or if the item the stack is
   changing FROM is different then this item, or the previous item had no capabilities.
  
   This is called BEFORE the stacks item is set so you can use stack.getItem() to see the OLD item.
   Remember that getItem CAN return null.
  - param: stack - The ItemStack
  - param: nbt - NBT of this item serialized, or null.
  - returns: A holder instance associated with this ItemStack where you can hold capabilities for the life of this item.
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemCarrotOnAStick

*class* `net.minecraft.item.ItemCarrotOnAStick`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean isFull3D()`
- `public boolean shouldRotateAroundWhenRendering()`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemChorusFruit

*class* `net.minecraft.item.ItemChorusFruit`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemFood`: `itemUseDuration`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack onItemUseFinish(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving)`

### Inherited methods
- from `net.minecraft.item.ItemFood`: `getHealAmount`, `getItemUseAction`, `getMaxItemUseDuration`, `getSaturationModifier`, `isWolfsFavoriteMeat`, `onFoodEaten`, `onItemRightClick`, `setAlwaysEdible`, `setPotionEffect`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemClock

*class* `net.minecraft.item.ItemClock`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemCloth

*class* `net.minecraft.item.ItemCloth`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMetadata(int damage)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemCoal

*class* `net.minecraft.item.ItemCoal`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemColored

*class* `net.minecraft.item.ItemColored`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMetadata(int damage)`
- `public ItemColored setSubtypeNames(java.lang.String[] names)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemCompass

*class* `net.minecraft.item.ItemCompass`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemDoor

*class* `net.minecraft.item.ItemDoor`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public static void placeDoor(World worldIn,  BlockPos pos,  EnumFacing facing,  Block door,  boolean isRightHinge)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemDye

*class* `net.minecraft.item.ItemDye`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `public static final int[] DYE_COLORS`

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public static boolean applyBonemeal(ItemStack stack,  World worldIn,  BlockPos target)`
- `public static boolean applyBonemeal(ItemStack stack,  World worldIn,  BlockPos target,  EntityPlayer player,  EnumHand hand)`
- `public static void spawnBonemealParticles(World worldIn,  BlockPos pos,  int amount)`
- `public boolean itemInteractionForEntity(ItemStack stack,  EntityPlayer playerIn,  EntityLivingBase target,  EnumHand hand)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemEgg

*class* `net.minecraft.item.ItemEgg`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemElytra

*class* `net.minecraft.item.ItemElytra`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static boolean isUsable(ItemStack stack)`
- `public boolean getIsRepairable(ItemStack toRepair,  ItemStack repair)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemEmptyMap

*class* `net.minecraft.item.ItemEmptyMap`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.ItemMapBase`: `createMapDataPacket`, `isMap`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemEnchantedBook

*class* `net.minecraft.item.ItemEnchantedBook`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean hasEffect(ItemStack stack)`
- `public boolean isEnchantable(ItemStack stack)`
- `public EnumRarity getRarity(ItemStack stack)`
- `public static NBTTagList getEnchantments(ItemStack p_92110_0_)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public static void addEnchantment(ItemStack p_92115_0_,  EnchantmentData stack)`
- `public static ItemStack getEnchantedItemStack(EnchantmentData p_92111_0_)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemEndCrystal

*class* `net.minecraft.item.ItemEndCrystal`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public boolean hasEffect(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemEnderEye

*class* `net.minecraft.item.ItemEnderEye`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemEnderPearl

*class* `net.minecraft.item.ItemEnderPearl`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemExpBottle

*class* `net.minecraft.item.ItemExpBottle`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean hasEffect(ItemStack stack)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemFireball

*class* `net.minecraft.item.ItemFireball`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemFirework

*class* `net.minecraft.item.ItemFirework`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemFireworkCharge

*class* `net.minecraft.item.ItemFireworkCharge`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static NBTBase getExplosionTag(ItemStack stack,  java.lang.String key)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public static void addExplosionInfo(NBTTagCompound nbt,  java.util.List<java.lang.String> tooltip)`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemFishFood

*class* `net.minecraft.item.ItemFishFood`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemFood`: `itemUseDuration`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getHealAmount(ItemStack stack)`
- `public float getSaturationModifier(ItemStack stack)`
- `protected void onFoodEaten(ItemStack stack,  World worldIn,  EntityPlayer player)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemFood`: `getItemUseAction`, `getMaxItemUseDuration`, `isWolfsFavoriteMeat`, `onItemRightClick`, `onItemUseFinish`, `setAlwaysEdible`, `setPotionEffect`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemFishFood.FishType

*enum* `net.minecraft.item.ItemFishFood.FishType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ItemFishFood.FishType>

Enclosing class: ItemFishFood

### Fields
- `public static final ItemFishFood.FishType COD`
- `public static final ItemFishFood.FishType SALMON`
- `public static final ItemFishFood.FishType CLOWNFISH`
- `public static final ItemFishFood.FishType PUFFERFISH`

### Methods
- `public static ItemFishFood.FishType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ItemFishFood.FishType c : ItemFishFood.FishType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ItemFishFood.FishType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getMetadata()`
- `public java.lang.String getUnlocalizedName()`
- `public int getUncookedHealAmount()`
- `public float getUncookedSaturationModifier()`
- `public int getCookedHealAmount()`
- `public float getCookedSaturationModifier()`
- `public boolean canCook()`
- `public static ItemFishFood.FishType byMetadata(int meta)`
- `public static ItemFishFood.FishType byItemStack(ItemStack stack)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ItemFishingRod

*class* `net.minecraft.item.ItemFishingRod`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean isFull3D()`
- `public boolean shouldRotateAroundWhenRendering()`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public int getItemEnchantability()`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemFlintAndSteel

*class* `net.minecraft.item.ItemFlintAndSteel`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemFood

*class* `net.minecraft.item.ItemFood`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `public final int itemUseDuration`

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack onItemUseFinish(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving)`
- `protected void onFoodEaten(ItemStack stack,  World worldIn,  EntityPlayer player)`
- `public int getMaxItemUseDuration(ItemStack stack)`
- `public EnumAction getItemUseAction(ItemStack stack)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public int getHealAmount(ItemStack stack)`
- `public float getSaturationModifier(ItemStack stack)`
- `public boolean isWolfsFavoriteMeat()`
- `public ItemFood setPotionEffect(PotionEffect effect,  float probability)`
- `public ItemFood setAlwaysEdible()`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemGlassBottle

*class* `net.minecraft.item.ItemGlassBottle`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `protected ItemStack turnBottleIntoItem(ItemStack p_185061_1_,  EntityPlayer player,  ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemHangingEntity

*class* `net.minecraft.item.ItemHangingEntity`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemHoe

*class* `net.minecraft.item.ItemHoe`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `protected Item.ToolMaterial toolMaterial`

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public boolean hitEntity(ItemStack stack,  EntityLivingBase target,  EntityLivingBase attacker)`
- `protected void setBlock(ItemStack stack,  EntityPlayer player,  World worldIn,  BlockPos pos,  IBlockState state)`
- `public boolean isFull3D()`
- `public java.lang.String getMaterialName()`
- `public <any> getItemAttributeModifiers(EntityEquipmentSlot equipmentSlot)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemKnowledgeBook

*class* `net.minecraft.item.ItemKnowledgeBook`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemLead

*class* `net.minecraft.item.ItemLead`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public static boolean attachToFence(EntityPlayer player,  World worldIn,  BlockPos fence)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemLeaves

*class* `net.minecraft.item.ItemLeaves`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMetadata(int damage)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemLilyPad

*class* `net.minecraft.item.ItemLilyPad`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.ItemColored`: `getMetadata`, `getUnlocalizedName`, `setSubtypeNames`
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemLingeringPotion

*class* `net.minecraft.item.ItemLingeringPotion`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.ItemPotion`: `getDefaultInstance`, `getItemUseAction`, `getMaxItemUseDuration`, `getSubItems`, `hasEffect`, `onItemUseFinish`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemMap

*class* `net.minecraft.item.ItemMap`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static ItemStack setupNewMap(World worldIn,  double worldX,  double worldZ,  byte scale,  boolean trackingPosition,  boolean unlimitedTracking)`
- `public static MapData loadMapData(int mapId,  World worldIn)`
- `public MapData getMapData(ItemStack stack,  World worldIn)`
- `public void updateMapData(World worldIn,  Entity viewer,  MapData data)`
- `public static void renderBiomePreviewMap(World worldIn,  ItemStack map)`
- `public void onUpdate(ItemStack stack,  World worldIn,  Entity entityIn,  int itemSlot,  boolean isSelected)`
- `public Packet<?> createMapDataPacket(ItemStack stack,  World worldIn,  EntityPlayer player)`
- `public void onCreated(ItemStack stack,  World worldIn,  EntityPlayer playerIn)`
- `protected static void scaleMap(ItemStack p_185063_0_,  World p_185063_1_,  int p_185063_2_)`
- `protected static void enableMapTracking(ItemStack p_185064_0_,  World p_185064_1_)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public static int getColor(ItemStack p_190907_0_)`

### Inherited methods
- from `net.minecraft.item.ItemMapBase`: `isMap`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemMapBase

*class* `net.minecraft.item.ItemMapBase`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean isMap()`
- `public Packet<?> createMapDataPacket(ItemStack stack,  World worldIn,  EntityPlayer player)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemMinecart

*class* `net.minecraft.item.ItemMinecart`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemMonsterPlacer

*class* `net.minecraft.item.ItemMonsterPlacer`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `protected double getYOffset(World p_190909_1_,  BlockPos p_190909_2_)`
- `public static void applyItemEntityDataToEntity(World entityWorld,  EntityPlayer player,  ItemStack stack,  Entity targetEntity)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public static Entity spawnCreature(World worldIn,  ResourceLocation entityID,  double x,  double y,  double z)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `public static void applyEntityIdToItemStack(ItemStack stack,  ResourceLocation entityId)`
- `public static ResourceLocation getNamedIdFrom(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemMultiTexture

*class* `net.minecraft.item.ItemMultiTexture`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `protected final Block unused`
- `protected final ItemMultiTexture.Mapper nameFunction`

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMetadata(int damage)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemMultiTexture.Mapper

*interface* `net.minecraft.item.ItemMultiTexture.Mapper`

Enclosing class: ItemMultiTexture

### Methods
- `java.lang.String apply(ItemStack var1)`

## ItemNameTag

*class* `net.minecraft.item.ItemNameTag`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean itemInteractionForEntity(ItemStack stack,  EntityPlayer playerIn,  EntityLivingBase target,  EnumHand hand)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemPickaxe

*class* `net.minecraft.item.ItemPickaxe`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemTool`: `attackDamage`, `attackSpeed`, `efficiency`, `toolMaterial`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean canHarvestBlock(IBlockState blockIn)`
- `public float getDestroySpeed(ItemStack stack,  IBlockState state)`

### Inherited methods
- from `net.minecraft.item.ItemTool`: `getHarvestLevel`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemEnchantability`, `getToolClasses`, `getToolMaterialName`, `hitEntity`, `isFull3D`, `onBlockDestroyed`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemPiston

*class* `net.minecraft.item.ItemPiston`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMetadata(int damage)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemPotion

*class* `net.minecraft.item.ItemPotion`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack getDefaultInstance()`
- `public ItemStack onItemUseFinish(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving)`
- `public int getMaxItemUseDuration(ItemStack stack)`
- `public EnumAction getItemUseAction(ItemStack stack)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `public boolean hasEffect(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemRecord

*class* `net.minecraft.item.ItemRecord`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public java.lang.String getRecordNameLocal()`
- `public EnumRarity getRarity(ItemStack stack)`
- `public static ItemRecord getBySound(SoundEvent soundIn)`
- `public SoundEvent getSound()`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemRedstone

*class* `net.minecraft.item.ItemRedstone`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSaddle

*class* `net.minecraft.item.ItemSaddle`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean itemInteractionForEntity(ItemStack stack,  EntityPlayer playerIn,  EntityLivingBase target,  EnumHand hand)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSeedFood

*class* `net.minecraft.item.ItemSeedFood`

All Implemented Interfaces: IPlantable, IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemFood`: `itemUseDuration`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public EnumPlantType getPlantType(IBlockAccess world,  BlockPos pos)`
- `public IBlockState getPlant(IBlockAccess world,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.item.ItemFood`: `getHealAmount`, `getItemUseAction`, `getMaxItemUseDuration`, `getSaturationModifier`, `isWolfsFavoriteMeat`, `onFoodEaten`, `onItemRightClick`, `onItemUseFinish`, `setAlwaysEdible`, `setPotionEffect`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSeeds

*class* `net.minecraft.item.ItemSeeds`

All Implemented Interfaces: IPlantable, IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public EnumPlantType getPlantType(IBlockAccess world,  BlockPos pos)`
- `public IBlockState getPlant(IBlockAccess world,  BlockPos pos)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemShears

*class* `net.minecraft.item.ItemShears`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean onBlockDestroyed(ItemStack stack,  World worldIn,  IBlockState state,  BlockPos pos,  EntityLivingBase entityLiving)`
- `public boolean canHarvestBlock(IBlockState blockIn)`
- `public boolean itemInteractionForEntity(ItemStack itemstack,  EntityPlayer player,  EntityLivingBase entity,  EnumHand hand)`
- `public boolean onBlockStartBreak(ItemStack itemstack,  BlockPos pos,  EntityPlayer player)`
  Description copied from class: Item
  Called before a block is broken. Return true to prevent default block harvesting.
  
   Note: In SMP, this is called on both client and server sides!
  - param: itemstack - The current ItemStack
  - param: pos - Block's position in world
  - param: player - The Player that is wielding the item
  - returns: True to prevent harvesting, false to continue as normal
- `public float getDestroySpeed(ItemStack stack,  IBlockState state)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `onArmorTick`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemShield

*class* `net.minecraft.item.ItemShield`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public EnumAction getItemUseAction(ItemStack stack)`
- `public int getMaxItemUseDuration(ItemStack stack)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public boolean getIsRepairable(ItemStack toRepair,  ItemStack repair)`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemShulkerBox

*class* `net.minecraft.item.ItemShulkerBox`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `canPlaceBlockOnSide`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `getUnlocalizedName`, `onItemUse`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSign

*class* `net.minecraft.item.ItemSign`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSimpleFoiled

*class* `net.minecraft.item.ItemSimpleFoiled`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean hasEffect(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSkull

*class* `net.minecraft.item.ItemSkull`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `public int getMetadata(int damage)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public boolean updateItemStackNBT(NBTTagCompound nbt)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSlab

*class* `net.minecraft.item.ItemSlab`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public int getMetadata(int damage)`
- `public java.lang.String getUnlocalizedName(ItemStack stack)`
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public boolean canPlaceBlockOnSide(World worldIn,  BlockPos pos,  EnumFacing side,  EntityPlayer player,  ItemStack stack)`
- `protected <T extends java.lang.Comparable<T>> IBlockState makeState(IProperty<T> p_185055_1_,  java.lang.Comparable<?> p_185055_2_)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSnow

*class* `net.minecraft.item.ItemSnow`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemBlock`: `block`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`
- `public int getMetadata(int damage)`
- `public boolean canPlaceBlockOnSide(World world,  BlockPos pos,  EnumFacing side,  EntityPlayer player,  ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemBlock`: `addInformation`, `getBlock`, `getCreativeTab`, `getSubItems`, `getUnlocalizedName`, `getUnlocalizedName`, `placeBlockAt`, `setTileEntityNBT`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSnowball

*class* `net.minecraft.item.ItemSnowball`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSoup

*class* `net.minecraft.item.ItemSoup`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemFood`: `itemUseDuration`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack onItemUseFinish(ItemStack stack,  World worldIn,  EntityLivingBase entityLiving)`

### Inherited methods
- from `net.minecraft.item.ItemFood`: `getHealAmount`, `getItemUseAction`, `getMaxItemUseDuration`, `getSaturationModifier`, `isWolfsFavoriteMeat`, `onFoodEaten`, `onItemRightClick`, `setAlwaysEdible`, `setPotionEffect`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSpade

*class* `net.minecraft.item.ItemSpade`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.ItemTool`: `attackDamage`, `attackSpeed`, `efficiency`, `toolMaterial`
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public boolean canHarvestBlock(IBlockState blockIn)`
- `public EnumActionResult onItemUse(EntityPlayer player,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing facing,  float hitX,  float hitY,  float hitZ)`

### Inherited methods
- from `net.minecraft.item.ItemTool`: `getDestroySpeed`, `getHarvestLevel`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemEnchantability`, `getToolClasses`, `getToolMaterialName`, `hitEntity`, `isFull3D`, `onBlockDestroyed`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSpectralArrow

*class* `net.minecraft.item.ItemSpectralArrow`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public EntityArrow createArrow(World worldIn,  ItemStack stack,  EntityLivingBase shooter)`

### Inherited methods
- from `net.minecraft.item.ItemArrow`: `isInfinite`
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemSplashPotion

*class* `net.minecraft.item.ItemSplashPotion`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`

### Inherited methods
- from `net.minecraft.item.ItemPotion`: `addInformation`, `getDefaultInstance`, `getItemUseAction`, `getMaxItemUseDuration`, `getSubItems`, `hasEffect`, `onItemUseFinish`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getMaxDamage`, `getMaxDamage`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemStack

*class* `net.minecraft.item.ItemStack`

All Implemented Interfaces: ICapabilityProvider, ICapabilitySerializable<NBTTagCompound>, INBTSerializable<NBTTagCompound>

### Fields
- `public static final ItemStack EMPTY`
- `public static final java.text.DecimalFormat DECIMALFORMAT`

### Methods
- `public boolean isEmpty()`
- `public static void registerFixes(DataFixer fixer)`
- `public ItemStack splitStack(int amount)`
- `public Item getItem()`
- `public EnumActionResult onItemUse(EntityPlayer playerIn,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing side,  float hitX,  float hitY,  float hitZ)`
- `public EnumActionResult onItemUseFirst(EntityPlayer playerIn,  World worldIn,  BlockPos pos,  EnumHand hand,  EnumFacing side,  float hitX,  float hitY,  float hitZ)`
- `public float getDestroySpeed(IBlockState blockIn)`
- `public ActionResult<ItemStack> useItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand hand)`
- `public ItemStack onItemUseFinish(World worldIn,  EntityLivingBase entityLiving)`
- `public NBTTagCompound writeToNBT(NBTTagCompound nbt)`
- `public int getMaxStackSize()`
- `public boolean isStackable()`
- `public boolean isItemStackDamageable()`
- `public boolean getHasSubtypes()`
- `public boolean isItemDamaged()`
- `public int getItemDamage()`
- `public int getMetadata()`
- `public void setItemDamage(int meta)`
- `public int getMaxDamage()`
- `public boolean attemptDamageItem(int amount,  java.util.Random rand,  EntityPlayerMP damager)`
- `public void damageItem(int amount,  EntityLivingBase entityIn)`
- `public void hitEntity(EntityLivingBase entityIn,  EntityPlayer playerIn)`
- `public void onBlockDestroyed(World worldIn,  IBlockState blockIn,  BlockPos pos,  EntityPlayer playerIn)`
- `public boolean canHarvestBlock(IBlockState blockIn)`
- `public boolean interactWithEntity(EntityPlayer playerIn,  EntityLivingBase entityIn,  EnumHand hand)`
- `public ItemStack copy()`
- `public static boolean areItemStackTagsEqual(ItemStack stackA,  ItemStack stackB)`
- `public static boolean areItemStacksEqual(ItemStack stackA,  ItemStack stackB)`
- `public static boolean areItemsEqual(ItemStack stackA,  ItemStack stackB)`
- `public static boolean areItemsEqualIgnoreDurability(ItemStack stackA,  ItemStack stackB)`
- `public boolean isItemEqual(ItemStack other)`
- `public boolean isItemEqualIgnoreDurability(ItemStack stack)`
- `public java.lang.String getUnlocalizedName()`
- `public java.lang.String toString()`
- `public void updateAnimation(World worldIn,  Entity entityIn,  int inventorySlot,  boolean isCurrentItem)`
- `public void onCrafting(World worldIn,  EntityPlayer playerIn,  int amount)`
- `public int getMaxItemUseDuration()`
- `public EnumAction getItemUseAction()`
- `public void onPlayerStoppedUsing(World worldIn,  EntityLivingBase entityLiving,  int timeLeft)`
- `public boolean hasTagCompound()`
- `public NBTTagCompound getTagCompound()`
- `public NBTTagCompound getOrCreateSubCompound(java.lang.String key)`
- `public NBTTagCompound getSubCompound(java.lang.String key)`
- `public void removeSubCompound(java.lang.String key)`
- `public NBTTagList getEnchantmentTagList()`
- `public void setTagCompound(NBTTagCompound nbt)`
- `public java.lang.String getDisplayName()`
- `public ItemStack setTranslatableName(java.lang.String p_190924_1_)`
- `public ItemStack setStackDisplayName(java.lang.String displayName)`
- `public void clearCustomName()`
- `public boolean hasDisplayName()`
- `public java.util.List<java.lang.String> getTooltip(EntityPlayer playerIn,  ITooltipFlag advanced)`
- `public boolean hasEffect()`
- `@Deprecated public EnumRarity getRarity()` (deprecated)
  Deprecated.
- `public boolean isItemEnchantable()`
- `public void addEnchantment(Enchantment ench,  int level)`
- `public boolean isItemEnchanted()`
- `public void setTagInfo(java.lang.String key,  NBTBase value)`
- `public boolean canEditBlocks()`
- `public boolean isOnItemFrame()`
- `public void setItemFrame(EntityItemFrame frame)`
- `public EntityItemFrame getItemFrame()`
- `public int getRepairCost()`
- `public void setRepairCost(int cost)`
- `public <any> getAttributeModifiers(EntityEquipmentSlot equipmentSlot)`
- `public void addAttributeModifier(java.lang.String attributeName,  AttributeModifier modifier,  EntityEquipmentSlot equipmentSlot)`
- `public ITextComponent getTextComponent()`
- `public boolean canDestroy(Block blockIn)`
- `public boolean canPlaceOn(Block blockIn)`
- `public int getAnimationsToGo()`
- `public void setAnimationsToGo(int animations)`
- `public int getCount()`
- `public void setCount(int size)`
- `public void grow(int quantity)`
- `public void shrink(int quantity)`
- `public boolean hasCapability(Capability<?> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Determines if this object has support for the capability in question on the specific side.
   The return value of this MIGHT change during runtime if this object gains or loses support
   for a capability. It is not required to call this function before calling
   ICapabilityProvider.getCapability(Capability, EnumFacing).
  
   Basically, this method functions analogously to Map.containsKey(Object).
  
   Example:
   A Pipe getting a cover placed on one side causing it lose the Inventory attachment function for that side.
  
   This is a light weight version of getCapability, intended for metadata uses.
  - param: capability - The capability to check
  - param: facing - The Side to check from:
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: True if this object supports the capability. If true, then ICapabilityProvider.getCapability(Capability, EnumFacing)
 must not return null.
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.
- `public void deserializeNBT(NBTTagCompound nbt)`
- `public NBTTagCompound serializeNBT()`
- `public boolean areCapsCompatible(ItemStack other)`
- `public static boolean areItemStacksEqualUsingNBTShareTag(ItemStack stackA,  ItemStack stackB)`
  Modeled after ItemStack.areItemStacksEqual
   Uses Item.getNBTShareTag for comparison instead of NBT and capabilities.
   Only used for comparing itemStacks that were transferred from server to client using Item.getNBTShareTag.
- `public static boolean areItemStackShareTagsEqual(ItemStack stackA,  ItemStack stackB)`
  Modeled after ItemStack.areItemStackTagsEqual
   Uses Item.getNBTShareTag for comparison instead of NBT and capabilities.
   Only used for comparing itemStacks that were transferred from server to client using Item.getNBTShareTag.
- `public boolean doesSneakBypassUse(IBlockAccess world,  BlockPos pos,  EntityPlayer player)`
  Should this item, when held, allow sneak-clicks to pass through to the underlying block?
  - param: world - The world
  - param: pos - Block position in world
  - param: player - The Player that is wielding the item

## ItemSword

*class* `net.minecraft.item.ItemSword`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public float getAttackDamage()`
- `public float getDestroySpeed(ItemStack stack,  IBlockState state)`
- `public boolean hitEntity(ItemStack stack,  EntityLivingBase target,  EntityLivingBase attacker)`
- `public boolean onBlockDestroyed(ItemStack stack,  World worldIn,  IBlockState state,  BlockPos pos,  EntityLivingBase entityLiving)`
- `public boolean canHarvestBlock(IBlockState blockIn)`
- `public boolean isFull3D()`
- `public int getItemEnchantability()`
- `public java.lang.String getToolMaterialName()`
- `public boolean getIsRepairable(ItemStack toRepair,  ItemStack repair)`
- `public <any> getItemAttributeModifiers(EntityEquipmentSlot equipmentSlot)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemTippedArrow

*class* `net.minecraft.item.ItemTippedArrow`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ItemStack getDefaultInstance()`
- `public EntityArrow createArrow(World worldIn,  ItemStack stack,  EntityLivingBase shooter)`
- `public void getSubItems(CreativeTabs tab,  NonNullList<ItemStack> items)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.ItemArrow`: `isInfinite`
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemTool

*class* `net.minecraft.item.ItemTool`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Fields
- `protected float efficiency`
- `protected float attackDamage`
- `protected float attackSpeed`
- `protected Item.ToolMaterial toolMaterial`

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public float getDestroySpeed(ItemStack stack,  IBlockState state)`
- `public boolean hitEntity(ItemStack stack,  EntityLivingBase target,  EntityLivingBase attacker)`
- `public boolean onBlockDestroyed(ItemStack stack,  World worldIn,  IBlockState state,  BlockPos pos,  EntityLivingBase entityLiving)`
- `public boolean isFull3D()`
- `public int getItemEnchantability()`
- `public java.lang.String getToolMaterialName()`
- `public boolean getIsRepairable(ItemStack toRepair,  ItemStack repair)`
- `public <any> getItemAttributeModifiers(EntityEquipmentSlot equipmentSlot)`
- `public int getHarvestLevel(ItemStack stack,  java.lang.String toolClass,  EntityPlayer player,  IBlockState blockState)`
  Description copied from class: Item
  Queries the harvest level of this item stack for the specified tool class,
   Returns -1 if this tool is not of the specified type
  - param: stack - This item stack instance
  - param: toolClass - Tool Class
  - param: player - The player trying to harvest the given blockstate
  - param: blockState - The block to harvest
  - returns: Harvest level, or -1 if not the specified tool type.
- `public java.util.Set<java.lang.String> getToolClasses(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemRightClick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemWritableBook

*class* `net.minecraft.item.ItemWritableBook`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public static boolean isNBTValid(NBTTagCompound nbt)`

### Inherited methods
- from `net.minecraft.item.Item`: `addInformation`, `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackDisplayName`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hasEffect`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`

## ItemWrittenBook

*class* `net.minecraft.item.ItemWrittenBook`

All Implemented Interfaces: IForgeRegistryEntry<Item>

### Inherited fields
- from `net.minecraft.item.Item`: `ATTACK_DAMAGE_MODIFIER`, `ATTACK_SPEED_MODIFIER`, `bFull3D`, `canRepair`, `hasSubtypes`, `itemRand`, `maxStackSize`, `REGISTRY`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `delegate`

### Methods
- `public static boolean validBookTagContents(NBTTagCompound nbt)`
- `public static int getGeneration(ItemStack book)`
- `public java.lang.String getItemStackDisplayName(ItemStack stack)`
- `public void addInformation(ItemStack stack,  World worldIn,  java.util.List<java.lang.String> tooltip,  ITooltipFlag flagIn)`
- `public ActionResult<ItemStack> onItemRightClick(World worldIn,  EntityPlayer playerIn,  EnumHand handIn)`
- `public boolean hasEffect(ItemStack stack)`

### Inherited methods
- from `net.minecraft.item.Item`: `addPropertyOverride`, `canApplyAtEnchantingTable`, `canContinueUsing`, `canDestroyBlockInCreative`, `canDisableShield`, `canHarvestBlock`, `canHarvestBlock`, `canItemEditBlocks`, `createEntity`, `doesSneakBypassUse`, `getAnimationParameters`, `getArmorModel`, `getArmorTexture`, `getAttributeModifiers`, `getByNameOrId`, `getContainerItem`, `getContainerItem`, `getCreativeTab`, `getCreativeTabs`, `getCreatorModId`, `getDamage`, `getDefaultInstance`, `getDestroySpeed`, `getDurabilityForDisplay`, `getEntityLifespan`, `getEquipmentSlot`, `getFontRenderer`, `getForgeRarity`, `getHarvestLevel`, `getHasSubtypes`, `getHighlightTip`, `getHorseArmorTexture`, `getHorseArmorType`, `getIdFromItem`, `getIsRepairable`, `getItemAttributeModifiers`, `getItemBurnTime`, `getItemById`, `getItemEnchantability`, `getItemEnchantability`, `getItemFromBlock`, `getItemStackLimit`, `getItemStackLimit`, `getItemUseAction`, `getMaxDamage`, `getMaxDamage`, `getMaxItemUseDuration`, `getMetadata`, `getMetadata`, `getNBTShareTag`, `getPropertyGetter`, `getRarity`, `getRGBDurabilityForDisplay`, `getShareTag`, `getSmeltingExperience`, `getSubItems`, `getTileEntityItemStackRenderer`, `getToolClasses`, `getUnlocalizedName`, `getUnlocalizedName`, `getUnlocalizedNameInefficiently`, `getXpRepairRatio`, `hasContainerItem`, `hasContainerItem`, `hasCustomEntity`, `hasCustomProperties`, `hitEntity`, `initCapabilities`, `isBeaconPayment`, `isBookEnchantable`, `isDamageable`, `isDamaged`, `isEnchantable`, `isFull3D`, `isInCreativeTab`, `isMap`, `isRepairable`, `isShield`, `isValidArmor`, `itemInteractionForEntity`, `onArmorTick`, `onBlockDestroyed`, `onBlockStartBreak`, `onCreated`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onItemUse`, `onItemUseFinish`, `onItemUseFirst`, `onLeftClickEntity`, `onPlayerStoppedUsing`, `onUpdate`, `onUsingTick`, `rayTrace`, `readNBTShareTag`, `registerItemBlock`, `registerItems`, `renderHelmetOverlay`, `setContainerItem`, `setCreativeTab`, `setDamage`, `setFull3D`, `setHarvestLevel`, `setHasSubtypes`, `setMaxDamage`, `setMaxStackSize`, `setNoRepair`, `setTileEntityItemStackRenderer`, `setUnlocalizedName`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`, `shouldRotateAroundWhenRendering`, `showDurabilityBar`, `updateItemStackNBT`
- from `net.minecraftforge.registries.IForgeRegistryEntry.Impl`: `getRegistryName`, `getRegistryType`, `setRegistryName`, `setRegistryName`, `setRegistryName`
