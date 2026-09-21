const RADIUS = 1;

function styleItem(item) {
  if (!item || typeof item.setTexture !== 'function') {
    return;
  }
  item.setTexture('minecraft:debug_stick');
  item.setMaxStackSize(1);
  item.setCustomName('Block Display Eraser');
  item.setLore(['Right-click', 'Removes a block_display within 1 block']);
  if (typeof item.setDurabilityShow === 'function') {
    item.setDurabilityShow(false);
  }
}

function isBlockDisplay(ent) {
  if (!ent || typeof ent.getTypeName !== 'function') {
    return false;
  }
  const name = ent.getTypeName();
  return name === 'minecraft:block_display' || name === 'block_display';
}

function searchPos(e) {
  if (e.type === 2 && e.target) {
    return e.target.getPos();
  }
  if (e.type === 1 && e.target && e.target.getPos) {
    return e.target.getPos();
  }
  const hit = e.player.rayTraceBlock(8, false, true);
  if (hit && hit.getPos) {
    return hit.getPos();
  }
  return e.player.getPos();
}

function closestDisplay(world, pos) {
  const nearby = world.getNearbyEntities(pos, RADIUS, -1);
  let best = null;
  let bestDist = RADIUS * RADIUS + 0.01;
  const cx = pos.getX() + 0.5;
  const cy = pos.getY() + 0.5;
  const cz = pos.getZ() + 0.5;
  for (let i = 0; i < nearby.length; i++) {
    const ent = nearby[i];
    if (!isBlockDisplay(ent) || !ent.isAlive()) {
      continue;
    }
    const dx = ent.getX() - cx;
    const dy = ent.getY() - cy;
    const dz = ent.getZ() - cz;
    const dist = dx * dx + dy * dy + dz * dz;
    if (dist <= bestDist) {
      bestDist = dist;
      best = ent;
    }
  }
  return best;
}

export function init(e) {
  styleItem(e.item);
}

export function interact(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!e.player) {
    return;
  }

  const data = e.item.getTempdata();
  const now = e.player.getWorld().getTotalTime();
  if (data.get('eraseTick') === now) {
    return;
  }
  data.put('eraseTick', now);

  const pos = searchPos(e);
  const target = closestDisplay(e.player.getWorld(), pos);
  if (target) {
    target.despawn();
  }
}
