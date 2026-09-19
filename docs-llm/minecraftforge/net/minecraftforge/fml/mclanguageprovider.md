# net.minecraftforge.fml.mclanguageprovider

- [MinecraftModContainer](#minecraftmodcontainer)
- [MinecraftModLanguageProvider](#minecraftmodlanguageprovider)
- [MinecraftModLanguageProvider.MinecraftModTarget](#minecraftmodlanguageprovider.minecraftmodtarget)
## MinecraftModContainer

*class* `net.minecraftforge.fml.mclanguageprovider.MinecraftModContainer`

### Fields
- `private static final String MCMODINSTANCE` (= "minecraft, the mod")

### Inherited fields
- from `net.minecraftforge.fml.ModContainer`: `activityMap`, `configHandler`, `configs`, `contextExtension`, `extensionPoints`, `modId`, `modInfo`, `modLoadingStage`, `namespace`

### Methods
- `public boolean matches(Object mod)`
  Description copied from class: ModContainer
  Does this mod match the supplied mod?
  - param: mod - to compare
  - returns: if the mod matches
- `public Object getMod()`
  - returns: the mod object instance

### Inherited methods
- from `net.minecraftforge.fml.ModContainer`: `acceptEvent`, `addConfig`, `buildTransitionHandler`, `dispatchConfigEvent`, `getCurrentState`, `getCustomExtension`, `getModId`, `getModInfo`, `getNamespace`, `registerExtensionPoint`

## MinecraftModLanguageProvider

*class* `net.minecraftforge.fml.mclanguageprovider.MinecraftModLanguageProvider`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`

### Methods
- `public String name()`
- `public Consumer<net.minecraftforge.forgespi.language.ModFileScanData> getFileVisitor()`
- `public <R extends net.minecraftforge.forgespi.language.ILifecycleEvent<R>> void consumeLifecycleEvent(Supplier<R> consumeEvent)`

## MinecraftModLanguageProvider.MinecraftModTarget

*class* `net.minecraftforge.fml.mclanguageprovider.MinecraftModLanguageProvider.MinecraftModTarget`

Enclosing class: MinecraftModLanguageProvider

### Methods
- `public <T> T loadMod(net.minecraftforge.forgespi.language.IModInfo info,  net.minecraftforge.forgespi.language.ModFileScanData modFileScanResults,  ModuleLayer gameLayer)`
