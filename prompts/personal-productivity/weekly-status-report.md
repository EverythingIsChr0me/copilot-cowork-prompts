# Weekly Status Report Generator

**Category:** `personal-productivity`

**Apps Involved:** Outlook, Teams, Word, OneDrive

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Aggregates your week across Outlook, Teams chats, channel activity, and meeting transcripts, then drafts a polished one-page status report and shares it with your manager.

### The Prompt

```
Generate my weekly status report for the week of [WEEK_STARTING_DATE].

1. Search my Outlook inbox and sent items for this week. Identify key topics, decisions made, and open issues or blockers.

2. Review my Teams activity for this week:
   - Scan my chats for decisions, action items, and important exchanges
   - Scan [TEAMS_CHANNEL_NAME] and any other active channels for announcements, discussions, or deliverables I was involved in
   - Review meeting transcripts or recaps from this week's Teams meetings. Note the meeting name, key outcomes, decisions, and any action items assigned to me

3. Review my Outlook calendar for this week. Note any meetings not captured in Teams and their outcomes.

4. Synthesize everything into a professional one-page status report in Word with the following sections:
   - Accomplishments
   - In Progress
   - Blockers & Risks
   - Key Decisions & Outcomes
   - Upcoming Next Week

5. Keep the tone executive-appropriate — concise bullets, no jargon.

6. Save the report to OneDrive as "Status Report - [WEEK_STARTING_DATE].docx".

7. Draft an Outlook email to [MANAGER_EMAIL] with the subject "Weekly Status - [WEEK_STARTING_DATE]", a one-paragraph summary in the body, and the Word doc attached.
```

### Expected Outcome

- A one-page Word status report synthesized from email, Teams chats, channel posts, and meeting transcripts
- Saved to OneDrive with a date-stamped filename
- A drafted Outlook email to the manager with the report attached, ready to review and send

### Tips & Variations

- Replace `[WEEK_STARTING_DATE]`, `[TEAMS_CHANNEL_NAME]`, and `[MANAGER_EMAIL]` before running.
- If you're in multiple channels, list them explicitly: "scan [CHANNEL_1], [CHANNEL_2], and [CHANNEL_3]".
- Variation: add "post the report summary as a message in [TEAMS_CHANNEL_NAME]" to share with the broader team instead of emailing the manager.
- For best results, run on Fridays after your last meeting so transcripts are available.
- Prerequisite: Teams meeting transcription must be enabled for meeting recap data to be available.

---

Save your file as `prompts/personal-productivity/weekly-status-report.md`.
