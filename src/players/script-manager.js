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

import { API, world } from '~/lib/dump';
import { doAsync } from '~/lib/async';
import {
  AUTHOR_LIST_SCRIPT_ID,
  CATEGORIES,
  SCRIPT_MANAGER_ID,
  SORTS,
  attachScriptCategories,
  checkSelfUpdate,
  scriptUrl,
  emptyAuthors,
  fetchCatalog,
  fetchScriptInfo,
  fetchScriptMetadata,
  filterCatalog,
  getInstalled,
  installScript,
  installedListLabel,
  isBlacklisted,
  isCompatibleMcVersion,
  isCustomNpcsScript,
  isFeatured,
  isInstalled,
  isTrusted,
  isUpdateAvailable,
  loadAuthors,
  loadInstalled,
  MINECRAFT_VERSION,
  metadataValues,
  readCategories,
  registerSelfInstalled,
  reloadCustomNpcScripts,
  reportUrl,
  scriptAuthor,
  scriptListLabel,
  slugify,
  uninstallScript,
  wrapLines,
} from '~/lib/script-manager';

const GUI_ID = 548277;
const GAMEMODE_CREATIVE = 1;
const PREFIX = '§e§l[ScriptManager] §r';

const ID_BTN_BROWSE = 10;
const ID_BTN_INSTALLED = 11;
const ID_BTN_SELF_UPDATE = 12;
const ID_BTN_CREATE = 13;
const ID_SEARCH = 101;
const ID_BTN_SEARCH = 102;
const ID_SCRIPT_ID = 103;
const ID_BTN_OPEN_ID = 104;
const ID_SORT_PREV = 130;
const ID_SORT_NEXT = 131;
const ID_SORT_LABEL = 132;
const ID_CAT_PREV = 133;
const ID_CAT_NEXT = 134;
const ID_CAT_LABEL = 135;
const ID_SCROLL = 110;
const ID_BTN_BACK = 50;
const ID_BTN_INSTALL = 51;
const ID_BTN_CODE = 52;
const ID_BTN_YES = 53;
const ID_BTN_NO = 54;
const ID_BTN_UNINSTALL = 55;
const ID_BTN_REPORT = 56;
const ID_BTN_CREATE_OK = 57;
const ID_BTN_UPLOAD = 58;
const ID_BTN_CONTINUE = 59;
const ID_CREATE_TITLE = 201;
const ID_CREATE_DESC = 202;
const ID_CREATE_MC = 203;
const ID_CREATE_AUTHOR = 204;
const ID_CREATE_TYPE = 205;
const ID_CREATE_HEADER = 206;
const ID_CREATE_CATEGORY = 207;
const ID_DESC_LINE = 310;
const ID_CONFIRM_LINE = 410;
const ID_CREATE_HELP = 510;
const ID_WARN_LINE = 610;

const GREASYFORK_NEW_URL = 'https://greasyfork.org/en/script_versions/new';
const SCRIPT_TYPES = [
  { key: 'player', label: 'Player' },
  { key: 'npc', label: 'NPC' },
  { key: 'item', label: 'Item' },
  { key: 'block', label: 'Block' },
  { key: 'forge', label: 'Forge' },
  { key: 'door', label: 'Door' },
];

const sessions = {};

function sessionFor(player) {
  const uuid = player.getUUID();
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
      createHeader: '',
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
  const payload = JSON.stringify([
    '',
    { text: PREFIX },
    {
      text: label,
      clickEvent: { action: 'open_url', value: url },
      hoverEvent: { action: 'show_text', value: hover || url },
    },
  ]);
  API.executeCommand(world, 'tellraw ' + player.getName() + ' ' + payload);
}

function authorStyle(state, author) {
  if (!author) {
    return { text: '§7Unknown author', hover: '' };
  }
  if (isBlacklisted(state.authors, author.id)) {
    return {
      text: '§cBy ' + author.name + ' ✖',
      hover: '§cThis author is blacklisted. Download at your own risk.',
    };
  }
  if (isTrusted(state.authors, author.id)) {
    return {
      text: '§aBy ' + author.name + ' ✔',
      hover: '§aThis author is verified.',
    };
  }
  if (isFeatured(state.authors, author.id)) {
    return {
      text: '§eBy ' + author.name + ' ★',
      hover: '§eThis author is featured.',
    };
  }
  return {
    text: '§7By ' + author.name,
    hover: '§fThis author is NOT verified. Proceed with caution.',
  };
}

function fieldText(gui, id, fallback) {
  const field = gui.getComponent(id);
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
  const typeList = gui.getComponent(ID_CREATE_TYPE);
  if (typeList && typeof typeList.getSelected === 'function') {
    const index = typeList.getSelected();
    if (SCRIPT_TYPES[index]) {
      state.createType = SCRIPT_TYPES[index].key;
    }
  }
  const createCat = gui.getComponent(ID_CREATE_CATEGORY);
  if (createCat && typeof createCat.getSelected === 'function') {
    const index = createCat.getSelected();
    if (CATEGORIES[index]) {
      state.createCategory = CATEGORIES[index];
    }
  }
}

function browseCategoryLabels() {
  return ['All'].concat(CATEGORIES);
}

function sortIndex(key) {
  for (let i = 0; i < SORTS.length; i++) {
    if (SORTS[i].key === key) {
      return i;
    }
  }
  return 0;
}

function browseCategoryIndex(value) {
  const labels = browseCategoryLabels();
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] === value) {
      return i;
    }
  }
  return 0;
}

function categoryIndex(value) {
  for (let i = 0; i < CATEGORIES.length; i++) {
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
    const inner = component.getTextureRect();
    if (inner && typeof inner.setVisible === 'function') {
      inner.setVisible(false);
    }
  }
  if (typeof component.getLeftTexture === 'function') {
    const left = component.getLeftTexture();
    if (left && typeof left.setVisible === 'function') {
      left.setVisible(false);
    }
    const right = component.getRightTexture();
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
  const inner = list.getTextureRect();
  if (!inner) {
    return list;
  }
  const left = list.getLeftTexture();
  const right = list.getRightTexture();
  const leftW = left ? left.getWidth() : 16;
  const rightW = right ? right.getWidth() : 16;
  inner.setPos(leftW, 0);
  inner.setSize(list.getWidth() - leftW - rightW, list.getHeight());
  return list;
}

function addCycleRow(gui, ids, x, y, width, label, hover, player, enabled) {
  const prev = bindButton(gui.addButton(ids.prev, '<', x, y, 16, 16), player);
  prev.setEnabled(enabled);
  prev.setHoverText(hover);
  const text = gui.addLabel(ids.label, label, x + 18, y + 4, width - 36, 16, 0xffffff);
  text.setCentered(true);
  hideIfLoading(text, sessionFor(player));
  const next = bindButton(gui.addButton(ids.next, '>', x + width - 16, y, 16, 16), player);
  next.setEnabled(enabled);
  next.setHoverText(hover);
}

function typeIndex(key) {
  for (let i = 0; i < SCRIPT_TYPES.length; i++) {
    if (SCRIPT_TYPES[i].key === key) {
      return i;
    }
  }
  return 0;
}

function metaLine(key, value) {
  let line = '// @' + key;
  while (line.length < 23) {
    line += ' ';
  }
  return line + value;
}

function buildCreateHeader(state) {
  const author = state.createAuthor || 'Unknown';
  return [
    '// ==UserScript==',
    metaLine('namespace', slugify(author)),
    metaLine('name', state.createTitle),
    metaLine('version', '1.0.0'),
    metaLine('description', state.createDescription),
    metaLine('author', author),
    metaLine('license', 'MIT'),
    metaLine('minecraft', state.createMinecraft || MINECRAFT_VERSION),
    metaLine('match', 'https://customnpcs.com'),
    metaLine('scripttype', state.createType || 'player'),
    metaLine('category', state.createCategory || 'Utility'),
    '// ==/UserScript==',
  ].join('\n');
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
    let index = 0;
    if (comp && typeof comp.getSelection === 'function') {
      const selection = comp.getSelection();
      if (selection && selection.length) {
        index = selection[0];
      }
    }
    onScroll(player, gui, index);
  });
  return scroll;
}

function addTopBar(gui, state) {
  const player = gui.getPlayer();
  gui.addLabel(1, '§eScriptManager', 8, 6, 200, 16, 0xffffff);
  const browse = bindButton(gui.addButton(ID_BTN_BROWSE, 'Browse', 8, 24, 72, 16), player);
  browse.setEnabled(!busy(state) && state.page !== 'browse');
  const installed = bindButton(gui.addButton(ID_BTN_INSTALLED, 'Installed', 84, 24, 72, 16), player);
  installed.setEnabled(!busy(state) && state.page !== 'installed');
  const create = bindButton(gui.addButton(ID_BTN_CREATE, 'Create', 160, 24, 72, 16), player);
  create.setEnabled(!busy(state) && state.page !== 'create' && state.page !== 'create-upload');
  if (state.selfUpdate && state.selfUpdate.available && state.page !== 'confirm' && state.page !== 'not-cnpc') {
    gui.addLabel(
      14,
      '§eUpdate v' + state.selfUpdate.remote + ' available',
      164,
      8,
      140,
      12,
      0xffffff
    ).setHoverText('§fYou have v' + state.selfUpdate.local + '.');
    const update = bindButton(gui.addButton(ID_BTN_SELF_UPDATE, 'Update', 308, 4, 68, 16), player);
    update.setEnabled(!busy(state));
  }
}

function addLoadingOverlay(gui, state) {
  if (!state.loading) {
    return;
  }
  const width = gui.getWidth();
  const height = gui.getHeight();
  const barH = 56;
  const barY = Math.floor((height - barH) / 2);
  const bar = gui.addTexturedRect(901, 'minecraft:textures/block/gray_concrete.png', 32, barY, width - 64, barH);
  bar.setRepeatingTexture(16, 16, 0);
  const title = gui.addLabel(902, '§eLoading...', 32, barY + 10, width - 64, 16, 0xffffff);
  title.setCentered(true);
  const text = gui.addLabel(903, state.message || 'Please wait', 32, barY + 28, width - 64, 16, 0xffffff);
  text.setCentered(true);
}

function openGui(player, state) {
  const gui = API.createCustomGui(GUI_ID, 384, 220, false, player);
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
  const player = gui.getPlayer();
  addTopBar(gui, state);
  gui.addLabel(3, 'Browse scripts', 8, 46, 180, 12, 0xffffff);
  const sortX = 8;
  const sortW = 120;
  const catX = 132;
  const catW = 112;
  const filterY = 80;
  const search = gui.addTextArea(ID_SEARCH, sortX, 58, sortW, 16);
  search.setText(state.query || '');
  hideIfLoading(search, state);
  const searchBtn = bindButton(gui.addButton(ID_BTN_SEARCH, 'Search', catX, 58, catW, 16), player);
  searchBtn.setEnabled(!busy(state));
  searchBtn.setHoverText('Search by script title or author');

  gui.addLabel(4, 'Open by ID', 256, 46, 120, 12, 0xffffff);
  const idField = gui.addTextArea(ID_SCRIPT_ID, 256, 58, 64, 16);
  idField.setText(state.idInput || '');
  hideIfLoading(idField, state);
  const openBtn = bindButton(gui.addButton(ID_BTN_OPEN_ID, 'Open', 324, 56, 52, 20), player);
  openBtn.setEnabled(!busy(state));

  if (!busy(state)) {
    addCycleRow(
      gui,
      { prev: ID_SORT_PREV, next: ID_SORT_NEXT, label: ID_SORT_LABEL },
      sortX,
      filterY,
      sortW,
      SORTS[sortIndex(state.sort || '')].label,
      'Sort scripts. Press Search to apply.',
      player,
      true
    );
    addCycleRow(
      gui,
      { prev: ID_CAT_PREV, next: ID_CAT_NEXT, label: ID_CAT_LABEL },
      catX,
      filterY,
      catW,
      browseCategoryLabels()[browseCategoryIndex(state.category || 'All')],
      'Filter by category. Press Search to apply.',
      player,
      true
    );
  }

  const labels = browseScrollLabels(state);
  const scroll = bindScroll(gui.addScroll(ID_SCROLL, 8, 98, 368, 116, labels), player);
  if (typeof scroll.setHasSearch === 'function') {
    scroll.setHasSearch(false);
  }
  scroll.setEnabled(!busy(state) && !!state.filtered.length);
}

function browseScrollLabels(state) {
  const labels = [];
  for (let i = 0; i < state.filtered.length; i++) {
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
    const Instant = Java.type('java.time.Instant');
    const DateTimeFormatter = Java.type('java.time.format.DateTimeFormatter');
    const ZoneId = Java.type('java.time.ZoneId');
    return DateTimeFormatter.ofPattern('d MMM yyyy')
      .withZone(ZoneId.systemDefault())
      .format(Instant.parse(String(value)));
  } catch (err) {
    const text = String(value);
    const day = text.split('T')[0];
    return day || text;
  }
}

function cycleChoice(values, current, delta) {
  let index = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] === current) {
      index = i;
      break;
    }
  }
  return values[(index + delta + values.length) % values.length];
}

function updateBrowseScroll(gui, state) {
  const scroll = gui.getComponent(ID_SCROLL);
  if (!scroll || typeof scroll.setList !== 'function') {
    refresh(gui.getPlayer());
    return;
  }
  const labels = browseScrollLabels(state);
  scroll.setList(labels);
  scroll.setEnabled(!busy(state) && !!state.filtered.length);
  gui.update(scroll);
}

function renderCreate(gui, state) {
  const player = gui.getPlayer();
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
    const types = gui.addButtonList(ID_CREATE_TYPE, 8, 170, 176, 16);
    types.setValues('Player', 'NPC', 'Item', 'Block', 'Forge', 'Door');
    types.setSelected(typeIndex(state.createType || 'player'));
    fitButtonList(types);

    const cats = gui.addButtonList(ID_CREATE_CATEGORY, 196, 170, 180, 16);
    cats.setValues(
      'Combat',
      'Magic',
      'NPCs',
      'Creatures',
      'Items',
      'World',
      'Movement',
      'GUI',
      'Utility',
      'Fun'
    );
    cats.setSelected(categoryIndex(state.createCategory || 'Utility'));
    fitButtonList(cats);
  }

  const ok = bindButton(gui.addButton(ID_BTN_CREATE_OK, 'OK', 304, 188, 72, 20), player);
  ok.setEnabled(!busy(state));
}

function renderCreateUpload(gui, state) {
  const player = gui.getPlayer();
  addTopBar(gui, state);
  gui.addLabel(3, '§nCreate and upload script', 8, 46, 360, 12, 0xffffff);

  const header = gui.addTextArea(ID_CREATE_HEADER, 8, 60, 368, 86);
  header.setText(state.createHeader || buildCreateHeader(state));
  hideIfLoading(header, state);

  const help = wrapLines(
    'Copy the text above and paste it at the very top of your script. Then press the button, open the link, and upload that file. After that it will show up in Script Manager.',
    62
  );
  for (let i = 0; i < help.length; i++) {
    gui.addLabel(ID_CREATE_HELP + i, help[i], 8, 150 + i * 10, 368, 10, 0xffffff);
  }

  const back = bindButton(gui.addButton(ID_BTN_BACK, '← Back', 8, 192, 72, 20), player);
  back.setEnabled(!busy(state));
  const upload = bindButton(gui.addButton(ID_BTN_UPLOAD, 'Open upload page', 216, 192, 160, 20), player);
  upload.setEnabled(!busy(state));
  upload.setHoverText('A clickable link will appear in chat');
}

function renderInstalled(gui, state) {
  addTopBar(gui, state);
  gui.addLabel(3, 'Your installed scripts', 8, 46, 300, 12, 0xffffff);
  const labels = [];
  for (let i = 0; i < state.installed.length; i++) {
    labels.push(installedListLabel(state.installed[i]));
  }
  if (!labels.length) {
    labels.push('Nothing installed yet');
  }
  const scroll = bindScroll(gui.addScroll(ID_SCROLL, 8, 60, 368, 138, labels), gui.getPlayer());
  if (typeof scroll.setHasSearch === 'function') {
    scroll.setHasSearch(false);
  }
  scroll.setEnabled(!busy(state) && !!state.installed.length);
}

function renderDetails(gui, state) {
  const player = gui.getPlayer();
  addTopBar(gui, state);
  const script = state.selected;
  const back = bindButton(gui.addButton(ID_BTN_BACK, '← Back', 300, 24, 76, 16), player);
  back.setEnabled(!busy(state));
  if (!script) {
    gui.addLabel(3, 'No script selected', 8, 50, 360, 12, 0xff5555);
    return;
  }

  const author = scriptAuthor(script);
  const style = authorStyle(state, author);
  const installed = getInstalled(script.id);
  const update = isUpdateAvailable(script);
  const meta = state.metadata || {};
  const versions = metadataValues(meta, 'minecraft');
  const compatible = versions.length ? isCompatibleMcVersion(meta) : true;
  const cats = readCategories(meta);
  const desc = wrapLines(script.description, 52).slice(0, 5);

  gui.addLabel(3, '§3§n' + script.name, 8, 46, 280, 16, 0xffffff);
  const authorLabel = gui.addLabel(4, style.text, 8, 64, 280, 12, 0xffffff);
  if (style.hover) {
    authorLabel.setHoverText(style.hover);
  }
  gui.addLabel(
    5,
    (update
      ? '§e↑ v' + script.version + '  §7installed v' + installed.version
      : installed
        ? '§a✔ v' + script.version
        : '§6v' + script.version) +
      '  §7ID ' +
      script.id,
    8,
    76,
    280,
    12,
    0xffffff
  );
  gui.addLabel(
    6,
    versions.length
      ? (compatible ? '§a' : '§c') + 'MC ' + versions.join(', ') + (compatible ? '' : ' (incompatible)')
      : '§7MC version unknown',
    8,
    88,
    280,
    12,
    0xffffff
  );
  let descY = 106;
  if (cats.length) {
    gui.addLabel(16, '§7Category: §f' + cats.join(', '), 8, 100, 280, 12, 0xffffff);
    descY = 114;
  }
  for (let i = 0; i < desc.length; i++) {
    gui.addLabel(ID_DESC_LINE + i, desc[i], 8, descY + i * 10, 280, 10, 0xffffff);
  }

  gui.addLabel(17, '§7Created', 300, 46, 76, 10, 0xffffff);
  gui.addLabel(18, '§f' + formatScriptDate(script.createdAt), 300, 56, 76, 10, 0xffffff);
  gui.addLabel(19, '§7Updated', 300, 70, 76, 10, 0xffffff);
  gui.addLabel(20, '§f' + formatScriptDate(script.updatedAt), 300, 80, 76, 10, 0xffffff);

  const blocked = author && isBlacklisted(state.authors, author.id);
  const install = bindButton(
    gui.addButton(
      ID_BTN_INSTALL,
      installed ? (update ? 'Update' : 'Installed') : 'Install',
      300,
      150,
      76,
      20
    ),
    player
  );
  install.setEnabled(!busy(state) && !blocked && (!installed || update));

  const code = bindButton(gui.addButton(ID_BTN_CODE, 'More info', 300, 126, 76, 20), player);
  code.setEnabled(!busy(state));
  code.setHoverText('A clickable link will appear in chat');

  const report = bindButton(gui.addButton(ID_BTN_REPORT, 'Report', 216, 126, 76, 20), player);
  report.setEnabled(!busy(state));
  report.setHoverText('A clickable link will appear in chat');

  if (installed) {
    const remove = bindButton(gui.addButton(ID_BTN_UNINSTALL, 'Remove', 216, 150, 76, 20), player);
    remove.setEnabled(!busy(state));
  }
}

function renderConfirm(gui, state) {
  const script = state.selected;
  const author = scriptAuthor(script);
  const trusted = author && isTrusted(state.authors, author.id);
  gui.addLabel(1, '§eAre you sure?', 8, 8, 360, 16, 0xffffff);
  const lines = wrapLines(
    'You are about to download ' +
      (script ? script.name : '?') +
      ' by ' +
      (author ? author.name : 'unknown') +
      '.' +
      (trusted
        ? ''
        : ' WARNING: this author is NOT verified by Featured Authors. Review the code on GreasyFork first. Download at your own risk.') +
      ' Press YES to install it.',
    62
  );
  for (let i = 0; i < lines.length; i++) {
    gui.addLabel(ID_CONFIRM_LINE + i, (trusted || i < 2 ? '§f' : '§c') + lines[i], 8, 32 + i * 10, 368, 10, 0xffffff);
  }
  const player = gui.getPlayer();
  const no = bindButton(gui.addButton(ID_BTN_NO, 'No', 8, 186, 72, 20), player);
  no.setEnabled(!busy(state));
  const code = bindButton(gui.addButton(ID_BTN_CODE, 'More info', 148, 186, 88, 20), player);
  code.setEnabled(!busy(state));
  const yes = bindButton(gui.addButton(ID_BTN_YES, 'Yes', 304, 186, 72, 20), player);
  yes.setEnabled(!busy(state));
}

function renderNotCustomNpcs(gui, state) {
  const script = state.selected;
  const player = gui.getPlayer();
  gui.addLabel(1, '§eThis may not be a CustomNPCs script', 8, 8, 368, 16, 0xffffff);
  const warn = wrapLines(
    (script ? script.name : 'This script') +
      ' does not look like it was made for CustomNPCs. It is missing the CustomNPCs site tag.',
    62
  );
  for (let i = 0; i < warn.length; i++) {
    gui.addLabel(ID_WARN_LINE + i, '§c' + warn[i], 8, 32 + i * 10, 368, 10, 0xffffff);
  }
  const intro = wrapLines(
    'If it actually is, the author should add this line at the top of the script:',
    62
  );
  const outro = wrapLines(
    'Then it will show up when people browse scripts. You can still open it if you are sure.',
    62
  );
  let adviceY = 32 + warn.length * 10 + 8;
  for (let i = 0; i < intro.length; i++) {
    gui.addLabel(ID_WARN_LINE + 20 + i, intro[i], 8, adviceY, 368, 10, 0xffffff);
    adviceY += 10;
  }
  gui.addLabel(ID_WARN_LINE + 40, '§a// @match https://customnpcs.com', 8, adviceY + 2, 368, 10, 0xffffff);
  adviceY += 14;
  for (let i = 0; i < outro.length; i++) {
    gui.addLabel(ID_WARN_LINE + 41 + i, outro[i], 8, adviceY, 368, 10, 0xffffff);
    adviceY += 10;
  }
  const back = bindButton(gui.addButton(ID_BTN_BACK, '← Back', 8, 186, 72, 20), player);
  back.setEnabled(!busy(state));
  const code = bindButton(gui.addButton(ID_BTN_CODE, 'More info', 148, 186, 88, 20), player);
  code.setEnabled(!busy(state) && !!script);
  const cont = bindButton(gui.addButton(ID_BTN_CONTINUE, 'Continue', 280, 186, 96, 20), player);
  cont.setEnabled(!busy(state));
}

function refresh(player) {
  openGui(player, sessionFor(player));
}

function runJob(player, message, work, after) {
  const state = sessionFor(player);
  if (state.loading) {
    return;
  }
  state.loading = true;
  setStatus(state, message);
  refresh(player);
  doAsync(function () {
    try {
      const result = work(state);
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
  const state = sessionFor(player);
  if (state.selfUpdateWarned || !state.selfUpdate || !state.selfUpdate.available) {
    return;
  }
  state.selfUpdateWarned = true;
  tell(
    player,
    'A newer ScriptManager is available (§ev' +
      state.selfUpdate.remote +
      '§f). You have §7v' +
      state.selfUpdate.local +
      '§f. Open !scripts to update, or keep using this version.'
  );
}

function applyBrowseList(state) {
  state.page = 'browse';
  state.selected = null;
  state.metadata = null;
  state.filtered = filterCatalog(state.catalog, state.query, state.category);
}

function loadCatalog(player, then) {
  runJob(
    player,
    'Fetching scripts...',
    function (next) {
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
    },
    then
  );
}

function ensureCatalog(player, then) {
  const state = sessionFor(player);
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
  const state = sessionFor(player);
  applyBrowseList(state);
  if (state.catalog.length) {
    refresh(player);
    return;
  }
  ensureCatalog(player);
}

function goCreate(player) {
  const state = sessionFor(player);
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
  const parsed = parseInt(id, 10);
  if (!parsed || parsed === AUTHOR_LIST_SCRIPT_ID) {
    sessionFor(player).message = '§cEnter a valid script id';
    refresh(player);
    return;
  }
  runJob(
    player,
    'Opening script...',
    function (state) {
      if (!state.authors.trusted.length && !state.authors.featured.length) {
        state.authors = loadAuthors();
      }
      const script = fetchScriptInfo(parsed);
      let metadata = {};
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
    }
  );
}

function selectFromBrowse(player, index) {
  const state = sessionFor(player);
  const script = state.filtered[index];
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
  const state = sessionFor(player);
  const record = state.installed[index];
  if (!record) {
    return;
  }
  openScriptById(player, record.id);
}

function doInstall(player) {
  const state = sessionFor(player);
  const script = state.selected;
  if (!script) {
    return;
  }
  runJob(
    player,
    'Installing...',
    function (next) {
      installScript(script, next.metadata || {});
      next.installed = loadInstalled();
      if (script.id === SCRIPT_MANAGER_ID && next.selfUpdate) {
        next.selfUpdate.available = false;
        next.selfUpdate.local = script.version;
      }
      next.page = 'details';
    },
    function () {
      tell(player, 'Installed ' + script.name + '. Applying changes...');
      reloadCustomNpcScripts();
    }
  );
}

function doUninstall(player) {
  const state = sessionFor(player);
  const script = state.selected;
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

export function chat(e) {
  const msg = String(e.message || '').replace(/^\s+|\s+$/g, '');
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
  const parts = msg.split(/\s+/);
  const state = sessionFor(e.player);
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

export function init(e) {
  registerSelfInstalled();
  checkSelfUpdateLater(e.player);
}

export function login(e) {
  checkSelfUpdateLater(e.player);
}

function checkSelfUpdateLater(player) {
  const state = sessionFor(player);
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
  const state = sessionFor(player);
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
    showLink(
      player,
      '§f§nClick here§r to upload your script on GreasyFork',
      GREASYFORK_NEW_URL,
      '§eOpen the GreasyFork upload page'
    );
    gui.close();
    return;
  }
  if (buttonId === ID_SORT_PREV || buttonId === ID_SORT_NEXT) {
    const keys = [];
    for (let i = 0; i < SORTS.length; i++) {
      keys.push(SORTS[i].key);
    }
    state.sort = cycleChoice(keys, state.sort || '', buttonId === ID_SORT_NEXT ? 1 : -1);
    openGui(player, state);
    return;
  }
  if (buttonId === ID_CAT_PREV || buttonId === ID_CAT_NEXT) {
    const labels = browseCategoryLabels();
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
    showLink(
      player,
      '§f§nClick here§r for more info on GreasyFork',
      state.selected.url || scriptUrl(state.selected.id),
      '§eOpen GreasyFork'
    );
    gui.close();
    return;
  }
  if (buttonId === ID_BTN_REPORT && state.selected) {
    showLink(player, '§f§nClick here§r to report ' + state.selected.name, reportUrl(state.selected.id), '§eReport this script');
    gui.close();
  }
}

function onScroll(player, gui, scrollIndex) {
  const state = sessionFor(player);
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
