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
  (() => {
    const key    = "changelog";
    const cached = GitHubAPI.cached(key);
    if (cached) { document.getElementById("changelog-list").innerHTML = cached; return; }

    const API = `https://api.github.com/repos/${GitHubAPI.REPO}/commits?path=prompts&per_page=20`;

    GitHubAPI.fetch$("assets/data/changelog.json")
      .then(results => {
        const html = results.map(entry => {
          const date    = new Date(entry.date).toLocaleString("en-US", {
            year: "numeric", month: "short", day: "numeric",
            hour: "numeric", minute: "2-digit"
          });
          const fileLinks = entry.files.map(f => {
            const pagePath = f.filename.replace(/\.md$/, "");
            const label    = f.filename.split("/").pop().replace(/\.md$/, "").replace(/-/g, " ");
            const status   = f.status === "added" ? "🆕" : f.status === "removed" ? "🗑️" : "✏️";
            return `<li>${status} <a href="${GitHubAPI.BASE_URL}/${pagePath}">${label}</a></li>`;
          });
          const fileSection = fileLinks.length
            ? `<ul style="margin:0.25rem 0 0 1rem; padding:0; list-style:none;">${fileLinks.join("")}</ul>`
            : "<small style='color:#57606a;'>(no prompt files changed)</small>";
          return `<li style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid #e1e4e8;">
            <strong>${date}</strong> — ${entry.message}${fileSection}
          </li>`;
        }).join("");

        GitHubAPI.cache("changelog", html);
        document.getElementById("changelog-list").innerHTML = html;
      })
      .catch(err => {
        document.getElementById("changelog-list").innerHTML = `<li>Error: ${err.message}</li>`;
      });
  })();
</script>
