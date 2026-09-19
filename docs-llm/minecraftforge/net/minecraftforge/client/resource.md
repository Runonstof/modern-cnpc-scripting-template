# net.minecraftforge.client.resource

- [IResourceType](#iresourcetype)
- [ISelectiveResourceReloadListener](#iselectiveresourcereloadlistener)
- [ReloadRequirements](#reloadrequirements)
- [SelectiveReloadStateHandler](#selectivereloadstatehandler)
- [VanillaResourceType](#vanillaresourcetype)
## IResourceType

*interface* `net.minecraftforge.client.resource.IResourceType`

Represents a generic type of reloadable resource. Used for resource reload filtering.

## ISelectiveResourceReloadListener

*interface* `net.minecraftforge.client.resource.ISelectiveResourceReloadListener`

All Superinterfaces: IResourceManagerReloadListener

### Methods
- `default void onResourceManagerReload(IResourceManager resourceManager)`
- `void onResourceManagerReload(IResourceManager resourceManager,  java.util.function.Predicate<IResourceType> resourcePredicate)`
  A version of onResourceManager that selectively chooses IResourceTypes
   to reload.
   When using this, the given predicate should be called to ensure the relevant resources should
   be reloaded at this time.
  - param: resourceManager - the resource manager being reloaded
  - param: resourcePredicate - predicate to test whether any given resource type should be reloaded

## ReloadRequirements

*class* `net.minecraftforge.client.resource.ReloadRequirements`

Holds methods to create standard predicates to select IResourceTypes that should be reloaded.

### Methods
- `public static java.util.function.Predicate<IResourceType> all()`
  Creates a reload predicate accepting all resource types.
  - returns: a predicate accepting all types
- `public static java.util.function.Predicate<IResourceType> include(IResourceType... inclusion)`
  Creates an inclusive reload predicate. Only given resource types will be loaded along with this.
  - param: inclusion - the set of resource types to be included in the reload
  - returns: an inclusion predicate based on the given types

## SelectiveReloadStateHandler

*enum* `net.minecraftforge.client.resource.SelectiveReloadStateHandler`

Handles reload parameters for selective loaders.

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SelectiveReloadStateHandler>

### Fields
- `public static final SelectiveReloadStateHandler INSTANCE`

### Methods
- `public static SelectiveReloadStateHandler[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SelectiveReloadStateHandler c : SelectiveReloadStateHandler.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SelectiveReloadStateHandler valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void beginReload(java.util.function.Predicate<IResourceType> resourcePredicate)`
  Pushes a resource type predicate for the current reload.
   Should only be called when initiating a resource reload.
   If a reload is already in progress when this is called, an exception will be thrown.
  - param: resourcePredicate - the resource requirement predicate for the current reload
- `public java.util.function.Predicate<IResourceType> get()`
  Gets the current reload resource predicate for the initiated reload.
  - returns: the active reload resource predicate, or an accepting one if none in progress
- `public void endReload()`
  Finishes the current reload and deletes the previously added reload predicate.

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## VanillaResourceType

*enum* `net.minecraftforge.client.resource.VanillaResourceType`

An enum of all IResourceTypes used by the Vanilla game. These should be used if handling vanilla-related
 resources.

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<VanillaResourceType>, IResourceType

### Fields
- `public static final VanillaResourceType MODELS`
  Used when block and item models are reloaded and rebaked. This also includes the texture-stitching from that
   phase.
- `public static final VanillaResourceType TEXTURES`
  Used when textures from the TextureManager are reloaded. Does not
   effect block or item textures on the texture atlas.
- `public static final VanillaResourceType SOUNDS`
  Used when all game sounds are reloaded.
- `public static final VanillaResourceType LANGUAGES`
  Used when the current language is reloaded.
- `public static final VanillaResourceType SHADERS`
  Used when all shaders are reloaded.

### Methods
- `public static VanillaResourceType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (VanillaResourceType c : VanillaResourceType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static VanillaResourceType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
