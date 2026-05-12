---
layout: default
title: "Copilot Cowork Toolkit"
description: "Community-built Cowork prompts and tools for Microsoft 365 Copilot Cowork, organized by industry, role and job function"
---

<section class="toolkit-home" aria-label="Cowork Toolkit library">
  <div class="toolkit-tabs" role="tablist" aria-label="Toolkit sections">
    <button class="toolkit-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="panel-prompts" data-tab="prompts">
      Prompts <span class="toolkit-tab__count" data-count-for="prompts">0</span>
    </button>
    <button class="toolkit-tab" type="button" role="tab" aria-selected="false" aria-controls="panel-skills" data-tab="skills">
      Skills <span class="toolkit-tab__count" data-count-for="skills">0</span>
    </button>
    <button class="toolkit-tab" type="button" role="tab" aria-selected="false" aria-controls="panel-custom" data-tab="custom">
      Custom instructions <span class="toolkit-tab__count" data-count-for="custom">0</span>
    </button>
  </div>

  <div class="toolkit-filters" aria-label="Filter by category">
    <button class="toolkit-filter is-active" type="button" data-filter="All">All</button>
    <button class="toolkit-filter" type="button" data-filter="Personal productivity">Personal productivity</button>
    <button class="toolkit-filter" type="button" data-filter="Sales">Sales</button>
    <button class="toolkit-filter" type="button" data-filter="Legal">Legal</button>
    <button class="toolkit-filter" type="button" data-filter="HR">HR</button>
    <button class="toolkit-filter" type="button" data-filter="Healthcare">Healthcare</button>
    <button class="toolkit-filter" type="button" data-filter="Nonprofit">Nonprofit</button>
  </div>

  <div class="toolkit-activity" aria-label="Repository activity">
    <a class="toolkit-activity__left toolkit-activity__link" href="{{ '/changelog/' | relative_url }}">
      <span class="toolkit-activity__dot" aria-hidden="true"></span>
      <span id="toolkit-last-updated">Last updated Apr 21, 2026</span>
      <span aria-hidden="true">·</span>
      <span id="toolkit-new-count">0 new this week</span>
    </a>
    <span id="toolkit-contributors" class="toolkit-activity__contributors" data-count="{{ site.github.contributors.size | default: 1 }}">1 contributor</span>
  </div>

  {% include hero.html %}

  <section id="panel-prompts" class="toolkit-panel is-active" role="tabpanel" aria-label="Prompts" data-panel="prompts">
    <div class="toolkit-grid" data-grid="prompts"></div>
    <p class="toolkit-empty" data-empty="prompts" hidden>No matching cards.</p>
  </section>

  <section id="panel-skills" class="toolkit-panel" role="tabpanel" aria-label="Skills" data-panel="skills" hidden>
    <div class="toolkit-grid" data-grid="skills"></div>
    <p class="toolkit-empty" data-empty="skills" hidden>No matching cards.</p>
  </section>

  <section id="panel-custom" class="toolkit-panel" role="tabpanel" aria-label="Custom instructions" data-panel="custom" hidden>
    <div class="toolkit-grid" data-grid="custom"></div>
    <p class="toolkit-empty" data-empty="custom" hidden>No matching cards.</p>
  </section>
</section>

<script>
  (() => {
    const baseUrl = "{{ '/' | relative_url }}".replace(/\/$/, "");
    const cards = [
      {
        tab: "prompts",
        status: "Trending",
        complexity: "Advanced",
        apps: "Outlook, Teams, Loop, SharePoint, OneDrive",
        title: "Growth Opportunities Audit",
        description: "Mines recent communications and work artifacts for feedback, missed follow-ups, stalled work, and patterns worth correcting.",
        category: "Personal productivity",
        url: "/prompts/personal-productivity/growth-opportunities-audit"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Advanced",
        apps: "Outlook, Teams, SharePoint",
        title: "Kudos & Wins Miner",
        description: "Finds positive mentions, kudos, and concrete examples of strong performance for reviews and performance conversations.",
        category: "Personal productivity",
        url: "/prompts/personal-productivity/kudos-wins-miner"
      },
      {
        tab: "prompts",
        complexity: "Advanced",
        apps: "Outlook, Teams",
        title: "Weekly Manager Kickoff Email",
        description: "Researches leadership directives and team signals, then drafts a Monday kickoff email in the manager's voice.",
        category: "Personal productivity",
        url: "/prompts/personal-productivity/manager-team-kickoff"
      },
      {
        tab: "prompts",
        complexity: "Advanced",
        apps: "Outlook, SharePoint, PowerPoint, Word, Teams",
        title: "New Customer Onboarding",
        description: "Automates intake, account research, SharePoint setup, team notification, and a customer welcome draft.",
        category: "Personal productivity",
        url: "/prompts/personal-productivity/customer-onboarding"
      },
      {
        tab: "prompts",
        complexity: "Advanced",
        apps: "OneDrive, Word",
        title: "OneDrive File Intelligence & Cleanup",
        description: "Audits OneDrive, builds an executive dashboard, and prepares a human-approved cleanup plan.",
        category: "Personal productivity",
        url: "/prompts/personal-productivity/onedrive-file-intelligence"
      },
      {
        tab: "prompts",
        complexity: "Advanced",
        apps: "Outlook, Teams, Word, OneDrive",
        title: "Weekly Status Report Generator",
        description: "Aggregates the week across email, Teams, channels, and meetings into a polished one-page status report.",
        category: "Personal productivity",
        url: "/prompts/personal-productivity/weekly-status-report"
      },
      {
        tab: "prompts",
        complexity: "Advanced",
        apps: "Outlook, Teams, Calendar",
        title: "Workload Dashboard",
        description: "Creates an interactive workload dashboard with filters, priority tasks, and a time-allocation chart.",
        category: "Personal productivity",
        url: "/prompts/personal-productivity/workload-dashboard"
      },
      {
        tab: "prompts",
        status: "Trending",
        complexity: "Advanced",
        apps: "Outlook, Teams, SharePoint, OneDrive, Word",
        title: "Account Research Brief",
        description: "Pulls M365 relationship signals into a single pre-meeting brief for a target account.",
        category: "Sales",
        url: "/prompts/sales/account-research-brief"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Advanced",
        apps: "Excel, Outlook, Teams, PowerPoint",
        title: "Pipeline Review Prep",
        description: "Compares pipeline exports with real engagement signals and builds review slides for manager conversations.",
        category: "Sales",
        url: "/prompts/sales/pipeline-review-prep"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Advanced",
        apps: "Teams, Outlook, Excel, Word, CRM",
        title: "Q4 Opportunity Risk Assessment",
        description: "Ranks Q4 opportunities by dollar value, compares CRM data with Teams and email signals, and anonymizes account and product names.",
        category: "Sales",
        url: "/prompts/sales/q4-opportunity-risk-assessment"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Advanced",
        apps: "Outlook, Teams, Excel, Word",
        title: "Renewal Risk Signal Scan",
        description: "Scans customer communications for budget, reorg, competitor, escalation, and champion risk signals.",
        category: "Sales",
        url: "/prompts/sales/renewal-risk-scan"
      },
      {
        tab: "prompts",
        complexity: "Moderate",
        apps: "Outlook, Teams, SharePoint",
        title: "Warm Intro Finder",
        description: "Finds the shortest warm path into a target account through existing M365 relationships.",
        category: "Sales",
        url: "/prompts/sales/warm-intro-finder"
      },
      {
        tab: "prompts",
        complexity: "Moderate",
        apps: "Word, Outlook",
        title: "Contract Review Summary",
        description: "Extracts key terms and risk flags from a contract draft, then sends a structured reviewer summary.",
        category: "Legal",
        url: "/prompts/legal/contract-review-summary"
      },
      {
        tab: "prompts",
        complexity: "Simple",
        apps: "Word, PowerPoint",
        title: "Deposition Prep Packet",
        description: "Compiles witness background, likely questions, and key document references for deposition prep.",
        category: "Legal",
        url: "/prompts/legal/deposition-prep-packet"
      },
      {
        tab: "prompts",
        complexity: "Moderate",
        apps: "Word, Outlook",
        title: "Legal Research Memo",
        description: "Drafts a formal IRAC-style research memo and routes it to the supervising attorney.",
        category: "Legal",
        url: "/prompts/legal/legal-research-memo"
      },
      {
        tab: "prompts",
        complexity: "Advanced",
        apps: "Outlook, Teams, Word, Excel",
        title: "Matter Status Report",
        description: "Aggregates matter emails, notes, and task lists into a weekly client-ready status report.",
        category: "Legal",
        url: "/prompts/legal/matter-status-report"
      },
      {
        tab: "prompts",
        complexity: "Moderate",
        apps: "Word, Outlook",
        title: "Settlement Demand Letter",
        description: "Drafts a demand letter using case facts, damages calculations, and legal theories from matter files.",
        category: "Legal",
        url: "/prompts/legal/settlement-demand-letter"
      },
      {
        tab: "prompts",
        complexity: "Moderate",
        apps: "Word, Teams, OneDrive",
        title: "New Employee Welcome Kit",
        description: "Creates onboarding materials, a starter OneDrive folder, a Teams announcement, and a welcome email draft.",
        category: "HR",
        url: "/prompts/human-resources/new-employee-welcome-kit"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Advanced",
        apps: "SharePoint, Outlook, Teams, PowerPoint, Word",
        title: "Case Conference Prep Pack",
        description: "Assembles evidence packs for multidisciplinary case conferences from documents, correspondence, and reports.",
        category: "Healthcare",
        url: "/prompts/healthcare/case-conference-prep"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Advanced",
        apps: "Outlook, Teams, SharePoint, Word",
        title: "Patient Visit Prep Brief",
        description: "Consolidates referral emails, consult notes, files, and care team chats into a pre-visit brief.",
        category: "Healthcare",
        url: "/prompts/healthcare/patient-visit-prep"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Moderate",
        apps: "Outlook, Excel, Teams, Word",
        title: "Referral Triage Queue",
        description: "Processes inbound referrals into a ranked triage worklist with urgency and documentation status.",
        category: "Healthcare",
        url: "/prompts/healthcare/referral-triage"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Moderate",
        apps: "Outlook, SharePoint, Teams, Word",
        title: "Policy & Regulatory Update Scan",
        description: "Flags policy changes, coverage updates, and compliance deadlines from inbound communications.",
        category: "Healthcare",
        url: "/prompts/healthcare/regulatory-update-scan"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Advanced",
        apps: "SharePoint, Excel, Outlook, Word, Teams",
        title: "Research Progress Report Assembly",
        description: "Pulls research data, correspondence, and amendments into a grant or IRB progress report.",
        category: "Healthcare",
        url: "/prompts/healthcare/research-progress-report"
      },
      {
        tab: "prompts",
        status: "New",
        complexity: "Moderate",
        apps: "Teams, Outlook, Word",
        title: "Shift Handover Digest",
        description: "Compiles shift communications into a structured digest that highlights open items and urgent situations.",
        category: "Healthcare",
        url: "/prompts/healthcare/shift-handover-digest"
      },
      {
        tab: "prompts",
        complexity: "Moderate",
        apps: "Outlook, Excel, Word",
        title: "Donor Thank-You Campaign",
        description: "Reads a donor list, generates personalized thank-you letters, and queues individual emails for review.",
        category: "Nonprofit",
        url: "/prompts/nonprofit/donor-thank-you-campaign"
      },
      {
        tab: "skills",
        status: "Trending",
        complexity: "Simple",
        apps: "OneDrive",
        title: "Add a Skill to Copilot Cowork",
        description: "Asks Cowork to save a custom skill so it is available in future sessions.",
        category: "Personal productivity",
        url: "/prompts/experimental/add-skill-to-cowork"
      },
      {
        tab: "skills",
        complexity: "Moderate",
        apps: "Word",
        title: "Generate a Cowork Skill",
        description: "Guides Cowork through creating a structured skill file from a described workflow.",
        category: "Personal productivity",
        url: "/prompts/experimental/generate-cowork-skill"
      },
      {
        tab: "skills",
        complexity: "Simple",
        apps: "Cowork",
        title: "List All Skills",
        description: "Enumerates built-in and custom skills available in the current Cowork workspace.",
        category: "Personal productivity",
        url: "/prompts/experimental/list-skills"
      },
      {
        tab: "custom",
        complexity: "Simple",
        apps: "Word, Excel, PowerPoint, Outlook, Teams",
        title: "Cowork Capability Reference",
        description: "Builds a tailored reference of Cowork connections, skills, file handling, automation, and guardrails.",
        category: "Personal productivity",
        url: "/prompts/experimental/cowork-capability-reference"
      },
      {
        tab: "custom",
        complexity: "Simple",
        apps: "Cowork",
        title: "Prompt Format Template",
        description: "Use the community template to keep new prompts consistent, scannable, and easy to contribute.",
        category: "Personal productivity",
        url: "/TEMPLATE"
      }
    ];

    const categoryClass = {
      "Personal productivity": "productivity",
      Sales: "sales",
      Legal: "legal",
      HR: "hr",
      Healthcare: "healthcare",
      Nonprofit: "nonprofit"
    };

    let activeTab = "prompts";
    let activeFilter = "All";

    function hrefFor(path) {
      return `${baseUrl}${path}`;
    }

    function cardMarkup(card) {
      const status = card.status
        ? `<span class="toolkit-status toolkit-status--${card.status.toLowerCase()}">${card.status}</span>`
        : "";
      const vertical = categoryClass[card.category] || "productivity";

      return `
        <article class="toolkit-card" data-category="${card.category}">
          <a class="toolkit-card__link" href="${hrefFor(card.url)}">
            <div class="toolkit-card__meta">
              ${status}
              <span>${card.complexity}</span>
              <span>${card.apps}</span>
            </div>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <span class="toolkit-category toolkit-category--${vertical}">${card.category}</span>
          </a>
        </article>
      `;
    }

    function renderCards() {
      ["prompts", "skills", "custom"].forEach((tab) => {
        const grid = document.querySelector(`[data-grid="${tab}"]`);
        if (!grid) return;
        grid.innerHTML = cards.filter((card) => card.tab === tab).map(cardMarkup).join("");
        const count = cards.filter((card) => card.tab === tab).length;
        const countEl = document.querySelector(`[data-count-for="${tab}"]`);
        if (countEl) countEl.textContent = count;
      });
      applyFilter();
    }

    function applyFilter() {
      const panel = document.querySelector(`[data-panel="${activeTab}"]`);
      if (!panel) return;

      let visibleCount = 0;
      panel.querySelectorAll(".toolkit-card").forEach((card) => {
        const visible = activeFilter === "All" || card.dataset.category === activeFilter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      const empty = document.querySelector(`[data-empty="${activeTab}"]`);
      if (empty) empty.hidden = visibleCount > 0;
    }

    document.querySelectorAll(".toolkit-tab").forEach((tabButton) => {
      tabButton.addEventListener("click", () => {
        activeTab = tabButton.dataset.tab;
        document.querySelectorAll(".toolkit-tab").forEach((button) => {
          const selected = button === tabButton;
          button.classList.toggle("is-active", selected);
          button.setAttribute("aria-selected", String(selected));
        });
        document.querySelectorAll(".toolkit-panel").forEach((panel) => {
          const selected = panel.dataset.panel === activeTab;
          panel.classList.toggle("is-active", selected);
          panel.hidden = !selected;
        });
        applyFilter();
      });
    });

    document.querySelectorAll(".toolkit-filter").forEach((filterButton) => {
      filterButton.addEventListener("click", () => {
        activeFilter = filterButton.dataset.filter;
        document.querySelectorAll(".toolkit-filter").forEach((button) => {
          button.classList.toggle("is-active", button === filterButton);
        });
        applyFilter();
      });
    });

    function updateActivity() {
      const latestEl = document.getElementById("toolkit-last-updated");
      const newCountEl = document.getElementById("toolkit-new-count");
      const contributorEl = document.getElementById("toolkit-contributors");
      const contributorCount = Number(contributorEl?.dataset.count) || 1;

      if (contributorEl) {
        contributorEl.textContent = `${contributorCount} contributor${contributorCount === 1 ? "" : "s"}`;
      }

      fetch("{{ '/assets/data/changelog.json' | relative_url }}")
        .then((response) => {
          if (!response.ok) throw new Error("Changelog unavailable");
          return response.json();
        })
        .then((entries) => {
          if (!Array.isArray(entries) || !entries.length) return;

          const latest = new Date(entries[0].date);
          const weekStart = new Date(latest);
          weekStart.setDate(latest.getDate() - 7);

          const addedCount = entries.reduce((count, entry) => {
            const entryDate = new Date(entry.date);
            if (entryDate < weekStart || entryDate > latest) return count;
            return count + (entry.files || []).filter((file) => file.status === "added").length;
          }, 0);

          latestEl.textContent = `Last updated ${latest.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}`;
          newCountEl.textContent = `${addedCount} new this week`;
        })
        .catch(() => {
          latestEl.textContent = "Last updated Apr 21, 2026";
          newCountEl.textContent = "0 new this week";
        });
    }

    renderCards();
    updateActivity();
  })();
</script>
