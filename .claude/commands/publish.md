---
description: Split a trilingual blog draft into ZH + EN Jekyll posts under _posts/
argument-hint: <path-to-draft.md>
---

Use the `blog-publisher` sub-agent to process the draft at: $ARGUMENTS

If no path was given, ask the user which file to publish (offer to list `.md` files at the repo root that look like trilingual drafts).

The agent will:
1. Read and split the draft into ZH and EN sections (skip JP for now)
2. Ask which category to use (5 fixed options)
3. Confirm filenames before writing
4. Create two files in `_posts/` with correct frontmatter
5. Ask whether to delete the source draft after
