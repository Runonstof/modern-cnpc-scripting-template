# net.minecraftforge.fml.javafmlmod

- [AutomaticEventSubscriber](#automaticeventsubscriber)
- [FMLJavaModLanguageProvider](#fmljavamodlanguageprovider)
- [FMLJavaModLanguageProvider.FMLModTarget](#fmljavamodlanguageprovider.fmlmodtarget)
- [FMLJavaModLoadingContext](#fmljavamodloadingcontext)
- [FMLModContainer](#fmlmodcontainer)
## AutomaticEventSubscriber

*class* `net.minecraftforge.fml.javafmlmod.AutomaticEventSubscriber`

Automatic eventbus subscriber - reads Mod.EventBusSubscriber
 annotations and passes the class instances to the Mod.EventBusSubscriber.Bus
 defined by the annotation. Defaults to MinecraftForge#EVENT_BUS

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.objectweb.asm.Type AUTO_SUBSCRIBER`
- `private static final org.objectweb.asm.Type MOD_TYPE`

### Methods
- `public static void inject(ModContainer mod,  net.minecraftforge.forgespi.language.ModFileScanData scanData,  ClassLoader loader)`

## FMLJavaModLanguageProvider

*class* `net.minecraftforge.fml.javafmlmod.FMLJavaModLanguageProvider`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `public static final org.objectweb.asm.Type MODANNOTATION`

### Methods
- `public String name()`
- `public Consumer<net.minecraftforge.forgespi.language.ModFileScanData> getFileVisitor()`
- `public <R extends net.minecraftforge.forgespi.language.ILifecycleEvent<R>> void consumeLifecycleEvent(Supplier<R> consumeEvent)`

## FMLJavaModLanguageProvider.FMLModTarget

*class* `net.minecraftforge.fml.javafmlmod.FMLJavaModLanguageProvider.FMLModTarget`

Enclosing class: FMLJavaModLanguageProvider

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private final String className`
- `private final String modId`

### Methods
- `public String getModId()`
- `public <T> T loadMod(net.minecraftforge.forgespi.language.IModInfo info,  net.minecraftforge.forgespi.language.ModFileScanData modFileScanResults,  ModuleLayer gameLayer)`

## FMLJavaModLoadingContext

*class* `net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext`

### Fields
- `private final FMLModContainer container`

### Methods
- `public net.minecraftforge.eventbus.api.IEventBus getModEventBus()`
  - returns: The mod's event bus, to allow subscription to Mod specific events
- `public static FMLJavaModLoadingContext get()`
  Helper to get the right instance from the ModLoadingContext correctly.
  - returns: The FMLJavaMod language specific extension from the ModLoadingContext

## FMLModContainer

*class* `net.minecraftforge.fml.javafmlmod.FMLModContainer`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker LOADING`
- `private final net.minecraftforge.forgespi.language.ModFileScanData scanResults`
- `private final net.minecraftforge.eventbus.api.IEventBus eventBus`
- `private Object modInstance`
- `private final Class<?> modClass`

### Inherited fields
- from `net.minecraftforge.fml.ModContainer`: `activityMap`, `configHandler`, `configs`, `contextExtension`, `extensionPoints`, `modId`, `modInfo`, `modLoadingStage`, `namespace`

### Methods
- `private void onEventFailed(net.minecraftforge.eventbus.api.IEventBus iEventBus,  net.minecraftforge.eventbus.api.Event event,  net.minecraftforge.eventbus.api.IEventListener[] iEventListeners,  int i,  Throwable throwable)`
- `private void constructMod()`
- `public boolean matches(Object mod)`
  Description copied from class: ModContainer
  Does this mod match the supplied mod?
  - param: mod - to compare
  - returns: if the mod matches
- `public Object getMod()`
  - returns: the mod object instance
- `public net.minecraftforge.eventbus.api.IEventBus getEventBus()`
- `protected <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> void acceptEvent(T e)`
  Description copied from class: ModContainer
  Accept an arbitrary event for processing by the mod. Probably posted to an event bus in the lower level container.
  - param: e - Event to accept

### Inherited methods
- from `net.minecraftforge.fml.ModContainer`: `addConfig`, `buildTransitionHandler`, `dispatchConfigEvent`, `getCurrentState`, `getCustomExtension`, `getModId`, `getModInfo`, `getNamespace`, `registerExtensionPoint`
