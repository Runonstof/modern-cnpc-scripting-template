/**
 * Maintainer tool: scrape Javadoc HTML dumps in docs/<source>/ into docs-llm/.
 *
 * Usage:
 *   npm run docs:llm
 *   node tools/scrape-docs-llm.js
 *
 * Example:
 *   1. Drop a Javadoc site into docs/<name>/  (e.g. docs/customnpcs/)
 *   2. From the repo root:
 *        npm run docs:llm
 *   3. Output:
 *        docs-llm/index.md          — all sources
 *        docs-llm/<name>/index.md   — packages for that dump
 *        docs-llm/<name>/events.md  — script hooks (if event types exist)
 *        docs-llm/api.json          — machine-readable types (all sources)
 *
 * No CLI flags. Every immediate subdirectory of docs/ is treated as one source.
 * docs-llm/ is wiped and rewritten each run.
 * Parses both Java 8 Javadoc HTML (Forge 1.12) and Java 9+ HTML (CustomNPCs).
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
  const match = text.match(
    /^(Class|Interface|Enum|Record Class|Annotation Interface|Annotation Type)\s+(.+)$/
  );
  if (match) {
    const kind = match[1]
      .toLowerCase()
      .replace("record class", "record")
      .replace("annotation interface", "annotation")
      .replace("annotation type", "annotation");
    return { kind, name: match[2] };
  }
  return { kind: "type", name: text };
}

function parseNotes($, $section) {
  const notes = { params: [], returns: "", throws: [] };
  $section.find("dl").each((_, dl) => {
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

function isDeprecated($el) {
  return $el.find(".deprecated-label, .deprecatedLabel, .deprecated").length > 0;
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

      const deprecated = isDeprecated($section);
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

function collectSupers($, $root) {
  const supers = [];
  $root.find("dt").each((_, dt) => {
    const label = cleanText($(dt).text()).toLowerCase();
    if (
      label.includes("superinterface")
      || label.includes("superclass")
      || label.includes("enclosing")
      || label.includes("implemented interface")
    ) {
      const values = htmlToText($, $(dt).next("dd"))
        .split(",")
        .map((part) => cleanText(part))
        .filter(Boolean);
      supers.push({ label: cleanText($(dt).text()), values });
    }
  });
  return supers;
}

function typeRecord(filePath, docsRoot, pkg, kind, name, signature, description, supers, fields, methods, inheritedFields, inheritedMethods) {
  const hook = pkg.endsWith(".event") ? extractHook(description) : "";
  return {
    file: path.relative(docsRoot, filePath).replace(/\\/g, "/"),
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
    inheritedFields,
    inheritedMethods,
  };
}

function parseClassPageModern($, filePath, docsRoot) {
  const pkg = packageFromMeta($);
  const { kind, name } = parseKindAndName($("main h1.title").first().text());
  const $desc = $("main .class-description, main section.description").first();
  const signature = htmlToText($, $desc.find(".type-signature, pre").first());
  const description = htmlToText($, $desc.find(".type-signature").first().nextAll(".block").first())
    || htmlToText($, $desc.children(".block").first())
    || htmlToText($, $desc.find(".block").first());

  const fields = parseMembers($, '[id="field.detail"], #field-detail, section.field-details')
    .concat(parseMembers($, '[id="enum.constant.detail"], #enum-constant-detail, section.enum-constant-details'));
  const methods = parseMembers($, '[id="method.detail"], #method-detail, section.method-details');
  return typeRecord(
    filePath,
    docsRoot,
    pkg,
    kind,
    name,
    signature,
    description,
    collectSupers($, $desc),
    fields,
    methods,
    parseInherited($, "fields inherited"),
    parseInherited($, "methods inherited")
  );
}

function parseMembersJava8($, anchorName) {
  const members = [];
  const $anchor = $('a[name="' + anchorName + '"]');
  if (!$anchor.length) return members;
  const $section = $anchor.closest("li.blockList");
  $section.children("ul.blockList, ul.blockListLast").each((_, ul) => {
    const $li = $(ul).children("li.blockList").first();
    const signature = htmlToText($, $li.find("pre").first(), { inline: true });
    const name = cleanText($li.find("h4").first().text());
    if (!signature && !name) return;

    const blocks = [];
    $li.children("div.block").each((__, block) => {
      const text = htmlToText($, $(block));
      if (text) blocks.push(text);
    });
    const notes = parseNotes($, $li);
    members.push({
      name,
      signature,
      deprecated: isDeprecated($li),
      description: blocks.join("\n"),
      params: notes.params,
      returns: notes.returns,
      throws: notes.throws,
    });
  });
  return members;
}

function parseInheritedJava8($, headingPrefix) {
  const inherited = [];
  $("h3").each((_, h3) => {
    const $h3 = $(h3);
    const heading = cleanText($h3.text());
    if (!heading.toLowerCase().startsWith(headingPrefix)) return;
    const fromMatch = heading.match(/from (?:class|interface)\s+(.+)$/i);
    const from = fromMatch ? fromMatch[1] : heading;
    if (SKIP_INHERITED_FROM.some((skip) => from.startsWith(skip))) return;
    const names = htmlToText($, $h3.nextAll("code").first())
      .split(",")
      .map((part) => cleanText(part))
      .filter(Boolean);
    if (names.length) inherited.push({ from, names });
  });
  return inherited;
}

function parseClassPageJava8($, filePath, docsRoot) {
  const title = $("div.header h2.title").first().text();
  const { kind, name } = parseKindAndName(title);
  if (kind === "type") return null;

  const pkg = cleanText($("div.header .subTitle").first().text());
  const $desc = $("div.description").first();
  const signature = htmlToText($, $desc.find("pre").first());
  const description = htmlToText($, $desc.find("div.block").first());

  const fields = parseMembersJava8($, "field.detail").concat(parseMembersJava8($, "enum.constant.detail"));
  const methods = parseMembersJava8($, "method.detail");
  return typeRecord(
    filePath,
    docsRoot,
    pkg,
    kind,
    name,
    signature,
    description,
    collectSupers($, $desc),
    fields,
    methods,
    parseInheritedJava8($, "fields inherited"),
    parseInheritedJava8($, "methods inherited")
  );
}

function parseClassPage(filePath, html, docsRoot) {
  const $ = cheerio.load(html);
  if ($("body.class-declaration-page").length) {
    return parseClassPageModern($, filePath, docsRoot);
  }
  const java8Title = cleanText($("div.header h2.title").first().text());
  if (/^(Class|Interface|Enum|Annotation Type)\s+/.test(java8Title)) {
    return parseClassPageJava8($, filePath, docsRoot);
  }
  return null;
}

function parseConstantValues(html) {
  const $ = cheerio.load(html);
  const values = {};
  $("code[id]").each((_, el) => {
    const id = $(el).attr("id");
    if (!id || id.indexOf(".") === -1) return;
    const $cell = $(el).closest(".col-first");
    const value = cleanText($cell.nextAll(".col-last").first().text());
    if (id && value) values[id] = value;
  });
  $("td.colFirst a[name], td.col-first a[name]").each((_, el) => {
    const id = $(el).attr("name");
    if (!id || id.indexOf(".") === -1) return;
    const value = cleanText($(el).closest("tr").find("td.colLast, td.col-last").first().text());
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

function isJavadocRoot(dir) {
  return fs.existsSync(path.join(dir, "index.html"))
    || fs.existsSync(path.join(dir, "constant-values.html"))
    || fs.existsSync(path.join(dir, "overview-summary.html"));
}

function listSources() {
  if (!fs.existsSync(DOCS)) {
    throw new Error("Missing docs/ folder");
  }

  const sources = [];
  for (const ent of fs.readdirSync(DOCS, { withFileTypes: true })) {
    if (!ent.isDirectory() || ent.name.startsWith(".")) continue;
    const dir = path.join(DOCS, ent.name);
    if (!isJavadocRoot(dir)) continue;
    sources.push({ id: ent.name, dir });
  }

  sources.sort((a, b) => a.id.localeCompare(b.id));
  if (!sources.length) {
    throw new Error("No Javadoc dumps found. Place each site in docs/<name>/ (for example docs/customnpcs/).");
  }
  return sources;
}

function commonPackagePrefix(packages) {
  const unique = [...new Set(packages.filter(Boolean))].sort();
  if (!unique.length) return "";
  const parts = unique.map((pkg) => pkg.split("."));
  const first = parts[0];
  let i = 0;
  while (i < first.length) {
    if (!parts.every((p) => p[i] === first[i])) break;
    i += 1;
  }
  if (i === 0) return "";
  // Don't use a prefix that is itself a documented package (that becomes root.md).
  while (i > 0 && unique.includes(first.slice(0, i).join("."))) i -= 1;
  return first.slice(0, i).join(".");
}

function packageSlug(pkg, prefix) {
  let rest = pkg;
  if (prefix && (pkg === prefix || pkg.startsWith(prefix + "."))) {
    rest = pkg.slice(prefix.length).replace(/^\./, "");
  }
  return (rest || "root").replace(/\./g, "/");
}

function scrapeSource(source) {
  const constantsHtml = path.join(source.dir, "constant-values.html");
  const constants = fs.existsSync(constantsHtml)
    ? parseConstantValues(fs.readFileSync(constantsHtml, "utf8"))
    : {};

  const files = globSync("**/*.html", {
    cwd: source.dir,
    nodir: true,
    windowsPathsNoEscape: true,
    ignore: [
      "**/class-use/**",
      "index-files/**",
      "legal/**",
      "resource-files/**",
      "script-files/**",
      "**/*-frame.html",
      "**/allclasses-noframe.html",
      "**/index-all.html",
    ],
  }).filter((rel) => !/package-(summary|tree|use)\.html$/i.test(rel));

  const types = [];
  for (const rel of files) {
    const abs = path.join(source.dir, rel);
    const parsed = parseClassPage(abs, fs.readFileSync(abs, "utf8"), source.dir);
    if (!parsed) continue;
    parsed.source = source.id;
    types.push(parsed);
  }
  types.sort((a, b) => a.fqn.localeCompare(b.fqn));
  applyConstants(types, constants);
  return types;
}

function writeSourceMarkdown(source, types) {
  const outDir = path.join(OUT, source.id);
  const byPackage = new Map();
  for (const type of types) {
    if (!byPackage.has(type.package)) byPackage.set(type.package, []);
    byPackage.get(type.package).push(type);
  }

  const prefix = commonPackagePrefix([...byPackage.keys()]);
  const indexLines = [
    "# " + source.id,
    "",
    "API reference scraped from `docs/" + source.id + "/`.",
    "",
  ];
  const events = types.filter((type) => type.package.endsWith(".event"));
  if (events.length) {
    indexLines.push("- [Event hooks](events.md) — script function names and event fields");
  }
  indexLines.push("- [api.json](../api.json) — machine-readable dump (all sources)");
  indexLines.push("");
  indexLines.push("## Packages");
  indexLines.push("");

  const llmsLines = [
    "# " + source.id + " API",
    "",
    "Use the Markdown packages first. Don't open ../api.json directly, but use `node bin/get-class-info.js <name|fqn|package|source> [...]` to lookup types.",
    "",
  ];

  for (const pkg of [...byPackage.keys()].sort()) {
    const fileName = packageSlug(pkg, prefix) + ".md";
    const rel = fileName.replace(/\\/g, "/");
    const header = [
      "# " + pkg,
      "",
      typesForToc(byPackage.get(pkg)),
      "",
    ];
    const body = byPackage.get(pkg).map(renderType).join("\n");
    writeFile(path.join(outDir, rel), header.join("\n") + body);
    indexLines.push("- [`" + pkg + "`](" + rel + ") — " + byPackage.get(pkg).length + " types");
    llmsLines.push("- " + rel + ": " + pkg);
  }

  writeFile(path.join(outDir, "index.md"), indexLines.join("\n") + "\n");
  writeFile(path.join(outDir, "llms.txt"), llmsLines.join("\n") + "\n");
  if (events.length) {
    writeFile(path.join(outDir, "events.md"), renderEvents(types));
  }

  return { typeCount: types.length, packageCount: byPackage.size, hasEvents: events.length > 0 };
}

function main() {
  const sources = listSources();
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const allTypes = [];
  const summaries = [];

  for (const source of sources) {
    const types = scrapeSource(source);
    const summary = writeSourceMarkdown(source, types);
    allTypes.push(...types);
    summaries.push({ source, ...summary });
    console.log("Wrote " + types.length + " types from docs/" + source.id + "/");
  }

  const indexLines = [
    "# Scripting API docs",
    "",
    "Each folder under `docs/` is a Javadoc dump. This tree is generated from all of them.",
    "",
    "## Sources",
    "",
  ];
  const llmsLines = [
    "# Scripting API docs",
    "",
    "Use Markdown under each source folder first. Don't open api.json directly, but use `node bin/get-class-info.js <name|fqn|package|source> [...]` to lookup types..",
    "",
  ];

  for (const item of summaries) {
    const id = item.source.id;
    indexLines.push("- [" + id + "](" + id + "/index.md) — " + item.typeCount + " types, " + item.packageCount + " packages");
    llmsLines.push("- " + id + "/index.md: " + id);
    if (item.hasEvents) {
      indexLines.push("  - [Event hooks](" + id + "/events.md)");
    }
  }

  indexLines.push("");
  indexLines.push("- [api.json](api.json) — machine-readable dump");

  writeFile(path.join(OUT, "index.md"), indexLines.join("\n") + "\n");
  writeFile(path.join(OUT, "llms.txt"), llmsLines.join("\n") + "\n");
  writeFile(
    path.join(OUT, "api.json"),
    JSON.stringify({
      generatedFrom: sources.map((s) => "docs/" + s.id + "/"),
      types: allTypes,
    }, null, 2) + "\n"
  );
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

if (require.main === module) {
  main();
}

module.exports = { parseClassPage, parseConstantValues };
