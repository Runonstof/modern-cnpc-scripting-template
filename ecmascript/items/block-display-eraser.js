var RADIUS = 1;
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
  var name = ent.getTypeName();
  return name === 'minecraft:block_display' || name === 'block_display';
}
function searchPos(e) {
  if (e.type === 2 && e.target) {
    return e.target.getPos();
  }
  if (e.type === 1 && e.target && e.target.getPos) {
    return e.target.getPos();
  }
  var hit = e.player.rayTraceBlock(8, false, true);
  if (hit && hit.getPos) {
    return hit.getPos();
  }
  return e.player.getPos();
}
function closestDisplay(world, pos) {
  var nearby = world.getNearbyEntities(pos, RADIUS, -1);
  var best = null;
  var bestDist = RADIUS * RADIUS + 0.01;
  var cx = pos.getX() + 0.5;
  var cy = pos.getY() + 0.5;
  var cz = pos.getZ() + 0.5;
  for (var i = 0; i < nearby.length; i++) {
    var ent = nearby[i];
    if (!isBlockDisplay(ent) || !ent.isAlive()) {
      continue;
    }
    var dx = ent.getX() - cx;
    var dy = ent.getY() - cy;
    var dz = ent.getZ() - cz;
    var dist = dx * dx + dy * dy + dz * dz;
    if (dist <= bestDist) {
      bestDist = dist;
      best = ent;
    }
  }
  return best;
}
function init(e) {
  styleItem(e.item);
}
function interact(e) {
  if (typeof e.setCanceled === 'function') {
    e.setCanceled(true);
  }
  if (!e.player) {
    return;
  }
  var data = e.item.getTempdata();
  var now = e.player.getWorld().getTotalTime();
  if (data.get('eraseTick') === now) {
    return;
  }
  data.put('eraseTick', now);
  var pos = searchPos(e);
  var target = closestDisplay(e.player.getWorld(), pos);
  if (target) {
    target.despawn();
  }
}

