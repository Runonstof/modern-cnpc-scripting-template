export const ROAD_PREFIX = 'road_';
export const ROAD_SEQ_KEY = 'road_seq';

function toInt(value) {
  return value | 0;
}

export function parseRoad(raw) {
  if (raw == null) {
    return null;
  }
  try {
    const data = JSON.parse(String(raw));
    if (
      data &&
      isFinite(data.sx) &&
      isFinite(data.sz) &&
      isFinite(data.ex) &&
      isFinite(data.ez)
    ) {
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

export function listRoads(stored) {
  const keys = Java.from(stored.getKeys());
  const roads = [];
  for (let i = 0; i < keys.length; i++) {
    const key = String(keys[i]);
    if (key.indexOf(ROAD_PREFIX) !== 0 || key === ROAD_SEQ_KEY) {
      continue;
    }
    const idText = key.substring(ROAD_PREFIX.length);
    if (!/^\d+$/.test(idText)) {
      continue;
    }
    const road = parseRoad(stored.get(key));
    if (!road) {
      continue;
    }
    road.id = parseInt(idText, 10);
    road.key = key;
    roads.push(road);
  }
  return roads;
}

export function saveRoad(stored, sx, sz, ex, ez) {
  let seq = stored.get(ROAD_SEQ_KEY);
  if (seq == null) {
    seq = 0;
  }
  seq = toInt(seq) + 1;
  stored.put(ROAD_SEQ_KEY, seq);
  const key = ROAD_PREFIX + seq;
  const road = {
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

export function removeRoad(stored, id) {
  const key = ROAD_PREFIX + id;
  if (!stored.has(key)) {
    return false;
  }
  stored.remove(key);
  return true;
}

export function sameCell(ax, az, bx, bz) {
  return toInt(ax) === toInt(bx) && toInt(az) === toInt(bz);
}

/**
 * Roads are one-way. A link exists only when an end cell equals a start cell.
 * Several starts on one end is a fork. Several ends on one start is a merger.
 */
export function outgoingRoads(roads, fromRoad) {
  const next = [];
  for (let i = 0; i < roads.length; i++) {
    const road = roads[i];
    if (road.id === fromRoad.id) {
      continue;
    }
    if (sameCell(road.sx, road.sz, fromRoad.ex, fromRoad.ez)) {
      next.push(road);
    }
  }
  return next;
}

export function incomingRoads(roads, toRoad) {
  const prev = [];
  for (let i = 0; i < roads.length; i++) {
    const road = roads[i];
    if (road.id === toRoad.id) {
      continue;
    }
    if (sameCell(road.ex, road.ez, toRoad.sx, toRoad.sz)) {
      prev.push(road);
    }
  }
  return prev;
}

export function connectingRoads(roads, fromRoad) {
  return outgoingRoads(roads, fromRoad);
}

export function dist2(ax, az, bx, bz) {
  const dx = ax - bx;
  const dz = az - bz;
  return dx * dx + dz * dz;
}

export function closestPointOnRoad(road, x, z) {
  const vx = road.ex - road.sx;
  const vz = road.ez - road.sz;
  const len2 = vx * vx + vz * vz;
  if (len2 === 0) {
    return { x: road.sx, z: road.sz, t: 0 };
  }
  let t = ((x - road.sx) * vx + (z - road.sz) * vz) / len2;
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

export function lookAhead(road, x, z, ahead) {
  const vx = road.ex - road.sx;
  const vz = road.ez - road.sz;
  const len = Math.sqrt(vx * vx + vz * vz);
  if (len < 0.001) {
    return { x: road.ex, z: road.ez };
  }
  const closest = closestPointOnRoad(road, x, z);
  const remain = (1 - closest.t) * len;
  if (remain <= ahead) {
    return { x: road.ex, z: road.ez };
  }
  return {
    x: closest.x + (vx / len) * ahead,
    z: closest.z + (vz / len) * ahead
  };
}

export function findRoadById(roads, id) {
  for (let i = 0; i < roads.length; i++) {
    if (roads[i].id === id) {
      return roads[i];
    }
  }
  return null;
}

export function nearestRoad(roads, x, z) {
  let best = null;
  let bestDist = Infinity;
  for (let i = 0; i < roads.length; i++) {
    const point = closestPointOnRoad(roads[i], x, z);
    const d = dist2(x, z, point.x, point.z);
    if (d < bestDist) {
      bestDist = d;
      best = roads[i];
    }
  }
  return best ? { road: best, dist2: bestDist } : null;
}

export function nearestRoadStart(roads, x, z, maxDist) {
  let best = null;
  let bestDist = Infinity;
  const max2 = maxDist * maxDist;
  for (let i = 0; i < roads.length; i++) {
    const d = dist2(x, z, roads[i].sx, roads[i].sz);
    if (d <= max2 && d < bestDist) {
      bestDist = d;
      best = roads[i];
    }
  }
  return best;
}
