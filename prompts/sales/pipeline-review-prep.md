# Pipeline Review Prep

**Category:** `sales`

**Apps Involved:** Excel, Outlook, Teams, PowerPoint

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Reconciles your pipeline Excel export against actual customer engagement signals from Outlook and Teams to catch deals that look healthy on paper but have gone quiet — then builds the slides for your manager review.

### The Prompt

```
Prep me for my pipeline review with [MANAGER_NAME] on [REVIEW_DATE].

1. Open "[PIPELINE_EXPORT].xlsx" in my OneDrive. For each deal in my pipeline with a close date in the next [TIME_PERIOD]:
   - Find the last outbound and inbound email with anyone at the customer domain.
   - Find the last Teams meeting with customer attendees.
   - Calculate days since last meaningful engagement (email reply or meeting, not a newsletter).
2. Flag deals as: Active (engagement in last 14 days), Stalling (15-30 days), Cold (30+ days).
3. For Stalling and Cold deals, suggest one specific next step based on the last conversation.
4. Build a PowerPoint titled "[MY_NAME] — Pipeline Review [REVIEW_DATE]" with:
   - Slide 1: Summary table (deal, value, stage, status, days since engagement)
   - Slide 2: Top 3 at-risk deals with context and recovery plan
   - Slide 3: Top 3 most advanced deals with what's needed to close
   - Slide 4: Asks of [MANAGER_NAME]

Save to /Sales/Pipeline Reviews/.
```

### Expected Outcome

A PowerPoint with pipeline status grounded in real engagement data — not just the CRM stage field — with specific, named deals flagged as at-risk and concrete next steps proposed for each.

### Tips & Variations

- The pipeline export needs to include customer domain or primary contact email; without it Cowork can't cross-reference engagement.
- Change the engagement threshold ("14 days" / "30 days") to match your sales cycle length — enterprise deals need wider windows.
- Add "include competitive mentions found in recent emails or meetings" to surface threats early.
- For reps managing large books, scope to "top 20 deals by value" to keep the analysis focused.
