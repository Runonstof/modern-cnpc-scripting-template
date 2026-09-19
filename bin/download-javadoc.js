#!/usr/bin/env node
/**
 * Mirror a Javadoc site into docs/<name>/ with the site root at that folder
 * (index.html lives there, not under a copied host/path prefix).
 *
 * Usage (PowerShell or WSL):
 *   node bin/download-javadoc.js
 *   node bin/download-javadoc.js https://www.kodevelopment.nl/customnpcs/api/1.12.2/
 *   node bin/download-javadoc.js https://www.kodevelopment.nl/customnpcs/api/1.12.2/ docs/customnpcs-1.12.2
 *
 * Default URL is the CustomNPCs 1.12.2 API; default dest is docs/customnpcs-1.12.2.
 * The dest folder is replaced. Stays inside the javadoc directory (no parent crawl).
 */

var fs = require("fs");
var path = require("path");

var root = path.join(__dirname, "..");
var DEFAULT_URL = "https://www.kodevelopment.nl/customnpcs/api/1.12.2/";
var DEFAULT_DEST = path.join("docs", "customnpcs-1.12.2");
var CONCURRENCY = 8;
var USER_AGENT = "customnpcs-scripts-download-javadoc";

var SEEDED_PATHS = [
  "index.html",
  "overview-summary.html",
  "overview-tree.html",
  "allclasses-index.html",
  "allpackages-index.html",
  "allclasses.html",
  "allclasses-frame.html",
  "allclasses-noframe.html",
  "constant-values.html",
  "deprecated-list.html",
  "serialized-form.html",
  "help-doc.html",
  "search.html",
  "element-list",
  "package-list",
  "stylesheet.css",
  "script.js",
  "search.js",
  "jquery-ui.overrides.css",
  "copy.svg",
  "link.svg",
  "member-search-index.js",
  "module-search-index.js",
  "package-search-index.js",
  "tag-search-index.js",
  "type-search-index.js",
  "index-files/index-1.html",
];

function printHelp() {
  process.stderr.write(
    "Usage: node bin/download-javadoc.js [url] [dest]\n" +
      "  url   Javadoc root (default: " +
      DEFAULT_URL +
      ")\n" +
      "  dest  Folder relative to repo root (default: " +
      DEFAULT_DEST.replace(/\\/g, "/") +
      ")\n" +
      "Writes the site root into dest (dest/index.html), same layout as docs/customnpcs.\n"
  );
}

function isHelp(arg) {
  return arg === "-h" || arg === "--help";
}

function javadocBase(urlStr) {
  var u = new URL(urlStr);
  var pathname = u.pathname || "/";
  var last = pathname.split("/").pop();
  if (last && path.posix.extname(last)) {
    pathname = pathname.slice(0, pathname.length - last.length);
  } else if (!pathname.endsWith("/")) {
    pathname += "/";
  }
  u.pathname = pathname;
  u.hash = "";
  u.search = "";
  return u;
}

function destFileFor(fileUrl, base) {
  var rel = fileUrl.pathname.slice(base.pathname.length);
  try {
    rel = decodeURIComponent(rel);
  } catch (e) {
    /* keep raw */
  }
  if (!rel || rel.endsWith("/")) rel += "index.html";
  rel = rel.replace(/\\/g, "/");
  if (!rel || rel.split("/").indexOf("..") !== -1) return null;
  return rel;
}

function extractLinks(buffer, contentType) {
  var type = String(contentType || "").toLowerCase();
  var looksText =
    /html|css|javascript|json|xml|svg|text\//.test(type) || !type;
  if (!looksText) return [];

  var text = buffer.toString("utf8");
  var found = [];
  var re;
  var m;

  re = /(?:href|src)\s*=\s*(["'])(.*?)\1/gi;
  while ((m = re.exec(text))) found.push(m[2]);

  re = /url\(\s*(['"]?)([^'")]+)\1\s*\)/gi;
  while ((m = re.exec(text))) found.push(m[2]);

  re = /@import\s+(?:url\()?\s*['"]?([^'")\s]+)['"]?\s*\)?/gi;
  while ((m = re.exec(text))) found.push(m[1]);

  re = /["']([A-Za-z0-9_./-]+\.(?:html|css|js|svg|png|gif|jpg|jpeg|ico|woff2?|ttf|eot|map))["']/gi;
  while ((m = re.exec(text))) found.push(m[1]);

  return found;
}

function resolveLink(raw, pageUrl, base) {
  var href = String(raw || "").trim();
  if (!href) return null;
  var lower = href.toLowerCase();
  if (
    lower.indexOf("javascript:") === 0 ||
    lower.indexOf("mailto:") === 0 ||
    lower.indexOf("data:") === 0 ||
    href.charAt(0) === "#"
  ) {
    return null;
  }
  var abs;
  try {
    abs = new URL(href, pageUrl);
  } catch (e) {
    return null;
  }
  if (abs.origin !== base.origin) return null;
  if (abs.pathname.indexOf(base.pathname) !== 0) return null;
  abs.hash = "";
  abs.search = "";
  return abs;
}

function enqueue(state, fileUrl) {
  var rel = destFileFor(fileUrl, state.base);
  if (!rel) return;
  if (state.seen[rel]) return;
  state.seen[rel] = true;
  state.queue.push({ url: fileUrl.href, rel: rel });
}

async function fetchOk(url) {
  var lastErr = null;
  for (var attempt = 1; attempt <= 5; attempt++) {
    try {
      var res = await fetch(url, {
        redirect: "follow",
        headers: { "User-Agent": USER_AGENT, Accept: "*/*" },
      });
      if (res.status === 404) return null;
      if (!res.ok) {
        throw new Error("HTTP " + res.status);
      }
      var buf = Buffer.from(await res.arrayBuffer());
      return {
        buf: buf,
        type: res.headers.get("content-type") || "",
        finalUrl: res.url || url,
      };
    } catch (err) {
      lastErr = err;
      await sleep(200 * attempt);
    }
  }
  throw lastErr || new Error("fetch failed");
}

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

async function worker(state) {
  while (true) {
    var job = state.queue.shift();
    if (!job) {
      if (state.active === 0) return;
      await sleep(30);
      continue;
    }
    state.active += 1;
    try {
      var got = await fetchOk(job.url);
      if (got) {
        var out = path.join(state.dest, job.rel.split("/").join(path.sep));
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, got.buf);
        state.saved += 1;
        var pageUrl = new URL(got.finalUrl);
        extractLinks(got.buf, got.type).forEach(function (raw) {
          var next = resolveLink(raw, pageUrl, state.base);
          if (next) enqueue(state, next);
        });
        if (state.saved % 25 === 0) {
          process.stderr.write(
            "saved " + state.saved + ", queued " + state.queue.length + "\n"
          );
        }
      }
    } catch (err) {
      state.errors.push(job.url + " — " + err.message);
    } finally {
      state.active -= 1;
    }
  }
}

async function main() {
  var args = process.argv.slice(2);
  if (args.some(isHelp)) {
    printHelp();
    process.exit(0);
  }

  var urlArg = args[0] || DEFAULT_URL;
  var destArg = args[1] || DEFAULT_DEST;
  var base = javadocBase(urlArg);
  var dest = path.isAbsolute(destArg) ? destArg : path.join(root, destArg);

  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  fs.mkdirSync(dest, { recursive: true });

  var state = {
    base: base,
    dest: dest,
    queue: [],
    seen: Object.create(null),
    saved: 0,
    active: 0,
    errors: [],
  };

  enqueue(state, new URL(base.href));
  SEEDED_PATHS.forEach(function (rel) {
    enqueue(state, new URL(rel, base));
  });

  process.stderr.write("Mirroring " + base.href + " -> " + dest + "\n");

  var workers = [];
  for (var i = 0; i < CONCURRENCY; i++) workers.push(worker(state));
  await Promise.all(workers);

  var indexPath = path.join(dest, "index.html");
  if (!fs.existsSync(indexPath)) {
    process.stderr.write("Download finished but dest/index.html is missing.\n");
    process.exit(1);
  }

  process.stderr.write(
    "Done: " + state.saved + " files in " + path.relative(root, dest) + "\n"
  );
  if (state.errors.length) {
    process.stderr.write(state.errors.length + " failed URLs:\n");
    state.errors.forEach(function (line) {
      process.stderr.write("  " + line + "\n");
    });
    process.exit(1);
  }
}

main().catch(function (err) {
  process.stderr.write(String(err && err.stack ? err.stack : err) + "\n");
  process.exit(1);
});
