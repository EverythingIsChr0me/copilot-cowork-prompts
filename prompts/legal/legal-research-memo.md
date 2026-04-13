# Legal Research Memo

**Category:** `legal`

**Apps Involved:** Word, Outlook

**Complexity:** Moderate (3-4 apps)

### Description

Drafts a formal legal research memo on a specified issue, organized in standard IRAC format, and routes it to the supervising attorney.

### The Prompt

```
Draft a legal research memorandum on the following issue: [RESEARCH_QUESTION].
Jurisdiction: [JURISDICTION].

The memo should follow standard IRAC format — Issue, Rule, Analysis, Conclusion.

In the Rule section, cite the controlling statutes and leading cases.

In the Analysis section, apply the law to these specific facts: [RELEVANT_FACTS].

Conclude with a clear answer to the research question and a recommended course of action.

Length: approximately [TARGET_LENGTH] pages.

Save the memo to [/MATTER_FOLDER/].

Email it to [SUPERVISING_ATTORNEY_EMAIL] with the subject "Research Memo – [RESEARCH_QUESTION_SHORT_TITLE]".
```

### Expected Outcome

A formatted IRAC memo saved to SharePoint, with a copy emailed to the supervising attorney.

### Tips & Variations

- Specify `[TARGET_LENGTH]` between 3–10 pages depending on issue complexity.
- Always have a licensed attorney verify citations — Cowork may hallucinate case names.
- Variation: add `include a table of authorities at the end` to the prompt for filing-ready formatting.

---
