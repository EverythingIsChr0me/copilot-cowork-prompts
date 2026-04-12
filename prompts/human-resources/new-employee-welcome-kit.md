# New Employee Welcome Kit

**Category:** `education`

**Apps Involved:** Word, Teams, OneDrive

**Complexity:** Moderate (3-4 apps)

### Description

Creates a complete onboarding package for a new hire — including a personalized welcome document, a starter OneDrive folder, and a Teams welcome message to the team — all from a single prompt.

### The Prompt

```
Create a new employee welcome kit for [EMPLOYEE_NAME], who is joining as [JOB_TITLE] on [START_DATE].

1. Create a personalized onboarding document in Word that includes:
   - A welcome message addressed to [EMPLOYEE_NAME]
   - Role overview for [JOB_TITLE] on the [TEAM_NAME] team
   - First week schedule outline (Day 1 through Day 5) with placeholder activities appropriate for the role
   - Key contacts: [CONTACT_1_NAME] ([CONTACT_1_ROLE]), [CONTACT_2_NAME] ([CONTACT_2_ROLE])
   - Links to important resources: [RESOURCE_1], [RESOURCE_2]
   - A 30/60/90-day goal framework with blank fields for the manager to complete

2. Create a OneDrive folder named "[START_DATE] [EMPLOYEE_NAME]" and save the onboarding document there.

3. Send a Teams message to [TEAM_CHANNEL] announcing the new hire. Include:
   - A warm welcome announcement
   - [EMPLOYEE_NAME]'s role and start date
   - A prompt for teammates to introduce themselves

4. Draft a welcome email to [EMPLOYEE_EMAIL] with a brief personal note from [MANAGER_NAME] and a link to the OneDrive folder.
```

### Expected Outcome

- A polished Word onboarding document with a first-week schedule and 30/60/90-day framework
- A dated OneDrive folder for the new hire with the document saved inside
- A Teams channel welcome announcement posted to the team
- A drafted welcome email to the new employee ready for manager review

### Tips & Variations

- Replace all bracketed tokens before running. Minimum required: `[EMPLOYEE_NAME]`, `[JOB_TITLE]`, `[START_DATE]`, `[TEAM_CHANNEL]`, `[EMPLOYEE_EMAIL]`, `[MANAGER_NAME]`.
- Variation: add "also create a Planner task board in the folder with standard onboarding tasks and assign them to [MANAGER_NAME]" for a tracked onboarding checklist.
- Variation: include a `[DEPARTMENT_HANDBOOK_FILENAME].docx` reference to pull role-specific content into the welcome doc.
- Works equally well outside education — applicable to any org onboarding a new team member.

---

Save your file as `prompts/education/new-employee-welcome-kit.md`.
