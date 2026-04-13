## Board Deck Pipeline

**Category:** `financial-services`

**Apps Involved:** Excel, PowerPoint, Outlook

**Complexity:** Advanced (3 apps, chained steps)

### Description

Pulls quarterly financial statements from Excel, builds a formatted PowerPoint deck with P&L, balance sheet, cash flow, and KPI trend slides, then drafts an Outlook email to the board with the deck attached and a summary of key takeaways.

### The Prompt

```
Open the Excel workbook [QUARTERLY_FINANCIALS_FILE] and read the following tabs: [P&L_TAB], [BALANCE_SHEET_TAB], [CASH_FLOW_TAB], and [KPI_TAB]. Use this data to build a PowerPoint presentation for the Board of Directors covering [QUARTER] [YEAR]:

1. Title slide: "[COMPANY_NAME] — [QUARTER] [YEAR] Financial Review"

2. P&L Summary slide: Show Revenue, COGS, Gross Margin, OpEx, EBITDA, and Net Income for the current quarter, prior quarter, and same quarter last year. Include a column for QoQ and YoY percentage change.

3. Balance Sheet Highlights slide: Show Total Assets, Total Liabilities, Shareholders' Equity, Cash & Equivalents, and Net Debt. Compare to prior quarter.

4. Cash Flow Waterfall slide: Show a waterfall chart starting with Beginning Cash, adding Operating Cash Flow, subtracting CapEx and Financing Activities, and ending with Ending Cash. Use green for inflows and red for outflows.

5. KPI Trends slide: Create line charts for [KPI_1], [KPI_2], and [KPI_3] showing the trailing [NUMBER_OF_QUARTERS] quarters.

6. Key Takeaways slide: Write 4-5 bullet points summarizing the most significant financial movements from the data — what improved, what declined, and what the board should focus on.

Use the company's default PowerPoint template if available. Keep formatting clean and consistent — no slide should have more than one chart or one table.

Then draft an Outlook email to [BOARD_DISTRIBUTION_LIST] with subject line "[COMPANY_NAME] [QUARTER] [YEAR] Board Financials" and attach the PowerPoint. In the email body, list the 3 most important takeaways from the deck and note that the full presentation is attached for review ahead of the [BOARD_MEETING_DATE] meeting.
```

### Expected Outcome

- A polished, multi-slide PowerPoint deck with financial tables, a cash flow waterfall chart, and KPI trend lines sourced directly from the Excel workbook.
- A Key Takeaways slide with AI-generated commentary on the most notable movements.
- A draft Outlook email to the board with the deck attached and a concise preview of the highlights.

### Tips & Variations

- Specify exact tab names and cell ranges if your workbook is complex — e.g., "read cells A1:G25 from the P&L tab."
- If you want a comparison to budget, add a step: "On the P&L slide, add a Budget column and a Variance column using data from the [BUDGET_TAB] tab."
- For a shorter deck, combine P&L and Balance Sheet onto one slide and drop the KPI slide.
- Add "Include speaker notes on each slide with talking points for the CFO" if the CFO presents live.
- Swap Outlook for Teams if you distribute board materials via a Teams channel instead of email.

---
