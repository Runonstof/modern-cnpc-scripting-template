# net.minecraft.util.datafix.schemas

- [NamespacedSchema](#namespacedschema)
- [V100](#v100)
- [V102](#v102)
- [V1022](#v1022)
- [V106](#v106)
- [V107](#v107)
- [V1125](#v1125)
- [V135](#v135)
- [V143](#v143)
- [V1451](#v1451)
- [V1451_1](#v1451_1)
- [V1451_2](#v1451_2)
- [V1451_3](#v1451_3)
- [V1451_4](#v1451_4)
- [V1451_5](#v1451_5)
- [V1451_6](#v1451_6)
- [V1460](#v1460)
- [V1466](#v1466)
- [V1470](#v1470)
- [V1481](#v1481)
- [V1483](#v1483)
- [V1486](#v1486)
- [V1510](#v1510)
- [V1800](#v1800)
- [V1801](#v1801)
- [V1904](#v1904)
- [V1906](#v1906)
- [V1909](#v1909)
- [V1920](#v1920)
- [V1928](#v1928)
- [V1929](#v1929)
- [V1931](#v1931)
- [V2100](#v2100)
- [V2501](#v2501)
- [V2502](#v2502)
- [V2505](#v2505)
- [V2509](#v2509)
- [V2519](#v2519)
- [V2522](#v2522)
- [V2551](#v2551)
- [V2568](#v2568)
- [V2571](#v2571)
- [V2684](#v2684)
- [V2686](#v2686)
- [V2688](#v2688)
- [V2704](#v2704)
- [V2707](#v2707)
- [V2831](#v2831)
- [V2832](#v2832)
- [V2842](#v2842)
- [V3076](#v3076)
- [V3078](#v3078)
- [V3081](#v3081)
- [V3082](#v3082)
- [V3083](#v3083)
- [V3202](#v3202)
- [V3203](#v3203)
- [V3204](#v3204)
- [V3325](#v3325)
- [V3326](#v3326)
- [V3327](#v3327)
- [V3328](#v3328)
- [V3438](#v3438)
- [V3448](#v3448)
- [V501](#v501)
- [V700](#v700)
- [V701](#v701)
- [V702](#v702)
- [V703](#v703)
- [V704](#v704)
- [V705](#v705)
- [V808](#v808)
- [V99](#v99)
## NamespacedSchema

*class* `net.minecraft.util.datafix.schemas.NamespacedSchema`

### Fields
- `public static final com.mojang.serialization.codecs.PrimitiveCodec<String> NAMESPACED_STRING_CODEC`
- `private static final com.mojang.datafixers.types.Type<String> NAMESPACED_STRING`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public static String ensureNamespaced(String p_17312_)`
- `public static com.mojang.datafixers.types.Type<String> namespacedString()`
- `public com.mojang.datafixers.types.Type<?> getChoiceType(com.mojang.datafixers.DSL.TypeReference p_17314_,  String p_17315_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V100

*class* `net.minecraft.util.datafix.schemas.V100`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static com.mojang.datafixers.types.templates.TypeTemplate equipment(com.mojang.datafixers.schemas.Schema p_17331_)`
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_17336_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17337_,  String p_17338_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17350_)`
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17352_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17353_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17354_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V102

*class* `net.minecraft.util.datafix.schemas.V102`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17361_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17362_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17363_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V1022

*class* `net.minecraft.util.datafix.schemas.V1022`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17373_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17374_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17375_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V106

*class* `net.minecraft.util.datafix.schemas.V106`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17382_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17383_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17384_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V107

*class* `net.minecraft.util.datafix.schemas.V107`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17389_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1125

*class* `net.minecraft.util.datafix.schemas.V1125`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17398_)`
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17400_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17401_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17402_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V135

*class* `net.minecraft.util.datafix.schemas.V135`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17411_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17412_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17413_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V143

*class* `net.minecraft.util.datafix.schemas.V143`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17418_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1451

*class* `net.minecraft.util.datafix.schemas.V1451`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17425_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1451_1

*class* `net.minecraft.util.datafix.schemas.V1451_1`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17432_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17433_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17434_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V1451_2

*class* `net.minecraft.util.datafix.schemas.V1451_2`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17442_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1451_3

*class* `net.minecraft.util.datafix.schemas.V1451_3`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17472_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1451_4

*class* `net.minecraft.util.datafix.schemas.V1451_4`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17523_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17524_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17525_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V1451_5

*class* `net.minecraft.util.datafix.schemas.V1451_5`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17530_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1451_6

*class* `net.minecraft.util.datafix.schemas.V1451_6`

### Fields
- `public static final String SPECIAL_OBJECTIVE_MARKER` (= "_special")
- `protected static final com.mojang.datafixers.types.templates.Hook.HookFunction UNPACK_OBJECTIVE_ID`
- `protected static final com.mojang.datafixers.types.templates.Hook.HookFunction REPACK_OBJECTIVE_ID`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17540_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17541_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17542_)`
- `protected static Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> createCriterionTypes(com.mojang.datafixers.schemas.Schema p_181078_)`
- `public static String packNamespacedWithDot(String p_298534_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V1460

*class* `net.minecraft.util.datafix.schemas.V1460`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_17561_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17562_,  String p_17563_)`
- `protected static void registerInventory(com.mojang.datafixers.schemas.Schema p_17576_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17577_,  String p_17578_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17658_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17656_)`
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17660_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17661_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17662_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V1466

*class* `net.minecraft.util.datafix.schemas.V1466`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17694_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17695_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17696_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17692_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V1470

*class* `net.minecraft.util.datafix.schemas.V1470`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_17706_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17707_,  String p_17708_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17710_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1481

*class* `net.minecraft.util.datafix.schemas.V1481`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17715_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1483

*class* `net.minecraft.util.datafix.schemas.V1483`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17720_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1486

*class* `net.minecraft.util.datafix.schemas.V1486`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17725_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1510

*class* `net.minecraft.util.datafix.schemas.V1510`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17730_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1800

*class* `net.minecraft.util.datafix.schemas.V1800`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17744_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1801

*class* `net.minecraft.util.datafix.schemas.V1801`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17755_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1904

*class* `net.minecraft.util.datafix.schemas.V1904`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17766_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1906

*class* `net.minecraft.util.datafix.schemas.V1906`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17780_)`
- `protected static void registerInventory(com.mojang.datafixers.schemas.Schema p_17776_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17777_,  String p_17778_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1909

*class* `net.minecraft.util.datafix.schemas.V1909`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17785_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1920

*class* `net.minecraft.util.datafix.schemas.V1920`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerInventory(com.mojang.datafixers.schemas.Schema p_17792_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17793_,  String p_17794_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17796_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1928

*class* `net.minecraft.util.datafix.schemas.V1928`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static com.mojang.datafixers.types.templates.TypeTemplate equipment(com.mojang.datafixers.schemas.Schema p_17801_)`
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_17803_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17804_,  String p_17805_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17809_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1929

*class* `net.minecraft.util.datafix.schemas.V1929`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17820_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V1931

*class* `net.minecraft.util.datafix.schemas.V1931`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17831_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2100

*class* `net.minecraft.util.datafix.schemas.V2100`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_17838_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17839_,  String p_17840_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17846_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17844_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2501

*class* `net.minecraft.util.datafix.schemas.V2501`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `private static void registerFurnace(com.mojang.datafixers.schemas.Schema p_17853_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17854_,  String p_17855_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_17857_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2502

*class* `net.minecraft.util.datafix.schemas.V2502`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17868_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2505

*class* `net.minecraft.util.datafix.schemas.V2505`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17879_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2509

*class* `net.minecraft.util.datafix.schemas.V2509`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17890_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2519

*class* `net.minecraft.util.datafix.schemas.V2519`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17901_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2522

*class* `net.minecraft.util.datafix.schemas.V2522`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17942_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2551

*class* `net.minecraft.util.datafix.schemas.V2551`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_17959_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17960_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_17961_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V2568

*class* `net.minecraft.util.datafix.schemas.V2568`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17972_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2571

*class* `net.minecraft.util.datafix.schemas.V2571`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_145854_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2684

*class* `net.minecraft.util.datafix.schemas.V2684`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_216760_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_216761_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_216762_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_145859_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V2686

*class* `net.minecraft.util.datafix.schemas.V2686`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_145870_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2688

*class* `net.minecraft.util.datafix.schemas.V2688`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_145881_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2704

*class* `net.minecraft.util.datafix.schemas.V2704`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_145892_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2707

*class* `net.minecraft.util.datafix.schemas.V2707`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_145903_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V2831

*class* `net.minecraft.util.datafix.schemas.V2831`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_185213_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_185214_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_185215_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V2832

*class* `net.minecraft.util.datafix.schemas.V2832`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_185234_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_185235_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_185236_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V2842

*class* `net.minecraft.util.datafix.schemas.V2842`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_185243_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_185244_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_185245_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V3076

*class* `net.minecraft.util.datafix.schemas.V3076`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_216767_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3078

*class* `net.minecraft.util.datafix.schemas.V3078`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_216774_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_216775_,  String p_216776_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_216782_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_216780_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3081

*class* `net.minecraft.util.datafix.schemas.V3081`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_216795_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3082

*class* `net.minecraft.util.datafix.schemas.V3082`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_216803_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3083

*class* `net.minecraft.util.datafix.schemas.V3083`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_216810_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_216811_,  String p_216812_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_216814_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3202

*class* `net.minecraft.util.datafix.schemas.V3202`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_252169_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3203

*class* `net.minecraft.util.datafix.schemas.V3203`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_249141_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3204

*class* `net.minecraft.util.datafix.schemas.V3204`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_250991_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3325

*class* `net.minecraft.util.datafix.schemas.V3325`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_270629_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3326

*class* `net.minecraft.util.datafix.schemas.V3326`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_273599_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3327

*class* `net.minecraft.util.datafix.schemas.V3327`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_273248_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3328

*class* `net.minecraft.util.datafix.schemas.V3328`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_273489_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3438

*class* `net.minecraft.util.datafix.schemas.V3438`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_277667_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V3448

*class* `net.minecraft.util.datafix.schemas.V3448`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_281949_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V501

*class* `net.minecraft.util.datafix.schemas.V501`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17983_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V700

*class* `net.minecraft.util.datafix.schemas.V700`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_17994_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V701

*class* `net.minecraft.util.datafix.schemas.V701`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_18001_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18002_,  String p_18003_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_18005_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V702

*class* `net.minecraft.util.datafix.schemas.V702`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_18012_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18013_,  String p_18014_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_18016_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V703

*class* `net.minecraft.util.datafix.schemas.V703`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_18031_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V704

*class* `net.minecraft.util.datafix.schemas.V704`

### Fields
- `protected static final Map<String,String> ITEM_TO_BLOCKENTITY`
- `protected static final com.mojang.datafixers.types.templates.Hook.HookFunction ADD_NAMES`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerInventory(com.mojang.datafixers.schemas.Schema p_18044_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18045_,  String p_18046_)`
- `public com.mojang.datafixers.types.Type<?> getChoiceType(com.mojang.datafixers.DSL.TypeReference p_18060_,  String p_18061_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_18063_)`
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_18065_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18066_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18067_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V705

*class* `net.minecraft.util.datafix.schemas.V705`

### Fields
- `protected static final com.mojang.datafixers.types.templates.Hook.HookFunction ADD_NAMES`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_18083_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18084_,  String p_18085_)`
- `protected static void registerThrowableProjectile(com.mojang.datafixers.schemas.Schema p_18094_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18095_,  String p_18096_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_18148_)`
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_18150_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18151_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18152_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerBlockEntities`, `registerSimple`, `registerType`, `resolveTemplate`, `types`

## V808

*class* `net.minecraft.util.datafix.schemas.V808`

### Inherited fields
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `NAMESPACED_STRING_CODEC`
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static void registerInventory(com.mojang.datafixers.schemas.Schema p_18175_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18176_,  String p_18177_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_18179_)`

### Inherited methods
- from `net.minecraft.util.datafix.schemas.NamespacedSchema`: `ensureNamespaced`, `getChoiceType`, `namespacedString`
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerEntities`, `registerSimple`, `registerType`, `registerTypes`, `resolveTemplate`, `types`

## V99

*class* `net.minecraft.util.datafix.schemas.V99`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `static final Map<String,String> ITEM_TO_BLOCKENTITY`
- `protected static final com.mojang.datafixers.types.templates.Hook.HookFunction ADD_NAMES`

### Inherited fields
- from `com.mojang.datafixers.schemas.Schema`: `parent`, `RECURSIVE_TYPES`

### Methods
- `protected static com.mojang.datafixers.types.templates.TypeTemplate equipment(com.mojang.datafixers.schemas.Schema p_18189_)`
- `protected static void registerMob(com.mojang.datafixers.schemas.Schema p_18194_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18195_,  String p_18196_)`
- `protected static void registerThrowableProjectile(com.mojang.datafixers.schemas.Schema p_18225_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18226_,  String p_18227_)`
- `protected static void registerMinecart(com.mojang.datafixers.schemas.Schema p_18237_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18238_,  String p_18239_)`
- `protected static void registerInventory(com.mojang.datafixers.schemas.Schema p_18247_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18248_,  String p_18249_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerEntities(com.mojang.datafixers.schemas.Schema p_18305_)`
- `public Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> registerBlockEntities(com.mojang.datafixers.schemas.Schema p_18303_)`
- `public void registerTypes(com.mojang.datafixers.schemas.Schema p_18307_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18308_,  Map<String,Supplier<com.mojang.datafixers.types.templates.TypeTemplate>> p_18309_)`
- `protected static <T> T addNames(com.mojang.serialization.Dynamic<T> p_18206_,  Map<String,String> p_18207_,  String p_18208_)`

### Inherited methods
- from `com.mojang.datafixers.schemas.Schema`: `buildTypes`, `findChoiceType`, `getChoiceType`, `getParent`, `getTemplate`, `getType`, `getTypeRaw`, `getVersionKey`, `id`, `register`, `register`, `registerSimple`, `registerType`, `resolveTemplate`, `types`
