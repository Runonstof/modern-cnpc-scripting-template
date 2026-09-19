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
function connectingRoads(roads, fromRoad) {
  return outgoingRoads(roads, fromRoad);
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
function lookAhead(road, x, z, ahead) {
  var vx = road.ex - road.sx;
  var vz = road.ez - road.sz;
  var len = Math.sqrt(vx * vx + vz * vz);
  if (len < 0.001) {
    return {
      x: road.ex,
      z: road.ez
    };
  }
  var closest = closestPointOnRoad(road, x, z);
  var remain = (1 - closest.t) * len;
  if (remain <= ahead) {
    return {
      x: road.ex,
      z: road.ez
    };
  }
  return {
    x: closest.x + vx / len * ahead,
    z: closest.z + vz / len * ahead
  };
}
function findRoadById(roads, id) {
  for (var i = 0; i < roads.length; i++) {
    if (roads[i].id === id) {
      return roads[i];
    }
  }
  return null;
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
function nearestRoadStart(roads, x, z, maxDist) {
  var best = null;
  var bestDist = Infinity;
  var max2 = maxDist * maxDist;
  for (var i = 0; i < roads.length; i++) {
    var d = dist2(x, z, roads[i].sx, roads[i].sz);
    if (d <= max2 && d < bestDist) {
      bestDist = d;
      best = roads[i];
    }
  }
  return best;
}

var WrapperEntity = Java.type('mcinterface1122.WrapperEntity');
var CAR_UUID_KEY = 'carUuid';
var ROAD_ID_KEY = 'roadId';
var THROTTLE = 0.38;
var MAX_STEER = 28;
var LOOK_AHEAD = 10;
var END_DIST = 5;
var START_SNAP = 16;
var SEGMENT_SNAP = 8;
function getInnerVehicle(iEntity) {
  if (!iEntity) {
    return null;
  }
  var mc = iEntity.getMCEntity();
  if (!mc) {
    return null;
  }
  var field = mc.getClass().getDeclaredField('entity');
  field.setAccessible(true);
  return field.get(mc);
}
function getJavaField(obj, name) {
  var current = obj.getClass();
  while (current) {
    try {
      var field = current.getDeclaredField(name);
      field.setAccessible(true);
      return field.get(obj);
    } catch (err) {
      current = current.getSuperclass();
    }
  }
  return null;
}
function getControllerSeat(vehicle) {
  if (!vehicle || !vehicle.parts) {
    return null;
  }
  var parts = Java.from(vehicle.parts);
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (String(part.getClass().getSimpleName()) === 'PartSeat' && part.placementDefinition && part.placementDefinition.isController) {
      return part;
    }
  }
  return null;
}
function ensureSeated(npc, vehicle) {
  var seat = getControllerSeat(vehicle);
  if (!seat) {
    return false;
  }
  var wrapper = WrapperEntity.getWrapperFor(npc.getMCEntity());
  if (seat.rider != null && wrapper.equals(seat.rider)) {
    return true;
  }
  if (seat.rider != null) {
    return false;
  }
  return seat.setRider(wrapper, true);
}
function stopDriving(vehicle) {
  var engines = vehicle.engines;
  if (engines && engines.size() > 0) {
    var engine = engines.get(0);
    if (engine.currentGearVar.currentValue !== 0) {
      engine.shiftNeutral();
    }
  }
  vehicle.throttleVar.setTo(0, true);
  vehicle.rudderInputVar.setTo(0, true);
  var brake = vehicle.getOrCreateVariable('brake');
  if (brake) {
    brake.setTo(1, true);
  }
  var parking = vehicle.getOrCreateVariable('p_brake');
  if (parking) {
    parking.setTo(1, true);
  }
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
function pickStartingRoad(roads, x, z) {
  var atStart = nearestRoadStart(roads, x, z, START_SNAP);
  if (atStart) {
    return atStart;
  }
  var near = nearestRoad(roads, x, z);
  if (near && near.dist2 <= SEGMENT_SNAP * SEGMENT_SNAP) {
    return near.road;
  }
  return null;
}
function wrapYaw(yaw) {
  yaw = yaw % 360;
  if (yaw < 0) {
    yaw += 360;
  }
  return yaw;
}
function vehicleMcYaw(vehicle) {
  var heading = getJavaField(vehicle, 'headingVector');
  if (heading) {
    return Math.atan2(-heading.x, heading.z) * 180 / Math.PI;
  }
  var orientation = vehicle.orientation;
  if (orientation && orientation.angles) {
    return -orientation.angles.y;
  }
  return 0;
}
function faceDriveDirection(npc, vehicle) {
  var yaw = vehicleMcYaw(vehicle);
  npc.setRotation(wrapYaw(yaw));
  npc.setPitch(0);
  var mc = npc.getMCEntity();
  // field_70177_z = rotationYaw
  mc.field_70177_z = yaw;
  // field_70126_B = prevRotationYaw
  mc.field_70126_B = yaw;
  // field_70759_as = rotationYawHead
  mc.field_70759_as = yaw;
  // field_70758_at = prevRotationYawHead
  mc.field_70758_at = yaw;
  // field_70761_aq = renderYawOffset
  mc.field_70761_aq = yaw;
  // field_70760_ar = prevRenderYawOffset
  mc.field_70760_ar = yaw;
  // field_70125_A = rotationPitch
  mc.field_70125_A = 0;
  // field_70127_C = prevRotationPitch
  mc.field_70127_C = 0;
}
function steerToward(vehicle, targetX, targetZ) {
  var pos = vehicle.position;
  var heading = getJavaField(vehicle, 'headingVector');
  if (!pos || !heading) {
    return;
  }
  var dx = targetX - pos.x;
  var dz = targetZ - pos.z;
  var cross = heading.x * dz - heading.z * dx;
  var steer = Math.max(-MAX_STEER, Math.min(MAX_STEER, cross * 6));
  vehicle.rudderInputVar.setTo(steer, true);
}
function startEngine(vehicle) {
  var engines = vehicle.engines;
  if (engines && engines.size() > 0) {
    var engine = engines.get(0);
    if (!engine.running) {
      engine.autoStartEngine();
    } else if (engine.currentGearVar.currentValue === 0) {
      engine.shiftUp();
    }
  }
  var parking = vehicle.getOrCreateVariable('p_brake');
  if (parking && parking.isActive) {
    parking.setTo(0, true);
  }
  var brake = vehicle.getOrCreateVariable('brake');
  if (brake) {
    brake.setTo(0, true);
  }
  vehicle.throttleVar.setTo(THROTTLE, true);
}
function followRoads(vehicle, stored, worldStored) {
  var pos = vehicle.position;
  if (!pos) {
    return false;
  }
  var roads = listRoads(worldStored);
  if (!roads.length) {
    return false;
  }
  var road = findRoadById(roads, stored.get(ROAD_ID_KEY));
  if (!road) {
    road = pickStartingRoad(roads, pos.x, pos.z);
    if (!road) {
      return false;
    }
    stored.put(ROAD_ID_KEY, road.id);
  }
  if (dist2(pos.x, pos.z, road.ex, road.ez) <= END_DIST * END_DIST) {
    var next = connectingRoads(roads, road);
    if (!next.length) {
      stored.remove(ROAD_ID_KEY);
      return false;
    }
    // Fork: more than one start at this end. Merger: other ends join this start; no choice here.
    road = pickRandom(next);
    stored.put(ROAD_ID_KEY, road.id);
  }
  startEngine(vehicle);
  var target = lookAhead(road, pos.x, pos.z, LOOK_AHEAD);
  steerToward(vehicle, target.x, target.z);
  return true;
}
function init(e) {
  var npc = e.npc;
  var stored = npc.getStoreddata();
  var worldTemp = npc.getWorld().getTempdata();
  if (!stored.has(CAR_UUID_KEY) && worldTemp.has('mtsCarUuid')) {
    stored.put(CAR_UUID_KEY, worldTemp.get('mtsCarUuid'));
  }
  if (!stored.has('homeX') && worldTemp.has('mtsCarHomeX')) {
    stored.put('homeX', worldTemp.get('mtsCarHomeX'));
    stored.put('homeZ', worldTemp.get('mtsCarHomeZ'));
  }
  var ai = npc.getAi();
  ai.setMovingType(0);
  ai.setStandingType(1);
  ai.setRetaliateType(3);
  ai.setReturnsHome(false);
  ai.setInteractWithNPCs(false);
}
function tick(e) {
  var npc = e.npc;
  var stored = npc.getStoreddata();
  var carUuid = stored.get(CAR_UUID_KEY);
  if (!carUuid) {
    return;
  }
  var car = npc.getWorld().getEntity(carUuid);
  var vehicle = getInnerVehicle(car);
  if (!vehicle) {
    return;
  }
  if (!ensureSeated(npc, vehicle)) {
    return;
  }
  faceDriveDirection(npc, vehicle);
  if (stored.get('driving') === 0) {
    stopDriving(vehicle);
    return;
  }
  var following = followRoads(vehicle, stored, npc.getWorld().getStoreddata());
  if (!following) {
    stored.put('driving', 0);
    stopDriving(vehicle);
  }
  faceDriveDirection(npc, vehicle);
}
function interact(e) {
  if (!e.player || e.player.getGamemode() !== 1) {
    return;
  }
  e.setCanceled(true);
  var stored = e.npc.getStoreddata();
  var next = stored.get('driving') === 0 ? 1 : 0;
  stored.put('driving', next);
  var car = e.npc.getWorld().getEntity(stored.get(CAR_UUID_KEY));
  var vehicle = getInnerVehicle(car);
  if (vehicle && next === 0) {
    stopDriving(vehicle);
  }
  e.player.message(next ? 'Driving on' : 'Driving off');
}

