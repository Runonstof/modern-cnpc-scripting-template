# net.minecraftforge.common.capabilities

- [Capability](#capability)
- [Capability.IStorage](#capability.istorage)
- [CapabilityDispatcher](#capabilitydispatcher)
- [CapabilityInject](#capabilityinject)
- [CapabilityManager](#capabilitymanager)
- [ICapabilityProvider](#icapabilityprovider)
- [ICapabilitySerializable](#icapabilityserializable)
## Capability

*class* `net.minecraftforge.common.capabilities.Capability`

This is the core holder object Capabilities.
 Each capability will have ONE instance of this class,
 and it will the the one passed into the ICapabilityProvider functions.

 The CapabilityManager is in charge of creating this class.

### Methods
- `public java.lang.String getName()`
  - returns: The unique name of this capability, typically this is
 the fully qualified class name for the target interface.
- `public Capability.IStorage<T> getStorage()`
  - returns: An instance of the default storage handler. You can safely use this store your default implementation in NBT.
- `public void readNBT(T instance,  EnumFacing side,  NBTBase nbt)`
  Quick access to the IStorage's readNBT.
   See Capability.IStorage.readNBT(Capability, Object, EnumFacing, NBTBase) for documentation.
- `public NBTBase writeNBT(T instance,  EnumFacing side)`
  Quick access to the IStorage's writeNBT.
   See Capability.IStorage.writeNBT(Capability, Object, EnumFacing) for documentation.
- `public T getDefaultInstance()`
  A NEW instance of the default implementation.
  
   If it important to note that if you want to use the default storage
   you may be required to use this exact implementation.
   Refer to the owning API of the Capability in question.
  - returns: A NEW instance of the default implementation.
- `public <R> R cast(T instance)`
  Use this inside ICapabilityProvider.getCapability to avoid unchecked cast warnings.
   Example: return SOME_CAPABILITY.cast(instance);
   Use with caution;

## Capability.IStorage

*interface* `net.minecraftforge.common.capabilities.Capability.IStorage`

Enclosing class: Capability<T>

### Methods
- `NBTBase writeNBT(Capability<T> capability,  T instance,  EnumFacing side)`
  Serialize the capability instance to a NBTTag.
   This allows for a central implementation of saving the data.
  
   It is important to note that it is up to the API defining
   the capability what requirements the 'instance' value must have.
  
   Due to the possibility of manipulating internal data, some
   implementations MAY require that the 'instance' be an instance
   of the 'default' implementation.
  
   Review the API docs for more info.
  - param: capability - The Capability being stored.
  - param: instance - An instance of that capabilities interface.
  - param: side - The side of the object the instance is associated with.
  - returns: a NBT holding the data. Null if no data needs to be stored.
- `void readNBT(Capability<T> capability,  T instance,  EnumFacing side,  NBTBase nbt)`
  Read the capability instance from a NBT tag.
  
   This allows for a central implementation of saving the data.
  
   It is important to note that it is up to the API defining
   the capability what requirements the 'instance' value must have.
  
   Due to the possibility of manipulating internal data, some
   implementations MAY require that the 'instance' be an instance
   of the 'default' implementation.
  
   Review the API docs for more info. *
  - param: capability - The Capability being stored.
  - param: instance - An instance of that capabilities interface.
  - param: side - The side of the object the instance is associated with.
  - param: nbt - A NBT holding the data. Must not be null, as doesn't make sense to call this function with nothing to read...

## CapabilityDispatcher

*class* `net.minecraftforge.common.capabilities.CapabilityDispatcher`

A high-speed implementation of a capability delegator.
 This is used to wrap the results of the AttachCapabilitiesEvent.
 It is HIGHLY recommended that you DO NOT use this approach unless
 you MUST delegate to multiple providers instead just implement y
 our handlers using normal if statements.

 Internally the handlers are baked into arrays for fast iteration.
 The ResourceLocations will be used for the NBT Key when serializing.

All Implemented Interfaces: ICapabilityProvider, INBTSerializable<NBTTagCompound>

### Methods
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
- `public NBTTagCompound serializeNBT()`
- `public void deserializeNBT(NBTTagCompound nbt)`
- `public boolean areCompatible(CapabilityDispatcher other)`

## CapabilityInject

*annotation* `net.minecraftforge.common.capabilities.CapabilityInject`

When placed on a FIELD, the field will be set to an
 instance of Capability once that capability is registered.
 That field must be static and be able to hold a instance
 of 'Capability'

 Example:

## CapabilityManager

*enum* `net.minecraftforge.common.capabilities.CapabilityManager`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CapabilityManager>

### Fields
- `public static final CapabilityManager INSTANCE`

### Methods
- `public static CapabilityManager[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CapabilityManager c : CapabilityManager.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CapabilityManager valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `@Deprecated public <T> void register(java.lang.Class<T> type,  Capability.IStorage<T> storage,  java.lang.Class<? extends T> implementation)` (deprecated)
  Deprecated. Use the overload that takes a factory instead of a class.
   You can easily do this by passing a constructor reference
   (MyImpl::new instead of MyImpl.class). TODO remove in 1.13.
  Registers a capability to be consumed by others.
   APIs who define the capability should call this.
   To retrieve the Capability instance, use the @CapabilityInject annotation.
  - param: type - The Interface to be registered
  - param: storage - A default implementation of the storage handler.
  - param: implementation - A default implementation of the interface.
- `public <T> void register(java.lang.Class<T> type,  Capability.IStorage<T> storage,  java.util.concurrent.Callable<? extends T> factory)`
  Registers a capability to be consumed by others.
   APIs who define the capability should call this.
   To retrieve the Capability instance, use the @CapabilityInject annotation.
  - param: type - The Interface to be registered
  - param: storage - A default implementation of the storage handler.
  - param: factory - A Factory that will produce new instances of the default implementation.
- `public void injectCapabilities(ASMDataTable data)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ICapabilityProvider

*interface* `net.minecraftforge.common.capabilities.ICapabilityProvider`

### Methods
- `boolean hasCapability(Capability<?> capability,  EnumFacing facing)`
  Determines if this object has support for the capability in question on the specific side.
   The return value of this MIGHT change during runtime if this object gains or loses support
   for a capability. It is not required to call this function before calling
   getCapability(Capability, EnumFacing).
  
   Basically, this method functions analogously to Map.containsKey(Object).
  
   Example:
   A Pipe getting a cover placed on one side causing it lose the Inventory attachment function for that side.
  
   This is a light weight version of getCapability, intended for metadata uses.
  - param: capability - The capability to check
  - param: facing - The Side to check from:
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: True if this object supports the capability. If true, then getCapability(Capability, EnumFacing)
 must not return null.
- `<T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when hasCapability(Capability, EnumFacing)
 would return true.

## ICapabilitySerializable

*interface* `net.minecraftforge.common.capabilities.ICapabilitySerializable`

All Superinterfaces: ICapabilityProvider, INBTSerializable<T>

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `hasCapability`
- from `net.minecraftforge.common.util.INBTSerializable`: `deserializeNBT`, `serializeNBT`
