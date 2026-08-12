import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Examples are real Notix output published verbatim, so the schema exists to make
// the claims checkable rather than to organise files. Every field a reader would
// need to verify the example — where the source came from, under what licence, when
// it was processed and by which build — is required. A missing one fails the build
// instead of shipping an example nobody can audit.
const examples = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/examples' }),
  schema: z.object({
    title: z.string(),
    /** Shown in listings and search results; keep it to one sentence. */
    description: z.string(),
    /** The <title> tag, when the generated title is not what a searcher types.
     *  The h1 always shows `title` — what the model actually produced — so this
     *  changes what search engines index, never what the page claims was made. */
    seoTitle: z.string().optional(),
    /** Short words, not school subjects. The eight subjects this replaced could not
     *  hold the material we actually publish: a federal guide on spaced review is
     *  not Biology, and a food-safety chart is none of the eight. Kept to one word
     *  each because the list card shows the category as a plain eyebrow, no icon.
     *  Study methods live under 'Practical', not a 'Learning' of their own — that
     *  is how the design mockup labels Cornell, Pomodoro, Feynman and Leitner. */
    subject: z.enum([
      'Statistics',
      'Science',
      'History',
      'Health',
      'Technology',
      'Culture',
      'Practical',
    ]),
    /** Which Notix input path produced this — the page groups examples by it. */
    inputType: z.enum(['lecture', 'pdf', 'video', 'audio', 'article']),

    source: z.object({
      name: z.string(),
      url: z.string().url(),
      /** Publisher or author, as the source itself states it. */
      publisher: z.string(),
      /** Spelled out, e.g. "CC BY-NC-SA 4.0" or "Public domain". Only openly
       *  licensed material belongs here: republishing summaries of copyrighted
       *  textbooks is the one way this section can turn into a liability. */
      licence: z.string(),
      licenceUrl: z.string().url().optional(),
      /** "51 min" for audio and video, "12 pages" for documents. */
      extent: z.string(),
    }),

    /** When the source was run through the app. Examples age; readers deserve the date. */
    processedOn: z.coerce.date(),
    /** App version that produced the output, so a change in quality is traceable. */
    appVersion: z.string(),

    /** A short verbatim slice of the transcript, to show what the model was given. */
    transcriptExcerpt: z.string(),

    flashcards: z
      .array(z.object({ front: z.string(), back: z.string() }))
      .min(4),

    quiz: z
      .array(
        z.object({
          question: z.string(),
          options: z.array(z.string()).min(2),
          /** Index into options. */
          answer: z.number().int().nonnegative(),
          explanation: z.string(),
        })
      )
      .min(3),
  }),
});

export const collections = { examples };
