/**
 * Английский словарь — источник правды для всех остальных локалей.
 *
 * `Dictionary` выводится из этого объекта, поэтому любая другая локаль обязана
 * содержать ровно те же ключи: пропущенный или лишний роняет сборку. При двадцати
 * языках главный риск — не корявая фраза, а тихо непереведённый блок, который никто
 * не заметит месяцами; тип превращает его в ошибку сборки.
 *
 * `@transcreate` в комментарии означает, что ключ решает ранжирование и переводится
 * НЕ дословно: заголовок подбирается под то, как на этом языке реально ищут. Всё
 * остальное переводится с сохранением тона. Без пометки следующий проход выровняет
 * весь файл под дословность и уронит локальный поиск.
 *
 * Текста из макета телефона здесь нет намеренно: он изображает интерфейс приложения,
 * а тот локализован лишь на шесть языков из двадцати. Английский макет честнее
 * переведённого.
 */

export const en = {
  /** Код в URL (`/ru/`); у английского префикса нет. */
  path: 'en',
  /** Значение атрибута lang и hreflang — может отличаться от пути: /zh/ → zh-Hans. */
  hreflang: 'en',
  /** Название языка на нём самом, для переключателя. */
  nativeName: 'English',

  nav: {
    features: 'Features',
    faq: 'FAQ',
    examples: 'Examples',
    support: 'Support',
    getApp: 'Get the app',
    /** aria-label кнопки-бургера. */
    menu: 'Menu',
    /** aria-label переключателя языка. */
    language: 'Language',
  },

  footer: {
    privacy: 'Privacy Policy',
    copyright: '© 2026 Notix',
  },

  /** Полоска с предложением перейти на свой язык. {language} — название языка. */
  languageBanner: {
    text: 'This page is available in {language}',
    cta: 'Switch',
    dismiss: 'Dismiss',
  },

  home: {
    /** @transcreate — это и есть заголовок в выдаче. */
    seoTitle:
      'Notix — AI Note Taker: Record Lectures, PDFs & YouTube into Notes, Quizzes & Flashcards',
    /** @transcreate */
    seoDescription:
      'Notix turns lectures, PDFs, YouTube videos, and voice recordings into clear notes, quizzes, and flashcards. Transcribe, summarize, and chat with your notes — your AI study companion for iOS.',
    ogTitle: 'Notix — AI Note Taker',
    ogDescription:
      'Turn lectures, PDFs, and YouTube videos into notes, quizzes, and flashcards. Chat with your notes and get exam-ready faster.',
    ogImageAlt: "Notix — turn anything you're learning into notes that teach you back",
    /** Уходит в JSON-LD MobileApplication. */
    schemaDescription:
      'Notix turns lectures, PDFs, YouTube videos, and voice recordings into clear notes, quizzes, and flashcards. Transcribe, summarize, and chat with your notes.',

    hero: {
      badge: 'AI study companion for iPhone',
      /** @transcreate — h1. Разбит надвое: вторая половина внутри <em>. */
      titleLead: "Turn anything you're learning into notes that",
      titleEmphasis: 'teach you back',
      subtitle:
        'Record a lecture, upload a PDF, or paste a YouTube link. Notix transcribes it, writes a clean summary, and turns it into quizzes and flashcards — so you study instead of re-reading.',
      cta: 'Download on the App Store',
      ctaNote: 'Free to start · iPhone',
    },

    valueStrip: [
      { title: 'Anything in', note: 'audio, PDF, YouTube, web' },
      { title: 'Notes in seconds', note: 'transcript + clean summary' },
      { title: 'Active recall out', note: 'quizzes, flashcards, AI chat' },
      { title: '6 languages', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Sound familiar?',
      /** @transcreate */
      title: 'Studying feels harder than it should',
      items: [
        "“I zone out twenty minutes into the lecture — and miss the half that's on the exam.”",
        "“I've read this chapter three times and I still can't remember any of it.”",
        '“My notes are scattered across two notebooks and five different apps.”',
        "“It's midnight before the exam, I'm confused, and there's no one to ask.”",
      ],
      pivot:
        "There's a better way. Notix turns lectures, PDFs, and videos into a study system — automatically.",
    },

    how: {
      /** @transcreate */
      title: "How it works — it's simple",
      steps: [
        {
          title: 'Capture anything',
          text: 'Record a lecture, upload audio or a document, or paste a YouTube or web link.',
        },
        {
          title: 'Notix does the work',
          text: 'Automatic transcription and a clean, structured summary — ready in seconds.',
        },
        {
          title: 'Learn it for real',
          text: 'Test yourself with quizzes and flashcards, or ask your notes anything with AI Chat.',
        },
      ],
    },

    features: {
      /** @transcreate */
      title: 'Capture, understand, and remember — in one app',
      items: [
        {
          title: 'Never miss a thing in class',
          text: 'Tap record and stay present. The transcript and structured notes are waiting for you after the lecture.',
        },
        {
          title: 'Fifty slides, one clear summary',
          text: 'Drop in PDFs, slides, or articles and get a clean, structured summary in seconds.',
        },
        {
          title: 'YouTube & web links',
          text: 'Paste a link and Notix turns the video or page into searchable notes.',
        },
        {
          title: 'Find your gaps before the exam does',
          text: 'Turn any note into practice questions — active recall beats re-reading every time.',
        },
        {
          title: 'Make it stick',
          text: 'Flashcards generated straight from your notes, ready for quick review anywhere.',
        },
        {
          title: 'Your notes, answering back',
          text: 'Ask questions about one note or your whole library — every answer links to its source.',
        },
        {
          title: 'Everything in one place',
          text: 'Folders, search, and sync across devices — find any fact from any lecture in seconds.',
        },
        {
          title: 'Speaks your language',
          text: 'English, Spanish, French, German, Russian, and Polish — summaries and quizzes follow your language.',
        },
        {
          title: 'Share it as a PDF',
          text: 'Export any note as a polished PDF for classmates or colleagues.',
        },
      ],
    },

    testimonials: {
      title: 'What students say about Notix',
      items: [
        {
          quote:
            '“I record every lecture and Notix turns it into clean notes I actually study from. My grades went up this semester.”',
          author: 'Maya R. · Student',
        },
        {
          quote:
            '“Reviewing before exams is so much faster now. I just search my notes instead of rewatching hours of recordings.”',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '“Perfect for back-to-back classes. I tap record, focus on the lecture, and the summary is waiting for me afterwards.”',
          author: 'Priya S. · Student',
        },
      ],
    },

    whatIs: {
      /** @transcreate — отвечает на запрос «что такое Notix» на каждом языке. */
      title: 'What is Notix?',
      paragraphs: [
        'Notix is an AI note taker. You record a lecture, a meeting, or an interview, upload a PDF or a document, or paste a link — a YouTube video, an article, a TikTok or Instagram post — and Notix transcribes it, writes a clean structured summary, and turns that summary into quizzes and flashcards when you need to actually remember it.',
        'It is not a voice recorder and it is not a transcription tool. A recorder hands you back an hour of audio you have to sit through again. A transcription tool hands you a wall of text. Notix hands you the thing you were going to write down anyway: organised notes, with the key ideas separated from the filler.',
        'Everything lands in one place. Recordings, documents, videos, articles, and posts become a single searchable library — so when you need what was said in March, you are searching your own notes instead of hunting through six apps.',
        'Notix is free to start and runs on iPhone.',
      ],
    },

    faqTitle: 'Frequently Asked Questions',

    finalCta: {
      title: 'Never miss what matters again',
      text: 'Your next lecture could be a set of clean notes, a quiz, and a deck of flashcards — automatically.',
      cta: 'Download on the App Store',
      note: 'Free to start · iPhone',
    },
  },

  /**
   * Каждый ответ самодостаточен: первое предложение содержит подлежащее «Notix» и
   * повторяет суть вопроса, дальше конкретика, в конце — ограничение, если оно есть.
   * Эта форма — условие того, что абзац может процитировать языковая модель.
   *
   * Вопросы (`q`) — @transcreate: именно они попадают в выдачу и в FAQPage-разметку.
   */
  faq: [
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
  ],

  support: {
    /** @transcreate */
    seoTitle: 'Support — Notix',
    seoDescription:
      'Get help with Notix — AI Note Taker. Contact our support team, report a bug, or ask about your subscription.',
    title: 'Support',
    replyTime: 'We usually reply within 1–2 business days.',
    contactCardTitle: 'Email us',
    contactCardText: 'For any question, bug report, or feedback:',

    reportingTitle: 'Reporting a problem',
    reportingIntro: 'To help us fix things faster, please include:',
    reportingItems: [
      'Your device model and iOS version',
      'The app version (Settings → About)',
      'What you did, what you expected, and what happened instead',
      'A screenshot or screen recording, if possible',
    ],

    billingTitle: 'Subscriptions & billing',
    /** Текст до жирного пути настроек. */
    billingTextLead:
      'Notix Pro subscriptions are billed through your Apple ID. You can manage or cancel your subscription anytime in your device settings:',
    /** Путь в настройках, показывается жирным. Названия пунктов — как в iOS. */
    billingSettingsPath: 'Settings → your name → Subscriptions',
    billingRefundsLead:
      'Refunds for App Store purchases are handled by Apple — you can request one at',

    accountTitle: 'Account & data',
    accountTextLead:
      'You can delete your account and all associated data directly in the app:',
    accountSettingsPath: 'Settings → Account Details → Delete account',
    accountTextTail:
      'Your account and data are permanently deleted after 30 days; logging back in within that period cancels the deletion.',
    accountPrivacyLead: 'For data questions, see our',
    accountPrivacyLink: 'Privacy Policy',
    accountPrivacyTail: 'or email us.',

    recordingTitle: 'Recording lectures and meetings',
    recordingText:
      'Notix helps you capture material you are entitled to capture. Rules on recording differ between schools, workplaces, and countries, and in some places everyone in the room has to agree before you start — so check the rules that apply to you before you hit record.',
  },

  notFound: {
    seoTitle: 'Page not found — Notix',
    seoDescription:
      'Page not found — Notix. The page you are looking for does not exist or has moved.',
    /** Разбит надвое: вторая половина внутри <em>. */
    titleLead: '404 — this page took',
    titleEmphasis: 'no notes',
    text: "The page you're looking for doesn't exist or has moved.",
    cta: 'Back to home',
  },

  resetPassword: {
    seoTitle: 'Reset your password — Notix',
    seoDescription:
      'Open this link on the phone where the Notix app is installed to set a new password.',
    title: 'Open this link on your phone',
    text: 'Password reset happens inside the Notix app. Open the link from the email on the iPhone or Android phone where Notix is installed — it will take you straight to the new-password screen.',
    noAppText:
      'No phone with Notix yet? Install the app first, then tap the link again. The link works for 30 minutes.',
    cta: 'Download on the App Store',
  },
};

export type Dictionary = typeof en;
