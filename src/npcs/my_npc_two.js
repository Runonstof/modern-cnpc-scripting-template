import { doAsync } from '~/lib/async';
import http from '~/lib/http';

function interact(e) {
    doAsync(() => e.npc.say(http.getJson('https://thequoteshub.com/api').text))
}

// Make sure to export any event hooks!
export {
    interact,
};
