# net.minecraft.world.level.block.state.properties

- [BlockSetType](#blocksettype)
- [BlockStateProperties](#blockstateproperties)
- [BooleanProperty](#booleanproperty)
- [Class AttachFace](#class-attachface)
- [Class BambooLeaves](#class-bambooleaves)
- [Class BedPart](#class-bedpart)
- [Class BellAttachType](#class-bellattachtype)
- [Class ChestType](#class-chesttype)
- [Class ComparatorMode](#class-comparatormode)
- [Class DoorHingeSide](#class-doorhingeside)
- [Class DoubleBlockHalf](#class-doubleblockhalf)
- [Class DripstoneThickness](#class-dripstonethickness)
- [Class Half](#class-half)
- [Class NoteBlockInstrument](#class-noteblockinstrument)
- [Class NoteBlockInstrument.Type](#class-noteblockinstrument.type)
- [Class PistonType](#class-pistontype)
- [Class RailShape](#class-railshape)
- [Class RedstoneSide](#class-redstoneside)
- [Class SculkSensorPhase](#class-sculksensorphase)
- [Class SlabType](#class-slabtype)
- [Class StairsShape](#class-stairsshape)
- [Class StructureMode](#class-structuremode)
- [Class Tilt](#class-tilt)
- [Class WallSide](#class-wallside)
- [DirectionProperty](#directionproperty)
- [EnumProperty & StringRepresentable>](#enumproperty-stringrepresentable)
- [IntegerProperty](#integerproperty)
- [Property.Value>](#property.value)
- [Property>](#property)
- [RotationSegment](#rotationsegment)
- [WoodType](#woodtype)
## BlockSetType

*record* `net.minecraft.world.level.block.state.properties.BlockSetType`

### Fields
- `private final String name`
  The field for the name record component.
- `private final boolean canOpenByHand`
  The field for the canOpenByHand record component.
- `private final SoundType soundType`
  The field for the soundType record component.
- `private final SoundEvent doorClose`
  The field for the doorClose record component.
- `private final SoundEvent doorOpen`
  The field for the doorOpen record component.
- `private final SoundEvent trapdoorClose`
  The field for the trapdoorClose record component.
- `private final SoundEvent trapdoorOpen`
  The field for the trapdoorOpen record component.
- `private final SoundEvent pressurePlateClickOff`
  The field for the pressurePlateClickOff record component.
- `private final SoundEvent pressurePlateClickOn`
  The field for the pressurePlateClickOn record component.
- `private final SoundEvent buttonClickOff`
  The field for the buttonClickOff record component.
- `private final SoundEvent buttonClickOn`
  The field for the buttonClickOn record component.
- `private static final Set<BlockSetType> VALUES`
- `public static final BlockSetType IRON`
- `public static final BlockSetType GOLD`
- `public static final BlockSetType STONE`
- `public static final BlockSetType POLISHED_BLACKSTONE`
- `public static final BlockSetType OAK`
- `public static final BlockSetType SPRUCE`
- `public static final BlockSetType BIRCH`
- `public static final BlockSetType ACACIA`
- `public static final BlockSetType CHERRY`
- `public static final BlockSetType JUNGLE`
- `public static final BlockSetType DARK_OAK`
- `public static final BlockSetType CRIMSON`
- `public static final BlockSetType WARPED`
- `public static final BlockSetType MANGROVE`
- `public static final BlockSetType BAMBOO`

### Methods
- `public static BlockSetType register(BlockSetType p_273033_)`
- `public static Stream<BlockSetType> values()`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public boolean canOpenByHand()`
  Returns the value of the canOpenByHand record component.
  - returns: the value of the canOpenByHand record component
- `public SoundType soundType()`
  Returns the value of the soundType record component.
  - returns: the value of the soundType record component
- `public SoundEvent doorClose()`
  Returns the value of the doorClose record component.
  - returns: the value of the doorClose record component
- `public SoundEvent doorOpen()`
  Returns the value of the doorOpen record component.
  - returns: the value of the doorOpen record component
- `public SoundEvent trapdoorClose()`
  Returns the value of the trapdoorClose record component.
  - returns: the value of the trapdoorClose record component
- `public SoundEvent trapdoorOpen()`
  Returns the value of the trapdoorOpen record component.
  - returns: the value of the trapdoorOpen record component
- `public SoundEvent pressurePlateClickOff()`
  Returns the value of the pressurePlateClickOff record component.
  - returns: the value of the pressurePlateClickOff record component
- `public SoundEvent pressurePlateClickOn()`
  Returns the value of the pressurePlateClickOn record component.
  - returns: the value of the pressurePlateClickOn record component
- `public SoundEvent buttonClickOff()`
  Returns the value of the buttonClickOff record component.
  - returns: the value of the buttonClickOff record component
- `public SoundEvent buttonClickOn()`
  Returns the value of the buttonClickOn record component.
  - returns: the value of the buttonClickOn record component

## BlockStateProperties

*class* `net.minecraft.world.level.block.state.properties.BlockStateProperties`

### Fields
- `public static final BooleanProperty ATTACHED`
- `public static final BooleanProperty BOTTOM`
- `public static final BooleanProperty CONDITIONAL`
- `public static final BooleanProperty DISARMED`
- `public static final BooleanProperty DRAG`
- `public static final BooleanProperty ENABLED`
- `public static final BooleanProperty EXTENDED`
- `public static final BooleanProperty EYE`
- `public static final BooleanProperty FALLING`
- `public static final BooleanProperty HANGING`
- `public static final BooleanProperty HAS_BOTTLE_0`
- `public static final BooleanProperty HAS_BOTTLE_1`
- `public static final BooleanProperty HAS_BOTTLE_2`
- `public static final BooleanProperty HAS_RECORD`
- `public static final BooleanProperty HAS_BOOK`
- `public static final BooleanProperty INVERTED`
- `public static final BooleanProperty IN_WALL`
- `public static final BooleanProperty LIT`
- `public static final BooleanProperty LOCKED`
- `public static final BooleanProperty OCCUPIED`
- `public static final BooleanProperty OPEN`
- `public static final BooleanProperty PERSISTENT`
- `public static final BooleanProperty POWERED`
- `public static final BooleanProperty SHORT`
- `public static final BooleanProperty SIGNAL_FIRE`
- `public static final BooleanProperty SNOWY`
- `public static final BooleanProperty TRIGGERED`
- `public static final BooleanProperty UNSTABLE`
- `public static final BooleanProperty WATERLOGGED`
- `public static final BooleanProperty BERRIES`
- `public static final BooleanProperty BLOOM`
- `public static final BooleanProperty SHRIEKING`
- `public static final BooleanProperty CAN_SUMMON`
- `public static final EnumProperty<Direction.Axis> HORIZONTAL_AXIS`
- `public static final EnumProperty<Direction.Axis> AXIS`
- `public static final BooleanProperty UP`
- `public static final BooleanProperty DOWN`
- `public static final BooleanProperty NORTH`
- `public static final BooleanProperty EAST`
- `public static final BooleanProperty SOUTH`
- `public static final BooleanProperty WEST`
- `public static final DirectionProperty FACING`
- `public static final DirectionProperty FACING_HOPPER`
- `public static final DirectionProperty HORIZONTAL_FACING`
- `public static final IntegerProperty FLOWER_AMOUNT`
- `public static final EnumProperty<FrontAndTop> ORIENTATION`
- `public static final EnumProperty<AttachFace> ATTACH_FACE`
- `public static final EnumProperty<BellAttachType> BELL_ATTACHMENT`
- `public static final EnumProperty<WallSide> EAST_WALL`
- `public static final EnumProperty<WallSide> NORTH_WALL`
- `public static final EnumProperty<WallSide> SOUTH_WALL`
- `public static final EnumProperty<WallSide> WEST_WALL`
- `public static final EnumProperty<RedstoneSide> EAST_REDSTONE`
- `public static final EnumProperty<RedstoneSide> NORTH_REDSTONE`
- `public static final EnumProperty<RedstoneSide> SOUTH_REDSTONE`
- `public static final EnumProperty<RedstoneSide> WEST_REDSTONE`
- `public static final EnumProperty<DoubleBlockHalf> DOUBLE_BLOCK_HALF`
- `public static final EnumProperty<Half> HALF`
- `public static final EnumProperty<RailShape> RAIL_SHAPE`
- `public static final EnumProperty<RailShape> RAIL_SHAPE_STRAIGHT`
- `public static final int MAX_AGE_1` (= 1)
- `public static final int MAX_AGE_2` (= 2)
- `public static final int MAX_AGE_3` (= 3)
- `public static final int MAX_AGE_4` (= 4)
- `public static final int MAX_AGE_5` (= 5)
- `public static final int MAX_AGE_7` (= 7)
- `public static final int MAX_AGE_15` (= 15)
- `public static final int MAX_AGE_25` (= 25)
- `public static final IntegerProperty AGE_1`
- `public static final IntegerProperty AGE_2`
- `public static final IntegerProperty AGE_3`
- `public static final IntegerProperty AGE_4`
- `public static final IntegerProperty AGE_5`
- `public static final IntegerProperty AGE_7`
- `public static final IntegerProperty AGE_15`
- `public static final IntegerProperty AGE_25`
- `public static final IntegerProperty BITES`
- `public static final IntegerProperty CANDLES`
- `public static final IntegerProperty DELAY`
- `public static final int MAX_DISTANCE` (= 7)
- `public static final IntegerProperty DISTANCE`
- `public static final IntegerProperty EGGS`
- `public static final IntegerProperty HATCH`
- `public static final IntegerProperty LAYERS`
- `public static final int MIN_LEVEL` (= 0)
- `public static final int MIN_LEVEL_CAULDRON` (= 1)
- `public static final int MAX_LEVEL_3` (= 3)
- `public static final int MAX_LEVEL_8` (= 8)
- `public static final IntegerProperty LEVEL_CAULDRON`
- `public static final IntegerProperty LEVEL_COMPOSTER`
- `public static final IntegerProperty LEVEL_FLOWING`
- `public static final IntegerProperty LEVEL_HONEY`
- `public static final int MAX_LEVEL_15` (= 15)
- `public static final IntegerProperty LEVEL`
- `public static final IntegerProperty MOISTURE`
- `public static final IntegerProperty NOTE`
- `public static final IntegerProperty PICKLES`
- `public static final IntegerProperty POWER`
- `public static final IntegerProperty STAGE`
- `public static final int STABILITY_MAX_DISTANCE` (= 7)
- `public static final IntegerProperty STABILITY_DISTANCE`
- `public static final int MIN_RESPAWN_ANCHOR_CHARGES` (= 0)
- `public static final int MAX_RESPAWN_ANCHOR_CHARGES` (= 4)
- `public static final IntegerProperty RESPAWN_ANCHOR_CHARGES`
- `public static final IntegerProperty ROTATION_16`
- `public static final EnumProperty<BedPart> BED_PART`
- `public static final EnumProperty<ChestType> CHEST_TYPE`
- `public static final EnumProperty<ComparatorMode> MODE_COMPARATOR`
- `public static final EnumProperty<DoorHingeSide> DOOR_HINGE`
- `public static final EnumProperty<NoteBlockInstrument> NOTEBLOCK_INSTRUMENT`
- `public static final EnumProperty<PistonType> PISTON_TYPE`
- `public static final EnumProperty<SlabType> SLAB_TYPE`
- `public static final EnumProperty<StairsShape> STAIRS_SHAPE`
- `public static final EnumProperty<StructureMode> STRUCTUREBLOCK_MODE`
- `public static final EnumProperty<BambooLeaves> BAMBOO_LEAVES`
- `public static final EnumProperty<Tilt> TILT`
- `public static final DirectionProperty VERTICAL_DIRECTION`
- `public static final EnumProperty<DripstoneThickness> DRIPSTONE_THICKNESS`
- `public static final EnumProperty<SculkSensorPhase> SCULK_SENSOR_PHASE`
- `public static final BooleanProperty CHISELED_BOOKSHELF_SLOT_0_OCCUPIED`
- `public static final BooleanProperty CHISELED_BOOKSHELF_SLOT_1_OCCUPIED`
- `public static final BooleanProperty CHISELED_BOOKSHELF_SLOT_2_OCCUPIED`
- `public static final BooleanProperty CHISELED_BOOKSHELF_SLOT_3_OCCUPIED`
- `public static final BooleanProperty CHISELED_BOOKSHELF_SLOT_4_OCCUPIED`
- `public static final BooleanProperty CHISELED_BOOKSHELF_SLOT_5_OCCUPIED`
- `public static final IntegerProperty DUSTED`
- `public static final BooleanProperty CRACKED`

## BooleanProperty

*class* `net.minecraft.world.level.block.state.properties.BooleanProperty`

### Fields
- `private final com.google.common.collect.ImmutableSet<Boolean> values`

### Methods
- `public Collection<Boolean> getPossibleValues()`
- `public static BooleanProperty create(String p_61466_)`
- `public Optional<Boolean> getValue(String p_61469_)`
- `public String getName(Boolean p_61462_)`
- `public boolean equals(Object p_61471_)`
- `public int generateHashCode()`

### Inherited methods
- from `net.minecraft.world.level.block.state.properties.Property`: `codec`, `getAllValues`, `getName`, `getValueClass`, `hashCode`, `parseValue`, `toString`, `value`, `value`, `valueCodec`

## Class AttachFace

*enum* `net.minecraft.world.level.block.state.properties.Class AttachFace`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static AttachFace[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AttachFace valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class BambooLeaves

*enum* `net.minecraft.world.level.block.state.properties.Class BambooLeaves`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static BambooLeaves[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BambooLeaves valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class BedPart

*enum* `net.minecraft.world.level.block.state.properties.Class BedPart`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static BedPart[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BedPart valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class BellAttachType

*enum* `net.minecraft.world.level.block.state.properties.Class BellAttachType`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static BellAttachType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BellAttachType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ChestType

*enum* `net.minecraft.world.level.block.state.properties.Class ChestType`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ChestType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChestType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public ChestType getOpposite()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ComparatorMode

*enum* `net.minecraft.world.level.block.state.properties.Class ComparatorMode`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ComparatorMode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ComparatorMode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class DoorHingeSide

*enum* `net.minecraft.world.level.block.state.properties.Class DoorHingeSide`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DoorHingeSide[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DoorHingeSide valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class DoubleBlockHalf

*enum* `net.minecraft.world.level.block.state.properties.Class DoubleBlockHalf`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DoubleBlockHalf[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DoubleBlockHalf valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class DripstoneThickness

*enum* `net.minecraft.world.level.block.state.properties.Class DripstoneThickness`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DripstoneThickness[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DripstoneThickness valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class Half

*enum* `net.minecraft.world.level.block.state.properties.Class Half`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Half[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Half valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class NoteBlockInstrument

*enum* `net.minecraft.world.level.block.state.properties.Class NoteBlockInstrument`

### Fields
- `private final String name`
- `private final Holder<SoundEvent> soundEvent`
- `private final NoteBlockInstrument.Type type`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static NoteBlockInstrument[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NoteBlockInstrument valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public Holder<SoundEvent> getSoundEvent()`
- `public boolean isTunable()`
- `public boolean hasCustomSound()`
- `public boolean worksAboveNoteBlock()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class NoteBlockInstrument.Type

*enum* `net.minecraft.world.level.block.state.properties.Class NoteBlockInstrument.Type`

Enclosing class: NoteBlockInstrument

### Methods
- `public static NoteBlockInstrument.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NoteBlockInstrument.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PistonType

*enum* `net.minecraft.world.level.block.state.properties.Class PistonType`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static PistonType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PistonType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class RailShape

*enum* `net.minecraft.world.level.block.state.properties.Class RailShape`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static RailShape[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RailShape valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public String toString()`
- `public boolean isAscending()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class RedstoneSide

*enum* `net.minecraft.world.level.block.state.properties.Class RedstoneSide`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static RedstoneSide[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RedstoneSide valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`
- `public boolean isConnected()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class SculkSensorPhase

*enum* `net.minecraft.world.level.block.state.properties.Class SculkSensorPhase`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static SculkSensorPhase[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SculkSensorPhase valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class SlabType

*enum* `net.minecraft.world.level.block.state.properties.Class SlabType`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static SlabType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SlabType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class StairsShape

*enum* `net.minecraft.world.level.block.state.properties.Class StairsShape`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static StairsShape[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StairsShape valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## Class StructureMode

*enum* `net.minecraft.world.level.block.state.properties.Class StructureMode`

### Fields
- `private final String name`
- `private final Component displayName`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static StructureMode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StructureMode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public Component getDisplayName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Tilt

*enum* `net.minecraft.world.level.block.state.properties.Class Tilt`

### Fields
- `private final String name`
- `private final boolean causesVibration`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Tilt[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Tilt valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public boolean causesVibration()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class WallSide

*enum* `net.minecraft.world.level.block.state.properties.Class WallSide`

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static WallSide[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static WallSide valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String toString()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

## DirectionProperty

*class* `net.minecraft.world.level.block.state.properties.DirectionProperty`

### Methods
- `public static DirectionProperty create(String p_156004_)`
- `public static DirectionProperty create(String p_61547_,  Predicate<Direction> p_61548_)`
- `public static DirectionProperty create(String p_61550_,  Direction... p_61551_)`
- `public static DirectionProperty create(String p_61544_,  Collection<Direction> p_61545_)`

### Inherited methods
- from `net.minecraft.world.level.block.state.properties.EnumProperty`: `create`, `create`, `create`, `create`, `equals`, `generateHashCode`, `getName`, `getPossibleValues`, `getValue`
- from `net.minecraft.world.level.block.state.properties.Property`: `codec`, `getAllValues`, `getName`, `getValueClass`, `hashCode`, `parseValue`, `toString`, `value`, `value`, `valueCodec`

## EnumProperty & StringRepresentable>

*class* `net.minecraft.world.level.block.state.properties.EnumProperty & StringRepresentable>`

### Fields
- `private final com.google.common.collect.ImmutableSet<T extends Enum<T> & StringRepresentable> values`
- `private final Map<String,T extends Enum<T> & StringRepresentable> names`

### Methods
- `public Collection<T> getPossibleValues()`
- `public Optional<T> getValue(String p_61604_)`
- `public String getName(T p_61586_)`
- `public boolean equals(Object p_61606_)`
- `public int generateHashCode()`
- `public static <T extends Enum<T> & StringRepresentable> EnumProperty<T> create(String p_61588_,  Class<T> p_61589_)`
- `public static <T extends Enum<T> & StringRepresentable> EnumProperty<T> create(String p_61595_,  Class<T> p_61596_,  Predicate<T> p_61597_)`
- `public static <T extends Enum<T> & StringRepresentable> EnumProperty<T> create(String p_61599_,  Class<T> p_61600_,  T... p_61601_)`
- `public static <T extends Enum<T> & StringRepresentable> EnumProperty<T> create(String p_61591_,  Class<T> p_61592_,  Collection<T> p_61593_)`

### Inherited methods
- from `net.minecraft.world.level.block.state.properties.Property`: `codec`, `getAllValues`, `getName`, `getValueClass`, `hashCode`, `parseValue`, `toString`, `value`, `value`, `valueCodec`

## IntegerProperty

*class* `net.minecraft.world.level.block.state.properties.IntegerProperty`

### Fields
- `private final com.google.common.collect.ImmutableSet<Integer> values`
- `private final int min`
- `private final int max`

### Methods
- `public Collection<Integer> getPossibleValues()`
- `public boolean equals(Object p_61639_)`
- `public int generateHashCode()`
- `public static IntegerProperty create(String p_61632_,  int p_61633_,  int p_61634_)`
- `public Optional<Integer> getValue(String p_61637_)`
- `public String getName(Integer p_61630_)`

### Inherited methods
- from `net.minecraft.world.level.block.state.properties.Property`: `codec`, `getAllValues`, `getName`, `getValueClass`, `hashCode`, `parseValue`, `toString`, `value`, `value`, `valueCodec`

## Property.Value>

*record* `net.minecraft.world.level.block.state.properties.Property.Value>`

Enclosing class: Property<T extends Comparable<T>>

### Fields
- `private final Property<T extends Comparable<T>> property`
  The field for the property record component.
- `private final T extends Comparable<T> value`
  The field for the value record component.

### Methods
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Property<T> property()`
  Returns the value of the property record component.
  - returns: the value of the property record component
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## Property>

*class* `net.minecraft.world.level.block.state.properties.Property>`

### Fields
- `private final Class<T extends Comparable<T>> clazz`
- `private final String name`
- `@Nullable private Integer hashCode`
- `private final com.mojang.serialization.Codec<T extends Comparable<T>> codec`
- `private final com.mojang.serialization.Codec<Property.Value<T extends Comparable<T>>> valueCodec`

### Methods
- `public Property.Value<T> value(T p_61700_)`
- `public Property.Value<T> value(StateHolder<?,?> p_61695_)`
- `public Stream<Property.Value<T>> getAllValues()`
- `public com.mojang.serialization.Codec<T> codec()`
- `public com.mojang.serialization.Codec<Property.Value<T>> valueCodec()`
- `public String getName()`
- `public Class<T> getValueClass()`
- `public abstract Collection<T> getPossibleValues()`
- `public abstract String getName(T p_61696_)`
- `public abstract Optional<T> getValue(String p_61701_)`
- `public String toString()`
- `public boolean equals(Object p_61707_)`
- `public final int hashCode()`
- `public int generateHashCode()`
- `public <U, S extends StateHolder<?, S>> com.mojang.serialization.DataResult<S> parseValue(com.mojang.serialization.DynamicOps<U> p_156032_,  S p_156033_,  U p_156034_)`

## RotationSegment

*class* `net.minecraft.world.level.block.state.properties.RotationSegment`

### Fields
- `private static final SegmentedAnglePrecision SEGMENTED_ANGLE16`
- `private static final int MAX_SEGMENT_INDEX`
- `private static final int NORTH_0` (= 0)
- `private static final int EAST_90` (= 4)
- `private static final int SOUTH_180` (= 8)
- `private static final int WEST_270` (= 12)

### Methods
- `public static int getMaxSegmentIndex()`
- `public static int convertToSegment(Direction p_249634_)`
- `public static int convertToSegment(float p_249057_)`
- `public static Optional<Direction> convertToDirection(int p_250978_)`
- `public static float convertToDegrees(int p_250653_)`

## WoodType

*record* `net.minecraft.world.level.block.state.properties.WoodType`

### Fields
- `private final String name`
  The field for the name record component.
- `private final BlockSetType setType`
  The field for the setType record component.
- `private final SoundType soundType`
  The field for the soundType record component.
- `private final SoundType hangingSignSoundType`
  The field for the hangingSignSoundType record component.
- `private final SoundEvent fenceGateClose`
  The field for the fenceGateClose record component.
- `private final SoundEvent fenceGateOpen`
  The field for the fenceGateOpen record component.
- `private static final Set<WoodType> VALUES`
- `public static final WoodType OAK`
- `public static final WoodType SPRUCE`
- `public static final WoodType BIRCH`
- `public static final WoodType ACACIA`
- `public static final WoodType CHERRY`
- `public static final WoodType JUNGLE`
- `public static final WoodType DARK_OAK`
- `public static final WoodType CRIMSON`
- `public static final WoodType WARPED`
- `public static final WoodType MANGROVE`
- `public static final WoodType BAMBOO`

### Methods
- `public static WoodType register(WoodType p_61845_)`
- `public static Stream<WoodType> values()`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public BlockSetType setType()`
  Returns the value of the setType record component.
  - returns: the value of the setType record component
- `public SoundType soundType()`
  Returns the value of the soundType record component.
  - returns: the value of the soundType record component
- `public SoundType hangingSignSoundType()`
  Returns the value of the hangingSignSoundType record component.
  - returns: the value of the hangingSignSoundType record component
- `public SoundEvent fenceGateClose()`
  Returns the value of the fenceGateClose record component.
  - returns: the value of the fenceGateClose record component
- `public SoundEvent fenceGateOpen()`
  Returns the value of the fenceGateOpen record component.
  - returns: the value of the fenceGateOpen record component
