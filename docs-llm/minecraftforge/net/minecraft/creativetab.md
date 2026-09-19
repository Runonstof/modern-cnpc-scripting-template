# net.minecraft.creativetab

- [CreativeTabs](#creativetabs)
## CreativeTabs

*class* `net.minecraft.creativetab.CreativeTabs`

### Fields
- `public static CreativeTabs[] CREATIVE_TAB_ARRAY`
- `public static final CreativeTabs BUILDING_BLOCKS`
- `public static final CreativeTabs DECORATIONS`
- `public static final CreativeTabs REDSTONE`
- `public static final CreativeTabs TRANSPORTATION`
- `public static final CreativeTabs MISC`
- `public static final CreativeTabs SEARCH`
- `public static final CreativeTabs FOOD`
- `public static final CreativeTabs TOOLS`
- `public static final CreativeTabs COMBAT`
- `public static final CreativeTabs BREWING`
- `public static final CreativeTabs MATERIALS`
- `public static final CreativeTabs HOTBAR`
- `public static final CreativeTabs INVENTORY`

### Methods
- `public int getTabIndex()`
- `public CreativeTabs setBackgroundImageName(java.lang.String texture)`
- `public java.lang.String getTabLabel()`
- `public java.lang.String getTranslatedTabLabel()`
- `public ItemStack getIconItemStack()`
- `public abstract ItemStack getTabIconItem()`
- `public java.lang.String getBackgroundImageName()`
- `public boolean drawInForegroundOfTab()`
- `public CreativeTabs setNoTitle()`
- `public boolean shouldHidePlayerInventory()`
- `public CreativeTabs setNoScrollbar()`
- `public int getTabColumn()`
- `public boolean isTabInFirstRow()`
- `public boolean isAlignedRight()`
- `public EnumEnchantmentType[] getRelevantEnchantmentTypes()`
- `public CreativeTabs setRelevantEnchantmentTypes(EnumEnchantmentType... types)`
- `public boolean hasRelevantEnchantmentType(EnumEnchantmentType enchantmentType)`
- `public void displayAllRelevantItems(NonNullList<ItemStack> p_78018_1_)`
- `public int getTabPage()`
- `public static int getNextID()`
- `public boolean hasSearchBar()`
  Determines if the search bar should be shown for this tab.
  - returns: True to show the bar
- `public int getSearchbarWidth()`
  Gets the width of the search bar of the creative tab, use this if your
   creative tab name overflows together with a custom texture.
  - returns: The width of the search bar, 89 by default
- `public ResourceLocation getBackgroundImage()`
- `public int getLabelColor()`
