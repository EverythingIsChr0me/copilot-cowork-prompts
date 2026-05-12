(function () {
  var root = document.querySelector("[data-featured-hero]");
  var catalogEl = document.getElementById("featured-prompt-catalog");
  var closeButton = root ? root.querySelector("[data-hero-close]") : null;
  var dismissedKey = "coworkToolkit.promptOfWeek.dismissed";

  if (!root || !catalogEl) return;

  function storageGet(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (error) {
      // The close button still hides the card for this page view.
    }
  }

  function hideHero() {
    root.hidden = true;
  }

  if (storageGet(dismissedKey) === "true") {
    hideHero();
    return;
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      storageSet(dismissedKey, "true");
      hideHero();
    });
  }

  function parseCatalog() {
    try {
      return JSON.parse(catalogEl.textContent || "{}");
    } catch (error) {
      return {};
    }
  }

  function decodeHtml(value) {
    var textarea = document.createElement("textarea");
    textarea.innerHTML = value;
    return textarea.value;
  }

  function cleanString(value) {
    return typeof value === "string" ? decodeHtml(value).trim() : "";
  }

  function cleanUrl(value) {
    var raw = cleanString(value);
    if (!raw) return "";

    try {
      var url = new URL(raw, window.location.href);
      if (url.protocol !== "https:" && url.protocol !== "http:") return "";
      return url.href;
    } catch (error) {
      return "";
    }
  }

  function youtubeEmbedUrl(value) {
    var raw = cleanString(value);
    if (!raw) return "";

    try {
      var url = new URL(raw, window.location.href);
      var host = url.hostname.replace(/^www\./, "");
      var videoId = "";

      if (host === "youtu.be") {
        videoId = url.pathname.replace(/^\/+/, "").split("/")[0];
      } else if (host === "youtube.com" || host === "m.youtube.com") {
        if (url.pathname === "/watch") {
          videoId = url.searchParams.get("v") || "";
        } else if (url.pathname.indexOf("/embed/") === 0) {
          videoId = url.pathname.split("/")[2] || "";
        } else if (url.pathname.indexOf("/shorts/") === 0) {
          videoId = url.pathname.split("/")[2] || "";
        }
      }

      return videoId ? "https://www.youtube.com/embed/" + encodeURIComponent(videoId) : cleanUrl(raw);
    } catch (error) {
      return "";
    }
  }

  function titleFromSlug(slug) {
    return slug
      .split("-")
      .filter(Boolean)
      .map(function (part) {
        if (part.toLowerCase() === "hr") return "HR";
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(" ");
  }

  function categoryLabel(value) {
    var raw = cleanString(value).replace(/`/g, "");
    if (!raw) return "";
    if (raw.toLowerCase() === "hr") return "HR";
    return titleFromSlug(raw.replace(/\s+/g, "-"));
  }

  function normalizeApps(value) {
    if (Array.isArray(value)) {
      return value.map(cleanString).filter(Boolean);
    }

    return cleanString(value)
      .split(",")
      .map(cleanString)
      .filter(Boolean);
  }

  function setText(selector, value) {
    var el = root.querySelector(selector);
    if (el) el.textContent = value;
  }

  function renderApps(apps) {
    var list = root.querySelector("[data-hero-apps]");
    if (!list) return;

    list.innerHTML = apps
      .map(function (app) {
        var item = document.createElement("li");
        item.className = "home-hero__app";
        item.textContent = app;
        return item.outerHTML;
      })
      .join("");
  }

  function copyText(text, button) {
    if (!text || !button) return;

    function markCopied() {
      button.classList.add("is-copied");
      button.setAttribute("aria-label", "Prompt copied");
      window.setTimeout(function () {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", "Copy prompt");
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(function () {});
      return;
    }

    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      if (document.execCommand("copy")) markCopied();
    } catch (error) {
      // Fail silently.
    }

    document.body.removeChild(textarea);
  }

  function renderVideo(videoUrl, videoOnly) {
    var panel = root.querySelector("[data-hero-video]");
    var frame = root.querySelector("[data-hero-frame]");
    var caption = root.querySelector("[data-hero-caption]");
    if (!panel || !frame) return;

    var iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    iframe.title = "Cowork demo video";
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    frame.replaceChildren(iframe);
    panel.hidden = false;

    if (caption) {
      caption.textContent = "See Cowork in action";
      caption.hidden = !videoOnly;
    }
  }

  function renderPrompt(prompt) {
    var card = root.querySelector("[data-hero-prompt]");
    var openLink = root.querySelector("[data-hero-open]");
    var copyButton = root.querySelector("[data-hero-copy]");
    var apps = normalizeApps(prompt.apps);

    if (!card) return;

    setText("[data-hero-title]", cleanString(prompt.title) || titleFromSlug(prompt.slug || ""));
    setText("[data-hero-description]", cleanString(prompt.description));
    setText("[data-hero-category]", categoryLabel(prompt.category));
    setText("[data-hero-complexity]", cleanString(prompt.complexity));
    renderApps(apps);

    if (openLink) {
      openLink.href = cleanString(prompt.url) || "#";
    }

    if (copyButton) {
      copyButton.addEventListener("click", function () {
        copyText(cleanString(prompt.prompt_text), copyButton);
      });
    }

    card.hidden = false;
  }

  function applyLayout(hasVideo, hasPrompt) {
    if (hasVideo && hasPrompt) {
      root.classList.add("home-hero--split");
    } else if (hasPrompt) {
      root.classList.add("home-hero--prompt-only");
    } else if (hasVideo) {
      root.classList.add("home-hero--video-only");
    }
  }

  var catalog = parseCatalog();
  var configUrl = cleanString(root.getAttribute("data-featured-config"));

  if (!configUrl) return;

  fetch(configUrl)
    .then(function (response) {
      if (!response.ok) throw new Error("Featured config unavailable");
      return response.json();
    })
    .then(function (config) {
      if (!config || typeof config !== "object") return;

      var videoUrl = youtubeEmbedUrl(config.video_url);
      var promptSlug = cleanString(config.prompt_slug).replace(/^\/+|\/+$/g, "");
      var prompt = promptSlug ? catalog[promptSlug] : null;
      var hasVideo = Boolean(videoUrl);
      var hasPrompt = Boolean(prompt);

      if (!hasVideo && !hasPrompt) return;

      applyLayout(hasVideo, hasPrompt);
      if (hasVideo) renderVideo(videoUrl, !hasPrompt);
      if (hasPrompt) renderPrompt(prompt);
      root.hidden = false;
    })
    .catch(function () {});
})();
