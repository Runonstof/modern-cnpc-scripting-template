# net.minecraft.util.datafix.walkers

- [BlockEntityTag](#blockentitytag)
- [EntityTag](#entitytag)
- [Filtered](#filtered)
- [ItemStackData](#itemstackdata)
- [ItemStackDataLists](#itemstackdatalists)
## BlockEntityTag

*class* `net.minecraft.util.datafix.walkers.BlockEntityTag`

All Implemented Interfaces: IDataWalker

### Methods
- `public NBTTagCompound process(IDataFixer fixer,  NBTTagCompound compound,  int versionIn)`

## EntityTag

*class* `net.minecraft.util.datafix.walkers.EntityTag`

All Implemented Interfaces: IDataWalker

### Methods
- `public NBTTagCompound process(IDataFixer fixer,  NBTTagCompound compound,  int versionIn)`

## Filtered

*class* `net.minecraft.util.datafix.walkers.Filtered`

All Implemented Interfaces: IDataWalker

### Methods
- `public NBTTagCompound process(IDataFixer fixer,  NBTTagCompound compound,  int versionIn)`

## ItemStackData

*class* `net.minecraft.util.datafix.walkers.ItemStackData`

All Implemented Interfaces: IDataWalker

### Inherited methods
- from `net.minecraft.util.datafix.walkers.Filtered`: `process`

## ItemStackDataLists

*class* `net.minecraft.util.datafix.walkers.ItemStackDataLists`

All Implemented Interfaces: IDataWalker

### Inherited methods
- from `net.minecraft.util.datafix.walkers.Filtered`: `process`
