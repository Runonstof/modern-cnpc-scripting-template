import { getFieldNames } from "~/lib/reflection";

export function interact(e) {
    // e.npc.say(getFieldNames(e.player.getMCEntity()).join('\n'));
    e.npc.say(e.player.getMCEntity().m_20194_ + '');
}