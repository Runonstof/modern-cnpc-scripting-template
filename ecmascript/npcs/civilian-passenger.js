var WrapperEntity = Java.type('mcinterface1122.WrapperEntity');
var CAR_UUID_KEY = 'carUuid';
var SEAT_INDEX_KEY = 'seatIndex';
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
function getBackSeats(vehicle) {
  if (!vehicle || !vehicle.parts) {
    return [];
  }
  var seats = [];
  var parts = Java.from(vehicle.parts);
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (String(part.getClass().getSimpleName()) !== 'PartSeat') {
      continue;
    }
    var place = part.placementDefinition;
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
  var seats = getBackSeats(vehicle);
  var seat = seats[seatIndex];
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
function init(e) {
  var npc = e.npc;
  var stored = npc.getStoreddata();
  var worldTemp = npc.getWorld().getTempdata();
  if (!stored.has(CAR_UUID_KEY) && worldTemp.has('mtsCarUuid')) {
    stored.put(CAR_UUID_KEY, worldTemp.get('mtsCarUuid'));
  }
  var ai = npc.getAi();
  ai.setMovingType(0);
  ai.setStandingType(1);
  ai.setRetaliateType(3);
  ai.setReturnsHome(false);
  ai.setWalkingSpeed(0);
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
  if (!npc.getMount()) {
    npc.setPosition(car.getX(), car.getY(), car.getZ());
  }
  ensureSeated(npc, vehicle, stored.get(SEAT_INDEX_KEY) | 0);
}

