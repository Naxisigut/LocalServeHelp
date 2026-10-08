(() => {
  // Trusted inline translations; Chinese content stays in the HTML as the fallback.
  const english = {
    "home.meta.title": "LocalServe — Let your ideas take root locally",
    "home.meta.a": "Skip to main content",
    "common.docs": "Documentation",
    "common.faq": "FAQ",
    "home.site-header.a": "Quick start",
    "home.hero.h1": "Let ideas<br /><span>take root locally</span>",
    "home.hero.p":
      "One folder. One site.<br />Deploy local apps and share files with LocalServe.<br />Build your own collection of local apps.",
    "home.hero.a": "Get started",
    "home.hero.a2": 'Explore the features <span aria-hidden="true">↓</span>',
    "home.hero.span": "Built for macOS",
    "home.hero.span2": "No command line needed",
    "home.hero.span3": "Runs locally. No data collection.",
    "home.hero.span4": "Add",
    "home.hero.strong": "Files <small>4</small>",
    "home.hero.span5": "Inspiration.pdf",
    "home.hero.span6": "Sketch.png",
    "home.hero.span7": "Preview.mov",
    "home.hero.span8": "Proposal.pdf",
    "home.hero.strong2": "Sites <small>1</small>",
    "home.hero.strong3": "Inspiration space",
    "home.hero.span9": "<i></i>Running",
    "home.hero.span10": "Files: 4 · Sites: 1 · Running: 1",
    "home.features.h2": "Small tool. Big possibilities.",
    "home.features.h3": "Turn any local folder into a site",
    "home.features.p":
      "Open static pages, project docs, and frontend builds whenever you need them.",
    "home.features.h32": "Scan to open on your network",
    "home.features.p2":
      "Let other devices on the same network see what you have made.",
    "home.features.h33": "Connect frontend and backend",
    "home.features.p3":
      "Forward requests and rewrite paths.<br />Keep API calls on the same origin for easier development.",
    "home.features.span": "Site",
    "home.features.span2": "Proxy",
    "home.features.span3": "Backend",
    "home.features.h34": "Give your site a memorable name",
    "home.features.p4":
      "Open local sites with custom domains.<br />Give every project a familiar address.",
    "home.features.h35": "Make file sharing simple",
    "home.features.p5":
      "Scan to download on the same network.<br />No complicated setup.",
    "home.features.span4": "Scan QR code",
    "home.features.span5": "Download file",
    "home.everyday-apps.h2": "Keep your Vibe Coding projects close",
    "home.everyday-apps.p":
      "Easy to build, rich in tools, and simple to access — web projects are a natural fit for AI Vibe Coding.",
    "home.everyday-apps.p2":
      "Use LocalServe to deploy your Vibe Coding projects on your local network.",
    "home.everyday-apps.h3": "Built for these everyday tasks",
    "home.everyday-apps.span": "01 / Development",
    "home.everyday-apps.h32": "Preview and debug frontend projects",
    "home.everyday-apps.p3":
      "Configure proxy rules to forward API requests to your backend while you preview pages and test integrations locally.",
    "home.everyday-apps.span2": "Forward requests with proxy rules",
    "home.everyday-apps.span3": "02 / Local deployment",
    "home.everyday-apps.h33": "Keep frontend projects running locally",
    "home.everyday-apps.p4":
      "Give a project a memorable custom domain for daily use on your Mac, and let devices on the same network access it too.",
    "home.everyday-apps.span4": "Custom domains and LAN access",
    "home.everyday-apps.span5": "03 / File transfer",
    "home.everyday-apps.h34": "Send files to devices on your network",
    "home.everyday-apps.p5":
      "Add a file to LocalServe, then scan its QR code with a phone or tablet on the same network to download it.",
    "home.everyday-apps.span6": "Scan to download on your local network",
    "home.start.h2": "Your first site starts here.",
    "home.start.a": "Read the full guide <span>↗</span>",
    "home.start.h3": "Choose a folder",
    "home.start.p":
      "Click “Add site”.<br />Choose a folder containing <code>index.html</code>.",
    "home.start.h32": "Configure, save, and start",
    "home.start.p2":
      "Give it a name and an available port.<br />Enable other options as needed.",
    "home.start.h33": "Open it in your browser",
    "home.start.p3":
      "Open the QR code panel.<br />Visit in a browser or share with devices on your network.",
    "home.site-footer.span": "Run locally. Create freely.",
    "home.hero.text": "Local",
    "home.hero.text2": "LAN",
    "home.hero.text3": "Custom domain",
    "home.meta.content":
      "The LocalServe guide: turn local folders into websites without a command line. Preview, debug, and share on your local network.",
    "common.homeLabel": "LocalServe home",
    "common.mainNav": "Main navigation",
    "common.selectLanguage": "Select language",
    "home.hero.aria-label":
      "Preview of the LocalServe site management interface",
    "home.hero.aria-label2":
      "Illustrative app interface. File and site names are examples.",
    "guide.meta.title": "Documentation — LocalServe",
    "guide.meta.a": "Skip to the user guide",
    "guide.site-header.button": "<span>⌕</span> Search docs <kbd>⌘ K</kbd>",
    "guide.meta.button": "☰ &nbsp; Contents",
    "guide.meta.button2": "⌕ Search",
    "guide.docs-nav.a": "Meet LocalServe",
    "guide.docs-nav.a2": "Site management",
    "guide.docs-nav.a3": "<span>01</span>Create a site",
    "guide.docs-nav.a4": "<span>02</span>Basic settings",
    "guide.docs-nav.a5": "<span>03</span>LAN access",
    "guide.docs-nav.a6": "<span>04</span>Custom domains",
    "guide.docs-nav.a7": "<span>05</span>Proxy and path rewriting",
    "guide.docs-nav.a8": "<span>06</span>Advanced options",
    "guide.docs-nav.a9": "<span>07</span>Controls, links, and logs",
    "guide.docs-nav.a10": "<span>08</span>Import and export",
    "guide.docs-nav.a11": "File sharing",
    "guide.docs-nav.a12": "<span>01</span>Add files",
    "guide.docs-nav.a13": "<span>02</span>Scan to download",
    "guide.docs-nav.a14": "<span>03</span>Unavailable files and removal",
    "guide.docs-nav.a15": "General settings",
    "guide.meta.a2": "Home",
    "guide.doc-header.h1": "User guide",
    "guide.overview.h2": "Meet LocalServe",
    "guide.overview.p":
      "LocalServe helps you deploy local sites. Turn a folder on your Mac into a website you can open in a browser, or share files with devices on the same network — no command line required.",
    "guide.overview.strong": "Site management ↗",
    "guide.overview.small":
      "Create sites, configure access, and add proxy rules.",
    "guide.overview.strong2": "File sharing ↗",
    "guide.overview.small2":
      "Add files for devices on your network to scan and download.",
    "guide.overview.strong3": "Start locally",
    "guide.overview.p2":
      "Sites serve content over HTTP. LAN access requires devices to be on the same network. LocalServe does not provide public hosting or network tunneling.",
    "guide.sites.h2": "Site management",
    "guide.sites.p":
      "Deploy a local folder as a site. Create the site first, then configure LAN access, custom domains, proxy rules, and automatic startup as needed.",
    "guide.sites.p2":
      "Each site has its own folder, port, and status. Sites running at the same time must use different available ports.",
    "guide.quick-start.h3": "01 / Create a site",
    "guide.quick-start.p":
      "Prepare a folder containing <code>index.html</code>. For React, Vue, or similar projects, build the project first and choose the output folder, such as <code>dist</code>.",
    "guide.quick-start.h4": "Add a site and choose its folder",
    "guide.quick-start.p2":
      "Open LocalServe and click “Add” → “Add site” in the top right. Enter a name and choose a folder. The folder must contain <code>index.html</code>.",
    "guide.quick-start.h42": "Choose an available port",
    "guide.quick-start.p3":
      "A port is required and must not be in use by another program. The recommended range is 1024–65535.<br />The file sharing service uses port 19800, so sites cannot use that port.",
    "guide.quick-start.h43": "Save, start, and open your site",
    "guide.quick-start.p4":
      "Click “Save and start” and wait for the status to become “Running”. Click an address on the site card, then select “Open in browser” in the QR code panel.",
    "guide.site-basics.h3": "02 / Basics: name, folder, and port",
    "guide.site-basics.th": "Setting",
    "guide.site-basics.th2": "What to enter",
    "guide.site-basics.td": "Name",
    "guide.site-basics.td2":
      "Use your project name to identify it in the list.",
    "guide.site-basics.td3": "Folder",
    "guide.site-basics.td4":
      "Choose an existing folder containing <code>index.html</code>.",
    "guide.site-basics.td5": "Site port",
    "guide.site-basics.td6":
      "Valid range: 1–65535. Recommended: 1024–65535. Port <code>19800</code> is reserved for file sharing and cannot be used by sites.",
    "guide.site-basics.td7": "LAN access",
    "guide.site-basics.td8":
      "When off, only your Mac can access the site. When on, devices on the same network can access it too.",
    "guide.site-basics.td9": "Custom domain",
    "guide.site-basics.td10":
      "Optional, for example <code>myapp.ls</code>. See the custom domains section.",
    "guide.network.h3": "03 / LAN access",
    "guide.network.p":
      "Want to view a page on your phone or share a preview with a colleague? Enable “LAN access” in the site settings, save and start, then use the LAN address shown on the card.",
    "guide.network.li":
      "Connect your Mac and the visiting device to the same local network.",
    "guide.network.li2":
      "Enable “LAN access” for the site and make sure it is running.",
    "guide.network.li3":
      "Click the LAN address. Scan the QR code with another device, or copy the link and open it in that device’s browser.",
    "guide.network.span": "Mac · LocalServe",
    "guide.network.span2": "Phone / another computer",
    "guide.network.strong": "Same network. Open the address.",
    "guide.network.p2":
      "The IP above is an example. Use the actual LAN address shown in the app.",
    "guide.network.strong2": "Do not use 127.0.0.1 on your phone",
    "guide.network.p3":
      "<code>127.0.0.1</code> always refers to the device making the request. To open a site running on your Mac from a phone, use the Mac’s LAN IP. If it does not open, check for guest network isolation and make sure the macOS firewall allows incoming connections to the app.",
    "guide.domains.h3": "04 / Custom domains",
    "guide.domains.p":
      "Enter a hostname in “Custom domain” under the site’s basic information, for example <code>myapp.ls</code>. The <code>.ls</code> suffix is recommended. Do not include a protocol, port, or path. Each site saves one domain.",
    "guide.domains.h4": "Domain mapping requires administrator approval",
    "guide.domains.p2":
      "When saving, deleting, or importing a configuration changes a domain, macOS requests administrator approval to update hosts. LocalServe’s changes to hosts preserve access to other domains.",
    "guide.domains.h42": "Where does the mapping work?",
    "guide.domains.p3":
      "The hosts mapping applies only to the Mac running LocalServe. Other devices cannot use the custom domain. Use the Mac’s LAN IP address instead, including the site’s port.",
    "guide.domains.h43": "Backup and restore",
    "guide.domains.p4":
      "Under “Settings → Domains and hosts”, you can see how many domains are managed. “Back up now” saves the entire current hosts file. “Restore backup” restores the latest backup after confirmation. Before restoring, check whether you need to keep any other hosts changes made since that backup.",
    "guide.proxy.h3": "05 / Proxy forwarding and path rewriting",
    "guide.proxy.p":
      "Use “Proxy rules” in the site editor to forward a path prefix to another service. Your frontend sends API requests through the same site address, and the proxy forwards them to the backend. This avoids browser cross-origin restrictions and simplifies integration testing. The target backend must run separately.",
    "guide.proxy.h4": "Example: forwarding /api",
    "guide.proxy.th": "Field",
    "guide.proxy.th2": "Example and purpose",
    "guide.proxy.td": "Path prefix",
    "guide.proxy.td2":
      "<code>/api</code> matches the request paths to forward.",
    "guide.proxy.td3": "Target URL",
    "guide.proxy.td4":
      "<code>http://127.0.0.1:3000</code> must be an HTTP or HTTPS URL with a host.",
    "guide.proxy.td5": "Change origin",
    "guide.proxy.td6":
      "Replace the outgoing Host header with the target host. Most backends need this enabled.",
    "guide.proxy.td7": "Rewrite path",
    "guide.proxy.td8":
      "When on, remove the prefix. When off, keep the original path.",
    "guide.proxy.span": "Path rewriting · Enabled",
    "guide.proxy.code":
      "Request  /api/users\n  ↓      Remove the /api prefix\nTarget   http://127.0.0.1:3000/users",
    "guide.proxy.p2":
      "When path rewriting is off, the target receives <code>/api/users</code>. Complete both the prefix and target fields, then save to apply the rule.",
    "guide.advanced.h3": "06 / Advanced options",
    "guide.advanced.p":
      "Requests without a matching file fall back to <code>index.html</code>. Enable this for frontend history routing to avoid 404 errors when refreshing subpages.",
    "guide.advanced.strong": "Add CORS headers",
    "guide.advanced.p2":
      "Add cross-origin response headers to static resources. Off by default. For API requests from the same site, proxy rules are preferred.",
    "guide.advanced.strong2": "Start with the app",
    "guide.advanced.p3":
      "Start this site automatically the next time you open LocalServe. This is separate from the app’s “Launch at login” setting.",
    "guide.site-operations.h3": "07 / Controls, access links, and logs",
    "guide.site-operations.h4": "Start, stop, and restart",
    "guide.site-operations.p":
      "Use the buttons on the right of a site card to start or stop it. The card shows “Stopped”, “Starting”, “Running”, or “Error”, with details when an error occurs. The more menu offers restart, edit, export configuration, show folder in Finder, and delete site actions.",
    "guide.site-operations.h42": "Open a site and view its logs",
    "guide.site-operations.p2":
      "Once a site is running, click an address to see its QR code, copy the link, or open it in a browser. Hold <kbd>Command</kbd> (or <kbd>Ctrl</kbd>) while clicking an address to open it directly in your browser.",
    "guide.site-operations.p3":
      "Open “Details and logs” from the site’s more menu to view its port, domain, proxy count, and access links. Filter logs by All, Access, Proxy, or Error, or search, clear, and export them. Clearing only removes logs recorded by the app.",
    "guide.site-transfer.h3": "08 / Import and export site configurations",
    "guide.site-transfer.p":
      "Expand the site area’s more actions to import a configuration or export all site configurations. Use an individual site’s more menu to export just that site.",
    "guide.site-transfer.p2":
      "A configuration contains site settings, not website files. To use it on another computer, copy the website folder too and check that folder paths, ports, and proxy targets work there. Importing domain changes may still request approval to update hosts.",
    "guide.files.h2": "File sharing",
    "guide.files.p":
      "Share files with devices on the same local network. File sharing works independently of site management; you do not need to create a site first.<br />The sharing service runs on port 19800 and cannot be stopped manually. If that port is occupied when the app starts, file sharing cannot work properly.",
    "guide.file-add.h3": "01 / Add files to share",
    "guide.file-add.p":
      "Click “Add → Add files”, or the add button beside the file area, and select the files you want to share.",
    "guide.file-download.h3": "02 / Scan to download on your network",
    "guide.file-download.li":
      "Click the QR code icon on a file card to open its QR code panel.",
    "guide.file-download.li2":
      "Devices on the same network can scan the code or open the link to download the file.",
    "guide.file-download.span":
      "Download URL format · Use the IP and filename shown in the app",
    "guide.file-download.code": "http://YOUR-LAN-IP:19800/FILENAME",
    "guide.file-manage.h3": "03 / Unavailable files and removing shares",
    "guide.file-manage.p":
      "If the original file is moved or deleted, its card shows “File unavailable”. Remove the entry and add the new file again. Download links are unavailable if no LAN IP is detected.",
    "guide.file-manage.p2":
      "“Remove share” only removes the file from the sharing list; it does not delete the original file on disk. You can also use the card’s actions to show the original file in Finder.",
    "guide.file-manage.strong": "Share only the files you intend to share",
    "guide.file-manage.p3":
      "Devices on the local network that can connect to the service can access files through their download links. When you finish sharing, remove the file from the list to stop serving that link.",
    "guide.settings.h2": "General settings",
    "guide.settings.h3": "Display language",
    "guide.settings.p":
      "Click the language icon to the left of Settings on the app’s home screen and choose Chinese or English. You can also switch under “Settings → Language → Display language”. The choice takes effect immediately and is saved. The app interface, tray menu, and native menus all update together.",
    "guide.settings.h32": "Window and menu bar",
    "guide.settings.p2":
      "Click the gear in the top right of the app to open Settings. With “Minimize to tray on close” enabled, closing the window keeps services running in the background. To quit fully, right-click the menu bar icon and choose “Quit LocalServe”. Left-click the icon to reopen the main window.",
    "guide.settings.th": "Setting",
    "guide.settings.th2": "Purpose",
    "guide.settings.td": "Minimize to tray on close",
    "guide.settings.td2":
      "Keep running in the background after closing the window.",
    "guide.settings.td3": "Launch at login",
    "guide.settings.td4":
      "Open LocalServe automatically when you log in to macOS.",
    "guide.settings.td5": "Restore hosts when quitting",
    "guide.settings.td6":
      "Remove domains managed by LocalServe when quitting. Administrator approval may be required. Turn this off to reduce approval prompts when quitting.",
    "guide.settings.td7": "User guide",
    "guide.settings.td8": "Open the offline guide installed with the app.",
    "guide.faq.summary": "Folder error or index.html not found?",
    "guide.faq.p":
      "Check that the selected path exists, is a folder, and contains <code>index.html</code> at its root. For frontend projects, choose the build output folder, such as <code>dist</code>, rather than a folder containing only source code.",
    "guide.faq.summary2": "Site fails to start because the port is in use?",
    "guide.faq.p2":
      "Choose a port that no other site or program is using, such as 8081. Do not use 19800, which is reserved for file sharing. Open “Details and logs” for the specific error.",
    "guide.faq.summary3": "Works on your Mac but not on your phone?",
    "guide.faq.p3":
      "Make sure “LAN access” is enabled, your phone and Mac are on the same network, and you are using the Mac’s LAN IP — not 127.0.0.1 or a domain mapped only on the Mac. Then check the firewall, guest network isolation, and other network restrictions.",
    "guide.faq.summary4": "Custom domain does not open?",
    "guide.faq.p4":
      "Check that you approved the hosts update, the domain contains no protocol or path, and the browser address includes the correct port. If you canceled approval earlier, save the domain again to request it. Other devices should use the LAN IP instead.",
    "guide.faq.summary5":
      "Why does macOS keep asking for an administrator password?",
    "guide.faq.p5":
      "Domain changes require updating hosts, so macOS requests administrator approval. If you do not need mappings removed when quitting, turn off “Restore hosts when quitting” to reduce those prompts.",
    "guide.faq.summary6":
      "SPA home page works, but refreshing a subpage returns 404?",
    "guide.faq.p6":
      "Enable “SPA history fallback” in the site’s advanced options, then save and start. Routes without a matching file will fall back to index.html.",
    "guide.faq.summary7":
      "Can I use HTTPS or publish directly to the internet?",
    "guide.faq.p7":
      "Sites currently serve content over HTTP only. Proxy targets can use HTTP or HTTPS. LocalServe does not provide public hosting or network tunneling, and a LAN address is not a public address.",
    "guide.faq.summary8":
      "Why does my site keep running after I close the window?",
    "guide.faq.p8":
      "This is expected with “Minimize to tray on close” enabled. Stop the individual site, or choose “Quit LocalServe” from the menu bar icon’s menu to stop the app.",
    "guide.meta.h3": "Ready to open your next idea?",
    "guide.meta.p": "Return to the app and start with a folder.",
    "guide.meta.a3": "Review how to create a site ↑",
    "guide.doc-footer.a": "← Back to home",
    "guide.doc-footer.span": "LocalServe · Run locally. Create freely.",
    "guide.doc-footer.a2": "Back to top ↑",
    "guide.docs-aside.span": "Reading tips",
    "guide.docs-aside.p": "First time here?<br />Start with “Create a site”.",
    "guide.docs-aside.a": "Create your first site ↗",
    "guide.docs-aside.p2": "Find answers quickly",
    "guide.docs-aside.button": "Search docs <kbd>⌘ K</kbd>",
    "guide.docs-aside.a2": "Browse the FAQ ↗",
    "guide.search-dialog.h2": "Search the user guide",
    "guide.search-dialog.label": "Enter keywords",
    "guide.docs-nav.text": "Settings and help",
    "guide.meta.text": "User guide",
    "guide.search-dialog.text": "Tab to select · Enter to open · Esc to close",
    "guide.meta.content":
      "The LocalServe guide: site management and file sharing, including site creation, LAN access, custom domains, proxy rules, and QR code downloads.",
    "common.searchDocs": "Search docs",
    "guide.docs-nav.aria-label": "Guide chapters",
    "guide.overview.keywords": "introduction features HTTP",
    "guide.search-dialog.aria-label": "Close search",
    "guide.search-dialog.placeholder": "Search ports, domains, file sharing…",
  };
  const messages = {
    "search.prompt": [
      "选择章节，或输入关键词搜索",
      "Choose a chapter or search by keyword",
    ],
    "search.results": [
      "找到 {count} 个相关章节",
      "Found {count} matching chapters",
    ],
    "search.result": [
      "找到 {count} 个相关章节",
      "Found {count} matching chapter",
    ],
    "search.empty": [
      "暂时没有找到相关内容。试试「端口」「域名」或「文件」。",
      "No matching content yet. Try “port”, “domain”, or “file”.",
    ],
    "copy.success": ["已复制", "Copied"],
    "copy.failure": [
      "请选中代码手动复制",
      "Select the code and copy it manually",
    ],
  };
  const storageKey = "localserve-help-language";
  const isLanguage = (value) => value === "zh" || value === "en";
  const readSavedLanguage = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };
  const requestedLanguage = new URL(location.href).searchParams.get("lang");
  const savedLanguage = readSavedLanguage();
  let language = isLanguage(requestedLanguage)
    ? requestedLanguage
    : isLanguage(savedLanguage)
      ? savedLanguage
      : "zh";

  // Save complete inline markup once so repeated switches preserve code, icons,
  // keyboard hints, and the original Chinese formatting.
  const content = Array.from(
    document.querySelectorAll("[data-i18n]"),
    (element) => ({
      element,
      key: element.dataset.i18n,
      original: element.innerHTML,
    }),
  );
  const attributes = [];
  for (const [marker, attribute] of [
    ["aria-label", "aria-label"],
    ["title", "title"],
    ["placeholder", "placeholder"],
    ["content", "content"],
    ["keywords", "data-keywords"],
  ]) {
    document.querySelectorAll(`[data-i18n-${marker}]`).forEach((element) => {
      attributes.push({
        element,
        attribute,
        key: element.getAttribute(`data-i18n-${marker}`),
        original: element.getAttribute(attribute),
      });
    });
  }
  const pageLinks = Array.from(document.querySelectorAll("a[href]"))
    .filter((link) =>
      /^(?:index|guide)\.html(?:[?#]|$)/.test(link.getAttribute("href")),
    )
    .map((element) => ({ element, original: element.getAttribute("href") }));

  const t = (key, params = {}) => {
    const message = messages[key]?.[language === "en" ? 1 : 0] ?? key;
    return message.replace(/\{(\w+)\}/g, (match, name) =>
      String(params[name] ?? match),
    );
  };
  const applyLanguage = () => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    content.forEach(({ element, key, original }) => {
      element.innerHTML =
        language === "en" ? (english[key] ?? original) : original;
    });
    attributes.forEach(({ element, attribute, key, original }) => {
      element.setAttribute(
        attribute,
        language === "en" ? (english[key] ?? original) : original,
      );
    });
    document
      .querySelectorAll(".language-menu [data-language]")
      .forEach((option) => {
        const selected = option.dataset.language === language;
        option.setAttribute("aria-checked", String(selected));
        option.tabIndex = selected ? 0 : -1;
      });
    // Carry the choice in relative links too, including when storage is blocked
    // or each file:// page has its own storage area.
    pageLinks.forEach(({ element, original }) => {
      const url = new URL(original, location.href);
      url.searchParams.set("lang", language);
      element.setAttribute(
        "href",
        `${original.split(/[?#]/)[0]}${url.search}${url.hash}`,
      );
    });
  };
  const saveLanguage = () => {
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Switching and page links work even when browser storage is unavailable.
    }
  };
  const updateURL = () => {
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    try {
      history.replaceState(history.state, "", url.href);
    } catch {
      // Some browsers restrict history changes for local files.
    }
  };
  const setLanguage = (next, { persist = true } = {}) => {
    if (!isLanguage(next) || next === language) return;
    language = next;
    applyLanguage();
    if (persist) saveLanguage();
    updateURL();
    document.dispatchEvent(
      new CustomEvent("localserve:languagechange", { detail: { language } }),
    );
  };
  window.LocalServeI18n = Object.freeze({
    get language() {
      return language;
    },
    t,
    setLanguage,
  });

  applyLanguage();
  if (isLanguage(requestedLanguage)) saveLanguage();

  document.querySelectorAll(".language-switcher").forEach((switcher) => {
    const trigger = switcher.querySelector(".language-trigger");
    const menu = switcher.querySelector(".language-menu");
    const options = Array.from(menu.querySelectorAll("[data-language]"));
    const closeMenu = (restoreFocus = false) => {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      if (restoreFocus) trigger.focus();
    };
    const openMenu = () => {
      menu.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      options.find((option) => option.dataset.language === language).focus();
    };
    trigger.addEventListener("click", () => {
      if (menu.hidden) openMenu();
      else closeMenu();
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openMenu();
      }
    });
    menu.addEventListener("keydown", (event) => {
      const index = options.indexOf(document.activeElement);
      let next;
      if (event.key === "ArrowDown") next = (index + 1) % options.length;
      if (event.key === "ArrowUp")
        next = (index - 1 + options.length) % options.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = options.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        options[next].focus();
      }
    });
    switcher.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) {
        event.preventDefault();
        event.stopPropagation();
        closeMenu(true);
      }
    });
    options.forEach((option) =>
      option.addEventListener("click", () => {
        setLanguage(option.dataset.language);
        closeMenu(true);
      }),
    );
    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) closeMenu();
    });
    switcher.addEventListener("focusout", (event) => {
      if (!switcher.contains(event.relatedTarget)) closeMenu();
    });
    switcher.hidden = false;
  });
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey && isLanguage(event.newValue)) {
      setLanguage(event.newValue, { persist: false });
    }
  });
})();
