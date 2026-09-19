# net.minecraftforge.server.permission.context

- [AreaContext](#areacontext)
- [BlockPosContext](#blockposcontext)
- [Context](#context)
- [ContextKey](#contextkey)
- [ContextKeys](#contextkeys)
- [IContext](#icontext)
- [PlayerContext](#playercontext)
- [TargetContext](#targetcontext)
- [WorldContext](#worldcontext)
## AreaContext

*class* `net.minecraftforge.server.permission.context.AreaContext`

All Implemented Interfaces: IContext

### Methods
- `public <T> T get(ContextKey<T> key)`
  - param: key - Context key
  - returns: Context object
- `protected boolean covers(ContextKey<?> key)`

### Inherited methods
- from `net.minecraftforge.server.permission.context.PlayerContext`: `getPlayer`, `getWorld`
- from `net.minecraftforge.server.permission.context.Context`: `has`, `set`

## BlockPosContext

*class* `net.minecraftforge.server.permission.context.BlockPosContext`

All Implemented Interfaces: IContext

### Methods
- `public <T> T get(ContextKey<T> key)`
  - param: key - Context key
  - returns: Context object
- `protected boolean covers(ContextKey<?> key)`

### Inherited methods
- from `net.minecraftforge.server.permission.context.PlayerContext`: `getPlayer`, `getWorld`
- from `net.minecraftforge.server.permission.context.Context`: `has`, `set`

## Context

*class* `net.minecraftforge.server.permission.context.Context`

All Implemented Interfaces: IContext

### Methods
- `public World getWorld()`
  Description copied from interface: IContext
  World from where permission is requested. Can be null
- `public EntityPlayer getPlayer()`
  - returns: Player requesting permission. Can be null
- `public <T> T get(ContextKey<T> key)`
  - param: key - Context key
  - returns: Context object
- `public boolean has(ContextKey<?> key)`
  - param: key - Context key
  - returns: true if context contains this key
- `public <T> Context set(ContextKey<T> key,  T obj)`
  Sets Context object
  - param: key - Context key
  - param: obj - Context object. Can be null
  - returns: itself, for easy context chaining
- `protected boolean covers(ContextKey<?> key)`

## ContextKey

*class* `net.minecraftforge.server.permission.context.ContextKey`

### Methods
- `public static <E> ContextKey<E> create(java.lang.String id,  java.lang.Class<E> c)`
- `public java.lang.String toString()`
- `public int hashCode()`
- `public boolean equals(java.lang.Object o)`
- `public java.lang.Class<T> getTypeClass()`

## ContextKeys

*class* `net.minecraftforge.server.permission.context.ContextKeys`

Some default context keys, for easier compatibility

### Fields
- `public static final ContextKey<BlockPos> POS`
  BlockPos for interacting, breaking and other permissions
- `public static final ContextKey<Entity> TARGET`
  The entity can be anything that gets interacted with - a sheep when you try to dye it, skeleton that you attack, etc.
- `public static final ContextKey<EnumFacing> FACING`
- `public static final ContextKey<AxisAlignedBB> AREA`
- `public static final ContextKey<IBlockState> BLOCK_STATE`

## IContext

*interface* `net.minecraftforge.server.permission.context.IContext`

Use BlockPosContext or PlayerContext when possible

### Methods
- `World getWorld()`
  World from where permission is requested. Can be null
- `EntityPlayer getPlayer()`
  - returns: Player requesting permission. Can be null
- `<T> T get(ContextKey<T> key)`
  - param: key - Context key
  - returns: Context object
- `boolean has(ContextKey<?> key)`
  - param: key - Context key
  - returns: true if context contains this key

## PlayerContext

*class* `net.minecraftforge.server.permission.context.PlayerContext`

All Implemented Interfaces: IContext

### Methods
- `public World getWorld()`
  Description copied from interface: IContext
  World from where permission is requested. Can be null
- `public EntityPlayer getPlayer()`
  - returns: Player requesting permission. Can be null

### Inherited methods
- from `net.minecraftforge.server.permission.context.Context`: `covers`, `get`, `has`, `set`

## TargetContext

*class* `net.minecraftforge.server.permission.context.TargetContext`

All Implemented Interfaces: IContext

### Methods
- `public <T> T get(ContextKey<T> key)`
  - param: key - Context key
  - returns: Context object
- `protected boolean covers(ContextKey<?> key)`

### Inherited methods
- from `net.minecraftforge.server.permission.context.PlayerContext`: `getPlayer`, `getWorld`
- from `net.minecraftforge.server.permission.context.Context`: `has`, `set`

## WorldContext

*class* `net.minecraftforge.server.permission.context.WorldContext`

All Implemented Interfaces: IContext

### Methods
- `public World getWorld()`
  Description copied from interface: IContext
  World from where permission is requested. Can be null
- `public EntityPlayer getPlayer()`
  - returns: Player requesting permission. Can be null

### Inherited methods
- from `net.minecraftforge.server.permission.context.Context`: `covers`, `get`, `has`, `set`
