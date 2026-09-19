# net.minecraft.world.inventory

- [AbstractContainerMenu](#abstractcontainermenu)
- [AbstractFurnaceMenu](#abstractfurnacemenu)
- [AnvilMenu](#anvilmenu)
- [BeaconMenu](#beaconmenu)
- [BeaconMenu.PaymentSlot](#beaconmenu.paymentslot)
- [BlastFurnaceMenu](#blastfurnacemenu)
- [BrewingStandMenu](#brewingstandmenu)
- [BrewingStandMenu.FuelSlot](#brewingstandmenu.fuelslot)
- [BrewingStandMenu.IngredientsSlot](#brewingstandmenu.ingredientsslot)
- [BrewingStandMenu.PotionSlot](#brewingstandmenu.potionslot)
- [CartographyTableMenu](#cartographytablemenu)
- [ChestMenu](#chestmenu)
- [Class ClickAction](#class-clickaction)
- [Class ClickType](#class-clicktype)
- [Class RecipeBookType](#class-recipebooktype)
- [ContainerData](#containerdata)
- [ContainerLevelAccess](#containerlevelaccess)
- [ContainerListener](#containerlistener)
- [ContainerSynchronizer](#containersynchronizer)
- [CraftingContainer](#craftingcontainer)
- [CraftingMenu](#craftingmenu)
- [DataSlot](#dataslot)
- [DispenserMenu](#dispensermenu)
- [EnchantmentMenu](#enchantmentmenu)
- [FurnaceFuelSlot](#furnacefuelslot)
- [FurnaceMenu](#furnacemenu)
- [FurnaceResultSlot](#furnaceresultslot)
- [GrindstoneMenu](#grindstonemenu)
- [HopperMenu](#hoppermenu)
- [HorseInventoryMenu](#horseinventorymenu)
- [InventoryMenu](#inventorymenu)
- [ItemCombinerMenu](#itemcombinermenu)
- [ItemCombinerMenuSlotDefinition](#itemcombinermenuslotdefinition)
- [ItemCombinerMenuSlotDefinition.Builder](#itemcombinermenuslotdefinition.builder)
- [ItemCombinerMenuSlotDefinition.SlotDefinition](#itemcombinermenuslotdefinition.slotdefinition)
- [LecternMenu](#lecternmenu)
- [LoomMenu](#loommenu)
- [MenuConstructor](#menuconstructor)
- [MenuType](#menutype)
- [MenuType.MenuSupplier](#menutype.menusupplier)
- [MerchantContainer](#merchantcontainer)
- [MerchantMenu](#merchantmenu)
- [MerchantResultSlot](#merchantresultslot)
- [PlayerEnderChestContainer](#playerenderchestcontainer)
- [RecipeBookMenu](#recipebookmenu)
- [RecipeCraftingHolder](#recipecraftingholder)
- [ResultContainer](#resultcontainer)
- [ResultSlot](#resultslot)
- [ShulkerBoxMenu](#shulkerboxmenu)
- [ShulkerBoxSlot](#shulkerboxslot)
- [SimpleContainerData](#simplecontainerdata)
- [Slot](#slot)
- [SmithingMenu](#smithingmenu)
- [SmokerMenu](#smokermenu)
- [StackedContentsCompatible](#stackedcontentscompatible)
- [StonecutterMenu](#stonecuttermenu)
- [TransientCraftingContainer](#transientcraftingcontainer)
## AbstractContainerMenu

*class* `net.minecraft.world.inventory.AbstractContainerMenu`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int SLOT_CLICKED_OUTSIDE` (= -999)
- `public static final int QUICKCRAFT_TYPE_CHARITABLE` (= 0)
- `public static final int QUICKCRAFT_TYPE_GREEDY` (= 1)
- `public static final int QUICKCRAFT_TYPE_CLONE` (= 2)
- `public static final int QUICKCRAFT_HEADER_START` (= 0)
- `public static final int QUICKCRAFT_HEADER_CONTINUE` (= 1)
- `public static final int QUICKCRAFT_HEADER_END` (= 2)
- `public static final int CARRIED_SLOT_SIZE` (= 2147483647)
- `private final NonNullList<ItemStack> lastSlots`
- `public final NonNullList<Slot> slots`
- `private final List<DataSlot> dataSlots`
- `private ItemStack carried`
- `private final NonNullList<ItemStack> remoteSlots`
- `private final it.unimi.dsi.fastutil.ints.IntList remoteDataSlots`
- `private ItemStack remoteCarried`
- `private int stateId`
- `@Nullable private final MenuType<?> menuType`
- `public final int containerId`
- `private int quickcraftType`
- `private int quickcraftStatus`
- `private final Set<Slot> quickcraftSlots`
- `private final List<ContainerListener> containerListeners`
- `@Nullable private ContainerSynchronizer synchronizer`
- `private boolean suppressRemoteUpdates`

### Methods
- `protected static boolean stillValid(ContainerLevelAccess p_38890_,  Player p_38891_,  Block p_38892_)`
- `public MenuType<?> getType()`
- `protected static void checkContainerSize(Container p_38870_,  int p_38871_)`
- `protected static void checkContainerDataCount(ContainerData p_38887_,  int p_38888_)`
- `public boolean isValidSlotIndex(int p_207776_)`
- `protected Slot addSlot(Slot p_38898_)`
- `protected DataSlot addDataSlot(DataSlot p_38896_)`
- `protected void addDataSlots(ContainerData p_38885_)`
- `public void addSlotListener(ContainerListener p_38894_)`
- `public void setSynchronizer(ContainerSynchronizer p_150417_)`
- `public void sendAllDataToRemote()`
- `public void removeSlotListener(ContainerListener p_38944_)`
- `public NonNullList<ItemStack> getItems()`
- `public void broadcastChanges()`
- `public void broadcastFullState()`
- `private void updateDataSlotListeners(int p_182421_,  int p_182422_)`
- `private void triggerSlotListeners(int p_150408_,  ItemStack p_150409_,  Supplier<ItemStack> p_150410_)`
- `private void synchronizeSlotToRemote(int p_150436_,  ItemStack p_150437_,  Supplier<ItemStack> p_150438_)`
- `private void synchronizeDataSlotToRemote(int p_150441_,  int p_150442_)`
- `private void synchronizeCarriedToRemote()`
- `public void setRemoteSlot(int p_150405_,  ItemStack p_150406_)`
- `public void setRemoteSlotNoCopy(int p_182415_,  ItemStack p_182416_)`
- `public void setRemoteCarried(ItemStack p_150423_)`
- `public boolean clickMenuButton(Player p_38875_,  int p_38876_)`
- `public Slot getSlot(int p_38854_)`
- `public abstract ItemStack quickMoveStack(Player p_38941_,  int p_38942_)`
- `public void clicked(int p_150400_,  int p_150401_,  ClickType p_150402_,  Player p_150403_)`
- `private void doClick(int p_150431_,  int p_150432_,  ClickType p_150433_,  Player p_150434_)`
- `private boolean tryItemClickBehaviourOverride(Player p_249615_,  ClickAction p_250300_,  Slot p_249384_,  ItemStack p_251073_,  ItemStack p_252026_)`
- `private SlotAccess createCarriedSlotAccess()`
- `public boolean canTakeItemForPickAll(ItemStack p_38908_,  Slot p_38909_)`
- `public void removed(Player p_38940_)`
- `protected void clearContainer(Player p_150412_,  Container p_150413_)`
- `public void slotsChanged(Container p_38868_)`
- `public void setItem(int p_182407_,  int p_182408_,  ItemStack p_182409_)`
- `public void initializeContents(int p_182411_,  List<ItemStack> p_182412_,  ItemStack p_182413_)`
- `public void setData(int p_38855_,  int p_38856_)`
- `public abstract boolean stillValid(Player p_38874_)`
- `protected boolean moveItemStackTo(ItemStack p_38904_,  int p_38905_,  int p_38906_,  boolean p_38907_)`
- `public static int getQuickcraftType(int p_38929_)`
- `public static int getQuickcraftHeader(int p_38948_)`
- `public static int getQuickcraftMask(int p_38931_,  int p_38932_)`
- `public static boolean isValidQuickcraftType(int p_38863_,  Player p_38864_)`
- `protected void resetQuickCraft()`
- `public static boolean canItemQuickReplace(@Nullable  Slot p_38900_,  ItemStack p_38901_,  boolean p_38902_)`
- `public static int getQuickCraftPlaceCount(Set<Slot> p_279393_,  int p_279288_,  ItemStack p_279172_)`
- `public boolean canDragTo(Slot p_38945_)`
- `public static int getRedstoneSignalFromBlockEntity(@Nullable  BlockEntity p_38919_)`
- `public static int getRedstoneSignalFromContainer(@Nullable  Container p_38939_)`
- `public void setCarried(ItemStack p_150439_)`
- `public ItemStack getCarried()`
- `public void suppressRemoteUpdates()`
- `public void resumeRemoteUpdates()`
- `public void transferState(AbstractContainerMenu p_150415_)`
- `public OptionalInt findSlot(Container p_182418_,  int p_182419_)`
- `public int getStateId()`
- `public int incrementStateId()`

## AbstractFurnaceMenu

*class* `net.minecraft.world.inventory.AbstractFurnaceMenu`

### Fields
- `public static final int INGREDIENT_SLOT` (= 0)
- `public static final int FUEL_SLOT` (= 1)
- `public static final int RESULT_SLOT` (= 2)
- `public static final int SLOT_COUNT` (= 3)
- `public static final int DATA_COUNT` (= 4)
- `private static final int INV_SLOT_START` (= 3)
- `private static final int INV_SLOT_END` (= 30)
- `private static final int USE_ROW_SLOT_START` (= 30)
- `private static final int USE_ROW_SLOT_END` (= 39)
- `private final Container container`
- `private final ContainerData data`
- `protected final Level level`
- `private final RecipeType<? extends AbstractCookingRecipe> recipeType`
- `private final RecipeBookType recipeBookType`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public void fillCraftSlotsStackedContents(StackedContents p_38976_)`
- `public void clearCraftingContent()`
- `public boolean recipeMatches(RecipeHolder<? extends Recipe<Container>> p_297720_)`
- `public int getResultSlotIndex()`
- `public int getGridWidth()`
- `public int getGridHeight()`
- `public int getSize()`
- `public boolean stillValid(Player p_38974_)`
- `public ItemStack quickMoveStack(Player p_38986_,  int p_38987_)`
- `protected boolean canSmelt(ItemStack p_38978_)`
- `protected boolean isFuel(ItemStack p_38989_)`
- `public float getBurnProgress()`
- `public float getLitProgress()`
- `public boolean isLit()`
- `public RecipeBookType getRecipeBookType()`
- `public boolean shouldMoveToInventory(int p_150463_)`

### Inherited methods
- from `net.minecraft.world.inventory.RecipeBookMenu`: `getRecipeBookCategories`, `handlePlacement`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## AnvilMenu

*class* `net.minecraft.world.inventory.AnvilMenu`

### Fields
- `public static final int INPUT_SLOT` (= 0)
- `public static final int ADDITIONAL_SLOT` (= 1)
- `public static final int RESULT_SLOT` (= 2)
- `private static final org.slf4j.Logger LOGGER`
- `private static final boolean DEBUG_COST` (= false)
- `public static final int MAX_NAME_LENGTH` (= 50)
- `public int repairItemCountCost`
- `@Nullable private String itemName`
- `private final DataSlot cost`
- `private static final int COST_FAIL` (= 0)
- `private static final int COST_BASE` (= 1)
- `private static final int COST_ADDED_BASE` (= 1)
- `private static final int COST_REPAIR_MATERIAL` (= 1)
- `private static final int COST_REPAIR_SACRIFICE` (= 2)
- `private static final int COST_INCOMPATIBLE_PENALTY` (= 1)
- `private static final int COST_RENAME` (= 1)
- `private static final int INPUT_SLOT_X_PLACEMENT` (= 27)
- `private static final int ADDITIONAL_SLOT_X_PLACEMENT` (= 76)
- `private static final int RESULT_SLOT_X_PLACEMENT` (= 134)
- `private static final int SLOT_Y_PLACEMENT` (= 47)

### Inherited fields
- from `net.minecraft.world.inventory.ItemCombinerMenu`: `access`, `inputSlots`, `player`, `resultSlots`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `protected ItemCombinerMenuSlotDefinition createInputSlotDefinitions()`
- `protected boolean isValidBlock(BlockState p_39019_)`
- `protected boolean mayPickup(Player p_39023_,  boolean p_39024_)`
- `protected void onTake(Player p_150474_,  ItemStack p_150475_)`
- `public void createResult()`
- `public static int calculateIncreasedRepairCost(int p_39026_)`
- `public boolean setItemName(String p_288970_)`
- `@Nullable private static String validateName(String p_288995_)`
- `public int getCost()`
- `public void setMaximumCost(int value)`

### Inherited methods
- from `net.minecraft.world.inventory.ItemCombinerMenu`: `canMoveIntoInputSlots`, `getResultSlot`, `getSlotToQuickMoveTo`, `quickMoveStack`, `removed`, `slotsChanged`, `stillValid`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## BeaconMenu

*class* `net.minecraft.world.inventory.BeaconMenu`

### Fields
- `private static final int PAYMENT_SLOT` (= 0)
- `private static final int SLOT_COUNT` (= 1)
- `private static final int DATA_COUNT` (= 3)
- `private static final int INV_SLOT_START` (= 1)
- `private static final int INV_SLOT_END` (= 28)
- `private static final int USE_ROW_SLOT_START` (= 28)
- `private static final int USE_ROW_SLOT_END` (= 37)
- `private static final int NO_EFFECT` (= 0)
- `private final Container beacon`
- `private final BeaconMenu.PaymentSlot paymentSlot`
- `private final ContainerLevelAccess access`
- `private final ContainerData beaconData`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public void removed(Player p_39049_)`
- `public boolean stillValid(Player p_39047_)`
- `public void setData(int p_39044_,  int p_39045_)`
- `public ItemStack quickMoveStack(Player p_39051_,  int p_39052_)`
- `public int getLevels()`
- `public static int encodeEffect(@Nullable  MobEffect p_298242_)`
- `@Nullable public static MobEffect decodeEffect(int p_297542_)`
- `@Nullable public MobEffect getPrimaryEffect()`
- `@Nullable public MobEffect getSecondaryEffect()`
- `public void updateEffects(Optional<MobEffect> p_219973_,  Optional<MobEffect> p_219974_)`
- `public boolean hasPayment()`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## BeaconMenu.PaymentSlot

*class* `net.minecraft.world.inventory.BeaconMenu.PaymentSlot`

Enclosing class: BeaconMenu

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_39077_)`
- `public int getMaxStackSize()`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `onTake`, `remove`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## BlastFurnaceMenu

*class* `net.minecraft.world.inventory.BlastFurnaceMenu`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractFurnaceMenu`: `DATA_COUNT`, `FUEL_SLOT`, `INGREDIENT_SLOT`, `level`, `RESULT_SLOT`, `SLOT_COUNT`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractFurnaceMenu`: `canSmelt`, `clearCraftingContent`, `fillCraftSlotsStackedContents`, `getBurnProgress`, `getGridHeight`, `getGridWidth`, `getLitProgress`, `getRecipeBookType`, `getResultSlotIndex`, `getSize`, `isFuel`, `isLit`, `quickMoveStack`, `recipeMatches`, `shouldMoveToInventory`, `stillValid`
- from `net.minecraft.world.inventory.RecipeBookMenu`: `getRecipeBookCategories`, `handlePlacement`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## BrewingStandMenu

*class* `net.minecraft.world.inventory.BrewingStandMenu`

### Fields
- `private static final int BOTTLE_SLOT_START` (= 0)
- `private static final int BOTTLE_SLOT_END` (= 2)
- `private static final int INGREDIENT_SLOT` (= 3)
- `private static final int FUEL_SLOT` (= 4)
- `private static final int SLOT_COUNT` (= 5)
- `private static final int DATA_COUNT` (= 2)
- `private static final int INV_SLOT_START` (= 5)
- `private static final int INV_SLOT_END` (= 32)
- `private static final int USE_ROW_SLOT_START` (= 32)
- `private static final int USE_ROW_SLOT_END` (= 41)
- `private final Container brewingStand`
- `private final ContainerData brewingStandData`
- `private final Slot ingredientSlot`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_39098_)`
- `public ItemStack quickMoveStack(Player p_39100_,  int p_39101_)`
- `public int getFuel()`
- `public int getBrewingTicks()`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## BrewingStandMenu.FuelSlot

*class* `net.minecraft.world.inventory.BrewingStandMenu.FuelSlot`

Enclosing class: BrewingStandMenu

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_39111_)`
- `public static boolean mayPlaceItem(ItemStack p_39113_)`
- `public int getMaxStackSize()`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `onTake`, `remove`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## BrewingStandMenu.IngredientsSlot

*class* `net.minecraft.world.inventory.BrewingStandMenu.IngredientsSlot`

Enclosing class: BrewingStandMenu

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_39121_)`
- `public int getMaxStackSize()`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `onTake`, `remove`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## BrewingStandMenu.PotionSlot

*class* `net.minecraft.world.inventory.BrewingStandMenu.PotionSlot`

Enclosing class: BrewingStandMenu

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_39132_)`
- `public int getMaxStackSize()`
- `public void onTake(Player p_150499_,  ItemStack p_150500_)`
- `public static boolean mayPlaceItem(ItemStack p_39134_)`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `remove`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## CartographyTableMenu

*class* `net.minecraft.world.inventory.CartographyTableMenu`

### Fields
- `public static final int MAP_SLOT` (= 0)
- `public static final int ADDITIONAL_SLOT` (= 1)
- `public static final int RESULT_SLOT` (= 2)
- `private static final int INV_SLOT_START` (= 3)
- `private static final int INV_SLOT_END` (= 30)
- `private static final int USE_ROW_SLOT_START` (= 30)
- `private static final int USE_ROW_SLOT_END` (= 39)
- `private final ContainerLevelAccess access`
- `long lastSoundTime`
- `public final Container container`
- `private final ResultContainer resultContainer`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_39149_)`
- `public void slotsChanged(Container p_39147_)`
- `private void setupResultSlot(ItemStack p_39163_,  ItemStack p_39164_,  ItemStack p_39165_)`
- `public boolean canTakeItemForPickAll(ItemStack p_39160_,  Slot p_39161_)`
- `public ItemStack quickMoveStack(Player p_39175_,  int p_39176_)`
- `public void removed(Player p_39173_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## ChestMenu

*class* `net.minecraft.world.inventory.ChestMenu`

### Fields
- `private static final int SLOTS_PER_ROW` (= 9)
- `private final Container container`
- `private final int containerRows`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public static ChestMenu oneRow(int p_39235_,  Inventory p_39236_)`
- `public static ChestMenu twoRows(int p_39244_,  Inventory p_39245_)`
- `public static ChestMenu threeRows(int p_39256_,  Inventory p_39257_)`
- `public static ChestMenu fourRows(int p_39259_,  Inventory p_39260_)`
- `public static ChestMenu fiveRows(int p_39263_,  Inventory p_39264_)`
- `public static ChestMenu sixRows(int p_39267_,  Inventory p_39268_)`
- `public static ChestMenu threeRows(int p_39238_,  Inventory p_39239_,  Container p_39240_)`
- `public static ChestMenu sixRows(int p_39247_,  Inventory p_39248_,  Container p_39249_)`
- `public boolean stillValid(Player p_39242_)`
- `public ItemStack quickMoveStack(Player p_39253_,  int p_39254_)`
- `public void removed(Player p_39251_)`
- `public Container getContainer()`
- `public int getRowCount()`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## Class ClickAction

*enum* `net.minecraft.world.inventory.Class ClickAction`

### Methods
- `public static ClickAction[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClickAction valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ClickType

*enum* `net.minecraft.world.inventory.Class ClickType`

### Methods
- `public static ClickType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClickType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class RecipeBookType

*enum* `net.minecraft.world.inventory.Class RecipeBookType`

### Methods
- `public static RecipeBookType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RecipeBookType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static RecipeBookType create(String name)`
- `public void init()`
  Description copied from interface: IExtensibleEnum
  Called by generated factory code to do any post-constructor setup required by
   the enum. Should not be called manually.

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ContainerData

*interface* `net.minecraft.world.inventory.ContainerData`

### Methods
- `int get(int p_39284_)`
- `void set(int p_39285_,  int p_39286_)`
- `int getCount()`

## ContainerLevelAccess

*interface* `net.minecraft.world.inventory.ContainerLevelAccess`

### Fields
- `static final ContainerLevelAccess NULL`

### Methods
- `static ContainerLevelAccess create(Level p_39290_,  BlockPos p_39291_)`
- `<T> Optional<T> evaluate(BiFunction<Level,BlockPos,T> p_39298_)`
- `default <T> T evaluate(BiFunction<Level,BlockPos,T> p_39300_,  T p_39301_)`
- `default void execute(BiConsumer<Level,BlockPos> p_39293_)`

## ContainerListener

*interface* `net.minecraft.world.inventory.ContainerListener`

### Methods
- `void slotChanged(AbstractContainerMenu p_39315_,  int p_39316_,  ItemStack p_39317_)`
- `void dataChanged(AbstractContainerMenu p_150524_,  int p_150525_,  int p_150526_)`

## ContainerSynchronizer

*interface* `net.minecraft.world.inventory.ContainerSynchronizer`

### Methods
- `void sendInitialData(AbstractContainerMenu p_150535_,  NonNullList<ItemStack> p_150536_,  ItemStack p_150537_,  int[] p_150538_)`
- `void sendSlotChange(AbstractContainerMenu p_150530_,  int p_150531_,  ItemStack p_150532_)`
- `void sendCarriedChange(AbstractContainerMenu p_150533_,  ItemStack p_150534_)`
- `void sendDataChange(AbstractContainerMenu p_150527_,  int p_150528_,  int p_150529_)`

## CraftingContainer

*interface* `net.minecraft.world.inventory.CraftingContainer`

All Superinterfaces: Clearable, Container, StackedContentsCompatible

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `int getWidth()`
- `int getHeight()`
- `List<ItemStack> getItems()`

### Inherited methods
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getContainerSize`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setChanged`, `setItem`, `startOpen`, `stillValid`, `stopOpen`
- from `net.minecraft.world.inventory.StackedContentsCompatible`: `fillStackedContents`

## CraftingMenu

*class* `net.minecraft.world.inventory.CraftingMenu`

### Fields
- `public static final int RESULT_SLOT` (= 0)
- `private static final int CRAFT_SLOT_START` (= 1)
- `private static final int CRAFT_SLOT_END` (= 10)
- `private static final int INV_SLOT_START` (= 10)
- `private static final int INV_SLOT_END` (= 37)
- `private static final int USE_ROW_SLOT_START` (= 37)
- `private static final int USE_ROW_SLOT_END` (= 46)
- `private final CraftingContainer craftSlots`
- `private final ResultContainer resultSlots`
- `private final ContainerLevelAccess access`
- `private final Player player`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `protected static void slotChangedCraftingGrid(AbstractContainerMenu p_150547_,  Level p_150548_,  Player p_150549_,  CraftingContainer p_150550_,  ResultContainer p_150551_)`
- `public void slotsChanged(Container p_39366_)`
- `public void fillCraftSlotsStackedContents(StackedContents p_39374_)`
- `public void clearCraftingContent()`
- `public boolean recipeMatches(RecipeHolder<? extends Recipe<CraftingContainer>> p_300381_)`
- `public void removed(Player p_39389_)`
- `public boolean stillValid(Player p_39368_)`
- `public ItemStack quickMoveStack(Player p_39391_,  int p_39392_)`
- `public boolean canTakeItemForPickAll(ItemStack p_39381_,  Slot p_39382_)`
- `public int getResultSlotIndex()`
- `public int getGridWidth()`
- `public int getGridHeight()`
- `public int getSize()`
- `public RecipeBookType getRecipeBookType()`
- `public boolean shouldMoveToInventory(int p_150553_)`

### Inherited methods
- from `net.minecraft.world.inventory.RecipeBookMenu`: `getRecipeBookCategories`, `handlePlacement`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## DataSlot

*class* `net.minecraft.world.inventory.DataSlot`

### Fields
- `private int prevValue`

### Methods
- `public static DataSlot forContainer(ContainerData p_39404_,  int p_39405_)`
- `public static DataSlot shared(int[] p_39407_,  int p_39408_)`
- `public static DataSlot standalone()`
- `public abstract int get()`
- `public abstract void set(int p_39402_)`
- `public boolean checkAndClearUpdateFlag()`

## DispenserMenu

*class* `net.minecraft.world.inventory.DispenserMenu`

### Fields
- `private static final int SLOT_COUNT` (= 9)
- `private static final int INV_SLOT_START` (= 9)
- `private static final int INV_SLOT_END` (= 36)
- `private static final int USE_ROW_SLOT_START` (= 36)
- `private static final int USE_ROW_SLOT_END` (= 45)
- `private final Container dispenser`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_39440_)`
- `public ItemStack quickMoveStack(Player p_39444_,  int p_39445_)`
- `public void removed(Player p_39442_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## EnchantmentMenu

*class* `net.minecraft.world.inventory.EnchantmentMenu`

### Fields
- `static final ResourceLocation EMPTY_SLOT_LAPIS_LAZULI`
- `private final Container enchantSlots`
- `private final ContainerLevelAccess access`
- `private final RandomSource random`
- `private final DataSlot enchantmentSeed`
- `public final int[] costs`
- `public final int[] enchantClue`
- `public final int[] levelClue`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public void slotsChanged(Container p_39461_)`
- `public boolean clickMenuButton(Player p_39465_,  int p_39466_)`
- `private List<EnchantmentInstance> getEnchantmentList(ItemStack p_39472_,  int p_39473_,  int p_39474_)`
- `public int getGoldCount()`
- `public int getEnchantmentSeed()`
- `public void removed(Player p_39488_)`
- `public boolean stillValid(Player p_39463_)`
- `public ItemStack quickMoveStack(Player p_39490_,  int p_39491_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## FurnaceFuelSlot

*class* `net.minecraft.world.inventory.FurnaceFuelSlot`

### Fields
- `private final AbstractFurnaceMenu menu`

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_39526_)`
- `public int getMaxStackSize(ItemStack p_39528_)`
- `public static boolean isBucket(ItemStack p_39530_)`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `onTake`, `remove`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## FurnaceMenu

*class* `net.minecraft.world.inventory.FurnaceMenu`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractFurnaceMenu`: `DATA_COUNT`, `FUEL_SLOT`, `INGREDIENT_SLOT`, `level`, `RESULT_SLOT`, `SLOT_COUNT`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractFurnaceMenu`: `canSmelt`, `clearCraftingContent`, `fillCraftSlotsStackedContents`, `getBurnProgress`, `getGridHeight`, `getGridWidth`, `getLitProgress`, `getRecipeBookType`, `getResultSlotIndex`, `getSize`, `isFuel`, `isLit`, `quickMoveStack`, `recipeMatches`, `shouldMoveToInventory`, `stillValid`
- from `net.minecraft.world.inventory.RecipeBookMenu`: `getRecipeBookCategories`, `handlePlacement`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## FurnaceResultSlot

*class* `net.minecraft.world.inventory.FurnaceResultSlot`

### Fields
- `private final Player player`
- `private int removeCount`

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_39553_)`
- `public ItemStack remove(int p_39548_)`
- `public void onTake(Player p_150563_,  ItemStack p_150564_)`
- `protected void onQuickCraft(ItemStack p_39555_,  int p_39556_)`
- `protected void checkTakeAchievements(ItemStack p_39558_)`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onSwapCraft`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## GrindstoneMenu

*class* `net.minecraft.world.inventory.GrindstoneMenu`

### Fields
- `public static final int MAX_NAME_LENGTH` (= 35)
- `public static final int INPUT_SLOT` (= 0)
- `public static final int ADDITIONAL_SLOT` (= 1)
- `public static final int RESULT_SLOT` (= 2)
- `private static final int INV_SLOT_START` (= 3)
- `private static final int INV_SLOT_END` (= 30)
- `private static final int USE_ROW_SLOT_START` (= 30)
- `private static final int USE_ROW_SLOT_END` (= 39)
- `private final Container resultSlots`
- `final Container repairSlots`
- `private final ContainerLevelAccess access`
- `private int xp`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public void slotsChanged(Container p_39570_)`
- `private void createResult()`
- `private ItemStack mergeEnchants(ItemStack p_39591_,  ItemStack p_39592_)`
- `private ItemStack removeNonCurses(ItemStack p_39580_,  int p_39581_,  int p_39582_)`
- `public void removed(Player p_39586_)`
- `public boolean stillValid(Player p_39572_)`
- `public ItemStack quickMoveStack(Player p_39588_,  int p_39589_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## HopperMenu

*class* `net.minecraft.world.inventory.HopperMenu`

### Fields
- `public static final int CONTAINER_SIZE` (= 5)
- `private final Container hopper`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_39647_)`
- `public ItemStack quickMoveStack(Player p_39651_,  int p_39652_)`
- `public void removed(Player p_39649_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## HorseInventoryMenu

*class* `net.minecraft.world.inventory.HorseInventoryMenu`

### Fields
- `private final Container horseContainer`
- `private final AbstractHorse horse`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_39661_)`
- `private boolean hasChest(AbstractHorse p_150578_)`
- `public ItemStack quickMoveStack(Player p_39665_,  int p_39666_)`
- `public void removed(Player p_39663_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## InventoryMenu

*class* `net.minecraft.world.inventory.InventoryMenu`

### Fields
- `public static final int CONTAINER_ID` (= 0)
- `public static final int RESULT_SLOT` (= 0)
- `public static final int CRAFT_SLOT_START` (= 1)
- `public static final int CRAFT_SLOT_END` (= 5)
- `public static final int ARMOR_SLOT_START` (= 5)
- `public static final int ARMOR_SLOT_END` (= 9)
- `public static final int INV_SLOT_START` (= 9)
- `public static final int INV_SLOT_END` (= 36)
- `public static final int USE_ROW_SLOT_START` (= 36)
- `public static final int USE_ROW_SLOT_END` (= 45)
- `public static final int SHIELD_SLOT` (= 45)
- `public static final ResourceLocation BLOCK_ATLAS`
- `public static final ResourceLocation EMPTY_ARMOR_SLOT_HELMET`
- `public static final ResourceLocation EMPTY_ARMOR_SLOT_CHESTPLATE`
- `public static final ResourceLocation EMPTY_ARMOR_SLOT_LEGGINGS`
- `public static final ResourceLocation EMPTY_ARMOR_SLOT_BOOTS`
- `public static final ResourceLocation EMPTY_ARMOR_SLOT_SHIELD`
- `static final ResourceLocation[] TEXTURE_EMPTY_SLOTS`
- `private static final EquipmentSlot[] SLOT_IDS`
- `private final CraftingContainer craftSlots`
- `private final ResultContainer resultSlots`
- `public final boolean active`
- `private final Player owner`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `static void onEquipItem(Player p_270432_,  EquipmentSlot p_270254_,  ItemStack p_270316_,  ItemStack p_270993_)`
- `public static boolean isHotbarSlot(int p_150593_)`
- `public void fillCraftSlotsStackedContents(StackedContents p_39714_)`
- `public void clearCraftingContent()`
- `public boolean recipeMatches(RecipeHolder<? extends Recipe<CraftingContainer>> p_299815_)`
- `public void slotsChanged(Container p_39710_)`
- `public void removed(Player p_39721_)`
- `public boolean stillValid(Player p_39712_)`
- `public ItemStack quickMoveStack(Player p_39723_,  int p_39724_)`
- `public boolean canTakeItemForPickAll(ItemStack p_39716_,  Slot p_39717_)`
- `public int getResultSlotIndex()`
- `public int getGridWidth()`
- `public int getGridHeight()`
- `public int getSize()`
- `public CraftingContainer getCraftSlots()`
- `public RecipeBookType getRecipeBookType()`
- `public boolean shouldMoveToInventory(int p_150591_)`

### Inherited methods
- from `net.minecraft.world.inventory.RecipeBookMenu`: `getRecipeBookCategories`, `handlePlacement`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## ItemCombinerMenu

*class* `net.minecraft.world.inventory.ItemCombinerMenu`

### Fields
- `private static final int INVENTORY_SLOTS_PER_ROW` (= 9)
- `private static final int INVENTORY_SLOTS_PER_COLUMN` (= 3)
- `protected final ContainerLevelAccess access`
- `protected final Player player`
- `protected final Container inputSlots`
- `private final List<Integer> inputSlotIndexes`
- `protected final ResultContainer resultSlots`
- `private final int resultSlotIndex`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `protected abstract boolean mayPickup(Player p_39798_,  boolean p_39799_)`
- `protected abstract void onTake(Player p_150601_,  ItemStack p_150602_)`
- `protected abstract boolean isValidBlock(BlockState p_39788_)`
- `private void createInputSlots(ItemCombinerMenuSlotDefinition p_267172_)`
- `private void createResultSlot(ItemCombinerMenuSlotDefinition p_267000_)`
- `private void createInventorySlots(Inventory p_267325_)`
- `public abstract void createResult()`
- `protected abstract ItemCombinerMenuSlotDefinition createInputSlotDefinitions()`
- `private SimpleContainer createContainer(int p_267204_)`
- `public void slotsChanged(Container p_39778_)`
- `public void removed(Player p_39790_)`
- `public boolean stillValid(Player p_39780_)`
- `public ItemStack quickMoveStack(Player p_39792_,  int p_39793_)`
- `protected boolean canMoveIntoInputSlots(ItemStack p_39787_)`
- `public int getSlotToQuickMoveTo(ItemStack p_267159_)`
- `public int getResultSlot()`
- `private int getInventorySlotStart()`
- `private int getInventorySlotEnd()`
- `private int getUseRowStart()`
- `private int getUseRowEnd()`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## ItemCombinerMenuSlotDefinition

*class* `net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition`

### Fields
- `private final List<ItemCombinerMenuSlotDefinition.SlotDefinition> slots`
- `private final ItemCombinerMenuSlotDefinition.SlotDefinition resultSlot`

### Methods
- `public static ItemCombinerMenuSlotDefinition.Builder create()`
- `public boolean hasSlot(int p_267185_)`
- `public ItemCombinerMenuSlotDefinition.SlotDefinition getSlot(int p_266907_)`
- `public ItemCombinerMenuSlotDefinition.SlotDefinition getResultSlot()`
- `public List<ItemCombinerMenuSlotDefinition.SlotDefinition> getSlots()`
- `public int getNumOfInputSlots()`
- `public int getResultSlotIndex()`
- `public List<Integer> getInputSlotIndexes()`

## ItemCombinerMenuSlotDefinition.Builder

*class* `net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition.Builder`

Enclosing class: ItemCombinerMenuSlotDefinition

### Fields
- `private final List<ItemCombinerMenuSlotDefinition.SlotDefinition> slots`
- `private ItemCombinerMenuSlotDefinition.SlotDefinition resultSlot`

### Methods
- `public ItemCombinerMenuSlotDefinition.Builder withSlot(int p_267315_,  int p_267028_,  int p_266815_,  Predicate<ItemStack> p_267120_)`
- `public ItemCombinerMenuSlotDefinition.Builder withResultSlot(int p_267180_,  int p_267130_,  int p_266910_)`
- `public ItemCombinerMenuSlotDefinition build()`

## ItemCombinerMenuSlotDefinition.SlotDefinition

*record* `net.minecraft.world.inventory.ItemCombinerMenuSlotDefinition.SlotDefinition`

Enclosing class: ItemCombinerMenuSlotDefinition

### Fields
- `private final int slotIndex`
  The field for the slotIndex record component.
- `private final int x`
  The field for the x record component.
- `private final int y`
  The field for the y record component.
- `private final Predicate<ItemStack> mayPlace`
  The field for the mayPlace record component.
- `static final ItemCombinerMenuSlotDefinition.SlotDefinition EMPTY`

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
- `public int slotIndex()`
  Returns the value of the slotIndex record component.
  - returns: the value of the slotIndex record component
- `public int x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public int y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public Predicate<ItemStack> mayPlace()`
  Returns the value of the mayPlace record component.
  - returns: the value of the mayPlace record component

## LecternMenu

*class* `net.minecraft.world.inventory.LecternMenu`

### Fields
- `private static final int DATA_COUNT` (= 1)
- `private static final int SLOT_COUNT` (= 1)
- `public static final int BUTTON_PREV_PAGE` (= 1)
- `public static final int BUTTON_NEXT_PAGE` (= 2)
- `public static final int BUTTON_TAKE_BOOK` (= 3)
- `public static final int BUTTON_PAGE_JUMP_RANGE_START` (= 100)
- `private final Container lectern`
- `private final ContainerData lecternData`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean clickMenuButton(Player p_39833_,  int p_39834_)`
- `public ItemStack quickMoveStack(Player p_219987_,  int p_219988_)`
- `public void setData(int p_39828_,  int p_39829_)`
- `public boolean stillValid(Player p_39831_)`
- `public ItemStack getBook()`
- `public int getPage()`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## LoomMenu

*class* `net.minecraft.world.inventory.LoomMenu`

### Fields
- `private static final int PATTERN_NOT_SET` (= -1)
- `private static final int INV_SLOT_START` (= 4)
- `private static final int INV_SLOT_END` (= 31)
- `private static final int USE_ROW_SLOT_START` (= 31)
- `private static final int USE_ROW_SLOT_END` (= 40)
- `private final ContainerLevelAccess access`
- `final DataSlot selectedBannerPatternIndex`
- `private List<Holder<BannerPattern>> selectablePatterns`
- `Runnable slotUpdateListener`
- `final Slot bannerSlot`
- `final Slot dyeSlot`
- `private final Slot patternSlot`
- `private final Slot resultSlot`
- `long lastSoundTime`
- `private final Container inputContainer`
- `private final Container outputContainer`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_39865_)`
- `public boolean clickMenuButton(Player p_39867_,  int p_39868_)`
- `private List<Holder<BannerPattern>> getSelectablePatterns(ItemStack p_219994_)`
- `private boolean isValidPatternIndex(int p_242850_)`
- `public void slotsChanged(Container p_39863_)`
- `public List<Holder<BannerPattern>> getSelectablePatterns()`
- `public int getSelectedBannerPatternIndex()`
- `public void registerUpdateListener(Runnable p_39879_)`
- `public ItemStack quickMoveStack(Player p_39883_,  int p_39884_)`
- `public void removed(Player p_39881_)`
- `private void setupResultSlot(Holder<BannerPattern> p_219992_)`
- `public Slot getBannerSlot()`
- `public Slot getDyeSlot()`
- `public Slot getPatternSlot()`
- `public Slot getResultSlot()`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## MenuConstructor

*interface* `net.minecraft.world.inventory.MenuConstructor`

### Methods
- `@Nullable AbstractContainerMenu createMenu(int p_39954_,  Inventory p_39955_,  Player p_39956_)`

## MenuType

*class* `net.minecraft.world.inventory.MenuType`

### Fields
- `public static final MenuType<ChestMenu> GENERIC_9x1`
- `public static final MenuType<ChestMenu> GENERIC_9x2`
- `public static final MenuType<ChestMenu> GENERIC_9x3`
- `public static final MenuType<ChestMenu> GENERIC_9x4`
- `public static final MenuType<ChestMenu> GENERIC_9x5`
- `public static final MenuType<ChestMenu> GENERIC_9x6`
- `public static final MenuType<DispenserMenu> GENERIC_3x3`
- `public static final MenuType<AnvilMenu> ANVIL`
- `public static final MenuType<BeaconMenu> BEACON`
- `public static final MenuType<BlastFurnaceMenu> BLAST_FURNACE`
- `public static final MenuType<BrewingStandMenu> BREWING_STAND`
- `public static final MenuType<CraftingMenu> CRAFTING`
- `public static final MenuType<EnchantmentMenu> ENCHANTMENT`
- `public static final MenuType<FurnaceMenu> FURNACE`
- `public static final MenuType<GrindstoneMenu> GRINDSTONE`
- `public static final MenuType<HopperMenu> HOPPER`
- `public static final MenuType<LecternMenu> LECTERN`
- `public static final MenuType<LoomMenu> LOOM`
- `public static final MenuType<MerchantMenu> MERCHANT`
- `public static final MenuType<ShulkerBoxMenu> SHULKER_BOX`
- `public static final MenuType<SmithingMenu> SMITHING`
- `public static final MenuType<SmokerMenu> SMOKER`
- `public static final MenuType<CartographyTableMenu> CARTOGRAPHY_TABLE`
- `public static final MenuType<StonecutterMenu> STONECUTTER`
- `private final FeatureFlagSet requiredFeatures`
- `private final MenuType.MenuSupplier<T extends AbstractContainerMenu> constructor`

### Inherited fields
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `private static <T extends AbstractContainerMenu> MenuType<T> register(String p_39989_,  MenuType.MenuSupplier<T> p_39990_)`
- `private static <T extends AbstractContainerMenu> MenuType<T> register(String p_267295_,  MenuType.MenuSupplier<T> p_266945_,  FeatureFlag... p_267055_)`
- `public T create(int p_39986_,  Inventory p_39987_)`
- `public T create(int windowId,  Inventory playerInv,  FriendlyByteBuf extraData)`
- `public FeatureFlagSet requiredFeatures()`

### Inherited methods
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`

## MenuType.MenuSupplier

*interface* `net.minecraft.world.inventory.MenuType.MenuSupplier`

Enclosing class: MenuType<T extends AbstractContainerMenu>

### Methods
- `T create(int p_39995_,  Inventory p_39996_)`

## MerchantContainer

*class* `net.minecraft.world.inventory.MerchantContainer`

### Fields
- `private final Merchant merchant`
- `private final NonNullList<ItemStack> itemStacks`
- `@Nullable private MerchantOffer activeOffer`
- `private int selectionHint`
- `private int futureXp`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public ItemStack getItem(int p_40008_)`
- `public ItemStack removeItem(int p_40010_,  int p_40011_)`
- `private boolean isPaymentSlot(int p_40023_)`
- `public ItemStack removeItemNoUpdate(int p_40018_)`
- `public void setItem(int p_40013_,  ItemStack p_40014_)`
- `public boolean stillValid(Player p_40016_)`
- `public void setChanged()`
- `public void updateSellItem()`
- `@Nullable public MerchantOffer getActiveOffer()`
- `public void setSelectionHint(int p_40021_)`
- `public void clearContent()`
- `public int getFutureXp()`

### Inherited methods
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`, `stopOpen`

## MerchantMenu

*class* `net.minecraft.world.inventory.MerchantMenu`

### Fields
- `protected static final int PAYMENT1_SLOT` (= 0)
- `protected static final int PAYMENT2_SLOT` (= 1)
- `protected static final int RESULT_SLOT` (= 2)
- `private static final int INV_SLOT_START` (= 3)
- `private static final int INV_SLOT_END` (= 30)
- `private static final int USE_ROW_SLOT_START` (= 30)
- `private static final int USE_ROW_SLOT_END` (= 39)
- `private static final int SELLSLOT1_X` (= 136)
- `private static final int SELLSLOT2_X` (= 162)
- `private static final int BUYSLOT_X` (= 220)
- `private static final int ROW_Y` (= 37)
- `private final Merchant trader`
- `private final MerchantContainer tradeContainer`
- `private int merchantLevel`
- `private boolean showProgressBar`
- `private boolean canRestock`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public void setShowProgressBar(boolean p_40049_)`
- `public void slotsChanged(Container p_40040_)`
- `public void setSelectionHint(int p_40064_)`
- `public boolean stillValid(Player p_40042_)`
- `public int getTraderXp()`
- `public int getFutureTraderXp()`
- `public void setXp(int p_40067_)`
- `public int getTraderLevel()`
- `public void setMerchantLevel(int p_40070_)`
- `public void setCanRestock(boolean p_40059_)`
- `public boolean canRestock()`
- `public boolean canTakeItemForPickAll(ItemStack p_40044_,  Slot p_40045_)`
- `public ItemStack quickMoveStack(Player p_40053_,  int p_40054_)`
- `private void playTradeSound()`
- `public void removed(Player p_40051_)`
- `public void tryMoveItems(int p_40073_)`
- `private void moveFromInventoryToPaymentSlot(int p_40061_,  ItemStack p_40062_)`
- `public void setOffers(MerchantOffers p_40047_)`
- `public MerchantOffers getOffers()`
- `public boolean showProgressBar()`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## MerchantResultSlot

*class* `net.minecraft.world.inventory.MerchantResultSlot`

### Fields
- `private final MerchantContainer slots`
- `private final Player player`
- `private int removeCount`
- `private final Merchant merchant`

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_40095_)`
- `public ItemStack remove(int p_40090_)`
- `protected void onQuickCraft(ItemStack p_40097_,  int p_40098_)`
- `protected void checkTakeAchievements(ItemStack p_40100_)`
- `public void onTake(Player p_150631_,  ItemStack p_150632_)`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onSwapCraft`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## PlayerEnderChestContainer

*class* `net.minecraft.world.inventory.PlayerEnderChestContainer`

### Fields
- `@Nullable private EnderChestBlockEntity activeChest`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public void setActiveChest(EnderChestBlockEntity p_40106_)`
- `public boolean isActiveChest(EnderChestBlockEntity p_150634_)`
- `public void fromTag(ListTag p_40108_)`
- `public ListTag createTag()`
- `public boolean stillValid(Player p_40104_)`
- `public void startOpen(Player p_40112_)`
- `public void stopOpen(Player p_40110_)`

### Inherited methods
- from `net.minecraft.world.SimpleContainer`: `addItem`, `addListener`, `canAddItem`, `clearContent`, `fillStackedContents`, `getContainerSize`, `getItem`, `isEmpty`, `removeAllItems`, `removeItem`, `removeItemNoUpdate`, `removeItemType`, `removeListener`, `setChanged`, `setItem`, `toString`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`

## RecipeBookMenu

*class* `net.minecraft.world.inventory.RecipeBookMenu`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public void handlePlacement(boolean p_40119_,  RecipeHolder<?> p_297420_,  ServerPlayer p_40121_)`
- `public abstract void fillCraftSlotsStackedContents(StackedContents p_40117_)`
- `public abstract void clearCraftingContent()`
- `public abstract boolean recipeMatches(RecipeHolder<? extends Recipe<C>> p_297792_)`
- `public abstract int getResultSlotIndex()`
- `public abstract int getGridWidth()`
- `public abstract int getGridHeight()`
- `public abstract int getSize()`
- `public List<RecipeBookCategories> getRecipeBookCategories()`
- `public abstract RecipeBookType getRecipeBookType()`
- `public abstract boolean shouldMoveToInventory(int p_150635_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `quickMoveStack`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## RecipeCraftingHolder

*interface* `net.minecraft.world.inventory.RecipeCraftingHolder`

### Methods
- `void setRecipeUsed(@Nullable  RecipeHolder<?> p_297397_)`
- `@Nullable RecipeHolder<?> getRecipeUsed()`
- `default void awardUsedRecipes(Player p_297343_,  List<ItemStack> p_297535_)`
- `default boolean setRecipeUsed(Level p_298867_,  ServerPlayer p_301009_,  RecipeHolder<?> p_301264_)`

## ResultContainer

*class* `net.minecraft.world.inventory.ResultContainer`

### Fields
- `private final NonNullList<ItemStack> itemStacks`
- `@Nullable private RecipeHolder<?> recipeUsed`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public ItemStack getItem(int p_40147_)`
- `public ItemStack removeItem(int p_40149_,  int p_40150_)`
- `public ItemStack removeItemNoUpdate(int p_40160_)`
- `public void setItem(int p_40152_,  ItemStack p_40153_)`
- `public void setChanged()`
- `public boolean stillValid(Player p_40155_)`
- `public void clearContent()`
- `public void setRecipeUsed(@Nullable  RecipeHolder<?> p_297508_)`
- `@Nullable public RecipeHolder<?> getRecipeUsed()`

### Inherited methods
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`, `stopOpen`
- from `net.minecraft.world.inventory.RecipeCraftingHolder`: `awardUsedRecipes`, `setRecipeUsed`

## ResultSlot

*class* `net.minecraft.world.inventory.ResultSlot`

### Fields
- `private final CraftingContainer craftSlots`
- `private final Player player`
- `private int removeCount`

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_40178_)`
- `public ItemStack remove(int p_40173_)`
- `protected void onQuickCraft(ItemStack p_40180_,  int p_40181_)`
- `protected void onSwapCraft(int p_40183_)`
- `protected void checkTakeAchievements(ItemStack p_40185_)`
- `public void onTake(Player p_150638_,  ItemStack p_150639_)`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## ShulkerBoxMenu

*class* `net.minecraft.world.inventory.ShulkerBoxMenu`

### Fields
- `private static final int CONTAINER_SIZE` (= 27)
- `private final Container container`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_40195_)`
- `public ItemStack quickMoveStack(Player p_40199_,  int p_40200_)`
- `public void removed(Player p_40197_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## ShulkerBoxSlot

*class* `net.minecraft.world.inventory.ShulkerBoxSlot`

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPlace(ItemStack p_40207_)`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPickup`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `onTake`, `remove`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## SimpleContainerData

*class* `net.minecraft.world.inventory.SimpleContainerData`

### Fields
- `private final int[] ints`

### Methods
- `public int get(int p_40213_)`
- `public void set(int p_40215_,  int p_40216_)`
- `public int getCount()`

## Slot

*class* `net.minecraft.world.inventory.Slot`

### Fields
- `private final int slot`
- `public final Container container`
- `public int index`
- `public final int x`
- `public final int y`
- `private com.mojang.datafixers.util.Pair<ResourceLocation,ResourceLocation> backgroundPair`

### Methods
- `public void onQuickCraft(ItemStack p_40235_,  ItemStack p_40236_)`
- `protected void onQuickCraft(ItemStack p_40232_,  int p_40233_)`
- `protected void onSwapCraft(int p_40237_)`
- `protected void checkTakeAchievements(ItemStack p_40239_)`
- `public void onTake(Player p_150645_,  ItemStack p_150646_)`
- `public boolean mayPlace(ItemStack p_40231_)`
- `public ItemStack getItem()`
- `public boolean hasItem()`
- `public void setByPlayer(ItemStack p_270152_)`
- `public void setByPlayer(ItemStack p_299954_,  ItemStack p_301385_)`
- `public void set(ItemStack p_40240_)`
- `public void setChanged()`
- `public int getMaxStackSize()`
- `public int getMaxStackSize(ItemStack p_40238_)`
- `@Nullable public com.mojang.datafixers.util.Pair<ResourceLocation,ResourceLocation> getNoItemIcon()`
- `public ItemStack remove(int p_40227_)`
- `public boolean mayPickup(Player p_40228_)`
- `public boolean isActive()`
- `public int getSlotIndex()`
  Retrieves the index in the inventory for this slot, this value should typically not
   be used, but can be useful for some occasions.
  - returns: Index in associated inventory for this slot.
- `public boolean isSameInventory(Slot other)`
  Checks if the other slot is in the same inventory, by comparing the inventory reference.
  - param: other -
  - returns: true if the other slot is in the same inventory
- `public Slot setBackground(ResourceLocation atlas,  ResourceLocation sprite)`
  Sets the background atlas and sprite location.
  - param: atlas - The atlas name
  - param: sprite - The sprite located on that atlas.
  - returns: this, to allow chaining.
- `public Optional<ItemStack> tryRemove(int p_150642_,  int p_150643_,  Player p_150644_)`
- `public ItemStack safeTake(int p_150648_,  int p_150649_,  Player p_150650_)`
- `public ItemStack safeInsert(ItemStack p_150660_)`
- `public ItemStack safeInsert(ItemStack p_150657_,  int p_150658_)`
- `public boolean allowModification(Player p_150652_)`
- `public int getContainerSlot()`
- `public boolean isHighlightable()`

## SmithingMenu

*class* `net.minecraft.world.inventory.SmithingMenu`

### Fields
- `public static final int TEMPLATE_SLOT` (= 0)
- `public static final int BASE_SLOT` (= 1)
- `public static final int ADDITIONAL_SLOT` (= 2)
- `public static final int RESULT_SLOT` (= 3)
- `public static final int TEMPLATE_SLOT_X_PLACEMENT` (= 8)
- `public static final int BASE_SLOT_X_PLACEMENT` (= 26)
- `public static final int ADDITIONAL_SLOT_X_PLACEMENT` (= 44)
- `private static final int RESULT_SLOT_X_PLACEMENT` (= 98)
- `public static final int SLOT_Y_PLACEMENT` (= 48)
- `private final Level level`
- `@Nullable private RecipeHolder<SmithingRecipe> selectedRecipe`
- `private final List<RecipeHolder<SmithingRecipe>> recipes`

### Inherited fields
- from `net.minecraft.world.inventory.ItemCombinerMenu`: `access`, `inputSlots`, `player`, `resultSlots`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `protected ItemCombinerMenuSlotDefinition createInputSlotDefinitions()`
- `protected boolean isValidBlock(BlockState p_40266_)`
- `protected boolean mayPickup(Player p_40268_,  boolean p_40269_)`
- `protected void onTake(Player p_150663_,  ItemStack p_150664_)`
- `private List<ItemStack> getRelevantItems()`
- `private void shrinkStackInSlot(int p_40271_)`
- `public void createResult()`
- `public int getSlotToQuickMoveTo(ItemStack p_266739_)`
- `private static OptionalInt findSlotMatchingIngredient(SmithingRecipe p_266790_,  ItemStack p_266818_)`
- `public boolean canTakeItemForPickAll(ItemStack p_40257_,  Slot p_40258_)`
- `public boolean canMoveIntoInputSlots(ItemStack p_266846_)`
- `private OptionalInt findSlotToQuickMoveTo(ItemStack p_297430_)`

### Inherited methods
- from `net.minecraft.world.inventory.ItemCombinerMenu`: `getResultSlot`, `quickMoveStack`, `removed`, `slotsChanged`, `stillValid`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## SmokerMenu

*class* `net.minecraft.world.inventory.SmokerMenu`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractFurnaceMenu`: `DATA_COUNT`, `FUEL_SLOT`, `INGREDIENT_SLOT`, `level`, `RESULT_SLOT`, `SLOT_COUNT`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractFurnaceMenu`: `canSmelt`, `clearCraftingContent`, `fillCraftSlotsStackedContents`, `getBurnProgress`, `getGridHeight`, `getGridWidth`, `getLitProgress`, `getRecipeBookType`, `getResultSlotIndex`, `getSize`, `isFuel`, `isLit`, `quickMoveStack`, `recipeMatches`, `shouldMoveToInventory`, `stillValid`
- from `net.minecraft.world.inventory.RecipeBookMenu`: `getRecipeBookCategories`, `handlePlacement`
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `canTakeItemForPickAll`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## StackedContentsCompatible

*interface* `net.minecraft.world.inventory.StackedContentsCompatible`

### Methods
- `void fillStackedContents(StackedContents p_40281_)`

## StonecutterMenu

*class* `net.minecraft.world.inventory.StonecutterMenu`

### Fields
- `public static final int INPUT_SLOT` (= 0)
- `public static final int RESULT_SLOT` (= 1)
- `private static final int INV_SLOT_START` (= 2)
- `private static final int INV_SLOT_END` (= 29)
- `private static final int USE_ROW_SLOT_START` (= 29)
- `private static final int USE_ROW_SLOT_END` (= 38)
- `private final ContainerLevelAccess access`
- `private final DataSlot selectedRecipeIndex`
- `private final Level level`
- `private List<RecipeHolder<StonecutterRecipe>> recipes`
- `private ItemStack input`
- `long lastSoundTime`
- `final Slot inputSlot`
- `final Slot resultSlot`
- `Runnable slotUpdateListener`
- `public final Container container`
- `final ResultContainer resultContainer`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public int getSelectedRecipeIndex()`
- `public List<RecipeHolder<StonecutterRecipe>> getRecipes()`
- `public int getNumRecipes()`
- `public boolean hasInputItem()`
- `public boolean stillValid(Player p_40307_)`
- `public boolean clickMenuButton(Player p_40309_,  int p_40310_)`
- `private boolean isValidRecipeIndex(int p_40335_)`
- `public void slotsChanged(Container p_40302_)`
- `private void setupRecipeList(Container p_40304_,  ItemStack p_40305_)`
- `void setupResultSlot()`
- `public MenuType<?> getType()`
- `public void registerUpdateListener(Runnable p_40324_)`
- `public boolean canTakeItemForPickAll(ItemStack p_40321_,  Slot p_40322_)`
- `public ItemStack quickMoveStack(Player p_40328_,  int p_40329_)`
- `public void removed(Player p_40326_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canDragTo`, `canItemQuickReplace`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `findSlot`, `getCarried`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setCarried`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## TransientCraftingContainer

*class* `net.minecraft.world.inventory.TransientCraftingContainer`

### Fields
- `private final NonNullList<ItemStack> items`
- `private final int width`
- `private final int height`
- `private final AbstractContainerMenu menu`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public ItemStack getItem(int p_287712_)`
- `public ItemStack removeItemNoUpdate(int p_287637_)`
- `public ItemStack removeItem(int p_287682_,  int p_287576_)`
- `public void setItem(int p_287681_,  ItemStack p_287620_)`
- `public void setChanged()`
- `public boolean stillValid(Player p_287774_)`
- `public void clearContent()`
- `public int getHeight()`
- `public int getWidth()`
- `public List<ItemStack> getItems()`
- `public void fillStackedContents(StackedContents p_287653_)`

### Inherited methods
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`, `stopOpen`
