(() => {
  const { t } = window.LocalServeI18n;
  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const reducedMotion = motionPreference.matches;
  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("will-reveal");
      revealObserver.observe(el);
    });
  }

  const pricingCard = document.querySelector(".pricing-card");
  if (pricingCard) {
    const hoverPreference = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const random = (min, max) => min + Math.random() * (max - min);
    const speed = 32;
    const blurMargin = 24;
    let width = pricingCard.clientWidth;
    let height = pricingCard.clientHeight;
    const origins = [];
    const aspectRatio = height / width;
    const pickOrigin = () => {
      let best;
      let largestGap = -1;
      // Keep distinct patches with empty space, without assigning corners.
      for (let attempt = 0; attempt < 60; attempt++) {
        const point = { x: random(0.16, 0.84), y: random(0.13, 0.87) };
        const gap = Math.min(
          ...origins.map((origin) =>
            Math.hypot(point.x - origin.x, (point.y - origin.y) * aspectRatio),
          ),
        );
        if (gap >= 0.48) return point;
        if (gap > largestGap) {
          best = point;
          largestGap = gap;
        }
      }
      return best;
    };
    const blobs = Array.from(
      pricingCard.querySelectorAll(".pricing-blob"),
      (element) => {
        const origin = pickOrigin();
        origins.push(origin);
        const size = random(0.36, 0.45);
        const direction = random(0, Math.PI * 2);
        element.style.width = `${size * 100}%`;
        return {
          element,
          size,
          x: origin.x * width,
          y: origin.y * height,
          vx: Math.cos(direction) * speed,
          vy: Math.sin(direction) * speed,
        };
      },
    );
    let hovered = pricingCard.matches(":hover");
    let frame = null;
    let previousTime = null;

    const renderBlob = (blob) => {
      blob.element.style.transform = `translate3d(${blob.x}px, ${blob.y}px, 0) translate(-50%, -50%)`;
    };
    const reflectAxis = (position, velocity, elapsed, min, max) => {
      const span = max - min;
      if (span <= 0) return { position: (min + max) / 2, velocity };
      // Fold the travelled distance back into the card, including overshoot.
      const offset = position - min + velocity * elapsed;
      const phase = ((offset % (span * 2)) + span * 2) % (span * 2);
      if (phase === 0) return { position: min, velocity: Math.abs(velocity) };
      if (phase === span) return { position: max, velocity: -Math.abs(velocity) };
      return phase < span
        ? { position: min + phase, velocity }
        : { position: max - (phase - span), velocity: -velocity };
    };
    const drift = (timestamp) => {
      const elapsed = previousTime === null ? 0 : (timestamp - previousTime) / 1000;
      previousTime = timestamp;
      blobs.forEach((blob) => {
        const inset = (blob.size * width) / 2 + blurMargin;
        const x = reflectAxis(blob.x, blob.vx, elapsed, inset, width - inset);
        const y = reflectAxis(blob.y, blob.vy, elapsed, inset, height - inset);
        blob.x = x.position;
        blob.y = y.position;
        blob.vx = x.velocity;
        blob.vy = y.velocity;
        renderBlob(blob);
      });
      frame = requestAnimationFrame(drift);
    };
    const updateAmbient = () => {
      const active = hovered && hoverPreference.matches;
      pricingCard.classList.toggle("is-ambient-active", active);
      if (active && !motionPreference.matches && !document.hidden) {
        if (frame === null) frame = requestAnimationFrame(drift);
      } else {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        previousTime = null;
      }
    };
    const resizeBlobs = () => {
      const nextWidth = pricingCard.clientWidth;
      const nextHeight = pricingCard.clientHeight;
      if (!nextWidth || !nextHeight) return;
      blobs.forEach((blob) => {
        const inset = (blob.size * nextWidth) / 2 + blurMargin;
        const clamp = (value, extent) =>
          Math.max(inset, Math.min(extent - inset, value));
        blob.x = clamp((blob.x / width) * nextWidth, nextWidth);
        blob.y = clamp((blob.y / height) * nextHeight, nextHeight);
        renderBlob(blob);
      });
      width = nextWidth;
      height = nextHeight;
    };

    resizeBlobs();
    new ResizeObserver(resizeBlobs).observe(pricingCard);
    pricingCard.addEventListener("mouseenter", () => {
      hovered = true;
      updateAmbient();
    });
    pricingCard.addEventListener("mouseleave", () => {
      hovered = false;
      updateAmbient();
    });
    hoverPreference.addEventListener("change", updateAmbient);
    motionPreference.addEventListener("change", updateAmbient);
    document.addEventListener("visibilitychange", updateAmbient);
    updateAmbient();
  }

  const sidebar = document.querySelector(".docs-sidebar");
  const menu = document.querySelector(".docs-menu");
  if (menu && sidebar) {
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      sidebar.classList.toggle("is-open", open);
    });
    sidebar.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        sidebar.classList.remove("is-open");
        menu.setAttribute("aria-expanded", "false");
      }),
    );
  }

  const sections = Array.from(document.querySelectorAll(".doc-section"));
  const links = Array.from(
    document.querySelectorAll('.docs-sidebar a[href^="#"]'),
  );
  const progress = document.querySelector(".reading-progress");
  const updateReading = () => {
    let current = sections[0];
    const mobileBar = document.querySelector(".docs-mobile-bar");
    const headerBottom =
      mobileBar && getComputedStyle(mobileBar).display !== "none"
        ? mobileBar.getBoundingClientRect().bottom
        : document.querySelector(".site-header").getBoundingClientRect().bottom;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= headerBottom + 50)
        current = section;
    });
    links.forEach((link) => {
      const active = current && link.hash === "#" + current.id;
      link.classList.toggle("active", Boolean(active));
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    if (progress) {
      const total = document.documentElement.scrollHeight - innerHeight;
      progress.style.width =
        (total > 0 ? Math.min(100, (scrollY / total) * 100) : 100) + "%";
    }
  };
  if (sections.length) {
    let scheduled = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!scheduled)
          requestAnimationFrame(() => {
            updateReading();
            scheduled = false;
          });
        scheduled = true;
      },
      { passive: true },
    );
    updateReading();
    document.addEventListener("localserve:languagechange", updateReading);
  }

  const dialog = document.querySelector("#search-dialog");
  const search = document.querySelector("#doc-search");
  const results = document.querySelector("#search-results");
  const searchStatus = document.querySelector("#search-status");
  if (dialog && search && results) {
    const buildEntries = () =>
      sections.map((section) => ({
        id: section.id,
        title: section.querySelector("h2, h3").textContent,
        text: section.textContent.replace(/\s+/g, " ").trim(),
        keywords: section.dataset.keywords ?? "",
      }));
    let entries = buildEntries();
    const renderResults = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const words = query.split(/\s+/).filter(Boolean);
      const matched = query
        ? entries.filter((entry) =>
            words.every((word) =>
              `${entry.text} ${entry.keywords}`
                .toLocaleLowerCase()
                .includes(word),
            ),
          )
        : entries;
      results.replaceChildren();
      searchStatus.textContent = query
        ? t(matched.length === 1 ? "search.result" : "search.results", {
            count: matched.length,
          })
        : t("search.prompt");
      if (!matched.length) {
        const empty = document.createElement("p");
        empty.className = "search-empty";
        empty.textContent = t("search.empty");
        results.append(empty);
      }
      matched.forEach((entry) => {
        const link = document.createElement("a");
        link.href = "#" + entry.id;
        const title = document.createElement("strong");
        title.textContent = entry.title + " ↗";
        const excerpt = document.createElement("span");
        const index = query
          ? entry.text.toLocaleLowerCase().indexOf(words[0])
          : 0;
        const start = Math.max(0, index - 25);
        excerpt.textContent =
          (start ? "…" : "") + entry.text.slice(start, start + 90) + "…";
        link.append(title, excerpt);
        link.addEventListener("click", () => {
          dialog.close();
          requestAnimationFrame(() =>
            document.getElementById(entry.id).focus({ preventScroll: true }),
          );
        });
        results.append(link);
      });
    };
    const openSearch = () => {
      if (!dialog.open) dialog.showModal();
      renderResults();
      search.focus();
    };
    document
      .querySelectorAll("[data-search]")
      .forEach((button) => button.addEventListener("click", openSearch));
    document
      .querySelector("[data-close-search]")
      .addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        const r = dialog.getBoundingClientRect();
        if (
          event.clientX < r.left ||
          event.clientX > r.right ||
          event.clientY < r.top ||
          event.clientY > r.bottom
        )
          dialog.close();
      }
    });
    search.addEventListener("input", renderResults);
    document.addEventListener("localserve:languagechange", () => {
      entries = buildEntries();
      if (dialog.open) renderResults();
      else {
        results.replaceChildren();
        searchStatus.textContent = "";
      }
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
    });
  }

  const copyStatuses = new Map();
  document.addEventListener("localserve:languagechange", () => {
    copyStatuses.forEach((key, status) => {
      status.textContent = t(key);
    });
  });
  document.querySelectorAll("[data-copy]").forEach((button) =>
    button.addEventListener("click", async () => {
      const text = document.getElementById(button.dataset.copy).textContent;
      const status = button.parentElement.querySelector('[role="status"]');
      try {
        if (navigator.clipboard && window.isSecureContext)
          await navigator.clipboard.writeText(text);
        else {
          const input = document.createElement("textarea");
          input.value = text;
          input.style.cssText = "position:fixed;left:-9999px";
          document.body.append(input);
          input.select();
          const copied = document.execCommand("copy");
          input.remove();
          button.focus();
          if (!copied) throw new Error("copy unavailable");
        }
        copyStatuses.set(status, "copy.success");
      } catch {
        copyStatuses.set(status, "copy.failure");
      }
      status.textContent = t(copyStatuses.get(status));
      setTimeout(() => {
        status.textContent = "";
        copyStatuses.delete(status);
      }, 2500);
    }),
  );
})();
