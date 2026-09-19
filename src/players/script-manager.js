// ==UserScript==
// @id                 548277
// @namespace          runonstof
// @name               ScriptManager
// @version            2.0.0
// @description        Download and manage CustomNPCs scripts in-game, without having to access any files!
// @author             Runonstof
// @license            MIT
// @minecraft          1.20.1
// @match              https://customnpcs.com
// @scripttype         player
// @downloadURL https://update.greasyfork.org/scripts/548277/ScriptManager.user.js
// @updateURL https://update.greasyfork.org/scripts/548277/ScriptManager.meta.js
// ==/UserScript==

import { API, world } from '~/lib/dump';
import { doAsync } from '~/lib/async';
import {
  AUTHOR_LIST_SCRIPT_ID,
  SCRIPT_MANAGER_ID,
  checkSelfUpdate,
  codeUrl,
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
  isFeatured,
  isInstalled,
  isTrusted,
  isUpdateAvailable,
  loadAuthors,
  loadInstalled,
  metadataValues,
  reloadCustomNpcScripts,
  reportUrl,
  scriptAuthor,
  scriptListLabel,
  uninstallScript,
  wrapLines,
} from '~/lib/script-manager';

const GUI_ID = 548277;
const GAMEMODE_CREATIVE = 1;
const PREFIX = '§e§l[ScriptManager] §r';

const ID_BTN_BROWSE = 10;
const ID_BTN_INSTALLED = 11;
const ID_BTN_SELF_UPDATE = 12;
const ID_SEARCH = 101;
const ID_BTN_SEARCH = 102;
const ID_SCRIPT_ID = 103;
const ID_BTN_OPEN_ID = 104;
const ID_SCROLL = 110;
const ID_BTN_BACK = 50;
const ID_BTN_INSTALL = 51;
const ID_BTN_CODE = 52;
const ID_BTN_YES = 53;
const ID_BTN_NO = 54;
const ID_BTN_UNINSTALL = 55;
const ID_BTN_REPORT = 56;
const ID_DESC_LINE = 310;
const ID_CONFIRM_LINE = 410;

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
  if (state.selfUpdate && state.selfUpdate.available && state.page !== 'confirm') {
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
  const search = gui.addTextArea(ID_SEARCH, 8, 58, 180, 16);
  search.setText(state.query || '');
  const searchBtn = bindButton(gui.addButton(ID_BTN_SEARCH, 'Search', 192, 56, 56, 20), player);
  searchBtn.setEnabled(!busy(state));

  gui.addLabel(4, 'Open by ID', 256, 46, 120, 12, 0xffffff);
  const idField = gui.addTextArea(ID_SCRIPT_ID, 256, 58, 64, 16);
  idField.setText(state.idInput || '');
  const openBtn = bindButton(gui.addButton(ID_BTN_OPEN_ID, 'Open', 324, 56, 52, 20), player);
  openBtn.setEnabled(!busy(state));

  const labels = [];
  for (let i = 0; i < state.filtered.length; i++) {
    labels.push(scriptListLabel(state.filtered[i]));
  }
  if (!labels.length) {
    labels.push('No scripts found');
  }
  const scroll = bindScroll(gui.addScroll(ID_SCROLL, 8, 80, 368, 118, labels), player);
  scroll.setEnabled(!busy(state) && !!state.filtered.length);
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
  scroll.setEnabled(!busy(state) && !!state.installed.length);
}

function renderDetails(gui, state) {
  const player = gui.getPlayer();
  addTopBar(gui, state);
  const script = state.selected;
  const back = bindButton(gui.addButton(ID_BTN_BACK, 'Back', 300, 24, 76, 16), player);
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
  const desc = wrapLines(script.description, 52).slice(0, 5);

  gui.addLabel(3, '§3§n' + script.name, 8, 46, 280, 16, 0xffffff);
  const authorLabel = gui.addLabel(4, style.text, 8, 64, 280, 12, 0xffffff);
  if (style.hover) {
    authorLabel.setHoverText(style.hover);
  }
  gui.addLabel(
    5,
    update
      ? '§e↑ v' + script.version + '  §7installed v' + installed.version
      : installed
        ? '§a✔ v' + script.version
        : '§6v' + script.version,
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
  for (let i = 0; i < desc.length; i++) {
    gui.addLabel(ID_DESC_LINE + i, desc[i], 8, 106 + i * 10, 280, 10, 0xffffff);
  }

  gui.addLabel(7, '§a✔ ×' + script.good_ratings, 300, 46, 76, 12, 0xffffff).setHoverText('§aGood');
  gui.addLabel(8, '§eO ×' + script.ok_ratings, 300, 58, 76, 12, 0xffffff).setHoverText('§eOk');
  gui.addLabel(9, '§c✖ ×' + script.bad_ratings, 300, 70, 76, 12, 0xffffff).setHoverText('§cBad');

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

  const code = bindButton(gui.addButton(ID_BTN_CODE, 'See code', 300, 126, 76, 20), player);
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
  const code = bindButton(gui.addButton(ID_BTN_CODE, 'See code', 148, 186, 88, 20), player);
  code.setEnabled(!busy(state));
  const yes = bindButton(gui.addButton(ID_BTN_YES, 'Yes', 304, 186, 72, 20), player);
  yes.setEnabled(!busy(state));
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
  state.filtered = filterCatalog(state.catalog, state.query);
}

function ensureCatalog(player, then) {
  const state = sessionFor(player);
  if (state.catalog.length) {
    if (then) {
      then(state);
    }
    refresh(player);
    return;
  }
  runJob(
    player,
    'Looking up scripts...',
    function (next) {
      try {
        next.authors = loadAuthors();
      } catch (err) {
        next.authors = emptyAuthors();
      }
      next.catalog = fetchCatalog();
      next.installed = loadInstalled();
      refreshSelfUpdate(next);
      applyBrowseList(next);
    },
    then
  );
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
      if (state.page !== 'details' && state.page !== 'confirm') {
        state.returnPage = state.page;
      }
      state.page = 'details';
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
    next.selected = script;
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
  if (buttonId === ID_BTN_SEARCH) {
    ensureCatalog(player, function (next) {
      next.filtered = filterCatalog(next.catalog, next.query);
      next.page = 'browse';
    });
    return;
  }
  if (buttonId === ID_BTN_OPEN_ID) {
    openScriptById(player, state.idInput);
    return;
  }
  if (buttonId === ID_BTN_NO) {
    state.page = 'details';
    openGui(player, state);
    return;
  }
  if (buttonId === ID_BTN_BACK) {
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
    showLink(player, '§f§nClick here§r to see the code on GreasyFork', codeUrl(state.selected.id), '§eOpen GreasyFork');
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
