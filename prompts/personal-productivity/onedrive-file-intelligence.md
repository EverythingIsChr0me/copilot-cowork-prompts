# OneDrive File Intelligence & Cleanup

**Category:** `personal-productivity`

**Apps Involved:** OneDrive, Word

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Performs a full audit of your OneDrive, produces an animated executive HTML dashboard summarizing file disposition, age, and relevance, then generates a human-approved reorganization and cleanup plan before taking any action.

### The Prompt

```
Analyze my OneDrive and do the following:

1. Catalog and categorize all files by age, file type, relevance, customer, and product (where detectable).

2. Create a dynamic HTML presentation — no more than 5 scrolling screens — with an executive overview showing the disposition of files across those categories. Include cool, animated interactivity (charts, transitions, hover states). Add a 6th screen with prioritized recommendations.

3. Create a written reorganization plan that includes:
   - A proposed folder structure
   - Files and folders to delete, which you will rename by prepending the original filename with "DELETE_"
   - Files to move or consolidate

4. Present the plan to me and wait for my approval before making any changes.
```

### Expected Outcome

- An animated, scrollable 6-screen HTML executive dashboard summarizing OneDrive file disposition with interactive charts and a recommendations screen
- A written cleanup and reorganization plan covering folder structure, file moves, and deletion candidates (prefixed with `DELETE_`)
- No changes made to OneDrive until the user explicitly approves the plan

### Tips & Variations

- The approval gate in step 4 is intentional — do not remove it. Cowork should pause and present the plan before acting.
- For large OneDrives (10,000+ files), scope the analysis first: add "focus on files modified in the last [TIME_PERIOD]" to keep it manageable.
- Variation: add "flag any files that appear to be duplicates" to surface redundant content.
- Variation: replace the HTML presentation with a PowerPoint deck if your audience is less technical.
- Prerequisite: Cowork must have read/write access to your OneDrive.

---

Save your file as `prompts/personal-productivity/onedrive-file-intelligence.md`.
