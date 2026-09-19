# net.minecraftforge.common.model.animation

- [AnimationStateMachine](#animationstatemachine)
- [CapabilityAnimation](#capabilityanimation)
- [CapabilityAnimation.DefaultItemAnimationCapabilityProvider](#capabilityanimation.defaultitemanimationcapabilityprovider)
- [Clips](#clips)
- [Clips.ClipReference](#clips.clipreference)
- [Clips.CommonClipTypeAdapterFactory](#clips.commoncliptypeadapterfactory)
- [Clips.IdentityClip](#clips.identityclip)
- [Clips.ModelClip](#clips.modelclip)
- [Clips.SlerpClip](#clips.slerpclip)
- [Clips.TimeClip](#clips.timeclip)
- [Clips.TriggerClip](#clips.triggerclip)
- [IAnimationStateMachine](#ianimationstatemachine)
- [IClip](#iclip)
- [IJoint](#ijoint)
- [IJointClip](#ijointclip)
- [JointClips](#jointclips)
- [JointClips.IdentityJointClip](#jointclips.identityjointclip)
- [JointClips.NodeJointClip](#jointclips.nodejointclip)
## AnimationStateMachine

*class* `net.minecraftforge.common.model.animation.AnimationStateMachine`

All Implemented Interfaces: IAnimationStateMachine

### Methods
- `public <any> apply(float time)`
  Description copied from interface: IAnimationStateMachine
  Sample the state and events at the current time.
   Event iterable will contain all events that happened from the last invocation of this method, from most to least recent.
   Event offset is relative to the previous event, and for the first event it's relative to the current time.
- `public void transition(java.lang.String newState)`
  Description copied from interface: IAnimationStateMachine
  Transition to a new state.
- `public java.lang.String currentState()`
  Description copied from interface: IAnimationStateMachine
  Get current state name.
- `public void shouldHandleSpecialEvents(boolean value)`
  Description copied from interface: IAnimationStateMachine
  Set to true if the machine should handle special events that come from the clips (they start with '!').
   Right now only implemented event is "!transition:".
   Default value is true.
- `public static IAnimationStateMachine load(IResourceManager manager,  ResourceLocation location,  <any> customParameters)`
  Load a new instance if AnimationStateMachine at specified location, with specified custom parameters.
- `public static AnimationStateMachine getMissing()`

## CapabilityAnimation

*class* `net.minecraftforge.common.model.animation.CapabilityAnimation`

### Fields
- `public static Capability<IAnimationStateMachine> ANIMATION_CAPABILITY`

### Methods
- `public static void register()`

## CapabilityAnimation.DefaultItemAnimationCapabilityProvider

*class* `net.minecraftforge.common.model.animation.CapabilityAnimation.DefaultItemAnimationCapabilityProvider`

All Implemented Interfaces: ICapabilityProvider

Enclosing class: CapabilityAnimation

### Methods
- `public boolean hasCapability(Capability<?> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Determines if this object has support for the capability in question on the specific side.
   The return value of this MIGHT change during runtime if this object gains or loses support
   for a capability. It is not required to call this function before calling
   ICapabilityProvider.getCapability(Capability, EnumFacing).
  
   Basically, this method functions analogously to Map.containsKey(Object).
  
   Example:
   A Pipe getting a cover placed on one side causing it lose the Inventory attachment function for that side.
  
   This is a light weight version of getCapability, intended for metadata uses.
  - param: capability - The capability to check
  - param: facing - The Side to check from:
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: True if this object supports the capability. If true, then ICapabilityProvider.getCapability(Capability, EnumFacing)
 must not return null.
- `public <T> T getCapability(Capability<T> capability,  EnumFacing facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the handler for the capability requested on the specific side.
  
   The return value CAN be null if the object does not support the capability.
   The return value CAN be the same for multiple faces.
  
   Basically, this method functions analogously to Map.get(Object).
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested capability. Must NOT be null when ICapabilityProvider.hasCapability(Capability, EnumFacing)
 would return true.

## Clips

*class* `net.minecraftforge.common.model.animation.Clips`

Various implementations of IClip, and utility methods.

### Methods
- `public static IClip getModelClipNode(ResourceLocation modelLocation,  java.lang.String clipName)`
  Retrieves the clip from the model.
- `public static <any> apply(IClip clip,  float lastPollTime,  float time)`
  IModelState wrapper for a Clip, sampled at specified time.

## Clips.ClipReference

*class* `net.minecraftforge.common.model.animation.Clips.ClipReference`

Reference to another clip.
 Should only exist during debugging.

All Implemented Interfaces: IStringSerializable, IClip

Enclosing class: Clips

### Methods
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`
- `public java.lang.String getName()`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## Clips.CommonClipTypeAdapterFactory

*enum* `net.minecraftforge.common.model.animation.Clips.CommonClipTypeAdapterFactory`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Clips.CommonClipTypeAdapterFactory>

Enclosing class: Clips

### Fields
- `public static final Clips.CommonClipTypeAdapterFactory INSTANCE`

### Methods
- `public static Clips.CommonClipTypeAdapterFactory[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Clips.CommonClipTypeAdapterFactory c : Clips.CommonClipTypeAdapterFactory.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Clips.CommonClipTypeAdapterFactory valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void setClipResolver(java.util.function.Function<java.lang.String,IClip> clipResolver)`
- `public <T> <any> create(Gson gson,  <any> type)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Clips.IdentityClip

*enum* `net.minecraftforge.common.model.animation.Clips.IdentityClip`

Clip that does nothing.

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Clips.IdentityClip>, IStringSerializable, IClip

Enclosing class: Clips

### Fields
- `public static final Clips.IdentityClip INSTANCE`

### Methods
- `public static Clips.IdentityClip[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Clips.IdentityClip c : Clips.IdentityClip.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Clips.IdentityClip valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`
- `public java.lang.String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Clips.ModelClip

*class* `net.minecraftforge.common.model.animation.Clips.ModelClip`

Wrapper for model clips; useful for debugging and serialization;

All Implemented Interfaces: IClip

Enclosing class: Clips

### Methods
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## Clips.SlerpClip

*class* `net.minecraftforge.common.model.animation.Clips.SlerpClip`

Spherical linear blend between 2 clips.

All Implemented Interfaces: IClip

Enclosing class: Clips

### Methods
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## Clips.TimeClip

*class* `net.minecraftforge.common.model.animation.Clips.TimeClip`

Clip with custom parameterization of the time.

All Implemented Interfaces: IClip

Enclosing class: Clips

### Methods
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object obj)`

## Clips.TriggerClip

*class* `net.minecraftforge.common.model.animation.Clips.TriggerClip`

Clip + Event, triggers when parameter becomes non-negative.

All Implemented Interfaces: IClip

Enclosing class: Clips

### Methods
- `public IJointClip apply(IJoint joint)`
- `public java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`

## IAnimationStateMachine

*interface* `net.minecraftforge.common.model.animation.IAnimationStateMachine`

State machine representing the model animation.

### Methods
- `<any> apply(float time)`
  Sample the state and events at the current time.
   Event iterable will contain all events that happened from the last invocation of this method, from most to least recent.
   Event offset is relative to the previous event, and for the first event it's relative to the current time.
- `void transition(java.lang.String newState)`
  Transition to a new state.
- `java.lang.String currentState()`
  Get current state name.
- `void shouldHandleSpecialEvents(boolean value)`
  Set to true if the machine should handle special events that come from the clips (they start with '!').
   Right now only implemented event is "!transition:".
   Default value is true.

## IClip

*interface* `net.minecraftforge.common.model.animation.IClip`

Clip for a rigged model.

### Methods
- `IJointClip apply(IJoint joint)`
- `java.lang.Iterable<Event> pastEvents(float lastPollTime,  float time)`

## IJoint

*interface* `net.minecraftforge.common.model.animation.IJoint`

Model part that's a part of the hierarchical skeleton.

All Superinterfaces: IModelPart

### Methods
- `TRSRTransformation getInvBindPose()`
- `java.util.Optional<? extends IJoint> getParent()`

## IJointClip

*interface* `net.minecraftforge.common.model.animation.IJointClip`

Returns Local joint pose; animation clip for specific model part.

### Methods
- `TRSRTransformation apply(float time)`

## JointClips

*class* `net.minecraftforge.common.model.animation.JointClips`

Various implementations of IJointClip.

## JointClips.IdentityJointClip

*enum* `net.minecraftforge.common.model.animation.JointClips.IdentityJointClip`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<JointClips.IdentityJointClip>, IJointClip

Enclosing class: JointClips

### Fields
- `public static final JointClips.IdentityJointClip INSTANCE`

### Methods
- `public static JointClips.IdentityJointClip[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (JointClips.IdentityJointClip c : JointClips.IdentityJointClip.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static JointClips.IdentityJointClip valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public TRSRTransformation apply(float time)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## JointClips.NodeJointClip

*class* `net.minecraftforge.common.model.animation.JointClips.NodeJointClip`

All Implemented Interfaces: IJointClip

Enclosing class: JointClips

### Methods
- `public TRSRTransformation apply(float time)`
