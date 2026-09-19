import {
  connectingRoads,
  dist2,
  findRoadById,
  listRoads,
  lookAhead,
  nearestRoad,
  nearestRoadStart
} from '~/lib/roads';

const WrapperEntity = Java.type('mcinterface1122.WrapperEntity');

const CAR_UUID_KEY = 'carUuid';
const ROAD_ID_KEY = 'roadId';
const THROTTLE = 0.38;
const MAX_STEER = 28;
const LOOK_AHEAD = 10;
const END_DIST = 5;
const START_SNAP = 16;
const SEGMENT_SNAP = 8;

function getInnerVehicle(iEntity) {
  if (!iEntity) {
    return null;
  }
  const mc = iEntity.getMCEntity();
  if (!mc) {
    return null;
  }
  const field = mc.getClass().getDeclaredField('entity');
  field.setAccessible(true);
  return field.get(mc);
}

function getJavaField(obj, name) {
  let current = obj.getClass();
  while (current) {
    try {
      const field = current.getDeclaredField(name);
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
  const parts = Java.from(vehicle.parts);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (
      String(part.getClass().getSimpleName()) === 'PartSeat' &&
      part.placementDefinition &&
      part.placementDefinition.isController
    ) {
      return part;
    }
  }
  return null;
}

function ensureSeated(npc, vehicle) {
  const seat = getControllerSeat(vehicle);
  if (!seat) {
    return false;
  }
  const wrapper = WrapperEntity.getWrapperFor(npc.getMCEntity());
  if (seat.rider != null && wrapper.equals(seat.rider)) {
    return true;
  }
  if (seat.rider != null) {
    return false;
  }
  return seat.setRider(wrapper, true);
}

function stopDriving(vehicle) {
  const engines = vehicle.engines;
  if (engines && engines.size() > 0) {
    const engine = engines.get(0);
    if (engine.currentGearVar.currentValue !== 0) {
      engine.shiftNeutral();
    }
  }
  vehicle.throttleVar.setTo(0, true);
  vehicle.rudderInputVar.setTo(0, true);
  const brake = vehicle.getOrCreateVariable('brake');
  if (brake) {
    brake.setTo(1, true);
  }
  const parking = vehicle.getOrCreateVariable('p_brake');
  if (parking) {
    parking.setTo(1, true);
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickStartingRoad(roads, x, z) {
  const atStart = nearestRoadStart(roads, x, z, START_SNAP);
  if (atStart) {
    return atStart;
  }
  const near = nearestRoad(roads, x, z);
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
  const heading = getJavaField(vehicle, 'headingVector');
  if (heading) {
    return (Math.atan2(-heading.x, heading.z) * 180) / Math.PI;
  }
  const orientation = vehicle.orientation;
  if (orientation && orientation.angles) {
    return -orientation.angles.y;
  }
  return 0;
}

function faceDriveDirection(npc, vehicle) {
  const yaw = vehicleMcYaw(vehicle);
  npc.setRotation(wrapYaw(yaw));
  npc.setPitch(0);
  const mc = npc.getMCEntity();
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
  const pos = vehicle.position;
  const heading = getJavaField(vehicle, 'headingVector');
  if (!pos || !heading) {
    return;
  }
  const dx = targetX - pos.x;
  const dz = targetZ - pos.z;
  const cross = heading.x * dz - heading.z * dx;
  const steer = Math.max(-MAX_STEER, Math.min(MAX_STEER, cross * 6));
  vehicle.rudderInputVar.setTo(steer, true);
}

function startEngine(vehicle) {
  const engines = vehicle.engines;
  if (engines && engines.size() > 0) {
    const engine = engines.get(0);
    if (!engine.running) {
      engine.autoStartEngine();
    } else if (engine.currentGearVar.currentValue === 0) {
      engine.shiftUp();
    }
  }
  const parking = vehicle.getOrCreateVariable('p_brake');
  if (parking && parking.isActive) {
    parking.setTo(0, true);
  }
  const brake = vehicle.getOrCreateVariable('brake');
  if (brake) {
    brake.setTo(0, true);
  }
  vehicle.throttleVar.setTo(THROTTLE, true);
}

function followRoads(vehicle, stored, worldStored) {
  const pos = vehicle.position;
  if (!pos) {
    return false;
  }
  const roads = listRoads(worldStored);
  if (!roads.length) {
    return false;
  }

  let road = findRoadById(roads, stored.get(ROAD_ID_KEY));
  if (!road) {
    road = pickStartingRoad(roads, pos.x, pos.z);
    if (!road) {
      return false;
    }
    stored.put(ROAD_ID_KEY, road.id);
  }

  if (dist2(pos.x, pos.z, road.ex, road.ez) <= END_DIST * END_DIST) {
    const next = connectingRoads(roads, road);
    if (!next.length) {
      stored.remove(ROAD_ID_KEY);
      return false;
    }
    // Fork: more than one start at this end. Merger: other ends join this start; no choice here.
    road = pickRandom(next);
    stored.put(ROAD_ID_KEY, road.id);
  }

  startEngine(vehicle);
  const target = lookAhead(road, pos.x, pos.z, LOOK_AHEAD);
  steerToward(vehicle, target.x, target.z);
  return true;
}

export function init(e) {
  const npc = e.npc;
  const stored = npc.getStoreddata();
  const worldTemp = npc.getWorld().getTempdata();
  if (!stored.has(CAR_UUID_KEY) && worldTemp.has('mtsCarUuid')) {
    stored.put(CAR_UUID_KEY, worldTemp.get('mtsCarUuid'));
  }
  if (!stored.has('homeX') && worldTemp.has('mtsCarHomeX')) {
    stored.put('homeX', worldTemp.get('mtsCarHomeX'));
    stored.put('homeZ', worldTemp.get('mtsCarHomeZ'));
  }

  const ai = npc.getAi();
  ai.setMovingType(0);
  ai.setStandingType(1);
  ai.setRetaliateType(3);
  ai.setReturnsHome(false);
  ai.setInteractWithNPCs(false);
}

export function tick(e) {
  const npc = e.npc;
  const stored = npc.getStoreddata();
  const carUuid = stored.get(CAR_UUID_KEY);
  if (!carUuid) {
    return;
  }
  const car = npc.getWorld().getEntity(carUuid);
  const vehicle = getInnerVehicle(car);
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
  const following = followRoads(vehicle, stored, npc.getWorld().getStoreddata());
  if (!following) {
    stored.put('driving', 0);
    stopDriving(vehicle);
  }
  faceDriveDirection(npc, vehicle);
}

export function interact(e) {
  if (!e.player || e.player.getGamemode() !== 1) {
    return;
  }
  e.setCanceled(true);
  const stored = e.npc.getStoreddata();
  const next = stored.get('driving') === 0 ? 1 : 0;
  stored.put('driving', next);
  const car = e.npc.getWorld().getEntity(stored.get(CAR_UUID_KEY));
  const vehicle = getInnerVehicle(car);
  if (vehicle && next === 0) {
    stopDriving(vehicle);
  }
  e.player.message(next ? 'Driving on' : 'Driving off');
}
