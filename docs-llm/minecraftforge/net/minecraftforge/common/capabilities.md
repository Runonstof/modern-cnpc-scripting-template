# net.minecraftforge.common.capabilities

- [AutoRegisterCapability](#autoregistercapability)
- [Capability](#capability)
- [CapabilityDispatcher](#capabilitydispatcher)
- [CapabilityProvider.AsField>](#capabilityprovider.asfield)
- [CapabilityProvider>](#capabilityprovider)
- [CapabilityToken](#capabilitytoken)
- [Class CapabilityManager](#class-capabilitymanager)
- [ForgeCapabilities](#forgecapabilities)
- [ICapabilityProvider](#icapabilityprovider)
- [ICapabilityProviderImpl>](#icapabilityproviderimpl)
- [ICapabilitySerializable](#icapabilityserializable)
- [RegisterCapabilitiesEvent](#registercapabilitiesevent)
## AutoRegisterCapability

*annotation interface* `net.minecraftforge.common.capabilities.AutoRegisterCapability`

Marks a class to be automatically registered in Forge's CapabilityManager

## Capability

*class* `net.minecraftforge.common.capabilities.Capability`

This is the core holder object Capabilities.
 Each capability will have ONE instance of this class,
 and it will the the one passed into the ICapabilityProvider functions.

 The CapabilityManager is in charge of creating this class.

### Fields
- `private final String name`
- `List<Consumer<Capability<T>>> listeners`

### Methods
- `public String getName()`
  - returns: The unique name of this capability, typically this is
 the fully qualified class name for the target interface.
- `@NotNull public <R> @NotNull LazyOptional<R> orEmpty(Capability<R> toCheck,  LazyOptional<T> inst)`
- `public boolean isRegistered()`
  - returns: true if something has registered this capability to the Manager.
 This is a marker that the class for this capability exists, and can be used.
- `public Capability<T> addListener(Consumer<Capability<T>> listener)`
  Adds a listener to be called when someone registers this capability.
   May be called instantly if this is already registered.
  - param: listener - Function to fire when capability is registered.
  - returns: self, in case people want to use builder pattern.
- `void onRegister()`

## CapabilityDispatcher

*class* `net.minecraftforge.common.capabilities.CapabilityDispatcher`

A high-speed implementation of a capability delegator.
 This is used to wrap the results of the AttachCapabilitiesEvent.
 It is HIGHLY recommended that you DO NOT use this approach unless
 you MUST delegate to multiple providers instead just implement y
 our handlers using normal if statements.

 Internally the handlers are baked into arrays for fast iteration.
 The ResourceLocations will be used for the NBT Key when serializing.

### Fields
- `private ICapabilityProvider[] caps`
- `private INBTSerializable<Tag>[] writers`
- `private String[] names`
- `private final List<Runnable> listeners`

### Methods
- `public <T> LazyOptional<T> getCapability(Capability<T> cap,  @Nullable  @Nullable Direction side)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `public CompoundTag serializeNBT()`
- `public void deserializeNBT(CompoundTag nbt)`
- `public boolean areCompatible(@Nullable  @Nullable CapabilityDispatcher other)`
- `public void invalidate()`

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## CapabilityProvider.AsField>

*class* `net.minecraftforge.common.capabilities.CapabilityProvider.AsField>`

Special implementation for cases which have a superclass and can't extend CapabilityProvider directly.
 See LevelChunk

Enclosing class: CapabilityProvider<B extends ICapabilityProviderImpl<B>>

### Fields
- `private final B extends ICapabilityProviderImpl<B> owner`

### Inherited fields
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `SUPPORTS_LAZY_CAPABILITIES`

### Methods
- `public void initInternal()`
- `@Nullable public @Nullable CompoundTag serializeInternal()`
- `public void deserializeInternal(CompoundTag tag)`
- `@NotNull B getProvider()`

### Inherited methods
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## CapabilityProvider>

*class* `net.minecraftforge.common.capabilities.CapabilityProvider>`

### Fields
- `@VisibleForTesting static boolean SUPPORTS_LAZY_CAPABILITIES`
- `@NotNull private final @NotNull Class<B extends ICapabilityProviderImpl<B>> baseClass`
- `@Nullable private @Nullable CapabilityDispatcher capabilities`
- `private boolean valid`
- `private boolean isLazy`
- `private Supplier<ICapabilityProvider> lazyParentSupplier`
- `private CompoundTag lazyData`
- `private boolean initialized`

### Methods
- `protected final void gatherCapabilities()`
- `protected final void gatherCapabilities(@Nullable  @Nullable ICapabilityProvider parent)`
- `protected final void gatherCapabilities(@Nullable  @Nullable Supplier<ICapabilityProvider> parent)`
- `private void doGatherCapabilities(@Nullable  @Nullable ICapabilityProvider parent)`
- `@NotNull B getProvider()`
- `@Nullable protected final @Nullable CapabilityDispatcher getCapabilities()`
- `public final boolean areCapsCompatible(CapabilityProvider<B> other)`
- `public final boolean areCapsCompatible(@Nullable  @Nullable CapabilityDispatcher other)`
- `@Nullable protected final @Nullable CompoundTag serializeCaps()`
- `protected final void deserializeCaps(CompoundTag tag)`
- `public void invalidateCaps()`
- `public void reviveCaps()`
- `@NotNull public <T> @NotNull LazyOptional<T> getCapability(@NotNull  @NotNull Capability<T> cap,  @Nullable  @Nullable Direction side)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`

## CapabilityToken

*class* `net.minecraftforge.common.capabilities.CapabilityToken`

Inspired by TypeToken, use a subclass to capture
 generic types. Then uses a transformer
 to convert that generic into a string returned by getType()
 This allows us to know the generic type, without having a hard reference to the
 class.

 Example usage:

 public static Capability<IDataHolder> DATA_HOLDER_CAPABILITY
 = CapabilityManager.get(new CapabilityToken<>(){});

### Methods
- `protected final String getType()`
- `public String toString()`

## Class CapabilityManager

*enum* `net.minecraftforge.common.capabilities.Class CapabilityManager`

### Fields
- `static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.objectweb.asm.Type AUTO_REGISTER`
- `private final IdentityHashMap<String,Capability<?>> providers`

### Methods
- `public static CapabilityManager[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CapabilityManager valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static <T> Capability<T> get(CapabilityToken<T> type)`
- `<T> Capability<T> get(String realName,  boolean registering)`
- `public void injectCapabilities(List<net.minecraftforge.forgespi.language.ModFileScanData> data)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ForgeCapabilities

*class* `net.minecraftforge.common.capabilities.ForgeCapabilities`

### Fields
- `public static final Capability<IEnergyStorage> ENERGY`
- `public static final Capability<IFluidHandler> FLUID_HANDLER`
- `public static final Capability<IFluidHandlerItem> FLUID_HANDLER_ITEM`
- `public static final Capability<IItemHandler> ITEM_HANDLER`

## ICapabilityProvider

*interface* `net.minecraftforge.common.capabilities.ICapabilityProvider`

### Methods
- `@NotNull <T> @NotNull LazyOptional<T> getCapability(@NotNull  @NotNull Capability<T> cap,  @Nullable  @Nullable Direction side)`
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `@NotNull default <T> @NotNull LazyOptional<T> getCapability(@NotNull  @NotNull Capability<T> cap)`

## ICapabilityProviderImpl>

*interface* `net.minecraftforge.common.capabilities.ICapabilityProviderImpl>`

All Superinterfaces: ICapabilityProvider

### Methods
- `boolean areCapsCompatible(CapabilityProvider<B> other)`
- `boolean areCapsCompatible(@Nullable  @Nullable CapabilityDispatcher other)`
- `void invalidateCaps()`
- `void reviveCaps()`

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`

## ICapabilitySerializable

*interface* `net.minecraftforge.common.capabilities.ICapabilitySerializable`

All Superinterfaces: ICapabilityProvider, INBTSerializable<T>

### Inherited methods
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.util.INBTSerializable`: `deserializeNBT`, `serializeNBT`

## RegisterCapabilitiesEvent

*class* `net.minecraftforge.common.capabilities.RegisterCapabilitiesEvent`

This event fires when it is time to register your capabilities.

### Methods
- `public <T> void register(Class<T> type)`
  Registers a capability to be consumed by others.
   APIs who define the capability should call this.
   To retrieve the Capability instance, use the @CapabilityInject annotation.
  - param: type - The type to be registered
