# Matter Status Report

**Category:** `legal`

**Apps Involved:** Outlook, Teams, Word, Excel

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Aggregates email threads, meeting notes, and task lists for a matter into a weekly status report for the client.

### The Prompt

```
Gather all Outlook emails and Teams messages from the last 7 days tagged with or mentioning [MATTER_NUMBER].

Summarize open tasks, recent developments, upcoming deadlines, and pending client decisions.

Pull any tracked deadlines from the Excel workbook [DEADLINE_TRACKER_FILE].

Draft a client-facing status report in Word using professional legal tone — no internal commentary or privileged strategy.

Save to [SHAREPOINT_FOLDER_URL] and email to [CLIENT_EMAIL] with the subject "Matter Update – [MATTER_NAME] – [DATE]".
```

### Expected Outcome

A polished Word status report emailed to the client, sourced from emails, Teams, and the deadline tracker.

### Tips & Variations

- Use a matter number convention consistently across apps for reliable aggregation.
- Variation: produce an internal version with strategy notes saved separately to SharePoint.

---

Save your file as `prompts/legal/matter-status-report.md`.
