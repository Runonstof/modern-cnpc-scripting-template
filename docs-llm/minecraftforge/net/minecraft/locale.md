# net.minecraft.locale

- [Language](#language)
## Language

*class* `net.minecraft.locale.Language`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `private static final Pattern UNSUPPORTED_FORMAT_PATTERN`
- `public static final String DEFAULT` (= "en_us")
- `private static volatile Language instance`

### Methods
- `private static Language loadDefault()`
- `private static void parseTranslations(BiConsumer<String,String> p_282031_,  String p_283638_)`
- `public static void loadFromJson(InputStream p_128109_,  BiConsumer<String,String> p_128110_)`
- `public static Language getInstance()`
- `public static void inject(Language p_128115_)`
- `public Map<String,String> getLanguageData()`
- `public String getOrDefault(String p_128111_)`
- `public abstract String getOrDefault(String p_265702_,  String p_265599_)`
- `public abstract boolean has(String p_128117_)`
- `public abstract boolean isDefaultRightToLeft()`
- `public abstract FormattedCharSequence getVisualOrder(FormattedText p_128116_)`
- `public List<FormattedCharSequence> getVisualOrder(List<FormattedText> p_128113_)`
