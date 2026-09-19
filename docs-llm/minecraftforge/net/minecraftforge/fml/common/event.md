# net.minecraftforge.fml.common.event

- [FMLConstructionEvent](#fmlconstructionevent)
- [FMLEvent](#fmlevent)
- [FMLFingerprintViolationEvent](#fmlfingerprintviolationevent)
- [FMLInitializationEvent](#fmlinitializationevent)
- [FMLInterModComms](#fmlintermodcomms)
- [FMLInterModComms.IMCEvent](#fmlintermodcomms.imcevent)
- [FMLInterModComms.IMCMessage](#fmlintermodcomms.imcmessage)
- [FMLLoadCompleteEvent](#fmlloadcompleteevent)
- [FMLLoadEvent](#fmlloadevent)
- [FMLModDisabledEvent](#fmlmoddisabledevent)
- [FMLModIdMappingEvent](#fmlmodidmappingevent)
- [FMLModIdMappingEvent.ModRemapping](#fmlmodidmappingevent.modremapping)
- [FMLPostInitializationEvent](#fmlpostinitializationevent)
- [FMLPreInitializationEvent](#fmlpreinitializationevent)
- [FMLServerAboutToStartEvent](#fmlserverabouttostartevent)
- [FMLServerStartedEvent](#fmlserverstartedevent)
- [FMLServerStartingEvent](#fmlserverstartingevent)
- [FMLServerStoppedEvent](#fmlserverstoppedevent)
- [FMLServerStoppingEvent](#fmlserverstoppingevent)
- [FMLStateEvent](#fmlstateevent)
## FMLConstructionEvent

*class* `net.minecraftforge.fml.common.event.FMLConstructionEvent`

An internal FML event used to signal the construction of mods. Should not be used by mods.

### Methods
- `public ModClassLoader getModClassLoader()`
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod
- `public ASMDataTable getASMHarvestedData()`
- `public <any> getReverseDependencies()`

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLEvent

*class* `net.minecraftforge.fml.common.event.FMLEvent`

Parent type to all FML events. This is based on Guava EventBus. Event Subscription isn't using the Guava annotation
 however, it's using a custom annotation specific to FML Mod.EventHandler

### Methods
- `public final java.lang.String getEventType()`
- `public final java.lang.String description()`
- `public void applyModContainer(ModContainer activeContainer)`

## FMLFingerprintViolationEvent

*class* `net.minecraftforge.fml.common.event.FMLFingerprintViolationEvent`

A special event used when the Mod.certificateFingerprint() doesn't match the certificate loaded from the JAR
 file. You could use this to log a warning that the code that is running might not be yours, for example.

### Methods
- `public boolean isDirectory()`
- `public java.util.Set<java.lang.String> getFingerprints()`
- `public java.io.File getSource()`
- `public java.lang.String getExpectedFingerprint()`

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLInitializationEvent

*class* `net.minecraftforge.fml.common.event.FMLInitializationEvent`

Called after FMLPreInitializationEvent and before FMLPostInitializationEvent during mod
 startup.

 This is the second of three commonly called events during mod initialization.

 Recommended activities: Register your recipes and Ore Dictionary entries in the
 GameRegistry and OreDictionary
 Dispatch requests through FMLInterModComms to other mods, to tell them what you wish them to do.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLInterModComms

*class* `net.minecraftforge.fml.common.event.FMLInterModComms`

Simple intermod communications to receive simple messages directed at you
 from other mods

### Methods
- `public static boolean sendMessage(java.lang.String modId,  java.lang.String key,  NBTTagCompound value)`
  Send a startup time message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - An NBT type value
  - returns: if the message was enqueued successfully and will be processed during startup
- `public static boolean sendMessage(java.lang.String modId,  java.lang.String key,  ItemStack value)`
  Send a startup time message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - An Itemstack value
  - returns: if the message was enqueued successfully and will be processed during startup
- `public static boolean sendMessage(java.lang.String modId,  java.lang.String key,  ResourceLocation value)`
  Send a startup time message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - A ResourceLocation value
  - returns: if the message was enqueued successfully and will be processed during startup
- `public static boolean sendMessage(java.lang.String modId,  java.lang.String key,  java.lang.String value)`
  Send a startup time message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - A String value
  - returns: if the message was enqueued successfully and will be processed during startup
- `public static boolean sendFunctionMessage(java.lang.String modId,  java.lang.String key,  java.lang.String functionClassName)`
  Send a startup time function message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: functionClassName - The class name of a function that will be instantiated when the
 message is read. It must implement Function
  - returns: if the message was enqueued successfully and will be processed during startup
- `public static void sendRuntimeMessage(java.lang.Object sourceMod,  java.lang.String modId,  java.lang.String key,  NBTTagCompound value)`
  Send a post-startup message
  - param: sourceMod - The mod sending the message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - An NBT type value
- `public static void sendRuntimeMessage(java.lang.Object sourceMod,  java.lang.String modId,  java.lang.String key,  ItemStack value)`
  Send a post-startup message
  - param: sourceMod - The mod sending the message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - An Itemstack value
- `public static void sendRuntimeMessage(java.lang.Object sourceMod,  java.lang.String modId,  java.lang.String key,  java.lang.String value)`
  Send a post-startup message
  - param: sourceMod - The mod sending the message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - A string value
- `public static void sendRuntimeMessage(java.lang.Object sourceMod,  java.lang.String modId,  java.lang.String key,  ResourceLocation value)`
  Send a post-startup message
  - param: sourceMod - The mod sending the message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: value - A string value
- `public static void sendRuntimeFunctionMessage(java.lang.Object sourceMod,  java.lang.String modId,  java.lang.String key,  java.lang.String functionClassName)`
  Send a post-startup function message.
  - param: sourceMod - The mod originating this message
  - param: modId - The modid to send it to
  - param: key - The mod specific key
  - param: functionClassName - The name of a class to be loaded when the caller processes this message.
 The named class must extend Function
- `public static <any> fetchRuntimeMessages(java.lang.Object forMod)`
  Retrieve any pending runtime messages for the mod
  - param: forMod - The Mod.Instance of the Mod to fetch messages for
  - returns: any messages - the collection will never be null

## FMLInterModComms.IMCEvent

*class* `net.minecraftforge.fml.common.event.FMLInterModComms.IMCEvent`

Subscribe to this event to receive your messages (they are sent between
 FMLInitializationEvent and FMLPostInitializationEvent)

Enclosing class: FMLInterModComms

### Methods
- `public void applyModContainer(ModContainer activeContainer)`
- `public <any> getMessages()`

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLEvent`: `description`, `getEventType`

## FMLInterModComms.IMCMessage

*class* `net.minecraftforge.fml.common.event.FMLInterModComms.IMCMessage`

You will receive an instance of this for each message sent

Enclosing class: FMLInterModComms

### Fields
- `public final java.lang.String key`
  This field, and value are both at the mod's discretion

### Methods
- `public java.lang.String toString()`
- `public java.lang.String getSender()`
  Get the sending modId of this message.
  - returns: The modId of the mod that originated the message
- `public java.lang.String getStringValue()`
  Get the string value from this message.
  - returns: The string value
  - throws: java.lang.ClassCastException - if this message doesn't contain a String value
- `public ResourceLocation getResourceLocationValue()`
  Get the ResourceLocation value from this message.
  - returns: The string value
  - throws: java.lang.ClassCastException - if this message doesn't contain a ResourceLocation value
- `public NBTTagCompound getNBTValue()`
  Get the NBTTagCompound value from this message
  - returns: The NBT value
  - throws: java.lang.ClassCastException - if this message doesn't contain an NBT value
- `public ItemStack getItemStackValue()`
  Get the ItemStack value from this message
  - returns: The Itemstack value
  - throws: java.lang.ClassCastException - if this message doesn't contain an Itemstack value
- `public <T,V> java.util.Optional<java.util.function.Function<T,V>> getFunctionValue(java.lang.Class<T> functionFrom,  java.lang.Class<V> functionTo)`
  Get the Function value from this message. This will attempt to classload the function
   supplied by the caller. The parameter classes are strictly to give a concrete generic function return value.
  - param: functionFrom - The type of the argument to the function
  - param: functionTo - The type of the result of the function
  - returns: The function value or Optional.absent if it wasn't readable or isn't a function call
- `public java.lang.Class<?> getMessageType()`
  Get the actual message class type
  - returns: The type of the message
- `public boolean isStringMessage()`
  Is this a string type message
  - returns: if this is a string type message
- `public boolean isItemStackMessage()`
  Is this an ItemStack type message
  - returns: if this is an itemstack type message
- `public boolean isNBTMessage()`
  Is this an NBTTagCompound type message
  - returns: if this is an NBT type message
- `public boolean isResourceLocationMessage()`
  Is this an ResourceLocation type message
  - returns: if this is an NBT type message
- `public boolean isFunctionMessage()`
  Is this a Function type message
  - returns: if this is a function type message

## FMLLoadCompleteEvent

*class* `net.minecraftforge.fml.common.event.FMLLoadCompleteEvent`

This is a mostly internal event fired to mod containers that indicates that loading is complete. Mods should not
 in general override or otherwise attempt to implement this event.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLLoadEvent

*class* `net.minecraftforge.fml.common.event.FMLLoadEvent`

Internal only event, used to begin the lifecycle of loading mods.

## FMLModDisabledEvent

*class* `net.minecraftforge.fml.common.event.FMLModDisabledEvent`

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLModIdMappingEvent

*class* `net.minecraftforge.fml.common.event.FMLModIdMappingEvent`

Called whenever the ID mapping might have changed. If you register for this event, you
 will be called back whenever the client or server loads an ID set. This includes both
 when the ID maps are loaded from disk, as well as when the ID maps revert to the initial
 state.

 Note: you cannot change the IDs that have been allocated, but you might want to use
 this event to update caches or other in-mod artifacts that might be impacted by an ID
 change.

### Fields
- `public final boolean isFrozen`

### Methods
- `public <any> getRegistries()`
- `public <any> getRemaps(ResourceLocation registry)`

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLModIdMappingEvent.ModRemapping

*class* `net.minecraftforge.fml.common.event.FMLModIdMappingEvent.ModRemapping`

Enclosing class: FMLModIdMappingEvent

### Fields
- `public final ResourceLocation registry`
- `public final ResourceLocation key`
- `public final int oldId`
- `public final int newId`

## FMLPostInitializationEvent

*class* `net.minecraftforge.fml.common.event.FMLPostInitializationEvent`

Called after FMLInitializationEvent has been dispatched on every mod. This is the third and last
 commonly called event during mod initialization.

 Recommended activities: interact with other mods to establish cross-mod behaviours.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod
- `public java.util.Optional<?> buildSoftDependProxy(java.lang.String modId,  java.lang.String className,  java.lang.Object... arguments)`
  Build an object depending on if a specific target mod is loaded or not.
  
   Usually would be used to access an object from the other mod.
  - param: modId - The modId I conditionally want to build an object for
  - param: className - The name of the class I wish to instantiate
  - returns: An optional containing the object if possible, or null if not

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLPreInitializationEvent

*class* `net.minecraftforge.fml.common.event.FMLPreInitializationEvent`

Called before FMLInitializationEvent during mod startup.

 This is the first of three commonly called events during mod initialization.

 Recommended activities:
 Setup your logging getModLog()
 Load any configuration data you might have getSuggestedConfigurationFile()
 Search for a version.properties file and load it getVersionProperties()
 Configure your ModMetadata programmatically getModMetadata()
 Discover parts of your mod by using annotation search getAsmData()

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod
- `public void applyModContainer(ModContainer activeContainer)`
- `public java.io.File getSourceFile()`
  Get the File the mod was loaded from
  - returns: The file the mod was loaded from
- `public ModMetadata getModMetadata()`
  Get the ModMetadata for this mod
  - returns: the mod metadata for the mod
- `public java.io.File getModConfigurationDirectory()`
  Get the main configuration directory for this minecraft instance
  - returns: the main configuration directory
- `public java.io.File getSuggestedConfigurationFile()`
  Get a suggested configuration file for this mod. It will be of the form <modid>.cfg
  - returns: A suggested configuration file name for this mod
- `public ASMDataTable getAsmData()`
  Get the ASMDataTable for this instance of Minecraft. This is a special structure containing
   parsing information from FML. It can be searched for annotations parsed out by FML.
- `public java.util.Properties getVersionProperties()`
  Get a version.properties file as a Properties object from the mod file.
   This can be used to load build-type information
   such as a unique version number from a properties file shipped as part of the distributable.
  - returns: A properties object if one exists, else null
- `public Logger getModLog()`
  Get a logger instance configured to write to the FML Log as a parent, identified by modid. Handy for mod logging!
  - returns: A logger
- `@Deprecated public java.security.cert.Certificate[] getFMLSigningCertificates()` (deprecated)
  Deprecated.
  Retrieve the FML signing certificates, if any. Validate these against the
   published FML certificates in your mod, if you wish.
  
   Deprecated because mods should NOT trust this code. Rather
   they should copy this, or something like this, into their own mods.
  - returns: Certificates used to sign FML and Forge

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `description`, `getEventType`

## FMLServerAboutToStartEvent

*class* `net.minecraftforge.fml.common.event.FMLServerAboutToStartEvent`

Called before the server begins loading anything. Called after FMLPostInitializationEvent on the dedicated
 server, and after the player has hit "Play Selected World" in the client. Called before FMLServerStartingEvent.

 You can obtain a reference to the server with this event.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod
- `public MinecraftServer getServer()`

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLServerStartedEvent

*class* `net.minecraftforge.fml.common.event.FMLServerStartedEvent`

Called after FMLServerStartingEvent when the server is available and ready to play.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLServerStartingEvent

*class* `net.minecraftforge.fml.common.event.FMLServerStartingEvent`

Called after FMLServerAboutToStartEvent and before FMLServerStartedEvent.
 This event allows for customizations of the server, such as loading custom commands, perhaps customizing recipes or
 other activities.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod
- `public MinecraftServer getServer()`
- `public void registerServerCommand(ICommand command)`

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLServerStoppedEvent

*class* `net.minecraftforge.fml.common.event.FMLServerStoppedEvent`

Called after FMLServerStoppingEvent when the server has completely shut down.
 Called immediately before shutting down, on the dedicated server, and before returning
 to the main menu on the client.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLServerStoppingEvent

*class* `net.minecraftforge.fml.common.event.FMLServerStoppingEvent`

Called when the server begins an orderly shutdown, before FMLServerStoppedEvent.

### Methods
- `public LoaderState.ModState getModState()`
  Description copied from class: FMLStateEvent
  The current state of the mod
  - returns: The current state of the mod

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLStateEvent`: `getSide`
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`

## FMLStateEvent

*class* `net.minecraftforge.fml.common.event.FMLStateEvent`

The parent of all mod-state changing events

### Methods
- `public abstract LoaderState.ModState getModState()`
  The current state of the mod
  - returns: The current state of the mod
- `public Side getSide()`
  The side we're loading on. Side.CLIENT means we're loading in the client, Side.SERVER means
   we're loading in the dedicated server.
  - returns: Return which side we're loading on.

### Inherited methods
- from `net.minecraftforge.fml.common.event.FMLEvent`: `applyModContainer`, `description`, `getEventType`
