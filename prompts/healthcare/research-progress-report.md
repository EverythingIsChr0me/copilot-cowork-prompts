# Research Progress Report Assembly

**Category:** `healthcare`

**Apps Involved:** SharePoint, Excel, Outlook, Word, Teams

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Assembles periodic progress reports for clinical research grants or IRB submissions by pulling enrollment data, adverse event logs, study team correspondence, and protocol amendments into a single narrative ready for PI review.

### The Prompt

```
Build the [REPORTING_PERIOD] progress report for [STUDY_NAME] (Grant/Protocol #[STUDY_ID]).

Pull from:
1. "[ENROLLMENT_TRACKER].xlsx" in /Research/[STUDY_NAME]/ — current enrollment numbers, targets, withdrawals, screen failures.
2. "[AE_LOG].xlsx" — adverse events and serious adverse events in the reporting period.
3. /Research/[STUDY_NAME]/Amendments/ — any protocol amendments filed in the period.
4. Outlook emails with @[SPONSOR_DOMAIN] and [IRB_CONTACT] in the reporting period — flag correspondence on safety, compliance, or scope changes.
5. Teams meeting recaps from the [STUDY_TEAM_CHANNEL] for key study team decisions.

Draft a Word report "[STUDY_NAME] Progress Report — [REPORTING_PERIOD]" with sections:
- Study Overview (1 paragraph)
- Enrollment Summary (narrative + numbers vs. target)
- Safety Summary (AE/SAE counts, any trends)
- Protocol Amendments & Deviations
- Sponsor and IRB Correspondence Summary
- Study Team Decisions This Period
- Planned Activities for Next Period
- Appendix: source document references

Flag any data gaps or missing documentation for PI review before submission. Save to /Research/[STUDY_NAME]/Reports/.
```

### Expected Outcome

A structured Word progress report grounded in the actual study artifacts, with gaps explicitly flagged for the PI rather than silently filled with placeholders, ready for review and sign-off.

### Tips & Variations

- This is an assembly tool, not an authoring tool. The PI must review every section for scientific accuracy before submission — Cowork handles the mechanics, not the judgment.
- Tune the enrollment and AE workbook references to whatever structure your CTMS exports produce.
- For multi-site studies, add "segment enrollment and AE summaries by site."
- Chain with a "draft cover email to sponsor" step once the PI has reviewed the main report.
