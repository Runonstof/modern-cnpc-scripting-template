import { isPickupStaff, pickupLookedBlock, throwOrbitBlock, ensureStaffLoop } from '~/lib/pickup-staff';

function styleItem(item) {
  if (!item || typeof item.setTexture !== 'function') {
    return;
  }
  item.setTexture('minecraft:stick');
  item.setMaxStackSize(1);
  item.setCustomName('Block Staff');
  item.setLore(['Right-click to pick up a block', 'Left-click to throw']);
  if (typeof item.setDurabilityShow === 'function') {
    item.setDurabilityShow(false);
  }
}

export function init(e) {
  styleItem(e.item);
}

export function tick(e) {
  if (!isPickupStaff(e.item) || !e.player) {
    return;
  }
  ensureStaffLoop(e.player);
}

export function attack(e) {
  throwOrbitBlock(e);
}

export function interact(e) {
  pickupLookedBlock(e);
}
