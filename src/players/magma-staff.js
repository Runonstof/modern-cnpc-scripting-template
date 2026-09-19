import { holdingStaff, onStaffKey, ensureStaffLoop, despawnStaffEffects, stopStaffLoop } from '~/lib/magma-staff';

export function keyPressed(e) {
  onStaffKey(e.player, e.key, true);
}

export function keyReleased(e) {
  onStaffKey(e.player, e.key, false);
}

export function broken(e) {
  if (!holdingStaff(e.player)) {
    return;
  }
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}

export function attack(e) {
  if (!holdingStaff(e.player)) {
    return;
  }
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}

export function tick(e) {
  if (holdingStaff(e.player)) {
    ensureStaffLoop(e.player);
  }
}

export function logout(e) {
  stopStaffLoop(e.player);
  despawnStaffEffects(e.player);
}

export function died(e) {
  despawnStaffEffects(e.player);
}
