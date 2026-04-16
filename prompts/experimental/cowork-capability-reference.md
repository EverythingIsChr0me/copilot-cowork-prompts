# Cowork Capability Reference

**Category:** `experimental`

**Apps Involved:** Word, Excel, PowerPoint, Outlook, Teams, Loop, SharePoint, OneDrive, ...

**Complexity:** Simple (1-2 apps)

### Description

Prompts Cowork to generate a structured, comprehensive reference of its own capabilities — connections, skills, file handling, automation, and guardrails — tailored for technical users onboarding to the environment.

### The Prompt

```
You are Copilot Cowork.

I'm a technical user onboarding to this environment.
Please give me a complete reference of your capabilities organized as follows:

1. Live System Connections — every M365 service and external system you can
reach, with the specific operations available for each (read, write, search,
create, delete, etc.)
2. Skills — list every skill by name, its trigger phrases, what it does,
and what output format it produces
3. Document Generation — file types you can create, what triggers each,
and how output is delivered
4. Automation — scheduled tasks, parallel execution, and any autonomous
workflow capabilities
5. Extensibility — how I can add, customize, or extend your behavior
(personal skills, custom instructions, etc.)
6. File Handling — what file types I can upload for you to process,
what you can extract, convert, or generate
7. Rendering & Visualization — when and how you render structured data
(cards, charts, tables) vs. plain text
8. Research & Grounding — how you handle fact-checking, live web search,
and citation-backed answers
9. Guardrails — things you won't do, and why

For each section, be specific about what's possible vs. what requires
user-provided context.
```

### Expected Outcome

Cowork returns a structured, section-by-section capability reference covering all nine domains. Output serves as a personal onboarding cheat sheet and reveals any tenant-specific gaps (e.g., disabled connectors, unavailable skills).

### Tips & Variations

- Run this at the start of a new Cowork session to establish a baseline before building workflows.
- Re-run after tenant admin changes (new connectors, policy updates) to detect capability drift.
- Append `Focus only on sections [X] and [Y]` to scope the output if you already know most of the surface area.
- Results will vary by tenant — capabilities unlocked by your admin may differ from another user's output.
- Save the response to OneNote or a Word doc as a living reference: `After generating the above, save it to my OneNote in a page titled "Cowork Capability Reference – [DATE]"`.

---
