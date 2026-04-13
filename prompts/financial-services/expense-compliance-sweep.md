## Expense Compliance Sweep

**Category:** `financial-services`

**Apps Involved:** Excel, Word, Outlook

**Complexity:** Advanced (3 apps, chained steps)

### Description

Scans expense report data in Excel against company policy thresholds, flags violations grouped by department, generates a Word summary report with specific line items cited, and drafts individual Outlook emails to each department head listing their team's flagged expenses.

### The Prompt

```
Open the Excel file [EXPENSE_REPORT_FILE] which contains employee expense submissions with columns for [EMPLOYEE_NAME], [DEPARTMENT], [EXPENSE_CATEGORY], [AMOUNT], [DATE], [DESCRIPTION], and [RECEIPT_ATTACHED_Y/N].

Apply the following policy rules to flag violations:

- Meals exceeding $[MEAL_LIMIT] per person
- Hotel stays exceeding $[HOTEL_LIMIT] per night
- Any single expense over $[SINGLE_EXPENSE_LIMIT] without receipt (Receipt_Attached = N)
- Entertainment expenses over $[ENTERTAINMENT_LIMIT]
- [ANY_ADDITIONAL_RULES]

Then do the following:

1. In the Excel file, add a new column called "Policy Flag" and mark each violating row with the rule it violated. Add a summary tab called "Violations Summary" that shows total flagged amount by department and by policy rule, plus a count of violations per employee.

2. Create a Word document titled "[TIME_PERIOD] Expense Policy Compliance Report" that includes:
   - An executive summary with total expenses reviewed, total flagged amount, number of violations, and top 3 offending departments
   - A section per department listing each violation with employee name, date, category, amount, and the rule violated
   - A recommendations section suggesting whether any policy thresholds need updating based on the pattern of violations

3. For each department that has violations, draft a separate Outlook email to [DEPT_HEAD_EMAIL_PATTERN] (e.g., dept-head-[DEPARTMENT]@company.com) with subject line "[TIME_PERIOD] Expense Policy Exceptions — [DEPARTMENT]." In each email, list that department's violations in a table and request corrective action or additional documentation by [RESPONSE_DEADLINE]. Keep the tone professional and constructive.
```

### Expected Outcome

- The original Excel file updated with a Policy Flag column and a new Violations Summary tab showing breakdowns by department, rule, and employee.
- A Word compliance report with an executive summary, department-by-department detail, and recommendations.
- Individual draft Outlook emails to each department head with only their team's flagged items, ready to review and send.

### Tips & Variations

- Adjust policy thresholds to match your company's travel & expense policy. Add rules for mileage rates, per diem caps, or advance approval requirements as needed.
- If department head emails don't follow a pattern, provide a mapping: "Sales → jane@company.com, Engineering → bob@company.com" etc.
- Add a step to "post a summary of total violations and flagged dollar amount to the [FINANCE_CHANNEL] Teams channel" for leadership visibility.
- For recurring use, keep the same Excel template structure each period so the prompt works without modification.
- Remove the recommendations section from the Word doc if you only need a factual audit trail.

---
