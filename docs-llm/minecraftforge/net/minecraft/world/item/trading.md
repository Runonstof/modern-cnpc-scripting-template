# net.minecraft.world.item.trading

- [Merchant](#merchant)
- [MerchantOffer](#merchantoffer)
- [MerchantOffers](#merchantoffers)
## Merchant

*interface* `net.minecraft.world.item.trading.Merchant`

### Methods
- `void setTradingPlayer(@Nullable  Player p_45307_)`
- `@Nullable Player getTradingPlayer()`
- `MerchantOffers getOffers()`
- `void overrideOffers(MerchantOffers p_45306_)`
- `void notifyTrade(MerchantOffer p_45305_)`
- `void notifyTradeUpdated(ItemStack p_45308_)`
- `int getVillagerXp()`
- `void overrideXp(int p_45309_)`
- `boolean showProgressBar()`
- `SoundEvent getNotifyTradeSound()`
- `default boolean canRestock()`
- `default void openTradingScreen(Player p_45302_,  Component p_45303_,  int p_45304_)`
- `boolean isClientSide()`

## MerchantOffer

*class* `net.minecraft.world.item.trading.MerchantOffer`

### Fields
- `private final ItemStack baseCostA`
- `private final ItemStack costB`
- `private final ItemStack result`
- `private int uses`
- `private final int maxUses`
- `private boolean rewardExp`
- `private int specialPriceDiff`
- `private int demand`
- `private float priceMultiplier`
- `private int xp`

### Methods
- `public ItemStack getBaseCostA()`
- `public ItemStack getCostA()`
- `public ItemStack getCostB()`
- `public ItemStack getResult()`
- `public void updateDemand()`
- `public ItemStack assemble()`
- `public int getUses()`
- `public void resetUses()`
- `public int getMaxUses()`
- `public void increaseUses()`
- `public int getDemand()`
- `public void addToSpecialPriceDiff(int p_45354_)`
- `public void resetSpecialPriceDiff()`
- `public int getSpecialPriceDiff()`
- `public void setSpecialPriceDiff(int p_45360_)`
- `public float getPriceMultiplier()`
- `public int getXp()`
- `public boolean isOutOfStock()`
- `public void setToOutOfStock()`
- `public boolean needsRestock()`
- `public boolean shouldRewardExp()`
- `public CompoundTag createTag()`
- `public boolean satisfiedBy(ItemStack p_45356_,  ItemStack p_45357_)`
- `private boolean isRequiredItem(ItemStack p_45366_,  ItemStack p_45367_)`
- `public boolean take(ItemStack p_45362_,  ItemStack p_45363_)`
- `public MerchantOffer copy()`

## MerchantOffers

*class* `net.minecraft.world.item.trading.MerchantOffers`

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `@Nullable public MerchantOffer getRecipeFor(ItemStack p_45390_,  ItemStack p_45391_,  int p_45392_)`
- `public void writeToStream(FriendlyByteBuf p_45394_)`
- `public static MerchantOffers createFromStream(FriendlyByteBuf p_45396_)`
- `public CompoundTag createTag()`
- `public MerchantOffers copy()`

### Inherited methods
- from `java.util.ArrayList`: `add`, `add`, `addAll`, `addAll`, `clear`, `clone`, `contains`, `ensureCapacity`, `equals`, `forEach`, `get`, `hashCode`, `indexOf`, `isEmpty`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `remove`, `remove`, `removeAll`, `removeIf`, `removeRange`, `replaceAll`, `retainAll`, `set`, `size`, `sort`, `spliterator`, `subList`, `toArray`, `toArray`, `trimToSize`
- from `java.util.AbstractCollection`: `containsAll`, `toString`
- from `java.util.Collection`: `parallelStream`, `stream`, `toArray`
- from `java.util.List`: `containsAll`
