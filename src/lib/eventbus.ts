type EventBusEventListenerCallback = (event: any) => void;

type EventBusEventListener = {
  callback: EventBusEventListenerCallback;
  identifier?: string;
};

class EventBus {

  // private tempdata: IData;
  private events: { [key: string]: EventBusEventListener[] } = {};

  // constructor
  static instance(): EventBus {
    const API = Java.type('noppes.npcs.api.NpcAPI').Instance();
    const world = API.getIWorld(0);

    const { tempdata } = world;

    if (!tempdata.get('eventbus')) {
      tempdata.put('eventbus', new EventBus());
    }

    return tempdata.get('eventbus') as EventBus;
  }

  public on(event: string, callback: EventBusEventListenerCallback, identifier?: string) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    this.events[event].push({
      callback,
      identifier,
    });
  }

  public emit(event: string, data: any) {
    if (!this.events.hasOwnProperty(event)) {
      return;
    }

    const listeners = this.events[event];

    listeners.forEach((listener) => {
      listener.callback(data);
    });
  }

  public remove(event: string, identifier: string) {
    if (!this.events.hasOwnProperty(event)) {
      return;
    }

    const listeners = this.events[event];

    this.events[event] = listeners.filter((listener) => listener.identifier !== identifier);
  }

  public removeAll(event: string) {
    if (!this.events.hasOwnProperty(event)) {
      return;
    }

    this.events[event] = [];
  }

  public getListeners(event: string) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }

    return this.events[event];
  }
}

export const eventBus = EventBus.instance();
