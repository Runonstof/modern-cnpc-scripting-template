# net.minecraftforge.fml.loading.log4j

- [ForgeHighlight](#forgehighlight)
- [SLF4JFixerLaunchPluginService](#slf4jfixerlaunchpluginservice)
## ForgeHighlight

*class* `net.minecraftforge.fml.loading.log4j.ForgeHighlight`

A wrapper for HighlightConverter that auto-disables ANSI when the terminal doesn't support it.
 Ansi support is determined by TerminalConsoleAppender

### Fields
- `protected static final org.apache.logging.log4j.Logger LOGGER`

### Methods
- `@Nullable public static @Nullable org.apache.logging.log4j.core.pattern.HighlightConverter newInstance(org.apache.logging.log4j.core.config.Configuration config,  String[] options)`
  Gets a new instance of the HighlightErrorConverter with the
   specified options.
  - param: config - The current configuration
  - param: options - The pattern options
  - returns: The new instance

## SLF4JFixerLaunchPluginService

*class* `net.minecraftforge.fml.loading.log4j.SLF4JFixerLaunchPluginService`

### Fields
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> NO_PHASES`

### Methods
- `public String name()`
- `public EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> handlesClass(org.objectweb.asm.Type classType,  boolean isEmpty)`
- `public void initializeLaunch(cpw.mods.modlauncher.serviceapi.ILaunchPluginService.ITransformerLoader transformerLoader,  cpw.mods.modlauncher.api.NamedPath[] specialPaths)`

### Inherited methods
- from `cpw.mods.modlauncher.serviceapi.ILaunchPluginService`: `addResources`, `customAuditConsumer`, `getExtension`, `handlesClass`, `offerResource`, `processClass`, `processClass`, `processClassWithFlags`
