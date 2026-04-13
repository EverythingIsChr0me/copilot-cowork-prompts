# Generate a Cowork Skill

**Category:** `experimental`

**Apps Involved:** Word

**Complexity:** Moderate (2 apps)

---

## Description

Generates a production-ready `SKILL.md` file for a new Copilot Cowork skill based on a plain-language description of the desired behavior, then produces a Word document briefing that documents the skill for team distribution.

H/T to Miguel Z. for his contribution! 🙌

## The Prompt

```
Create a new Cowork skill based on the following specification:

**Skill name:** [SKILL_NAME]
**Purpose:** [ONE_SENTENCE_PURPOSE]
**Trigger contexts:** [WHEN_SHOULD_THIS_SKILL_ACTIVATE — e.g., "whenever the user asks for X or mentions Y"]
**Inputs the skill should expect:** [INPUT_DESCRIPTION]
**Output format:** [OUTPUT_FORMAT — e.g., Word doc, Excel, HTML, inline response]
**Key steps the skill should follow:** [NUMBERED_STEPS_OR_WORKFLOW]
**Any source data, APIs, or integrations required:** [SOURCES_OR_NONE]
**Placeholder tokens to use:** [LIST_TOKENS_e.g._[COMPANY_NAME]_[TIME_PERIOD]]

Using the above, produce:

1. A complete `SKILL.md` file with proper YAML frontmatter (name, description) and a step-by-step workflow section. The description must be written to maximize triggering accuracy — include specific phrases a user might say, and be explicit about edge cases.

2. A Word document named `[SKILL_NAME]-skill-brief.docx` that contains:
   - Skill overview (purpose, trigger contexts, expected outputs)
   - Installation instructions (where to place the SKILL.md file)
   - Example prompts a user can run to test the skill
   - A "Tips & Variations" section with known edge cases

Save both files and confirm the skill is ready for installation.
```

## Expected Outcome

- A `SKILL.md` file ready to place in the appropriate `/mnt/skills/` directory
- A Word document briefing suitable for sharing with team members or stakeholders
- A confirmation message with the file paths and a suggested test prompt

## Tips & Variations

- Replace all `[BRACKETED_TOKENS]` before running — the prompt will not self-populate them.
- For skills that require web search or MCP integrations, add a `**compatibility:**` line to the YAML frontmatter listing required tools.
- To generate multiple related skills in one pass, repeat the specification block and add `"Generate one SKILL.md per specification above."` at the end.
- If the skill output format is Excel or PowerPoint instead of Word, change the briefing document format accordingly and reference the appropriate skill (xlsx or pptx) in the prompt.
- Keep the `[KEY_STEPS]` token to 5–8 numbered steps for best results; overly long workflows should be broken into sub-skills.

---
