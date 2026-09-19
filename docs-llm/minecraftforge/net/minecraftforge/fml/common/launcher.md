# net.minecraftforge.fml.common.launcher

- [FMLDeobfTweaker](#fmldeobftweaker)
- [FMLInjectionAndSortingTweaker](#fmlinjectionandsortingtweaker)
- [FMLServerTweaker](#fmlservertweaker)
- [FMLTweaker](#fmltweaker)
- [TerminalTweaker](#terminaltweaker)
- [Yggdrasil](#yggdrasil)
## FMLDeobfTweaker

*class* `net.minecraftforge.fml.common.launcher.FMLDeobfTweaker`

### Methods
- `public void acceptOptions(java.util.List<java.lang.String> args,  java.io.File gameDir,  java.io.File assetsDir,  java.lang.String profile)`
- `public void injectIntoClassLoader(LaunchClassLoader classLoader)`
- `public java.lang.String getLaunchTarget()`
- `public java.lang.String[] getLaunchArguments()`

## FMLInjectionAndSortingTweaker

*class* `net.minecraftforge.fml.common.launcher.FMLInjectionAndSortingTweaker`

This class is to manage the injection of coremods as tweakers into the tweak framework.
 It has to inject the coremod tweaks during construction, because that is the only time
 the tweak list is writeable.

### Methods
- `public void acceptOptions(java.util.List<java.lang.String> args,  java.io.File gameDir,  java.io.File assetsDir,  java.lang.String profile)`
- `public void injectIntoClassLoader(LaunchClassLoader classLoader)`
- `public java.lang.String getLaunchTarget()`
- `public java.lang.String[] getLaunchArguments()`

## FMLServerTweaker

*class* `net.minecraftforge.fml.common.launcher.FMLServerTweaker`

### Methods
- `public void acceptOptions(java.util.List<java.lang.String> args,  java.io.File gameDir,  java.io.File assetsDir,  java.lang.String profile)`
- `public java.lang.String getLaunchTarget()`
- `public void injectIntoClassLoader(LaunchClassLoader classLoader)`

### Inherited methods
- from `net.minecraftforge.fml.common.launcher.FMLTweaker`: `getGameDir`, `getJarLocation`, `getLaunchArguments`, `injectCascadingTweak`

## FMLTweaker

*class* `net.minecraftforge.fml.common.launcher.FMLTweaker`

### Methods
- `public void acceptOptions(java.util.List<java.lang.String> args,  java.io.File gameDir,  java.io.File assetsDir,  java.lang.String profile)`
- `public void injectIntoClassLoader(LaunchClassLoader classLoader)`
- `public java.lang.String getLaunchTarget()`
- `public java.lang.String[] getLaunchArguments()`
- `public java.io.File getGameDir()`
- `public static java.net.URI getJarLocation()`
- `public void injectCascadingTweak(java.lang.String tweakClassName)`

## TerminalTweaker

*class* `net.minecraftforge.fml.common.launcher.TerminalTweaker`

### Methods
- `public void injectIntoClassLoader(LaunchClassLoader classLoader)`
- `public java.lang.String getLaunchTarget()`
- `public java.lang.String[] getLaunchArguments()`
- `public void acceptOptions(java.util.List<java.lang.String> args,  java.io.File gameDir,  java.io.File assetsDir,  java.lang.String profile)`

## Yggdrasil

*class* `net.minecraftforge.fml.common.launcher.Yggdrasil`

Basic implementation of Mojang's 'Yggdrasil' login system, purely intended as a dev time bare bones login.
 Login errors are not handled.

### Methods
- `public static void login(java.util.Map<java.lang.String,java.lang.String> args)`
