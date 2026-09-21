// ============================================================================
// NPC SLOT MACHINE (OneScript / ES5)
// Right-click: opens slot machine
// Sneak + hold bedrock + right-click: opens admin config GUI
// GUI animation uses Java threads by reopening GUI each frame
// ============================================================================

var Thread = Java.type("java.lang.Thread")

var npcUuid = null
var playerState = {}

var CONFIG_KEY_PREFIX = "SLOT_MACHINE_CFG:"
var ADMIN_ITEM = "minecraft:bedrock"
var DEBUG_LOG = true
var TIMER_GUI_REFRESH = 91

var SND_SPIN_START = "minecraft:block.note_block.basedrum"
var SND_SPIN_TICK = "minecraft:block.note_block.hat"
var SND_WIN = "minecraft:entity.player.levelup"
var SND_LOSE = "minecraft:entity.villager.no"

var GUIS = {
    PLAY: 9100,
    ADMIN: 9101
}

var C = {
    PLAY_TITLE: 10,
    PLAY_REELS: 11,
    PLAY_STATUS: 12,
    PLAY_COST: 13,
    PLAY_ODDS: 14,
    REEL_FRAME_1: 20,
    REEL_FRAME_2: 21,
    REEL_FRAME_3: 22,
    REEL_TEX_1: 23,
    REEL_TEX_2: 24,
    REEL_TEX_3: 25,
    BTN_SPIN: 100,
    BTN_CLOSE: 101,

    ADM_COST_ITEM: 200,
    ADM_COST_AMOUNT: 201,
    ADM_BTN_SAVE: 260,
    ADM_BTN_RESET: 261,
    ADM_BTN_CLOSE: 262,

    ADM_NAME_BASE: 300,
    ADM_REELS_BASE: 320,
    ADM_WEIGHT_BASE: 340,
    ADM_REWARD_BASE: 360
}

var SYMBOLS = ["cherry", "bell", "star", "diamond", "skull"]

var SYMBOL_DISPLAY = {
    cherry: "§cCHERRY",
    bell: "§eBELL",
    star: "§bSTAR",
    diamond: "§dDIAMOND",
    skull: "§8SKULL"
}

var SYMBOL_TEXTURE = {
    cherry: "minecraft:textures/block/red_concrete.png",
    bell: "minecraft:textures/block/gold_block.png",
    star: "minecraft:textures/block/sea_lantern.png",
    diamond: "minecraft:textures/block/diamond_block.png",
    skull: "minecraft:textures/block/black_concrete_powder.png"
}

function symbolTexture(symbol) {
    return SYMBOL_TEXTURE[symbol] || "minecraft:textures/block/stone.png"
}

function makeDefaultConfig() {
    return {
        costItem: "minecraft:emerald",
        costAmount: 1,
        outcomes: [
            { name: "Jackpot", reels: "diamond,diamond,diamond", weight: 1, reward: 64 },
            { name: "Big Win", reels: "star,star,star", weight: 6, reward: 16 },
            { name: "Small Win", reels: "bell,bell,bell", weight: 18, reward: 4 },
            { name: "Lose", reels: "cherry,skull,bell", weight: 75, reward: 0 }
        ]
    }
}

function trimText(text) {
    return ("" + (text || "")).replace(/^\s+|\s+$/g, "")
}

function shortItemName(itemId) {
    var id = trimText(itemId)
    if (!id) return "item"
    var idx = id.indexOf(":")
    if (idx === -1) return id
    return id.substring(idx + 1)
}

function nowMs() {
    return (new Date()).getTime()
}

function debugLog(message) {
    if (!DEBUG_LOG) return
    try {
        print("[SlotMachine] " + message)
    } catch (err) {
        try {
            log("[SlotMachine] " + message)
        } catch (err2) {}
    }
}

function playPlayerSound(player, sound, volume, pitch) {
    try {
        player.playSound(sound, volume, pitch)
    } catch (err) {}
}

function asInt(value, fallback, minValue, maxValue) {
    var n = parseInt(value)
    if (isNaN(n)) n = fallback
    if (minValue !== undefined && n < minValue) n = minValue
    if (maxValue !== undefined && n > maxValue) n = maxValue
    return n
}

function normalizeToken(token) {
    var t = trimText(token).toLowerCase()
    for (var i = 0; i < SYMBOLS.length; i++) {
        if (SYMBOLS[i] === t) return t
    }
    return null
}

function randomSymbol() {
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
}

function randomReels() {
    return [randomSymbol(), randomSymbol(), randomSymbol()]
}

function parseReelSpecToArray(spec) {
    var raw = trimText(spec)
    var parts = raw ? raw.split(",") : []
    var reels = []

    for (var i = 0; i < 3; i++) {
        var part = i < parts.length ? parts[i] : ""
        var token = normalizeToken(part)
        if (!token) token = randomSymbol()
        reels.push(token)
    }

    return reels
}

function normalizeReelSpec(spec) {
    var reels = parseReelSpecToArray(spec)
    return reels[0] + "," + reels[1] + "," + reels[2]
}

function reelLine(reels) {
    var r0 = SYMBOL_DISPLAY[reels[0]] || reels[0]
    var r1 = SYMBOL_DISPLAY[reels[1]] || reels[1]
    var r2 = SYMBOL_DISPLAY[reels[2]] || reels[2]
    return r0 + " §7| " + r1 + " §7| " + r2
}

function sanitizeOutcome(raw, index) {
    var fallback = makeDefaultConfig().outcomes[index] || makeDefaultConfig().outcomes[0]
    var name = trimText(raw && raw.name)
    if (!name) name = fallback.name

    return {
        name: name,
        reels: normalizeReelSpec(raw && raw.reels ? raw.reels : fallback.reels),
        weight: asInt(raw && raw.weight, fallback.weight, 0, 1000000),
        reward: asInt(raw && raw.reward, fallback.reward, 0, 1000000)
    }
}

function sanitizeConfig(raw) {
    var defaults = makeDefaultConfig()
    var cfg = raw || {}

    var out = {
        costItem: trimText(cfg.costItem) || defaults.costItem,
        costAmount: asInt(cfg.costAmount, defaults.costAmount, 1, 1000000),
        outcomes: []
    }

    var srcOutcomes = cfg.outcomes && cfg.outcomes.length ? cfg.outcomes : defaults.outcomes
    for (var i = 0; i < 4; i++) {
        var item = i < srcOutcomes.length ? srcOutcomes[i] : defaults.outcomes[i]
        out.outcomes.push(sanitizeOutcome(item, i))
    }

    return out
}

function getConfigKey() {
    return CONFIG_KEY_PREFIX + (npcUuid || "unknown")
}

function loadConfig(world) {
    var key = getConfigKey()
    var store = world.getStoreddata()
    var raw = store.get(key)

    if (raw === null || raw === undefined || raw === "") {
        var defaults = sanitizeConfig(makeDefaultConfig())
        store.put(key, JSON.stringify(defaults))
        return defaults
    }

    try {
        return sanitizeConfig(JSON.parse("" + raw))
    } catch (err) {
        var fallback = sanitizeConfig(makeDefaultConfig())
        store.put(key, JSON.stringify(fallback))
        return fallback
    }
}

function saveConfig(world, cfg) {
    var key = getConfigKey()
    var store = world.getStoreddata()
    store.put(key, JSON.stringify(sanitizeConfig(cfg)))
}

function ensurePlayerState(player) {
    var name = player.getName()
    if (!playerState[name]) {
        playerState[name] = {
            running: false,
            spinStartedAt: 0,
            reels: randomReels(),
            message: "§7Press SPIN to play",
            lastOutcome: "",
            dirty: false
        }
    }
    return playerState[name]
}

function hasCurrency(player, itemId, amount) {
    return player.inventoryItemCount(itemId) >= amount
}

function takeCurrency(player, itemId, amount) {
    if (amount <= 0) return true
    if (!hasCurrency(player, itemId, amount)) return false
    player.removeItem(itemId, amount)
    player.updatePlayerInventory()
    return true
}

function giveCurrency(player, itemId, amount) {
    var world = player.getWorld()
    var remaining = Math.max(0, amount)

    while (remaining > 0) {
        var stackSize = Math.min(64, remaining)
        var stack = world.createItem(itemId, stackSize)
        if (!player.giveItem(stack)) {
            player.dropItem(stack)
        }
        remaining -= stackSize
    }

    player.updatePlayerInventory()
}

function rollOutcome(outcomes) {
    var total = 0
    for (var i = 0; i < outcomes.length; i++) {
        total += Math.max(0, asInt(outcomes[i].weight, 0, 0, 1000000))
    }

    if (total <= 0) return outcomes[outcomes.length - 1]

    var roll = Math.floor(Math.random() * total)
    var running = 0
    for (var j = 0; j < outcomes.length; j++) {
        running += Math.max(0, asInt(outcomes[j].weight, 0, 0, 1000000))
        if (roll < running) return outcomes[j]
    }

    return outcomes[outcomes.length - 1]
}

function isAdminInteract(player) {
    if (!player.isSneaking()) return false
    var held = player.getMainhandItem()
    if (!held || held.isEmpty()) return false
    return held.getName() === ADMIN_ITEM
}

function openPlayGui(player, api, stateOverride) {
    var state = stateOverride || ensurePlayerState(player)
    var cfg = loadConfig(player.getWorld())

    var w = 320
    var h = 180
    var gui = api.createCustomGui(GUIS.PLAY, w, h, false, player)

    gui.addTexturedRect(1, "minecraft:textures/block/black_concrete.png", 0, 0, w, h)
    gui.addTexturedRect(2, "minecraft:textures/block/gray_concrete.png", 3, 3, w - 6, h - 6)
    gui.addTexturedRect(3, "minecraft:textures/block/deepslate_tiles.png", 8, 34, w - 16, 82)

    gui.addLabel(C.PLAY_TITLE, "§6§lNPC Slot Machine", 10, 8, w - 20, 12)
    gui.addLabel(C.PLAY_STATUS, state.message || "§7Ready", 10, 22, w - 20, 10)

    var reelStartX = 18
    var reelGap = 94
    for (var r = 0; r < 3; r++) {
        var x = reelStartX + r * reelGap
        var symbol = state.reels[r]

        gui.addTexturedRect(C.REEL_FRAME_1 + r, "minecraft:textures/block/iron_block.png", x, 44, 74, 64)
        gui.addTexturedRect(C.REEL_TEX_1 + r, symbolTexture(symbol), x + 7, 51, 60, 50)
    }

    gui.addLabel(C.PLAY_COST, "§7Cost: §e" + cfg.costAmount + " §7" + shortItemName(cfg.costItem), 10, 122, w - 20, 10)

    var spinText = state.running ? "§7Spinning..." : "§a§lSPIN"
    gui.addButton(C.BTN_SPIN, spinText, 10, h - 24, 120, 18)
    gui.addButton(C.BTN_CLOSE, "§7Close", w - 90, h - 24, 80, 18)

    player.showCustomGui(gui)
}

function openAdminGui(player, api) {
    var cfg = loadConfig(player.getWorld())

    var w = 420
    var h = 245
    var gui = api.createCustomGui(GUIS.ADMIN, w, h, false, player)

    gui.addLabel(600, "§c§lSlot Admin", 10, 8, 160, 12)
    gui.addLabel(601, "§8Symbols: cherry,bell,star,diamond,skull", 10, 22, w - 20, 10)

    gui.addLabel(602, "§fCost Item", 10, 38, 70, 10)
    gui.addTextField(C.ADM_COST_ITEM, 10, 50, 170, 16).setText(cfg.costItem)

    gui.addLabel(603, "§fCost Amount", 190, 38, 70, 10)
    gui.addTextField(C.ADM_COST_AMOUNT, 190, 50, 70, 16).setText("" + cfg.costAmount)

    gui.addLabel(604, "§fName", 10, 72, 90, 10)
    gui.addLabel(605, "§fReels (a,b,c)", 116, 72, 140, 10)
    gui.addLabel(606, "§fWeight", 268, 72, 60, 10)
    gui.addLabel(607, "§fReward", 334, 72, 60, 10)

    for (var i = 0; i < cfg.outcomes.length; i++) {
        var y = 84 + i * 26
        var out = cfg.outcomes[i]
        gui.addTextField(C.ADM_NAME_BASE + i, 10, y, 100, 16).setText(out.name)
        gui.addTextField(C.ADM_REELS_BASE + i, 116, y, 146, 16).setText(out.reels)
        gui.addTextField(C.ADM_WEIGHT_BASE + i, 268, y, 60, 16).setText("" + out.weight)
        gui.addTextField(C.ADM_REWARD_BASE + i, 334, y, 70, 16).setText("" + out.reward)
    }

    gui.addButton(C.ADM_BTN_SAVE, "§aSave", 10, h - 28, 76, 18)
    gui.addButton(C.ADM_BTN_RESET, "§eReset", 92, h - 28, 76, 18)
    gui.addButton(C.ADM_BTN_CLOSE, "§7Close", w - 86, h - 28, 76, 18)

    player.showCustomGui(gui)
}

function buildConfigFromAdminGui(gui) {
    var cfg = {
        costItem: "" + gui.getComponent(C.ADM_COST_ITEM).getText(),
        costAmount: gui.getComponent(C.ADM_COST_AMOUNT).getText(),
        outcomes: []
    }

    for (var i = 0; i < 4; i++) {
        cfg.outcomes.push({
            name: "" + gui.getComponent(C.ADM_NAME_BASE + i).getText(),
            reels: "" + gui.getComponent(C.ADM_REELS_BASE + i).getText(),
            weight: gui.getComponent(C.ADM_WEIGHT_BASE + i).getText(),
            reward: gui.getComponent(C.ADM_REWARD_BASE + i).getText()
        })
    }

    return sanitizeConfig(cfg)
}

function startSpin(player, api) {
    var state = ensurePlayerState(player)
    debugLog("Spin requested by " + player.getName() + " | running=" + state.running)

    if (state.running && (nowMs() - state.spinStartedAt) > 15000) {
        state.running = false
        state.spinStartedAt = 0
        state.message = "§eRecovered from stale spin lock"
        debugLog("Recovered stale lock for " + player.getName())
    }

    if (state.running) {
        state.message = "§eAlready spinning"
        state.dirty = true
        debugLog("Blocked spin: already spinning for " + player.getName())
        openPlayGui(player, api, state)
        return
    }

    var world = player.getWorld()
    var cfg = loadConfig(world)

    if (!takeCurrency(player, cfg.costItem, cfg.costAmount)) {
        state.message = "§cNeed " + cfg.costAmount + " " + shortItemName(cfg.costItem) + " to spin"
        state.dirty = true
        player.message("§c[Slot] Need " + cfg.costAmount + " " + shortItemName(cfg.costItem) + " to spin")
        debugLog("Blocked spin: insufficient currency for " + player.getName() + " | need=" + cfg.costAmount + " " + cfg.costItem)
        openPlayGui(player, api, state)
        return
    }

    state.running = true
    state.spinStartedAt = nowMs()
    state.message = "§eSpinning..."
    state.dirty = true
    debugLog("Spin started for " + player.getName())
    playPlayerSound(player, SND_SPIN_START, 0.9, 0.8)
    openPlayGui(player, api, state)

    var SpinThread = Java["extend"](Thread, {
        run: function() {
            try {
                for (var i = 0; i < 18; i++) {
                    state.reels = randomReels()
                    var dots = i % 3
                    if (dots === 0) state.message = "§eSpinning."
                    else if (dots === 1) state.message = "§eSpinning.."
                    else state.message = "§eSpinning..."

                    state.dirty = true
                    if (i % 3 === 0) playPlayerSound(player, SND_SPIN_TICK, 0.6, 1.3)
                    Thread.sleep(110)
                }

                var liveCfg = loadConfig(world)
                var outcome = rollOutcome(liveCfg.outcomes)
                var finalReels = parseReelSpecToArray(outcome.reels)
                state.reels = finalReels

                var reward = asInt(outcome.reward, 0, 0, 1000000)
                if (reward > 0) {
                    giveCurrency(player, liveCfg.costItem, reward)
                    state.message = "§a" + outcome.name + "! Won " + reward + " " + shortItemName(liveCfg.costItem)
                    player.message("§a[Slot] " + outcome.name + "! +" + reward + " " + shortItemName(liveCfg.costItem))
                    playPlayerSound(player, SND_WIN, 1.0, 1.05)
                    debugLog("Spin finished WIN for " + player.getName() + " | outcome=" + outcome.name + " | reward=" + reward)
                } else {
                    state.message = "§c" + outcome.name + " - No reward"
                    player.message("§7[Slot] " + outcome.name)
                    playPlayerSound(player, SND_LOSE, 0.9, 1.0)
                    debugLog("Spin finished LOSE for " + player.getName() + " | outcome=" + outcome.name)
                }

                state.lastOutcome = outcome.name
                state.dirty = true
            } catch (err) {
                state.message = "§cSpin error"
                state.dirty = true
                debugLog("Spin error for " + player.getName() + " | " + err)
            } finally {
                state.running = false
                state.spinStartedAt = 0
                state.dirty = true
                debugLog("Spin unlocked for " + player.getName())
            }
        }
    })

    var thread = new SpinThread()
    thread.start()
}

/**
 * @param {NpcEvent.InitEvent} e
 */
function init(e) {
    npcUuid = e.npc.getUUID()
    loadConfig(e.npc.getWorld())
    e.npc.getTimers().forceStart(TIMER_GUI_REFRESH, 2, true)
}

/**
 * @param {NpcEvent.TimerEvent} e
 */
function timer(e) {
    if (e.id !== TIMER_GUI_REFRESH) return

    npcUuid = e.npc.getUUID()
    var world = e.npc.getWorld()
    var names = Object.keys(playerState)

    for (var i = 0; i < names.length; i++) {
        var name = names[i]
        var state = playerState[name]
        if (!state || !state.dirty) continue

        var player = world.getPlayer(name)
        if (!player) continue

        var gui = player.getCustomGui()
        if (!gui || gui.getID() !== GUIS.PLAY) {
            state.dirty = false
            continue
        }

        openPlayGui(player, e.API, state)
        state.dirty = false
    }
}

/**
 * @param {NpcEvent.InteractEvent} e
 */
function interact(e) {
    npcUuid = e.npc.getUUID()
    e.setCanceled(true)

    if (isAdminInteract(e.player)) {
        openAdminGui(e.player, e.API)
        return
    }

    openPlayGui(e.player, e.API)
}

/**
 * @param {CustomGuiEvent.ButtonEvent} e
 */
function customGuiButton(e) {
    var gid = e.gui.getID()
    var bid = e.buttonId

    if (gid === GUIS.PLAY) {
        if (bid === C.BTN_SPIN) {
            startSpin(e.player, e.API)
            return
        }
        if (bid === C.BTN_CLOSE) {
            e.player.closeGui()
            return
        }
    }

    if (gid === GUIS.ADMIN) {
        if (bid === C.ADM_BTN_SAVE) {
            var cfg = buildConfigFromAdminGui(e.gui)
            saveConfig(e.player.getWorld(), cfg)
            e.player.message("§a[Slot Admin] Config saved")
            openAdminGui(e.player, e.API)
            return
        }

        if (bid === C.ADM_BTN_RESET) {
            var defaults = sanitizeConfig(makeDefaultConfig())
            saveConfig(e.player.getWorld(), defaults)
            e.player.message("§e[Slot Admin] Reset to defaults")
            openAdminGui(e.player, e.API)
            return
        }

        if (bid === C.ADM_BTN_CLOSE) {
            e.player.closeGui()
            return
        }
    }
}
