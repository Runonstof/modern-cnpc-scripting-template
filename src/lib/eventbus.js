class EventBus {
  constructor() {
    this.events = {};
  }

  static instance() {
    const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
    const world = API.getIWorld(0);

    const { tempdata } = world;

    if (!tempdata.get('eventbus')) {
      tempdata.put('eventbus', new EventBus());
    }

    return tempdata.get('eventbus');
  }

  on(event, callback, identifier) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    this.events[event].push({
      callback,
      identifier,
    });
  }

  emit(event, data) {
    if (!this.events.hasOwnProperty(event)) {
      return;
    }

    const listeners = this.events[event];

    listeners.forEach((listener) => {
      listener.callback(data);
    });
  }

  remove(event, identifier) {
    if (!this.events.hasOwnProperty(event)) {
      return;
    }

    const listeners = this.events[event];

    this.events[event] = listeners.filter((listener) => listener.identifier !== identifier);
  }

  removeAll(event) {
    if (!this.events.hasOwnProperty(event)) {
      return;
    }

    this.events[event] = [];
  }

  getListeners(event) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }

    return this.events[event];
  }
}

export const eventBus = EventBus.instance();
