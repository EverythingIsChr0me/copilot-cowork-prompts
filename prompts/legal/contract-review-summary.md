# Contract Review Summary

**Category:** `legal`

**Apps Involved:** Word, Outlook

**Complexity:** Moderate (3-4 apps)

### Description

Reads a contract draft, extracts key terms and risk flags, and sends a structured summary to a reviewer via Outlook.

### The Prompt

```
Open [/CONTRACT_FILE]. Extract the following into a structured summary: parties, effective date, term length, payment terms, termination clauses, limitation of liability, indemnification obligations, and any non-standard or missing clauses. Flag any clause that deviates from our standard template. Save the summary as "Review – [CONTRACT_FILE]" to [/MATTER_FOLDER/], then email it to [REVIEWER_EMAIL] with the subject "Contract Review – [CONTRACT_FILE]".
```

### Expected Outcome

A structured Word summary document saved to SharePoint and emailed to the reviewing attorney, with a risk flag section for non-standard clauses.

### Tips & Variations

- Store your standard clause library as a file in SharePoint so Cowork can compare against it.
- Add `[CLIENT_NAME]` to the subject line for client-specific matters.
- Variation: route flagged contracts to a Teams channel instead of email.

---
