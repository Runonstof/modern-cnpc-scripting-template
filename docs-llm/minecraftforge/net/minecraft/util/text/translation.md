# net.minecraft.util.text.translation

- [I18n](#i18n)
- [LanguageMap](#languagemap)
## I18n

*class* `net.minecraft.util.text.translation.I18n`

Deprecated.

### Methods
- `@Deprecated public static java.lang.String translateToLocal(java.lang.String key)` (deprecated)
  Deprecated.
- `@Deprecated public static java.lang.String translateToLocalFormatted(java.lang.String key,  java.lang.Object... format)` (deprecated)
  Deprecated.
- `@Deprecated public static java.lang.String translateToFallback(java.lang.String key)` (deprecated)
  Deprecated.
- `@Deprecated public static boolean canTranslate(java.lang.String key)` (deprecated)
  Deprecated.
- `public static long getLastTranslationUpdateTimeInMilliseconds()` (deprecated)
  Deprecated.

## LanguageMap

*class* `net.minecraft.util.text.translation.LanguageMap`

### Methods
- `public static void inject(java.io.InputStream inputstream)`
- `public static java.util.Map<java.lang.String,java.lang.String> parseLangFile(java.io.InputStream inputstream)`
- `public static void replaceWith(java.util.Map<java.lang.String,java.lang.String> p_135063_0_)`
- `public java.lang.String translateKey(java.lang.String key)`
- `public java.lang.String translateKeyFormat(java.lang.String key,  java.lang.Object... format)`
- `public boolean isKeyTranslated(java.lang.String key)`
- `public long getLastUpdateTimeInMilliseconds()`
