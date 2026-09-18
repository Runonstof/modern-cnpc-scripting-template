import { API } from '~/lib/dump';

const INbt = Java.type('noppes.npcs.api.INbt');
const ICustomNpc = Java.type('noppes.npcs.api.entity.ICustomNpc');

const NBT_COMPOUND = 10;

function escapeNbtString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function toJsArray(list) {
  if (!list) {
    return [];
  }
  return Java.from(list);
}

function applyNpcNbt(npcOrNbt, nbt) {
  if (npcOrNbt instanceof ICustomNpc) {
    npcOrNbt.setEntityNbt(nbt);
  }
}

/**
 * Resolve entity NBT. Accepts ICustomNpc or INbt so callers can reuse one NBT
 * for several edits. Throws if given a non-CustomNPC entity (e.g. /js `target`).
 */
export function npcGetNbt(npcOrNbt) {
  if (npcOrNbt instanceof INbt) {
    return npcOrNbt;
  }
  if (!(npcOrNbt instanceof ICustomNpc)) {
    throw new Error('Target is not a CustomNPC');
  }
  return npcOrNbt.getEntityNbt();
}

export function npcCreateScriptTab() {
  return API.stringToNbt('{Script:"",Console:[],ScriptList:[]}');
}

/**
 * Adds a script to the last existing tab, or creates a tab if none exist.
 * Does not fire init; call npc.reset() afterwards if needed.
 */
export function npcAddScript(npc, scriptFile) {
  const npcnbt = npcGetNbt(npc);
  const scripts = toJsArray(npcnbt.getList('Scripts', NBT_COMPOUND));
  if (!scripts.length) {
    scripts.push(npcCreateScriptTab());
  }
  const scriptNbt = scripts[scripts.length - 1];
  const scriptFiles = toJsArray(scriptNbt.getList('ScriptList', NBT_COMPOUND));
  scriptFiles.push(API.stringToNbt('{Line:"' + escapeNbtString(scriptFile) + '"}'));
  scriptNbt.setList('ScriptList', scriptFiles);
  npcnbt.setList('Scripts', scripts);
  npcnbt.setBoolean('ScriptEnabled', true);
  applyNpcNbt(npc, npcnbt);
  return true;
}

export function npcRemoveScript(npc, scriptFile) {
  const npcnbt = npcGetNbt(npc);
  const scripts = toJsArray(npcnbt.getList('Scripts', NBT_COMPOUND));
  if (!scripts.length) {
    return false;
  }
  let removed = false;
  for (let i = 0; i < scripts.length; i++) {
    const scriptList = toJsArray(scripts[i].getList('ScriptList', NBT_COMPOUND));
    const kept = [];
    let tabChanged = false;
    for (let j = 0; j < scriptList.length; j++) {
      if (scriptList[j].getString('Line') === scriptFile) {
        removed = true;
        tabChanged = true;
      } else {
        kept.push(scriptList[j]);
      }
    }
    if (tabChanged) {
      scripts[i].setList('ScriptList', kept);
    }
  }
  if (removed) {
    npcnbt.setList('Scripts', scripts);
    applyNpcNbt(npc, npcnbt);
  }
  return removed;
}

/** Scripts keyed by tab index (starting at 0). */
export function npcGetScripts(npc) {
  const npcnbt = npcGetNbt(npc);
  const scripts = toJsArray(npcnbt.getList('Scripts', NBT_COMPOUND));
  const npcScripts = {};
  for (let i = 0; i < scripts.length; i++) {
    const scriptList = toJsArray(scripts[i].getList('ScriptList', NBT_COMPOUND));
    for (let j = 0; j < scriptList.length; j++) {
      if (!npcScripts[i]) {
        npcScripts[i] = [];
      }
      npcScripts[i].push(scriptList[j].getString('Line'));
    }
  }
  return npcScripts;
}

export function npcGetScriptsArray(npc) {
  const scripts = [];
  const npcScripts = npcGetScripts(npc);
  const keys = Object.keys(npcScripts);
  for (let i = 0; i < keys.length; i++) {
    scripts.push.apply(scripts, npcScripts[keys[i]]);
  }
  return scripts;
}

export function npcHasScript(npc, scriptFile) {
  return npcGetScriptsArray(npc).indexOf(scriptFile) > -1;
}

export function npcIsScriptEnabled(npc) {
  return !!npcGetNbt(npc).getBoolean('ScriptEnabled');
}

export function npcSetScriptEnabled(npc, enabled) {
  const npcnbt = npcGetNbt(npc);
  npcnbt.setBoolean('ScriptEnabled', enabled);
  applyNpcNbt(npc, npcnbt);
}
