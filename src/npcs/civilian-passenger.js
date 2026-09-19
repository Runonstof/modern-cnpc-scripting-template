const WrapperEntity = Java.type('mcinterface1122.WrapperEntity');

const CAR_UUID_KEY = 'carUuid';
const SEAT_INDEX_KEY = 'seatIndex';

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

function getBackSeats(vehicle) {
  if (!vehicle || !vehicle.parts) {
    return [];
  }
  const seats = [];
  const parts = Java.from(vehicle.parts);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (String(part.getClass().getSimpleName()) !== 'PartSeat') {
      continue;
    }
    const place = part.placementDefinition;
    if (!place || place.isController || place.pos.z >= 1.5) {
      continue;
    }
    seats.push(part);
  }
  seats.sort(function (a, b) {
    return a.placementDefinition.pos.x - b.placementDefinition.pos.x;
  });
  return seats;
}

function ensureSeated(npc, vehicle, seatIndex) {
  const seats = getBackSeats(vehicle);
  const seat = seats[seatIndex];
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

export function init(e) {
  const npc = e.npc;
  const stored = npc.getStoreddata();
  const worldTemp = npc.getWorld().getTempdata();
  if (!stored.has(CAR_UUID_KEY) && worldTemp.has('mtsCarUuid')) {
    stored.put(CAR_UUID_KEY, worldTemp.get('mtsCarUuid'));
  }
  const ai = npc.getAi();
  ai.setMovingType(0);
  ai.setStandingType(1);
  ai.setRetaliateType(3);
  ai.setReturnsHome(false);
  ai.setWalkingSpeed(0);
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
  if (!npc.getMount()) {
    npc.setPosition(car.getX(), car.getY(), car.getZ());
  }
  ensureSeated(npc, vehicle, stored.get(SEAT_INDEX_KEY) | 0);
}
