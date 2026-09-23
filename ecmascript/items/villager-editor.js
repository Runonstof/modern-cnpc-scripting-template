var GUI_ID = 48120;
var ID_NAME = 201;
var ID_SET_NAME = 202;
var ID_SCROLL = 203;
var ID_COST_A = 0;
var ID_COST_B = 1;
var ID_RESULT = 2;
var ID_USES = 220;
var ID_MAX = 221;
var ID_XP = 222;
var ID_SPECIAL = 223;
var ID_MULT = 224;
var ID_APPLY = 230;
var ID_ADD = 231;
var ID_DELETE = 232;
var ID_RESTOCK = 233;
var ID_RESTOCK_ALL = 234;
var API = Java.type("noppes.npcs.api.NpcAPI").Instance();
var ItemStack = Java.type("net.minecraft.world.item.ItemStack");
var MerchantOffer = Java.type("net.minecraft.world.item.trading.MerchantOffer");
var Component = Java.type("net.minecraft.network.chat.Component");
var GuiComponentClicked = Java.type("noppes.npcs.api.function.gui.GuiComponentClicked");
var UUID_KEY = "villagerEditorUuid";
function styleItem(item) {
  if (!item || typeof item.setTexture !== "function") {
    return;
  }
  item.setTexture("minecraft:writable_book");
  item.setMaxStackSize(1);
  item.setCustomName("Villager Editor");
  item.setLore(["Right-click a villager", "Edit name, trades, and stock"]);
  if (typeof item.setDurabilityShow === "function") {
    item.setDurabilityShow(false);
  }
}
function stackLabel(stack) {
  if (!stack || stack.m_41619_()) {
    return "nothing";
  }
  return String(stack);
}
function tradeLabel(index, offer) {
  // m_45352_ = net.minecraft.world.item.trading.MerchantOffer#getBaseCostA
  // m_45364_ = net.minecraft.world.item.trading.MerchantOffer#getCostB
  // m_45368_ = net.minecraft.world.item.trading.MerchantOffer#getResult
  // m_45371_ = net.minecraft.world.item.trading.MerchantOffer#getUses
  // m_45373_ = net.minecraft.world.item.trading.MerchantOffer#getMaxUses
  var cost = stackLabel(offer.m_45352_());
  var extra = offer.m_45364_();
  if (extra && !extra.m_41619_()) {
    cost += " + " + stackLabel(extra);
  }
  var left = offer.m_45373_() - offer.m_45371_();
  return index + ": " + cost + " -> " + stackLabel(offer.m_45368_()) + " (" + left + " left)";
}
function merchantOf(target) {
  if (!target || typeof target.getMCEntity !== "function") {
    return null;
  }
  var mc = target.getMCEntity();
  // m_6616_ = net.minecraft.world.entity.npc.AbstractVillager#getOffers
  if (!mc || typeof mc.m_6616_ !== "function") {
    return null;
  }
  return mc;
}
function remember(player, target) {
  player.getTempdata().put(UUID_KEY, target.getUUID());
}
function currentVillager(player) {
  var uuid = player.getTempdata().get(UUID_KEY);
  if (!uuid) {
    return null;
  }
  var entity = player.getWorld().getEntity(String(uuid));
  return merchantOf(entity);
}
function offersOf(villager) {
  var offers = villager.m_6616_();
  // m_6255_ = net.minecraft.world.entity.npc.AbstractVillager#overrideOffers
  villager.m_6255_(offers);
  return offers;
}
function emptyStack() {
  // f_41583_ = net.minecraft.world.item.ItemStack#EMPTY
  return ItemStack.f_41583_;
}
function copyStack(stack) {
  if (!stack || stack.m_41619_()) {
    return emptyStack();
  }
  // m_41777_ = net.minecraft.world.item.ItemStack#copy
  return stack.m_41777_();
}
function slotStack(gui, id) {
  var slot = findSlot(gui, id);
  if (!slot || !slot.hasStack() || !slot.getStack() || slot.getStack().isEmpty()) {
    return emptyStack();
  }
  return copyStack(slot.getStack().getMCItemStack());
}
function findSlot(gui, id) {
  var slots = gui.getSlots();
  if (slots) {
    var size = typeof slots.size === "function" ? slots.size() : slots.length;
    for (var i = 0; i < size; i++) {
      var slot = typeof slots.get === "function" ? slots.get(i) : slots[i];
      if (slot && slot.getID() === id) {
        return slot;
      }
    }
  }
  return gui.getComponent(id);
}
function setSlot(gui, id, mcStack) {
  var slot = findSlot(gui, id);
  if (!slot) {
    return;
  }
  var wrapped = API.getIItemStack(copyStack(mcStack));
  slot.setStack(wrapped);
  gui.update(slot);
}
function trimNumber(value) {
  var text = String(Math.round(Number(value) * 1000) / 1000);
  return text;
}
function setField(gui, id, text) {
  var field = gui.getComponent(id);
  if (!field) {
    return;
  }
  field.setText(String(text));
  gui.update(field);
}
function fieldText(gui, id) {
  var field = gui.getComponent(id);
  return field ? String(field.getText()) : "";
}
function fieldInt(gui, id, fallback) {
  var text = fieldText(gui, id);
  var value = parseInt(text, 10);
  if (isNaN(value)) {
    return fallback;
  }
  return value;
}
function fieldFloat(gui, id, fallback) {
  var text = fieldText(gui, id);
  var value = parseFloat(text);
  if (isNaN(value)) {
    return fallback;
  }
  return value;
}
function selectedIndex(gui) {
  var scroll = gui.getComponent(ID_SCROLL);
  if (!scroll) {
    return -1;
  }
  var selection = scroll.getSelection();
  if (!selection || selection.length < 1) {
    return -1;
  }
  return selection[0];
}
function refreshList(gui, villager, keepIndex) {
  var offers = offersOf(villager);
  var lines = [];
  for (var i = 0; i < offers.size(); i++) {
    lines.push(tradeLabel(i, offers.get(i)));
  }
  if (lines.length === 0) {
    lines.push("(no trades)");
  }
  var scroll = gui.getComponent(ID_SCROLL);
  scroll.setList(lines);
  var index = keepIndex;
  if (index < 0 || index >= offers.size()) {
    index = offers.size() > 0 ? 0 : -1;
  }
  if (index >= 0) {
    scroll.setSelection(index);
  }
  gui.update(scroll);
  showOffer(gui, villager, index);
}
function showOffer(gui, villager, index) {
  var offers = offersOf(villager);
  if (index < 0 || index >= offers.size()) {
    setSlot(gui, ID_COST_A, emptyStack());
    setSlot(gui, ID_COST_B, emptyStack());
    setSlot(gui, ID_RESULT, emptyStack());
    setField(gui, ID_USES, "0");
    setField(gui, ID_MAX, "1");
    setField(gui, ID_XP, "0");
    setField(gui, ID_SPECIAL, "0");
    setField(gui, ID_MULT, "0");
    return;
  }
  var offer = offers.get(index);
  setSlot(gui, ID_COST_A, offer.m_45352_());
  setSlot(gui, ID_COST_B, offer.m_45364_());
  setSlot(gui, ID_RESULT, offer.m_45368_());
  // m_45371_ = net.minecraft.world.item.trading.MerchantOffer#getUses
  // m_45373_ = net.minecraft.world.item.trading.MerchantOffer#getMaxUses
  // m_45379_ = net.minecraft.world.item.trading.MerchantOffer#getXp
  // m_45377_ = net.minecraft.world.item.trading.MerchantOffer#getSpecialPriceDiff
  // m_45378_ = net.minecraft.world.item.trading.MerchantOffer#getPriceMultiplier
  setField(gui, ID_USES, offer.m_45371_());
  setField(gui, ID_MAX, offer.m_45373_());
  setField(gui, ID_XP, offer.m_45379_());
  setField(gui, ID_SPECIAL, offer.m_45377_());
  setField(gui, ID_MULT, trimNumber(offer.m_45378_()));
}
function offerFromForm(gui, previous) {
  var uses = fieldInt(gui, ID_USES, previous ? previous.m_45371_() : 0);
  var maxUses = fieldInt(gui, ID_MAX, previous ? previous.m_45373_() : 1);
  var xp = fieldInt(gui, ID_XP, previous ? previous.m_45379_() : 0);
  var special = fieldInt(gui, ID_SPECIAL, previous ? previous.m_45377_() : 0);
  var multiplier = fieldFloat(gui, ID_MULT, previous ? previous.m_45378_() : 0);
  if (maxUses < 1) {
    maxUses = 1;
  }
  if (uses < 0) {
    uses = 0;
  }
  if (uses > maxUses) {
    uses = maxUses;
  }
  var offer = new MerchantOffer(slotStack(gui, ID_COST_A), slotStack(gui, ID_COST_B), slotStack(gui, ID_RESULT), uses, maxUses, xp, multiplier, previous ? previous.m_45375_() : 0);
  // m_45359_ = net.minecraft.world.item.trading.MerchantOffer#setSpecialPriceDiff
  offer.m_45359_(special);
  return offer;
}
function applyName(player, gui) {
  var villager = currentVillager(player);
  if (!villager) {
    player.message("That villager is no longer loaded.");
    return;
  }
  var name = fieldText(gui, ID_NAME).replace(/^\s+|\s+$/g, "");
  if (!name) {
    // m_6593_ = net.minecraft.world.entity.Entity#setCustomName
    villager.m_6593_(null);
    // m_20340_ = net.minecraft.world.entity.Entity#setCustomNameVisible
    villager.m_20340_(false);
    player.message("Cleared the villager name.");
    return;
  }
  // m_237113_ = net.minecraft.network.chat.Component#literal
  villager.m_6593_(Component.m_237113_(name));
  villager.m_20340_(true);
  player.message("Villager name set to " + name + ".");
}
function applyTrade(player, gui) {
  var villager = currentVillager(player);
  if (!villager) {
    player.message("That villager is no longer loaded.");
    return;
  }
  var offers = offersOf(villager);
  var index = selectedIndex(gui);
  if (index < 0 || index >= offers.size()) {
    player.message("Select a trade first.");
    return;
  }
  var result = slotStack(gui, ID_RESULT);
  // m_41619_ = net.minecraft.world.item.ItemStack#isEmpty
  if (result.m_41619_()) {
    player.message("The result slot is empty.");
    return;
  }
  offers.set(index, offerFromForm(gui, offers.get(index)));
  refreshList(gui, villager, index);
  player.message("Updated trade " + index + ".");
}
function addTrade(player, gui) {
  var villager = currentVillager(player);
  if (!villager) {
    player.message("That villager is no longer loaded.");
    return;
  }
  var result = slotStack(gui, ID_RESULT);
  if (result.m_41619_()) {
    player.message("The result slot is empty.");
    return;
  }
  var offers = offersOf(villager);
  offers.add(offerFromForm(gui, null));
  refreshList(gui, villager, offers.size() - 1);
  player.message("Added a trade.");
}
function deleteTrade(player, gui) {
  var villager = currentVillager(player);
  if (!villager) {
    player.message("That villager is no longer loaded.");
    return;
  }
  var offers = offersOf(villager);
  var index = selectedIndex(gui);
  if (index < 0 || index >= offers.size()) {
    player.message("Select a trade first.");
    return;
  }
  offers.remove(index);
  refreshList(gui, villager, index - 1);
  player.message("Removed trade " + index + ".");
}
function restock(player, gui, all) {
  var villager = currentVillager(player);
  if (!villager) {
    player.message("That villager is no longer loaded.");
    return;
  }
  var offers = offersOf(villager);
  if (all) {
    for (var i = 0; i < offers.size(); i++) {
      // m_45372_ = net.minecraft.world.item.trading.MerchantOffer#resetUses
      offers.get(i).m_45372_();
    }
    refreshList(gui, villager, selectedIndex(gui));
    player.message("Restocked every trade.");
    return;
  }
  var index = selectedIndex(gui);
  if (index < 0 || index >= offers.size()) {
    player.message("Select a trade first.");
    return;
  }
  offers.get(index).m_45372_();
  refreshList(gui, villager, index);
  player.message("Restocked trade " + index + ".");
}
function onButton(player, gui, buttonId) {
  if (!gui || gui.getID() !== GUI_ID) {
    return;
  }
  if (buttonId === ID_SET_NAME) {
    applyName(player, gui);
  } else if (buttonId === ID_APPLY) {
    applyTrade(player, gui);
  } else if (buttonId === ID_ADD) {
    addTrade(player, gui);
  } else if (buttonId === ID_DELETE) {
    deleteTrade(player, gui);
  } else if (buttonId === ID_RESTOCK) {
    restock(player, gui, false);
  } else if (buttonId === ID_RESTOCK_ALL) {
    restock(player, gui, true);
  }
}
function openEditor(player, target) {
  var villager = merchantOf(target);
  if (!villager) {
    player.message("Right-click a villager with the Villager Editor.");
    return;
  }
  remember(player, target);
  var gui = API.createCustomGui(GUI_ID, 384, 276, false, player);
  gui.setDoesPauseGame(false);
  gui.addLabel(100, "Villager Editor", 8, 6, 200, 12, 0xffcc66);
  gui.addLabel(101, "Name", 8, 24, 36, 12, 0xffffff);
  var name = target.getName();
  gui.addTextArea(ID_NAME, 44, 18, 200, 22).setText(name || " ");
  gui.addButton(ID_SET_NAME, "Set name", 230, 18, 70, 20);
  var offers = offersOf(villager);
  var lines = [];
  for (var i = 0; i < offers.size(); i++) {
    lines.push(tradeLabel(i, offers.get(i)));
  }
  if (lines.length === 0) {
    lines.push("(no trades)");
  }
  var scroll = gui.addScroll(ID_SCROLL, 8, 44, 200, 96, lines);
  if (offers.size() > 0) {
    scroll.setSelection(0);
  }
  scroll.setOnClick(new GuiComponentClicked(function (activeGui, activeScroll) {
    var index = -1;
    if (activeScroll && activeScroll.getSelection) {
      var selection = activeScroll.getSelection();
      if (selection && selection.length > 0) {
        index = selection[0];
      }
    }
    showOffer(activeGui, currentVillager(activeGui.getPlayer()), index);
  }));
  gui.addLabel(102, "Cost", 220, 46, 40, 12, 0xffffff);
  gui.addLabel(103, "Extra", 258, 46, 40, 12, 0xffffff);
  gui.addLabel(104, "Result", 300, 46, 50, 12, 0xffffff);
  gui.addItemSlot(220, 58).setID(ID_COST_A);
  gui.addItemSlot(258, 58).setID(ID_COST_B);
  gui.addItemSlot(300, 58).setID(ID_RESULT);
  gui.addLabel(105, "Uses", 220, 86, 40, 12, 0xffffff);
  gui.addTextArea(ID_USES, 262, 78, 110, 22);
  gui.addLabel(106, "Max", 220, 104, 40, 12, 0xffffff);
  gui.addTextArea(ID_MAX, 262, 100, 110, 22);
  gui.addLabel(107, "XP", 220, 126, 40, 12, 0xffffff);
  gui.addTextArea(ID_XP, 262, 122, 110, 22);
  gui.addLabel(108, "Price +/-", 220, 148, 70, 12, 0xffffff);
  gui.addTextArea(ID_SPECIAL, 290, 144, 82, 22);
  gui.addLabel(109, "Mult", 220, 170, 40, 12, 0xffffff);
  gui.addTextArea(ID_MULT, 262, 166, 110, 22);
  gui.addButton(ID_APPLY, "Apply", 8, 146, 60, 20);
  gui.addButton(ID_ADD, "Add", 70, 146, 40, 20);
  gui.addButton(ID_DELETE, "Delete", 112, 146, 50, 20);
  gui.addButton(ID_RESTOCK, "Restock", 8, 168, 70, 20);
  gui.addButton(ID_RESTOCK_ALL, "All", 80, 168, 40, 20);
  gui.showPlayerInventory(8, 192, true);
  player.showCustomGui(gui);
  if (offers.size() > 0) {
    showOffer(gui, villager, 0);
  }
}
function init(e) {
  styleItem(e.item);
}
function interact(e) {
  if (typeof e.setCanceled === "function") {
    e.setCanceled(true);
  }
  if (!e.player) {
    return;
  }
  openEditor(e.player, e.target);
}
function customGuiButton(e) {
  onButton(e.player, e.gui, e.buttonId);
}
function customGuiScroll(e) {
  if (!e.gui || e.gui.getID() !== GUI_ID || e.scrollId !== ID_SCROLL) {
    return;
  }
  var villager = currentVillager(e.player);
  if (!villager) {
    return;
  }
  var index = e.scrollIndex;
  if (typeof index !== "number") {
    index = selectedIndex(e.gui);
  }
  showOffer(e.gui, villager, index);
}

