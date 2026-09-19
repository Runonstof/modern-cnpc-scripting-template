# net.minecraftforge.fml.loading.progress

- [Class Message.MessageType](#class-message.messagetype)
- [Message](#message)
- [ProgressMeter](#progressmeter)
- [StartupNotificationManager](#startupnotificationmanager)
- [StartupNotificationManager.AgeMessage](#startupnotificationmanager.agemessage)
## Class Message.MessageType

*enum* `net.minecraftforge.fml.loading.progress.Class Message.MessageType`

Enclosing class: Message

### Fields
- `private final float[] colour`

### Methods
- `public static Message.MessageType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Message.MessageType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public float[] colour()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Message

*class* `net.minecraftforge.fml.loading.progress.Message`

### Fields
- `private final String text`
- `private final Message.MessageType type`
- `private final long timestamp`

### Methods
- `public String getText()`
- `Message.MessageType getType()`
- `long timestamp()`
- `public float[] getTypeColour()`

## ProgressMeter

*class* `net.minecraftforge.fml.loading.progress.ProgressMeter`

### Fields
- `private final String name`
- `private final int steps`
- `private AtomicInteger current`
- `private Message label`

### Methods
- `public String name()`
- `public int steps()`
- `public int current()`
- `public Message label()`
- `public void increment()`
- `public void complete()`
- `public float progress()`
- `public void setAbsolute(int absolute)`
- `public void label(String message)`

## StartupNotificationManager

*class* `net.minecraftforge.fml.loading.progress.StartupNotificationManager`

### Fields
- `private static volatile EnumMap<Message.MessageType,List<Message>> messages`
- `private static final Deque<ProgressMeter> progressMeters`

### Methods
- `public static List<ProgressMeter> getCurrentProgress()`
- `public static ProgressMeter prependProgressBar(String barName,  int count)`
- `public static ProgressMeter addProgressBar(String barName,  int count)`
- `public static void popBar(ProgressMeter progressMeter)`
- `public static List<StartupNotificationManager.AgeMessage> getMessages()`
- `private static void addMessage(Message.MessageType type,  String message,  int maxSize)`
- `public static void addModMessage(String message)`
- `public static Optional<Consumer<String>> modLoaderConsumer()`
- `public static Optional<Consumer<String>> locatorConsumer()`
- `public static Optional<Consumer<String>> mcLoaderConsumer()`

## StartupNotificationManager.AgeMessage

*record* `net.minecraftforge.fml.loading.progress.StartupNotificationManager.AgeMessage`

Enclosing class: StartupNotificationManager

### Fields
- `private final int age`
  The field for the age record component.
- `private final Message message`
  The field for the message record component.

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
- `public int age()`
  Returns the value of the age record component.
  - returns: the value of the age record component
- `public Message message()`
  Returns the value of the message record component.
  - returns: the value of the message record component
