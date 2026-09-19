# net.minecraftforge.energy

- [CapabilityEnergy](#capabilityenergy)
- [EnergyStorage](#energystorage)
- [IEnergyStorage](#ienergystorage)
## CapabilityEnergy

*class* `net.minecraftforge.energy.CapabilityEnergy`

### Fields
- `public static Capability<IEnergyStorage> ENERGY`

### Methods
- `public static void register()`

## EnergyStorage

*class* `net.minecraftforge.energy.EnergyStorage`

Reference implementation of IEnergyStorage. Use/extend this or implement your own.

 Derived from the Redstone Flux power system designed by King Lemming and originally utilized in Thermal Expansion and related mods.
 Created with consent and permission of King Lemming and Team CoFH. Released with permission under LGPL 2.1 when bundled with Forge.

All Implemented Interfaces: IEnergyStorage

### Fields
- `protected int energy`
- `protected int capacity`
- `protected int maxReceive`
- `protected int maxExtract`

### Methods
- `public int receiveEnergy(int maxReceive,  boolean simulate)`
  Description copied from interface: IEnergyStorage
  Adds energy to the storage. Returns quantity of energy that was accepted.
  - param: maxReceive - Maximum amount of energy to be inserted.
  - param: simulate - If TRUE, the insertion will only be simulated.
  - returns: Amount of energy that was (or would have been, if simulated) accepted by the storage.
- `public int extractEnergy(int maxExtract,  boolean simulate)`
  Description copied from interface: IEnergyStorage
  Removes energy from the storage. Returns quantity of energy that was removed.
  - param: maxExtract - Maximum amount of energy to be extracted.
  - param: simulate - If TRUE, the extraction will only be simulated.
  - returns: Amount of energy that was (or would have been, if simulated) extracted from the storage.
- `public int getEnergyStored()`
  Description copied from interface: IEnergyStorage
  Returns the amount of energy currently stored.
- `public int getMaxEnergyStored()`
  Description copied from interface: IEnergyStorage
  Returns the maximum amount of energy that can be stored.
- `public boolean canExtract()`
  Description copied from interface: IEnergyStorage
  Returns if this storage can have energy extracted.
   If this is false, then any calls to extractEnergy will return 0.
- `public boolean canReceive()`
  Description copied from interface: IEnergyStorage
  Used to determine if this storage can receive energy.
   If this is false, then any calls to receiveEnergy will return 0.

## IEnergyStorage

*interface* `net.minecraftforge.energy.IEnergyStorage`

An energy storage is the unit of interaction with Energy inventories.

 A reference implementation can be found at EnergyStorage.

 Derived from the Redstone Flux power system designed by King Lemming and originally utilized in Thermal Expansion and related mods.
 Created with consent and permission of King Lemming and Team CoFH. Released with permission under LGPL 2.1 when bundled with Forge.

### Methods
- `int receiveEnergy(int maxReceive,  boolean simulate)`
  Adds energy to the storage. Returns quantity of energy that was accepted.
  - param: maxReceive - Maximum amount of energy to be inserted.
  - param: simulate - If TRUE, the insertion will only be simulated.
  - returns: Amount of energy that was (or would have been, if simulated) accepted by the storage.
- `int extractEnergy(int maxExtract,  boolean simulate)`
  Removes energy from the storage. Returns quantity of energy that was removed.
  - param: maxExtract - Maximum amount of energy to be extracted.
  - param: simulate - If TRUE, the extraction will only be simulated.
  - returns: Amount of energy that was (or would have been, if simulated) extracted from the storage.
- `int getEnergyStored()`
  Returns the amount of energy currently stored.
- `int getMaxEnergyStored()`
  Returns the maximum amount of energy that can be stored.
- `boolean canExtract()`
  Returns if this storage can have energy extracted.
   If this is false, then any calls to extractEnergy will return 0.
- `boolean canReceive()`
  Used to determine if this storage can receive energy.
   If this is false, then any calls to receiveEnergy will return 0.
