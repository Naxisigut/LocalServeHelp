(() => {
  // Trusted inline translations; Chinese content stays in the HTML as the fallback.
  const english = {
    "home.meta.title": "LocalServe — Your ideas, running locally",
    "home.meta.a": "Skip to main content",
    "common.docs": "Documentation",
    "common.faq": "FAQ",
    "common.pricing": "Pricing",
    "home.site-header.a": "Quick start",
    "home.hero.h1": "Your ideas,<br /><span>running locally</span>",
    "home.hero.p":
      "One folder, one site.<br />Host local web apps and share files with LocalServe.<br />Build your own toolkit of local apps.",
    "home.hero.a": "Get started",
    "home.hero.a2": 'Explore the features <span aria-hidden="true">↓</span>',
    "home.hero.span": "Built for macOS",
    "home.hero.span2": "No command line needed",
    "home.hero.span3": "Runs locally. No data collection.",
    "home.features.h2": "Small tool. Big possibilities.",
    "home.features.h3": "Turn any local folder into a site",
    "home.features.p":
      "Open static pages, project docs, and frontend builds whenever you need them.",
    "home.features.h32": "Scan to open on your network",
    "home.features.p2":
      "Show what you’ve built on any device on your network.",
    "home.features.h33": "Connect frontend and backend",
    "home.features.p3":
      "Forward requests and rewrite paths.<br />Keep API calls on the same origin for easier development.",
    "home.features.span": "Site",
    "home.features.span2": "Proxy",
    "home.features.span3": "Backend",
    "home.features.h34": "Give your site a memorable address",
    "home.features.p4":
      "Open local sites with custom domains.<br />Give every project a familiar address.",
    "home.features.h35": "File sharing made simple",
    "home.features.p5":
      "Scan to download on the same network.<br />No setup required.",
    "home.features.span4": "Scan QR code",
    "home.features.span5": "Download file",
    "home.everyday-apps.h2": "A home for your vibe-coded projects",
    "home.everyday-apps.p":
      "Web projects are easy to build, have a huge ecosystem, and open in any browser — a natural fit for vibe coding with AI.",
    "home.everyday-apps.p2":
      "LocalServe puts them on your local network.",
    "home.everyday-apps.h3": "Made for everyday work",
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
    "home.pricing.plan": "LocalServe",
    "home.pricing.license": "Lifetime license",
    "home.pricing.onetime": "One-time purchase",
    "home.pricing.devices": "Up to 3 devices",
    "home.pricing.feature1": "Local sites and custom domains",
    "home.pricing.feature2": "Reverse proxy and path rewriting",
    "home.pricing.feature3": "LAN access and QR code sharing",
    "home.pricing.feature4": "Menu bar controls and launch at login",
    "home.pricing.download": "Free download",
    "home.pricing.note": "For macOS",
    "home.site-footer.span": "Run locally. Create freely.",
    "home.meta.content":
      "The LocalServe guide: turn local folders into websites without a command line. Preview, debug, and share on your local network.",
    "common.homeLabel": "LocalServe home",
    "common.mainNav": "Main navigation",
    "common.selectLanguage": "Select language",
    "guide.meta.title": "Documentation — LocalServe",
    "guide.meta.a": "Skip to the user guide",
    "guide.site-header.button": "<span>⌕</span> Search docs <kbd>⌘ K</kbd>",
    "guide.meta.button": "☰ &nbsp; Contents",
    "guide.meta.button2": "⌕ Search",
    "guide.docs-nav.a": "Meet LocalServe",
    "guide.docs-nav.happyPath": "<span>01</span>Quick start",
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
      "LocalServe turns a folder on your Mac into a website you can open in a browser, and shares files with devices on your network — no command line required.",
    "guide.overview.strong": "Site management ↗",
    "guide.overview.small":
      "Create sites, configure access, and add proxy rules.",
    "guide.overview.strong2": "File sharing ↗",
    "guide.overview.small2":
      "Add files for devices on your network to scan and download.",
    "guide.overview.strong3": "Start locally",
    "guide.overview.p2":
      "Sites serve content over HTTP. LAN access requires devices to be on the same network. LocalServe does not provide public hosting or network tunneling.",
    "guide.happyPath.h3": "01 / Quick start",
    "guide.happyPath.intro": "Your first site starts here.",
    "guide.happyPath.folderTitle": "Choose a folder",
    "guide.happyPath.folderDescription":
      "Click “Add site”.<br />Choose a folder containing <code>index.html</code>.",
    "guide.happyPath.startTitle": "Configure, save, and start",
    "guide.happyPath.startDescription":
      "Give it a name and an available port.<br />Enable other options as needed.",
    "guide.happyPath.browseTitle": "Open it in your browser",
    "guide.happyPath.browseDescription":
      "Click the site card’s browser icon.<br />Enable LAN access to share through its QR code icon.",
    "guide.happyPath.guideLink": "Read the full guide <span>↗</span>",
    "guide.happyPath.keywords": "first use quick start getting started three steps",
    "guide.sites.h2": "Site management",
    "guide.sites.p":
      "Deploy a local folder as a site. Create the site first, then configure LAN access, custom domains, proxy rules, and automatic startup as needed.",
    "guide.sites.p2":
      "Each site has its own folder, port, and status. Several sites can use the same port number, because a stopped site doesn’t hold its port — but only one of them can run at a time, even if their “LAN access” settings differ.",
    "guide.quick-start.h3": "01 / Create a site",
    "guide.quick-start.p":
      "Prepare a folder containing <code>index.html</code>. For React, Vue, or similar projects, build the project first and choose the output folder, such as <code>dist</code>.",
    "guide.quick-start.h4": "Add a site and choose its folder",
    "guide.quick-start.p2":
      "Open LocalServe and click “Add” → “Add site” in the top right, or the plus icon beside the Sites heading. Enter a name and choose a folder. The folder must contain <code>index.html</code>.",
    "guide.quick-start.h42": "Choose an available port",
    "guide.quick-start.p3":
      "New sites have no port set, so enter one yourself (1024–65535 recommended). When you save, LocalServe checks that the port isn’t already used by a running site or another app.<br />Ports <code>80</code>, <code>10015</code>, and <code>19800</code> are reserved for custom domains, the user guide, and file sharing, so sites can’t use them.",
    "guide.quick-start.h43": "Save, start, and open your site",
    "guide.quick-start.p4":
      "Click “Save and start”, wait for the status to show “Running”, then click the “Open in browser” icon on the site card.",
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
      "Any number from 1 to 65535; 1024–65535 is recommended. Stopped sites can share a port number. Ports <code>80</code>, <code>10015</code>, and <code>19800</code> are reserved by LocalServe.",
    "guide.site-basics.portChecks":
      "When you create or edit a site, LocalServe checks that its address and port are free. To edit a running site, keep its port and “LAN access” setting unchanged. A stopped site doesn’t reserve its port, so starting it fails if another site or app has taken the port in the meantime.",
    "guide.site-basics.sharedPortExample":
      "For example, “Project preview” and “Inspiration space” can both save port <code>3000</code> while stopped. After starting one, stop it before starting the other.",
    "guide.site-basics.td7": "LAN access",
    "guide.site-basics.td8":
      "When off, only your Mac can access the site. When on, devices on the same network can access it too.",
    "guide.site-basics.td9": "Custom domain",
    "guide.site-basics.td10":
      "Optional, for example <code>myapp.ls</code>. See “Custom domains” below.",
    "guide.network.h3": "03 / LAN access",
    "guide.network.p":
      "Want to view a page on your phone or share a preview with a colleague? Turn on “Enable LAN access” in the site settings, save and start, then click the “Scan to open” icon on the site card.",
    "guide.network.li":
      "Connect your Mac and the visiting device to the same local network.",
    "guide.network.li2":
      "Enable “LAN access” for the site and make sure it is running.",
    "guide.network.li3":
      "Click the QR code icon on the right of the card. Scan the code in the “LAN access” panel, or copy the address and open it in another device’s browser.",
    "guide.network.span": "Mac · LocalServe",
    "guide.network.span2": "Phone / another computer",
    "guide.network.strong": "Same network. Open the address.",
    "guide.network.p2":
      "The IP above is an example. Use the actual LAN address shown in the app.",
    "guide.network.strong2": "Do not use 127.0.0.1 on your phone",
    "guide.network.p3":
      "<code>127.0.0.1</code> always refers to the device making the request. To open a site running on your Mac from a phone, use the Mac’s LAN IP. If it doesn’t open, make sure you’re not on a guest network that isolates devices, and that the macOS firewall allows incoming connections for LocalServe.",
    "guide.domains.h3": "04 / Custom domains",
    "guide.domains.p":
      "In the site’s Basics section, turn on “Enable custom domain” and enter a hostname, for example <code>myapp.ls</code>. We recommend the <code>.ls</code> suffix. Don’t include a protocol, port, or path. Each site can have one domain.",
    "guide.domains.h4": "Domains require administrator approval",
    "guide.domains.p2":
      "Whenever saving, deleting, or importing a site changes a domain, macOS asks for administrator approval to update the hosts file. LocalServe only edits its own entries and leaves the rest of the file untouched.",
    "guide.domains.h42": "Where do custom domains work?",
    "guide.domains.p3":
      "Custom domains use the shared HTTP port <code>80</code>, so you open <code>http://myapp.ls</code> without a port number. Multiple sites share this listener, each with a different domain. Custom domains only work on the Mac running LocalServe; other devices should use the LAN IP with the site’s port.",
    "guide.domains.h43": "View managed domains",
    "guide.domains.p4":
      "Go to “Settings → Domains and hosts” and expand “Managed domains” to see every domain LocalServe has added to hosts.",
    "guide.proxy.h3": "05 / Proxy forwarding and path rewriting",
    "guide.proxy.p":
      "Use “Proxy rules” in the site editor to forward requests under a path prefix to another service. Your frontend calls APIs through the site’s own address, and LocalServe forwards them to your backend — no cross-origin (CORS) errors. The backend must be running separately.",
    "guide.proxy.h4": "Example: forwarding /api",
    "guide.proxy.th": "Column",
    "guide.proxy.th2": "Example and purpose",
    "guide.proxy.td": "Prefix",
    "guide.proxy.td2":
      "<code>/api</code> — requests whose path starts with this are forwarded.",
    "guide.proxy.td3": "Target",
    "guide.proxy.td4":
      "<code>http://127.0.0.1:3000</code> — your backend’s HTTP or HTTPS address.",
    "guide.proxy.td5": "Origin",
    "guide.proxy.td6":
      "Sets the Host header to the target’s host (changeOrigin). Leave it on for most backends.",
    "guide.proxy.td7": "Rewrite",
    "guide.proxy.td8":
      "On: removes the prefix before forwarding. Off: forwards the original path.",
    "guide.proxy.span": "Rewrite · On",
    "guide.proxy.code":
      "Request  /api/users\n  ↓      Remove the /api prefix\nTarget   http://127.0.0.1:3000/users",
    "guide.proxy.p2":
      "With Rewrite off, the target receives <code>/api/users</code>. Fill in both Prefix and Target, then save to apply the rule.",
    "guide.advanced.h3": "06 / Advanced options",
    "guide.advanced.p":
      "Serves <code>index.html</code> when no file matches the request. Turn it on for single-page apps that use history routing, so refreshing a subpage doesn’t return 404.",
    "guide.advanced.strong": "Add CORS headers",
    "guide.advanced.p2":
      "Adds cross-origin (CORS) headers to static files. Off by default. For API calls, proxy rules are usually the better option.",
    "guide.advanced.strong2": "Start with the app",
    "guide.advanced.p3":
      "Starts this site automatically whenever LocalServe opens. This is separate from “Launch at login”. Sites start in list order; if two share a port, the first one to start gets it.",
    "guide.site-operations.h3": "07 / Controls, access links, and logs",
    "guide.site-operations.h4": "Start, stop, and restart",
    "guide.site-operations.p":
      "Use the play or stop button at the far right of a site card to control the service. The card shows “Stopped”, “Starting”, “Running”, or “Error”. The toolbar shows the port while running, and errors include their cause. The card’s “More actions” menu offers “Details and logs”, “Edit configuration”, “Export configuration”, “Show in Finder”, and “Delete site”. “Restart site” appears only while running.",
    "guide.site-operations.h42": "Open a site and view its logs",
    "guide.site-operations.p2":
      "Once a site is running, click its “Open in browser” icon to open it. If the site has a custom domain, that address is used; otherwise, the local address is. The “Scan to open” icon next to it shows a LAN QR code for other devices. Both buttons are disabled while the site is stopped.",
    "guide.site-operations.p3":
      "Choose “Details and logs” from the site’s “More actions” menu to see its port, domain, and proxy count. Expand “Access links” to copy or open the local, LAN, and custom-domain addresses (LAN links need LAN access and a detected IP). For logs, choose “Site logs” or “Shared port 80 logs”, filter by All, Access, Proxy, or Error, and search, clear, or export them. Clearing only removes logs inside the app.",
    "guide.site-transfer.h3": "08 / Import and export site configurations",
    "guide.site-transfer.p":
      "Open “More actions” next to the Sites heading to import a configuration or export all configurations. To export a single site, use that site’s “More actions” menu.",
    "guide.site-transfer.p2":
      "A configuration holds site settings, not website files. To use it on another computer, copy the website folders too, and check that folder paths, ports, and proxy targets still work there. Importing domain changes may ask for approval to update hosts. An import can include several sites with the same port; only one of them can run at a time.",
    "guide.files.h2": "File sharing",
    "guide.files.p":
      "Share files with devices on your local network. File sharing works on its own — you don’t need to create a site first.<br />The sharing service always runs on port 19800. If another app is using that port when LocalServe starts, file sharing won’t work.",
    "guide.file-add.h3": "01 / Add files to share",
    "guide.file-add.p":
      "Click “Add → Add files”, or the add button beside the file area, and select the files you want to share.",
    "guide.file-download.h3": "02 / Scan to download on your network",
    "guide.file-download.li":
      "Hover over a file card and click the QR code icon that appears to open the “LAN access” panel.",
    "guide.file-download.li2":
      "Devices on the same network can scan the code or open the link to download the file.",
    "guide.file-download.span":
      "Download URL format · Use the IP and filename shown in the app",
    "guide.file-download.code": "http://YOUR-LAN-IP:19800/FILENAME",
    "guide.file-manage.h3": "03 / Unavailable files and removing shares",
    "guide.file-manage.p":
      "If the original file is moved or deleted, its card fades and shows a warning icon. Hovering displays “File was moved or deleted”. Remove the unavailable share and add an existing file again. The QR code entry is unavailable if the file is missing, the sharing service is not running, or no LAN IP is detected.",
    "guide.file-manage.p2":
      "Hover over a file card, click “Remove share”, and confirm. This only removes the file from the sharing list; it does not delete the original file on disk. Available files also offer “Show in Finder” to locate the original.",
    "guide.file-manage.strong": "Share only the files you intend to share",
    "guide.file-manage.p3":
      "Anyone on your network with the link can download the file. When you’re done, remove it from the list to disable the link.",
    "guide.settings.h2": "General settings",
    "guide.settings.h3": "Display language",
    "guide.settings.p":
      "Click the language icon to the left of Settings in the main window and choose Chinese or English. You can also switch under “Settings → Language → Display language”. The choice takes effect immediately and is saved. The app interface, tray menu, and native menus all update together.",
    "guide.settings.h32": "Window and menu bar",
    "guide.settings.p2":
      "Click the gear in the top right of the app, or use the macOS menu “LocalServe → Settings…”. With “Minimize to tray on close” enabled, closing the window keeps services running in the background. Left-click the menu bar icon to reopen the main window. Its right-click menu can start, stop, and open sites, or start and stop all sites. To quit fully, choose “Quit” in that menu, or “Quit LocalServe” in the macOS app menu.",
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
    "guide.faq.summary2": "Port in use when saving or starting a site?",
    "guide.faq.p2":
      "Stop the site or app using the port, or pick a free one such as <code>8081</code>. Stopped sites can share a port number, but only one can run on it at a time. Auto-start and “Start all” go in list order: the first site to start gets the port, and a running site keeps it. Avoid the reserved ports <code>80</code>, <code>10015</code>, and <code>19800</code>. If the site has a custom domain, port <code>80</code> must also be free. See “Details and logs” for the exact error.",
    "guide.faq.summary3": "Works on your Mac but not on your phone?",
    "guide.faq.p3":
      "Make sure “LAN access” is enabled, your phone and Mac are on the same network, and you are using the Mac’s LAN IP — not 127.0.0.1 or a domain mapped only on the Mac. Then check the firewall, guest network isolation, and other network restrictions.",
    "guide.faq.summary4": "Custom domain does not open?",
    "guide.faq.p4":
      "Check that you approved the hosts update, the site is running, and the domain contains no protocol, port, or path. On your Mac, use <code>http://YOUR-DOMAIN</code> without the site’s individual port. Check “Shared port 80 logs” if the shared listener fails. If you canceled approval earlier, save the domain again to request it. Other devices should use the LAN IP with the site’s port.",
    "guide.faq.domainPort.title":
      "How do custom domains relate to port 80 conflicts?",
    "guide.faq.domainPort.listener":
      "When a site with a custom domain starts, LocalServe listens on port <code>80</code> so you can open <code>http://YOUR-DOMAIN</code> without a port number. This shared listener is separate from each site’s own port, and multiple sites can share it with different domains. Saving a site, starting a site without a custom domain, or sharing files doesn’t use port <code>80</code>. (File sharing uses port <code>19800</code>.)",
    "guide.faq.domainPort.conflict":
      "If another app is using port <code>80</code>, the shared listener can’t start, so the site shows “Error” with the message “Port 80 is in use. Free it up or turn off this site’s custom domain, then try again.” This happens even if the site’s own port is free, so changing only that port won’t help.",
    "guide.faq.domainPort.solution":
      "Stop whatever is using port <code>80</code> in the other app, then start your site again. Or edit the site, turn off “Enable custom domain”, save, and restart it — then open it via the local address or LAN IP with the site’s port.",
    "guide.faq.domainPort.release":
      "While LocalServe’s custom-domain listener is running, other apps usually can’t listen on port <code>80</code>. To free it, stop all sites with custom domains or quit LocalServe. This doesn’t affect other apps visiting websites on port <code>80</code>.",
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
      "This is expected with “Minimize to tray on close” enabled. Stop the individual site, or choose “Quit” from the menu bar icon’s right-click menu to stop the app.",
    "guide.meta.h3": "Ready to open your next idea?",
    "guide.meta.p": "Return to the app and start with a folder.",
    "guide.meta.a3": "Back to “Create a site” ↑",
    "guide.doc-footer.a": "← Back to home",
    "guide.doc-footer.span": "LocalServe · Run locally. Create freely.",
    "guide.doc-footer.a2": "Back to top ↑",
    "guide.docs-aside.span": "Reading tips",
    "guide.docs-aside.p": "First time here?<br />Start with “Quick start”.",
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
    "home.hero.previewLabel":
      "Illustrative LocalServe interface: 3 files, 2 sites, and 1 running site. File names, site names, and paths are sample data.",
    "home.hero.previewAdd": "Add",
    "home.hero.previewFiles": "Files <small>3</small>",
    "home.hero.previewImageFile": "Sketch.png",
    "home.hero.previewArchiveFile": "Creative<br />assets.zip",
    "home.hero.previewAudioFile": "Idea notes<br />Episode 1.m4a",
    "home.hero.previewSites": "Sites <small>2</small>",
    "home.hero.previewStoppedSite": "Project preview",
    "home.hero.previewStopped": "<i></i>Stopped",
    "home.hero.previewRunningSite": "Inspiration space",
    "home.hero.previewRunning": "<i></i>Running",
    "home.hero.previewPort": "Port",
    "home.hero.previewSummary": "Files: 3 · Sites: 2 · Running: 1",
    "guide.network.qrActions":
      "Click the QR code to copy it. Click the address or the “Copy URL” icon to copy the full link, even if the address shown is shortened. The “Open in browser” icon opens the LAN link on this Mac.",
    "guide.network.qrDisabled":
      "The QR code button only works when the site is running, LAN access is on, and a LAN IP is detected. If it’s disabled, hover over it to see which one is missing.",
    "guide.domains.sharedPort":
      "Port <code>80</code> must be available when starting a site with a custom domain. If the listener cannot start, open “Details and logs” and select “Shared port 80 logs” to check the cause.",
    "guide.site-operations.listToolbarTitle":
      "List filters and bulk actions",
    "guide.site-operations.listToolbar":
      "Click “More actions” next to the Sites heading to show the list toolbar. Filter by status, or search by name, folder, port, or domain. The toolbar also has “Start all”, “Stop all”, import, and export. Start all and Stop all affect every site, even when the list is filtered.",
    "guide.site-operations.startOrder":
      "“Start all” starts sites one at a time in list order. If a site’s port is already taken, it shows “Error” with the reason, and the rest keep starting. A running site keeps its port, even if an earlier site in the list uses the same one. To switch between sites on the same port, stop the current one, then start the other.",
    "guide.file-add.listToolbar":
      "Scroll the list sideways when there are many files. Click “More actions” next to the Files heading to search by file name or path.",
    "guide.file-download.qrActions":
      "Click the QR code to copy it. Click the address or the “Copy URL” icon to copy the full download link. Click “Open in browser” to download it on this Mac.",
    "guide.settings.guideSite":
      "On first launch, LocalServe adds a “User Guide” site that serves this documentation on port <code>10015</code> (this Mac only, by default) and starts it. “Settings → About → User guide → Open” starts and opens it. If you’ve deleted the site, the offline guide opens directly instead. This site isn’t added when upgrading from an older version.",
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
      "No results. Try “port”, “domain”, or “file”.",
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
  const detectDefaultLanguage = () => {
    // Language and time zone are hints for a default, not geolocation.
    try {
      const preferred = navigator.language || navigator.languages?.[0] || "";
      if (/^zh(?:-|$)/i.test(preferred)) return "zh";
    } catch {
      // Still try the time zone if browser language is unavailable.
    }
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Include legacy IANA aliases returned by older browser runtimes.
      if (
        [
          "Asia/Shanghai",
          "Asia/Urumqi",
          "Asia/Chongqing",
          "Asia/Chungking",
          "Asia/Harbin",
          "Asia/Kashgar",
          "PRC",
        ].includes(timeZone)
      )
        return "zh";
    } catch {
      // Missing or restricted Intl support falls back to English.
    }
    return "en";
  };
  const requestedLanguage = new URL(location.href).searchParams.get("lang");
  const savedLanguage = readSavedLanguage();
  let language = isLanguage(requestedLanguage)
    ? requestedLanguage
    : isLanguage(savedLanguage)
      ? savedLanguage
      : detectDefaultLanguage();

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
    ["alt", "alt"],
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
    if (!isLanguage(next)) return;
    if (next === language) {
      // Explicitly selecting the detected default must save a preference too.
      if (persist) saveLanguage();
      updateURL();
      return;
    }
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
