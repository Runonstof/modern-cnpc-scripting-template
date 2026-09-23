function stackLabel(stack) {
  return String(stack);
}

export function tradeWithVillagerEvent(e) {
  var offer = e.event.getMerchantOffer();
  // m_45352_ = net.minecraft.world.item.trading.MerchantOffer#getBaseCostA
  var cost = stackLabel(offer.m_45352_());
  // m_45364_ = net.minecraft.world.item.trading.MerchantOffer#getCostB
  var extra = offer.m_45364_();
  // m_41619_ = net.minecraft.world.item.ItemStack#isEmpty
  if (extra != null && !extra.m_41619_()) {
    cost += " + " + stackLabel(extra);
  }
  // m_45368_ = net.minecraft.world.item.trading.MerchantOffer#getResult
  var result = stackLabel(offer.m_45368_());
  e.entity.message(e.entity.getName() + " traded " + cost + " for " + result);
}
