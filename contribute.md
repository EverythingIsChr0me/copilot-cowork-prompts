---
layout: default
title: "Contribute a Prompt"
description: "Share a Copilot Cowork prompt with the community."
permalink: /contribute/
---

<section class="contribute-page" aria-labelledby="contribute-title">
  <header class="contribute-hero">
    <p class="prompt-section__eyebrow">Community submission</p>
    <h2 id="contribute-title">Contribute a prompt</h2>
    <p>
      Have a Copilot Cowork prompt that saved time, improved a workflow, or helped your team get better results?
      Share it with the community. You do not need to know Git or write code.
    </p>
  </header>

  <div class="contribute-actions" aria-label="Contribution options">
    <a class="contribute-action contribute-action--primary" href="{{ site.github.repository_url }}/issues/new?title=Prompt%20submission:%20%5Byour%20prompt%20title%5D">
      Submit a prompt idea
    </a>
    <a class="contribute-action" href="{{ site.github.repository_url }}/blob/main/TEMPLATE.md">
      View the prompt template
    </a>
  </div>

  <section class="contribute-section" aria-labelledby="what-to-send">
    <h3 id="what-to-send">What to send</h3>
    <p>Copy the outline below into your GitHub issue and fill in what you can. Plain language is fine.</p>

    <div class="contribute-template" role="region" aria-label="Prompt submission outline">
      <h4>Prompt title</h4>
      <p>The short name people should see in the toolkit.</p>

      <h4>Category</h4>
      <p>Personal productivity, Sales, Legal, HR, Healthcare, Nonprofit, Financial services, or Experimental.</p>

      <h4>Apps involved</h4>
      <p>For example: Outlook, Teams, SharePoint, Word, Excel, PowerPoint, OneDrive, or Loop.</p>

      <h4>What it does</h4>
      <p>One or two sentences explaining the job this prompt helps someone complete.</p>

      <h4>The prompt</h4>
      <p>Paste the exact prompt you use in Copilot Cowork.</p>

      <h4>Expected outcome</h4>
      <p>Describe what Cowork should produce or do when the prompt works well.</p>

      <h4>Tips or variations</h4>
      <p>Add setup notes, placeholders, prerequisites, or ways to adapt the prompt.</p>
    </div>
  </section>

  <section class="contribute-section" aria-labelledby="before-sharing">
    <h3 id="before-sharing">Before sharing</h3>
    <ul class="contribute-checklist">
      <li>Test the prompt in Copilot Cowork at least once.</li>
      <li>Remove company names, customer names, email addresses, and private details.</li>
      <li>Use placeholders like <code>[CUSTOMER_NAME]</code>, <code>[TIME_PERIOD]</code>, or <code>[SHAREPOINT_FOLDER]</code> where needed.</li>
      <li>Include any access requirements, such as Outlook, Teams, SharePoint, or OneDrive.</li>
    </ul>
  </section>

  <section class="contribute-section" aria-labelledby="technical-option">
    <h3 id="technical-option">Comfortable with GitHub?</h3>
    <p>
      You can also submit a pull request. Add one prompt file under the right
      <code>prompts/&lt;category&gt;/</code> folder, follow the
      <a href="{{ '/TEMPLATE' | relative_url }}">prompt template</a>, and use a title like
      <code>[category] Prompt title</code>.
    </p>
  </section>
</section>
