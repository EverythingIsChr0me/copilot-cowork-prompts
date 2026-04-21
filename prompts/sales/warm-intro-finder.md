# Warm Intro Finder

**Category:** `experimental`

**Apps Involved:** Outlook, Teams, SharePoint

**Complexity:** Moderate (3-4 apps)

### Description

Finds the shortest warm path into a target account by searching your org's M365 Graph for colleagues who've already emailed, met with, or collaborated on documents with people at the target company.

### The Prompt

```
I'm trying to get a warm introduction into [TARGET_COMPANY], ideally to [TARGET_ROLE_OR_NAME].

Search across my organization's M365 for any colleague who has, in the last 12 months:
- Exchanged emails with anyone at @[TARGET_DOMAIN]
- Attended a Teams meeting with @[TARGET_DOMAIN] attendees
- Co-authored or shared a SharePoint or OneDrive file with @[TARGET_DOMAIN]

For each internal colleague found, show:
- Their name and role
- Strength of connection (number of interactions, recency of last interaction)
- Which contacts at [TARGET_COMPANY] they've engaged with
- Nature of the relationship if inferable (active deal, past project, community contact)

Rank by connection strength. Then draft a short Teams message I can send to the top 3 colleagues asking for an intro — reference the specific contact they know and keep each under 80 words.
```

### Expected Outcome

A ranked list of internal colleagues with real, data-backed connections into the target account, plus three drafted Teams messages tailored to each colleague's specific relationship — ready to send.

### Tips & Variations

- Tenant Graph permissions govern what Cowork can see. If your org restricts cross-user visibility, results will be limited to your own connections.
- Add "exclude anyone in my direct reporting chain" if you want to avoid asking your manager.
- For larger targets, narrow by department: "only show colleagues who've engaged with the [DEPARTMENT] team at [TARGET_COMPANY]."
- Swap the Teams message for an Outlook email draft if your culture leans email-first.
