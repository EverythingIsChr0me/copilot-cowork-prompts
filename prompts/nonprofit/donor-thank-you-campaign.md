# Donor Thank-You Campaign

**Category:** `nonprofit`

**Apps Involved:** Outlook, Excel, Word

**Complexity:** Moderate (3-4 apps)

### Description

Reads a donor list from Excel, generates personalized thank-you letters for each donor in Word, and queues individual emails ready for review and send.

### The Prompt

```
Run a personalized donor thank-you campaign using the file "[DONOR_LIST_FILENAME].xlsx" in my OneDrive.

1. Open the Excel file and read the donor list. Expect columns for: donor name, donation amount, donation date, and email address. Flag any rows with missing data and skip them.

2. For each donor, generate a personalized thank-you letter in Word that includes:
   - A warm, sincere opening using the donor's first name
   - Acknowledgment of their specific donation amount and date
   - Two to three sentences on the impact their gift makes (use the language from "[IMPACT_STATEMENT_FILENAME].docx" if provided)
   - A closing with [SIGNATORY_NAME] and [SIGNATORY_TITLE]

3. Save each letter to OneDrive in the folder "[CAMPAIGN_FOLDER_NAME]" using the filename format "ThankYou - [DONOR_NAME].docx".

4. Draft a personalized Outlook email to each donor with the letter contents in the body. Do not send — save each as a draft for review.

5. Summarize how many letters were created and how many emails were drafted. List any skipped rows and why.
```

### Expected Outcome

- One personalized Word thank-you letter per donor saved to the specified OneDrive folder
- One Outlook draft email per donor, ready for final review and send
- A summary report listing letters created, drafts queued, and any skipped records

### Tips & Variations

- Replace `[DONOR_LIST_FILENAME]`, `[CAMPAIGN_FOLDER_NAME]`, `[SIGNATORY_NAME]`, and `[SIGNATORY_TITLE]` before running.
- `[IMPACT_STATEMENT_FILENAME]` is optional — if omitted, Cowork will generate generic impact language based on your organization name.
- Variation: add a donation tier condition (e.g. "for donors over $1,000, add a paragraph inviting them to a [EVENT_NAME]").
- Prerequisite: donor Excel file must be in OneDrive before running. Do not include SSNs or sensitive financial data.

---

Save your file as `prompts/nonprofit/donor-thank-you-campaign.md`.
