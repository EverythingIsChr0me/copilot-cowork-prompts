---
layout: default
title: Updates
description: "Recent prompt, skill, and custom instruction updates in the Cowork Toolkit."
permalink: /changelog/
---

<section class="updates-page" aria-labelledby="updates-title">
  <header class="updates-hero">
    <h1 id="updates-title">Latest updates</h1>
    <p>Recent prompt, skill, and custom instruction changes in this toolkit.</p>
  </header>

  <div id="changelog-list" class="updates-list">
    <p class="toolkit-update--loading">Loading updates...</p>
  </div>
</section>

<script>
  (() => {
    const list = document.getElementById("changelog-list");
    const cacheKey = "changelog-v2";
    const baseUrl = "{{ '/' | relative_url }}".replace(/\/$/, "");
    const cached = GitHubAPI.cached(cacheKey);

    if (cached) {
      list.innerHTML = cached;
      return;
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char]);
    }

    function titleFromFilename(filename) {
      return filename.split("/").pop().replace(/\.md$/, "").replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
    }

    function isIndexFile(filename) {
      return /\/index\.md$/.test(filename);
    }

    function changeLabel(status) {
      if (status === "added") return "New";
      if (status === "removed") return "Removed";
      return "Updated";
    }

    function contentType(filename) {
      if (/\/experimental\/(add-skill-to-cowork|generate-cowork-skill|list-skills)\.md$/.test(filename)) {
        return "Skill";
      }
      if (/\/experimental\/cowork-capability-reference\.md$/.test(filename) || filename === "TEMPLATE.md") {
        return "Custom instruction";
      }
      if (isIndexFile(filename)) return "Section";
      return "Prompt";
    }

    function hrefForFile(filename, status) {
      if (status === "removed") return "";
      return `${baseUrl}/${filename.replace(/\.md$/, "")}`;
    }

    function renderFile(file) {
      const filename = file.filename.replace(/\\/g, "/");
      const href = hrefForFile(filename, file.status);
      const title = titleFromFilename(filename);
      const type = contentType(filename);
      const label = changeLabel(file.status);
      const titleHtml = href
        ? `<a href="${escapeHtml(href)}">${escapeHtml(title)}</a>`
        : `<span>${escapeHtml(title)}</span>`;

      return `
        <li class="toolkit-update">
          <span class="toolkit-update__meta">
            <span class="toolkit-update__badge toolkit-update__badge--${escapeHtml(file.status)}">${escapeHtml(label)}</span>
            <span>${escapeHtml(type)}</span>
            <span>${escapeHtml(filename)}</span>
          </span>
          ${titleHtml}
        </li>
      `;
    }

    function renderEntry(entry) {
      const date = new Date(entry.date).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
      });
      const files = (entry.files || []).filter((file) => file.filename && file.filename.endsWith(".md"));
      const visibleFiles = files.filter((file) => !isIndexFile(file.filename.replace(/\\/g, "/")));

      if (!visibleFiles.length) return "";

      return `
        <article class="updates-entry">
          <header class="updates-entry__header">
            <span class="updates-entry__date">${escapeHtml(date)}</span>
            <span class="updates-entry__message">${escapeHtml(entry.message || "Repository update")}</span>
          </header>
          <ul class="updates-entry__files">
            ${visibleFiles.map(renderFile).join("")}
          </ul>
        </article>
      `;
    }

    fetch("{{ '/assets/data/changelog.json' | relative_url }}")
      .then((response) => {
        if (!response.ok) throw new Error("Update data unavailable");
        return response.json();
      })
      .then((entries) => {
        if (!Array.isArray(entries) || !entries.length) {
          throw new Error("No update data found");
        }

        const html = entries.map(renderEntry).filter(Boolean).join("");
        if (!html) throw new Error("No content updates found");

        GitHubAPI.cache(cacheKey, html);
        list.innerHTML = html;
      })
      .catch((err) => {
        list.innerHTML = `<p class="toolkit-update--loading">Unable to load updates: ${escapeHtml(err.message)}</p>`;
      });
  })();
</script>
