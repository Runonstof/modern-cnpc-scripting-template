# net.minecraft.server.bossevents

- [CustomBossEvent](#custombossevent)
- [CustomBossEvents](#custombossevents)
## CustomBossEvent

*class* `net.minecraft.server.bossevents.CustomBossEvent`

### Fields
- `private final ResourceLocation id`
- `private final Set<UUID> players`
- `private int value`
- `private int max`

### Inherited fields
- from `net.minecraft.world.BossEvent`: `color`, `createWorldFog`, `darkenScreen`, `name`, `overlay`, `playBossMusic`, `progress`

### Methods
- `public ResourceLocation getTextId()`
- `public void addPlayer(ServerPlayer p_136267_)`
- `public void addOfflinePlayer(UUID p_136271_)`
- `public void removePlayer(ServerPlayer p_136281_)`
- `public void removeAllPlayers()`
- `public int getValue()`
- `public int getMax()`
- `public void setValue(int p_136265_)`
- `public void setMax(int p_136279_)`
- `public final Component getDisplayName()`
- `public boolean setPlayers(Collection<ServerPlayer> p_136269_)`
- `public CompoundTag save()`
- `public static CustomBossEvent load(CompoundTag p_136273_,  ResourceLocation p_136274_)`
- `public void onPlayerConnect(ServerPlayer p_136284_)`
- `public void onPlayerDisconnect(ServerPlayer p_136287_)`

### Inherited methods
- from `net.minecraft.server.level.ServerBossEvent`: `getPlayers`, `isVisible`, `setColor`, `setCreateWorldFog`, `setDarkenScreen`, `setName`, `setOverlay`, `setPlayBossMusic`, `setProgress`, `setVisible`
- from `net.minecraft.world.BossEvent`: `getColor`, `getId`, `getName`, `getOverlay`, `getProgress`, `shouldCreateWorldFog`, `shouldDarkenScreen`, `shouldPlayBossMusic`

## CustomBossEvents

*class* `net.minecraft.server.bossevents.CustomBossEvents`

### Fields
- `private final Map<ResourceLocation,CustomBossEvent> events`

### Methods
- `@Nullable public CustomBossEvent get(ResourceLocation p_136298_)`
- `public CustomBossEvent create(ResourceLocation p_136300_,  Component p_136301_)`
- `public void remove(CustomBossEvent p_136303_)`
- `public Collection<ResourceLocation> getIds()`
- `public Collection<CustomBossEvent> getEvents()`
- `public CompoundTag save()`
- `public void load(CompoundTag p_136296_)`
- `public void onPlayerConnect(ServerPlayer p_136294_)`
- `public void onPlayerDisconnect(ServerPlayer p_136306_)`
