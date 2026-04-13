## Variance Analysis + Leadership Brief

**Category:** `financial-services`

**Apps Involved:** Excel, Outlook, Teams, Word, PowerPoint

**Complexity:** Advanced (5 apps, chained steps)

### Description

Reads a budget-vs-actuals workbook, identifies material variances, pulls contextual explanations from recent emails and Teams conversations, writes a narrative memo in Word, and builds a CFO-ready PowerPoint slide summarizing the top variances.

### The Prompt

```
Open the Excel file [BUDGET_VS_ACTUALS_FILE] and identify all line items where the actual amount deviates from budget by more than [VARIANCE_THRESHOLD] (e.g., 10% or $50,000). For each flagged variance, search my Outlook inbox and Teams chats from the past [TIME_PERIOD] for messages that mention that line item or cost center to find context on what drove the variance.

Then do the following:

1. Create a Word memo titled "[MONTH/QUARTER] Variance Analysis" that lists each material variance with the budget amount, actual amount, dollar and percentage variance, and a narrative explanation sourced from the emails and Teams messages you found. Where no context was found, note "Explanation pending — follow up with [COST_CENTER_OWNER]." Include an executive summary paragraph at the top.

2. Create a PowerPoint presentation with a single slide titled "Top 5 Variances — [MONTH/QUARTER]" showing a table of the five largest variances by absolute dollar amount, with columns for Line Item, Budget, Actual, Variance $, Variance %, and a short driver summary. Use the company's default slide template if available.

3. Draft an Outlook email to [CFO_EMAIL] with subject line "[MONTH/QUARTER] Variance Analysis — Review Requested" attaching the Word memo and PowerPoint slide. In the email body, provide a two-sentence summary of the overall variance picture and flag any variances that may require immediate action.
```

### Expected Outcome

- An Excel-sourced analysis identifying all material variances against the threshold.
- A Word memo with line-by-line variance commentary, enriched with context pulled from Outlook and Teams.
- A PowerPoint slide with a clean top-5 variance summary table ready for a staff meeting.
- A draft Outlook email to the CFO with both files attached and a concise summary.

### Tips & Variations

- Set [VARIANCE_THRESHOLD] to match your org's materiality policy — both a percentage and absolute dollar amount works best (e.g., "greater than 10% AND greater than $25,000").
- If your budget file has multiple tabs (e.g., by department), specify which tabs to analyze or say "all tabs" to get a consolidated view.
- Add a step to post the top-5 summary to a Teams channel (e.g., "Also post the top 5 variance table to the [FINANCE_CHANNEL] Teams channel") for broader visibility.
- For quarterly runs, change [TIME_PERIOD] to 90 days to capture a wider context window.
- If you want Cowork to skip the email draft and just produce the documents, remove step 3.

---
