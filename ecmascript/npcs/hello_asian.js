function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

var API = Java.type('noppes.npcs.api.NpcAPI').Instance();
var world = API.getIWorld('minecraft:overworld');
function dd() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var arg = _args[_i];
    if (!(arg instanceof Error) && _typeof(arg) === 'object') {
      arg = JSON.stringify(arg, null, 2);
    }
    world.broadcast(arg);
  }
}

function init(e) {
  dd('hello asian');
  var fn = function fn() {
    e.npc.name;
    e.npc.say('helo!');
  };
  fn();
}
var object = {
  a: 'test',
  b: 123
};
function tick(e) {
  var defaultArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'test';
  var a = object.a;
  e.say(a);
  e.say(defaultArg);
}

