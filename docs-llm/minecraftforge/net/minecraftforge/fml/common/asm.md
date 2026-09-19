# net.minecraftforge.fml.common.asm

- [CapabilityTokenSubclass](#capabilitytokensubclass)
- [CapabilityTokenSubclass.Holder](#capabilitytokensubclass.holder)
- [ObjectHolderDefinalize](#objectholderdefinalize)
- [ObjectHolderDefinalize.VanillaObjectHolderData](#objectholderdefinalize.vanillaobjectholderdata)
- [RuntimeEnumExtender](#runtimeenumextender)
## CapabilityTokenSubclass

*class* `net.minecraftforge.fml.common.asm.CapabilityTokenSubclass`

Implements getType() in CapabilityToken subclasses.

 Using the class's signature to determine the generic type of TypeToken, and then implements getType() using that value.
 Example:

 new CapabilityToken<String>(){}
 Has the signature "CapabilityToken<Ljava/lang/String;>"

 Implements the method:
 public String getType() {
 return "java/lang/String";
 }

### Fields
- `private final String FUNC_NAME` (= "getType")
- `private final String FUNC_DESC` (= "()Ljava/lang/String;")
- `private final String CAP_INJECT` (= "net/minecraftforge/common/capabilities/CapabilityToken")
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> YAY`
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> NAY`

### Methods
- `public String name()`
- `public EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> handlesClass(org.objectweb.asm.Type classType,  boolean isEmpty)`
- `public int processClassWithFlags(cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase phase,  org.objectweb.asm.tree.ClassNode classNode,  org.objectweb.asm.Type classType,  String reason)`

### Inherited methods
- from `cpw.mods.modlauncher.serviceapi.ILaunchPluginService`: `addResources`, `customAuditConsumer`, `getExtension`, `handlesClass`, `initializeLaunch`, `offerResource`, `processClass`, `processClass`

## CapabilityTokenSubclass.Holder

*class* `net.minecraftforge.fml.common.asm.CapabilityTokenSubclass.Holder`

Enclosing class: CapabilityTokenSubclass

### Fields
- `String value`

## ObjectHolderDefinalize

*class* `net.minecraftforge.fml.common.asm.ObjectHolderDefinalize`

Removes the final modifier from fields with the @ObjectHolder annotation, prevents the JITer from in lining them so our runtime replacements can work.
 Will also de-finalize all fields in on class level annotations.

### Fields
- `private static final Map<String,ObjectHolderDefinalize.VanillaObjectHolderData> VANILLA_OBJECT_HOLDERS`
- `private final String OBJECT_HOLDER` (= "Lnet/minecraftforge/registries/ObjectHolder;")
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> YAY`
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> NAY`

### Methods
- `public String name()`
- `public EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> handlesClass(org.objectweb.asm.Type classType,  boolean isEmpty)`
- `private boolean hasHolder(List<org.objectweb.asm.tree.AnnotationNode> lst)`
- `private String getValue(List<org.objectweb.asm.tree.AnnotationNode> lst)`
- `public int processClassWithFlags(cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase phase,  org.objectweb.asm.tree.ClassNode classNode,  org.objectweb.asm.Type classType,  String reason)`

### Inherited methods
- from `cpw.mods.modlauncher.serviceapi.ILaunchPluginService`: `addResources`, `customAuditConsumer`, `getExtension`, `handlesClass`, `initializeLaunch`, `offerResource`, `processClass`, `processClass`

## ObjectHolderDefinalize.VanillaObjectHolderData

*record* `net.minecraftforge.fml.common.asm.ObjectHolderDefinalize.VanillaObjectHolderData`

Enclosing class: ObjectHolderDefinalize

### Fields
- `private final String holderClass`
  The field for the holderClass record component.
- `private final String registryName`
  The field for the registryName record component.
- `private final String registryType`
  The field for the registryType record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String holderClass()`
  Returns the value of the holderClass record component.
  - returns: the value of the holderClass record component
- `public String registryName()`
  Returns the value of the registryName record component.
  - returns: the value of the registryName record component
- `public String registryType()`
  Returns the value of the registryType record component.
  - returns: the value of the registryType record component

## RuntimeEnumExtender

*class* `net.minecraftforge.fml.common.asm.RuntimeEnumExtender`

Modifies specified enums to allow runtime extension by making the $VALUES field non-final and
 injecting constructor calls which are not valid in normal java code.

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final org.objectweb.asm.Type STRING`
- `private final org.objectweb.asm.Type ENUM`
- `private final org.objectweb.asm.Type MARKER_IFACE`
- `private final org.objectweb.asm.Type ARRAY_UTILS`
- `private final String ADD_DESC`
- `private final org.objectweb.asm.Type UNSAFE_HACKS`
- `private final String CLEAN_DESC`
- `private final String NAME_DESC`
- `private final String EQUALS_DESC`
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> YAY`
- `private static final EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> NAY`

### Methods
- `public String name()`
- `public EnumSet<cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase> handlesClass(org.objectweb.asm.Type classType,  boolean isEmpty)`
- `public int processClassWithFlags(cpw.mods.modlauncher.serviceapi.ILaunchPluginService.Phase phase,  org.objectweb.asm.tree.ClassNode classNode,  org.objectweb.asm.Type classType,  String reason)`

### Inherited methods
- from `cpw.mods.modlauncher.serviceapi.ILaunchPluginService`: `addResources`, `customAuditConsumer`, `getExtension`, `handlesClass`, `initializeLaunch`, `offerResource`, `processClass`, `processClass`
