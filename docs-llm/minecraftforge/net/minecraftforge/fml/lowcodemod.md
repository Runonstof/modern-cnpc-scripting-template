# net.minecraftforge.fml.lowcodemod

- [LowCodeModContainer](#lowcodemodcontainer)
- [LowCodeModLanguageProvider](#lowcodemodlanguageprovider)
- [LowCodeModLanguageProvider.LowCodeModTarget](#lowcodemodlanguageprovider.lowcodemodtarget)
## LowCodeModContainer

*class* `net.minecraftforge.fml.lowcodemod.LowCodeModContainer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final net.minecraftforge.forgespi.language.ModFileScanData scanResults`
- `private Object modInstance`

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
- `protected <T extends net.minecraftforge.eventbus.api.Event & IModBusEvent> void acceptEvent(T e)`
  Description copied from class: ModContainer
  Accept an arbitrary event for processing by the mod. Probably posted to an event bus in the lower level container.
  - param: e - Event to accept

### Inherited methods
- from `net.minecraftforge.fml.ModContainer`: `addConfig`, `buildTransitionHandler`, `dispatchConfigEvent`, `getCurrentState`, `getCustomExtension`, `getModId`, `getModInfo`, `getNamespace`, `registerExtensionPoint`

## LowCodeModLanguageProvider

*class* `net.minecraftforge.fml.lowcodemod.LowCodeModLanguageProvider`

### Methods
- `public String name()`
- `public Consumer<net.minecraftforge.forgespi.language.ModFileScanData> getFileVisitor()`
- `public <R extends net.minecraftforge.forgespi.language.ILifecycleEvent<R>> void consumeLifecycleEvent(Supplier<R> consumeEvent)`

## LowCodeModLanguageProvider.LowCodeModTarget

*record* `net.minecraftforge.fml.lowcodemod.LowCodeModLanguageProvider.LowCodeModTarget`

Enclosing class: LowCodeModLanguageProvider

### Fields
- `private final String modId`
  The field for the modId record component.
- `private static final org.apache.logging.log4j.Logger LOGGER`

### Methods
- `public <T> T loadMod(net.minecraftforge.forgespi.language.IModInfo info,  net.minecraftforge.forgespi.language.ModFileScanData modFileScanResults,  ModuleLayer gameLayer)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String modId()`
  Returns the value of the modId record component.
  - returns: the value of the modId record component
