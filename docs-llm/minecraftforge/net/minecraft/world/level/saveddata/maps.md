# net.minecraft.world.level.saveddata.maps

- [Class MapDecoration.Type](#class-mapdecoration.type)
- [MapBanner](#mapbanner)
- [MapDecoration](#mapdecoration)
- [MapFrame](#mapframe)
- [MapIndex](#mapindex)
- [MapItemSavedData](#mapitemsaveddata)
- [MapItemSavedData.HoldingPlayer](#mapitemsaveddata.holdingplayer)
- [MapItemSavedData.MapPatch](#mapitemsaveddata.mappatch)
## Class MapDecoration.Type

*enum* `net.minecraft.world.level.saveddata.maps.Class MapDecoration.Type`

Enclosing class: MapDecoration

### Fields
- `public static final com.mojang.serialization.Codec<MapDecoration.Type> CODEC`
- `private final String name`
- `private final byte icon`
- `private final boolean renderedOnFrame`
- `private final int mapColor`
- `private final boolean isExplorationMapElement`
- `private final boolean trackCount`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static MapDecoration.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MapDecoration.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public byte getIcon()`
- `public boolean isExplorationMapElement()`
- `public boolean isRenderedOnFrame()`
- `public boolean hasMapColor()`
- `public int getMapColor()`
- `public static MapDecoration.Type byIcon(byte p_77855_)`
- `public boolean shouldTrackCount()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## MapBanner

*class* `net.minecraft.world.level.saveddata.maps.MapBanner`

### Fields
- `private final BlockPos pos`
- `private final DyeColor color`
- `@Nullable private final Component name`

### Methods
- `public static MapBanner load(CompoundTag p_77778_)`
- `@Nullable public static MapBanner fromWorld(BlockGetter p_77775_,  BlockPos p_77776_)`
- `public BlockPos getPos()`
- `public DyeColor getColor()`
- `public MapDecoration.Type getDecoration()`
- `@Nullable public Component getName()`
- `public boolean equals(Object p_77786_)`
- `public int hashCode()`
- `public CompoundTag save()`
- `public String getId()`

## MapDecoration

*record* `net.minecraft.world.level.saveddata.maps.MapDecoration`

### Fields
- `private final MapDecoration.Type type`
  The field for the type record component.
- `private final byte x`
  The field for the x record component.
- `private final byte y`
  The field for the y record component.
- `private final byte rot`
  The field for the rot record component.
- `@Nullable private final Component name`
  The field for the name record component.

### Methods
- `public byte getImage()`
- `public boolean renderOnFrame()`
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
- `public MapDecoration.Type type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public byte x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public byte y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public byte rot()`
  Returns the value of the rot record component.
  - returns: the value of the rot record component
- `@Nullable public Component name()`
  Returns the value of the name record component.
  - returns: the value of the name record component

## MapFrame

*class* `net.minecraft.world.level.saveddata.maps.MapFrame`

### Fields
- `private final BlockPos pos`
- `private final int rotation`
- `private final int entityId`

### Methods
- `public static MapFrame load(CompoundTag p_77873_)`
- `public CompoundTag save()`
- `public BlockPos getPos()`
- `public int getRotation()`
- `public int getEntityId()`
- `public String getId()`
- `public static String frameId(BlockPos p_77871_)`

## MapIndex

*class* `net.minecraft.world.level.saveddata.maps.MapIndex`

### Fields
- `public static final String FILE_NAME` (= "idcounts")
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<String> usedAuxIds`

### Methods
- `public static SavedData.Factory<MapIndex> factory()`
- `public static MapIndex load(CompoundTag p_164763_)`
- `public CompoundTag save(CompoundTag p_77884_)`
- `public int getFreeAuxValueForMap()`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## MapItemSavedData

*class* `net.minecraft.world.level.saveddata.maps.MapItemSavedData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAP_SIZE` (= 128)
- `private static final int HALF_MAP_SIZE` (= 64)
- `public static final int MAX_SCALE` (= 4)
- `public static final int TRACKED_DECORATION_LIMIT` (= 256)
- `public final int centerX`
- `public final int centerZ`
- `public final ResourceKey<Level> dimension`
- `private final boolean trackingPosition`
- `private final boolean unlimitedTracking`
- `public final byte scale`
- `public byte[] colors`
- `public final boolean locked`
- `private final List<MapItemSavedData.HoldingPlayer> carriedBy`
- `private final Map<Player,MapItemSavedData.HoldingPlayer> carriedByPlayers`
- `private final Map<String,MapBanner> bannerMarkers`
- `final Map<String,MapDecoration> decorations`
- `private final Map<String,MapFrame> frameMarkers`
- `private int trackedDecorationCount`

### Methods
- `public static SavedData.Factory<MapItemSavedData> factory()`
- `public static MapItemSavedData createFresh(double p_164781_,  double p_164782_,  byte p_164783_,  boolean p_164784_,  boolean p_164785_,  ResourceKey<Level> p_164786_)`
- `public static MapItemSavedData createForClient(byte p_164777_,  boolean p_164778_,  ResourceKey<Level> p_164779_)`
- `public static MapItemSavedData load(CompoundTag p_164808_)`
- `public CompoundTag save(CompoundTag p_77956_)`
- `public MapItemSavedData locked()`
- `public MapItemSavedData scaled(int p_164788_)`
- `public void tickCarriedBy(Player p_77919_,  ItemStack p_77920_)`
- `private void removeDecoration(String p_164800_)`
- `public static void addTargetDecoration(ItemStack p_77926_,  BlockPos p_77927_,  String p_77928_,  MapDecoration.Type p_77929_)`
- `private void addDecoration(MapDecoration.Type p_77938_,  @Nullable  LevelAccessor p_77939_,  String p_77940_,  double p_77941_,  double p_77942_,  double p_77943_,  @Nullable  Component p_77944_)`
- `@Nullable public Packet<?> getUpdatePacket(int p_164797_,  Player p_164798_)`
- `private void setColorsDirty(int p_164790_,  int p_164791_)`
- `private void setDecorationsDirty()`
- `public MapItemSavedData.HoldingPlayer getHoldingPlayer(Player p_77917_)`
- `public boolean toggleBanner(LevelAccessor p_77935_,  BlockPos p_77936_)`
- `public void checkBanners(BlockGetter p_77931_,  int p_77932_,  int p_77933_)`
- `public Collection<MapBanner> getBanners()`
- `public void removedFromFrame(BlockPos p_77948_,  int p_77949_)`
- `public boolean updateColor(int p_164793_,  int p_164794_,  byte p_164795_)`
- `public void setColor(int p_164804_,  int p_164805_,  byte p_164806_)`
- `public boolean isExplorationMap()`
- `public void addClientSideDecorations(List<MapDecoration> p_164802_)`
- `public Iterable<MapDecoration> getDecorations()`
- `public boolean isTrackedCountOverLimit(int p_181313_)`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## MapItemSavedData.HoldingPlayer

*class* `net.minecraft.world.level.saveddata.maps.MapItemSavedData.HoldingPlayer`

Enclosing class: MapItemSavedData

### Fields
- `public final Player player`
- `private boolean dirtyData`
- `private int minDirtyX`
- `private int minDirtyY`
- `private int maxDirtyX`
- `private int maxDirtyY`
- `private boolean dirtyDecorations`
- `private int tick`
- `public int step`

### Methods
- `private MapItemSavedData.MapPatch createPatch()`
- `@Nullable Packet<?> nextUpdatePacket(int p_164816_)`
- `void markColorsDirty(int p_164818_,  int p_164819_)`
- `private void markDecorationsDirty()`

## MapItemSavedData.MapPatch

*class* `net.minecraft.world.level.saveddata.maps.MapItemSavedData.MapPatch`

Enclosing class: MapItemSavedData

### Fields
- `public final int startX`
- `public final int startY`
- `public final int width`
- `public final int height`
- `public final byte[] mapColors`

### Methods
- `public void applyToMap(MapItemSavedData p_164833_)`
