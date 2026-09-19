# net.minecraft.client.player.inventory

- [ContainerLocalMenu](#containerlocalmenu)
- [LocalBlockIntercommunication](#localblockintercommunication)
## ContainerLocalMenu

*class* `net.minecraft.client.player.inventory.ContainerLocalMenu`

All Implemented Interfaces: IInventory, IInteractionObject, ILockableContainer, IWorldNameable

### Methods
- `public int getField(int id)`
- `public void setField(int id,  int value)`
- `public int getFieldCount()`
- `public boolean isLocked()`
- `public void setLockCode(LockCode code)`
- `public LockCode getLockCode()`
- `public java.lang.String getGuiID()`
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`

### Inherited methods
- from `net.minecraft.inventory.InventoryBasic`: `addInventoryChangeListener`, `addItem`, `clear`, `closeInventory`, `decrStackSize`, `getDisplayName`, `getInventoryStackLimit`, `getName`, `getSizeInventory`, `getStackInSlot`, `hasCustomName`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeInventoryChangeListener`, `removeStackFromSlot`, `setCustomName`, `setInventorySlotContents`
- from `net.minecraft.inventory.IInventory`: `clear`, `closeInventory`, `decrStackSize`, `getInventoryStackLimit`, `getSizeInventory`, `getStackInSlot`, `isEmpty`, `isItemValidForSlot`, `isUsableByPlayer`, `markDirty`, `openInventory`, `removeStackFromSlot`, `setInventorySlotContents`
- from `net.minecraft.world.IWorldNameable`: `getDisplayName`, `getName`, `hasCustomName`

## LocalBlockIntercommunication

*class* `net.minecraft.client.player.inventory.LocalBlockIntercommunication`

All Implemented Interfaces: IInteractionObject, IWorldNameable

### Methods
- `public Container createContainer(InventoryPlayer playerInventory,  EntityPlayer playerIn)`
- `public java.lang.String getName()`
- `public boolean hasCustomName()`
- `public java.lang.String getGuiID()`
- `public ITextComponent getDisplayName()`
