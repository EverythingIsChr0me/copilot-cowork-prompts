# Weekly Manager Kickoff Email

**Category:** `personal-productivity`

**Apps Involved:** Outlook, Teams

**Complexity:** Advanced (chained steps: research → compose → save draft)

### Description

Researches recent leadership directives, internal newsletters, and team performance data, then drafts a weekly Monday kickoff email in the manager's established voice and saves it to Outlook Drafts for review before sending.

### The Prompt

```
Draft [MANAGER_NAME]'s weekly Monday team kickoff email and save it in Outlook Drafts.
Recipients — [TEAM_NAME]: [RECIPIENT_1_NAME] ([RECIPIENT_1_EMAIL]), [RECIPIENT_2_NAME]
([RECIPIENT_2_EMAIL]), [RECIPIENT_3_NAME] ([RECIPIENT_3_EMAIL]). Add additional recipients
as needed.

STEP 1 — GATHER INTEL (run all in parallel):

A) MANAGER VOICE: Search [MANAGER_NAME]'s sent mail for recent kickoff or team
emails to extract tone, structure, and subject line format. Note any recurring phrases,
signature sign-off, and formatting conventions.

B) INTERNAL NEWSLETTER: Search inbox for the latest [NEWSLETTER_NAME] (e.g., a weekly
field advisory or business solutions brief). Extract compete intelligence, pricing changes,
licensing updates, or product announcements relevant to the team's roles.

C) LEADERSHIP DIRECTIVES: Search inbox and Teams chat with [SKIP_LEVEL_MANAGER_NAME]
([SKIP_LEVEL_MANAGER_EMAIL]) for priorities or strategic themes communicated in the past
7–10 days. Distill into 2–4 bullets relevant to [TEAM_ROLE_1] and [TEAM_ROLE_2] roles.
Key themes to watch for: [THEME_1], [THEME_2], [THEME_3], [THEME_4].

D) PIPELINE & PERFORMANCE: Search for recent pipeline, forecast, or team performance
data — look for emails or files referencing [KEYWORD_1], [KEYWORD_2], [KEYWORD_3] to
surface current numbers or notable results.

STEP 2 — COMPOSE THE EMAIL using the manager's established voice and this structure:

- Subject line: follow the pattern found in Step 1A, updated with current date and
  1–2 key themes (e.g., "[TEAM_NAME] - [DATE] Kick-Off Note - [X] Days Until [DEADLINE]
  | [THEME] + [THEME]")
- Opening: energetic greeting with macro framing (days to [FISCAL_DEADLINE], where the
  team stands)
- TOP PRIORITIES FROM LEADERSHIP: 2–4 bullets from Step 1C
- [NEWSLETTER_NAME] HIGHLIGHTS: 3–5 bullets from Step 1B (compete intel, pricing,
  product news sellers need to know)
- PIPELINE & PERFORMANCE: brief snapshot from Step 1D; call out notable wins or deals
  by name where available
- EXECUTION REMINDERS: standing operational asks (e.g., [OPERATIONAL_ASK_1],
  [OPERATIONAL_ASK_2])
- Motivational close in the manager's voice
- Signature: [MANAGER_NAME], [MANAGER_TITLE], [MANAGER_PHONE]

STEP 3 — SAVE AS DRAFT: Save the composed email as a Drafts in Outlook using
CreateDraftMessage. To field: all recipients listed above. [MANAGER_NAME] will review
and send Monday at [SEND_TIME].

IMPORTANT NOTES:
- Match the tone and formatting conventions found in Step 1A exactly.
- Every claim must come from actual email/Teams data retrieved in Step 1 — do not
  fabricate numbers, wins, or priorities.
- If certain data cannot be retrieved (e.g., newsletter not found), note the gap
  in the draft so the manager can fill it in before sending.
```

### Expected Outcome

A fully drafted Monday kickoff email saved to Outlook Drafts, addressed to all direct reports, written in the manager's voice, with sections populated from live Outlook and Teams data. Gaps flagged inline where source data was unavailable.

### Tips & Variations

- **Tokens to fill in:** `[MANAGER_NAME]`, `[TEAM_NAME]`, all `[RECIPIENT_*]` fields, `[NEWSLETTER_NAME]`, `[SKIP_LEVEL_MANAGER_NAME]`, `[SKIP_LEVEL_MANAGER_EMAIL]`, `[TEAM_ROLE_1/2]`, `[THEME_1–4]`, `[KEYWORD_1–3]`, `[FISCAL_DEADLINE]`, `[OPERATIONAL_ASK_1/2]`, `[MANAGER_TITLE]`, `[MANAGER_PHONE]`, `[SEND_TIME]`.
- Run on Sunday evening so the draft is ready before the manager's Monday morning review.
- If the manager has no prior kickoff emails to reference, add a brief style guide in place of Step 1A (tone, capitalization habits, emoji use, sign-off format).
- For teams without a named newsletter, replace Step 1B with a web search for recent industry news relevant to the team's focus area.
- To add a recurring motivational quote or theme-of-the-week, append that instruction to Step 2's Opening section.
