/**
 * Единственный источник FAQ на главной.
 *
 * Из этого массива генерируются и JSON-LD `FAQPage` в <head>, и аккордеон
 * <details> в теле страницы. Раньше они существовали двумя независимыми
 * блоками разметки и синхронизировались руками — расхождение означало, что
 * schema обещает Google один ответ, а страница показывает другой.
 *
 * `a` — plain text без HTML: JSON-LD не принимает разметку, а Astro экранирует
 * спецсимволы при выводе сам.
 */
export type FaqItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'What is Notix?',
    a: 'Notix is an AI note taker. It records conversations, lectures, and meetings, transcribes them, and writes structured summaries — and it does the same with documents you upload and links you paste: PDFs, Word files, spreadsheets, YouTube videos, web articles, and social posts. Any summary can be turned into quizzes and flashcards when the material is something you need to retain. Notix is free to start, with a Pro plan for heavier use, and is available on iPhone.',
  },
  {
    q: 'How do I record something and turn it into notes?',
    a: 'Notix records the audio, transcribes it, and writes a structured summary automatically — you start the recording and put your phone down. When it ends, the transcript and the summary are waiting, and you can generate a quiz or a flashcard deck from them in one tap. If you already have an audio file from somewhere else, you can upload that instead of recording live.',
  },
  {
    q: 'How accurate is the transcription?',
    a: 'Notix transcribes accurately enough to work from, and it gets better every week — speed and quality are the two things we work on most, and both have improved substantially over the past months. Clear speech in a normal room comes back very close to verbatim. A noisy hall, a distant microphone, or a heavy accent are harder, and technical terms and proper names are where mistakes cluster — so it’s worth a glance at the transcript before you rely on a specific figure or name.',
  },
  {
    q: 'Can I turn PDFs and documents into summaries?',
    a: 'Yes. Upload a PDF, Word document, text file, or spreadsheet — PDF, DOCX, TXT, RTF, CSV, XLS and XLSX are all supported — and Notix produces a structured summary you can search, quiz yourself on, or turn into flashcards. Slide decks exported as PDF work particularly well, because the summary fills in the connective tissue the slides leave out.',
  },
  {
    q: 'Can I make notes from YouTube videos and web articles?',
    a: 'Yes. Paste a YouTube link or the URL of an article, and Notix turns it into notes, quizzes, and flashcards — the same way it handles audio you recorded yourself. YouTube summaries are built from the video’s captions, so a video with captions disabled can’t be summarised yet.',
  },
  {
    q: 'Can Notix summarise social media posts?',
    a: 'Yes. Paste a link to a TikTok, Instagram, X, or Reddit post and Notix pulls out what’s actually in it — it transcribes the audio of a video, reads the text on images and slides, and folds the caption in — then writes a summary you can keep. It’s the way to save something useful you scrolled past without leaving yourself a link you’ll never open again.',
  },
  {
    q: 'What happens to my recordings and files?',
    a: 'Your audio recording stays on your device — it isn’t kept on our servers. A document you upload is deleted from our servers as soon as it has been processed; what remains is the result: the transcript and the summary. When you delete a note, it disappears from your library immediately and is erased permanently after 30 days — that window exists so an accidental delete can still be undone. Your content is never used to train AI models, and we never sell it.',
  },
  {
    q: 'Does Notix work offline?',
    a: 'Transcription and summarisation run on our servers, so you need a connection to turn audio or a PDF into notes. Everything already generated is cached on your device, so your notes, summaries, quizzes, and flashcards are readable offline — on a plane or in a basement with no signal, your library is still there.',
  },
  {
    q: 'Is Notix free?',
    a: 'Notix is free to start: you can record, create notes, and make quizzes and flashcards without paying. Notix Pro removes the limits — unlimited recording hours, unlimited quiz questions, and PDF and video summarisation — at $17.99 per month with a 3-day free trial, or $99.99 per year with a 7-day free trial. Nothing is charged before the trial ends.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. The subscription is managed through your Apple ID in the App Store, and you can cancel there at any time in a couple of taps. Cancelling stops the next payment; Pro stays active until the end of the period you have already paid for, and your notes stay in your library either way.',
  },
  {
    q: 'What languages does Notix support?',
    a: 'The app interface is available in English, Spanish, French, German, Russian, and Polish. Transcription is not limited to those six — Notix handles the major world languages, and your summaries and quizzes come back in the language you have chosen, so you can record in one language and read the notes in another.',
  },
];
