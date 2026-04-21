# Policy & Regulatory Update Scan

**Category:** `healthcare`

**Apps Involved:** Outlook, SharePoint, Teams, Word

**Complexity:** Moderate (3-4 apps)

### Description

Scans inbound communications from payers, regulatory bodies, and professional associations to flag policy changes, coverage updates, and compliance deadlines — then maps each change to the internal policy document it affects.

### The Prompt

```
Scan the last [TIME_PERIOD] of emails in [COMPLIANCE_MAILBOX] and my own inbox for regulatory, payer, or accreditation updates.

For each update found, extract:
- Source (CMS, state agency, payer name, Joint Commission, specialty society, etc.)
- Effective date
- Topic area (coding, coverage, quality reporting, credentialing, etc.)
- Action required (review only / policy update / training needed / system change)
- Deadline for compliance

Then search /Policies/ in SharePoint for existing internal policies that relate to each update. Map each incoming change to the internal document(s) it affects.

Output a Word doc "Regulatory Update Tracker — [TODAYS_DATE]" with:
- Executive summary of changes requiring action in the next 90 days
- Detailed table: Source, Topic, Effective Date, Deadline, Action, Affected Internal Policies, Owner
- Flag any update with no clear internal policy owner

Post a summary to the [COMPLIANCE_CHANNEL] Teams channel tagging relevant owners.
```

### Expected Outcome

A tracker document mapping external regulatory changes to internal policies with clear ownership and deadlines, plus a Teams notification to owners of items requiring their attention.

### Tips & Variations

- Works best when /Policies/ has consistent metadata (topic tags, owners) so Cowork can match external changes to internal docs reliably.
- Add payer-specific subscriptions to `[COMPLIANCE_MAILBOX]` so their bulletins feed directly in.
- For multi-state organizations, add "group updates by jurisdiction" to the output.
- Run weekly. Compliance drift happens in the gaps between scans.
