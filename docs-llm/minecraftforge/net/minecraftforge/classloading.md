# net.minecraftforge.classloading

- [FMLForgePlugin](#fmlforgeplugin)
## FMLForgePlugin

*class* `net.minecraftforge.classloading.FMLForgePlugin`

All Implemented Interfaces: IFMLLoadingPlugin

### Fields
- `public static boolean RUNTIME_DEOBF`
- `public static java.io.File forgeLocation`

### Methods
- `public java.lang.String[] getASMTransformerClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return a list of classes that implements the IClassTransformer interface
  - returns: a list of classes that implements the IClassTransformer interface
- `public java.lang.String getModContainerClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return a class name that implements "ModContainer" for injection into the mod list
   The "getName" function should return a name that other mods can, if need be,
   depend on.
   Trivially, this modcontainer will be loaded before all regular mod containers,
   which means it will be forced to be "immutable" - not susceptible to normal
   sorting behaviour.
   All other mod behaviours are available however- this container can receive and handle
   normal loading events
- `public java.lang.String getSetupClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return the class name of an implementor of "IFMLCallHook", that will be run, in the
   main thread, to perform any additional setup this coremod may require. It will be
   run prior to Minecraft starting, so it CANNOT operate on minecraft
   itself. The game will deliberately crash if this code is detected to trigger a
   minecraft class loading
   TODO: implement crash ;)
- `public void injectData(java.util.Map<java.lang.String,java.lang.Object> data)`
  Description copied from interface: IFMLLoadingPlugin
  Inject coremod data into this coremod
   This data includes:
   "mcLocation" : the location of the minecraft directory,
   "coremodList" : the list of coremods
   "coremodLocation" : the file this coremod loaded from,
- `public java.lang.String getAccessTransformerClass()`
  Description copied from interface: IFMLLoadingPlugin
  Return an optional access transformer class for this coremod. It will be injected post-deobf
   so ensure your ATs conform to the new srgnames scheme.
  - returns: the name of an access transformer class or null if none is provided
