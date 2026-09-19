# net.minecraft.util.registry

- [IRegistry](#iregistry)
- [RegistryDefaulted](#registrydefaulted)
- [RegistryNamespaced](#registrynamespaced)
- [RegistryNamespacedDefaultedByKey](#registrynamespaceddefaultedbykey)
- [RegistrySimple](#registrysimple)
## IRegistry

*interface* `net.minecraft.util.registry.IRegistry`

All Superinterfaces: java.lang.Iterable<V>

### Methods
- `V getObject(K name)`
- `void putObject(K key,  V value)`
- `java.util.Set<K> getKeys()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## RegistryDefaulted

*class* `net.minecraft.util.registry.RegistryDefaulted`

All Implemented Interfaces: java.lang.Iterable<V>, IRegistry<K, V>

### Inherited fields
- from `net.minecraft.util.registry.RegistrySimple`: `registryObjects`

### Methods
- `public V getObject(K name)`

### Inherited methods
- from `net.minecraft.util.registry.RegistrySimple`: `containsKey`, `createUnderlyingMap`, `getKeys`, `getRandomObject`, `iterator`, `putObject`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## RegistryNamespaced

*class* `net.minecraft.util.registry.RegistryNamespaced`

All Implemented Interfaces: java.lang.Iterable<V>, IObjectIntIterable<V>, IRegistry<K, V>

### Fields
- `protected final IntIdentityHashBiMap<V> underlyingIntegerMap`
- `protected final java.util.Map<V,K> inverseObjectRegistry`

### Inherited fields
- from `net.minecraft.util.registry.RegistrySimple`: `registryObjects`

### Methods
- `public void register(int id,  K key,  V value)`
- `protected java.util.Map<K,V> createUnderlyingMap()`
- `public V getObject(K name)`
- `public K getNameForObject(V value)`
- `public boolean containsKey(K key)`
- `public int getIDForObject(V value)`
- `public V getObjectById(int id)`
- `public java.util.Iterator<V> iterator()`

### Inherited methods
- from `net.minecraft.util.registry.RegistrySimple`: `getKeys`, `getRandomObject`, `putObject`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## RegistryNamespacedDefaultedByKey

*class* `net.minecraft.util.registry.RegistryNamespacedDefaultedByKey`

All Implemented Interfaces: java.lang.Iterable<V>, IObjectIntIterable<V>, IRegistry<K, V>

### Inherited fields
- from `net.minecraft.util.registry.RegistryNamespaced`: `inverseObjectRegistry`, `underlyingIntegerMap`
- from `net.minecraft.util.registry.RegistrySimple`: `registryObjects`

### Methods
- `public void register(int id,  K key,  V value)`
- `public void validateKey()`
- `public int getIDForObject(V value)`
- `public K getNameForObject(V value)`
- `public V getObject(K name)`
- `public V getObjectById(int id)`
- `public V getRandomObject(java.util.Random random)`

### Inherited methods
- from `net.minecraft.util.registry.RegistryNamespaced`: `containsKey`, `createUnderlyingMap`, `iterator`
- from `net.minecraft.util.registry.RegistrySimple`: `getKeys`, `putObject`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## RegistrySimple

*class* `net.minecraft.util.registry.RegistrySimple`

All Implemented Interfaces: java.lang.Iterable<V>, IRegistry<K, V>

### Fields
- `protected final java.util.Map<K,V> registryObjects`

### Methods
- `protected java.util.Map<K,V> createUnderlyingMap()`
- `public V getObject(K name)`
- `public void putObject(K key,  V value)`
- `public java.util.Set<K> getKeys()`
- `public V getRandomObject(java.util.Random random)`
- `public boolean containsKey(K key)`
- `public java.util.Iterator<V> iterator()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`
