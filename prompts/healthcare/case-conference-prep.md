# Case Conference Prep Pack

**Category:** `healthcare`

**Apps Involved:** SharePoint, Outlook, Teams, PowerPoint, Word

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Assembles the full evidence pack for multidisciplinary case conferences — tumor boards, complex case reviews, ethics consults — pulling every relevant document, recent correspondence, and imaging report for each case on the agenda.

### The Prompt

```
Prepare case materials for the [CONFERENCE_NAME] on [CONFERENCE_DATE].

Cases on today's agenda: [CASE_LIST_OR_AGENDA_DOC].

For each case:
1. Pull the most recent clinical documents from /Clinical/Cases/[CASE_ID]/ — pathology, imaging reports, prior consult notes.
2. Search Outlook for correspondence in the last 60 days referencing [CASE_ID] or the patient identifier — flag any external specialist input.
3. Search the [CARE_TEAM_CHANNEL] Teams channel for discussion threads about this case.
4. Identify the presenting clinician and the specific question being brought to the board.

Build a PowerPoint deck titled "[CONFERENCE_NAME] — [CONFERENCE_DATE]" with:
- One cover slide
- 2-3 slides per case: Case Summary, Key Imaging/Pathology Findings, Specific Question for the Board, Prior Discussion Points

Build a Word companion doc with full references and citations for each case.

Save both to /Clinical/Case Conferences/[CONFERENCE_DATE]/. Apply the [SENSITIVITY_LABEL] label.
```

### Expected Outcome

A presentation-ready PowerPoint plus a detailed reference Word document, both appropriately sensitivity-labeled, with each case framed around the specific clinical question being asked rather than a generic summary.

### Tips & Variations

- Requires well-organized case folders with consistent naming. Without that, Cowork can't reliably find the right documents.
- The "specific question for the board" framing matters — it's what makes the case actionable vs. an academic recap.
- Add "also flag any cases where external specialist input was requested but not received" to surface gaps before the meeting.
- For recurring boards, chain with a follow-up prompt: after the meeting, extract decisions and action items from the Teams recording into each case's folder.
