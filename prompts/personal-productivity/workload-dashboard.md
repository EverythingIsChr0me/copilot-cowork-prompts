---
---

## Workload Dashboard

**Category:** `personal-productivity`

**Apps Involved:** Outlook, Teams, Calendar

**Complexity:** Advanced

### Description

Generates an interactive HTML dashboard summarizing your workload across email, meetings, Teams chats, and tasks — with filters, a top-5 priority list, and a time-allocation pie chart.

### The Prompt

```
Research my [TIME_PERIOD], including all of the work I have to do across meetings, emails, Teams chats and other stuff I'm involved in directly.

Your goal is to create an interactive HTML dashboard with filters, listed in order of prominence on the dashboard:

- Customer/project
- My top 3 collaborators [NAME1, NAME2, NAME3]
- Task location or response mechanism (e.g. Teams, Outlook, calendar, etc.)
- If available, each task should have a deep link to the source item

My top 5 tasks should be prominently displayed at the top, and should respond to the filters/slicers.

There should be a pie chart showing projected time required in Teams, Outlook, meetings, misc.

All visualizations should update when one of the filters or slicers is selected.

The theme of the dashboard should be [THEME].

As a final task, review the dashboard for legibility, font size, interestingness and overall visual quality, making adjustments if necessary.
```

### Expected Outcome

A self-contained HTML file with interactive filter controls, a top-5 task list, and a pie chart breaking down time by app/channel. Clicking a filter updates all views. Tasks link back to their source items in Teams, Outlook, or Calendar where possible.

### Tips & Variations

- Replace `[TIME_PERIOD]` with a specific range like "next week" or "the next 2 weeks."
- Replace `[NAME1, NAME2, NAME3]` with actual collaborator names.
- Replace `[THEME]` with a visual style, e.g. "dark mode," "corporate blue," or "retro terminal."
- For best results, keep the time window to 1-2 weeks. Longer ranges produce noisier output.
- Consider adding: "Exclude calendar events marked as All Day or OOO" to reduce clutter.
