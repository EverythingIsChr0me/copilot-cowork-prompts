# New Customer Onboarding

**Category:** `personal-productivity`

**Apps Involved:** Outlook, SharePoint, PowerPoint, Word, Teams

**Complexity:** Advanced (5+ apps or chained steps)

### Description

Automates the full new customer onboarding workflow — from ingesting a new customer email to researching the account, creating a structured SharePoint folder with executive deliverables, notifying the team via Teams, and drafting a customer welcome email.

### The Prompt

```
Your job is to help me onboard a new customer.
Customer onboarding includes the following tasks:
1. Search my email inbox for an email that contains "NEW CUSTOMER" in the subject line
2. Research the customer location, industry and revenue based on what you find in the email
3. Create a folder in SharePoint using a "YYYY-MM-DD CUSTOMER NAME" format
4. Create an executive level PowerPoint and Word artifacts in the new folder based on your research
5. Create a new Teams chat message to [TEAMMATE_1], [TEAMMATE_2] and [TEAMMATE_3] with a summary of the new customer, along with a link to the folder
6. Draft a welcome email to the customer
```

### Expected Outcome

- A dated SharePoint folder named after the new customer
- An executive-level PowerPoint deck and Word document summarizing the customer in that folder
- A Teams chat sent to the specified teammates with a customer summary and folder link
- A drafted welcome email ready to review and send to the customer

### Tips & Variations

- Replace `[TEAMMATE_1]`, `[TEAMMATE_2]`, `[TEAMMATE_3]` with actual names or aliases before running.
- If multiple "NEW CUSTOMER" emails exist, Cowork will use the most recent — add a date qualifier if needed (e.g. "from this week").
- The PowerPoint and Word docs are based on publicly available research; review for accuracy before sharing externally.
- Variation: add a step to create a Planner task board in the new customer folder for tracking onboarding milestones.
- Prerequisite: Cowork must have access to your Outlook inbox and the target SharePoint site.

---

Save your file as `prompts/personal-productivity/customer-onboarding.md`.
