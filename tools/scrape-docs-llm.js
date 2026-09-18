/**
 * Maintainer tool: scrape Javadoc HTML in docs/ into compact docs-llm/.
 *
 * Usage (after replacing docs/ with a newer Javadoc dump):
 *   npm run docs:llm
 *
 * Coding agents should read docs-llm/ only; they do not need this script.
 */
const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");
const cheerio = require("cheerio");

const ROOT = path.resolve(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const OUT = path.join(ROOT, "docs-llm");

const SKIP_INHERITED_FROM = [
  "java.lang.Object",
  "net.minecraftforge.eventbus.api.Event",
];

function cleanText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function htmlToText($, el, { inline = false } = {}) {
  if (!el || !el.length) return "";
  const clone = el.clone();
  clone.find("br").replaceWith(inline ? " " : "\n");
  const text = cleanText(clone.text());
  return inline ? text.replace(/\n+/g, " ") : text;
}

function packageFromMeta($) {
  const desc = $('meta[name="description"]').attr("content") || "";
  const match = desc.match(/package:\s*([a-zA-Z0-9_.]+)/);
  return match ? match[1] : "";
}

function parseKindAndName(title) {
  const text = cleanText(title).replace(/<[^>]+>/g, "");
  const match = text.match(/^(Class|Interface|Enum|Record Class|Annotation Interface)\s+(.+)$/);
  if (match) {
    return { kind: match[1].toLowerCase().replace("record class", "record"), name: match[2] };
  }
  return { kind: "type", name: text };
}

function parseNotes($, $section) {
  const notes = { params: [], returns: "", throws: [] };
  $section.find("dl.notes").each((_, dl) => {
    let current = "";
    $(dl)
      .children()
      .each((__, child) => {
        const tag = child.tagName && child.tagName.toLowerCase();
        if (tag === "dt") {
          current = cleanText($(child).text()).toLowerCase();
        } else if (tag === "dd") {
          const text = htmlToText($, $(child));
          if (current.startsWith("parameter")) notes.params.push(text);
          else if (current.startsWith("return")) notes.returns = text;
          else if (current.startsWith("throw")) notes.throws.push(text);
        }
      });
  });
  return notes;
}

function parseMembers($, selector) {
  const members = [];
  $(selector)
    .find("section.detail")
    .each((_, section) => {
      const $section = $(section);
      const signature = htmlToText($, $section.find(".member-signature").first(), { inline: true });
      const name = cleanText($section.find("h3").first().text());
      if (!signature && !name) return;

      const deprecated = $section.find(".deprecated-label, .deprecated").length > 0;
      const blocks = [];
      $section.find(".block").each((__, block) => {
        const $block = $(block);
        if ($block.find(".description-from-type-label").length) return;
        const text = htmlToText($, $block);
        if (text) blocks.push(text);
      });
      const notes = parseNotes($, $section);
      members.push({
        name,
        signature,
        deprecated,
        description: blocks.join("\n"),
        params: notes.params,
        returns: notes.returns,
        throws: notes.throws,
      });
    });
  return members;
}

function parseInherited($, headingPrefix) {
  const inherited = [];
  $(".inherited-list").each((_, list) => {
    const $list = $(list);
    const heading = cleanText($list.find("h3").first().text());
    if (!heading.toLowerCase().startsWith(headingPrefix)) return;
    const fromMatch = heading.match(/from (?:class|interface)\s+(.+)$/i);
    const from = fromMatch ? fromMatch[1] : heading;
    if (SKIP_INHERITED_FROM.some((skip) => from.startsWith(skip))) return;
    const names = htmlToText($, $list.find("code").first())
      .split(",")
      .map((part) => cleanText(part))
      .filter(Boolean);
    if (names.length) inherited.push({ from, names });
  });
  return inherited;
}

function extractHook(description) {
  if (!description) return "";
  const first = description.split("\n")[0].trim();
  if (/^[a-z][a-zA-Z0-9]*$/.test(first)) return first;
  return "";
}

function stripLeadingHook(description, hook) {
  if (!description || !hook) return description || "";
  const lines = description.split("\n");
  if (lines[0].trim() === hook) lines.shift();
  return cleanText(lines.join("\n"));
}

function parseClassPage(filePath, html) {
  const $ = cheerio.load(html);
  if (!$("body.class-declaration-page").length) return null;

  const pkg = packageFromMeta($);
  const { kind, name } = parseKindAndName($("main h1.title").first().text());
  const signature = htmlToText($, $("main .type-signature").first());
  const description = htmlToText($, $("main .class-description .type-signature").first().nextAll(".block").first())
    || htmlToText($, $("main .class-description > .block").first());

  const supers = [];
  $("main .class-description dt").each((_, dt) => {
    const label = cleanText($(dt).text()).toLowerCase();
    if (label.includes("superinterface") || label.includes("superclass") || label.includes("enclosing")) {
      const values = htmlToText($, $(dt).next("dd"))
        .split(",")
        .map((part) => cleanText(part))
        .filter(Boolean);
      supers.push({ label: cleanText($(dt).text()), values });
    }
  });

  const fields = parseMembers($, "#field-detail");
  const methods = parseMembers($, "#method-detail");
  const hook = pkg.endsWith(".event") ? extractHook(description) : "";

  return {
    file: path.relative(DOCS, filePath).replace(/\\/g, "/"),
    package: pkg,
    kind,
    name,
    fqn: pkg ? pkg + "." + name : name,
    signature,
    hook,
    description: stripLeadingHook(description, hook),
    supers,
    fields,
    methods,
    inheritedFields: parseInherited($, "fields inherited"),
    inheritedMethods: parseInherited($, "methods inherited"),
  };
}

function parseConstantValues(html) {
  const $ = cheerio.load(html);
  const values = {};
  $("[id^='noppes.']").each((_, el) => {
    const id = $(el).attr("id");
    const $cell = $(el).closest(".col-first");
    const value = cleanText($cell.nextAll(".col-last").first().text());
    if (id && value) values[id] = value;
  });
  return values;
}

function applyConstants(types, constants) {
  for (const type of types) {
    for (const field of type.fields) {
      const key = type.fqn + "." + field.name;
      if (constants[key]) field.value = constants[key];
    }
  }
}

function renderMember(member, heading) {
  const bits = [];
  const sig = member.signature || heading + " " + member.name;
  const extra = [];
  if (member.value != null) extra.push("= " + member.value);
  if (member.deprecated) extra.push("deprecated");
  bits.push("- `" + sig + "`" + (extra.length ? " (" + extra.join(", ") + ")" : ""));
  if (member.description) bits.push("  " + member.description.replace(/\n/g, "\n  "));
  for (const param of member.params) bits.push("  - param: " + param);
  if (member.returns) bits.push("  - returns: " + member.returns);
  for (const th of member.throws) bits.push("  - throws: " + th);
  return bits.join("\n");
}

function renderType(type) {
  const lines = [];
  lines.push("## " + type.name);
  lines.push("");
  lines.push("*" + type.kind + "* `" + type.fqn + "`");
  if (type.hook) lines.push("");
  if (type.hook) lines.push("Script hook: `" + type.hook + "`");
  if (type.description) {
    lines.push("");
    lines.push(type.description);
  }
  for (const sup of type.supers) {
    lines.push("");
    lines.push(sup.label.replace(/:$/, "") + ": " + sup.values.join(", "));
  }
  if (type.fields.length) {
    lines.push("");
    lines.push("### Fields");
    for (const field of type.fields) lines.push(renderMember(field, "field"));
  }
  if (type.inheritedFields.length) {
    lines.push("");
    lines.push("### Inherited fields");
    for (const group of type.inheritedFields) {
      lines.push("- from `" + group.from + "`: " + group.names.map((n) => "`" + n + "`").join(", "));
    }
  }
  if (type.methods.length) {
    lines.push("");
    lines.push("### Methods");
    for (const method of type.methods) lines.push(renderMember(method, "method"));
  }
  if (type.inheritedMethods.length) {
    lines.push("");
    lines.push("### Inherited methods");
    for (const group of type.inheritedMethods) {
      lines.push("- from `" + group.from + "`: " + group.names.map((n) => "`" + n + "`").join(", "));
    }
  }
  lines.push("");
  return lines.join("\n");
}

function scriptKindForEvent(name) {
  const root = name.split(".")[0];
  const map = {
    PlayerEvent: "player",
    NpcEvent: "npc",
    BlockEvent: "block",
    ItemEvent: "item",
    ForgeEvent: "forge",
    DialogEvent: "dialog",
    QuestEvent: "quest",
    RoleEvent: "role",
    CustomGuiEvent: "gui",
    HandlerEvent: "handler",
    ProjectileEvent: "projectile",
    WorldEvent: "world",
    CustomNPCsEvent: "global",
  };
  return map[root] || "other";
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents.replace(/\n+$/, "\n"));
}

function main() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const constantsHtml = path.join(DOCS, "constant-values.html");
  const constants = fs.existsSync(constantsHtml)
    ? parseConstantValues(fs.readFileSync(constantsHtml, "utf8"))
    : {};

  const files = globSync("noppes/**/*.html", {
    cwd: DOCS,
    nodir: true,
    windowsPathsNoEscape: true,
  }).filter((rel) => !rel.includes("class-use") && !/package-(summary|tree|use)\.html$/i.test(rel));

  const types = [];
  for (const rel of files) {
    const abs = path.join(DOCS, rel);
    const parsed = parseClassPage(abs, fs.readFileSync(abs, "utf8"));
    if (parsed) types.push(parsed);
  }
  types.sort((a, b) => a.fqn.localeCompare(b.fqn));
  applyConstants(types, constants);

  const byPackage = new Map();
  for (const type of types) {
    if (!byPackage.has(type.package)) byPackage.set(type.package, []);
    byPackage.get(type.package).push(type);
  }

    const indexLines = [
    "# CustomNPCs API",
    "",
    "API reference for CustomNPCs scripting.",
    "",
    "- [Event hooks](events.md) — script function names and event fields",
    "- [api.json](api.json) — machine-readable dump",
    "",
    "## Packages",
    "",
  ];

  const llmsLines = [
    "# CustomNPCs scripting API",
    "",
    "Use the Markdown packages first. Open api.json only for structured lookup.",
    "",
  ];

  for (const pkg of [...byPackage.keys()].sort()) {
    const slug = pkg.replace(/^noppes\.npcs\.api\.?/, "") || "root";
    const fileName = slug.replace(/\./g, "/") + ".md";
    const rel = fileName.replace(/\\/g, "/");
    const header = [
      "# " + pkg,
      "",
      typesForToc(byPackage.get(pkg)),
      "",
    ];
    const body = byPackage.get(pkg).map(renderType).join("\n");
    writeFile(path.join(OUT, rel), header.join("\n") + body);
    indexLines.push("- [`" + pkg + "`](" + rel + ") — " + byPackage.get(pkg).length + " types");
    llmsLines.push("- " + rel + ": " + pkg);
  }

  writeFile(path.join(OUT, "index.md"), indexLines.join("\n") + "\n");
  writeFile(path.join(OUT, "llms.txt"), llmsLines.join("\n") + "\n");
  writeFile(path.join(OUT, "events.md"), renderEvents(types));
  writeFile(path.join(OUT, "api.json"), JSON.stringify({ generatedFrom: "docs/", types }, null, 2) + "\n");

  console.log("Wrote " + types.length + " types to " + path.relative(ROOT, OUT));
}

function typesForToc(list) {
  return list
    .map((type) => {
      const hook = type.hook ? " — `" + type.hook + "`" : "";
      return "- [" + type.name + "](#" + githubAnchor(type.name) + ")" + hook;
    })
    .join("\n");
}

function githubAnchor(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function renderEvents(types) {
  const events = types.filter((type) => type.package.endsWith(".event"));
  const groups = new Map();
  for (const type of events) {
    const kind = scriptKindForEvent(type.name);
    if (!groups.has(kind)) groups.set(kind, []);
    groups.get(kind).push(type);
  }

  const lines = [
    "# Script event hooks",
    "",
    "Export a function with the hook name. The first argument is the event object.",
    "",
    "```javascript",
    "export function interact(e) {",
    "  e.npc.say('Hello there, ' + e.player.name + '!');",
    "}",
    "```",
    "",
  ];

  for (const kind of [...groups.keys()].sort()) {
    lines.push("## " + kind);
    lines.push("");
    lines.push("| Hook | Event | Fields | Notes |");
    lines.push("|---|---|---|---|");
    for (const type of groups.get(kind)) {
      const fields = type.fields.map((f) => "`" + f.name + "`").concat(
        type.inheritedFields.flatMap((g) => g.names.map((n) => "`" + n + "`"))
      );
      let note = type.description.replace(/\n/g, " ").replace(/\|/g, "\\|").trim();
      if (type.hook && note.toLowerCase().startsWith(type.hook.toLowerCase())) {
        note = note.slice(type.hook.length).trim();
      }
      lines.push(
        "| `" +
          (type.hook || "—") +
          "` | `" +
          type.name +
          "` | " +
          (fields.join(", ") || "—") +
          " | " +
          (note || "") +
          " |"
      );
    }
    lines.push("");
  }
  return lines.join("\n");
}

main();
