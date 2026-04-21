# Shift Handover Digest

**Category:** `healthcare`

**Apps Involved:** Teams, Outlook, Word

**Complexity:** Moderate (3-4 apps)

### Description

Compiles the outgoing shift's communications — Teams chats, channel posts, and emails flagged for handover — into a structured digest for the incoming team, highlighting open items and deteriorating situations.

### The Prompt

```
Build the handover digest for the [UNIT_OR_SERVICE] shift change at [HANDOVER_TIME].

Pull from the last [SHIFT_DURATION]:
1. All messages in the [UNIT_TEAMS_CHANNEL] Teams channel.
2. Teams chats in group chats I'm part of that reference patients on this unit.
3. Emails marked with the [HANDOVER_FLAG] category or sent to [HANDOVER_DISTRIBUTION_LIST].

For each item, classify as:
- Active issue (requires incoming shift action)
- Awaiting result (labs, imaging, consult response pending)
- Stable / FYI
- Safety or escalation concern

Output a Word doc titled "Handover — [UNIT] [SHIFT_DATE_TIME]" with sections:
- Escalation & Safety Concerns (top of doc, nothing buried)
- Active Issues by Patient Identifier
- Pending Results
- FYI / Stable
- Outstanding Handovers Not Yet Addressed from Prior Shift

Keep each entry to 2-3 lines. Reference the Teams message or email source for each item so the incoming team can follow the thread.
```

### Expected Outcome

A concise, structured Word handover document with safety concerns surfaced first, every active item linked back to its source conversation, and stale items from prior shifts explicitly flagged.

### Tips & Variations

- Only works well if the team uses the designated Teams channel or handover flag consistently. Train the habit first, automate second.
- Keep the doc short — handovers that become novels don't get read. If the output balloons, tighten the time window or scope to one unit.
- Add "flag any patient mentioned in 3+ separate threads" to surface complex cases that need focused discussion.
- Pair with a verbal handover; this supplements, it does not replace.
