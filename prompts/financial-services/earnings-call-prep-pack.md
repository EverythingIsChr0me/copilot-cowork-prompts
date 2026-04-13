## Earnings Call Prep Pack

**Category:** `financial-services`

**Apps Involved:** Excel, Outlook, Word, PowerPoint

**Complexity:** Advanced (4 apps, chained steps)

### Description

Pulls quarterly KPIs and financial trends from Excel, searches Outlook for recent analyst and investor correspondence, compiles a Word Q&A prep document with suggested responses, and builds a PowerPoint with a financial summary and "likely questions" appendix for the CFO.

### The Prompt

```
I need to prepare a [QUARTER] [YEAR] earnings call prep package for the CFO. Do the following:

1. Open the Excel file [FINANCIALS_FILE] and extract the key metrics: Revenue, Net Income, EPS, Gross Margin %, Operating Margin %, Free Cash Flow, and [ANY_ADDITIONAL_KPIS]. Pull current quarter, prior quarter, and year-ago quarter figures. Calculate QoQ and YoY changes.

2. Search my Outlook inbox for emails from the past [TIME_PERIOD] containing keywords like "analyst," "investor," "guidance," "forecast," "earnings," "quarter," and "[COMPANY_TICKER]." Identify recurring themes, specific questions asked, concerns raised, and any requests for updated guidance. Also search for emails from [INVESTOR_RELATIONS_CONTACT] for any internally flagged topics.

3. Create a Word document titled "[QUARTER] [YEAR] Earnings Call Prep — Q&A Guide" with the following sections:
   - Financial Snapshot: a table of the key metrics from step 1 with QoQ and YoY changes
   - Anticipated Questions: list 10-15 likely analyst questions based on the themes found in step 2 and the financial trends from step 1 (e.g., margin compression, revenue acceleration/deceleration, cash flow changes)
   - Suggested Responses: for each anticipated question, draft a 2-3 sentence response that references the data, stays on message, and avoids forward-looking statements unless marked as "[CONFIRM WITH LEGAL]"
   - Hot Topics: flag any sensitive subjects found in the email search that may come up (e.g., ongoing litigation, leadership changes, supply chain issues) with a note to coordinate messaging with [LEGAL_CONTACT] or [COMMS_CONTACT]

4. Create a PowerPoint presentation with:
   - Slide 1: "[COMPANY_NAME] [QUARTER] [YEAR] — Earnings Call Prep" title slide
   - Slide 2: Financial summary table matching the Word doc's Financial Snapshot
   - Slide 3: "Key Themes from Analyst Correspondence" — a bullet summary of the top 5 themes from the email search
   - Slide 4-5: "Likely Questions & Suggested Framing" — the top 10 questions in a two-column format (Question | Suggested Response Summary)
   - Slide 6: "Watch List" — sensitive topics requiring cross-functional coordination

Keep the deck concise and presentation-ready. Use the company's default template if available.
```

### Expected Outcome

- A comprehensive Word Q&A guide with data-backed suggested responses to 10-15 anticipated analyst questions, sourced from actual financial trends and recent investor correspondence.
- A concise PowerPoint prep deck the CFO can flip through before the call, covering financials, key themes, likely questions, and sensitive topics.
- All financial figures pulled directly from the source Excel workbook for consistency.

### Tips & Variations

- Add specific analyst names to the Outlook search (e.g., "also search for emails from [ANALYST_1], [ANALYST_2]") if you track key sell-side contacts.
- Include a step to "search Outlook for the prior quarter's earnings call transcript or debrief notes" to identify any commitments made last quarter that analysts may follow up on.
- If your IR team tracks questions in a SharePoint list or Excel file, add: "Also open [IR_QUESTION_LOG] and include any flagged topics from the investor relations tracker."
- Swap the PowerPoint for a Teams post if the CFO prefers to receive prep materials in a Teams channel rather than a slide deck.
- For companies with segment reporting, specify: "Break out Revenue and Operating Income by segment: [SEGMENT_1], [SEGMENT_2], [SEGMENT_3]."

---
