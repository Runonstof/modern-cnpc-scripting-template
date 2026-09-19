# net.minecraft.client.renderer.debug

- [BeeDebugRenderer](#beedebugrenderer)
- [BeeDebugRenderer.HiveDebugInfo](#beedebugrenderer.hivedebuginfo)
- [BrainDebugRenderer](#braindebugrenderer)
- [BrainDebugRenderer.PoiInfo](#braindebugrenderer.poiinfo)
- [ChunkBorderRenderer](#chunkborderrenderer)
- [ChunkDebugRenderer](#chunkdebugrenderer)
- [ChunkDebugRenderer.ChunkData](#chunkdebugrenderer.chunkdata)
- [CollisionBoxRenderer](#collisionboxrenderer)
- [DebugRenderer](#debugrenderer)
- [DebugRenderer.SimpleDebugRenderer](#debugrenderer.simpledebugrenderer)
- [GameEventListenerRenderer](#gameeventlistenerrenderer)
- [GameEventListenerRenderer.TrackedGameEvent](#gameeventlistenerrenderer.trackedgameevent)
- [GameEventListenerRenderer.TrackedListener](#gameeventlistenerrenderer.trackedlistener)
- [GameTestDebugRenderer](#gametestdebugrenderer)
- [GameTestDebugRenderer.Marker](#gametestdebugrenderer.marker)
- [GoalSelectorDebugRenderer](#goalselectordebugrenderer)
- [GoalSelectorDebugRenderer.EntityGoalInfo](#goalselectordebugrenderer.entitygoalinfo)
- [HeightMapRenderer](#heightmaprenderer)
- [LightDebugRenderer](#lightdebugrenderer)
- [LightSectionDebugRenderer](#lightsectiondebugrenderer)
- [LightSectionDebugRenderer.SectionData](#lightsectiondebugrenderer.sectiondata)
- [NeighborsUpdateRenderer](#neighborsupdaterenderer)
- [PathfindingRenderer](#pathfindingrenderer)
- [RaidDebugRenderer](#raiddebugrenderer)
- [SolidFaceRenderer](#solidfacerenderer)
- [StructureRenderer](#structurerenderer)
- [SupportBlockRenderer](#supportblockrenderer)
- [VillageSectionsDebugRenderer](#villagesectionsdebugrenderer)
- [WaterDebugRenderer](#waterdebugrenderer)
- [WorldGenAttemptRenderer](#worldgenattemptrenderer)
## BeeDebugRenderer

*class* `net.minecraft.client.renderer.debug.BeeDebugRenderer`

### Fields
- `private static final boolean SHOW_GOAL_FOR_ALL_BEES` (= true)
- `private static final boolean SHOW_NAME_FOR_ALL_BEES` (= true)
- `private static final boolean SHOW_HIVE_FOR_ALL_BEES` (= true)
- `private static final boolean SHOW_FLOWER_POS_FOR_ALL_BEES` (= true)
- `private static final boolean SHOW_TRAVEL_TICKS_FOR_ALL_BEES` (= true)
- `private static final boolean SHOW_PATH_FOR_ALL_BEES` (= false)
- `private static final boolean SHOW_GOAL_FOR_SELECTED_BEE` (= true)
- `private static final boolean SHOW_NAME_FOR_SELECTED_BEE` (= true)
- `private static final boolean SHOW_HIVE_FOR_SELECTED_BEE` (= true)
- `private static final boolean SHOW_FLOWER_POS_FOR_SELECTED_BEE` (= true)
- `private static final boolean SHOW_TRAVEL_TICKS_FOR_SELECTED_BEE` (= true)
- `private static final boolean SHOW_PATH_FOR_SELECTED_BEE` (= true)
- `private static final boolean SHOW_HIVE_MEMBERS` (= true)
- `private static final boolean SHOW_BLACKLISTS` (= true)
- `private static final int MAX_RENDER_DIST_FOR_HIVE_OVERLAY` (= 30)
- `private static final int MAX_RENDER_DIST_FOR_BEE_OVERLAY` (= 30)
- `private static final int MAX_TARGETING_DIST` (= 8)
- `private static final int HIVE_TIMEOUT` (= 20)
- `private static final float TEXT_SCALE` (= 0.019999999552965164f)
- `private static final int WHITE` (= -1)
- `private static final int YELLOW` (= -256)
- `private static final int ORANGE` (= -23296)
- `private static final int GREEN` (= -16711936)
- `private static final int GRAY` (= -3355444)
- `private static final int PINK` (= -98404)
- `private static final int RED` (= -65536)
- `private final Minecraft minecraft`
- `private final Map<BlockPos,BeeDebugRenderer.HiveDebugInfo> hives`
- `private final Map<UUID,BeeDebugPayload.BeeInfo> beeInfosPerEntity`
- `@Nullable private UUID lastLookedAtUuid`

### Methods
- `public void clear()`
- `public void addOrUpdateHiveInfo(HiveDebugPayload.HiveInfo p_299034_,  long p_298824_)`
- `public void addOrUpdateBeeInfo(BeeDebugPayload.BeeInfo p_300160_)`
- `public void removeBeeInfo(int p_173764_)`
- `public void render(PoseStack p_113061_,  MultiBufferSource p_113062_,  double p_113063_,  double p_113064_,  double p_113065_)`
- `private void clearRemovedBees()`
- `private void clearRemovedHives()`
- `private void doRender(PoseStack p_270886_,  MultiBufferSource p_270808_)`
- `private Map<BlockPos,Set<UUID>> createHiveBlacklistMap()`
- `private void renderFlowerInfos(PoseStack p_270578_,  MultiBufferSource p_270098_)`
- `private static String getBeeUuidsAsString(Collection<UUID> p_113116_)`
- `private static void highlightHive(PoseStack p_270133_,  MultiBufferSource p_270766_,  BlockPos p_270687_)`
- `private void renderGhostHive(PoseStack p_270949_,  MultiBufferSource p_270718_,  BlockPos p_270550_,  List<String> p_270221_)`
- `private void renderHiveInfo(PoseStack p_270194_,  MultiBufferSource p_270431_,  HiveDebugPayload.HiveInfo p_297933_,  Collection<UUID> p_270946_)`
- `private void renderPath(PoseStack p_270424_,  MultiBufferSource p_270123_,  BeeDebugPayload.BeeInfo p_299438_)`
- `private void renderBeeInfo(PoseStack p_270154_,  MultiBufferSource p_270397_,  BeeDebugPayload.BeeInfo p_299435_)`
- `private static void renderTextOverHive(PoseStack p_270915_,  MultiBufferSource p_270663_,  String p_270119_,  HiveDebugPayload.HiveInfo p_300591_,  int p_270930_,  int p_270094_)`
- `private static void renderTextOverPos(PoseStack p_270438_,  MultiBufferSource p_270244_,  String p_270486_,  BlockPos p_270062_,  int p_270574_,  int p_270228_)`
- `private static void renderTextOverMob(PoseStack p_270426_,  MultiBufferSource p_270600_,  Position p_270548_,  int p_270592_,  String p_270198_,  int p_270792_,  float p_270938_)`
- `private Camera getCamera()`
- `private Set<String> getHiveMemberNames(HiveDebugPayload.HiveInfo p_298287_)`
- `private String getPosDescription(BeeDebugPayload.BeeInfo p_300427_,  BlockPos p_113070_)`
- `private boolean isBeeSelected(BeeDebugPayload.BeeInfo p_298081_)`
- `private boolean isPlayerCloseEnoughToMob(BeeDebugPayload.BeeInfo p_300675_)`
- `private Collection<UUID> getHiveMembers(BlockPos p_113130_)`
- `private Map<BlockPos,List<String>> getGhostHives()`
- `private void updateLastLookedAtUuid()`

## BeeDebugRenderer.HiveDebugInfo

*record* `net.minecraft.client.renderer.debug.BeeDebugRenderer.HiveDebugInfo`

Enclosing class: BeeDebugRenderer

### Fields
- `private final HiveDebugPayload.HiveInfo info`
  The field for the info record component.
- `private final long lastSeen`
  The field for the lastSeen record component.

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
- `public HiveDebugPayload.HiveInfo info()`
  Returns the value of the info record component.
  - returns: the value of the info record component
- `public long lastSeen()`
  Returns the value of the lastSeen record component.
  - returns: the value of the lastSeen record component

## BrainDebugRenderer

*class* `net.minecraft.client.renderer.debug.BrainDebugRenderer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final boolean SHOW_NAME_FOR_ALL` (= true)
- `private static final boolean SHOW_PROFESSION_FOR_ALL` (= false)
- `private static final boolean SHOW_BEHAVIORS_FOR_ALL` (= false)
- `private static final boolean SHOW_ACTIVITIES_FOR_ALL` (= false)
- `private static final boolean SHOW_INVENTORY_FOR_ALL` (= false)
- `private static final boolean SHOW_GOSSIPS_FOR_ALL` (= false)
- `private static final boolean SHOW_PATH_FOR_ALL` (= false)
- `private static final boolean SHOW_HEALTH_FOR_ALL` (= false)
- `private static final boolean SHOW_WANTS_GOLEM_FOR_ALL` (= true)
- `private static final boolean SHOW_ANGER_LEVEL_FOR_ALL` (= false)
- `private static final boolean SHOW_NAME_FOR_SELECTED` (= true)
- `private static final boolean SHOW_PROFESSION_FOR_SELECTED` (= true)
- `private static final boolean SHOW_BEHAVIORS_FOR_SELECTED` (= true)
- `private static final boolean SHOW_ACTIVITIES_FOR_SELECTED` (= true)
- `private static final boolean SHOW_MEMORIES_FOR_SELECTED` (= true)
- `private static final boolean SHOW_INVENTORY_FOR_SELECTED` (= true)
- `private static final boolean SHOW_GOSSIPS_FOR_SELECTED` (= true)
- `private static final boolean SHOW_PATH_FOR_SELECTED` (= true)
- `private static final boolean SHOW_HEALTH_FOR_SELECTED` (= true)
- `private static final boolean SHOW_WANTS_GOLEM_FOR_SELECTED` (= true)
- `private static final boolean SHOW_ANGER_LEVEL_FOR_SELECTED` (= true)
- `private static final boolean SHOW_POI_INFO` (= true)
- `private static final int MAX_RENDER_DIST_FOR_BRAIN_INFO` (= 30)
- `private static final int MAX_RENDER_DIST_FOR_POI_INFO` (= 30)
- `private static final int MAX_TARGETING_DIST` (= 8)
- `private static final float TEXT_SCALE` (= 0.019999999552965164f)
- `private static final int WHITE` (= -1)
- `private static final int YELLOW` (= -256)
- `private static final int CYAN` (= -16711681)
- `private static final int GREEN` (= -16711936)
- `private static final int GRAY` (= -3355444)
- `private static final int PINK` (= -98404)
- `private static final int RED` (= -65536)
- `private static final int ORANGE` (= -23296)
- `private final Minecraft minecraft`
- `private final Map<BlockPos,BrainDebugRenderer.PoiInfo> pois`
- `private final Map<UUID,BrainDebugPayload.BrainDump> brainDumpsPerEntity`
- `@Nullable private UUID lastLookedAtUuid`

### Methods
- `public void clear()`
- `public void addPoi(BrainDebugRenderer.PoiInfo p_113227_)`
- `public void removePoi(BlockPos p_113229_)`
- `public void setFreeTicketCount(BlockPos p_113231_,  int p_113232_)`
- `public void addOrUpdateBrainDump(BrainDebugPayload.BrainDump p_300442_)`
- `public void removeBrainDump(int p_173811_)`
- `public void render(PoseStack p_113214_,  MultiBufferSource p_113215_,  double p_113216_,  double p_113217_,  double p_113218_)`
- `private void clearRemovedEntities()`
- `private void doRender(PoseStack p_270747_,  MultiBufferSource p_270289_,  double p_270303_,  double p_270416_,  double p_270542_)`
- `private static void highlightPoi(PoseStack p_270066_,  MultiBufferSource p_270965_,  BlockPos p_270159_)`
- `private void renderGhostPoi(PoseStack p_270206_,  MultiBufferSource p_270976_,  BlockPos p_270670_,  List<String> p_270882_)`
- `private void renderPoiInfo(PoseStack p_270999_,  MultiBufferSource p_270627_,  BrainDebugRenderer.PoiInfo p_270986_)`
- `private void renderPath(PoseStack p_270435_,  MultiBufferSource p_270439_,  BrainDebugPayload.BrainDump p_301034_,  double p_270109_,  double p_270342_,  double p_270834_)`
- `private void renderBrainInfo(PoseStack p_270145_,  MultiBufferSource p_270489_,  BrainDebugPayload.BrainDump p_299702_,  double p_270922_,  double p_270468_,  double p_270838_)`
- `private static void renderTextOverPoi(PoseStack p_270498_,  MultiBufferSource p_270609_,  String p_270070_,  BrainDebugRenderer.PoiInfo p_270677_,  int p_270143_,  int p_271011_)`
- `private static void renderTextOverPos(PoseStack p_270640_,  MultiBufferSource p_270809_,  String p_270632_,  BlockPos p_270082_,  int p_270078_,  int p_270440_)`
- `private static void renderTextOverMob(PoseStack p_270664_,  MultiBufferSource p_270816_,  Position p_270715_,  int p_270126_,  String p_270487_,  int p_270218_,  float p_270737_)`
- `private Set<String> getTicketHolderNames(BrainDebugRenderer.PoiInfo p_113283_)`
- `private Set<String> getPotentialTicketHolderNames(BrainDebugRenderer.PoiInfo p_113288_)`
- `private boolean isMobSelected(BrainDebugPayload.BrainDump p_297841_)`
- `private boolean isPlayerCloseEnoughToMob(BrainDebugPayload.BrainDump p_300738_)`
- `private Collection<UUID> getTicketHolders(BlockPos p_113285_)`
- `private Collection<UUID> getPotentialTicketHolders(BlockPos p_113290_)`
- `private Map<BlockPos,List<String>> getGhostPois()`
- `private void updateLastLookedAtUuid()`

## BrainDebugRenderer.PoiInfo

*class* `net.minecraft.client.renderer.debug.BrainDebugRenderer.PoiInfo`

Enclosing class: BrainDebugRenderer

### Fields
- `public final BlockPos pos`
- `public final String type`
- `public int freeTicketCount`

## ChunkBorderRenderer

*class* `net.minecraft.client.renderer.debug.ChunkBorderRenderer`

### Fields
- `private final Minecraft minecraft`
- `private static final int CELL_BORDER`
- `private static final int YELLOW`

### Methods
- `public void render(PoseStack p_113358_,  MultiBufferSource p_113359_,  double p_113360_,  double p_113361_,  double p_113362_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## ChunkDebugRenderer

*class* `net.minecraft.client.renderer.debug.ChunkDebugRenderer`

### Fields
- `final Minecraft minecraft`
- `private double lastUpdateTime`
- `private final int radius` (= 12)
- `@Nullable private ChunkDebugRenderer.ChunkData data`

### Methods
- `public void render(PoseStack p_113370_,  MultiBufferSource p_113371_,  double p_113372_,  double p_113373_,  double p_113374_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## ChunkDebugRenderer.ChunkData

*class* `net.minecraft.client.renderer.debug.ChunkDebugRenderer.ChunkData`

Enclosing class: ChunkDebugRenderer

### Fields
- `final Map<ChunkPos,String> clientData`
- `final CompletableFuture<Map<ChunkPos,String>> serverData`

## CollisionBoxRenderer

*class* `net.minecraft.client.renderer.debug.CollisionBoxRenderer`

### Fields
- `private final Minecraft minecraft`
- `private double lastUpdateTime`
- `private List<VoxelShape> shapes`

### Methods
- `public void render(PoseStack p_113408_,  MultiBufferSource p_113409_,  double p_113410_,  double p_113411_,  double p_113412_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## DebugRenderer

*class* `net.minecraft.client.renderer.debug.DebugRenderer`

### Fields
- `public final PathfindingRenderer pathfindingRenderer`
- `public final DebugRenderer.SimpleDebugRenderer waterDebugRenderer`
- `public final DebugRenderer.SimpleDebugRenderer chunkBorderRenderer`
- `public final DebugRenderer.SimpleDebugRenderer heightMapRenderer`
- `public final DebugRenderer.SimpleDebugRenderer collisionBoxRenderer`
- `public final DebugRenderer.SimpleDebugRenderer supportBlockRenderer`
- `public final DebugRenderer.SimpleDebugRenderer neighborsUpdateRenderer`
- `public final StructureRenderer structureRenderer`
- `public final DebugRenderer.SimpleDebugRenderer lightDebugRenderer`
- `public final DebugRenderer.SimpleDebugRenderer worldGenAttemptRenderer`
- `public final DebugRenderer.SimpleDebugRenderer solidFaceRenderer`
- `public final DebugRenderer.SimpleDebugRenderer chunkRenderer`
- `public final BrainDebugRenderer brainDebugRenderer`
- `public final VillageSectionsDebugRenderer villageSectionsDebugRenderer`
- `public final BeeDebugRenderer beeDebugRenderer`
- `public final RaidDebugRenderer raidDebugRenderer`
- `public final GoalSelectorDebugRenderer goalSelectorRenderer`
- `public final GameTestDebugRenderer gameTestDebugRenderer`
- `public final GameEventListenerRenderer gameEventListenerRenderer`
- `public final LightSectionDebugRenderer skyLightSectionDebugRenderer`
- `private boolean renderChunkborder`

### Methods
- `public void clear()`
- `public boolean switchRenderChunkborder()`
- `public void render(PoseStack p_113458_,  MultiBufferSource.BufferSource p_113459_,  double p_113460_,  double p_113461_,  double p_113462_)`
- `public static Optional<Entity> getTargetedEntity(@Nullable  Entity p_113449_,  int p_113450_)`
- `public static void renderFilledBox(PoseStack p_270169_,  MultiBufferSource p_270417_,  BlockPos p_270790_,  BlockPos p_270610_,  float p_270515_,  float p_270494_,  float p_270869_,  float p_270844_)`
- `public static void renderFilledBox(PoseStack p_270877_,  MultiBufferSource p_270925_,  BlockPos p_270480_,  float p_270569_,  float p_270315_,  float p_270182_,  float p_270862_,  float p_270973_)`
- `public static void renderFilledBox(PoseStack p_271017_,  MultiBufferSource p_270356_,  AABB p_270833_,  float p_270850_,  float p_270249_,  float p_270654_,  float p_270476_)`
- `public static void renderFilledBox(PoseStack p_270616_,  MultiBufferSource p_270769_,  double p_270653_,  double p_270967_,  double p_270556_,  double p_270724_,  double p_270427_,  double p_270138_,  float p_270391_,  float p_270093_,  float p_270312_,  float p_270567_)`
- `public static void renderFloatingText(PoseStack p_270671_,  MultiBufferSource p_271023_,  String p_270521_,  int p_270729_,  int p_270562_,  int p_270828_,  int p_270164_)`
- `public static void renderFloatingText(PoseStack p_270905_,  MultiBufferSource p_270581_,  String p_270305_,  double p_270645_,  double p_270746_,  double p_270364_,  int p_270977_)`
- `public static void renderFloatingText(PoseStack p_270216_,  MultiBufferSource p_270684_,  String p_270564_,  double p_270935_,  double p_270856_,  double p_270908_,  int p_270180_,  float p_270685_)`
- `public static void renderFloatingText(PoseStack p_270649_,  MultiBufferSource p_270695_,  String p_270703_,  double p_270942_,  double p_270292_,  double p_270885_,  int p_270956_,  float p_270657_,  boolean p_270731_,  float p_270825_,  boolean p_270222_)`

## DebugRenderer.SimpleDebugRenderer

*interface* `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`

Enclosing class: DebugRenderer

### Methods
- `void render(PoseStack p_113507_,  MultiBufferSource p_113508_,  double p_113509_,  double p_113510_,  double p_113511_)`
- `default void clear()`

## GameEventListenerRenderer

*class* `net.minecraft.client.renderer.debug.GameEventListenerRenderer`

### Fields
- `private final Minecraft minecraft`
- `private static final int LISTENER_RENDER_DIST` (= 32)
- `private static final float BOX_HEIGHT` (= 1.0f)
- `private final List<GameEventListenerRenderer.TrackedGameEvent> trackedGameEvents`
- `private final List<GameEventListenerRenderer.TrackedListener> trackedListeners`

### Methods
- `public void render(PoseStack p_173846_,  MultiBufferSource p_173847_,  double p_173848_,  double p_173849_,  double p_173850_)`
- `private static void renderFilledBox(PoseStack p_270351_,  MultiBufferSource p_270763_,  AABB p_270205_,  float p_270707_,  float p_270538_,  float p_270314_,  float p_270966_)`
- `public void trackGameEvent(ResourceKey<GameEvent> p_297445_,  Vec3 p_234515_)`
- `public void trackListener(PositionSource p_173831_,  int p_173832_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## GameEventListenerRenderer.TrackedGameEvent

*record* `net.minecraft.client.renderer.debug.GameEventListenerRenderer.TrackedGameEvent`

Enclosing class: GameEventListenerRenderer

### Fields
- `private final long timeStamp`
  The field for the timeStamp record component.
- `private final ResourceKey<GameEvent> gameEvent`
  The field for the gameEvent record component.
- `private final Vec3 position`
  The field for the position record component.

### Methods
- `public boolean isExpired()`
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
- `public long timeStamp()`
  Returns the value of the timeStamp record component.
  - returns: the value of the timeStamp record component
- `public ResourceKey<GameEvent> gameEvent()`
  Returns the value of the gameEvent record component.
  - returns: the value of the gameEvent record component
- `public Vec3 position()`
  Returns the value of the position record component.
  - returns: the value of the position record component

## GameEventListenerRenderer.TrackedListener

*class* `net.minecraft.client.renderer.debug.GameEventListenerRenderer.TrackedListener`

Enclosing class: GameEventListenerRenderer

### Fields
- `public final PositionSource listenerSource`
- `public final int listenerRange`

### Methods
- `public boolean isExpired(Level p_234543_,  Vec3 p_234544_)`
- `public Optional<Vec3> getPosition(Level p_173876_)`
- `public PositionSource getListenerSource()`
- `public int getListenerRadius()`
- `public boolean handleGameEvent(ServerLevel p_234540_,  GameEvent p_249278_,  GameEvent.Context p_250285_,  Vec3 p_250758_)`

### Inherited methods
- from `net.minecraft.world.level.gameevent.GameEventListener`: `getDeliveryMode`

## GameTestDebugRenderer

*class* `net.minecraft.client.renderer.debug.GameTestDebugRenderer`

### Fields
- `private static final float PADDING` (= 0.019999999552965164f)
- `private final Map<BlockPos,GameTestDebugRenderer.Marker> markers`

### Methods
- `public void addMarker(BlockPos p_113525_,  int p_113526_,  String p_113527_,  int p_113528_)`
- `public void clear()`
- `public void render(PoseStack p_113519_,  MultiBufferSource p_113520_,  double p_113521_,  double p_113522_,  double p_113523_)`
- `private void renderMarker(PoseStack p_270274_,  MultiBufferSource p_271018_,  BlockPos p_270918_,  GameTestDebugRenderer.Marker p_270827_)`

## GameTestDebugRenderer.Marker

*class* `net.minecraft.client.renderer.debug.GameTestDebugRenderer.Marker`

Enclosing class: GameTestDebugRenderer

### Fields
- `public int color`
- `public String text`
- `public long removeAtTime`

### Methods
- `public float getR()`
- `public float getG()`
- `public float getB()`
- `public float getA()`

## GoalSelectorDebugRenderer

*class* `net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer`

### Fields
- `private static final int MAX_RENDER_DIST` (= 160)
- `private final Minecraft minecraft`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<GoalSelectorDebugRenderer.EntityGoalInfo> goalSelectors`

### Methods
- `public void clear()`
- `public void addGoalSelector(int p_113549_,  BlockPos p_299054_,  List<GoalDebugPayload.DebugGoal> p_113550_)`
- `public void removeGoalSelector(int p_173889_)`
- `public void render(PoseStack p_113552_,  MultiBufferSource p_113553_,  double p_113554_,  double p_113555_,  double p_113556_)`

## GoalSelectorDebugRenderer.EntityGoalInfo

*record* `net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer.EntityGoalInfo`

Enclosing class: GoalSelectorDebugRenderer

### Fields
- `private final BlockPos entityPos`
  The field for the entityPos record component.
- `private final List<GoalDebugPayload.DebugGoal> goals`
  The field for the goals record component.

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
- `public BlockPos entityPos()`
  Returns the value of the entityPos record component.
  - returns: the value of the entityPos record component
- `public List<GoalDebugPayload.DebugGoal> goals()`
  Returns the value of the goals record component.
  - returns: the value of the goals record component

## HeightMapRenderer

*class* `net.minecraft.client.renderer.debug.HeightMapRenderer`

### Fields
- `private final Minecraft minecraft`
- `private static final int CHUNK_DIST` (= 2)
- `private static final float BOX_HEIGHT` (= 0.09375f)

### Methods
- `public void render(PoseStack p_113576_,  MultiBufferSource p_113577_,  double p_113578_,  double p_113579_,  double p_113580_)`
- `private org.joml.Vector3f getColor(Heightmap.Types p_113574_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## LightDebugRenderer

*class* `net.minecraft.client.renderer.debug.LightDebugRenderer`

### Fields
- `private final Minecraft minecraft`
- `private static final int MAX_RENDER_DIST` (= 10)

### Methods
- `public void render(PoseStack p_113587_,  MultiBufferSource p_113588_,  double p_113589_,  double p_113590_,  double p_113591_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## LightSectionDebugRenderer

*class* `net.minecraft.client.renderer.debug.LightSectionDebugRenderer`

### Fields
- `private static final Duration REFRESH_INTERVAL`
- `private static final int RADIUS` (= 10)
- `private static final org.joml.Vector4f LIGHT_AND_BLOCKS_COLOR`
- `private static final org.joml.Vector4f LIGHT_ONLY_COLOR`
- `private final Minecraft minecraft`
- `private final LightLayer lightLayer`
- `private Instant lastUpdateTime`
- `@Nullable private LightSectionDebugRenderer.SectionData data`

### Methods
- `public void render(PoseStack p_281418_,  MultiBufferSource p_282487_,  double p_282164_,  double p_282565_,  double p_281615_)`
- `private static void renderFaces(PoseStack p_283088_,  DiscreteVoxelShape p_281747_,  SectionPos p_282941_,  VertexConsumer p_283103_,  double p_281419_,  double p_282520_,  double p_281976_,  org.joml.Vector4f p_282342_)`
- `private static void renderEdges(PoseStack p_282890_,  DiscreteVoxelShape p_282950_,  SectionPos p_281925_,  MultiBufferSource p_281516_,  double p_281554_,  double p_283233_,  double p_281690_,  org.joml.Vector4f p_282916_)`
- `private static void renderFace(PoseStack p_283612_,  VertexConsumer p_281996_,  Direction p_282340_,  double p_281988_,  double p_282440_,  double p_282235_,  int p_282751_,  int p_282270_,  int p_282159_,  org.joml.Vector4f p_283316_)`
- `private static void renderEdge(PoseStack p_283045_,  VertexConsumer p_282888_,  double p_283424_,  double p_283677_,  double p_283390_,  int p_281439_,  int p_282106_,  int p_282462_,  int p_282216_,  int p_281474_,  int p_281542_,  org.joml.Vector4f p_283667_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## LightSectionDebugRenderer.SectionData

*class* `net.minecraft.client.renderer.debug.LightSectionDebugRenderer.SectionData`

Enclosing class: LightSectionDebugRenderer

### Fields
- `final DiscreteVoxelShape lightAndBlocksShape`
- `final DiscreteVoxelShape lightShape`
- `final SectionPos minPos`

## NeighborsUpdateRenderer

*class* `net.minecraft.client.renderer.debug.NeighborsUpdateRenderer`

### Fields
- `private final Minecraft minecraft`
- `private final Map<Long,Map<BlockPos,Integer>> lastUpdate`

### Methods
- `public void addUpdate(long p_113597_,  BlockPos p_113598_)`
- `public void render(PoseStack p_113600_,  MultiBufferSource p_113601_,  double p_113602_,  double p_113603_,  double p_113604_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## PathfindingRenderer

*class* `net.minecraft.client.renderer.debug.PathfindingRenderer`

### Fields
- `private final Map<Integer,Path> pathMap`
- `private final Map<Integer,Float> pathMaxDist`
- `private final Map<Integer,Long> creationMap`
- `private static final long TIMEOUT` (= 5000L)
- `private static final float MAX_RENDER_DIST` (= 80.0f)
- `private static final boolean SHOW_OPEN_CLOSED` (= true)
- `private static final boolean SHOW_OPEN_CLOSED_COST_MALUS` (= false)
- `private static final boolean SHOW_OPEN_CLOSED_NODE_TYPE_WITH_TEXT` (= false)
- `private static final boolean SHOW_OPEN_CLOSED_NODE_TYPE_WITH_BOX` (= true)
- `private static final boolean SHOW_GROUND_LABELS` (= true)
- `private static final float TEXT_SCALE` (= 0.019999999552965164f)

### Methods
- `public void addPath(int p_113612_,  Path p_113613_,  float p_113614_)`
- `public void render(PoseStack p_113629_,  MultiBufferSource p_113630_,  double p_113631_,  double p_113632_,  double p_113633_)`
- `public static void renderPath(PoseStack p_270399_,  MultiBufferSource p_270359_,  Path p_270189_,  float p_270841_,  boolean p_270481_,  boolean p_270748_,  double p_270187_,  double p_270252_,  double p_270371_)`
- `public static void renderPathLine(PoseStack p_270666_,  VertexConsumer p_270602_,  Path p_270511_,  double p_270524_,  double p_270163_,  double p_270176_)`
- `private static float distanceToCamera(BlockPos p_113635_,  double p_113636_,  double p_113637_,  double p_113638_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## RaidDebugRenderer

*class* `net.minecraft.client.renderer.debug.RaidDebugRenderer`

### Fields
- `private static final int MAX_RENDER_DIST` (= 160)
- `private static final float TEXT_SCALE` (= 0.03999999910593033f)
- `private final Minecraft minecraft`
- `private Collection<BlockPos> raidCenters`

### Methods
- `public void setRaidCenters(Collection<BlockPos> p_113664_)`
- `public void render(PoseStack p_113652_,  MultiBufferSource p_113653_,  double p_113654_,  double p_113655_,  double p_113656_)`
- `private static void highlightRaidCenter(PoseStack p_270914_,  MultiBufferSource p_270517_,  BlockPos p_270208_)`
- `private static void renderTextOverBlock(PoseStack p_270092_,  MultiBufferSource p_270518_,  String p_270237_,  BlockPos p_270941_,  int p_270307_)`
- `private Camera getCamera()`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## SolidFaceRenderer

*class* `net.minecraft.client.renderer.debug.SolidFaceRenderer`

### Fields
- `private final Minecraft minecraft`

### Methods
- `public void render(PoseStack p_113670_,  MultiBufferSource p_113671_,  double p_113672_,  double p_113673_,  double p_113674_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## StructureRenderer

*class* `net.minecraft.client.renderer.debug.StructureRenderer`

### Fields
- `private final Minecraft minecraft`
- `private final Map<ResourceKey<Level>,Map<String,BoundingBox>> postMainBoxes`
- `private final Map<ResourceKey<Level>,Map<String,StructuresDebugPayload.PieceInfo>> postPieces`
- `private static final int MAX_RENDER_DIST` (= 500)

### Methods
- `public void render(PoseStack p_113688_,  MultiBufferSource p_113689_,  double p_113690_,  double p_113691_,  double p_113692_)`
- `public void addBoundingBox(BoundingBox p_113683_,  List<StructuresDebugPayload.PieceInfo> p_113684_,  ResourceKey<Level> p_297588_)`
- `public void clear()`

## SupportBlockRenderer

*class* `net.minecraft.client.renderer.debug.SupportBlockRenderer`

### Fields
- `private final Minecraft minecraft`
- `private double lastUpdateTime`
- `private List<Entity> surroundEntities`

### Methods
- `public void render(PoseStack p_286297_,  MultiBufferSource p_286436_,  double p_286291_,  double p_286388_,  double p_286330_)`
- `private void drawHighlights(PoseStack p_286525_,  MultiBufferSource p_286495_,  double p_286696_,  double p_286417_,  double p_286386_,  Entity p_286273_,  DoubleSupplier p_286458_,  float p_286487_,  float p_286710_,  float p_286793_)`
- `private double getBias(Entity p_286713_)`
- `private void highlightPosition(BlockPos p_286268_,  PoseStack p_286592_,  double p_286463_,  double p_286552_,  double p_286660_,  MultiBufferSource p_286314_,  double p_286880_,  float p_286918_,  float p_286304_,  float p_286672_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## VillageSectionsDebugRenderer

*class* `net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer`

### Fields
- `private static final int MAX_RENDER_DIST_FOR_VILLAGE_SECTIONS` (= 60)
- `private final Set<SectionPos> villageSections`

### Methods
- `public void clear()`
- `public void setVillageSection(SectionPos p_113710_)`
- `public void setNotVillageSection(SectionPos p_113712_)`
- `public void render(PoseStack p_113701_,  MultiBufferSource p_113702_,  double p_113703_,  double p_113704_,  double p_113705_)`
- `private static void highlightVillageSection(PoseStack p_270832_,  MultiBufferSource p_270443_,  SectionPos p_271021_)`

## WaterDebugRenderer

*class* `net.minecraft.client.renderer.debug.WaterDebugRenderer`

### Fields
- `private final Minecraft minecraft`

### Methods
- `public void render(PoseStack p_113719_,  MultiBufferSource p_113720_,  double p_113721_,  double p_113722_,  double p_113723_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`

## WorldGenAttemptRenderer

*class* `net.minecraft.client.renderer.debug.WorldGenAttemptRenderer`

### Fields
- `private final List<BlockPos> toRender`
- `private final List<Float> scales`
- `private final List<Float> alphas`
- `private final List<Float> reds`
- `private final List<Float> greens`
- `private final List<Float> blues`

### Methods
- `public void addPos(BlockPos p_113738_,  float p_113739_,  float p_113740_,  float p_113741_,  float p_113742_,  float p_113743_)`
- `public void render(PoseStack p_113732_,  MultiBufferSource p_113733_,  double p_113734_,  double p_113735_,  double p_113736_)`

### Inherited methods
- from `net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer`: `clear`
