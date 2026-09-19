// ==UserScript==
// @id                 548277
// @namespace          runonstof
// @name               ScriptManager
// @version            2.1.2
// @description        Download and manage CustomNPCs scripts in-game, without having to access any files!
// @author             Runonstof
// @license            MIT
// @minecraft          1.20.1
// @match              https://customnpcs.com
// @scripttype         player
// @category           Utility
// @downloadURL https://update.greasyfork.org/scripts/548277/ScriptManager.user.js
// @updateURL https://update.greasyfork.org/scripts/548277/ScriptManager.meta.js
// ==/UserScript==

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
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

var Thread = Java.type('java.lang.Thread');
function handleAsyncError(error) {
  // dd("§cError: " + error.message)
  // print(error);
  dd('§cError: ' + error.message);
  dd(error.stack);
}
function doAsync(callback) {
  var thread = new Thread(function () {
    var result;
    try {
      result = callback();
    } catch (e) {
      handleAsyncError(e);
    }
    return result;
  });
  thread.start();
  return thread;
}

var URL = Java.type("java.net.URL");
var OutputStreamWriter = Java.type("java.io.OutputStreamWriter");
var BufferedReader = Java.type("java.io.BufferedReader");
var InputStreamReader = Java.type("java.io.InputStreamReader");
// Custom error class
var HttpError = /*#__PURE__*/function (_Error) {
  function HttpError(response, responseCode) {
    var _this;
    _classCallCheck(this, HttpError);
    _this = _callSuper(this, HttpError, ["HttpError: ".concat(responseCode)]);
    _this.response = response;
    return _this;
  }
  _inherits(HttpError, _Error);
  return _createClass(HttpError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
function request(method, url) {
  var requestBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  url = new URL(url);
  var connection = url.openConnection();
  connection.setRequestMethod(method);
  if (method === "POST") {
    connection.setRequestProperty("Content-Type", "application/json");
    connection.setDoOutput(true);
    if (requestBody) {
      var writer = new OutputStreamWriter(connection.getOutputStream(), "UTF-8");
      writer.write(JSON.stringify(requestBody));
      writer.flush();
      writer.close();
    }
  } else {
    connection.setDoOutput(false);
  }
  var responseCode = connection.getResponseCode();
  var reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
  var response = "";
  var line;
  while ((line = reader.readLine()) != null) {
    response += line + '\n';
  }
  reader.close();
  if (!(responseCode >= 200 && responseCode < 400)) {
    throw new HttpError(response, responseCode);
  }
  connection.disconnect();
  return response;
}
function get(url) {
  return request("GET", url, null);
}
function post(url, requestBody) {
  return request("POST", url, requestBody);
}
function getJson(url) {
  return JSON.parse(get(url));
}
function postJson(url, requestBody) {
  return JSON.parse(post(url, requestBody));
}
var http = {
  get: get,
  post: post,
  getJson: getJson,
  postJson: postJson,
  request: request,
  HttpError: HttpError
};

var File = Java.type('java.io.File');
var Files = Java.type('java.nio.file.Files');
var StandardCharsets = Java.type('java.nio.charset.StandardCharsets');
var JString = Java.type('java.lang.String');
var MINECRAFT_VERSION = '1.20.1';
var CATEGORIES = ['Combat', 'Magic', 'NPCs', 'Creatures', 'Items', 'World', 'Movement', 'GUI', 'Utility', 'Fun'];
var SORTS = [{
  key: '',
  label: 'Relevance'
}, {
  key: 'ratings',
  label: 'Ratings'
}, {
  key: 'created',
  label: 'Newest'
}, {
  key: 'updated',
  label: 'Recently updated'
}, {
  key: 'name',
  label: 'Name'
}];
var AUTHOR_LIST_SCRIPT_ID = 549558;
var SCRIPT_MANAGER_ID = 548277;
var LOCAL_VERSION = '2.1.2';
var REPO_BASE_URL = 'https://greasyfork.org';
var REPO_BASE_CDN_URL = 'https://update.greasyfork.org';
var REPO_BASE_API_URL = 'https://api.greasyfork.org';
var AUTHORS_KEY = 'scriptmanager_authors';
var AUTHORS_CACHED_AT_KEY = 'scriptmanager_authors_cached_at';
var AUTHOR_CACHE_MS = 1000 * 60 * 60;
var HIDDEN_SCRIPT_IDS = {};
HIDDEN_SCRIPT_IDS[AUTHOR_LIST_SCRIPT_ID] = true;
var TYPE_MAP = {
  block: 'blocks',
  door: 'doors',
  item: 'items',
  npc: 'npcs',
  forge: 'forge',
  player: 'players'
};
function scriptsRoot() {
  return new File(API.getLevelDir(), 'scripts');
}
function ecmascriptRoot() {
  return new File(scriptsRoot(), 'ecmascript');
}
function installedFile() {
  return new File(scriptsRoot(), 'installed.json');
}
function readText(file) {
  if (!file.exists()) {
    return '';
  }
  return new JString(Files.readAllBytes(file.toPath()), StandardCharsets.UTF_8);
}
function writeText(file, contents) {
  var parent = file.getParentFile();
  if (parent && !parent.exists()) {
    parent.mkdirs();
  }
  Files.write(file.toPath(), new JString(String(contents)).getBytes(StandardCharsets.UTF_8));
}
function parseAuthorIds(values) {
  var ids = [];
  for (var i = 0; i < values.length; i++) {
    var id = parseInt(String(values[i]).replace(/[^\d]/g, ''), 10);
    if (!isNaN(id)) {
      ids.push(id);
    }
  }
  return ids;
}
function parseMetadata(raw) {
  var properties = {};
  var lines = String(raw || '').split(/[\r\n]+/);
  var regex = /^\s*\/\/\s*@([^\s]+)\s+([\s\S]+)$/;
  for (var i = 0; i < lines.length; i++) {
    var match = regex.exec(lines[i]);
    if (!match) {
      continue;
    }
    var key = match[1];
    if (!properties[key]) {
      properties[key] = [];
    }
    properties[key].push(match[2].replace(/\s+$/, ''));
  }
  return properties;
}
function metadataValue(properties, key, fallback) {
  var values = properties[key];
  if (values && values.length) {
    return values[0];
  }
  return fallback;
}
function metadataValues(properties, key) {
  return properties[key] || [];
}
function isCompatibleMcVersion(properties) {
  return metadataValues(properties, 'minecraft').indexOf(MINECRAFT_VERSION) !== -1;
}
function isCustomNpcsScript(properties) {
  var matches = metadataValues(properties, 'match').concat(metadataValues(properties, 'include'));
  for (var i = 0; i < matches.length; i++) {
    if (String(matches[i]).toLowerCase().indexOf('customnpcs.com') !== -1) {
      return true;
    }
  }
  return false;
}
function normalizeCategory(value) {
  var want = String(value || '').toLowerCase().replace(/^\s+|\s+$/g, '');
  if (!want || want === 'all') {
    return '';
  }
  for (var i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].toLowerCase() === want) {
      return CATEGORIES[i];
    }
  }
  return '';
}
function readCategories(metadata) {
  var found = {};
  var values = metadataValues(metadata, 'category');
  for (var i = 0; i < values.length; i++) {
    var parts = String(values[i]).split(',');
    for (var j = 0; j < parts.length; j++) {
      var cat = normalizeCategory(parts[j]);
      if (cat) {
        found[cat] = true;
      }
    }
  }
  var out = [];
  for (var _i = 0; _i < CATEGORIES.length; _i++) {
    if (found[CATEGORIES[_i]]) {
      out.push(CATEGORIES[_i]);
    }
  }
  return out;
}
function attachScriptCategories(scripts) {
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (script.categories) {
      continue;
    }
    try {
      script.categories = readCategories(fetchScriptMetadata(script.id));
    } catch (err) {
      script.categories = [];
    }
  }
  return scripts;
}
function compareVersions(version1, version2) {
  var v1 = String(version1 || '0').split('.');
  var v2 = String(version2 || '0').split('.');
  var len = Math.max(v1.length, v2.length);
  for (var i = 0; i < len; i++) {
    var a = parseInt(v1[i] || '0', 10);
    var b = parseInt(v2[i] || '0', 10);
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  }
  return 0;
}
function slugify(name) {
  var slug = String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return slug || 'script';
}
function wrapLines(text, width) {
  var words = String(text || '').replace(/\s+/g, ' ').trim().split(' ');
  if (!words[0]) {
    return [];
  }
  var lines = [];
  var current = '';
  for (var i = 0; i < words.length; i++) {
    var next = current ? current + ' ' + words[i] : words[i];
    if (next.length > width && current) {
      lines.push(current);
      current = words[i];
    } else {
      current = next;
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines;
}
function normalizeScript(data) {
  var users = data.users || [];
  var authors = [];
  for (var i = 0; i < users.length; i++) {
    authors.push({
      id: parseInt(users[i].id, 10),
      name: users[i].name || 'Unknown'
    });
  }
  return {
    id: parseInt(data.id, 10),
    name: data.name || 'Script ' + data.id,
    description: data.description || '',
    version: data.version || '0',
    authors: authors,
    good_ratings: data.good_ratings || 0,
    ok_ratings: data.ok_ratings || 0,
    bad_ratings: data.bad_ratings || 0,
    total_installs: data.total_installs || 0,
    url: data.url || REPO_BASE_URL + '/en/scripts/' + data.id,
    license: data.license || '',
    createdAt: data.created_at || data.created || '',
    updatedAt: data.code_updated_at || data.updated_at || data.updated || ''
  };
}
function scriptAuthor(script) {
  return script && script.authors && script.authors[0] ? script.authors[0] : null;
}
function catalogEntries(raw) {
  if (!raw) {
    return [];
  }
  if (raw.execute && raw.execute.length) {
    return raw.execute;
  }
  if (raw.query && raw.query.length) {
    return raw.query;
  }
  if (raw.length) {
    return raw;
  }
  return [];
}
function catalogSortQuery(sort) {
  for (var i = 0; i < SORTS.length; i++) {
    if (SORTS[i].key && SORTS[i].key === sort) {
      return '&sort=' + SORTS[i].key;
    }
  }
  return '';
}
function fetchCatalog(sort) {
  var raw = catalogEntries(http.getJson(REPO_BASE_API_URL + '/scripts/by-site/customnpcs.com.json?filter_locale=0' + catalogSortQuery(sort)));
  var scripts = [];
  for (var i = 0; i < raw.length; i++) {
    var script = normalizeScript(raw[i]);
    if (!HIDDEN_SCRIPT_IDS[script.id]) {
      scripts.push(script);
    }
  }
  return scripts;
}
function fetchScriptInfo(id) {
  return normalizeScript(http.getJson(REPO_BASE_API_URL + '/scripts/' + id + '.json'));
}
function fetchScriptMetadata(id) {
  var raw = http.get(REPO_BASE_CDN_URL + '/scripts/' + id + '/script.meta.js');
  return parseMetadata(raw);
}
function fetchScriptContents(id) {
  return http.get(REPO_BASE_CDN_URL + '/scripts/' + id + '/script.user.js');
}
function emptyAuthors() {
  return {
    trusted: [],
    featured: [],
    blacklisted: []
  };
}
function loadAuthors() {
  if (world.storeddata.has(AUTHORS_KEY) && world.storeddata.has(AUTHORS_CACHED_AT_KEY)) {
    var cachedAt = parseInt(world.storeddata.get(AUTHORS_CACHED_AT_KEY), 10);
    if (Date.now() - cachedAt < AUTHOR_CACHE_MS) {
      return JSON.parse(world.storeddata.get(AUTHORS_KEY));
    }
  }
  var metadata = fetchScriptMetadata(AUTHOR_LIST_SCRIPT_ID);
  var authors = {
    trusted: parseAuthorIds(metadataValues(metadata, 'trusted')),
    featured: parseAuthorIds(metadataValues(metadata, 'featured')),
    blacklisted: parseAuthorIds(metadataValues(metadata, 'blacklist'))
  };
  world.storeddata.put(AUTHORS_KEY, JSON.stringify(authors));
  world.storeddata.put(AUTHORS_CACHED_AT_KEY, String(Date.now()));
  return authors;
}
function isTrusted(authors, id) {
  return authors.trusted.indexOf(parseInt(id, 10)) !== -1;
}
function isFeatured(authors, id) {
  return authors.featured.indexOf(parseInt(id, 10)) !== -1;
}
function isBlacklisted(authors, id) {
  return authors.blacklisted.indexOf(parseInt(id, 10)) !== -1;
}
function loadInstalled() {
  var file = installedFile();
  if (!file.exists()) {
    return [];
  }
  try {
    var data = JSON.parse(readText(file));
    return data && data.scripts ? data.scripts : [];
  } catch (err) {
    return [];
  }
}
function saveInstalled(scripts) {
  writeText(installedFile(), JSON.stringify({
    scripts: scripts
  }, null, 2));
}
function registerSelfInstalled() {
  var existing = getInstalled(SCRIPT_MANAGER_ID);
  var record = {
    id: SCRIPT_MANAGER_ID,
    name: existing && existing.name ? existing.name : 'ScriptManager',
    version: LOCAL_VERSION,
    author: existing && existing.author ? existing.author : 'Runonstof',
    authorId: existing && existing.authorId ? existing.authorId : 1210996,
    path: existing && existing.path ? existing.path : 'players/script-manager.js',
    installedAt: existing && existing.installedAt ? existing.installedAt : Date.now()
  };
  if (existing && existing.version === record.version && existing.path === record.path && existing.name === record.name) {
    return existing;
  }
  var scripts = loadInstalled();
  var replaced = false;
  for (var i = 0; i < scripts.length; i++) {
    if (parseInt(scripts[i].id, 10) === SCRIPT_MANAGER_ID) {
      scripts[i] = record;
      replaced = true;
      break;
    }
  }
  if (!replaced) {
    scripts.push(record);
  }
  saveInstalled(scripts);
  return record;
}
function getInstalled(id) {
  var scripts = loadInstalled();
  var want = parseInt(id, 10);
  for (var i = 0; i < scripts.length; i++) {
    if (parseInt(scripts[i].id, 10) === want) {
      return scripts[i];
    }
  }
  return null;
}
function isInstalled(id) {
  return !!getInstalled(id);
}
function currentSelfVersion() {
  var installed = getInstalled(SCRIPT_MANAGER_ID);
  return installed && installed.version ? installed.version : LOCAL_VERSION;
}
function checkSelfUpdate() {
  var remote = fetchScriptInfo(SCRIPT_MANAGER_ID);
  var local = currentSelfVersion();
  return {
    available: compareVersions(local, remote.version) < 0,
    local: local,
    remote: remote.version,
    script: remote
  };
}
function isUpdateAvailable(script) {
  var installed = getInstalled(script.id);
  if (!installed) {
    return false;
  }
  return compareVersions(installed.version, script.version) < 0;
}
function filterCatalog(scripts, query, category) {
  var q = String(query || '').toLowerCase().replace(/^\s+|\s+$/g, '');
  var cat = normalizeCategory(category);
  var out = [];
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (cat) {
      var cats = script.categories || [];
      if (cats.indexOf(cat) === -1) {
        continue;
      }
    }
    if (q) {
      var author = scriptAuthor(script);
      var hay = (script.name + ' ' + script.description + ' ' + script.id + ' ' + (author ? author.name : '')).toLowerCase();
      if (hay.indexOf(q) === -1) {
        continue;
      }
    }
    out.push(script);
  }
  return out;
}
function suggestedPath(id, metadata) {
  var type = String(metadataValue(metadata, 'scripttype', '')).toLowerCase().replace(/^\s+|\s+$/g, '');
  var folder = TYPE_MAP[type] || '';
  var name = slugify(metadataValue(metadata, 'name', '')) || String(id);
  var relative = folder ? folder + '/' + name + '.js' : name + '.js';
  if (relative.indexOf('..') !== -1) {
    throw new Error('Invalid script path');
  }
  return relative;
}
function injectHeaderTags(contents, tags) {
  var next = String(contents);
  var keys = Object.keys(tags);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (new RegExp('//\\s*@' + key + '\\b').test(next)) {
      continue;
    }
    next = next.replace('// ==/UserScript==', '// @' + key + ' ' + tags[key] + '\n// ==/UserScript==');
  }
  return next;
}
function installScript(script, metadata) {
  var contents = injectHeaderTags(fetchScriptContents(script.id), {
    id: script.id,
    authorid: scriptAuthor(script) ? scriptAuthor(script).id : ''
  });
  var existing = getInstalled(script.id);
  var path = script.id === SCRIPT_MANAGER_ID ? existing && existing.path ? existing.path : 'players/script-manager.js' : existing ? existing.path : suggestedPath(script.id, metadata || {});
  var file = new File(ecmascriptRoot(), path);
  writeText(file, contents);
  var record = {
    id: script.id,
    name: script.name,
    version: script.version,
    author: scriptAuthor(script) ? scriptAuthor(script).name : '',
    authorId: scriptAuthor(script) ? scriptAuthor(script).id : 0,
    path: path,
    installedAt: Date.now()
  };
  var scripts = loadInstalled();
  var replaced = false;
  for (var i = 0; i < scripts.length; i++) {
    if (parseInt(scripts[i].id, 10) === script.id) {
      scripts[i] = record;
      replaced = true;
      break;
    }
  }
  if (!replaced) {
    scripts.push(record);
  }
  saveInstalled(scripts);
  return record;
}
function uninstallScript(id) {
  var existing = getInstalled(id);
  if (!existing) {
    return false;
  }
  var file = new File(ecmascriptRoot(), existing.path);
  if (file.exists() && existing.path.indexOf('..') === -1) {
    file.delete();
  }
  var kept = [];
  var scripts = loadInstalled();
  var want = parseInt(id, 10);
  for (var i = 0; i < scripts.length; i++) {
    if (parseInt(scripts[i].id, 10) !== want) {
      kept.push(scripts[i]);
    }
  }
  saveInstalled(kept);
  return true;
}
function reloadCustomNpcScripts() {
  API.executeCommand(world, 'noppes script reload');
}
function scriptListLabel(script) {
  if (!isInstalled(script.id)) {
    return script.name;
  }
  if (isUpdateAvailable(script)) {
    return '§e↑ ' + script.name;
  }
  return '§a✔ ' + script.name;
}
function installedListLabel(record) {
  return record.name + ' §7v' + record.version;
}
function scriptUrl(id) {
  return REPO_BASE_URL + '/en/scripts/' + id;
}
function reportUrl(id) {
  return REPO_BASE_URL + '/en/scripts/' + id + '/feedback';
}

var GUI_ID = 548277;
var GAMEMODE_CREATIVE = 1;
var PREFIX = '§e§l[ScriptManager] §r';
var ID_BTN_BROWSE = 10;
var ID_BTN_INSTALLED = 11;
var ID_BTN_SELF_UPDATE = 12;
var ID_BTN_CREATE = 13;
var ID_SEARCH = 101;
var ID_BTN_SEARCH = 102;
var ID_SCRIPT_ID = 103;
var ID_BTN_OPEN_ID = 104;
var ID_SORT_PREV = 130;
var ID_SORT_NEXT = 131;
var ID_SORT_LABEL = 132;
var ID_CAT_PREV = 133;
var ID_CAT_NEXT = 134;
var ID_CAT_LABEL = 135;
var ID_SCROLL = 110;
var ID_BTN_BACK = 50;
var ID_BTN_INSTALL = 51;
var ID_BTN_CODE = 52;
var ID_BTN_YES = 53;
var ID_BTN_NO = 54;
var ID_BTN_UNINSTALL = 55;
var ID_BTN_REPORT = 56;
var ID_BTN_CREATE_OK = 57;
var ID_BTN_UPLOAD = 58;
var ID_BTN_CONTINUE = 59;
var ID_CREATE_TITLE = 201;
var ID_CREATE_DESC = 202;
var ID_CREATE_MC = 203;
var ID_CREATE_AUTHOR = 204;
var ID_CREATE_TYPE = 205;
var ID_CREATE_HEADER = 206;
var ID_CREATE_CATEGORY = 207;
var ID_DESC_LINE = 310;
var ID_CONFIRM_LINE = 410;
var ID_CREATE_HELP = 510;
var ID_WARN_LINE = 610;
var GREASYFORK_NEW_URL = 'https://greasyfork.org/en/script_versions/new';
var SCRIPT_TYPES = [{
  key: 'player',
  label: 'Player'
}, {
  key: 'npc',
  label: 'NPC'
}, {
  key: 'item',
  label: 'Item'
}, {
  key: 'block',
  label: 'Block'
}, {
  key: 'forge',
  label: 'Forge'
}, {
  key: 'door',
  label: 'Door'
}];
var sessions = {};
function sessionFor(player) {
  var uuid = player.getUUID();
  if (!sessions[uuid]) {
    sessions[uuid] = {
      page: 'browse',
      returnPage: 'browse',
      loading: false,
      message: '',
      query: '',
      category: 'All',
      sort: '',
      catalogSort: null,
      idInput: '',
      catalog: [],
      filtered: [],
      installed: [],
      selected: null,
      metadata: null,
      authors: emptyAuthors(),
      selfUpdate: null,
      selfUpdateChecked: false,
      selfUpdateWarned: false,
      createTitle: '',
      createDescription: '',
      createMinecraft: MINECRAFT_VERSION,
      createAuthor: '',
      createType: 'player',
      createCategory: 'Utility',
      createHeader: ''
    };
  }
  return sessions[uuid];
}
function busy(state) {
  return state.loading;
}
function setStatus(state, message) {
  state.message = message || '';
}
function tell(player, text) {
  player.message(PREFIX + text);
}
function showLink(player, label, url, hover) {
  var payload = JSON.stringify(['', {
    text: PREFIX
  }, {
    text: label,
    clickEvent: {
      action: 'open_url',
      value: url
    },
    hoverEvent: {
      action: 'show_text',
      value: hover || url
    }
  }]);
  API.executeCommand(world, 'tellraw ' + player.getName() + ' ' + payload);
}
function authorStyle(state, author) {
  if (!author) {
    return {
      text: '§7Unknown author',
      hover: ''
    };
  }
  if (isBlacklisted(state.authors, author.id)) {
    return {
      text: '§cBy ' + author.name + ' ✖',
      hover: '§cThis author is blacklisted. Download at your own risk.'
    };
  }
  if (isTrusted(state.authors, author.id)) {
    return {
      text: '§aBy ' + author.name + ' ✔',
      hover: '§aThis author is verified.'
    };
  }
  if (isFeatured(state.authors, author.id)) {
    return {
      text: '§eBy ' + author.name + ' ★',
      hover: '§eThis author is featured.'
    };
  }
  return {
    text: '§7By ' + author.name,
    hover: '§fThis author is NOT verified. Proceed with caution.'
  };
}
function fieldText(gui, id, fallback) {
  var field = gui.getComponent(id);
  if (!field || typeof field.getText !== 'function') {
    return fallback || '';
  }
  return String(field.getText() || '').replace(/[\r\n]+/g, ' ').replace(/^\s+|\s+$/g, '');
}
function rememberInputs(state, gui) {
  if (!gui) {
    return;
  }
  if (gui.getComponent(ID_SEARCH)) {
    state.query = fieldText(gui, ID_SEARCH, state.query);
  }
  if (gui.getComponent(ID_SCRIPT_ID)) {
    state.idInput = fieldText(gui, ID_SCRIPT_ID, state.idInput);
  }
  if (gui.getComponent(ID_CREATE_TITLE)) {
    state.createTitle = fieldText(gui, ID_CREATE_TITLE, state.createTitle);
  }
  if (gui.getComponent(ID_CREATE_DESC)) {
    state.createDescription = fieldText(gui, ID_CREATE_DESC, state.createDescription);
  }
  if (gui.getComponent(ID_CREATE_MC)) {
    state.createMinecraft = fieldText(gui, ID_CREATE_MC, state.createMinecraft);
  }
  if (gui.getComponent(ID_CREATE_AUTHOR)) {
    state.createAuthor = fieldText(gui, ID_CREATE_AUTHOR, state.createAuthor);
  }
  var typeList = gui.getComponent(ID_CREATE_TYPE);
  if (typeList && typeof typeList.getSelected === 'function') {
    var index = typeList.getSelected();
    if (SCRIPT_TYPES[index]) {
      state.createType = SCRIPT_TYPES[index].key;
    }
  }
  var createCat = gui.getComponent(ID_CREATE_CATEGORY);
  if (createCat && typeof createCat.getSelected === 'function') {
    var _index = createCat.getSelected();
    if (CATEGORIES[_index]) {
      state.createCategory = CATEGORIES[_index];
    }
  }
}
function browseCategoryLabels() {
  return ['All'].concat(CATEGORIES);
}
function sortIndex(key) {
  for (var i = 0; i < SORTS.length; i++) {
    if (SORTS[i].key === key) {
      return i;
    }
  }
  return 0;
}
function browseCategoryIndex(value) {
  var labels = browseCategoryLabels();
  for (var i = 0; i < labels.length; i++) {
    if (labels[i] === value) {
      return i;
    }
  }
  return 0;
}
function categoryIndex(value) {
  for (var i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i] === value) {
      return i;
    }
  }
  return CATEGORIES.indexOf('Utility') !== -1 ? CATEGORIES.indexOf('Utility') : 0;
}
function hideIfLoading(component, state) {
  if (!component || !busy(state) || typeof component.setVisible !== 'function') {
    return component;
  }
  component.setVisible(false);
  if (typeof component.getTextureRect === 'function') {
    var inner = component.getTextureRect();
    if (inner && typeof inner.setVisible === 'function') {
      inner.setVisible(false);
    }
  }
  if (typeof component.getLeftTexture === 'function') {
    var left = component.getLeftTexture();
    if (left && typeof left.setVisible === 'function') {
      left.setVisible(false);
    }
    var right = component.getRightTexture();
    if (right && typeof right.setVisible === 'function') {
      right.setVisible(false);
    }
  }
  return component;
}
function fitButtonList(list) {
  if (!list || typeof list.getTextureRect !== 'function') {
    return list;
  }
  var inner = list.getTextureRect();
  if (!inner) {
    return list;
  }
  var left = list.getLeftTexture();
  var right = list.getRightTexture();
  var leftW = left ? left.getWidth() : 16;
  var rightW = right ? right.getWidth() : 16;
  inner.setPos(leftW, 0);
  inner.setSize(list.getWidth() - leftW - rightW, list.getHeight());
  return list;
}
function addCycleRow(gui, ids, x, y, width, label, hover, player, enabled) {
  var prev = bindButton(gui.addButton(ids.prev, '<', x, y, 16, 16), player);
  prev.setEnabled(enabled);
  prev.setHoverText(hover);
  var text = gui.addLabel(ids.label, label, x + 18, y + 4, width - 36, 16, 0xffffff);
  text.setCentered(true);
  hideIfLoading(text, sessionFor(player));
  var next = bindButton(gui.addButton(ids.next, '>', x + width - 16, y, 16, 16), player);
  next.setEnabled(enabled);
  next.setHoverText(hover);
}
function typeIndex(key) {
  for (var i = 0; i < SCRIPT_TYPES.length; i++) {
    if (SCRIPT_TYPES[i].key === key) {
      return i;
    }
  }
  return 0;
}
function metaLine(key, value) {
  var line = '// @' + key;
  while (line.length < 23) {
    line += ' ';
  }
  return line + value;
}
function buildCreateHeader(state) {
  var author = state.createAuthor || 'Unknown';
  return ['// ==UserScript==', metaLine('namespace', slugify(author)), metaLine('name', state.createTitle), metaLine('version', '1.0.0'), metaLine('description', state.createDescription), metaLine('author', author), metaLine('license', 'MIT'), metaLine('minecraft', state.createMinecraft || MINECRAFT_VERSION), metaLine('match', 'https://customnpcs.com'), metaLine('scripttype', state.createType || 'player'), metaLine('category', state.createCategory || 'Utility'), '// ==/UserScript=='].join('\n');
}
function bindButton(button, player) {
  if (!button || typeof button.setOnPress !== 'function') {
    return button;
  }
  button.setOnPress(function (gui) {
    onButton(player, gui, button.getID());
  });
  return button;
}
function bindScroll(scroll, player) {
  if (!scroll || typeof scroll.setOnClick !== 'function') {
    return scroll;
  }
  scroll.setOnClick(function (gui, comp) {
    var index = 0;
    if (comp && typeof comp.getSelection === 'function') {
      var selection = comp.getSelection();
      if (selection && selection.length) {
        index = selection[0];
      }
    }
    onScroll(player, gui, index);
  });
  return scroll;
}
function addTopBar(gui, state) {
  var player = gui.getPlayer();
  gui.addLabel(1, '§eScriptManager', 8, 6, 200, 16, 0xffffff);
  var browse = bindButton(gui.addButton(ID_BTN_BROWSE, 'Browse', 8, 24, 72, 16), player);
  browse.setEnabled(!busy(state) && state.page !== 'browse');
  var installed = bindButton(gui.addButton(ID_BTN_INSTALLED, 'Installed', 84, 24, 72, 16), player);
  installed.setEnabled(!busy(state) && state.page !== 'installed');
  var create = bindButton(gui.addButton(ID_BTN_CREATE, 'Create', 160, 24, 72, 16), player);
  create.setEnabled(!busy(state) && state.page !== 'create' && state.page !== 'create-upload');
  if (state.selfUpdate && state.selfUpdate.available && state.page !== 'confirm' && state.page !== 'not-cnpc') {
    gui.addLabel(14, '§eUpdate v' + state.selfUpdate.remote + ' available', 164, 8, 140, 12, 0xffffff).setHoverText('§fYou have v' + state.selfUpdate.local + '.');
    var update = bindButton(gui.addButton(ID_BTN_SELF_UPDATE, 'Update', 308, 4, 68, 16), player);
    update.setEnabled(!busy(state));
  }
}
function addLoadingOverlay(gui, state) {
  if (!state.loading) {
    return;
  }
  var width = gui.getWidth();
  var height = gui.getHeight();
  var barH = 56;
  var barY = Math.floor((height - barH) / 2);
  var bar = gui.addTexturedRect(901, 'minecraft:textures/block/gray_concrete.png', 32, barY, width - 64, barH);
  bar.setRepeatingTexture(16, 16, 0);
  var title = gui.addLabel(902, '§eLoading...', 32, barY + 10, width - 64, 16, 0xffffff);
  title.setCentered(true);
  var text = gui.addLabel(903, state.message || 'Please wait', 32, barY + 28, width - 64, 16, 0xffffff);
  text.setCentered(true);
}
function openGui(player, state) {
  var gui = API.createCustomGui(GUI_ID, 384, 220, false, player);
  gui.setDoesPauseGame(false);
  if (state.page === 'details') {
    renderDetails(gui, state);
  } else if (state.page === 'confirm') {
    renderConfirm(gui, state);
  } else if (state.page === 'installed') {
    renderInstalled(gui, state);
  } else if (state.page === 'create') {
    renderCreate(gui, state);
  } else if (state.page === 'create-upload') {
    renderCreateUpload(gui, state);
  } else if (state.page === 'not-cnpc') {
    renderNotCustomNpcs(gui, state);
  } else {
    renderBrowse(gui, state);
  }
  if (!state.loading && state.message) {
    gui.addLabel(2, state.message, 8, 204, 368, 12, 0xaaaaaa);
  }
  addLoadingOverlay(gui, state);
  player.showCustomGui(gui);
}
function renderBrowse(gui, state) {
  var player = gui.getPlayer();
  addTopBar(gui, state);
  gui.addLabel(3, 'Browse scripts', 8, 46, 180, 12, 0xffffff);
  var sortX = 8;
  var sortW = 120;
  var catX = 132;
  var catW = 112;
  var filterY = 80;
  var search = gui.addTextArea(ID_SEARCH, sortX, 58, sortW, 16);
  search.setText(state.query || '');
  hideIfLoading(search, state);
  var searchBtn = bindButton(gui.addButton(ID_BTN_SEARCH, 'Search', catX, 58, catW, 16), player);
  searchBtn.setEnabled(!busy(state));
  searchBtn.setHoverText('Search by script title or author');
  gui.addLabel(4, 'Open by ID', 256, 46, 120, 12, 0xffffff);
  var idField = gui.addTextArea(ID_SCRIPT_ID, 256, 58, 64, 16);
  idField.setText(state.idInput || '');
  hideIfLoading(idField, state);
  var openBtn = bindButton(gui.addButton(ID_BTN_OPEN_ID, 'Open', 324, 56, 52, 20), player);
  openBtn.setEnabled(!busy(state));
  if (!busy(state)) {
    addCycleRow(gui, {
      prev: ID_SORT_PREV,
      next: ID_SORT_NEXT,
      label: ID_SORT_LABEL
    }, sortX, filterY, sortW, SORTS[sortIndex(state.sort || '')].label, 'Sort scripts. Press Search to apply.', player, true);
    addCycleRow(gui, {
      prev: ID_CAT_PREV,
      next: ID_CAT_NEXT,
      label: ID_CAT_LABEL
    }, catX, filterY, catW, browseCategoryLabels()[browseCategoryIndex(state.category || 'All')], 'Filter by category. Press Search to apply.', player, true);
  }
  var labels = browseScrollLabels(state);
  var scroll = bindScroll(gui.addScroll(ID_SCROLL, 8, 98, 368, 116, labels), player);
  if (typeof scroll.setHasSearch === 'function') {
    scroll.setHasSearch(false);
  }
  scroll.setEnabled(!busy(state) && !!state.filtered.length);
}
function browseScrollLabels(state) {
  var labels = [];
  for (var i = 0; i < state.filtered.length; i++) {
    labels.push(scriptListLabel(state.filtered[i]));
  }
  if (!labels.length) {
    labels.push('No scripts found');
  }
  return labels;
}
function formatScriptDate(value) {
  if (!value) {
    return '—';
  }
  try {
    var Instant = Java.type('java.time.Instant');
    var DateTimeFormatter = Java.type('java.time.format.DateTimeFormatter');
    var ZoneId = Java.type('java.time.ZoneId');
    return DateTimeFormatter.ofPattern('d MMM yyyy').withZone(ZoneId.systemDefault()).format(Instant.parse(String(value)));
  } catch (err) {
    var text = String(value);
    var day = text.split('T')[0];
    return day || text;
  }
}
function cycleChoice(values, current, delta) {
  var index = 0;
  for (var i = 0; i < values.length; i++) {
    if (values[i] === current) {
      index = i;
      break;
    }
  }
  return values[(index + delta + values.length) % values.length];
}
function updateBrowseScroll(gui, state) {
  var scroll = gui.getComponent(ID_SCROLL);
  if (!scroll || typeof scroll.setList !== 'function') {
    refresh(gui.getPlayer());
    return;
  }
  var labels = browseScrollLabels(state);
  scroll.setList(labels);
  scroll.setEnabled(!busy(state) && !!state.filtered.length);
  gui.update(scroll);
}
function renderCreate(gui, state) {
  var player = gui.getPlayer();
  addTopBar(gui, state);
  gui.addLabel(3, '§nCreate and upload script', 8, 46, 360, 12, 0xffffff);
  gui.addLabel(601, 'Script title', 8, 62, 180, 10, 0xffffff);
  hideIfLoading(gui.addTextArea(ID_CREATE_TITLE, 8, 74, 368, 16).setText(state.createTitle || ''), state);
  gui.addLabel(602, 'Script description', 8, 94, 180, 10, 0xffffff);
  hideIfLoading(gui.addTextArea(ID_CREATE_DESC, 8, 106, 368, 16).setText(state.createDescription || ''), state);
  gui.addLabel(603, 'Minecraft version', 8, 126, 176, 10, 0xffffff);
  hideIfLoading(gui.addTextArea(ID_CREATE_MC, 8, 138, 176, 16).setText(state.createMinecraft || MINECRAFT_VERSION), state);
  gui.addLabel(604, 'Author', 196, 126, 180, 10, 0xffffff);
  hideIfLoading(gui.addTextArea(ID_CREATE_AUTHOR, 196, 138, 180, 16).setText(state.createAuthor || player.getName()), state);
  gui.addLabel(605, 'Script type', 8, 158, 176, 10, 0xffffff);
  gui.addLabel(606, 'Category', 196, 158, 180, 10, 0xffffff);
  if (!busy(state)) {
    var types = gui.addButtonList(ID_CREATE_TYPE, 8, 170, 176, 16);
    types.setValues('Player', 'NPC', 'Item', 'Block', 'Forge', 'Door');
    types.setSelected(typeIndex(state.createType || 'player'));
    fitButtonList(types);
    var cats = gui.addButtonList(ID_CREATE_CATEGORY, 196, 170, 180, 16);
    cats.setValues('Combat', 'Magic', 'NPCs', 'Creatures', 'Items', 'World', 'Movement', 'GUI', 'Utility', 'Fun');
    cats.setSelected(categoryIndex(state.createCategory || 'Utility'));
    fitButtonList(cats);
  }
  var ok = bindButton(gui.addButton(ID_BTN_CREATE_OK, 'OK', 304, 188, 72, 20), player);
  ok.setEnabled(!busy(state));
}
function renderCreateUpload(gui, state) {
  var player = gui.getPlayer();
  addTopBar(gui, state);
  gui.addLabel(3, '§nCreate and upload script', 8, 46, 360, 12, 0xffffff);
  var header = gui.addTextArea(ID_CREATE_HEADER, 8, 60, 368, 86);
  header.setText(state.createHeader || buildCreateHeader(state));
  hideIfLoading(header, state);
  var help = wrapLines('Copy the text above and paste it at the very top of your script. Then press the button, open the link, and upload that file. After that it will show up in Script Manager.', 62);
  for (var i = 0; i < help.length; i++) {
    gui.addLabel(ID_CREATE_HELP + i, help[i], 8, 150 + i * 10, 368, 10, 0xffffff);
  }
  var back = bindButton(gui.addButton(ID_BTN_BACK, '← Back', 8, 192, 72, 20), player);
  back.setEnabled(!busy(state));
  var upload = bindButton(gui.addButton(ID_BTN_UPLOAD, 'Open upload page', 216, 192, 160, 20), player);
  upload.setEnabled(!busy(state));
  upload.setHoverText('A clickable link will appear in chat');
}
function renderInstalled(gui, state) {
  addTopBar(gui, state);
  gui.addLabel(3, 'Your installed scripts', 8, 46, 300, 12, 0xffffff);
  var labels = [];
  for (var i = 0; i < state.installed.length; i++) {
    labels.push(installedListLabel(state.installed[i]));
  }
  if (!labels.length) {
    labels.push('Nothing installed yet');
  }
  var scroll = bindScroll(gui.addScroll(ID_SCROLL, 8, 60, 368, 138, labels), gui.getPlayer());
  if (typeof scroll.setHasSearch === 'function') {
    scroll.setHasSearch(false);
  }
  scroll.setEnabled(!busy(state) && !!state.installed.length);
}
function renderDetails(gui, state) {
  var player = gui.getPlayer();
  addTopBar(gui, state);
  var script = state.selected;
  var back = bindButton(gui.addButton(ID_BTN_BACK, '← Back', 300, 24, 76, 16), player);
  back.setEnabled(!busy(state));
  if (!script) {
    gui.addLabel(3, 'No script selected', 8, 50, 360, 12, 0xff5555);
    return;
  }
  var author = scriptAuthor(script);
  var style = authorStyle(state, author);
  var installed = getInstalled(script.id);
  var update = isUpdateAvailable(script);
  var meta = state.metadata || {};
  var versions = metadataValues(meta, 'minecraft');
  var compatible = versions.length ? isCompatibleMcVersion(meta) : true;
  var cats = readCategories(meta);
  var desc = wrapLines(script.description, 52).slice(0, 5);
  gui.addLabel(3, '§3§n' + script.name, 8, 46, 280, 16, 0xffffff);
  var authorLabel = gui.addLabel(4, style.text, 8, 64, 280, 12, 0xffffff);
  if (style.hover) {
    authorLabel.setHoverText(style.hover);
  }
  gui.addLabel(5, (update ? '§e↑ v' + script.version + '  §7installed v' + installed.version : installed ? '§a✔ v' + script.version : '§6v' + script.version) + '  §7ID ' + script.id, 8, 76, 280, 12, 0xffffff);
  gui.addLabel(6, versions.length ? (compatible ? '§a' : '§c') + 'MC ' + versions.join(', ') + (compatible ? '' : ' (incompatible)') : '§7MC version unknown', 8, 88, 280, 12, 0xffffff);
  var descY = 106;
  if (cats.length) {
    gui.addLabel(16, '§7Category: §f' + cats.join(', '), 8, 100, 280, 12, 0xffffff);
    descY = 114;
  }
  for (var i = 0; i < desc.length; i++) {
    gui.addLabel(ID_DESC_LINE + i, desc[i], 8, descY + i * 10, 280, 10, 0xffffff);
  }
  gui.addLabel(17, '§7Created', 300, 46, 76, 10, 0xffffff);
  gui.addLabel(18, '§f' + formatScriptDate(script.createdAt), 300, 56, 76, 10, 0xffffff);
  gui.addLabel(19, '§7Updated', 300, 70, 76, 10, 0xffffff);
  gui.addLabel(20, '§f' + formatScriptDate(script.updatedAt), 300, 80, 76, 10, 0xffffff);
  var blocked = author && isBlacklisted(state.authors, author.id);
  var install = bindButton(gui.addButton(ID_BTN_INSTALL, installed ? update ? 'Update' : 'Installed' : 'Install', 300, 150, 76, 20), player);
  install.setEnabled(!busy(state) && !blocked && (!installed || update));
  var code = bindButton(gui.addButton(ID_BTN_CODE, 'More info', 300, 126, 76, 20), player);
  code.setEnabled(!busy(state));
  code.setHoverText('A clickable link will appear in chat');
  var report = bindButton(gui.addButton(ID_BTN_REPORT, 'Report', 216, 126, 76, 20), player);
  report.setEnabled(!busy(state));
  report.setHoverText('A clickable link will appear in chat');
  if (installed) {
    var remove = bindButton(gui.addButton(ID_BTN_UNINSTALL, 'Remove', 216, 150, 76, 20), player);
    remove.setEnabled(!busy(state));
  }
}
function renderConfirm(gui, state) {
  var script = state.selected;
  var author = scriptAuthor(script);
  var trusted = author && isTrusted(state.authors, author.id);
  gui.addLabel(1, '§eAre you sure?', 8, 8, 360, 16, 0xffffff);
  var lines = wrapLines('You are about to download ' + (script ? script.name : '?') + ' by ' + (author ? author.name : 'unknown') + '.' + (trusted ? '' : ' WARNING: this author is NOT verified by Featured Authors. Review the code on GreasyFork first. Download at your own risk.') + ' Press YES to install it.', 62);
  for (var i = 0; i < lines.length; i++) {
    gui.addLabel(ID_CONFIRM_LINE + i, (trusted || i < 2 ? '§f' : '§c') + lines[i], 8, 32 + i * 10, 368, 10, 0xffffff);
  }
  var player = gui.getPlayer();
  var no = bindButton(gui.addButton(ID_BTN_NO, 'No', 8, 186, 72, 20), player);
  no.setEnabled(!busy(state));
  var code = bindButton(gui.addButton(ID_BTN_CODE, 'More info', 148, 186, 88, 20), player);
  code.setEnabled(!busy(state));
  var yes = bindButton(gui.addButton(ID_BTN_YES, 'Yes', 304, 186, 72, 20), player);
  yes.setEnabled(!busy(state));
}
function renderNotCustomNpcs(gui, state) {
  var script = state.selected;
  var player = gui.getPlayer();
  gui.addLabel(1, '§eThis may not be a CustomNPCs script', 8, 8, 368, 16, 0xffffff);
  var warn = wrapLines((script ? script.name : 'This script') + ' does not look like it was made for CustomNPCs. It is missing the CustomNPCs site tag.', 62);
  for (var i = 0; i < warn.length; i++) {
    gui.addLabel(ID_WARN_LINE + i, '§c' + warn[i], 8, 32 + i * 10, 368, 10, 0xffffff);
  }
  var intro = wrapLines('If it actually is, the author should add this line at the top of the script:', 62);
  var outro = wrapLines('Then it will show up when people browse scripts. You can still open it if you are sure.', 62);
  var adviceY = 32 + warn.length * 10 + 8;
  for (var _i = 0; _i < intro.length; _i++) {
    gui.addLabel(ID_WARN_LINE + 20 + _i, intro[_i], 8, adviceY, 368, 10, 0xffffff);
    adviceY += 10;
  }
  gui.addLabel(ID_WARN_LINE + 40, '§a// @match https://customnpcs.com', 8, adviceY + 2, 368, 10, 0xffffff);
  adviceY += 14;
  for (var _i2 = 0; _i2 < outro.length; _i2++) {
    gui.addLabel(ID_WARN_LINE + 41 + _i2, outro[_i2], 8, adviceY, 368, 10, 0xffffff);
    adviceY += 10;
  }
  var back = bindButton(gui.addButton(ID_BTN_BACK, '← Back', 8, 186, 72, 20), player);
  back.setEnabled(!busy(state));
  var code = bindButton(gui.addButton(ID_BTN_CODE, 'More info', 148, 186, 88, 20), player);
  code.setEnabled(!busy(state) && !!script);
  var cont = bindButton(gui.addButton(ID_BTN_CONTINUE, 'Continue', 280, 186, 96, 20), player);
  cont.setEnabled(!busy(state));
}
function refresh(player) {
  openGui(player, sessionFor(player));
}
function runJob(player, message, work, after) {
  var state = sessionFor(player);
  if (state.loading) {
    return;
  }
  state.loading = true;
  setStatus(state, message);
  refresh(player);
  doAsync(function () {
    try {
      var result = work(state);
      state.loading = false;
      setStatus(state, '');
      if (after) {
        after(state, result);
      }
      refresh(player);
    } catch (err) {
      state.loading = false;
      setStatus(state, '§c' + (err && err.message ? err.message : String(err)));
      refresh(player);
    }
  });
}
function refreshSelfUpdate(state) {
  if (state.selfUpdateChecked) {
    return;
  }
  state.selfUpdateChecked = true;
  try {
    state.selfUpdate = checkSelfUpdate();
  } catch (err) {
    state.selfUpdate = null;
  }
}
function warnSelfUpdate(player) {
  var state = sessionFor(player);
  if (state.selfUpdateWarned || !state.selfUpdate || !state.selfUpdate.available) {
    return;
  }
  state.selfUpdateWarned = true;
  tell(player, 'A newer ScriptManager is available (§ev' + state.selfUpdate.remote + '§f). You have §7v' + state.selfUpdate.local + '§f. Open !scripts to update, or keep using this version.');
}
function applyBrowseList(state) {
  state.page = 'browse';
  state.selected = null;
  state.metadata = null;
  state.filtered = filterCatalog(state.catalog, state.query, state.category);
}
function loadCatalog(player, then) {
  runJob(player, 'Fetching scripts...', function (next) {
    try {
      next.authors = loadAuthors();
    } catch (err) {
      next.authors = emptyAuthors();
    }
    next.catalog = fetchCatalog(next.sort);
    next.catalogSort = next.sort || '';
    attachScriptCategories(next.catalog);
    next.installed = loadInstalled();
    refreshSelfUpdate(next);
    applyBrowseList(next);
  }, then);
}
function ensureCatalog(player, then) {
  var state = sessionFor(player);
  if (state.catalog.length && state.catalogSort === (state.sort || '')) {
    if (then) {
      then(state);
    }
    refresh(player);
    return;
  }
  loadCatalog(player, then);
}
function goBrowse(player) {
  var state = sessionFor(player);
  applyBrowseList(state);
  if (state.catalog.length) {
    refresh(player);
    return;
  }
  ensureCatalog(player);
}
function goCreate(player) {
  var state = sessionFor(player);
  state.page = 'create';
  state.selected = null;
  state.metadata = null;
  if (!state.createMinecraft) {
    state.createMinecraft = MINECRAFT_VERSION;
  }
  if (!state.createAuthor) {
    state.createAuthor = player.getName();
  }
  if (!state.createType) {
    state.createType = 'player';
  }
  if (!state.createCategory) {
    state.createCategory = 'Utility';
  }
  openGui(player, state);
}
function openScriptById(player, id) {
  var parsed = parseInt(id, 10);
  if (!parsed || parsed === AUTHOR_LIST_SCRIPT_ID) {
    sessionFor(player).message = '§cEnter a valid script id';
    refresh(player);
    return;
  }
  runJob(player, 'Opening script...', function (state) {
    if (!state.authors.trusted.length && !state.authors.featured.length) {
      state.authors = loadAuthors();
    }
    var script = fetchScriptInfo(parsed);
    var metadata = {};
    try {
      metadata = fetchScriptMetadata(parsed);
    } catch (err) {
      metadata = {};
    }
    state.selected = script;
    state.metadata = metadata;
    if (state.page !== 'details' && state.page !== 'confirm' && state.page !== 'not-cnpc') {
      state.returnPage = state.page;
    }
    state.page = isCustomNpcsScript(metadata) ? 'details' : 'not-cnpc';
  });
}
function selectFromBrowse(player, index) {
  var state = sessionFor(player);
  var script = state.filtered[index];
  if (!script) {
    return;
  }
  runJob(player, 'Opening script...', function (next) {
    try {
      next.selected = fetchScriptInfo(script.id);
    } catch (err) {
      next.selected = script;
    }
    try {
      next.metadata = fetchScriptMetadata(script.id);
    } catch (err) {
      next.metadata = {};
    }
    next.returnPage = 'browse';
    next.page = 'details';
  });
}
function selectFromInstalled(player, index) {
  var state = sessionFor(player);
  var record = state.installed[index];
  if (!record) {
    return;
  }
  openScriptById(player, record.id);
}
function doInstall(player) {
  var state = sessionFor(player);
  var script = state.selected;
  if (!script) {
    return;
  }
  runJob(player, 'Installing...', function (next) {
    installScript(script, next.metadata || {});
    next.installed = loadInstalled();
    if (script.id === SCRIPT_MANAGER_ID && next.selfUpdate) {
      next.selfUpdate.available = false;
      next.selfUpdate.local = script.version;
    }
    next.page = 'details';
  }, function () {
    tell(player, 'Installed ' + script.name + '. Applying changes...');
    reloadCustomNpcScripts();
  });
}
function doUninstall(player) {
  var state = sessionFor(player);
  var script = state.selected;
  if (!script) {
    return;
  }
  runJob(player, 'Removing...', function (next) {
    uninstallScript(script.id);
    next.installed = loadInstalled();
    next.page = 'installed';
    next.selected = null;
    next.metadata = null;
  });
}
function chat(e) {
  var msg = String(e.message || '').replace(/^\s+|\s+$/g, '');
  if (msg.indexOf('!scripts') !== 0) {
    return;
  }
  try {
    e.setCanceled(true);
  } catch (err) {
    // chat may not be cancellable
  }
  if (e.player.getGamemode() !== GAMEMODE_CREATIVE) {
    return;
  }
  var parts = msg.split(/\s+/);
  var state = sessionFor(e.player);
  state.page = 'browse';
  state.selected = null;
  state.metadata = null;
  state.message = '';
  if (parts[1] && /^\d+$/.test(parts[1])) {
    state.idInput = parts[1];
    openGui(e.player, state);
    openScriptById(e.player, parts[1]);
    return;
  }
  goBrowse(e.player);
}
function init(e) {
  registerSelfInstalled();
  checkSelfUpdateLater(e.player);
}
function login(e) {
  checkSelfUpdateLater(e.player);
}
function checkSelfUpdateLater(player) {
  var state = sessionFor(player);
  if (state.selfUpdateChecked) {
    warnSelfUpdate(player);
    return;
  }
  doAsync(function () {
    refreshSelfUpdate(state);
    warnSelfUpdate(player);
  });
}
function onButton(player, gui, buttonId) {
  var state = sessionFor(player);
  rememberInputs(state, gui);
  if (busy(state) && buttonId !== ID_BTN_NO) {
    return;
  }
  if (buttonId === ID_BTN_SELF_UPDATE) {
    openScriptById(player, SCRIPT_MANAGER_ID);
    return;
  }
  if (buttonId === ID_BTN_BROWSE) {
    goBrowse(player);
    return;
  }
  if (buttonId === ID_BTN_INSTALLED) {
    state.page = 'installed';
    state.installed = loadInstalled();
    state.selected = null;
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_CREATE) {
    goCreate(player);
    return;
  }
  if (buttonId === ID_BTN_CREATE_OK) {
    if (!state.createTitle) {
      setStatus(state, '§cEnter a script title');
      openGui(player, state);
      return;
    }
    if (!state.createDescription) {
      setStatus(state, '§cEnter a script description');
      openGui(player, state);
      return;
    }
    if (!state.createAuthor) {
      state.createAuthor = player.getName();
    }
    if (!state.createMinecraft) {
      state.createMinecraft = MINECRAFT_VERSION;
    }
    setStatus(state, '');
    state.createHeader = buildCreateHeader(state);
    state.page = 'create-upload';
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_UPLOAD) {
    showLink(player, '§f§nClick here§r to upload your script on GreasyFork', GREASYFORK_NEW_URL, '§eOpen the GreasyFork upload page');
    gui.close();
    return;
  }
  if (buttonId === ID_SORT_PREV || buttonId === ID_SORT_NEXT) {
    var keys = [];
    for (var i = 0; i < SORTS.length; i++) {
      keys.push(SORTS[i].key);
    }
    state.sort = cycleChoice(keys, state.sort || '', buttonId === ID_SORT_NEXT ? 1 : -1);
    openGui(player, state);
    return;
  }
  if (buttonId === ID_CAT_PREV || buttonId === ID_CAT_NEXT) {
    var labels = browseCategoryLabels();
    state.category = cycleChoice(labels, state.category || 'All', buttonId === ID_CAT_NEXT ? 1 : -1);
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_SEARCH) {
    if (state.catalog.length && state.catalogSort === (state.sort || '')) {
      applyBrowseList(state);
      updateBrowseScroll(gui, state);
      return;
    }
    loadCatalog(player);
    return;
  }
  if (buttonId === ID_BTN_OPEN_ID) {
    openScriptById(player, state.idInput);
    return;
  }
  if (buttonId === ID_BTN_CONTINUE) {
    state.page = 'details';
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_NO) {
    state.page = 'details';
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_BACK) {
    if (state.page === 'create-upload') {
      state.page = 'create';
      openGui(player, state);
      return;
    }
    state.page = state.returnPage || 'browse';
    state.selected = null;
    state.metadata = null;
    if (state.page === 'installed') {
      state.installed = loadInstalled();
    }
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_INSTALL) {
    state.page = 'confirm';
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_YES) {
    doInstall(player);
    return;
  }
  if (buttonId === ID_BTN_UNINSTALL) {
    doUninstall(player);
    return;
  }
  if (buttonId === ID_BTN_CODE && state.selected) {
    showLink(player, '§f§nClick here§r for more info on GreasyFork', state.selected.url || scriptUrl(state.selected.id), '§eOpen GreasyFork');
    gui.close();
    return;
  }
  if (buttonId === ID_BTN_REPORT && state.selected) {
    showLink(player, '§f§nClick here§r to report ' + state.selected.name, reportUrl(state.selected.id), '§eReport this script');
    gui.close();
  }
}
function onScroll(player, gui, scrollIndex) {
  var state = sessionFor(player);
  if (busy(state)) {
    return;
  }
  rememberInputs(state, gui);
  if (state.page === 'installed') {
    selectFromInstalled(player, scrollIndex);
    return;
  }
  if (state.page === 'browse') {
    selectFromBrowse(player, scrollIndex);
  }
}

