export function damaged(e) {
  e.damage = 0;
  e.player.extinguish();
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
}
