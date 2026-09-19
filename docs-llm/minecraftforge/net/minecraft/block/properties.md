# net.minecraft.block.properties

- [IProperty>](#iproperty)
- [PropertyBool](#propertybool)
- [PropertyDirection](#propertydirection)
- [PropertyEnum & IStringSerializable>](#propertyenum-istringserializable)
- [PropertyHelper>](#propertyhelper)
- [PropertyInteger](#propertyinteger)
## IProperty>

*interface* `net.minecraft.block.properties.IProperty>`

### Methods
- `java.lang.String getName()`
- `java.util.Collection<T> getAllowedValues()`
- `java.lang.Class<T> getValueClass()`
- `<any> parseValue(java.lang.String value)`
- `java.lang.String getName(T value)`

## PropertyBool

*class* `net.minecraft.block.properties.PropertyBool`

All Implemented Interfaces: IProperty<java.lang.Boolean>

### Methods
- `public java.util.Collection<java.lang.Boolean> getAllowedValues()`
- `public static PropertyBool create(java.lang.String name)`
- `public <any> parseValue(java.lang.String value)`
- `public java.lang.String getName(java.lang.Boolean value)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

### Inherited methods
- from `net.minecraft.block.properties.PropertyHelper`: `getName`, `getValueClass`, `toString`

## PropertyDirection

*class* `net.minecraft.block.properties.PropertyDirection`

All Implemented Interfaces: IProperty<EnumFacing>

### Methods
- `public static PropertyDirection create(java.lang.String name)`
- `public static PropertyDirection create(java.lang.String name,  <any> filter)`

### Inherited methods
- from `net.minecraft.block.properties.PropertyEnum`: `create`, `create`, `create`, `equals`, `getAllowedValues`, `getName`, `hashCode`, `parseValue`
- from `net.minecraft.block.properties.PropertyHelper`: `getName`, `getValueClass`, `toString`

## PropertyEnum & IStringSerializable>

*class* `net.minecraft.block.properties.PropertyEnum & IStringSerializable>`

All Implemented Interfaces: IProperty<T>

### Methods
- `public java.util.Collection<T> getAllowedValues()`
- `public <any> parseValue(java.lang.String value)`
- `public java.lang.String getName(T value)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public static <T extends java.lang.Enum<T> & IStringSerializable> PropertyEnum<T> create(java.lang.String name,  java.lang.Class<T> clazz)`
- `public static <T extends java.lang.Enum<T> & IStringSerializable> PropertyEnum<T> create(java.lang.String name,  java.lang.Class<T> clazz,  <any> filter)`
- `public static <T extends java.lang.Enum<T> & IStringSerializable> PropertyEnum<T> create(java.lang.String name,  java.lang.Class<T> clazz,  T... values)`

### Inherited methods
- from `net.minecraft.block.properties.PropertyHelper`: `getName`, `getValueClass`, `toString`

## PropertyHelper>

*class* `net.minecraft.block.properties.PropertyHelper>`

All Implemented Interfaces: IProperty<T>

### Methods
- `public java.lang.String getName()`
- `public java.lang.Class<T> getValueClass()`
- `public java.lang.String toString()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

### Inherited methods
- from `net.minecraft.block.properties.IProperty`: `getAllowedValues`, `getName`, `parseValue`

## PropertyInteger

*class* `net.minecraft.block.properties.PropertyInteger`

All Implemented Interfaces: IProperty<java.lang.Integer>

### Methods
- `public java.util.Collection<java.lang.Integer> getAllowedValues()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public static PropertyInteger create(java.lang.String name,  int min,  int max)`
- `public <any> parseValue(java.lang.String value)`
- `public java.lang.String getName(java.lang.Integer value)`

### Inherited methods
- from `net.minecraft.block.properties.PropertyHelper`: `getName`, `getValueClass`, `toString`
