# Adding an example

An example is one openly licensed source run through Notix, published exactly as the
app produced it. The point is that a reader can check the work: they can open the
source, see what went in, and judge the output against it.

Two rules make or break the section.

**The output must be real.** Summary, flashcards and quiz are copied out of the app,
not written by hand and not tidied up. If a run comes out weak, that is a prompt to
fix, not a paragraph to rewrite — the section only doubles as prompt QA while the
published output is the actual output.

**The source must be openly licensed.** Republishing summaries of copyrighted
textbooks at scale is the one way this section turns into a legal problem. Safe
sources:

| Source | Good for | Licence |
|---|---|---|
| MIT OpenCourseWare | recorded lectures | CC BY-NC-SA |
| Yale Open Courses | recorded lectures | CC BY-NC-SA |
| arXiv | papers, PDF input | per-paper, check each |
| PubMed Central Open Access | papers | per-paper, check each |
| Project Gutenberg | books | public domain |
| US federal government works | reports | public domain |
| Wikipedia | articles | CC BY-SA, requires attribution |

Check the licence on the specific item, not the site as a whole — arXiv and PMC set
it per paper.

## Steps

1. Pick a source and note its publisher, URL, licence and extent (`51 min`, `12 pages`).
2. Run it through Notix the way a student would — as a lecture recording, a PDF, a
   link, whichever fits.
3. Copy out the transcript excerpt, the summary, the flashcards and the quiz.
4. Create `src/content/examples/<slug>.md` using the shape below. The slug becomes
   the URL: `/examples/<slug>/`.
5. `npm run build`. The schema in `src/content.config.ts` rejects the file if a field
   is missing or malformed, so a build failure here is the check working.

## File shape

```markdown
---
title: How mRNA carries the genetic message
description: A 51-minute MIT introductory biology lecture turned into notes, cards and a quiz.
subject: Biology            # Biology | History | Computer Science | Economics | Psychology | Physics | Literature | Medicine
inputType: lecture          # lecture | pdf | video | audio | article
source:
  name: 7.016 Introductory Biology, Lecture 8
  url: https://ocw.mit.edu/...
  publisher: MIT OpenCourseWare
  licence: CC BY-NC-SA 4.0
  licenceUrl: https://creativecommons.org/licenses/by-nc-sa/4.0/
  extent: 51 min
processedOn: 2026-08-04
appVersion: "1.0 (17)"
transcriptExcerpt: >-
  Two or three sentences copied verbatim from the start of the transcript.
flashcards:                 # at least 4
  - front: ...
    back: ...
quiz:                       # at least 3
  - question: ...
    options: [..., ..., ...]
    answer: 1               # index into options, counting from 0
    explanation: ...
---

The Markdown body is the summary Notix produced. Paste it as it came out,
headings and all.
```

## Keeping a prompt log

When a run exposes a weakness, note what was wrong, what changed in the prompt, and
which example caught it. The value compounds: without the log the same defect gets
rediscovered every few weeks.

## Removing an example

Deleting the Markdown file is not enough. Astro keeps collection entries in
`node_modules/.astro/data-store.json` and does not drop an entry when its source
file disappears, so the page keeps building from cache. Clear it:

```bash
rm -rf node_modules/.astro .astro dist && npm run build
```

Confirm the page is gone from `dist/` before deploying.
