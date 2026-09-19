import { API, world } from '~/lib/dump';
import http from '~/lib/http';

const File = Java.type('java.io.File');
const Files = Java.type('java.nio.file.Files');
const StandardCharsets = Java.type('java.nio.charset.StandardCharsets');
const JString = Java.type('java.lang.String');

export const MINECRAFT_VERSION = '1.20.1';
export const CATEGORIES = [
  'Combat',
  'Magic',
  'NPCs',
  'Creatures',
  'Items',
  'World',
  'Movement',
  'GUI',
  'Utility',
  'Fun',
];
export const SORTS = [
  { key: '', label: 'Relevance' },
  { key: 'ratings', label: 'Ratings' },
  { key: 'created', label: 'Newest' },
  { key: 'updated', label: 'Recently updated' },
  { key: 'name', label: 'Name' },
];
export const AUTHOR_LIST_SCRIPT_ID = 549558;
export const SCRIPT_MANAGER_ID = 548277;
export const LOCAL_VERSION = '2.1.0';
export const REPO_BASE_URL = 'https://greasyfork.org';
export const REPO_BASE_CDN_URL = 'https://update.greasyfork.org';
export const REPO_BASE_API_URL = 'https://api.greasyfork.org';

const AUTHORS_KEY = 'scriptmanager_authors';
const AUTHORS_CACHED_AT_KEY = 'scriptmanager_authors_cached_at';
const AUTHOR_CACHE_MS = 1000 * 60 * 60;
const HIDDEN_SCRIPT_IDS = {};
HIDDEN_SCRIPT_IDS[AUTHOR_LIST_SCRIPT_ID] = true;

const TYPE_MAP = {
  block: 'blocks',
  door: 'doors',
  item: 'items',
  npc: 'npcs',
  forge: 'forge',
  player: 'players',
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
  const parent = file.getParentFile();
  if (parent && !parent.exists()) {
    parent.mkdirs();
  }
  Files.write(file.toPath(), new JString(String(contents)).getBytes(StandardCharsets.UTF_8));
}

function parseAuthorIds(values) {
  const ids = [];
  for (let i = 0; i < values.length; i++) {
    const id = parseInt(String(values[i]).replace(/[^\d]/g, ''), 10);
    if (!isNaN(id)) {
      ids.push(id);
    }
  }
  return ids;
}

export function parseMetadata(raw) {
  const properties = {};
  const lines = String(raw || '').split(/[\r\n]+/);
  const regex = /^\s*\/\/\s*@([^\s]+)\s+([\s\S]+)$/;
  for (let i = 0; i < lines.length; i++) {
    const match = regex.exec(lines[i]);
    if (!match) {
      continue;
    }
    const key = match[1];
    if (!properties[key]) {
      properties[key] = [];
    }
    properties[key].push(match[2].replace(/\s+$/, ''));
  }
  return properties;
}

export function metadataValue(properties, key, fallback) {
  const values = properties[key];
  if (values && values.length) {
    return values[0];
  }
  return fallback;
}

export function metadataValues(properties, key) {
  return properties[key] || [];
}

export function isCompatibleMcVersion(properties) {
  return metadataValues(properties, 'minecraft').indexOf(MINECRAFT_VERSION) !== -1;
}

export function isCustomNpcsScript(properties) {
  const matches = metadataValues(properties, 'match').concat(metadataValues(properties, 'include'));
  for (let i = 0; i < matches.length; i++) {
    if (String(matches[i]).toLowerCase().indexOf('customnpcs.com') !== -1) {
      return true;
    }
  }
  return false;
}

export function normalizeCategory(value) {
  const want = String(value || '').toLowerCase().replace(/^\s+|\s+$/g, '');
  if (!want || want === 'all') {
    return '';
  }
  for (let i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].toLowerCase() === want) {
      return CATEGORIES[i];
    }
  }
  return '';
}

export function readCategories(metadata) {
  const found = {};
  const values = metadataValues(metadata, 'category');
  for (let i = 0; i < values.length; i++) {
    const parts = String(values[i]).split(',');
    for (let j = 0; j < parts.length; j++) {
      const cat = normalizeCategory(parts[j]);
      if (cat) {
        found[cat] = true;
      }
    }
  }
  const out = [];
  for (let i = 0; i < CATEGORIES.length; i++) {
    if (found[CATEGORIES[i]]) {
      out.push(CATEGORIES[i]);
    }
  }
  return out;
}

export function attachScriptCategories(scripts) {
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
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

export function compareVersions(version1, version2) {
  const v1 = String(version1 || '0').split('.');
  const v2 = String(version2 || '0').split('.');
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    const a = parseInt(v1[i] || '0', 10);
    const b = parseInt(v2[i] || '0', 10);
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  }
  return 0;
}

export function slugify(name) {
  const slug = String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'script';
}

export function wrapLines(text, width) {
  const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ');
  if (!words[0]) {
    return [];
  }
  const lines = [];
  let current = '';
  for (let i = 0; i < words.length; i++) {
    const next = current ? current + ' ' + words[i] : words[i];
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
  const users = data.users || [];
  const authors = [];
  for (let i = 0; i < users.length; i++) {
    authors.push({
      id: parseInt(users[i].id, 10),
      name: users[i].name || 'Unknown',
    });
  }
  return {
    id: parseInt(data.id, 10),
    name: data.name || ('Script ' + data.id),
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
    updatedAt: data.code_updated_at || data.updated_at || data.updated || '',
  };
}

export function scriptAuthor(script) {
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
  for (let i = 0; i < SORTS.length; i++) {
    if (SORTS[i].key && SORTS[i].key === sort) {
      return '&sort=' + SORTS[i].key;
    }
  }
  return '';
}

export function fetchCatalog(sort) {
  const raw = catalogEntries(
    http.getJson(
      REPO_BASE_API_URL + '/scripts/by-site/customnpcs.com.json?filter_locale=0' + catalogSortQuery(sort)
    )
  );
  const scripts = [];
  for (let i = 0; i < raw.length; i++) {
    const script = normalizeScript(raw[i]);
    if (!HIDDEN_SCRIPT_IDS[script.id]) {
      scripts.push(script);
    }
  }
  return scripts;
}

export function fetchScriptInfo(id) {
  return normalizeScript(http.getJson(REPO_BASE_API_URL + '/scripts/' + id + '.json'));
}

export function fetchScriptMetadata(id) {
  const raw = http.get(REPO_BASE_CDN_URL + '/scripts/' + id + '/script.meta.js');
  return parseMetadata(raw);
}

export function fetchScriptContents(id) {
  return http.get(REPO_BASE_CDN_URL + '/scripts/' + id + '/script.user.js');
}

export function emptyAuthors() {
  return { trusted: [], featured: [], blacklisted: [] };
}

export function loadAuthors() {
  if (world.storeddata.has(AUTHORS_KEY) && world.storeddata.has(AUTHORS_CACHED_AT_KEY)) {
    const cachedAt = parseInt(world.storeddata.get(AUTHORS_CACHED_AT_KEY), 10);
    if (Date.now() - cachedAt < AUTHOR_CACHE_MS) {
      return JSON.parse(world.storeddata.get(AUTHORS_KEY));
    }
  }
  const metadata = fetchScriptMetadata(AUTHOR_LIST_SCRIPT_ID);
  const authors = {
    trusted: parseAuthorIds(metadataValues(metadata, 'trusted')),
    featured: parseAuthorIds(metadataValues(metadata, 'featured')),
    blacklisted: parseAuthorIds(metadataValues(metadata, 'blacklist')),
  };
  world.storeddata.put(AUTHORS_KEY, JSON.stringify(authors));
  world.storeddata.put(AUTHORS_CACHED_AT_KEY, String(Date.now()));
  return authors;
}

export function isTrusted(authors, id) {
  return authors.trusted.indexOf(parseInt(id, 10)) !== -1;
}

export function isFeatured(authors, id) {
  return authors.featured.indexOf(parseInt(id, 10)) !== -1;
}

export function isBlacklisted(authors, id) {
  return authors.blacklisted.indexOf(parseInt(id, 10)) !== -1;
}

export function loadInstalled() {
  const file = installedFile();
  if (!file.exists()) {
    return [];
  }
  try {
    const data = JSON.parse(readText(file));
    return data && data.scripts ? data.scripts : [];
  } catch (err) {
    return [];
  }
}

export function saveInstalled(scripts) {
  writeText(installedFile(), JSON.stringify({ scripts: scripts }, null, 2));
}

export function registerSelfInstalled() {
  const existing = getInstalled(SCRIPT_MANAGER_ID);
  const record = {
    id: SCRIPT_MANAGER_ID,
    name: existing && existing.name ? existing.name : 'ScriptManager',
    version: LOCAL_VERSION,
    author: existing && existing.author ? existing.author : 'Runonstof',
    authorId: existing && existing.authorId ? existing.authorId : 1210996,
    path: existing && existing.path ? existing.path : 'players/script-manager.js',
    installedAt: existing && existing.installedAt ? existing.installedAt : Date.now(),
  };
  if (
    existing &&
    existing.version === record.version &&
    existing.path === record.path &&
    existing.name === record.name
  ) {
    return existing;
  }
  const scripts = loadInstalled();
  let replaced = false;
  for (let i = 0; i < scripts.length; i++) {
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

export function getInstalled(id) {
  const scripts = loadInstalled();
  const want = parseInt(id, 10);
  for (let i = 0; i < scripts.length; i++) {
    if (parseInt(scripts[i].id, 10) === want) {
      return scripts[i];
    }
  }
  return null;
}

export function isInstalled(id) {
  return !!getInstalled(id);
}

export function currentSelfVersion() {
  const installed = getInstalled(SCRIPT_MANAGER_ID);
  return installed && installed.version ? installed.version : LOCAL_VERSION;
}

export function checkSelfUpdate() {
  const remote = fetchScriptInfo(SCRIPT_MANAGER_ID);
  const local = currentSelfVersion();
  return {
    available: compareVersions(local, remote.version) < 0,
    local: local,
    remote: remote.version,
    script: remote,
  };
}

export function isUpdateAvailable(script) {
  const installed = getInstalled(script.id);
  if (!installed) {
    return false;
  }
  return compareVersions(installed.version, script.version) < 0;
}

export function filterCatalog(scripts, query, category) {
  const q = String(query || '').toLowerCase().replace(/^\s+|\s+$/g, '');
  const cat = normalizeCategory(category);
  const out = [];
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (cat) {
      const cats = script.categories || [];
      if (cats.indexOf(cat) === -1) {
        continue;
      }
    }
    if (q) {
      const author = scriptAuthor(script);
      const hay = (
        script.name +
        ' ' +
        script.description +
        ' ' +
        script.id +
        ' ' +
        (author ? author.name : '')
      ).toLowerCase();
      if (hay.indexOf(q) === -1) {
        continue;
      }
    }
    out.push(script);
  }
  return out;
}

export function suggestedPath(id, metadata) {
  const type = String(metadataValue(metadata, 'scripttype', '')).toLowerCase().replace(/^\s+|\s+$/g, '');
  const folder = TYPE_MAP[type] || '';
  const name = slugify(metadataValue(metadata, 'name', '')) || String(id);
  const relative = folder ? folder + '/' + name + '.js' : name + '.js';
  if (relative.indexOf('..') !== -1) {
    throw new Error('Invalid script path');
  }
  return relative;
}

function injectHeaderTags(contents, tags) {
  let next = String(contents);
  const keys = Object.keys(tags);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (new RegExp('//\\s*@' + key + '\\b').test(next)) {
      continue;
    }
    next = next.replace('// ==/UserScript==', '// @' + key + ' ' + tags[key] + '\n// ==/UserScript==');
  }
  return next;
}

export function installScript(script, metadata) {
  const contents = injectHeaderTags(fetchScriptContents(script.id), {
    id: script.id,
    authorid: scriptAuthor(script) ? scriptAuthor(script).id : '',
  });
  const existing = getInstalled(script.id);
  const path =
    script.id === SCRIPT_MANAGER_ID
      ? existing && existing.path
        ? existing.path
        : 'players/script-manager.js'
      : existing
        ? existing.path
        : suggestedPath(script.id, metadata || {});
  const file = new File(ecmascriptRoot(), path);
  writeText(file, contents);

  const record = {
    id: script.id,
    name: script.name,
    version: script.version,
    author: scriptAuthor(script) ? scriptAuthor(script).name : '',
    authorId: scriptAuthor(script) ? scriptAuthor(script).id : 0,
    path: path,
    installedAt: Date.now(),
  };
  const scripts = loadInstalled();
  let replaced = false;
  for (let i = 0; i < scripts.length; i++) {
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

export function uninstallScript(id) {
  const existing = getInstalled(id);
  if (!existing) {
    return false;
  }
  const file = new File(ecmascriptRoot(), existing.path);
  if (file.exists() && existing.path.indexOf('..') === -1) {
    file.delete();
  }
  const kept = [];
  const scripts = loadInstalled();
  const want = parseInt(id, 10);
  for (let i = 0; i < scripts.length; i++) {
    if (parseInt(scripts[i].id, 10) !== want) {
      kept.push(scripts[i]);
    }
  }
  saveInstalled(kept);
  return true;
}

export function reloadCustomNpcScripts() {
  API.executeCommand(world, 'noppes script reload');
}

export function scriptListLabel(script) {
  if (!isInstalled(script.id)) {
    return script.name;
  }
  if (isUpdateAvailable(script)) {
    return '§e↑ ' + script.name;
  }
  return '§a✔ ' + script.name;
}

export function installedListLabel(record) {
  return record.name + ' §7v' + record.version;
}

export function scriptUrl(id) {
  return REPO_BASE_URL + '/en/scripts/' + id;
}

export function reportUrl(id) {
  return REPO_BASE_URL + '/en/scripts/' + id + '/feedback';
}
