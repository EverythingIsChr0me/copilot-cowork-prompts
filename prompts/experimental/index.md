---
layout: default
title: Experimental Prompts
description: "Undocumented features and prompts that push the limits."
---

<section class="prompt-section">
  <header class="prompt-section__header">
    <div>
      <h2>Experimental</h2>
      <p>Skill management, capability discovery, and prompts that test the edge of Cowork behavior.</p>
    </div>
    <span class="prompt-section__count">4 prompts</span>
  </header>

  <div class="toolkit-grid">
    {% include toolkit-card.html url="/prompts/experimental/list-skills" title="List All Skills" description="Enumerates built-in and custom skills available in the current Cowork workspace." complexity="Simple" apps="Cowork" category="Experimental" category_class="experimental" %}

    {% include toolkit-card.html url="/prompts/experimental/generate-cowork-skill" title="Generate a Cowork Skill" description="Guides Cowork through creating a structured skill file from a described workflow." complexity="Moderate" apps="Word" category="Experimental" category_class="experimental" %}

    {% include toolkit-card.html url="/prompts/experimental/add-skill-to-cowork" title="Add a Skill to Copilot Cowork" description="Asks Cowork to save a custom skill so it is available in future sessions." complexity="Simple" apps="OneDrive" category="Experimental" category_class="experimental" status="Trending" %}

    {% include toolkit-card.html url="/prompts/experimental/cowork-capability-reference" title="Cowork Capability Reference" description="Builds a tailored reference of Cowork connections, skills, file handling, automation, and guardrails." complexity="Simple" apps="Word, Excel, PowerPoint, Outlook, Teams" category="Experimental" category_class="experimental" %}
  </div>
</section>
