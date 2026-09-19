# net.minecraftforge.fml.event.lifecycle

- [FMLClientSetupEvent](#fmlclientsetupevent)
- [FMLCommonSetupEvent](#fmlcommonsetupevent)
- [FMLConstructModEvent](#fmlconstructmodevent)
- [FMLDedicatedServerSetupEvent](#fmldedicatedserversetupevent)
- [FMLLoadCompleteEvent](#fmlloadcompleteevent)
- [InterModEnqueueEvent](#intermodenqueueevent)
- [InterModProcessEvent](#intermodprocessevent)
- [ModLifecycleEvent](#modlifecycleevent)
- [ParallelDispatchEvent](#paralleldispatchevent)
## FMLClientSetupEvent

*class* `net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent`

This is the second of four commonly called events during mod lifecycle startup.

 Called before InterModEnqueueEvent
 Called after FMLCommonSetupEvent

 Called on Dist.CLIENT - the game client.

 Alternative to FMLDedicatedServerSetupEvent.

 Do client only setup with this event, such as KeyBindings.

 This is a parallel dispatch event.

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`: `enqueueWork`, `enqueueWork`
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`

## FMLCommonSetupEvent

*class* `net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent`

This is the first of four commonly called events during mod initialization.

 Called after RegisterEvent events have been fired and before
 FMLClientSetupEvent or FMLDedicatedServerSetupEvent during mod startup.

 Either register your listener using AutomaticEventSubscriber and
 SubscribeEvent or
 IEventBus.addListener(Consumer) in your constructor.

 Most non-specific mod setup will be performed here. Note that this is a parallel dispatched event - you cannot
 interact with game state in this event.

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`: `enqueueWork`, `enqueueWork`
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`

## FMLConstructModEvent

*class* `net.minecraftforge.fml.event.lifecycle.FMLConstructModEvent`

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`: `enqueueWork`, `enqueueWork`
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`

## FMLDedicatedServerSetupEvent

*class* `net.minecraftforge.fml.event.lifecycle.FMLDedicatedServerSetupEvent`

This is the second of four commonly called events during mod core startup.

 Called before InterModEnqueueEvent
 Called after FMLCommonSetupEvent

 Called on Dist.DEDICATED_SERVER - the dedicated game server.

 Alternative to FMLClientSetupEvent.

 Do dedicated server specific activities with this event.

 This event is fired before construction of the dedicated server. Use FMLServerAboutToStartEvent
 or FMLServerStartingEvent to do stuff with the server, in both dedicated
 and integrated server contexts

 This is a parallel dispatch event.

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`: `enqueueWork`, `enqueueWork`
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`

## FMLLoadCompleteEvent

*class* `net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent`

This is a mostly internal event fired to mod containers that indicates that loading is complete. Mods should not
 in general override or otherwise attempt to implement this event.

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`: `enqueueWork`, `enqueueWork`
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`

## InterModEnqueueEvent

*class* `net.minecraftforge.fml.event.lifecycle.InterModEnqueueEvent`

This is the third of four commonly called events during mod core startup.

 Called before InterModProcessEvent
 Called after FMLClientSetupEvent or FMLDedicatedServerSetupEvent

 Enqueue InterModComms messages to other mods with this event.

 This is a parallel dispatch event.

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`: `enqueueWork`, `enqueueWork`
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`

## InterModProcessEvent

*class* `net.minecraftforge.fml.event.lifecycle.InterModProcessEvent`

This is the fourth of four commonly called events during mod core startup.

 Called after InterModEnqueueEvent

 Retrieve InterModComms InterModComms.IMCMessage suppliers
 and process them as you wish with this event.

 This is a parallel dispatch event.

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`: `enqueueWork`, `enqueueWork`
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`

## ModLifecycleEvent

*class* `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`

Parent type to all ModLifecycle events. This is based on Forge EventBus. They fire through the
 ModContainer's eventbus instance.

### Fields
- `private final ModContainer container`

### Methods
- `public final String description()`
- `public Stream<InterModComms.IMCMessage> getIMCStream()`
- `public Stream<InterModComms.IMCMessage> getIMCStream(Predicate<String> methodFilter)`
- `ModContainer getContainer()`
- `public String toString()`

## ParallelDispatchEvent

*class* `net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent`

### Fields
- `private final ModLoadingStage modLoadingStage`

### Methods
- `private Optional<DeferredWorkQueue> getQueue()`
- `public CompletableFuture<Void> enqueueWork(Runnable work)`
- `public <T> CompletableFuture<T> enqueueWork(Supplier<T> work)`

### Inherited methods
- from `net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent`: `description`, `getContainer`, `getIMCStream`, `getIMCStream`, `toString`
