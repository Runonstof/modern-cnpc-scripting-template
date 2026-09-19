import { isMagmaStaff, onStaffAttack, onStaffInteract, ensureStaffLoop } from '~/lib/magma-staff';

function styleItem(item) {
  if (!item || typeof item.setTexture !== 'function') {
    return;
  }
  item.setTexture('minecraft:blaze_rod');
  item.setMaxStackSize(1);
  item.setCustomName('Magma Staff');
  item.setLore(['Hold right-click to summon magma', 'Hold left-click to throw']);
  if (typeof item.setDurabilityShow === 'function') {
    item.setDurabilityShow(false);
  }
}

export function init(e) {
  styleItem(e.item);
}

export function tick(e) {
  if (!isMagmaStaff(e.item) || !e.player) {
    return;
  }
  ensureStaffLoop(e.player);
}

export function attack(e) {
  onStaffAttack(e);
}

export function interact(e) {
  onStaffInteract(e);
}
