# Renewal Risk Signal Scan

**Category:** `experimental`

**Apps Involved:** Outlook, Teams, Excel, Word

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Scans customer communications for renewal risk signals — budget talk, reorg mentions, competitor names, escalations, champion departures — across every customer in your book, so you can prioritize saves before the renewal clock runs out.

### The Prompt

```
Scan my communications for renewal risk signals across all accounts with renewals in the next [TIME_PERIOD].

Source the account list from "[RENEWAL_WORKBOOK].xlsx" in /Sales/Renewals/.

For each account, analyze the last 90 days of:
- Emails to/from the customer domain
- Teams meeting recaps and transcripts
- Teams chats mentioning the account

Look for these risk signals:
- Budget or cost-cutting language ("tightening", "review", "justify spend")
- Organizational changes (new CFO, acquisition, layoffs, reorg)
- Competitor mentions by name
- Unresolved support escalations or product complaints
- Departure or role change of your primary champion
- Declining meeting frequency or attendance
- Shift in email tone (shorter replies, longer response times)

Output a Word doc with:
- Risk-ranked table: Account, ACV, Renewal Date, Risk Score (High/Med/Low), Top Signal, Recommended Action
- One-page deep dive for each High risk account with evidence quotes and a recovery play

Save as "Renewal Risk Scan — [TODAYS_DATE]" to /Sales/Renewals/.
```

### Expected Outcome

A ranked renewal risk report with evidence-backed risk scores, specific signals cited from actual customer correspondence, and a recommended play for each at-risk account. High-risk accounts get a one-page deep dive ready to share with CS and leadership.

### Tips & Variations

- The renewal workbook needs ACV, renewal date, and customer domain at minimum.
- Tune the signal list to your business — add industry-specific risk language (e.g., "compliance change" for regulated sectors).
- Run monthly; risk signals compound and early detection is the point.
- Pair with the "Account Research Brief" prompt for any account flagged High — the brief gives you the full context to build a save plan.
- Add "also flag expansion signals (new hires, growth announcements, increased usage)" to turn this into a dual risk/opportunity scan.
