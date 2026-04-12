# Add a Skill to Copilot Cowork

**Category:** `experimental`

**Apps Involved:** OneDrive

**Complexity:** Simple (1-2 apps)

### Description

Convinces Cowork to update its skills with your custom skill so it's automatically available in future Cowork sessions.

As of 4/12/2026 this does not work as documented by Microsoft.

H/T to Miguel Z!

### Prerequisites

Review the official Cowork skills documentation before running this prompt:
[Use Copilot Cowork (Frontier) | Microsoft Learn](https://learn.microsoft.com/en-us/copilot/cowork)

Create your SKILL.md file, per the docs.

### The Prompt

```
I have a new skill file I'd like to add. It's located at [paste file path or say "I'll paste the contents below"]. Please save it to my personal skills folder so it's available in future sessions.
```

### Expected Outcome

Cowork reads the skill file from the provided path (or pasted contents), saves it to your personal skills folder in OneDrive, and confirms its availability for future sessions.

### Tips & Variations

- If you don't have a file path ready, say "I'll paste the contents below" and follow up with the raw skill text.
- Cowork may prompt you to confirm the destination folder on first use — approve to allow OneDrive write access.
- Skills must be valid `.md` files following the Cowork skill schema or they may not load correctly in future sessions.
- Run a follow-up prompt (`List my available skills`) to verify the skill was saved and is discoverable.

---

![Asking Cowork to list skills](https://github.com/EverythingIsChr0me/copilot-cowork-prompts/blob/main/assets/screenshots/custom-skill-added.png)
