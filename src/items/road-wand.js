import {
  incomingRoads,
  listRoads,
  nearestRoad,
  outgoingRoads,
  saveRoad,
  removeRoad
} from '~/lib/roads';

const IBlock = Java.type('noppes.npcs.api.block.IBlock');
const PREVIEW_RANGE = 48;
const PREVIEW_EVERY_TICKS = 6;

function isRoadWand(item) {
  return item && item.getStoreddata && item.getStoreddata().get('isRoadWand') === 1;
}

function isHeld(player, item) {
  const held = player.getMainhandItem();
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

export function init(e) {
  if (!isRoadWand(e.item)) {
    return;
  }
  e.item.setCustomName('Road Wand');
  e.item.setMaxStackSize(1);
}

export function attack(e) {
  if (!isRoadWand(e.item)) {
    return;
  }
  e.setCanceled(true);
  const player = e.player;
  if (e.type === 0 && player.isSneaking()) {
    deleteNearest(player);
    return;
  }
  const block = getBlockTarget(e);
  if (!block) {
    return;
  }
  const x = block.getX();
  const z = block.getZ();
  const data = selection(e.item);
  data.put('sx', x);
  data.put('sz', z);
  tell(player, 'Start set to ' + formatCell(x, z));
}

export function interact(e) {
  if (!isRoadWand(e.item)) {
    return;
  }
  e.setCanceled(true);
  const player = e.player;
  if (e.type === 0 && player.isSneaking()) {
    selection(e.item).remove('sx');
    selection(e.item).remove('sz');
    tell(player, 'Selection cleared');
    return;
  }
  const block = getBlockTarget(e);
  if (!block) {
    return;
  }
  const data = selection(e.item);
  if (!data.has('sx')) {
    tell(player, 'Left-click a block to set the start first');
    return;
  }
  const sx = data.get('sx') | 0;
  const sz = data.get('sz') | 0;
  const ex = block.getX();
  const ez = block.getZ();
  if (sx === ex && sz === ez) {
    tell(player, 'Start and end cannot be the same block');
    return;
  }
  const stored = player.getWorld().getStoreddata();
  const road = saveRoad(stored, sx, sz, ex, ez);
  const roads = listRoads(stored);
  const forks = outgoingRoads(roads, road).length;
  const merges = incomingRoads(roads, road).length;
  const notes = [];
  if (merges) {
    notes.push(merges + (merges === 1 ? ' merge in' : ' merges in'));
  }
  if (forks) {
    notes.push(forks + (forks === 1 ? ' fork out' : ' forks out'));
  }
  tell(
    player,
    'Saved road_' +
      road.id +
      '  ' +
      formatCell(sx, sz) +
      ' -> ' +
      formatCell(ex, ez) +
      (notes.length ? '  (' + notes.join(', ') + ')' : '')
  );
  data.put('sx', ex);
  data.put('sz', ez);
}

function deleteNearest(player) {
  const stored = player.getWorld().getStoreddata();
  const roads = listRoads(stored);
  const found = nearestRoad(roads, player.getX(), player.getZ());
  if (!found || found.dist2 > 64) {
    tell(player, 'No road nearby to delete');
    return;
  }
  removeRoad(stored, found.road.id);
  tell(
    player,
    'Deleted road_' +
      found.road.id +
      '  ' +
      formatCell(found.road.sx, found.road.sz) +
      ' -> ' +
      formatCell(found.road.ex, found.road.ez)
  );
}

function spawnRoadParticles(world, road, y) {
  const dx = road.ex - road.sx;
  const dz = road.ez - road.sz;
  const len = Math.sqrt(dx * dx + dz * dz);
  const steps = Math.max(1, Math.min(40, Math.ceil(len / 2)));
  world.spawnParticle('flame', road.sx + 0.5, y, road.sz + 0.5, 0, 0.02, 0, 0, 3);
  world.spawnParticle('happyVillager', road.ex + 0.5, y, road.ez + 0.5, 0, 0.05, 0, 0, 4);
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = road.sx + dx * t + 0.5;
    const z = road.sz + dz * t + 0.5;
    world.spawnParticle(
      'endRod',
      x,
      y,
      z,
      (dx / len) * 0.15,
      0.01,
      (dz / len) * 0.15,
      0.02,
      1
    );
  }
}

export function tick(e) {
  if (!isRoadWand(e.item) || !isHeld(e.player, e.item)) {
    return;
  }
  const temp = e.item.getTempdata();
  let ticks = temp.get('previewTicks');
  if (ticks == null) {
    ticks = 0;
  }
  ticks += 1;
  if (ticks < PREVIEW_EVERY_TICKS) {
    temp.put('previewTicks', ticks);
    return;
  }
  temp.put('previewTicks', 0);

  const player = e.player;
  const world = player.getWorld();
  const roads = listRoads(world.getStoreddata());
  const px = player.getX();
  const pz = player.getZ();
  const y = player.getY() + 0.4;
  const range2 = PREVIEW_RANGE * PREVIEW_RANGE;
  for (let i = 0; i < roads.length; i++) {
    const road = roads[i];
    const midX = (road.sx + road.ex) / 2;
    const midZ = (road.sz + road.ez) / 2;
    const dx = midX - px;
    const dz = midZ - pz;
    if (dx * dx + dz * dz > range2) {
      continue;
    }
    spawnRoadParticles(world, road, y);
  }
}
