import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const source = read("assets/i18n.js");
const english = runInNewContext(
  `(${source.match(/const english = ([\s\S]*?);\n/)[1]})`,
);
const han = /\p{Script=Han}/u;
const referenced = new Set();
const attributeMarkers = {
  "aria-label": "aria-label",
  alt: "alt",
  title: "title",
  placeholder: "placeholder",
  content: "content",
  "data-keywords": "keywords",
};
const voidTags = new Set(
  "area base br col embed hr img input link meta param source track wbr".split(
    " ",
  ),
);

// Check the actual HTML, including hidden FAQ answers and accessible labels.
for (const file of ["index.html", "guide.html"]) {
  const stack = [];
  for (const [token] of read(file).matchAll(
    /<!--[\s\S]*?-->|<![^>]*>|<\/?[\w-]+\b[^>]*>|[^<]+/g,
  )) {
    if (token.startsWith("<!")) continue;
    if (token.startsWith("</")) {
      const tag = token.match(/^<\/([\w-]+)/)[1];
      assert.equal(stack.pop()?.tag, tag, `${file}: unbalanced ${tag}`);
    } else if (token.startsWith("<")) {
      const [, tag, rest] = token.match(/^<([\w-]+)([\s\S]*)>$/);
      const attrs = Object.fromEntries(
        Array.from(
          rest.matchAll(/([\w:-]+)(?:\s*=\s*"([^"]*)")?/g),
          ([, key, value]) => [key, value ?? ""],
        ),
      );
      assert.ok(
        !attrs["data-i18n"] || !stack.some((node) => node.attrs["data-i18n"]),
        `${file}: nested translations`,
      );
      for (const [name, value] of Object.entries(attrs)) {
        if (/^data-i18n(?:-|$)/.test(name)) {
          assert.ok(
            Object.hasOwn(english, value),
            `${file}: missing translation ${value}`,
          );
          assert.ok(
            !han.test(english[value]),
            `${value}: Chinese in English translation`,
          );
          assert.ok(
            !/<(?:a|button|input|script|iframe)\b/i.test(english[value]),
            `${value}: interactive markup inside translation`,
          );
          referenced.add(value);
        }
        if (attributeMarkers[name] && han.test(value)) {
          assert.ok(
            attrs[`data-i18n-${attributeMarkers[name]}`],
            `${file}: untranslated ${name}="${value}"`,
          );
        }
      }
      if (!voidTags.has(tag) && !token.endsWith("/>"))
        stack.push({ tag, attrs });
    } else if (han.test(token)) {
      assert.ok(
        stack.some(
          (node) =>
            node.attrs["data-i18n"] ||
            Object.hasOwn(node.attrs, "data-language"),
        ),
        `${file}: untranslated text ${token.trim()}`,
      );
    }
  }
  assert.equal(stack.length, 0, `${file}: unclosed tags`);
}
assert.deepEqual(
  [...referenced].sort(),
  Object.keys(english).sort(),
  "Unused translation keys",
);

// Exercise the shipped script with browser storage and history edge cases.
// Browser interaction and layout are checked separately in the local preview.
const boot = ({
  url = "http://localhost/sub/index.html",
  saved = null,
  blockedStorage = false,
  blockedHistory = false,
  browserLanguage = "en-US",
  browserLanguages = [browserLanguage],
  timeZone = "America/New_York",
  missingNavigator = false,
  missingIntl = false,
  blockedTimeZone = false,
} = {}) => {
  const element = (attrs, innerHTML = "") => ({
    attrs: { ...attrs },
    innerHTML,
    dataset: { i18n: attrs["data-i18n"], language: attrs["data-language"] },
    getAttribute(name) {
      return this.attrs[name] ?? null;
    },
    setAttribute(name, value) {
      this.attrs[name] = value;
    },
  });
  const heading = element(
    { "data-i18n": "home.hero.h1" },
    "让灵感，<br /><span>在本地生根</span>",
  );
  const label = element({
    "data-i18n-aria-label": "common.selectLanguage",
    "aria-label": "选择语言",
  });
  const options = ["zh", "en"].map((language) =>
    element({ "data-language": language }),
  );
  const links = [
    "index.html",
    "guide.html#quick-start",
    "guide.html?ref=help#faq",
    "#faq",
    "https://example.com/guide.html",
  ].map((href) => element({ href }));
  const events = [];
  const windowEvents = {};
  const document = {
    documentElement: {},
    querySelectorAll(selector) {
      if (selector === "[data-i18n]") return [heading];
      if (selector === "[data-i18n-aria-label]") return [label];
      if (selector === ".language-menu [data-language]") return options;
      if (selector === "a[href]") return links;
      if (
        selector === ".language-switcher" ||
        selector.startsWith("[data-i18n-")
      )
        return [];
      throw new Error(`Unexpected selector: ${selector}`);
    },
    dispatchEvent(event) {
      events.push(event);
    },
  };
  const location = { href: url };
  let stored = saved;
  const context = {
    document,
    location,
    URL,
    navigator: missingNavigator
      ? undefined
      : { language: browserLanguage, languages: browserLanguages },
    Intl: missingIntl
      ? undefined
      : {
          DateTimeFormat() {
            if (blockedTimeZone) throw new Error("Blocked");
            return { resolvedOptions: () => ({ timeZone }) };
          },
        },
    window: {
      addEventListener(name, callback) {
        windowEvents[name] = callback;
      },
    },
    localStorage: {
      getItem() {
        if (blockedStorage) throw new Error("Blocked");
        return stored;
      },
      setItem(key, value) {
        if (blockedStorage) throw new Error("Blocked");
        stored = value;
      },
    },
    history: {
      state: { existing: true },
      replaceState(state, title, nextURL) {
        if (blockedHistory) throw new Error("Blocked");
        assert.equal(state.existing, true);
        location.href = nextURL;
      },
    },
    CustomEvent: class {
      constructor(type, { detail }) {
        this.type = type;
        this.detail = detail;
      }
    },
  };
  runInNewContext(source, context);
  return {
    api: context.window.LocalServeI18n,
    document,
    heading,
    label,
    options,
    links,
    events,
    windowEvents,
    location,
    saved: () => stored,
  };
};

// Environment detection only runs when URL and saved preferences are absent.
assert.equal(boot().api.language, "en");
assert.equal(boot().document.documentElement.lang, "en");
assert.equal(boot().heading.innerHTML, english["home.hero.h1"]);
assert.equal(boot().saved(), null);
for (const browserLanguage of ["zh", "zh-CN", "zh-TW", "zh-Hans", "ZH-hk"]) {
  assert.equal(boot({ browserLanguage }).api.language, "zh");
}
assert.equal(
  boot({ browserLanguage: "en-US", browserLanguages: ["en-US", "zh-CN"] })
    .api.language,
  "en",
);
assert.equal(
  boot({ browserLanguage: "", browserLanguages: ["zh-CN"] }).api.language,
  "zh",
);
for (const timeZone of [
  "Asia/Shanghai",
  "Asia/Urumqi",
  "Asia/Chongqing",
  "Asia/Chungking",
  "Asia/Harbin",
  "Asia/Kashgar",
  "PRC",
]) {
  assert.equal(boot({ timeZone }).api.language, "zh");
}
for (const timeZone of [
  "Asia/Singapore",
  "Asia/Taipei",
  "Asia/Hong_Kong",
  "Asia/Macau",
  "Etc/GMT-8",
  "",
  null,
]) {
  assert.equal(boot({ timeZone }).api.language, "en");
}
assert.equal(
  boot({ missingNavigator: true, missingIntl: true }).api.language,
  "en",
);
assert.equal(
  boot({ missingNavigator: true, timeZone: "Asia/Shanghai" }).api.language,
  "zh",
);
assert.equal(
  boot({ browserLanguage: "zh-CN", missingIntl: true }).api.language,
  "zh",
);
assert.equal(boot({ blockedTimeZone: true }).api.language, "en");
assert.equal(boot({ saved: "zh" }).api.language, "zh");
assert.equal(
  boot({ saved: "en", timeZone: "Asia/Shanghai" }).api.language,
  "en",
);
assert.equal(boot({ saved: "bad" }).api.language, "en");
assert.equal(
  boot({
    url: "http://localhost/index.html?lang=fr",
    timeZone: "Asia/Shanghai",
  }).api.language,
  "zh",
);
assert.equal(
  boot({
    url: "http://localhost/guide.html?lang=en",
    saved: "zh",
    timeZone: "Asia/Shanghai",
  }).api.language,
  "en",
);
assert.equal(boot({ blockedStorage: true }).api.language, "en");
const explicitDefault = boot();
explicitDefault.api.setLanguage("en");
assert.equal(explicitDefault.saved(), "en");
assert.equal(new URL(explicitDefault.location.href).searchParams.get("lang"), "en");
assert.equal(explicitDefault.events.length, 0);
const defaults = boot({ browserLanguage: "zh-CN" });
assert.equal(defaults.api.language, "zh");
const original = defaults.heading.innerHTML;
defaults.api.setLanguage("en");
assert.equal(defaults.document.documentElement.lang, "en");
assert.equal(defaults.heading.innerHTML, english["home.hero.h1"]);
assert.equal(defaults.label.attrs["aria-label"], "Select language");
assert.equal(defaults.saved(), "en");
assert.equal(defaults.links[1].attrs.href, "guide.html?lang=en#quick-start");
assert.equal(defaults.links[2].attrs.href, "guide.html?ref=help&lang=en#faq");
assert.equal(defaults.links[3].attrs.href, "#faq");
assert.equal(defaults.links[4].attrs.href, "https://example.com/guide.html");
assert.equal(
  defaults.api.t("search.results", { count: 3 }),
  "Found 3 matching chapters",
);
assert.equal(defaults.api.t("copy.success"), "Copied");
assert.equal(
  defaults.api.t("copy.failure"),
  "Select the code and copy it manually",
);
assert.equal(defaults.api.t("unknown"), "unknown");
defaults.api.setLanguage("fr");
assert.equal(defaults.api.language, "en");
defaults.api.setLanguage("zh");
assert.equal(defaults.heading.innerHTML, original);
assert.equal(defaults.document.documentElement.lang, "zh-CN");
assert.equal(defaults.label.attrs["aria-label"], "选择语言");
assert.equal(
  defaults.api.t("search.results", { count: 3 }),
  "找到 3 个相关章节",
);
assert.equal(defaults.api.t("copy.success"), "已复制");
assert.equal(defaults.events.length, 2);
assert.equal(boot({ saved: "en" }).api.language, "en");
assert.equal(
  boot({ url: "http://localhost/sub/guide.html?lang=zh#settings", saved: "en" })
    .api.language,
  "zh",
);
assert.equal(
  boot({ url: "http://localhost/sub/guide.html?lang=fr", saved: "en" }).api
    .language,
  "en",
);
const file = boot({
  url: "file:///tmp/help/index.html#features",
  blockedStorage: true,
  blockedHistory: true,
  timeZone: "Asia/Shanghai",
});
file.api.setLanguage("en");
assert.equal(file.api.language, "en");
assert.equal(file.links[1].attrs.href, "guide.html?lang=en#quick-start");
const synced = boot({ browserLanguage: "zh-CN" });
synced.windowEvents.storage({
  key: "localserve-help-language",
  newValue: "en",
});
assert.equal(synced.api.language, "en");
assert.equal(synced.saved(), null);
console.log(
  `i18n: ${referenced.size} translations, HTML coverage, browser language/time zone defaults, language persistence, URL precedence, storage fallback, and bilingual messages passed`,
);
