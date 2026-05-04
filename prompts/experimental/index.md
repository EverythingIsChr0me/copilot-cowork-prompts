---
layout: default
title: Experimental Prompts
description: "Undocumented features and prompts that push the limits."
---

<section class="prompt-section">
  <header class="prompt-section__header">
    <div>
      <span class="prompt-section__eyebrow">Prompt library</span>
      <h2>Experimental</h2>
      <p>Skill management, capability discovery, and prompts that test the edge of Cowork behavior.</p>
    </div>
    <span class="prompt-section__count">4 prompts</span>
  </header>

  {% include section-nav.html %}

  <div class="toolkit-grid">
    <article class="toolkit-card">
      <a class="toolkit-card__link" href="{{ '/prompts/experimental/list-skills' | relative_url }}">
        <div class="toolkit-card__meta">
          <span>Simple</span>
          <span>Cowork</span>
        </div>
        <h3>List All Skills</h3>
        <p>Enumerates built-in and custom skills available in the current Cowork workspace.</p>
        <span class="toolkit-category toolkit-category--experimental">Experimental</span>
      </a>
    </article>

    <article class="toolkit-card">
      <a class="toolkit-card__link" href="{{ '/prompts/experimental/generate-cowork-skill' | relative_url }}">
        <div class="toolkit-card__meta">
          <span>Moderate</span>
          <span>Word</span>
        </div>
        <h3>Generate a Cowork Skill</h3>
        <p>Guides Cowork through creating a structured skill file from a described workflow.</p>
        <span class="toolkit-category toolkit-category--experimental">Experimental</span>
      </a>
    </article>

    <article class="toolkit-card">
      <a class="toolkit-card__link" href="{{ '/prompts/experimental/add-skill-to-cowork' | relative_url }}">
        <div class="toolkit-card__meta">
          <span class="toolkit-status toolkit-status--trending">Trending</span>
          <span>Simple</span>
          <span>OneDrive</span>
        </div>
        <h3>Add a Skill to Copilot Cowork</h3>
        <p>Asks Cowork to save a custom skill so it is available in future sessions.</p>
        <span class="toolkit-category toolkit-category--experimental">Experimental</span>
      </a>
    </article>

    <article class="toolkit-card">
      <a class="toolkit-card__link" href="{{ '/prompts/experimental/cowork-capability-reference' | relative_url }}">
        <div class="toolkit-card__meta">
          <span>Simple</span>
          <span>Word, Excel, PowerPoint, Outlook, Teams</span>
        </div>
        <h3>Cowork Capability Reference</h3>
        <p>Builds a tailored reference of Cowork connections, skills, file handling, automation, and guardrails.</p>
        <span class="toolkit-category toolkit-category--experimental">Experimental</span>
      </a>
    </article>
  </div>
</section>
