# Careers Opportunities

This directory contains job descriptions and internship opportunities for AI Security Assurance. Each markdown file in this directory automatically generates a job listing on the careers page.

## How It Works

The careers system automatically:
- ✅ Reads all `.md` files in `/public/opportunities/`
- ✅ Filters by `status: "open"`
- ✅ Generates job cards on `/careers`
- ✅ Creates detail pages at `/careers/[slug]`

**No code changes needed** — just add a markdown file with proper frontmatter and it appears on the website!

## Adding a New Job Posting

1. Create a new `.md` file in this directory
2. Add frontmatter metadata at the top (see template below)
3. Write your job description in markdown
4. Save the file
5. The job will automatically appear at `https://aisecurityassurance.com/careers`

### Frontmatter Template

Every markdown file **must** include frontmatter at the top:

```markdown
---
title: "Job Title Here"
salary: "$160,000 - $230,000"
location: "Remote / U.S.-Based"
type: "Full-time"
status: "open"
slug: "url-friendly-slug-here"
---

## **Job Title: [Your Title]**

[Rest of your job description here...]
```

### Frontmatter Fields

| Field | Description | Examples |
|-------|-------------|----------|
| `title` | Display name for the position | `"Senior Security Engineer"` |
| `salary` | Compensation or "Unpaid / Course Credit" | `"$160,000 - $230,000"`, `"Competitive"`, `"Unpaid / Course Credit"` |
| `location` | Work location | `"Remote / U.S.-Based"`, `"Hybrid - D.C. Area"` |
| `type` | Employment type | `"Full-time"`, `"Part-time"`, `"Internship"`, `"Contract"` |
| `status` | Visibility status | `"open"` (visible) or `"closed"` (hidden) |
| `slug` | URL identifier | `"senior-security-engineer"` (lowercase, dash-separated) |

### Slug Guidelines

The `slug` determines the URL for the job detail page:
- Must be **lowercase**
- Use **dashes** instead of spaces
- Should be **descriptive** and **unique**
- Example: `"human-ai-collaboration-specialist"` → `/careers/human-ai-collaboration-specialist`

## Managing Job Postings

### To Hide a Position (Without Deleting)

Change the `status` field to `"closed"`:

```markdown
---
title: "Job Title"
status: "closed"
---
```

The file remains in the directory but won't appear on the careers page.

### To Archive Old Positions

1. Create an `archive/` subdirectory if it doesn't exist:
   ```bash
   mkdir -p public/opportunities/archive
   ```

2. Move old job files to the archive:
   ```bash
   mv "Job Title_ Old Position.md" archive/
   ```

Files in `/public/opportunities/archive/` are ignored by the careers system.

### To Reopen a Position

Change `status` back to `"open"`:

```markdown
---
title: "Job Title"
status: "open"
---
```

## Job Description Content

After the frontmatter, write your job description in standard Markdown. The system supports:

- **Headers**: `## About Us`, `### The Role`
- **Bold**: `**important text**`
- **Italic**: `*emphasized text*`
- **Lists**:
  - Bulleted lists with `*` or `-`
  - Numbered lists with `1.`, `2.`, etc.
- **Links**: `[link text](https://example.com)`
- **Code**: `` `inline code` ``

### Recommended Structure

```markdown
---
[frontmatter here]
---

## **Job Title: [Title]**

[Salary Range]

*([Location])*

### **About Us**

[Company description...]

### **The Role**

[What they'll do...]

### **What We're Looking For**

**Must-haves:**
* Requirement 1
* Requirement 2

**Nice-to-haves:**
* Optional skill 1
* Optional skill 2

### **What We Offer**

* Benefit 1
* Benefit 2

### **How to Apply**

[Application instructions - mention the form below]

**Transparency Note:** [Any notes about funding, timeline, etc.]

EEO: Equal opportunity employer...
```

## Application Form

Each job detail page includes an automatic application form at the bottom with:

**Required Fields:**
- First Name
- Last Name
- Email
- Resume/CV upload (PDF, DOC, DOCX)

**Optional Fields:**
- Phone
- LinkedIn URL
- GitHub URL
- Personal Website
- Cover Letter upload (PDF, DOC, DOCX)

Applications are sent via email to `careers@aisecurityassurance.com` with all uploaded files attached.

## File Naming

You can name markdown files however you like (e.g., `Job Title_ Security Engineer.md`), but:
- The `title` field in frontmatter determines the display name
- The `slug` field determines the URL
- Keep filenames descriptive for easy file management

## Examples

See existing files in this directory:
- `Job Title_ Human-AI Collaboration Specialist.md`
- `Job Title_ Security Research Engineer.md`
- `Job Title_ Internship_ Cybersecurity & AI Engineering.md`

## Troubleshooting

**Job not appearing on careers page?**
1. Check that frontmatter is properly formatted with `---` delimiters
2. Verify `status: "open"`
3. Ensure the file is in `/opportunities/` (not in a subdirectory)
4. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)

**Job detail page not found?**
1. Check that the `slug` field matches the URL you're trying to access
2. Verify the slug is lowercase and dash-separated
3. Ensure there are no typos in the frontmatter

**Changes not appearing?**
- The dev server should auto-reload
- Try hard-refreshing the browser
- Check browser console for any errors

## Questions?

For questions about the careers system, contact the development team or refer to the main project documentation in `/CLAUDE.md`.
