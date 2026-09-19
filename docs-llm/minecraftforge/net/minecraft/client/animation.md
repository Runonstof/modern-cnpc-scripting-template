# net.minecraft.client.animation

- [AnimationChannel](#animationchannel)
- [AnimationChannel.Interpolation](#animationchannel.interpolation)
- [AnimationChannel.Interpolations](#animationchannel.interpolations)
- [AnimationChannel.Target](#animationchannel.target)
- [AnimationChannel.Targets](#animationchannel.targets)
- [AnimationDefinition](#animationdefinition)
- [AnimationDefinition.Builder](#animationdefinition.builder)
- [Keyframe](#keyframe)
- [KeyframeAnimations](#keyframeanimations)
## AnimationChannel

*record* `net.minecraft.client.animation.AnimationChannel`

### Fields
- `private final AnimationChannel.Target target`
  The field for the target record component.
- `private final Keyframe[] keyframes`
  The field for the keyframes record component.

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
- `public AnimationChannel.Target target()`
  Returns the value of the target record component.
  - returns: the value of the target record component
- `public Keyframe[] keyframes()`
  Returns the value of the keyframes record component.
  - returns: the value of the keyframes record component

## AnimationChannel.Interpolation

*interface* `net.minecraft.client.animation.AnimationChannel.Interpolation`

Enclosing class: AnimationChannel

### Methods
- `org.joml.Vector3f apply(org.joml.Vector3f p_253818_,  float p_232224_,  Keyframe[] p_232225_,  int p_232226_,  int p_232227_,  float p_232228_)`

## AnimationChannel.Interpolations

*class* `net.minecraft.client.animation.AnimationChannel.Interpolations`

Enclosing class: AnimationChannel

### Fields
- `public static final AnimationChannel.Interpolation LINEAR`
- `public static final AnimationChannel.Interpolation CATMULLROM`

## AnimationChannel.Target

*interface* `net.minecraft.client.animation.AnimationChannel.Target`

Enclosing class: AnimationChannel

### Methods
- `void apply(ModelPart p_232248_,  org.joml.Vector3f p_253771_)`

## AnimationChannel.Targets

*class* `net.minecraft.client.animation.AnimationChannel.Targets`

Enclosing class: AnimationChannel

### Fields
- `public static final AnimationChannel.Target POSITION`
- `public static final AnimationChannel.Target ROTATION`
- `public static final AnimationChannel.Target SCALE`

## AnimationDefinition

*record* `net.minecraft.client.animation.AnimationDefinition`

### Fields
- `private final float lengthInSeconds`
  The field for the lengthInSeconds record component.
- `private final boolean looping`
  The field for the looping record component.
- `private final Map<String,List<AnimationChannel>> boneAnimations`
  The field for the boneAnimations record component.

### Methods
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
- `public float lengthInSeconds()`
  Returns the value of the lengthInSeconds record component.
  - returns: the value of the lengthInSeconds record component
- `public boolean looping()`
  Returns the value of the looping record component.
  - returns: the value of the looping record component
- `public Map<String,List<AnimationChannel>> boneAnimations()`
  Returns the value of the boneAnimations record component.
  - returns: the value of the boneAnimations record component

## AnimationDefinition.Builder

*class* `net.minecraft.client.animation.AnimationDefinition.Builder`

Enclosing class: AnimationDefinition

### Fields
- `private final float length`
- `private final Map<String,List<AnimationChannel>> animationByBone`
- `private boolean looping`

### Methods
- `public static AnimationDefinition.Builder withLength(float p_232276_)`
- `public AnimationDefinition.Builder looping()`
- `public AnimationDefinition.Builder addAnimation(String p_232280_,  AnimationChannel p_232281_)`
- `public AnimationDefinition build()`

## Keyframe

*record* `net.minecraft.client.animation.Keyframe`

### Fields
- `private final float timestamp`
  The field for the timestamp record component.
- `private final org.joml.Vector3f target`
  The field for the target record component.
- `private final AnimationChannel.Interpolation interpolation`
  The field for the interpolation record component.

### Methods
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
- `public float timestamp()`
  Returns the value of the timestamp record component.
  - returns: the value of the timestamp record component
- `public org.joml.Vector3f target()`
  Returns the value of the target record component.
  - returns: the value of the target record component
- `public AnimationChannel.Interpolation interpolation()`
  Returns the value of the interpolation record component.
  - returns: the value of the interpolation record component

## KeyframeAnimations

*class* `net.minecraft.client.animation.KeyframeAnimations`

### Methods
- `public static void animate(HierarchicalModel<?> p_232320_,  AnimationDefinition p_232321_,  long p_232322_,  float p_232323_,  org.joml.Vector3f p_253861_)`
- `private static float getElapsedSeconds(AnimationDefinition p_232317_,  long p_232318_)`
- `public static org.joml.Vector3f posVec(float p_253691_,  float p_254046_,  float p_254461_)`
- `public static org.joml.Vector3f degreeVec(float p_254402_,  float p_253917_,  float p_254397_)`
- `public static org.joml.Vector3f scaleVec(double p_253806_,  double p_253647_,  double p_254396_)`
