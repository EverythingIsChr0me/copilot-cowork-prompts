---
layout: default
title: Changelog
---

<h1>Changelog</h1>
<p>All recent updates to prompts in this repository.</p>

<ul id="changelog-list">
  <li>Loading...</li>
</ul>

<script>
  const REPO     = "EverythingIsChr0me/copilot-cowork-prompts";
  const BASE_URL = "https://everythingischr0me.github.io/copilot-cowork-prompts";
  const API = `https://api.github.com/repos/${REPO}/commits?path=prompts&per_page=5`;

  fetch(API, { headers: { Accept: "application/vnd.github+json" } })
    .then(r => r.json())
    .then(commits => Promise.all(
      commits.map(c =>
        fetch(c.url, { headers: { Accept: "application/vnd.github+json" } })
          .then(r => r.json())
          .then(detail => ({ summary: c, detail }))
      )
    ))
    .then(results => {
      const list = document.getElementById("changelog-list");

      list.innerHTML = results.map(({ summary, detail }) => {
        const date    = new Date(summary.commit.author.date).toLocaleString("en-US", {
          year: "numeric", month: "short", day: "numeric",
          hour: "numeric", minute: "2-digit"
        });
        const message = summary.commit.message.split("\n")[0];

        const fileLinks = (detail.files || [])
          .filter(f => f.filename.startsWith("prompts/") && f.filename.endsWith(".md"))
          .map(f => {
            const pagePath = f.filename.replace(/\.md$/, "");
            const label    = f.filename.split("/").pop().replace(/\.md$/, "").replace(/-/g, " ");
            const status   = f.status === "added" ? "🆕" : f.status === "removed" ? "🗑️" : "✏️";
            return `<li>${status} <a href="${BASE_URL}/${pagePath}">${label}</a></li>`;
          });

        const fileSection = fileLinks.length
          ? `<ul style="margin:0.25rem 0 0 1rem; padding:0; list-style:none;">${fileLinks.join("")}</ul>`
          : "<small style='color:#57606a;'>(no prompt files changed)</small>";

        return `<li style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid #e1e4e8;">
          <strong>${date}</strong> — ${message}
          ${fileSection}
        </li>`;
      }).join("");
    })
.catch((err) => {
  document.getElementById("changelog-list").innerHTML = `<li>Error: ${err.message}</li>`;
});
</script>
