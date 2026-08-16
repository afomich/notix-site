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
    q: 'How do I record a lecture and turn it into notes?',
    a: 'Tap the + button, choose “Record or upload audio”, and hit record. When the lecture ends, Notix transcribes the recording and generates a clean, structured summary automatically. You can also upload an existing audio file.',
  },
  {
    q: 'Can I turn PDF textbooks and slides into summaries?',
    a: 'Yes. Upload any PDF or document and Notix produces a structured summary you can search, quiz yourself on, or turn into flashcards.',
  },
  {
    q: 'Can I make notes from YouTube videos?',
    a: 'Yes. Paste a YouTube or web link and Notix turns the video or article into notes, quizzes, and flashcards.',
  },
  {
    q: 'Is Notix free?',
    a: 'Notix is free to start — you can create notes, quizzes, and flashcards without paying. Notix Pro unlocks unlimited recording hours, unlimited quiz questions, and video and PDF summarization with monthly or annual plans.',
  },
  {
    q: 'Is it okay to use Notix at my school?',
    a: 'Notix is a study aid: it helps you capture and review your own course materials. Recording policies differ between schools, so check your institution’s rules on recording lectures before you hit record.',
  },
  {
    q: 'What languages does Notix support?',
    a: 'The app is available in English, Spanish, French, German, Russian, and Polish — and your summaries and quizzes follow your chosen language.',
  },
];
