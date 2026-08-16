/**
 * Dizionario italiano.
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-итальянски. Дословные кальки английских
 * AI-формулировок в Италии почти не ищут, зато работают родные категорийные слова:
 * «trascrivere audio in testo» (12 100/мес), «trascrizione audio» (14 800/мес),
 * «app per studiare» (2400/мес), «da audio a testo» (2400/мес), «convertire audio
 * in testo» (1900/мес), «app per prendere appunti» (1000/мес), «riassunto pdf»
 * (880/мес), «app per appunti» (880/мес), «riassunto video youtube» (720/мес),
 * «flashcard» (14 800/мес). Отдельно — «sbobine» (1900/мес): студенческое слово
 * ровно для расшифровки лекции, поэтому «transcript» лекции переведён им.
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «tu»,
 * без канцелярита.
 *
 * «Notix» не склоняется — это имя продукта.
 */
import type { Dictionary } from './en';

export const it = {
  path: 'it',
  hreflang: 'it',
  nativeName: 'Italiano',

  nav: {
    features: 'Funzioni',
    faq: 'Domande',
    examples: 'Esempi',
    support: 'Assistenza',
    getApp: 'Scarica l’app',
    menu: 'Menu',
    language: 'Lingua',
  },

  footer: {
    privacy: 'Informativa sulla privacy',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Questa pagina è disponibile in {language}',
    cta: 'Cambia',
    dismiss: 'Chiudi',
  },

  home: {
    seoTitle:
      'Notix — app per appunti con AI: trascrivi audio in testo, riassumi PDF e video',
    seoDescription:
      'Notix registra le lezioni, trascrive l’audio in testo e riassume PDF, video di YouTube e articoli. Quiz e flashcard in automatico. Inizi gratis, su iPhone.',
    ogTitle: 'Notix — appunti con trascrizione e riassunto',
    ogDescription:
      'Lezioni, PDF e video di YouTube diventano appunti, quiz e flashcard. Fai domande ai tuoi appunti e arriva pronto all’esame.',
    ogImageAlt: 'Notix — trasforma quello che studi in appunti che ti insegnano',
    schemaDescription:
      'Notix trasforma lezioni, PDF, video di YouTube e registrazioni vocali in appunti chiari, quiz e flashcard. Trascrizione, riassunto e chat con i tuoi appunti.',

    hero: {
      badge: 'Assistente di studio per iPhone',
      titleLead: 'Trasforma quello che studi in appunti che',
      titleEmphasis: 'ti insegnano',
      subtitle:
        'Registra una lezione, carica un PDF o incolla un link di YouTube. Notix trascrive, scrive un riassunto chiaro e ne ricava quiz e flashcard — così studi invece di rileggere.',
      cta: 'Scarica su App Store',
      ctaNote: 'Inizi gratis · iPhone',
    },

    valueStrip: [
      { title: 'Qualsiasi cosa in entrata', note: 'audio, PDF, YouTube, web' },
      { title: 'Appunti in pochi secondi', note: 'trascrizione e riassunto' },
      { title: 'Ripasso attivo in uscita', note: 'quiz, flashcard, chat AI' },
      { title: '6 lingue', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Ti ritrovi?',
      title: 'Studiare è più faticoso di quanto dovrebbe',
      items: [
        '«Dopo venti minuti di lezione mi distraggo — e mi perdo metà di quello che poi c’è all’esame».',
        '«Ho letto questo capitolo tre volte e non mi è rimasto niente».',
        '«I miei appunti sono sparsi su due quaderni e cinque app diverse».',
        '«È mezzanotte prima dell’esame, non ci capisco niente e non ho nessuno a cui chiedere».',
      ],
      pivot:
        'Si può fare diversamente. Notix trasforma lezioni, PDF e video in un sistema di studio — da solo.',
    },

    how: {
      title: 'Come funziona',
      steps: [
        {
          title: 'Registra qualsiasi cosa',
          text: 'Registra una lezione, carica un audio o un documento, incolla un link di YouTube o di un articolo.',
        },
        {
          title: 'Notix fa il lavoro',
          text: 'Trascrizione automatica e riassunto chiaro e ordinato — pronti in pochi secondi.',
        },
        {
          title: 'Impara sul serio',
          text: 'Mettiti alla prova con quiz e flashcard, o chiedi qualsiasi cosa ai tuoi appunti nella chat AI.',
        },
      ],
    },

    features: {
      title: 'Registra, riassumi e ricorda — tutto in un’app',
      items: [
        {
          title: 'A lezione non ti perdi niente',
          text: 'Premi registra e ascolta e basta. La sbobina e gli appunti ordinati ti aspettano a fine lezione.',
        },
        {
          title: 'Cinquanta slide, un riassunto chiaro',
          text: 'Carica PDF, slide o articoli e ottieni un riassunto ordinato in pochi secondi.',
        },
        {
          title: 'YouTube e link web',
          text: 'Incolla un link e Notix trasforma il video o la pagina in appunti in cui puoi cercare.',
        },
        {
          title: 'Trova le lacune prima dell’esame',
          text: 'Ricava domande da qualsiasi appunto — ripassare a domande batte sempre il rileggere.',
        },
        {
          title: 'Per fissarlo in testa',
          text: 'Flashcard create dai tuoi appunti, pronte per un ripasso veloce ovunque.',
        },
        {
          title: 'Appunti che rispondono',
          text: 'Chiedi di un singolo appunto o di tutta la libreria — ogni risposta rimanda alla fonte.',
        },
        {
          title: 'Tutto in un posto solo',
          text: 'Cartelle, ricerca e sincronizzazione — trovi qualsiasi dettaglio di qualsiasi lezione in pochi secondi.',
        },
        {
          title: 'Parla la tua lingua',
          text: 'Inglese, spagnolo, francese, tedesco, russo e polacco — riassunti e quiz seguono la tua lingua.',
        },
        {
          title: 'Condividilo in PDF',
          text: 'Esporta qualsiasi appunto in un PDF curato per compagni di corso o colleghi.',
        },
      ],
    },

    testimonials: {
      title: 'Cosa dicono gli studenti di Notix',
      items: [
        {
          quote:
            '«Registro ogni lezione e Notix la trasforma in appunti puliti su cui studio davvero. Questo semestre i voti sono saliti».',
          author: 'Maya R. · Studentessa',
        },
        {
          quote:
            '«Ripassare prima degli esami è molto più veloce. Cerco nei miei appunti invece di riguardare ore di registrazioni».',
          author: 'Daniel K. · Studente',
        },
        {
          quote:
            '«Perfetta quando hai lezioni una dietro l’altra. Premo registra, seguo la lezione e il riassunto mi aspetta già pronto».',
          author: 'Priya S. · Studentessa',
        },
      ],
    },

    whatIs: {
      title: 'Che cos’è Notix?',
      paragraphs: [
        'Notix è un’app che prende appunti al posto tuo. Registri una lezione, una riunione o un’intervista, carichi un PDF o un documento, oppure incolli un link — un video di YouTube, un articolo, un post su TikTok o Instagram — e Notix lo trascrive, scrive un riassunto chiaro e ordinato e lo trasforma in quiz e flashcard quando quel materiale devi davvero ricordarlo.',
        'Non è un registratore vocale e non è un servizio di trascrizione. Un registratore ti restituisce un’ora di audio che devi riascoltare da capo. Un servizio di trascrizione ti consegna un muro di testo. Notix ti dà quello che ti saresti scritto comunque: appunti ordinati, con le idee importanti separate dal riempitivo.',
        'Finisce tutto in un posto solo. Registrazioni, documenti, video, articoli e post diventano un’unica libreria in cui cercare — così, quando ti serve quello che è stato detto a marzo, cerchi nei tuoi appunti invece di frugare in sei app.',
        'Notix è gratis per iniziare e funziona su iPhone.',
      ],
    },

    faqTitle: 'Domande frequenti',

    finalCta: {
      title: 'Non perderti più le cose che contano',
      text: 'La tua prossima lezione può diventare appunti chiari, un quiz e un mazzo di flashcard — da sola.',
      cta: 'Scarica su App Store',
      note: 'Inizi gratis · iPhone',
    },
  },

  faq: [
    {
      q: 'Come registro una lezione e la trasformo in appunti?',
      a: 'Notix registra l’audio, lo trascrive e scrive da solo un riassunto ordinato — tu avvii la registrazione e posi il telefono. Quando finisce, la trascrizione e il riassunto sono già lì, e da questi puoi generare un quiz o un mazzo di flashcard con un tocco. Se hai già un file audio registrato altrove, puoi caricarlo invece di registrare dal vivo.',
    },
    {
      q: 'Quanto è precisa la trascrizione audio?',
      a: 'Notix trascrive con una precisione sufficiente per lavorarci, e migliora ogni settimana — velocità e qualità sono le due cose su cui lavoriamo di più, ed entrambe sono cresciute parecchio negli ultimi mesi. Una voce chiara in una stanza normale torna quasi parola per parola. Un’aula rumorosa, un microfono lontano o un accento marcato sono più difficili, e gli errori si concentrano su termini tecnici e nomi propri — quindi vale la pena dare un’occhiata alla trascrizione prima di fidarti di un numero o di un nome preciso.',
    },
    {
      q: 'Posso riassumere PDF e documenti?',
      a: 'Sì. Carica un PDF, un documento Word, un file di testo o un foglio di calcolo — sono supportati PDF, DOCX, TXT, RTF, CSV, XLS e XLSX — e Notix produce un riassunto ordinato in cui puoi cercare, su cui puoi metterti alla prova con i quiz o da cui puoi ricavare flashcard. Le presentazioni esportate in PDF funzionano particolarmente bene, perché il riassunto ricostruisce i passaggi che le slide lasciano fuori.',
    },
    {
      q: 'Posso riassumere video di YouTube e articoli web?',
      a: 'Sì. Incolla il link di un video di YouTube o l’URL di un articolo e Notix lo trasforma in appunti, quiz e flashcard — esattamente come fa con l’audio che hai registrato tu. I riassunti di YouTube si basano sui sottotitoli del video, quindi un video con i sottotitoli disattivati per ora non si può riassumere.',
    },
    {
      q: 'Notix riassume i post dei social?',
      a: 'Sì. Incolla il link di un post su TikTok, Instagram, X o Reddit e Notix tira fuori quello che c’è davvero dentro: trascrive l’audio del video, legge il testo su immagini e slide, aggiunge la didascalia — e scrive un riassunto che ti resta. È il modo per salvare una cosa utile scorsa di fretta senza lasciarti un link che non aprirai mai più.',
    },
    {
      q: 'Che fine fanno le mie registrazioni e i miei file?',
      a: 'La registrazione audio resta sul tuo dispositivo — non viene conservata sui nostri server. Un documento che carichi viene cancellato dai nostri server appena è stato elaborato; quello che resta è il risultato: la trascrizione e il riassunto. Quando elimini un appunto, sparisce subito dalla tua libreria e viene cancellato definitivamente dopo 30 giorni — quella finestra esiste perché una cancellazione per sbaglio si possa ancora annullare. I tuoi contenuti non vengono mai usati per addestrare modelli di AI e non li vendiamo.',
    },
    {
      q: 'Notix funziona offline?',
      a: 'Trascrizione e riassunto girano sui nostri server, quindi per trasformare un audio o un PDF in appunti serve la connessione. Tutto quello che è già stato generato resta sul dispositivo, così appunti, riassunti, quiz e flashcard si leggono offline — in aereo o in un’aula seminterrata senza segnale, la tua libreria è comunque lì.',
    },
    {
      q: 'Notix è gratis?',
      a: 'Notix è gratis per iniziare: puoi registrare, creare appunti e fare quiz e flashcard senza pagare. Notix Pro toglie i limiti — ore di registrazione illimitate, domande dei quiz illimitate, riassunti di PDF e video — a 17,99 $ al mese con 3 giorni di prova gratuita, oppure 99,99 $ all’anno con 7 giorni di prova gratuita. Prima della fine della prova non viene addebitato nulla.',
    },
    {
      q: 'Posso disdire quando voglio?',
      a: 'Sì. L’abbonamento è gestito tramite il tuo Apple ID su App Store e puoi disdirlo lì in qualsiasi momento con un paio di tocchi. La disdetta ferma il pagamento successivo; Pro resta attivo fino alla fine del periodo che hai già pagato, e in ogni caso i tuoi appunti restano nella tua libreria.',
    },
    {
      q: 'Che lingue supporta Notix?',
      a: 'L’interfaccia dell’app è disponibile in inglese, spagnolo, francese, tedesco, russo e polacco. La trascrizione non si limita a queste sei — Notix gestisce le principali lingue del mondo, e riassunti e quiz tornano nella lingua che hai scelto, così puoi registrare in una lingua e leggere gli appunti in un’altra.',
    },
  ],

  support: {
    seoTitle: 'Assistenza — Notix',
    seoDescription:
      'Aiuto su Notix: come scrivere all’assistenza, segnalare un errore e gestire l’abbonamento.',
    title: 'Assistenza',
    replyTime: 'Di solito rispondiamo entro 1–2 giorni lavorativi.',
    contactCardTitle: 'Scrivici',
    contactCardText: 'Per qualsiasi domanda, segnalazione o idea:',

    reportingTitle: 'Segnalare un problema',
    reportingIntro: 'Per sistemare tutto più in fretta, aggiungi:',
    reportingItems: [
      'Modello del dispositivo e versione di iOS',
      'La versione di Notix, se la conosci',
      'Cosa hai fatto, cosa ti aspettavi e cosa è successo invece',
      'Uno screenshot o una registrazione dello schermo, se possibile',
    ],

    billingTitle: 'Abbonamento e pagamenti',
    billingTextLead:
      'Notix Pro si paga tramite il tuo Apple ID. Puoi gestire o disdire l’abbonamento in qualsiasi momento dalle impostazioni del dispositivo:',
    billingSettingsPath: 'Impostazioni → il tuo nome → Abbonamenti',
    billingRefundsLead:
      'I rimborsi per gli acquisti su App Store li gestisce Apple — puoi richiederli su',

    accountTitle: 'Account e dati',
    accountTextLead:
      'Puoi eliminare il tuo account e tutti i dati collegati direttamente nell’app:',
    accountSettingsPath: 'Impostazioni → Dati account → Elimina account',
    accountTextTail:
      'Account e dati vengono eliminati definitivamente dopo 30 giorni; se rientri entro quel periodo, l’eliminazione si annulla.',
    accountPrivacyLead: 'Per le domande sui dati, guarda la nostra',
    accountPrivacyLink: 'informativa sulla privacy',
    accountPrivacyTail: 'oppure scrivici.',

    recordingTitle: 'Registrare lezioni e riunioni',
    recordingText:
      'Notix ti aiuta a salvare il materiale che hai il diritto di salvare. Le regole sulla registrazione cambiano tra scuole, aziende e paesi, e in certi casi devono essere d’accordo tutti i presenti — quindi controlla le regole che valgono per te prima di premere registra.',
  },

  notFound: {
    seoTitle: 'Pagina non trovata — Notix',
    seoDescription:
      'Pagina non trovata — Notix. La pagina che cerchi non esiste o è stata spostata.',
    titleLead: '404 — questa pagina non ha preso',
    titleEmphasis: 'nessun appunto',
    text: 'La pagina che cerchi non esiste o è stata spostata.',
    cta: 'Torna alla home',
  },

  resetPassword: {
    seoTitle: 'Reimposta la password — Notix',
    seoDescription:
      'Apri questo link sul telefono dove è installata l’app Notix per impostare una nuova password.',
    title: 'Apri questo link sul telefono',
    text: 'La password si cambia dentro l’app Notix. Apri il link dell’email sull’iPhone o sull’Android dove hai installato Notix — ti porta dritto alla schermata della nuova password.',
    noAppText:
      'Non hai ancora un telefono con Notix? Installa prima l’app, poi tocca di nuovo il link. Il link vale 30 minuti.',
    cta: 'Scarica su App Store',
  },
} satisfies Dictionary;
