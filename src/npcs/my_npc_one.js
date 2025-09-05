import { dd } from '~/lib/customnpcs.js';

function interact(e) {
    e.npc.say('Hello, how can I help you?');
    dd('Test');
}

// Make sure to export any event hooks!
export {
    interact,
};