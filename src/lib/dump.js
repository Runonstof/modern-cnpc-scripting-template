
export const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
export const world = API.getIWorld(0);


export function dd(...args) {

  for (let arg of args) {
    if (!(arg instanceof Error) && typeof arg === 'object') {
      arg = JSON.stringify(arg, null, 2);
    }

    world.broadcast(arg);
  }
}