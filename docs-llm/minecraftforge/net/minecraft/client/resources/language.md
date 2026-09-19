# net.minecraft.client.resources.language

- [ClientLanguage](#clientlanguage)
- [FormattedBidiReorder](#formattedbidireorder)
- [I18n](#i18n)
- [LanguageInfo](#languageinfo)
- [LanguageManager](#languagemanager)
## ClientLanguage

*class* `net.minecraft.client.resources.language.ClientLanguage`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Map<String,String> storage`
- `private final boolean defaultRightToLeft`

### Inherited fields
- from `net.minecraft.locale.Language`: `DEFAULT`

### Methods
- `public static ClientLanguage loadFrom(ResourceManager p_265765_,  List<String> p_265743_,  boolean p_265470_)`
- `private static void appendFrom(String p_235036_,  List<Resource> p_235037_,  Map<String,String> p_235038_)`
- `public String getOrDefault(String p_118920_,  String p_265273_)`
- `public boolean has(String p_118928_)`
- `public boolean isDefaultRightToLeft()`
- `public FormattedCharSequence getVisualOrder(FormattedText p_118925_)`
- `public Map<String,String> getLanguageData()`

### Inherited methods
- from `net.minecraft.locale.Language`: `getInstance`, `getOrDefault`, `getVisualOrder`, `inject`, `loadFromJson`

## FormattedBidiReorder

*class* `net.minecraft.client.resources.language.FormattedBidiReorder`

### Methods
- `public static FormattedCharSequence reorder(FormattedText p_118932_,  boolean p_118933_)`
- `private static String shape(String p_118930_)`

## I18n

*class* `net.minecraft.client.resources.language.I18n`

### Fields
- `private static volatile Language language`

### Methods
- `static void setLanguage(Language p_118942_)`
- `public static String get(String p_118939_,  Object... p_118940_)`
- `public static boolean exists(String p_118937_)`

## LanguageInfo

*record* `net.minecraft.client.resources.language.LanguageInfo`

### Fields
- `private final String region`
  The field for the region record component.
- `private final String name`
  The field for the name record component.
- `private final boolean bidirectional`
  The field for the bidirectional record component.
- `public static final com.mojang.serialization.Codec<LanguageInfo> CODEC`

### Methods
- `public Component toComponent()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String region()`
  Returns the value of the region record component.
  - returns: the value of the region record component
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public boolean bidirectional()`
  Returns the value of the bidirectional record component.
  - returns: the value of the bidirectional record component

## LanguageManager

*class* `net.minecraft.client.resources.language.LanguageManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final LanguageInfo DEFAULT_LANGUAGE`
- `private Map<String,LanguageInfo> languages`
- `private String currentCode`
- `private Locale javaLocale`

### Methods
- `private static Map<String,LanguageInfo> extractLanguages(Stream<PackResources> p_118982_)`
- `public void onResourceManagerReload(ResourceManager p_118973_)`
- `public Locale getJavaLocale()`
- `public void setSelected(String p_265224_)`
- `public String getSelected()`
- `public SortedMap<String,LanguageInfo> getLanguages()`
- `@Nullable public LanguageInfo getLanguage(String p_118977_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`
