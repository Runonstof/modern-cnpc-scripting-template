# net.minecraftforge.event.village

- [VillagerTradesEvent](#villagertradesevent)
- [VillageSiegeEvent](#villagesiegeevent)
- [WandererTradesEvent](#wanderertradesevent)
## VillagerTradesEvent

*class* `net.minecraftforge.event.village.VillagerTradesEvent`

VillagerTradesEvent is fired during the ServerAboutToStartEvent. It is used to gather the trade lists for each profession.
 It is fired on the MinecraftForge.EVENT_BUS.
 It is fired once for each registered villager profession.
 Villagers pick two trades from their trade map, based on their level.
 Villager level is increased by successful trades.
 The map is populated for levels 1-5 (inclusive), so Map#get will never return null for those keys.
 Levels outside of this range do nothing, as specified by VillagerData.canLevelUp(int) which is called before attempting to level up.
 To add trades to the merchant, simply add new trades to the list. BasicItemListing provides a default implementation.

### Fields
- `protected it.unimi.dsi.fastutil.ints.Int2ObjectMap<List<VillagerTrades.ItemListing>> trades`
- `protected VillagerProfession type`

### Methods
- `public it.unimi.dsi.fastutil.ints.Int2ObjectMap<List<VillagerTrades.ItemListing>> getTrades()`
- `public VillagerProfession getType()`

## VillageSiegeEvent

*class* `net.minecraftforge.event.village.VillageSiegeEvent`

VillageSiegeEvent is fired just before a zombie siege finds a successful location in
 VillageSiege#tryToSetupSiege(ServerLevel), to give mods the chance to stop the siege.

 This event is Cancelable; canceling stops the siege.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final VillageSiege siege`
- `private final Level level`
- `private final Player player`
- `private final Vec3 attemptedSpawnPos`

### Methods
- `public VillageSiege getSiege()`
- `public Level getLevel()`
- `public Player getPlayer()`
- `public Vec3 getAttemptedSpawnPos()`

## WandererTradesEvent

*class* `net.minecraftforge.event.village.WandererTradesEvent`

WandererTradesEvent is fired during the ServerAboutToStartEvent. It is used to gather the trade lists for the wandering merchant.
 It is fired on the MinecraftForge.EVENT_BUS.
 The wandering merchant picks a few trades from generic and a single trade from rare.
 To add trades to the merchant, simply add new trades to the list. BasicItemListing provides a default implementation.

### Fields
- `protected List<VillagerTrades.ItemListing> generic`
- `protected List<VillagerTrades.ItemListing> rare`

### Methods
- `public List<VillagerTrades.ItemListing> getGenericTrades()`
- `public List<VillagerTrades.ItemListing> getRareTrades()`
