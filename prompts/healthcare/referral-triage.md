# Referral Triage Queue

**Category:** `healthcare`

**Apps Involved:** Outlook, Excel, Teams, Word

**Complexity:** Moderate (3-4 apps)

### Description

Processes the inbound referral inbox — extracting referring provider, reason, urgency, and required documentation — into a ranked triage worklist so intake staff work the highest-priority cases first.

### The Prompt

```
Process all referral emails received in [REFERRAL_MAILBOX] in the last [TIME_PERIOD].

For each referral email:
1. Extract: referring provider name and practice, patient identifier, stated reason for referral, requested specialty or service, urgency level (if indicated), and whether required documentation (imaging, labs, prior notes) is attached or missing.
2. Classify urgency as Urgent / Routine / Information-only based on referral language and clinical indicators.
3. Flag any referral missing required documentation with a specific list of what's needed.

Output an Excel worklist "Referral Triage — [TODAYS_DATE]" with columns: Received Date, Referring Provider, Patient ID, Specialty, Reason, Urgency, Documentation Status, Missing Items, Suggested Assigned Intake Coordinator.

Sort Urgent first, then by received date.

Then draft a Teams message for the [INTAKE_CHANNEL] summarizing today's queue volume, urgent count, and top documentation gaps blocking intake.
```

### Expected Outcome

An Excel triage worklist with every inbound referral classified and ranked, documentation gaps surfaced with specifics, plus a daily Teams summary for the intake team.

### Tips & Variations

- The referral mailbox should be a shared mailbox Cowork has permission to read.
- Tune urgency classification language to your specialty — oncology urgency signals differ from orthopedics.
- Add "auto-draft a documentation request email to the referring practice for any referral missing records" to close the loop.
- For high-volume specialties, chain this with a weekly rollup: "also produce a weekly summary of referral volume by referring provider and specialty."
