# net.minecraftforge.common.config

- [Config](#config)
- [Config.Comment](#config.comment)
- [Config.Ignore](#config.ignore)
- [Config.LangKey](#config.langkey)
- [Config.Name](#config.name)
- [Config.RangeDouble](#config.rangedouble)
- [Config.RangeInt](#config.rangeint)
- [Config.RequiresMcRestart](#config.requiresmcrestart)
- [Config.RequiresWorldRestart](#config.requiresworldrestart)
- [Config.SlidingOption](#config.slidingoption)
- [Config.Type](#config.type)
- [ConfigCategory](#configcategory)
- [ConfigElement](#configelement)
- [ConfigManager](#configmanager)
- [Configuration](#configuration)
- [Configuration.UnicodeInputStreamReader](#configuration.unicodeinputstreamreader)
- [FieldWrapper](#fieldwrapper)
- [FieldWrapper.BeanEntry](#fieldwrapper.beanentry)
- [IFieldWrapper](#ifieldwrapper)
- [Property](#property)
- [Property.Type](#property.type)
## Config

*annotation* `net.minecraftforge.common.config.Config`

## Config.Comment

*annotation* `net.minecraftforge.common.config.Config.Comment`

## Config.Ignore

*annotation* `net.minecraftforge.common.config.Config.Ignore`

## Config.LangKey

*annotation* `net.minecraftforge.common.config.Config.LangKey`

## Config.Name

*annotation* `net.minecraftforge.common.config.Config.Name`

## Config.RangeDouble

*annotation* `net.minecraftforge.common.config.Config.RangeDouble`

## Config.RangeInt

*annotation* `net.minecraftforge.common.config.Config.RangeInt`

## Config.RequiresMcRestart

*annotation* `net.minecraftforge.common.config.Config.RequiresMcRestart`

## Config.RequiresWorldRestart

*annotation* `net.minecraftforge.common.config.Config.RequiresWorldRestart`

## Config.SlidingOption

*annotation* `net.minecraftforge.common.config.Config.SlidingOption`

A field marked with this annotation (and Config.RangeInt or Config.RangeDouble) will have a slider control attached in the config UI

## Config.Type

*enum* `net.minecraftforge.common.config.Config.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Config.Type>

Enclosing class: Config

### Fields
- `public static final Config.Type INSTANCE`
  Loaded once, directly after mod construction. Before pre-init.
   This class must have static fields.

### Methods
- `public static Config.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Config.Type c : Config.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Config.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean isStatic()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ConfigCategory

*class* `net.minecraftforge.common.config.ConfigCategory`

All Implemented Interfaces: java.util.Map<java.lang.String, Property>

### Fields
- `public final ConfigCategory parent`

### Methods
- `public boolean equals(java.lang.Object obj)`
- `public java.lang.String getName()`
- `public java.lang.String getQualifiedName()`
- `public static java.lang.String getQualifiedName(java.lang.String name,  ConfigCategory parent)`
- `public ConfigCategory getFirstParent()`
- `public boolean isChild()`
- `public java.util.Map<java.lang.String,Property> getValues()`
- `public java.util.List<Property> getOrderedValues()`
- `public ConfigCategory setConfigEntryClass(java.lang.Class<? extends GuiConfigEntries.IConfigEntry> clazz)`
- `public java.lang.Class<? extends GuiConfigEntries.IConfigEntry> getConfigEntryClass()`
- `public ConfigCategory setLanguageKey(java.lang.String languagekey)`
- `public java.lang.String getLanguagekey()`
- `public void setComment(java.lang.String comment)`
- `public java.lang.String getComment()`
- `public ConfigCategory setRequiresWorldRestart(boolean requiresWorldRestart)`
  Sets the flag for whether or not this category can be edited while a world is running. Care should be taken to ensure
   that only properties that are truly dynamic can be changed from the in-game options menu. Only set this flag to
   true if all child properties/categories are unable to be modified while a world is running.
- `public boolean requiresWorldRestart()`
  Returns whether or not this category is able to be edited while a world is running using the in-game Mod Options screen
   as well as the Mods list screen, or only from the Mods list screen.
- `public ConfigCategory setShowInGui(boolean showInGui)`
  Sets whether or not this ConfigCategory should be allowed to show on config GUIs.
   Defaults to true.
- `public boolean showInGui()`
  Gets whether or not this ConfigCategory should be allowed to show on config GUIs.
   Defaults to true unless set to false.
- `public ConfigCategory setRequiresMcRestart(boolean requiresMcRestart)`
  Sets whether or not this ConfigCategory requires Minecraft to be restarted when changed.
   Defaults to false. Only set this flag to true if ALL child properties/categories require
   Minecraft to be restarted when changed. Setting this flag will also prevent modification
   of the child properties/categories while a world is running.
- `public boolean requiresMcRestart()`
  Gets whether or not this ConfigCategory requires Minecraft to be restarted when changed.
   Defaults to false unless set to true.
- `public ConfigCategory setPropertyOrder(java.util.List<java.lang.String> propertyOrder)`
- `public java.util.List<java.lang.String> getPropertyOrder()`
- `public boolean containsKey(java.lang.String key)`
- `public Property get(java.lang.String key)`
- `public void write(java.io.BufferedWriter out,  int indent)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean hasChanged()`
- `public int size()`
- `public boolean isEmpty()`
- `public boolean containsKey(java.lang.Object key)`
- `public boolean containsValue(java.lang.Object value)`
- `public Property get(java.lang.Object key)`
- `public Property put(java.lang.String key,  Property value)`
- `public Property remove(java.lang.Object key)`
- `public void putAll(java.util.Map<? extends java.lang.String,? extends Property> m)`
- `public void clear()`
- `public java.util.Set<java.lang.String> keySet()`
- `public java.util.Collection<Property> values()`
- `public java.util.Set<java.util.Map.Entry<java.lang.String,Property>> entrySet()`
- `public java.util.Set<ConfigCategory> getChildren()`
- `public void removeChild(ConfigCategory child)`

### Inherited methods
- from `java.util.Map`: `compute`, `computeIfAbsent`, `computeIfPresent`, `forEach`, `getOrDefault`, `hashCode`, `merge`, `putIfAbsent`, `remove`, `replace`, `replace`, `replaceAll`

## ConfigElement

*class* `net.minecraftforge.common.config.ConfigElement`

This class bridges the gap between the FML config GUI classes and the Forge Configuration classes.

All Implemented Interfaces: IConfigElement

### Methods
- `public ConfigElement listCategoriesFirst(boolean categoriesFirst)`
- `public java.util.List<IConfigElement> getChildElements()`
  Description copied from interface: IConfigElement
  [Category] Gets this category's child categories/properties.
- `public java.lang.String getName()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets the name of this object.
- `public boolean isProperty()`
  Description copied from interface: IConfigElement
  [Property, Category] Is this object a property object?
- `public java.lang.Class<? extends GuiConfigEntries.IConfigEntry> getConfigEntryClass()`
  Description copied from interface: IConfigElement
  This method returns a class that implements GuiConfigEntries.IConfigEntry or null. This class MUST
   provide a constructor with the following parameter types: GuiConfig, GuiConfigEntries, IConfigElement
- `public java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> getArrayEntryClass()`
  Description copied from interface: IConfigElement
  This method returns a class that implements GuiEditArrayEntries.IArrayEntry. This class MUST provide a constructor with the
   following parameter types: GuiEditArray, GuiEditArrayEntries, IConfigElement, Object
- `public java.lang.String getQualifiedName()`
  Description copied from interface: IConfigElement
  [Category] Gets the qualified name of this object. This is typically only used for category objects.
- `public ConfigGuiType getType()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets the ConfigGuiType value corresponding to the type of this property object, or CONFIG_CATEGORY if this is a
   category object.
- `public static ConfigGuiType getType(Property prop)`
- `public boolean isList()`
  Description copied from interface: IConfigElement
  [Property] Is this property object a list?
- `public boolean isListLengthFixed()`
  Description copied from interface: IConfigElement
  [Property] Does this list property have to remain a fixed length?
- `public int getMaxListLength()`
  Description copied from interface: IConfigElement
  [Property] Gets the max length of this list property, or -1 if the length is unlimited.
- `public java.lang.String getComment()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets the comment for this object. Used for the tooltip if getLanguageKey() + ".tooltip" is not defined in the
   .lang file.
- `public boolean isDefault()`
  Description copied from interface: IConfigElement
  [Property] Is this property value equal to the default value?
- `public void setToDefault()`
  Description copied from interface: IConfigElement
  [Property] Sets this property's value to the default value.
- `public boolean requiresWorldRestart()`
  Description copied from interface: IConfigElement
  [Property, Category] Whether or not this element is safe to modify while a world is running. For Categories return false if ANY properties
   in the category are modifiable while a world is running, true if all are not.
- `public boolean showInGui()`
  Description copied from interface: IConfigElement
  [Property, Category] Whether or not this element should be allowed to show on config GUIs.
- `public boolean requiresMcRestart()`
  Description copied from interface: IConfigElement
  [Property, Category] Whether or not this element requires Minecraft to be restarted when changed.
- `public java.lang.String[] getValidValues()`
  Description copied from interface: IConfigElement
  [Property] Gets a String array of valid values for this property. This is generally used for String properties to allow the user to
   select a value from a list of valid values.
- `public java.lang.String[] getValidValuesDisplay()`
  Description copied from interface: IConfigElement
  [Property] Gets a String array of the versions of this property's valid values that will display in the config GUI.
   This is generally used for String properties to allow the user to select a value from a list of valid values.
- `public java.lang.String getLanguageKey()`
  Description copied from interface: IConfigElement
  [Property, Category] Gets a language key for localization of config GUI entry names. If the same key is specified with .tooltip
   appended to the end, that key will return a localized tooltip when the mouse hovers over the property label/category button.
- `public java.lang.Object getDefault()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's default value. If this element is an array, this method should return a String
   representation of that array using Arrays.toString()
- `public java.lang.Object[] getDefaults()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's default values.
- `public java.util.regex.Pattern getValidationPattern()`
  Description copied from interface: IConfigElement
  [Property] Gets a Pattern object used in String property input validation.
- `public java.lang.Object get()`
  Description copied from interface: IConfigElement
  [Property] Gets this property value.
- `public java.lang.Object[] getList()`
  Description copied from interface: IConfigElement
  [Property] Gets this property value as a list. Generally you should be sure of whether the property is a list before calling this.
- `public void set(java.lang.Object value)`
  Description copied from interface: IConfigElement
  [Property] Sets this property's value.
- `public void set(java.lang.Object[] aVal)`
  Description copied from interface: IConfigElement
  [Property] Sets this property's value to the specified array.
- `public java.lang.Object getMinValue()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's minimum value.
- `public java.lang.Object getMaxValue()`
  Description copied from interface: IConfigElement
  [Property] Gets this property's maximum value.
- `public boolean hasSlidingControl()`
  - returns: true if this element is going to have a slider attached
- `public static IConfigElement from(java.lang.Class<?> configClass)`
  Provides a ConfigElement derived from the annotation-based config system
  - param: configClass - the class which contains the configuration
  - returns: A ConfigElement based on the described category.

## ConfigManager

*class* `net.minecraftforge.common.config.ConfigManager`

### Methods
- `public static void loadData(ASMDataTable data)`
- `public static void load(java.lang.String modid,  Config.Type type)`
  Bounces to sync().
   TODO: remove
- `public static void sync(java.lang.String modid,  Config.Type type)`
  Synchronizes configuration data between the file on disk, the Configuration object and the annotated
   mod classes containing the configuration variables.
  
   When first called, this method will try to load the configuration from disk. If this fails, because the file
   does not exist, it will be created with default values derived from the mods config classes variable default values
   and comments and ranges, as well as configuration names based on the appropriate annotations found in @Config.
  
   Note, that this method is being called by the FMLModContainer, so the mod needn't call it in init().
  
   If this method is called after the initial load, it will check whether the values in the Configuration object differ
   from the values in the corresponding variables. If they differ, it will either overwrite the variables if the Configuration
   object is marked as changed (e.g. if it was changed with the ConfigGui) or otherwise overwrite the Configuration object's values.
   It then proceeds to saving the changes to disk.
  - param: modid - the mod's ID for which the configuration shall be loaded
  - param: type - the configuration type, currently always Config.Type.INSTANCE
- `public static java.lang.Class<?>[] getModConfigClasses(java.lang.String modid)`
- `public static boolean hasConfigForMod(java.lang.String modid)`

## Configuration

*class* `net.minecraftforge.common.config.Configuration`

This class offers advanced configurations capabilities, allowing to provide
 various categories for configuration variables.

### Fields
- `public static final java.lang.String CATEGORY_GENERAL` (= "general")
- `public static final java.lang.String CATEGORY_CLIENT` (= "client")
- `public static final java.lang.String ALLOWED_CHARS` (= "._-")
- `public static final java.lang.String DEFAULT_ENCODING` (= "UTF-8")
- `public static final java.lang.String CATEGORY_SPLITTER` (= ".")
- `public static final java.lang.String NEW_LINE`
- `public static final java.lang.String COMMENT_SEPARATOR` (= "##########################################################################################################")
- `public static final CharMatcher allowedProperties`
- `public java.lang.String defaultEncoding`
- `public boolean isChild`

### Methods
- `public java.lang.String toString()`
- `public java.lang.String getDefinedConfigVersion()`
- `public java.lang.String getLoadedConfigVersion()`
- `public Property get(java.lang.String category,  java.lang.String key,  boolean defaultValue)`
  Gets a boolean Property object without a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - returns: a boolean Property object without a comment
- `public Property get(java.lang.String category,  java.lang.String key,  boolean defaultValue,  java.lang.String comment)`
  Gets a boolean Property object with a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - returns: a boolean Property object without a comment
- `public Property get(java.lang.String category,  java.lang.String key,  boolean[] defaultValues)`
  Gets a boolean array Property without a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - returns: a boolean array Property without a comment using these defaults: isListLengthFixed = false, maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  boolean[] defaultValues,  java.lang.String comment)`
  Gets a boolean array Property with a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - returns: a boolean array Property with a comment using these defaults: isListLengthFixed = false, maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  boolean[] defaultValues,  java.lang.String comment,  boolean isListLengthFixed,  int maxListLength)`
  Gets a boolean array Property with all settings defined.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: isListLengthFixed - boolean for whether this array is required to be a specific length (defined by the default value array
 length or maxListLength)
  - param: maxListLength - the maximum length of this array, use -1 for no max length
  - returns: a boolean array Property with all settings defined
- `public Property get(java.lang.String category,  java.lang.String key,  int defaultValue)`
  Gets an integer Property object without a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - returns: an integer Property object with default bounds of Integer.MIN_VALUE and Integer.MAX_VALUE
- `public Property get(java.lang.String category,  java.lang.String key,  int defaultValue,  java.lang.String comment)`
  Gets an integer Property object with a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - returns: an integer Property object with default bounds of Integer.MIN_VALUE and Integer.MAX_VALUE
- `public Property get(java.lang.String category,  java.lang.String key,  int defaultValue,  java.lang.String comment,  int minValue,  int maxValue)`
  Gets an integer Property object with the defined comment, minimum and maximum bounds.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - param: minValue - minimum boundary
  - param: maxValue - maximum boundary
  - returns: an integer Property object with the defined comment, minimum and maximum bounds
- `public Property get(java.lang.String category,  java.lang.String key,  int[] defaultValues)`
  Gets an integer array Property object without a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - returns: an integer array Property object with default bounds of Integer.MIN_VALUE and Integer.MAX_VALUE, isListLengthFixed = false,
 maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  int[] defaultValues,  java.lang.String comment)`
  Gets an integer array Property object with a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - returns: an integer array Property object with default bounds of Integer.MIN_VALUE and Integer.MAX_VALUE, isListLengthFixed = false,
 maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  int[] defaultValues,  java.lang.String comment,  int minValue,  int maxValue)`
  Gets an integer array Property object with the defined comment, minimum and maximum bounds.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: minValue - minimum boundary
  - param: maxValue - maximum boundary
  - returns: an integer array Property object with the defined comment, minimum and maximum bounds, isListLengthFixed
 = false, maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  int[] defaultValues,  java.lang.String comment,  int minValue,  int maxValue,  boolean isListLengthFixed,  int maxListLength)`
  Gets an integer array Property object with all settings defined.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: minValue - minimum boundary
  - param: maxValue - maximum boundary
  - param: isListLengthFixed - boolean for whether this array is required to be a specific length (defined by the default value array
 length or maxListLength)
  - param: maxListLength - the maximum length of this array, use -1 for no max length
  - returns: an integer array Property object with all settings defined
- `public Property get(java.lang.String category,  java.lang.String key,  double defaultValue)`
  Gets a double Property object without a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - returns: a double Property object with default bounds of Double.MIN_VALUE and Double.MAX_VALUE
- `public Property get(java.lang.String category,  java.lang.String key,  double defaultValue,  java.lang.String comment)`
  Gets a double Property object with a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - returns: a double Property object with default bounds of Double.MIN_VALUE and Double.MAX_VALUE
- `public Property get(java.lang.String category,  java.lang.String key,  double defaultValue,  java.lang.String comment,  double minValue,  double maxValue)`
  Gets a double Property object with the defined comment, minimum and maximum bounds
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - param: minValue - minimum boundary
  - param: maxValue - maximum boundary
  - returns: a double Property object with the defined comment, minimum and maximum bounds
- `public Property get(java.lang.String category,  java.lang.String key,  double[] defaultValues)`
  Gets a double array Property object without a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - returns: a double array Property object with default bounds of Double.MIN_VALUE and Double.MAX_VALUE, isListLengthFixed = false,
 maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  double[] defaultValues,  java.lang.String comment)`
  Gets a double array Property object without a comment using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - returns: a double array Property object with default bounds of Double.MIN_VALUE and Double.MAX_VALUE, isListLengthFixed = false,
 maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  double[] defaultValues,  java.lang.String comment,  double minValue,  double maxValue)`
  Gets a double array Property object with the defined comment, minimum and maximum bounds.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: minValue - minimum boundary
  - param: maxValue - maximum boundary
  - returns: a double array Property object with the defined comment, minimum and maximum bounds, isListLengthFixed =
 false, maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  double[] defaultValues,  java.lang.String comment,  double minValue,  double maxValue,  boolean isListLengthFixed,  int maxListLength)`
  Gets a double array Property object with all settings defined.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: minValue - minimum boundary
  - param: maxValue - maximum boundary
  - param: isListLengthFixed - boolean for whether this array is required to be a specific length (defined by the default value array
 length or maxListLength)
  - param: maxListLength - the maximum length of this array, use -1 for no max length
  - returns: a double array Property object with all settings defined
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String defaultValue)`
  Gets a string Property without a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - returns: a string Property with validationPattern = null, validValues = null
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String defaultValue,  java.lang.String comment)`
  Gets a string Property with a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - returns: a string Property with validationPattern = null, validValues = null
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String defaultValue,  java.lang.String comment,  java.util.regex.Pattern validationPattern)`
  Gets a string Property with a comment using the defined validationPattern and otherwise default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - param: validationPattern - a Pattern object for input validation
  - returns: a string Property with the defined validationPattern, validValues = null
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String[] validValues)`
  Gets a string Property with a comment using the defined validValues array and otherwise default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - param: validValues - an array of valid values that this Property can be set to. If an array is provided the Config GUI control will be
 a value cycle button.
  - returns: a string Property with the defined validValues array, validationPattern = null
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String[] validValues,  java.lang.String[] validValuesDisplay)`
  Gets a string Property with a comment using the defined validValues array and otherwise default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - param: validValues - an array of valid values that this Property can be set to. If an array is provided the Config GUI control will be
 a value cycle button.
  - param: validValuesDisplay - an array of the config GUI display versions of the valid values that this Property can be set to.
  - returns: a string Property with the defined validValues array, validationPattern = null
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String[] defaultValues)`
  Gets a string array Property without a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - returns: a string array Property with validationPattern = null, isListLengthFixed = false, maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String[] defaultValues,  java.lang.String comment)`
  Gets a string array Property with a comment using the default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - returns: a string array Property with validationPattern = null, isListLengthFixed = false, maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String[] defaultValues,  java.lang.String comment,  java.util.regex.Pattern validationPattern)`
  Gets a string array Property with a comment using the defined validationPattern and otherwise default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: validationPattern - a Pattern object for input validation
  - returns: a string array Property with the defined validationPattern, isListLengthFixed = false, maxListLength = -1
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String[] defaultValues,  java.lang.String comment,  boolean isListLengthFixed,  int maxListLength,  java.util.regex.Pattern validationPattern)`
  Gets a string array Property with a comment with all settings defined.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: isListLengthFixed - boolean for whether this array is required to be a specific length (defined by the default value array
 length or maxListLength)
  - param: maxListLength - the maximum length of this array, use -1 for no max length
  - param: validationPattern - a Pattern object for input validation
  - returns: a string array Property with a comment with all settings defined
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String defaultValue,  java.lang.String comment,  Property.Type type)`
  Gets a Property object of the specified type using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValue - the default value
  - param: comment - a String comment
  - param: type - a Property.Type enum value
  - returns: a Property object of the specified type using default settings
- `public Property get(java.lang.String category,  java.lang.String key,  java.lang.String[] defaultValues,  java.lang.String comment,  Property.Type type)`
  Gets a list (array) Property object of the specified type using default settings.
  - param: category - the config category
  - param: key - the Property key value
  - param: defaultValues - an array containing the default values
  - param: comment - a String comment
  - param: type - a Property.Type enum value
  - returns: a list (array) Property object of the specified type using default settings
- `public boolean hasCategory(java.lang.String category)`
- `public boolean hasKey(java.lang.String category,  java.lang.String key)`
- `public void load()`
- `public void save()`
- `public ConfigCategory getCategory(java.lang.String category)`
- `public void removeCategory(ConfigCategory category)`
- `public Configuration setCategoryComment(java.lang.String category,  java.lang.String comment)`
  Adds a comment to the specified ConfigCategory object
  - param: category - the config category
  - param: comment - a String comment
- `public void addCustomCategoryComment(java.lang.String category,  java.lang.String comment)`
- `public Configuration setCategoryLanguageKey(java.lang.String category,  java.lang.String langKey)`
  Adds a language key to the specified ConfigCategory object
  - param: category - the config category
  - param: langKey - a language key string such as configcategory.general
- `public Configuration setCategoryConfigEntryClass(java.lang.String category,  java.lang.Class<? extends GuiConfigEntries.IConfigEntry> clazz)`
  Sets the custom IConfigEntry class that should be used in place of the standard entry class (which is just a button that
   navigates into the category). This class MUST provide a constructor with the following parameter types: GuiConfig (the parent
   GuiConfig screen will be provided), GuiConfigEntries (the parent GuiConfigEntries will be provided), IConfigElement
   (the IConfigElement for this Property will be provided).
- `public Configuration setCategoryRequiresWorldRestart(java.lang.String category,  boolean requiresWorldRestart)`
  Sets the flag for whether or not this category can be edited while a world is running. Care should be taken to ensure
   that only properties that are truly dynamic can be changed from the in-game options menu. Only set this flag to
   true if all child properties/categories are unable to be modified while a world is running.
- `public Configuration setCategoryRequiresMcRestart(java.lang.String category,  boolean requiresMcRestart)`
  Sets whether or not this ConfigCategory requires Minecraft to be restarted when changed.
   Defaults to false. Only set this flag to true if ALL child properties/categories require
   Minecraft to be restarted when changed. Setting this flag will also prevent modification
   of the child properties/categories while a world is running.
- `public Configuration setCategoryPropertyOrder(java.lang.String category,  java.util.List<java.lang.String> propOrder)`
  Sets the order that direct child properties of this config category will be written to the config file and will be displayed in
   config GUIs.
- `public static void enableGlobalConfig()`
- `public boolean hasChanged()`
- `public java.util.Set<java.lang.String> getCategoryNames()`
- `public boolean renameProperty(java.lang.String category,  java.lang.String oldPropName,  java.lang.String newPropName)`
  Renames a property in a given category.
  - param: category - the category in which the property resides
  - param: oldPropName - the existing property name
  - param: newPropName - the new property name
  - returns: true if the category and property exist, false otherwise
- `public boolean moveProperty(java.lang.String oldCategory,  java.lang.String propName,  java.lang.String newCategory)`
  Moves a property from one category to another.
  - param: oldCategory - the category the property currently resides in
  - param: propName - the name of the property to move
  - param: newCategory - the category the property should be moved to
  - returns: true if the old category and property exist, false otherwise
- `public void copyCategoryProps(Configuration fromConfig,  java.lang.String[] ctgys)`
  Copies property objects from another Configuration object to this one using the list of category names. Properties that only exist in the
   "from" object are ignored. Pass null for the ctgys array to include all categories.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - returns: The value of the new string property.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String langKey)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new string property.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment,  java.util.regex.Pattern pattern)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - returns: The value of the new string property.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String langKey,  java.util.regex.Pattern pattern)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new string property.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String[] validValues)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: validValues - A list of valid values that this property can be set to.
  - returns: The value of the new string property.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String[] validValues,  java.lang.String[] validValuesDisplay)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: validValues - A list of valid values that this property can be set to.
  - param: validValuesDisplay - an array of the config GUI display versions of the valid values that this Property can be set to.
  - returns: The value of the new string property.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String[] validValues,  java.lang.String langKey)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: validValues - A list of valid values that this property can be set to.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new string property.
- `public java.lang.String getString(java.lang.String name,  java.lang.String category,  java.lang.String defaultValue,  java.lang.String comment,  java.lang.String[] validValues,  java.lang.String[] validValuesDisplay,  java.lang.String langKey)`
  Creates a string property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: validValues - A list of valid values that this property can be set to.
  - param: validValuesDisplay - an array of the config GUI display versions of the valid values that this Property can be set to.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new string property.
- `public java.lang.String[] getStringList(java.lang.String name,  java.lang.String category,  java.lang.String[] defaultValues,  java.lang.String comment)`
  Creates a string list property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValues - Default values of the property.
  - param: comment - A brief description what the property does.
  - returns: The value of the new string property.
- `public java.lang.String[] getStringList(java.lang.String name,  java.lang.String category,  java.lang.String[] defaultValue,  java.lang.String comment,  java.lang.String[] validValues)`
  Creates a string list property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - returns: The value of the new string property.
- `public java.lang.String[] getStringList(java.lang.String name,  java.lang.String category,  java.lang.String[] defaultValue,  java.lang.String comment,  java.lang.String[] validValues,  java.lang.String[] validValuesDisplay)`
  Creates a string list property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: validValues - A list of valid values that this property can be set to.
  - param: validValuesDisplay - an array of the config GUI display versions of the valid values that this Property can be set to.
  - returns: The value of the new string property.
- `public java.lang.String[] getStringList(java.lang.String name,  java.lang.String category,  java.lang.String[] defaultValue,  java.lang.String comment,  java.lang.String[] validValues,  java.lang.String langKey)`
  Creates a string list property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: validValues - A list of valid values that this property can be set to.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new string property.
- `public java.lang.String[] getStringList(java.lang.String name,  java.lang.String category,  java.lang.String[] defaultValue,  java.lang.String comment,  java.lang.String[] validValues,  java.lang.String[] validValuesDisplay,  java.lang.String langKey)`
  Creates a string list property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: validValues - A list of valid values that this property can be set to.
  - param: validValuesDisplay - an array of the config GUI display versions of the valid values that this Property can be set to.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new string property.
- `public boolean getBoolean(java.lang.String name,  java.lang.String category,  boolean defaultValue,  java.lang.String comment)`
  Creates a boolean property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - returns: The value of the new boolean property.
- `public boolean getBoolean(java.lang.String name,  java.lang.String category,  boolean defaultValue,  java.lang.String comment,  java.lang.String langKey)`
  Creates a boolean property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: comment - A brief description what the property does.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new boolean property.
- `public int getInt(java.lang.String name,  java.lang.String category,  int defaultValue,  int minValue,  int maxValue,  java.lang.String comment)`
  Creates a integer property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: minValue - Minimum value of the property.
  - param: maxValue - Maximum value of the property.
  - param: comment - A brief description what the property does.
  - returns: The value of the new integer property.
- `public int getInt(java.lang.String name,  java.lang.String category,  int defaultValue,  int minValue,  int maxValue,  java.lang.String comment,  java.lang.String langKey)`
  Creates a integer property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: minValue - Minimum value of the property.
  - param: maxValue - Maximum value of the property.
  - param: comment - A brief description what the property does.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new integer property.
- `public float getFloat(java.lang.String name,  java.lang.String category,  float defaultValue,  float minValue,  float maxValue,  java.lang.String comment)`
  Creates a float property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: minValue - Minimum value of the property.
  - param: maxValue - Maximum value of the property.
  - param: comment - A brief description what the property does.
  - returns: The value of the new float property.
- `public float getFloat(java.lang.String name,  java.lang.String category,  float defaultValue,  float minValue,  float maxValue,  java.lang.String comment,  java.lang.String langKey)`
  Creates a float property.
  - param: name - Name of the property.
  - param: category - Category of the property.
  - param: defaultValue - Default value of the property.
  - param: minValue - Minimum value of the property.
  - param: maxValue - Maximum value of the property.
  - param: comment - A brief description what the property does.
  - param: langKey - A language key used for localization of GUIs
  - returns: The value of the new float property.
- `public java.io.File getConfigFile()`

## Configuration.UnicodeInputStreamReader

*class* `net.minecraftforge.common.config.Configuration.UnicodeInputStreamReader`

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, java.lang.Readable

Enclosing class: Configuration

### Inherited fields
- from `java.io.Reader`: `lock`

### Methods
- `public java.lang.String getEncoding()`
- `public int read(char[] cbuf,  int off,  int len)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void close()  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `java.io.Reader`: `mark`, `markSupported`, `read`, `read`, `read`, `ready`, `reset`, `skip`

## FieldWrapper

*class* `net.minecraftforge.common.config.FieldWrapper`

All Implemented Interfaces: IFieldWrapper

### Fields
- `protected java.lang.String category`
- `protected java.lang.String name`
- `protected java.lang.reflect.Field field`
- `protected java.lang.Object instance`

### Methods
- `public static IFieldWrapper get(java.lang.Object instance,  java.lang.reflect.Field field,  java.lang.String category)`
- `public static boolean hasWrapperFor(java.lang.reflect.Field field)`

### Inherited methods
- from `net.minecraftforge.common.config.IFieldWrapper`: `getCategory`, `getKeys`, `getTypeAdapter`, `getValue`, `handlesKey`, `hasKey`, `setupConfiguration`, `setupConfiguration`, `setValue`

## FieldWrapper.BeanEntry

*class* `net.minecraftforge.common.config.FieldWrapper.BeanEntry`

All Implemented Interfaces: java.util.Map.Entry<K, V>

Enclosing class: FieldWrapper

### Methods
- `public K getKey()`
- `public V getValue()`
- `public V setValue(V value)`

### Inherited methods
- from `java.util.Map.Entry`: `comparingByKey`, `comparingByKey`, `comparingByValue`, `comparingByValue`, `equals`, `hashCode`

## IFieldWrapper

*interface* `net.minecraftforge.common.config.IFieldWrapper`

The objects are expected to get their wrapped field, the owning class, instance and category string on initialization.
 In general: The key is the fully qualified property name, where each subcategory is appended with a dot.
 i.e: general.map.isPresent

### Methods
- `net.minecraftforge.common.config.ITypeAdapter getTypeAdapter()`
  - returns: The type adapter to serialize the values returned by getValue. Null if non-primitive.
- `java.lang.String[] getKeys()`
  - returns: a list of fully qualified property keys handled by this field
- `java.lang.Object getValue(java.lang.String key)`
  - param: key - the fully qualified property key
  - returns: the value the wrapped field associates with the given key
- `void setValue(java.lang.String key,  java.lang.Object value)`
  - param: key - the fully qualified property key
  - param: value - the target value of the property associated with the key
- `boolean hasKey(java.lang.String key)`
  - param: key - a fully qualified property key
  - returns: true if the wrapped field contains a property associated with the given key
- `boolean handlesKey(java.lang.String key)`
  - param: key - a fully qualified property key
  - returns: true if the wrapped field can save information associated with the given key, false otherwise
- `@Deprecated void setupConfiguration(Configuration cfg,  java.lang.String desc,  java.lang.String langKey,  boolean reqMCRestart,  boolean reqWorldRestart)` (deprecated)
  Deprecated.
- `default void setupConfiguration(Configuration cfg,  java.lang.String desc,  java.lang.String langKey,  boolean reqMCRestart,  boolean reqWorldRestart,  boolean hasSlidingControl)`
  - param: cfg - The configuration object holding the properties
  - param: desc - The properties description
  - param: langKey - The languageKey of the property, used in GUI
  - param: reqMCRestart - True, if a change in this property requires a restart of Minecraft
  - param: reqWorldRestart - True, if the world needs to be reloaded after changes to this property
  - param: hasSlidingControl - true if the property is going to have a slider control attached in the configuration UI;
 works in conjunction with Config.RangeInt and Config.RangeDouble
- `java.lang.String getCategory()`
  i.e. general.map in the example above
  - returns: the category name in which the entries should be saved. This includes the parent categories

## Property

*class* `net.minecraftforge.common.config.Property`

### Methods
- `public java.lang.String getComment()`
- `public void setComment(java.lang.String comment)`
- `public boolean isDefault()`
  Returns whether or not this Property is defaulted.
  - returns: true if the current value(s) is(are) deeply equal to the default value(s)
- `public Property setToDefault()`
  Sets the current value(s) of this Property to the default value(s).
- `public java.lang.String getDefault()`
  Gets the raw String default value of this Property. Check for isList() == false first.
  - returns: the default value String
- `public java.lang.String[] getDefaults()`
  Gets the raw String[] default values of this Property. Check for isList() == true first.
  - returns: the default values String[]
- `public Property setRequiresWorldRestart(boolean requiresWorldRestart)`
  Sets the flag for whether or not this Property can be edited while a world is running. Care should be taken to ensure
   that only properties that are truly dynamic can be changed from the in-game options menu. When set to false the Property will be
   editable from both the main menu Mods list config screen and the in-game Mod Options config screen. When set to true the Property
   will only be editable from the main menu Mods list config screen.
- `public boolean requiresWorldRestart()`
  Returns whether or not this Property is able to be edited while a world is running using the in-game Mod Options screen
   as well as the Mods list screen, or only from the Mods list screen. Setting this flag to true will disable editing of
   this property while a world is running.
- `public Property setShowInGui(boolean showInGui)`
  Sets whether or not this Property should be allowed to show on config GUIs.
   Defaults to true.
- `public boolean showInGui()`
  Gets whether or not this Property should be allowed to show on config GUIs.
   Defaults to true unless set to false.
- `public Property setRequiresMcRestart(boolean requiresMcRestart)`
  Sets whether or not this Property requires Minecraft to be restarted when changed.
   Defaults to false. Setting this flag to true will also disable editing of
   this property while a world is running.
- `public boolean requiresMcRestart()`
  Gets whether or not this Property requires Minecraft to be restarted when changed.
   Defaults to false unless set to true.
- `public Property setMaxListLength(int max)`
  Sets the maximum length of this list/array Property. Only important if isList() == true. If the current values array or default
   values array is longer than the new maximum it will be resized. If calling both this method and setIsListLengthFixed(true), this
   method should be called afterwards (but is not required).
- `public int getMaxListLength()`
  Gets the maximum length of this list/array Property. Only important if isList() == true.
- `public Property setIsListLengthFixed(boolean isListLengthFixed)`
  Sets the flag for whether this list/array Property has a fixed length. Only important if isList() == true. If calling both this
   method and setMaxListLength(), this method should be called first (but is not required).
- `public boolean isListLengthFixed()`
  Returns whether or not this list/array has a fixed length. Only important if isList() == true.
- `public Property setConfigEntryClass(java.lang.Class<? extends GuiConfigEntries.IConfigEntry> clazz)`
  Sets a custom IConfigEntry class that should be used in place of the standard entry class for this Property type. This class
   MUST provide a constructor with the following parameter types: GuiConfig (the owning GuiConfig screen will be provided),
   GuiConfigEntries (the owning GuiConfigEntries will be provided), IConfigElement (the IConfigElement for this Property
   will be provided).
- `public java.lang.Class<? extends GuiConfigEntries.IConfigEntry> getConfigEntryClass()`
  Gets the custom IConfigEntry class that should be used in place of the standard entry class for this Property type, or null if
   none has been set.
  - returns: a class that implements IConfigEntry
- `public Property setArrayEntryClass(java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> clazz)`
  Sets a custom IGuiEditListEntry class that should be used in place of the standard entry class for this Property type. This class
   MUST provide a constructor with the following parameter types: GuiEditArray (the owning GuiEditArray screen will be provided),
   GuiEditArrayEntries (the parent GuiEditArrayEntries will be provided), IConfigElement (the IConfigElement for this Property
   will be provided), and Object for the property's value.
- `public java.lang.Class<? extends GuiEditArrayEntries.IArrayEntry> getArrayEntryClass()`
  Gets the custom IArrayEntry class that should be used in place of the standard entry class for this Property type, or null if
   none has been set.
  - returns: a class that implements IArrayEntry
- `public Property setValidationPattern(java.util.regex.Pattern validationPattern)`
  Sets a regex Pattern object used to validate user input for formatted String or String[] properties.
  - param: validationPattern -
- `public java.util.regex.Pattern getValidationPattern()`
  Gets the Pattern object used to validate user input for this Property.
  - returns: the user input validation Pattern object, or null if none is set
- `public Property setLanguageKey(java.lang.String langKey)`
  Sets the localization language key for this Property so that the config GUI screens are nice and pretty <3. The string languageKey +
   ".tooltip" is used for tooltips when a user hovers the mouse over a GUI property label.
  - param: langKey - a string language key such as myawesomemod.config.myPropName
- `public java.lang.String getLanguageKey()`
  Gets the language key string for this Property.
  - returns: the language key
- `public Property setDefaultValue(java.lang.String defaultValue)`
  Sets the default string value of this Property.
  - param: defaultValue - a String value
- `public Property setDefaultValues(java.lang.String[] defaultValues)`
  Sets the default String[] values of this Property.
  - param: defaultValues - an array of String values
- `public Property setDefaultValue(int defaultValue)`
  Sets the default int value of this Property.
  - param: defaultValue - an int value
- `public Property setDefaultValues(int[] defaultValues)`
  Sets the default int[] values of this Property.
  - param: defaultValues - an array of int values
- `public Property setDefaultValue(double defaultValue)`
  Sets the default double value of this Property.
  - param: defaultValue - a double value
- `public Property setDefaultValues(double[] defaultValues)`
  Sets the default double[] values of this Property
  - param: defaultValues - an array of double values
- `public Property setDefaultValue(boolean defaultValue)`
  Sets the default boolean value of this Property.
  - param: defaultValue - a boolean value
- `public Property setDefaultValues(boolean[] defaultValues)`
  Sets the default boolean[] values of this Property.
  - param: defaultValues - an array of boolean values
- `public Property setMinValue(int minValue)`
  Sets the minimum int value of this Property.
  - param: minValue - an int value
- `public Property setMaxValue(int maxValue)`
  Sets the maximum int value of this Property.
  - param: maxValue - an int value
- `public Property setMinValue(double minValue)`
  Sets the minimum double value of this Property.
  - param: minValue - a double value
- `public Property setMaxValue(double maxValue)`
  Sets the maximum double value of this Property.
  - param: maxValue - a double value
- `public java.lang.String getMinValue()`
  Gets the minimum value.
  - returns: the minimum value bound
- `public java.lang.String getMaxValue()`
  Gets the maximum value.
  - returns: the maximum value bound
- `public java.lang.String getString()`
  Returns the value in this property as it's raw string.
  - returns: current value
- `public Property setValidValues(java.lang.String[] validValues)`
  Sets the array of valid values that this String Property can be set to. When an array of valid values is defined for a Property the
   GUI control for that property will be a value cycle button.
  - param: validValues - a String array of valid values
- `public java.lang.String[] getValidValues()`
  Gets the array of valid values that this String Property can be set to, or null or empty if not defined.
  - returns: a String array of valid values
- `public Property setValidValuesDisplay(java.lang.String[] validValuesDisplay)`
  Sets the array of the config GUI display versions of the valid values that this String Property can be set to.
   When an array of valid values is defined for a Property the GUI control for that property will be a value cycle button.
  - param: validValueAliases - a String array of the aliases of valid values
- `public java.lang.String[] getValidValuesDisplay()`
  Gets the array of the config GUI display versions of the valid values that this String Property can be set to, or null or empty if not defined.
  - returns: a String array of the aliases of the valid values
- `public int getInt()`
  Returns the value in this property as an integer,
   if the value is not a valid integer, it will return the initially provided default.
  - returns: The value
- `public int getInt(int _default)`
  Returns the value in this property as an integer,
   if the value is not a valid integer, it will return the
   provided default.
  - param: _default - The default to provide if the current value is not a valid integer
  - returns: The value
- `public boolean isIntValue()`
  Checks if the current value stored in this property can be converted to an integer.
  - returns: True if the type of the Property is an Integer
- `public long getLong()`
  Returns the value in this property as a long,
   if the value is not a valid long, it will return the initially provided default.
  - returns: The value
- `public long getLong(long _default)`
  Returns the value in this property as a long,
   if the value is not a valid long, it will return the
   provided default.
  - param: _default - The default to provide if the current value is not a validlong
  - returns: The value
- `public boolean isLongValue()`
  Checks if the current value stored in this property can be converted to a long.
  - returns: True if the type of the Property is an Long
- `public boolean getBoolean(boolean _default)`
  Returns the value in this property as a boolean,
   if the value is not a valid boolean, it will return the
   provided default.
  - param: _default - The default to provide
  - returns: The value as a boolean, or the default
- `public boolean getBoolean()`
  Returns the value in this property as a boolean, if the value is not a valid boolean, it will return the provided default.
  - returns: The value as a boolean, or the default
- `public boolean isBooleanValue()`
  Checks if the current value held by this property is a valid boolean value.
  - returns: True if it is a boolean value
- `public boolean isDoubleValue()`
  Checks if the current value held by this property is a valid double value.
  - returns: True if the value can be converted to an double
- `public double getDouble(double _default)`
  Returns the value in this property as a double,
   if the value is not a valid double, it will return the
   provided default.
  - param: _default - The default to provide if the current value is not a valid double
  - returns: The value
- `public double getDouble()`
  Returns the value in this property as a double, if the value is not a valid double, it will return the provided default.
  - returns: The value
- `public java.lang.String[] getStringList()`
- `public int[] getIntList()`
  Returns the integer value of all values that can
   be parsed in the list.
  - returns: Array of length 0 if none of the values could be parsed.
- `public boolean isIntList()`
  Checks if all of the current values stored in this property can be converted to an integer.
  - returns: True if the type of the Property is an Integer List
- `public boolean[] getBooleanList()`
  Returns the boolean value of all values that can
   be parsed in the list.
  - returns: Array of length 0 if none of the values could be parsed.
- `public boolean isBooleanList()`
  Checks if all of current values stored in this property can be converted to a boolean.
  - returns: True if it is a boolean value
- `public double[] getDoubleList()`
  Returns the double value of all values that can
   be parsed in the list.
  - returns: Array of length 0 if none of the values could be parsed.
- `public boolean isDoubleList()`
  Checks if all of the current values stored in this property can be converted to a double.
  - returns: True if the type of the Property is a double List
- `public java.lang.String getName()`
  Gets the name/key for this Property.
  - returns: the Property name
- `public void setName(java.lang.String name)`
  Sets the name/key for this Property.
  - param: name - a name
- `public boolean wasRead()`
  Determines if this config value was just created, or if it was read from the config file.
   This is useful for mods who auto-assign their blocks to determine if the ID returned is
   a configured one, or a automatically generated one.
  - returns: True if this property was loaded from the config file with a value
- `public Property.Type getType()`
  Gets the Property.Type enum value for this Property.
  - returns: the Property's type
- `public boolean isList()`
  Returns whether or not this Property is a list/array.
  - returns: true if this Property is a list/array, false otherwise
- `public boolean hasChanged()`
  Gets the changed status of this Property.
  - returns: true if this Property has changed, false otherwise
- `public Property setValue(java.lang.String value)`
  Sets the value of this Property to the provided String value.
- `public void set(java.lang.String value)`
- `public Property setValues(java.lang.String[] values)`
  Sets the values of this Property to the provided String[] values.
- `public void set(java.lang.String[] values)`
- `public Property setValue(int value)`
  Sets the value of this Property to the provided int value.
- `public Property setValue(boolean value)`
  Sets the value of this Property to the provided boolean value.
- `public Property setValue(double value)`
  Sets the value of this Property to the provided double value.
- `public Property setValues(boolean[] values)`
  Sets the values of this Property to the provided boolean[] values.
- `public void set(boolean[] values)`
- `public Property setValues(int[] values)`
  Sets the values of this Property to the provided int[] values.
- `public void set(int[] values)`
- `public Property setValues(double[] values)`
  Sets the values of this Property to the provided double[] values.
- `public void set(double[] values)`
- `public void set(int value)`
- `public void set(long value)`
- `public void set(boolean value)`
- `public void set(double value)`
- `public boolean hasSlidingControl()`
- `public void setHasSlidingControl(boolean b)`

## Property.Type

*enum* `net.minecraftforge.common.config.Property.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Property.Type>

Enclosing class: Property

### Fields
- `public static final Property.Type STRING`
- `public static final Property.Type INTEGER`
- `public static final Property.Type BOOLEAN`
- `public static final Property.Type DOUBLE`
- `public static final Property.Type COLOR`
- `public static final Property.Type MOD_ID`

### Methods
- `public static Property.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Property.Type c : Property.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Property.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static Property.Type tryParse(char id)`
- `public char getID()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
