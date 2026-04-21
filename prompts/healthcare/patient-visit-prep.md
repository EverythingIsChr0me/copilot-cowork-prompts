# Patient Visit Prep Brief

**Category:** `healthcare`

**Apps Involved:** Outlook, Teams, SharePoint, Word

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Consolidates every signal about an upcoming patient visit — referral emails, prior consult notes, shared imaging or lab files, and care team chats — into a single pre-visit brief so the clinician walks in with full context.

### The Prompt

```
Build a visit prep brief for my appointment with [PATIENT_IDENTIFIER] on [VISIT_DATE].

Pull from across my M365:
1. Last 180 days of emails referencing [PATIENT_IDENTIFIER] or [MRN] — summarize referrals, specialist correspondence, and any unanswered clinical questions.
2. Teams chats and channel posts in the [CARE_TEAM_CHANNEL] mentioning this patient.
3. SharePoint and OneDrive files shared about this patient (imaging reports, external records, consult letters) in the last 180 days.
4. Any prior visit summary documents in /Clinical/Patients/[PATIENT_IDENTIFIER]/.
5. Open action items or follow-ups from previous encounters.

Output as a Word doc titled "[PATIENT_IDENTIFIER] — Visit Brief [VISIT_DATE]" with sections: Clinical Snapshot, Active Issues, Recent Correspondence, Open Follow-Ups, Suggested Focus Areas for Today.

Do not include PHI beyond what is necessary for clinical context. Save to /Clinical/Visit Briefs/ with restricted permissions.
```

### Expected Outcome

A concise pre-visit Word document with chronologically organized context, unresolved items flagged explicitly, and suggested focus areas — saved to a permissions-restricted folder.

### Tips & Variations

- This prompt handles PHI. Only run in a tenant with appropriate compliance controls (HIPAA BAA in place, sensitivity labels applied, DLP policies active).
- Replace `[PATIENT_IDENTIFIER]` with whatever non-PHI reference your org uses internally (initials + DOB, case number) rather than full name where possible.
- For multi-disciplinary cases, add "flag any gaps where a specialist consult was requested but not yet completed."
- Do not use this to replace the EHR — it supplements the record with communications context the EHR doesn't capture.
