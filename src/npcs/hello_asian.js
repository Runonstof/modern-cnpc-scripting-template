import { dd } from '~/lib/dump';


export function init(e) {
    dd('hello asian');


    const fn = () => {
        const name = e.npc.name;

        e.npc.say('helo!');
    };

    fn();
}

var object = {
    a: 'test',
    b: 123
};


export function tick(e, defaultArg = 'test') {

    const {a} = object;

    e.say(a);

    e.say(defaultArg);
}