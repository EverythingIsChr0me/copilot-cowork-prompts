# Account Research Brief

**Category:** `sales`

**Apps Involved:** Outlook, Teams, SharePoint, OneDrive, Word

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Pulls every signal across your M365 Graph for a target account into a single pre-meeting brief — emails, meetings, chats, shared docs, and open threads — so you walk into the call knowing exactly where the relationship stands.

### The Prompt

```
Build an account brief for [ACCOUNT_NAME] ahead of my meeting with [PRIMARY_CONTACT] on [MEETING_DATE].

Pull from across my M365:
1. Last 90 days of email with anyone at @[ACCOUNT_DOMAIN] — summarize the top 3 active threads, who is driving each, and any unanswered asks on either side.
2. All Teams meetings with [ACCOUNT_NAME] attendees in the last 60 days — list date, attendees, and a one-line summary from recaps or transcripts.
3. Teams chats and channel posts mentioning [ACCOUNT_NAME] — flag anything from the last 14 days.
4. SharePoint and OneDrive files shared with or received from @[ACCOUNT_DOMAIN] in the last 90 days — list by title, date, and who shared it.
5. Any commitments I or my team made that don't have a confirmed follow-up.

Output as a Word doc titled "[ACCOUNT_NAME] — Brief for [MEETING_DATE]" with sections: Relationship Snapshot, Active Threads, Open Commitments, Recent Artifacts, Suggested Talking Points.
```

### Expected Outcome

A Word document delivered to OneDrive containing a consolidated view of the account relationship, with open commitments surfaced explicitly and three to five talking points tailored to where the deal actually is.

### Tips & Variations

- Works best when your Outlook and Teams data retention covers the windows you specify. Shorten windows if results feel stale.
- Swap `[ACCOUNT_DOMAIN]` for a list of domains if the account uses subsidiaries.
- For ABM plays, loop this over a list of accounts and ask for a comparison table instead of individual briefs.
- If your org uses Dynamics or Salesforce, add "also cross-reference any open opportunities" — Cowork will pull from the connected CRM if available.
