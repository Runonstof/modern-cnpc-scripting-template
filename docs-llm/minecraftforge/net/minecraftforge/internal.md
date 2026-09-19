# net.minecraftforge.internal

- [BrandingControl](#brandingcontrol)
- [ForgeBindings](#forgebindings)
- [TextComponentMessageFormatHandler](#textcomponentmessageformathandler)
## BrandingControl

*class* `net.minecraftforge.internal.BrandingControl`

### Fields
- `private static List<String> brandings`
- `private static List<String> brandingsNoMC`
- `private static List<String> overCopyrightBrandings`

### Methods
- `private static void computeBranding()`
- `private static List<String> getBrandings(boolean includeMC,  boolean reverse)`
- `private static void computeOverCopyrightBrandings()`
- `public static void forEachLine(boolean includeMC,  boolean reverse,  BiConsumer<Integer,String> lineConsumer)`
- `public static void forEachAboveCopyrightLine(BiConsumer<Integer,String> lineConsumer)`
- `public static String getClientBranding()`
- `public static String getServerBranding()`
- `public static ResourceManagerReloadListener resourceManagerReloadListener()`
- `private static void onResourceManagerReload(ResourceManager resourceManager)`

## ForgeBindings

*class* `net.minecraftforge.internal.ForgeBindings`

### Methods
- `public Supplier<net.minecraftforge.eventbus.api.IEventBus> getForgeBusSupplier()`
- `public Supplier<I18NParser> getMessageParser()`
- `public Supplier<IConfigEvent.ConfigConfig> getConfigConfiguration()`

## TextComponentMessageFormatHandler

*class* `net.minecraftforge.internal.TextComponentMessageFormatHandler`

### Methods
- `public static int handle(TranslatableContents parent,  Consumer<FormattedText> addChild,  Object[] formatArgs,  String format)`
