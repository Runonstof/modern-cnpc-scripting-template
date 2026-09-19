# net.minecraft.inventory

- [ClickType](#clicktype)
- [Container](#container)
- [ContainerBeacon](#containerbeacon)
- [ContainerBrewingStand](#containerbrewingstand)
- [ContainerChest](#containerchest)
- [ContainerDispenser](#containerdispenser)
- [ContainerEnchantment](#containerenchantment)
- [ContainerFurnace](#containerfurnace)
- [ContainerHopper](#containerhopper)
- [ContainerHorseChest](#containerhorsechest)
- [ContainerHorseInventory](#containerhorseinventory)
- [ContainerMerchant](#containermerchant)
- [ContainerPlayer](#containerplayer)
- [ContainerRepair](#containerrepair)
- [ContainerShulkerBox](#containershulkerbox)
- [ContainerWorkbench](#containerworkbench)
- [EntityEquipmentSlot](#entityequipmentslot)
- [EntityEquipmentSlot.Type](#entityequipmentslot.type)
- [IContainerListener](#icontainerlistener)
- [IInventory](#iinventory)
- [IInventoryChangedListener](#iinventorychangedlistener)
- [InventoryBasic](#inventorybasic)
- [InventoryCrafting](#inventorycrafting)
- [InventoryCraftResult](#inventorycraftresult)
- [InventoryEnderChest](#inventoryenderchest)
- [InventoryHelper](#inventoryhelper)
- [InventoryLargeChest](#inventorylargechest)
- [InventoryMerchant](#inventorymerchant)
- [ISidedInventory](#isidedinventory)
- [ItemStackHelper](#itemstackhelper)
- [Slot](#slot)
- [SlotCrafting](#slotcrafting)
- [SlotFurnaceFuel](#slotfurnacefuel)
- [SlotFurnaceOutput](#slotfurnaceoutput)
- [SlotMerchantResult](#slotmerchantresult)
- [SlotShulkerBox](#slotshulkerbox)
## ClickType

*enum* `net.minecraft.inventory.ClickType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ClickType>

### Fields
- `public static final ClickType PICKUP`
- `public static final ClickType QUICK_MOVE`
- `public static final ClickType SWAP`
- `public static final ClickType CLONE`
- `public static final ClickType THROW`
- `public static final ClickType QUICK_CRAFT`
- `public static final ClickType PICKUP_ALL`

### Methods
- `public static ClickType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ClickType c : ClickType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ClickType valueOf(java.lang.String name)`
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

## Container

*class* `net.minecraft.inventory.Container`

### Fields
- `public NonNullList<ItemStack> inventoryItemStacks`
- `public java.util.List<Slot> inventorySlots`
- `public int windowId`
- `protected java.util.List<IContainerListener> listeners`

### Methods
- `protected Slot addSlotToContainer(Slot slotIn)`
- `public void addListener(IContainerListener listener)`
- `public NonNullList<ItemStack> getInventory()`
- `public void removeListener(IContainerListener listener)`
- `public void detectAndSendChanges()`
- `public boolean enchantItem(EntityPlayer playerIn,  int id)`
- `public Slot getSlotFromInventory(IInventory inv,  int slotIn)`
- `public Slot getSlot(int slotId)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public ItemStack slotClick(int slotId,  int dragType,  ClickType clickTypeIn,  EntityPlayer player)`
- `public boolean canMergeSlot(ItemStack stack,  Slot slotIn)`
- `public void onContainerClosed(EntityPlayer playerIn)`
- `protected void clearContainer(EntityPlayer playerIn,  World worldIn,  IInventory inventoryIn)`
- `public void onCraftMatrixChanged(IInventory inventoryIn)`
- `public void putStackInSlot(int slotID,  ItemStack stack)`
- `public void setAll(java.util.List<ItemStack> p_190896_1_)`
- `public void updateProgressBar(int id,  int data)`
- `public short getNextTransactionID(InventoryPlayer invPlayer)`
- `public boolean getCanCraft(EntityPlayer player)`
- `public void setCanCraft(EntityPlayer player,  boolean canCraft)`
- `public abstract boolean canInteractWith(EntityPlayer playerIn)`
- `protected boolean mergeItemStack(ItemStack stack,  int startIndex,  int endIndex,  boolean reverseDirection)`
- `public static int extractDragMode(int eventButton)`
- `public static int getDragEvent(int clickedButton)`
- `public static int getQuickcraftMask(int p_94534_0_,  int p_94534_1_)`
- `public static boolean isValidDragMode(int dragModeIn,  EntityPlayer player)`
- `protected void resetDrag()`
- `public static boolean canAddItemToSlot(Slot slotIn,  ItemStack stack,  boolean stackSizeMatters)`
- `public static void computeStackSize(java.util.Set<Slot> dragSlotsIn,  int dragModeIn,  ItemStack stack,  int slotStackSize)`
- `public boolean canDragIntoSlot(Slot slotIn)`
- `public static int calcRedstone(TileEntity te)`
- `public static int calcRedstoneFromInventory(IInventory inv)`
- `protected void slotChangedCraftingGrid(World p_192389_1_,  EntityPlayer p_192389_2_,  InventoryCrafting p_192389_3_,  InventoryCraftResult p_192389_4_)`

## ContainerBeacon

*class* `net.minecraft.inventory.ContainerBeacon`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public void addListener(IContainerListener listener)`
- `public void updateProgressBar(int id,  int data)`
- `public IInventory getTileEntity()`
- `public void onContainerClosed(EntityPlayer playerIn)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`

## ContainerBrewingStand

*class* `net.minecraft.inventory.ContainerBrewingStand`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public void addListener(IContainerListener listener)`
- `public void detectAndSendChanges()`
- `public void updateProgressBar(int id,  int data)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onContainerClosed`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`

## ContainerChest

*class* `net.minecraft.inventory.ContainerChest`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public void onContainerClosed(EntityPlayer playerIn)`
- `public IInventory getLowerChestInventory()`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## ContainerDispenser

*class* `net.minecraft.inventory.ContainerDispenser`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onContainerClosed`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## ContainerEnchantment

*class* `net.minecraft.inventory.ContainerEnchantment`

### Fields
- `public IInventory tableInventory`
- `public int xpSeed`
- `public int[] enchantLevels`
- `public int[] enchantClue`
- `public int[] worldClue`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `protected void broadcastData(IContainerListener crafting)`
- `public void addListener(IContainerListener listener)`
- `public void detectAndSendChanges()`
- `public void updateProgressBar(int id,  int data)`
- `public void onCraftMatrixChanged(IInventory inventoryIn)`
- `public boolean enchantItem(EntityPlayer playerIn,  int id)`
- `public int getLapisAmount()`
- `public void onContainerClosed(EntityPlayer playerIn)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`

## ContainerFurnace

*class* `net.minecraft.inventory.ContainerFurnace`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public void addListener(IContainerListener listener)`
- `public void detectAndSendChanges()`
- `public void updateProgressBar(int id,  int data)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onContainerClosed`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`

## ContainerHopper

*class* `net.minecraft.inventory.ContainerHopper`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public void onContainerClosed(EntityPlayer playerIn)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## ContainerHorseChest

*class* `net.minecraft.inventory.ContainerHorseChest`

All Implemented Interfaces: IInventory, IWorldNameable

### Inherited methods
- from `net.minecraft.inventory.InventoryBasic`: `addInventoryChangeListener`, `addItem`, `clear`, `closeInventory`, `decrStackSize`, `getDisplayName`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getName`, `getSizeInventory`, `getStackInSlot`, `hasCustomName`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeInventoryChangeListener`, `removeStackFromSlot`, `setCustomName`, `setField`, `setInventorySlotContents`

## ContainerHorseInventory

*class* `net.minecraft.inventory.ContainerHorseInventory`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public void onContainerClosed(EntityPlayer playerIn)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## ContainerMerchant

*class* `net.minecraft.inventory.ContainerMerchant`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public InventoryMerchant getMerchantInventory()`
- `public void onCraftMatrixChanged(IInventory inventoryIn)`
- `public void setCurrentRecipeIndex(int currentRecipeIndex)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public void onContainerClosed(EntityPlayer playerIn)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## ContainerPlayer

*class* `net.minecraft.inventory.ContainerPlayer`

### Fields
- `public InventoryCrafting craftMatrix`
- `public InventoryCraftResult craftResult`
- `public boolean isLocalWorld`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public void onCraftMatrixChanged(IInventory inventoryIn)`
- `public void onContainerClosed(EntityPlayer playerIn)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public boolean canMergeSlot(ItemStack stack,  Slot slotIn)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## ContainerRepair

*class* `net.minecraft.inventory.ContainerRepair`

### Fields
- `public int maximumCost`
- `public int materialCost`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public void onCraftMatrixChanged(IInventory inventoryIn)`
- `public void updateRepairOutput()`
- `public void addListener(IContainerListener listener)`
- `public void updateProgressBar(int id,  int data)`
- `public void onContainerClosed(EntityPlayer playerIn)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public void updateItemName(java.lang.String newName)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`

## ContainerShulkerBox

*class* `net.minecraft.inventory.ContainerShulkerBox`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public void onContainerClosed(EntityPlayer playerIn)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `canMergeSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `onCraftMatrixChanged`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## ContainerWorkbench

*class* `net.minecraft.inventory.ContainerWorkbench`

### Fields
- `public InventoryCrafting craftMatrix`
- `public InventoryCraftResult craftResult`

### Inherited fields
- from `net.minecraft.inventory.Container`: `inventoryItemStacks`, `inventorySlots`, `listeners`, `windowId`

### Methods
- `public void onCraftMatrixChanged(IInventory inventoryIn)`
- `public void onContainerClosed(EntityPlayer playerIn)`
- `public boolean canInteractWith(EntityPlayer playerIn)`
- `public ItemStack transferStackInSlot(EntityPlayer playerIn,  int index)`
- `public boolean canMergeSlot(ItemStack stack,  Slot slotIn)`

### Inherited methods
- from `net.minecraft.inventory.Container`: `addListener`, `addSlotToContainer`, `calcRedstone`, `calcRedstoneFromInventory`, `canAddItemToSlot`, `canDragIntoSlot`, `clearContainer`, `computeStackSize`, `detectAndSendChanges`, `enchantItem`, `extractDragMode`, `getCanCraft`, `getDragEvent`, `getInventory`, `getNextTransactionID`, `getQuickcraftMask`, `getSlot`, `getSlotFromInventory`, `isValidDragMode`, `mergeItemStack`, `putStackInSlot`, `removeListener`, `resetDrag`, `setAll`, `setCanCraft`, `slotChangedCraftingGrid`, `slotClick`, `updateProgressBar`

## EntityEquipmentSlot

*enum* `net.minecraft.inventory.EntityEquipmentSlot`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityEquipmentSlot>

### Fields
- `public static final EntityEquipmentSlot MAINHAND`
- `public static final EntityEquipmentSlot OFFHAND`
- `public static final EntityEquipmentSlot FEET`
- `public static final EntityEquipmentSlot LEGS`
- `public static final EntityEquipmentSlot CHEST`
- `public static final EntityEquipmentSlot HEAD`

### Methods
- `public static EntityEquipmentSlot[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityEquipmentSlot c : EntityEquipmentSlot.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityEquipmentSlot valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public EntityEquipmentSlot.Type getSlotType()`
- `public int getIndex()`
- `public int getSlotIndex()`
- `public java.lang.String getName()`
- `public static EntityEquipmentSlot fromString(java.lang.String targetName)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EntityEquipmentSlot.Type

*enum* `net.minecraft.inventory.EntityEquipmentSlot.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<EntityEquipmentSlot.Type>

Enclosing class: EntityEquipmentSlot

### Fields
- `public static final EntityEquipmentSlot.Type HAND`
- `public static final EntityEquipmentSlot.Type ARMOR`

### Methods
- `public static EntityEquipmentSlot.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (EntityEquipmentSlot.Type c : EntityEquipmentSlot.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static EntityEquipmentSlot.Type valueOf(java.lang.String name)`
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

## IContainerListener

*interface* `net.minecraft.inventory.IContainerListener`

### Methods
- `void sendAllContents(Container containerToSend,  NonNullList<ItemStack> itemsList)`
- `void sendSlotContents(Container containerToSend,  int slotInd,  ItemStack stack)`
- `void sendWindowProperty(Container containerIn,  int varToUpdate,  int newValue)`
- `void sendAllWindowProperties(Container containerIn,  IInventory inventory)`

## IInventory

*interface* `net.minecraft.inventory.IInventory`

All Superinterfaces: IWorldNameable

### Methods
- `int getSizeInventory()`
- `boolean isEmpty()`
- `ItemStack getStackInSlot(int index)`
- `ItemStack decrStackSize(int index,  int count)`
- `ItemStack removeStackFromSlot(int index)`
- `void setInventorySlotContents(int index,  ItemStack stack)`
- `int getInventoryStackLimit()`
- `void markDirty()`
- `boolean isUsableByPlayer(EntityPlayer player)`
- `void openInventory(EntityPlayer player)`
- `void closeInventory(EntityPlayer player)`
- `boolean isItemValidForSlot(int index,  ItemStack stack)`
- `int getField(int id)`
- `void setField(int id,  int value)`
- `int getFieldCount()`
- `void clear()`

### Inherited methods
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## IInventoryChangedListener

*interface* `net.minecraft.inventory.IInventoryChangedListener`

### Methods
- `void onInventoryChanged(IInventory invBasic)`

## InventoryBasic

*class* `net.minecraft.inventory.InventoryBasic`

All Implemented Interfaces: IInventory, IWorldNameable

### Methods
- `public void addInventoryChangeListener(IInventoryChangedListener listener)`
- `public void removeInventoryChangeListener(IInventoryChangedListener listener)`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack addItem(ItemStack stack)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public void setCustomName(java.lang.String inventoryTitleIn)`
- `public ITextComponent getDisplayName()`
- `public int getInventoryStackLimit()`
- `public void markDirty()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`

## InventoryCrafting

*class* `net.minecraft.inventory.InventoryCrafting`

All Implemented Interfaces: IInventory, IWorldNameable

### Methods
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack getStackInRowAndColumn(int row,  int column)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public ITextComponent getDisplayName()`
- `public ItemStack removeStackFromSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public int getInventoryStackLimit()`
- `public void markDirty()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`
- `public int getHeight()`
- `public int getWidth()`
- `public void fillStackedContents(RecipeItemHelper helper)`

## InventoryCraftResult

*class* `net.minecraft.inventory.InventoryCraftResult`

All Implemented Interfaces: IInventory, IWorldNameable

### Methods
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public ItemStack getStackInSlot(int index)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public ITextComponent getDisplayName()`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public int getInventoryStackLimit()`
- `public void markDirty()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`
- `public void setRecipeUsed(IRecipe p_193056_1_)`
- `public IRecipe getRecipeUsed()`

## InventoryEnderChest

*class* `net.minecraft.inventory.InventoryEnderChest`

All Implemented Interfaces: IInventory, IWorldNameable

### Methods
- `public void setChestTileEntity(TileEntityEnderChest chestTileEntity)`
- `public void loadInventoryFromNBT(NBTTagList p_70486_1_)`
- `public NBTTagList saveInventoryToNBT()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`

### Inherited methods
- from `net.minecraft.inventory.InventoryBasic`: `addInventoryChangeListener`, `addItem`, `clear`, `decrStackSize`, `getDisplayName`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getName`, `getSizeInventory`, `getStackInSlot`, `hasCustomName`, `isEmpty`, `isItemValidForSlot`, `markDirty`, `removeInventoryChangeListener`, `removeStackFromSlot`, `setCustomName`, `setField`, `setInventorySlotContents`

## InventoryHelper

*class* `net.minecraft.inventory.InventoryHelper`

### Methods
- `public static void dropInventoryItems(World worldIn,  BlockPos pos,  IInventory inventory)`
- `public static void dropInventoryItems(World worldIn,  Entity entityAt,  IInventory inventory)`
- `public static void spawnItemStack(World worldIn,  double x,  double y,  double z,  ItemStack stack)`

## InventoryLargeChest

*class* `net.minecraft.inventory.InventoryLargeChest`

All Implemented Interfaces: IInventory, IInteractionObject, ILockableContainer, IWorldNameable

### Methods
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public boolean isPartOfLargeChest(IInventory inventoryIn)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public ITextComponent getDisplayName()`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public int getInventoryStackLimit()`
- `public void markDirty()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public boolean isLocked()`
- `public void setLockCode(LockCode code)`
- `public LockCode getLockCode()`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `public void clear()`

## InventoryMerchant

*class* `net.minecraft.inventory.InventoryMerchant`

All Implemented Interfaces: IInventory, IWorldNameable

### Methods
- `public int getSizeInventory()`
- `public boolean isEmpty()`
- `public ItemStack getStackInSlot(int index)`
- `public ItemStack decrStackSize(int index,  int count)`
- `public ItemStack removeStackFromSlot(int index)`
- `public void setInventorySlotContents(int index,  ItemStack stack)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public ITextComponent getDisplayName()`
- `public int getInventoryStackLimit()`
- `public boolean isUsableByPlayer(EntityPlayer player)`
- `public void openInventory(EntityPlayer player)`
- `public void closeInventory(EntityPlayer player)`
- `public boolean isItemValidForSlot(int index,  ItemStack stack)`
- `public void markDirty()`
- `public void resetRecipeAndSlots()`
- `public MerchantRecipe getCurrentRecipe()`
- `public void setCurrentRecipeIndex(int currentRecipeIndexIn)`
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public void clear()`

## ISidedInventory

*interface* `net.minecraft.inventory.ISidedInventory`

All Superinterfaces: IInventory, IWorldNameable

### Methods
- `int[] getSlotsForFace(EnumFacing side)`
- `boolean canInsertItem(int index,  ItemStack itemStackIn,  EnumFacing direction)`
- `boolean canExtractItem(int index,  ItemStack stack,  EnumFacing direction)`

### Inherited methods
- from `net.minecraft.inventory.IInventory`: `clear`, `closeInventory`, `decrStackSize`, `getField`, `getFieldCount`, `getInventoryStackLimit`, `getSizeInventory`, `getStackInSlot`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setField`, `setInventorySlotContents`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## ItemStackHelper

*class* `net.minecraft.inventory.ItemStackHelper`

### Methods
- `public static ItemStack getAndSplit(java.util.List<ItemStack> stacks,  int index,  int amount)`
- `public static ItemStack getAndRemove(java.util.List<ItemStack> stacks,  int index)`
- `public static NBTTagCompound saveAllItems(NBTTagCompound tag,  NonNullList<ItemStack> list)`
- `public static NBTTagCompound saveAllItems(NBTTagCompound tag,  NonNullList<ItemStack> list,  boolean saveEmpty)`
- `public static void loadAllItems(NBTTagCompound tag,  NonNullList<ItemStack> list)`

## Slot

*class* `net.minecraft.inventory.Slot`

### Fields
- `public final IInventory inventory`
- `public int slotNumber`
- `public int xPos`
- `public int yPos`
- `protected java.lang.String backgroundName`
- `protected ResourceLocation backgroundLocation`
- `protected java.lang.Object backgroundMap`

### Methods
- `public void onSlotChange(ItemStack p_75220_1_,  ItemStack p_75220_2_)`
- `protected void onCrafting(ItemStack stack,  int amount)`
- `protected void onSwapCraft(int p_190900_1_)`
- `protected void onCrafting(ItemStack stack)`
- `public ItemStack onTake(EntityPlayer thePlayer,  ItemStack stack)`
- `public boolean isItemValid(ItemStack stack)`
- `public ItemStack getStack()`
- `public boolean getHasStack()`
- `public void putStack(ItemStack stack)`
- `public void onSlotChanged()`
- `public int getSlotStackLimit()`
- `public int getItemStackLimit(ItemStack stack)`
- `public java.lang.String getSlotTexture()`
- `public ItemStack decrStackSize(int amount)`
- `public boolean isHere(IInventory inv,  int slotIn)`
- `public boolean canTakeStack(EntityPlayer playerIn)`
- `public boolean isEnabled()`
- `public ResourceLocation getBackgroundLocation()`
  Gets the path of the texture file to use for the background image of this slot when drawing the GUI.
  - returns: The resource location for the background image
- `public void setBackgroundLocation(ResourceLocation texture)`
  Sets the texture file to use for the background image of the slot when it's empty.
  - param: texture - the resourcelocation for the texture
- `public void setBackgroundName(java.lang.String name)`
  Sets which icon index to use as the background image of the slot when it's empty.
  - param: name - The icon to use, null for none
- `public TextureAtlasSprite getBackgroundSprite()`
- `protected TextureMap getBackgroundMap()`
- `public int getSlotIndex()`
  Retrieves the index in the inventory for this slot, this value should typically not
   be used, but can be useful for some occasions.
  - returns: Index in associated inventory for this slot.
- `public boolean isSameInventory(Slot other)`
  Checks if the other slot is in the same inventory, by comparing the inventory reference.
  - param: other -
  - returns: true if the other slot is in the same inventory

## SlotCrafting

*class* `net.minecraft.inventory.SlotCrafting`

### Inherited fields
- from `net.minecraft.inventory.Slot`: `backgroundLocation`, `backgroundMap`, `backgroundName`, `inventory`, `slotNumber`, `xPos`, `yPos`

### Methods
- `public boolean isItemValid(ItemStack stack)`
- `public ItemStack decrStackSize(int amount)`
- `protected void onCrafting(ItemStack stack,  int amount)`
- `protected void onSwapCraft(int p_190900_1_)`
- `protected void onCrafting(ItemStack stack)`
- `public ItemStack onTake(EntityPlayer thePlayer,  ItemStack stack)`

### Inherited methods
- from `net.minecraft.inventory.Slot`: `canTakeStack`, `getBackgroundLocation`, `getBackgroundMap`, `getBackgroundSprite`, `getHasStack`, `getItemStackLimit`, `getSlotIndex`, `getSlotStackLimit`, `getSlotTexture`, `getStack`, `isEnabled`, `isHere`, `isSameInventory`, `onSlotChange`, `onSlotChanged`, `putStack`, `setBackgroundLocation`, `setBackgroundName`

## SlotFurnaceFuel

*class* `net.minecraft.inventory.SlotFurnaceFuel`

### Inherited fields
- from `net.minecraft.inventory.Slot`: `backgroundLocation`, `backgroundMap`, `backgroundName`, `inventory`, `slotNumber`, `xPos`, `yPos`

### Methods
- `public boolean isItemValid(ItemStack stack)`
- `public int getItemStackLimit(ItemStack stack)`
- `public static boolean isBucket(ItemStack stack)`

### Inherited methods
- from `net.minecraft.inventory.Slot`: `canTakeStack`, `decrStackSize`, `getBackgroundLocation`, `getBackgroundMap`, `getBackgroundSprite`, `getHasStack`, `getSlotIndex`, `getSlotStackLimit`, `getSlotTexture`, `getStack`, `isEnabled`, `isHere`, `isSameInventory`, `onCrafting`, `onCrafting`, `onSlotChange`, `onSlotChanged`, `onSwapCraft`, `onTake`, `putStack`, `setBackgroundLocation`, `setBackgroundName`

## SlotFurnaceOutput

*class* `net.minecraft.inventory.SlotFurnaceOutput`

### Inherited fields
- from `net.minecraft.inventory.Slot`: `backgroundLocation`, `backgroundMap`, `backgroundName`, `inventory`, `slotNumber`, `xPos`, `yPos`

### Methods
- `public boolean isItemValid(ItemStack stack)`
- `public ItemStack decrStackSize(int amount)`
- `public ItemStack onTake(EntityPlayer thePlayer,  ItemStack stack)`
- `protected void onCrafting(ItemStack stack,  int amount)`
- `protected void onCrafting(ItemStack stack)`

### Inherited methods
- from `net.minecraft.inventory.Slot`: `canTakeStack`, `getBackgroundLocation`, `getBackgroundMap`, `getBackgroundSprite`, `getHasStack`, `getItemStackLimit`, `getSlotIndex`, `getSlotStackLimit`, `getSlotTexture`, `getStack`, `isEnabled`, `isHere`, `isSameInventory`, `onSlotChange`, `onSlotChanged`, `onSwapCraft`, `putStack`, `setBackgroundLocation`, `setBackgroundName`

## SlotMerchantResult

*class* `net.minecraft.inventory.SlotMerchantResult`

### Inherited fields
- from `net.minecraft.inventory.Slot`: `backgroundLocation`, `backgroundMap`, `backgroundName`, `inventory`, `slotNumber`, `xPos`, `yPos`

### Methods
- `public boolean isItemValid(ItemStack stack)`
- `public ItemStack decrStackSize(int amount)`
- `protected void onCrafting(ItemStack stack,  int amount)`
- `protected void onCrafting(ItemStack stack)`
- `public ItemStack onTake(EntityPlayer thePlayer,  ItemStack stack)`

### Inherited methods
- from `net.minecraft.inventory.Slot`: `canTakeStack`, `getBackgroundLocation`, `getBackgroundMap`, `getBackgroundSprite`, `getHasStack`, `getItemStackLimit`, `getSlotIndex`, `getSlotStackLimit`, `getSlotTexture`, `getStack`, `isEnabled`, `isHere`, `isSameInventory`, `onSlotChange`, `onSlotChanged`, `onSwapCraft`, `putStack`, `setBackgroundLocation`, `setBackgroundName`

## SlotShulkerBox

*class* `net.minecraft.inventory.SlotShulkerBox`

### Inherited fields
- from `net.minecraft.inventory.Slot`: `backgroundLocation`, `backgroundMap`, `backgroundName`, `inventory`, `slotNumber`, `xPos`, `yPos`

### Methods
- `public boolean isItemValid(ItemStack stack)`

### Inherited methods
- from `net.minecraft.inventory.Slot`: `canTakeStack`, `decrStackSize`, `getBackgroundLocation`, `getBackgroundMap`, `getBackgroundSprite`, `getHasStack`, `getItemStackLimit`, `getSlotIndex`, `getSlotStackLimit`, `getSlotTexture`, `getStack`, `isEnabled`, `isHere`, `isSameInventory`, `onCrafting`, `onCrafting`, `onSlotChange`, `onSlotChanged`, `onSwapCraft`, `onTake`, `putStack`, `setBackgroundLocation`, `setBackgroundName`
