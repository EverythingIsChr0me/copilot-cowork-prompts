---
layout: default
title: "Microsoft 365 Copilot Cowork Prompts"
description: "Community-built Cowork prompts for Microsoft 365 Copilot — organized by industry, battle-tested in production."
---

<style>
  /* ── Reset hero padding – default Cayman is too tall ─────────── */
  .page-header {
    padding: 2.5rem 1.5rem;
    background-color: #0f2a4a;
    background-image: linear-gradient(135deg, #0f2a4a 0%, #106ebe 60%, #00897b 100%);
  }
 
  .project-name { font-size: 2rem; margin-bottom: .4rem; }
  .project-tagline { font-size: 1rem; font-weight: 400; opacity: .85; }
 
  /* ── CTA button ───────────────────────────────────────────────── */
  .btn {
    background: #fff;
    color: #0f2a4a !important;
    font-weight: 600;
    border: none;
    padding: .55rem 1.4rem;
    border-radius: 4px;
    text-decoration: none !important;
    display: inline-block;
    margin-top: .75rem;
    transition: background .2s, box-shadow .2s;
  }
  .btn:hover { background: #e8f0fe; box-shadow: 0 2px 8px rgba(0,0,0,.2); }
  .btn-outline {
    background: transparent;
    color: #fff !important;
    border: 2px solid rgba(255,255,255,.7);
    margin-left: .5rem;
  }
  .btn-outline:hover { background: rgba(255,255,255,.1); }
 
  /* ── Sticky nav ───────────────────────────────────────────────── */
  .cat-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #0f2a4a;
    padding: .5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: .4rem .75rem;
    border-bottom: 2px solid #106ebe;
  }
  .cat-nav a {
    color: #a8c8f8;
    font-size: .8rem;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    padding: .2rem .4rem;
    border-radius: 3px;
    transition: background .15s, color .15s;
  }
  .cat-nav a:hover { background: #106ebe; color: #fff; }
 
  /* ── Main content ─────────────────────────────────────────────── */
  .main-content { padding-top: 1.5rem; }
 
  /* ── Category table ───────────────────────────────────────────── */
  table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; }
  th { background: #0f2a4a; color: #fff; padding: .55rem .75rem; text-align: left; }
  td { padding: .5rem .75rem; border-bottom: 1px solid #e0e0e0; vertical-align: top; }
  tr:hover td { background: #f0f7ff; }
  td a { color: #106ebe; font-weight: 600; text-decoration: none; }
  td a:hover { text-decoration: underline; }
 
  /* prompt count badge */
  .badge {
    display: inline-block;
    font-size: .7rem;
    font-weight: 700;
    background: #e8f0fe;
    color: #0f2a4a;
    border-radius: 99px;
    padding: .05rem .45rem;
    margin-left: .35rem;
    vertical-align: middle;
  }
 
  /* ── Callout box ──────────────────────────────────────────────── */
  .callout {
    background: #f0f7ff;
    border-left: 4px solid #106ebe;
    border-radius: 0 6px 6px 0;
    padding: .85rem 1.1rem;
    margin: 1.5rem 0;
    font-size: .93rem;
  }
 
  /* ── Mobile ───────────────────────────────────────────────────── */
  @media (max-width: 600px) {
    .project-name { font-size: 1.5rem; }
    .cat-nav { padding: .4rem .6rem; }
    table, thead, tbody, th, td, tr { display: block; }
    thead { display: none; }
    td { border: none; padding: .3rem .5rem; }
    td:first-child { font-weight: 700; padding-top: .75rem; border-top: 1px solid #e0e0e0; }
  }
</style>

A community collection of practical [Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/) prompts for Microsoft 365 Copilot, organized by industry and use case.

## What is Cowork?

Cowork is a capability in Microsoft 365 Copilot that lets you delegate multi-step tasks to an AI agent that works autonomously across your M365 apps (Word, Excel, PowerPoint, Outlook, Teams, etc.) and reports back when done.

## Prompt Categories

| Category                                                     | Description      |
| ------------------------------------------------------------ | ---------------- | ----------------------------------------------------- |
| [Personal Productivity]({{ '/prompts/personal-productivity'  | relative_url }}) | Email triage, meeting prep, weekly reviews            |
| [Experimental]({{ '/prompts/experimental'                    | relative_url }}) | Bleeding-edge, multi-agent, creative use cases        |
| [Legal]({{ '/prompts/legal'                                  | relative_url }}) | Contract review prep, case research, client updates   |
| [Human Resources]({{ '/prompts/human-resources'              | relative_url }}) | Hiring, onboarding, internal communications           |
| [Nonprofit]({{ '/prompts/nonprofit'                          | relative_url }}) | Grant reporting, donor comms, board prep              |
| [Healthcare - TODO]({{ '/prompts/healthcare'                 | relative_url }}) | Clinical documentation, patient comms, compliance     |
| [Financial Services - TODO]({{ '/prompts/financial-services' | relative_url }}) | Client reporting, regulatory prep, portfolio analysis |
| [Sales - TODO]({{ '/prompts/sales'                           | relative_url }}) | Pipeline updates, account plans, follow-up workflows  |

## Prompt Format

Each prompt uses a standard template. See [TEMPLATE.md]({{ '/TEMPLATE.md' | relative_url }}) for details.

## Contributing

See [CONTRIBUTING.md]({{ '/CONTRIBUTING.md' | relative_url }}) for guidelines.

## License

[MIT]({{ '/LICENSE' | relative_url }})
