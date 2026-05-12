---
layout: default
title: "Q4 Opportunity Risk Assessment"
permalink: /prompts/sales/q4-opportunity-risk-assessment/
date_added: 2026-05-12
---

# Q4 Opportunity Risk Assessment

**Category:** `sales`

**Apps Involved:** Teams, Outlook, Excel, Word, CRM

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Analyzes your Q4 book of business across Teams meetings, email activity, and CRM data to identify the highest-value opportunities at greatest risk. Produces an anonymized, evidence-backed deep dive with customer accounts replaced by Greek heroes and product names replaced by WWII Allied operation names.

### Demo

https://www.youtube.com/watch?v=38mp7QyXjH0

### The Prompt

```
Analyze my book of business for Q4 and assess which opportunities have the greatest risk based on Teams meetings, meeting recaps, transcripts, chats, and emails.

Compare these engagement signals against our CRM data, including opportunity value, stage, close date, forecast category, next step, products, contacts, last activity, and any open risks or manager notes.

Prioritize the analysis in descending order of dollar value, then assess risk within each opportunity using:
- Negative or uncertain customer sentiment
- Declining meeting frequency, canceled meetings, or missing decision makers
- Slow email response times or unanswered follow-ups
- Budget pressure, procurement friction, legal/security delays, or competitor mentions
- Gaps between CRM next steps and what actually appears in Teams or email
- Missing champion activity, executive sponsor silence, or stakeholder churn
- Product concerns, unresolved blockers, or implementation objections

Replace every customer account name with a Greek hero name, and replace every product name with a WWII Allied operation name. Keep the anonymized names consistent throughout the report and include a private mapping appendix only if I explicitly ask for it.

Create a Word document titled "Q4 Opportunity Risk Assessment - [TODAYS_DATE]" with:
1. Executive summary of the largest at-risk revenue themes.
2. Ranked opportunity table sorted by dollar value with columns for Anonymized Account, Anonymized Products, Opportunity Value, CRM Stage, Close Date, Risk Level, Primary Risk Driver, Confidence Level, and Recommended Next Action.
3. Deep dive assessment for each High or Medium risk opportunity explaining why it is at risk, citing evidence from Teams, email, and CRM.
4. CRM comparison section calling out mismatches between CRM status and observed engagement signals.
5. Recovery plan with recommended owner, next customer action, internal action, and timing.

Do not expose the real customer account names or product names anywhere in the main report.
```

### Expected Outcome

A dollar-prioritized Q4 risk report that combines CRM facts with real engagement signals from Teams and Outlook. The output should make the largest risky opportunities easy to review, explain why each one is risky, and preserve confidentiality through consistent anonymized account and product names.

### Tips & Variations

- Make sure the CRM source includes opportunity value, stage, close date, account name, product names, and owner.
- If your CRM is not directly connected, export the Q4 opportunity list to Excel first and point Cowork to the workbook.
- Add "only include opportunities above [DOLLAR_THRESHOLD]" to focus the report on enterprise deals.
- Add "create a PowerPoint summary for leadership" if you need a meeting-ready version of the findings.
