# net.minecraftforge.event.village

- [MerchantTradeOffersEvent](#merchanttradeoffersevent)
- [VillageSiegeEvent](#villagesiegeevent)
## MerchantTradeOffersEvent

*class* `net.minecraftforge.event.village.MerchantTradeOffersEvent`

MerchantTradeOffersEvent is fired when a list of villager trade offers is presented in
 IMerchant.getRecipes(EntityPlayer), allowing mods to modify trade offers depending
 on the player. Be warned that this event is fired on both server and client; thus, modders
 should ensure that they sync the needed data for this event themselves.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public MerchantRecipeList getList()`
  The recipe list (if not null) returned from this function may be modified.
  - returns: the recipe list
- `public void setList(MerchantRecipeList list)`
- `public IMerchant getMerchant()`
- `public EntityPlayer getPlayer()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## VillageSiegeEvent

*class* `net.minecraftforge.event.village.VillageSiegeEvent`

VillageSiegeEvent is fired just before a zombie siege finds a successful location in
 VillageSiege.trySetupSiege(), to give mods the chance to stop the siege.

 This event is Cancelable; canceling stops the siege.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public VillageSiege getSiege()`
- `public World getWorld()`
- `public EntityPlayer getPlayer()`
- `public Village getVillage()`
- `public Vec3d getAttemptedSpawnPos()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
