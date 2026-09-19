var ROAD_PREFIX = 'road_';
var ROAD_SEQ_KEY = 'road_seq';
function toInt(value) {
  return value | 0;
}
function parseRoad(raw) {
  if (raw == null) {
    return null;
  }
  try {
    var data = JSON.parse(String(raw));
    if (data && isFinite(data.sx) && isFinite(data.sz) && isFinite(data.ex) && isFinite(data.ez)) {
      return {
        sx: toInt(data.sx),
        sz: toInt(data.sz),
        ex: toInt(data.ex),
        ez: toInt(data.ez)
      };
    }
  } catch (err) {}
  return null;
}
function listRoads(stored) {
  var keys = Java.from(stored.getKeys());
  var roads = [];
  for (var i = 0; i < keys.length; i++) {
    var key = String(keys[i]);
    if (key.indexOf(ROAD_PREFIX) !== 0 || key === ROAD_SEQ_KEY) {
      continue;
    }
    var idText = key.substring(ROAD_PREFIX.length);
    if (!/^\d+$/.test(idText)) {
      continue;
    }
    var road = parseRoad(stored.get(key));
    if (!road) {
      continue;
    }
    road.id = parseInt(idText, 10);
    road.key = key;
    roads.push(road);
  }
  return roads;
}
function saveRoad(stored, sx, sz, ex, ez) {
  var seq = stored.get(ROAD_SEQ_KEY);
  if (seq == null) {
    seq = 0;
  }
  seq = toInt(seq) + 1;
  stored.put(ROAD_SEQ_KEY, seq);
  var key = ROAD_PREFIX + seq;
  var road = {
    sx: toInt(sx),
    sz: toInt(sz),
    ex: toInt(ex),
    ez: toInt(ez)
  };
  stored.put(key, JSON.stringify(road));
  road.id = seq;
  road.key = key;
  return road;
}
function removeRoad(stored, id) {
  var key = ROAD_PREFIX + id;
  if (!stored.has(key)) {
    return false;
  }
  stored.remove(key);
  return true;
}
function sameCell(ax, az, bx, bz) {
  return toInt(ax) === toInt(bx) && toInt(az) === toInt(bz);
}
/**
 * Roads are one-way. A link exists only when an end cell equals a start cell.
 * Several starts on one end is a fork. Several ends on one start is a merger.
 */
function outgoingRoads(roads, fromRoad) {
  var next = [];
  for (var i = 0; i < roads.length; i++) {
    var road = roads[i];
    if (road.id === fromRoad.id) {
      continue;
    }
    if (sameCell(road.sx, road.sz, fromRoad.ex, fromRoad.ez)) {
      next.push(road);
    }
  }
  return next;
}
function incomingRoads(roads, toRoad) {
  var prev = [];
  for (var i = 0; i < roads.length; i++) {
    var road = roads[i];
    if (road.id === toRoad.id) {
      continue;
    }
    if (sameCell(road.ex, road.ez, toRoad.sx, toRoad.sz)) {
      prev.push(road);
    }
  }
  return prev;
}
function dist2(ax, az, bx, bz) {
  var dx = ax - bx;
  var dz = az - bz;
  return dx * dx + dz * dz;
}
function closestPointOnRoad(road, x, z) {
  var vx = road.ex - road.sx;
  var vz = road.ez - road.sz;
  var len2 = vx * vx + vz * vz;
  if (len2 === 0) {
    return {
      x: road.sx,
      z: road.sz,
      t: 0
    };
  }
  var t = ((x - road.sx) * vx + (z - road.sz) * vz) / len2;
  if (t < 0) {
    t = 0;
  }
  if (t > 1) {
    t = 1;
  }
  return {
    x: road.sx + vx * t,
    z: road.sz + vz * t,
    t: t
  };
}
function nearestRoad(roads, x, z) {
  var best = null;
  var bestDist = Infinity;
  for (var i = 0; i < roads.length; i++) {
    var point = closestPointOnRoad(roads[i], x, z);
    var d = dist2(x, z, point.x, point.z);
    if (d < bestDist) {
      bestDist = d;
      best = roads[i];
    }
  }
  return best ? {
    road: best,
    dist2: bestDist
  } : null;
}

var IBlock = Java.type('noppes.npcs.api.block.IBlock');
var PREVIEW_RANGE = 48;
var PREVIEW_EVERY_TICKS = 6;
function isRoadWand(item) {
  return item && item.getStoreddata && item.getStoreddata().get('isRoadWand') === 1;
}
function isHeld(player, item) {
  var held = player.getMainhandItem();
  return held && !held.isEmpty() && isRoadWand(held);
}
function getBlockTarget(e) {
  if (e.type !== 2 || !e.target) {
    return null;
  }
  if (e.target instanceof IBlock) {
    return e.target;
  }
  return null;
}
function selection(item) {
  return item.getTempdata();
}
function tell(player, message) {
  player.message(message);
}
function formatCell(x, z) {
  return x + ', ' + z;
}
function init(e) {
  if (!isRoadWand(e.item)) {
    return;
  }
  e.item.setCustomName('Road Wand');
  e.item.setMaxStackSize(1);
}
function attack(e) {
  if (!isRoadWand(e.item)) {
    return;
  }
  e.setCanceled(true);
  var player = e.player;
  if (e.type === 0 && player.isSneaking()) {
    deleteNearest(player);
    return;
  }
  var block = getBlockTarget(e);
  if (!block) {
    return;
  }
  var x = block.getX();
  var z = block.getZ();
  var data = selection(e.item);
  data.put('sx', x);
  data.put('sz', z);
  tell(player, 'Start set to ' + formatCell(x, z));
}
function interact(e) {
  if (!isRoadWand(e.item)) {
    return;
  }
  e.setCanceled(true);
  var player = e.player;
  if (e.type === 0 && player.isSneaking()) {
    selection(e.item).remove('sx');
    selection(e.item).remove('sz');
    tell(player, 'Selection cleared');
    return;
  }
  var block = getBlockTarget(e);
  if (!block) {
    return;
  }
  var data = selection(e.item);
  if (!data.has('sx')) {
    tell(player, 'Left-click a block to set the start first');
    return;
  }
  var sx = data.get('sx') | 0;
  var sz = data.get('sz') | 0;
  var ex = block.getX();
  var ez = block.getZ();
  if (sx === ex && sz === ez) {
    tell(player, 'Start and end cannot be the same block');
    return;
  }
  var stored = player.getWorld().getStoreddata();
  var road = saveRoad(stored, sx, sz, ex, ez);
  var roads = listRoads(stored);
  var forks = outgoingRoads(roads, road).length;
  var merges = incomingRoads(roads, road).length;
  var notes = [];
  if (merges) {
    notes.push(merges + (merges === 1 ? ' merge in' : ' merges in'));
  }
  if (forks) {
    notes.push(forks + (forks === 1 ? ' fork out' : ' forks out'));
  }
  tell(player, 'Saved road_' + road.id + '  ' + formatCell(sx, sz) + ' -> ' + formatCell(ex, ez) + (notes.length ? '  (' + notes.join(', ') + ')' : ''));
  data.put('sx', ex);
  data.put('sz', ez);
}
function deleteNearest(player) {
  var stored = player.getWorld().getStoreddata();
  var roads = listRoads(stored);
  var found = nearestRoad(roads, player.getX(), player.getZ());
  if (!found || found.dist2 > 64) {
    tell(player, 'No road nearby to delete');
    return;
  }
  removeRoad(stored, found.road.id);
  tell(player, 'Deleted road_' + found.road.id + '  ' + formatCell(found.road.sx, found.road.sz) + ' -> ' + formatCell(found.road.ex, found.road.ez));
}
function spawnRoadParticles(world, road, y) {
  var dx = road.ex - road.sx;
  var dz = road.ez - road.sz;
  var len = Math.sqrt(dx * dx + dz * dz);
  var steps = Math.max(1, Math.min(40, Math.ceil(len / 2)));
  world.spawnParticle('flame', road.sx + 0.5, y, road.sz + 0.5, 0, 0.02, 0, 0, 3);
  world.spawnParticle('happyVillager', road.ex + 0.5, y, road.ez + 0.5, 0, 0.05, 0, 0, 4);
  for (var i = 0; i <= steps; i++) {
    var t = i / steps;
    var x = road.sx + dx * t + 0.5;
    var z = road.sz + dz * t + 0.5;
    world.spawnParticle('endRod', x, y, z, dx / len * 0.15, 0.01, dz / len * 0.15, 0.02, 1);
  }
}
function tick(e) {
  if (!isRoadWand(e.item) || !isHeld(e.player, e.item)) {
    return;
  }
  var temp = e.item.getTempdata();
  var ticks = temp.get('previewTicks');
  if (ticks == null) {
    ticks = 0;
  }
  ticks += 1;
  if (ticks < PREVIEW_EVERY_TICKS) {
    temp.put('previewTicks', ticks);
    return;
  }
  temp.put('previewTicks', 0);
  var player = e.player;
  var world = player.getWorld();
  var roads = listRoads(world.getStoreddata());
  var px = player.getX();
  var pz = player.getZ();
  var y = player.getY() + 0.4;
  var range2 = PREVIEW_RANGE * PREVIEW_RANGE;
  for (var i = 0; i < roads.length; i++) {
    var road = roads[i];
    var midX = (road.sx + road.ex) / 2;
    var midZ = (road.sz + road.ez) / 2;
    var dx = midX - px;
    var dz = midZ - pz;
    if (dx * dx + dz * dz > range2) {
      continue;
    }
    spawnRoadParticles(world, road, y);
  }
}

