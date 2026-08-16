/**
 * Norsk ordbok (bokmål).
 *
 * Ключи с пометкой `@transcreate` в `en.ts` переведены не дословно: заголовки и
 * мета-теги подобраны под то, как ищут по-норвежски (объёмы Google Ads, Norway, no,
 * снято 16.08.2026): «transkribering» (880) и «transkripsjon» (720) против
 * английского «transcribe» (320) и глагола «transkribere» (260); «oppsummering»
 * (1900) заметно обгоняет «sammendrag» (480) и «sammenfatning» (110);
 * «notater» (2400) и «notater app» (320) — против «notatapp» (50) и «notat app» (50);
 * «quiz» (22 200) — норвежское слово, переводить нечего; «eksamen» (4400) и
 * «forelesning» (590) — то, вокруг чего строится боль читателя.
 *
 * Гипотеза про английские термины подтвердилась лишь наполовину, слабее, чем в
 * шведском. «flashcards» (2400) — безальтернативно английское: «studiekort» (20),
 * «lærekort» (0). А вот «ai note taker» набирает всего 90 против шведских 260, и
 * «ai notater» не показывает данных вовсе — то есть категория по-английски в Норвегии
 * почти не ищется. Поэтому «AI Note Taker» оставлен только там, где он работает как
 * название категории продукта (seoTitle, ogTitle, whatIs), а несущие запрос глаголы
 * и существительные — норвежские: transkribere, oppsummere, notater.
 *
 * Остальное — перевод с сохранением тона: короткие фразы, обращение на «du»,
 * без канцелярита. Кавычки — норвежские « ».
 *
 * «Notix» не переводится и не склоняется, как и «Notix Pro», «App Store»,
 * «Apple ID» и «YouTube».
 *
 * `accountSettingsPath` намеренно остаётся английским: это экраны ВНУТРИ Notix, а
 * интерфейс приложения существует только на шести языках (en, es, fr, de, ru, pl) —
 * норвежского среди них нет. `billingSettingsPath` — наоборот, настройки самой iOS,
 * Apple переводит их на норвежский.
 */
import type { Dictionary } from './en';

// `no`, а не `nb`: нюнорск-локали не планируется, а макроязыковой код даёт более
// широкое совпадение в выдаче. Путь тоже /no/ — он узнаваемее для читателя.
export const nb = {
  path: 'no',
  hreflang: 'no',
  nativeName: 'Norsk',

  nav: {
    features: 'Funksjoner',
    faq: 'FAQ',
    examples: 'Eksempler',
    support: 'Support',
    getApp: 'Last ned appen',
    menu: 'Meny',
    language: 'Språk',
  },

  footer: {
    privacy: 'Personvernerklæring',
    copyright: '© 2026 Notix',
  },

  languageBanner: {
    text: 'Denne siden finnes også på ditt språk',
    cta: 'Bytt',
    dismiss: 'Lukk',
  },

  home: {
    seoTitle:
      'Notix — AI Note Taker: transkriber forelesninger, oppsummer PDF og YouTube, få quiz og flashcards',
    seoDescription:
      'Notix tar opp forelesninger og møter, transkriberer lyd til tekst og lager et sammendrag av PDF-en eller YouTube-videoen din. Quiz og flashcards lager appen selv. Gratis å komme i gang på iPhone.',
    ogTitle: 'Notix — AI Note Taker',
    ogDescription:
      'Gjør forelesninger, PDF-er og YouTube-videoer til notater, quiz og flashcards. Still spørsmål til notatene dine og bli klar til eksamen raskere.',
    ogImageAlt: 'Notix — gjør det du lærer til notater som lærer deg noe tilbake',
    schemaDescription:
      'Notix gjør forelesninger, PDF-er, YouTube-videoer og lydopptak til tydelige notater, quiz og flashcards. Transkriber, oppsummer og still spørsmål til notatene dine.',

    hero: {
      badge: 'AI-studiekompis for iPhone',
      titleLead: 'Fra forelesning, PDF eller video til notater som',
      titleEmphasis: 'lærer deg noe tilbake',
      subtitle:
        'Ta opp en forelesning, last opp en PDF eller lim inn en YouTube-lenke. Notix transkriberer det, skriver et tydelig sammendrag og lager quiz og flashcards av det — så du lærer i stedet for å lese det samme om igjen.',
      cta: 'Last ned i App Store',
      ctaNote: 'Gratis å komme i gang · iPhone',
    },

    valueStrip: [
      { title: 'Alt går inn', note: 'lyd, PDF, YouTube, nett' },
      { title: 'Notater på sekunder', note: 'transkripsjon + sammendrag' },
      { title: 'Aktiv læring ut', note: 'quiz, flashcards, AI-chat' },
      { title: '6 språk', note: 'EN · ES · FR · DE · RU · PL' },
    ],

    pains: {
      eyebrow: 'Kjenner du deg igjen?',
      title: 'Å lese til eksamen tar mer krefter enn det burde',
      items: [
        '«Tjue minutter ut i forelesningen faller jeg av — og mister nettopp den halvparten som kommer på eksamen.»',
        '«Jeg har lest dette kapittelet tre ganger og husker fortsatt ingenting.»',
        '«Notatene mine ligger spredt i to blokker og fem forskjellige apper.»',
        '«Klokka er midnatt kvelden før eksamen, jeg skjønner ingenting, og det er ingen å spørre.»',
      ],
      pivot:
        'Det går an å gjøre det annerledes. Notix gjør forelesninger, PDF-er og videoer til et lesesystem — helt automatisk.',
    },

    how: {
      title: 'Slik funker det',
      steps: [
        {
          title: 'Fang opp hva som helst',
          text: 'Ta opp en forelesning, last opp lyd eller et dokument, eller lim inn en YouTube- eller nettlenke.',
        },
        {
          title: 'Notix gjør jobben',
          text: 'Automatisk transkribering og et tydelig, strukturert sammendrag — klart på sekunder.',
        },
        {
          title: 'Lær det på ordentlig',
          text: 'Test deg selv med quiz og flashcards, eller spør notatene dine om hva du vil i AI-chatten.',
        },
      ],
    },

    features: {
      title: 'Ta opp, forstå og husk — i én og samme app',
      items: [
        {
          title: 'Gå ikke glipp av noe i forelesningen',
          text: 'Trykk på opptak og vær til stede. Transkripsjonen og de ferdige notatene venter når du er ferdig.',
        },
        {
          title: 'Femti slides, ett tydelig sammendrag',
          text: 'Legg inn PDF-er, slides eller artikler og få et tydelig, strukturert sammendrag på sekunder.',
        },
        {
          title: 'YouTube og nettlenker',
          text: 'Lim inn en lenke, så gjør Notix videoen eller siden til søkbare notater.',
        },
        {
          title: 'Finn hullene før eksamen gjør det',
          text: 'Lag øvingsspørsmål av hvilket som helst notat — å teste seg selv slår å lese om igjen, hver gang.',
        },
        {
          title: 'Så det sitter',
          text: 'Flashcards rett ut av dine egne notater, klare til en rask repetisjon hvor som helst.',
        },
        {
          title: 'Notater som svarer deg',
          text: 'Still spørsmål om ett notat eller hele biblioteket ditt — hvert svar lenker til kilden sin.',
        },
        {
          title: 'Alt på ett sted',
          text: 'Mapper, søk og synk mellom enheter — finn hvilket som helst poeng fra hvilken som helst forelesning på sekunder.',
        },
        {
          title: 'Snakker språket ditt',
          text: 'Engelsk, spansk, fransk, tysk, russisk og polsk — sammendrag og quiz følger språket ditt.',
        },
        {
          title: 'Del det som PDF',
          text: 'Eksporter hvilket som helst notat som en pen PDF til medstudenter eller kolleger.',
        },
      ],
    },

    testimonials: {
      title: 'Dette sier studenter om Notix',
      items: [
        {
          quote:
            '«Jeg tar opp hver forelesning, og Notix gjør det til rene notater jeg faktisk leser. Karakterene mine gikk opp dette semesteret.»',
          author: 'Maya R. · Student',
        },
        {
          quote:
            '«Repetisjon før eksamen går mye raskere nå. Jeg søker bare i notatene mine i stedet for å se timevis med opptak på nytt.»',
          author: 'Daniel K. · Student',
        },
        {
          quote:
            '«Perfekt når forelesningene ligger tett. Jeg trykker på opptak, følger med på forelesningen, og sammendraget venter etterpå.»',
          author: 'Priya S. · Student',
        },
      ],
    },

    whatIs: {
      title: 'Hva er Notix?',
      paragraphs: [
        'Notix er en AI Note Taker. Du tar opp en forelesning, et møte eller et intervju, laster opp en PDF eller et dokument, eller limer inn en lenke — en YouTube-video, en artikkel, et innlegg på TikTok eller Instagram — og Notix transkriberer det, skriver et tydelig og strukturert sammendrag, og gjør sammendraget til quiz og flashcards når du virkelig skal huske innholdet.',
        'Det er ikke en lydopptaker, og det er ikke et transkriberingsverktøy. En opptaker gir deg tilbake en time med lyd du må sitte gjennom en gang til. Et transkriberingsverktøy gir deg en vegg av tekst. Notix gir deg det du uansett hadde tenkt å skrive ned: ordnede notater, der det viktige er skilt fra fyllet.',
        'Alt havner på ett sted. Opptak, dokumenter, videoer, artikler og innlegg blir ett enkelt søkbart bibliotek — så når du trenger å vite hva som ble sagt i mars, søker du i dine egne notater i stedet for å lete i seks apper.',
        'Notix er gratis å komme i gang med og virker på iPhone.',
      ],
    },

    faqTitle: 'Ofte stilte spørsmål',

    finalCta: {
      title: 'Gå aldri glipp av det som betyr noe',
      text: 'Neste forelesning kan bli tydelige notater, en quiz og en bunke flashcards — helt automatisk.',
      cta: 'Last ned i App Store',
      note: 'Gratis å komme i gang · iPhone',
    },
  },

  faq: [
    {
      q: 'Hvordan tar jeg opp noe og gjør det til notater?',
      a: 'Notix tar opp lyden, transkriberer den og skriver automatisk et strukturert sammendrag — du starter opptaket og legger fra deg telefonen. Når det er slutt, venter transkripsjonen og sammendraget, og du lager en quiz eller en bunke flashcards av dem med ett trykk. Har du allerede en lydfil fra et annet sted, kan du laste den opp i stedet for å ta opp direkte.',
    },
    {
      q: 'Hvor bra transkriberer Notix lyd til tekst?',
      a: 'Notix transkriberer godt nok til at du kan jobbe videre med resultatet, og det blir bedre for hver uke — fart og kvalitet er det vi bruker mest tid på, og begge deler har blitt merkbart bedre de siste månedene. Tydelig tale i et vanlig rom kommer tilbake nesten ordrett. En bråkete sal, en mikrofon på avstand eller en kraftig aksent er vanskeligere, og feilene samler seg i fagord og egennavn — så det er verdt et raskt blikk på transkripsjonen før du stoler på et bestemt tall eller navn.',
    },
    {
      q: 'Kan jeg lage sammendrag av PDF-er og dokumenter?',
      a: 'Ja. Last opp en PDF, et Word-dokument, en tekstfil eller et regneark — PDF, DOCX, TXT, RTF, CSV, XLS og XLSX støttes alle sammen — så lager Notix et strukturert sammendrag du kan søke i, teste deg selv på eller gjøre om til flashcards. Slides eksportert som PDF fungerer særlig godt, fordi sammendraget fyller inn sammenhengene som slidene hopper over.',
    },
    {
      q: 'Kan jeg lage notater fra YouTube-videoer og nettartikler?',
      a: 'Ja. Lim inn en YouTube-lenke eller adressen til en artikkel, så gjør Notix det om til notater, quiz og flashcards — på samme måte som med lyd du har tatt opp selv. Sammendrag av YouTube bygges på undertekstene til videoen, så en video der undertekster er slått av, kan ennå ikke oppsummeres.',
    },
    {
      q: 'Kan Notix oppsummere innlegg fra sosiale medier?',
      a: 'Ja. Lim inn en lenke til et innlegg på TikTok, Instagram, X eller Reddit, så henter Notix ut det som faktisk ligger i det — transkriberer lyden i en video, leser teksten på bilder og slides og tar med bildeteksten — og skriver deretter et sammendrag du får beholde. Det er måten å ta vare på noe nyttig du scrollet forbi, uten å legge igjen en lenke til deg selv som du aldri åpner igjen.',
    },
    {
      q: 'Hva skjer med opptakene og filene mine?',
      a: 'Lydopptaket ditt blir liggende på enheten din — vi lagrer det ikke på serverne våre. Et dokument du laster opp, slettes fra serverne våre så snart det er behandlet; det som blir igjen, er resultatet: transkripsjonen og sammendraget. Når du sletter et notat, forsvinner det umiddelbart fra biblioteket ditt og slettes permanent etter 30 dager — det vinduet finnes for at en sletting i vanvare fortsatt skal kunne angres. Innholdet ditt brukes aldri til å trene AI-modeller, og vi selger det aldri.',
    },
    {
      q: 'Virker Notix offline?',
      a: 'Transkribering og oppsummering kjører på serverne våre, så du trenger nett for å gjøre lyd eller en PDF om til notater. Alt som allerede er laget, ligger lagret på enheten din, så notatene, sammendragene, quizene og flashcardsene dine kan leses offline — på et fly eller i en kjeller uten dekning er biblioteket ditt fortsatt der.',
    },
    {
      q: 'Er Notix gratis?',
      a: 'Notix er gratis å komme i gang med: du kan ta opp, lage notater og lage quiz og flashcards uten å betale. Notix Pro fjerner grensene — ubegrenset antall opptakstimer, ubegrenset med quizspørsmål og oppsummering av PDF-er og videoer. Det finnes et månedsabonnement med 3 dagers gratis prøveperiode og et årsabonnement med 7 dagers gratis prøveperiode — nøyaktig pris i din valuta ser du i App Store. Ingenting trekkes før prøveperioden er over.',
    },
    {
      q: 'Kan jeg si opp når som helst?',
      a: 'Ja. Abonnementet styres gjennom Apple-ID-en din i App Store, og der sier du det opp når som helst med et par trykk. En oppsigelse stopper neste betaling; Pro er aktivt ut perioden du allerede har betalt for, og notatene dine blir liggende i biblioteket uansett.',
    },
    {
      q: 'Hvilke språk støtter Notix?',
      a: 'Appens grensesnitt finnes på engelsk, spansk, fransk, tysk, russisk og polsk. Transkriberingen er ikke begrenset til de seks — Notix håndterer de store verdensspråkene, og sammendragene og quizene dine kommer tilbake på språket du har valgt, så du kan ta opp på ett språk og lese notatene på et annet.',
    },
  ],

  support: {
    seoTitle: 'Support — Notix',
    seoDescription:
      'Få hjelp med Notix — AI Note Taker. Kontakt supporten, meld fra om en feil, eller spør om abonnementet ditt.',
    title: 'Support',
    replyTime: 'Vi svarer vanligvis innen 1–2 virkedager.',
    contactCardTitle: 'Send oss en e-post',
    contactCardText: 'For alle spørsmål, feilmeldinger og tilbakemeldinger:',

    reportingTitle: 'Melde fra om et problem',
    reportingIntro: 'For at vi skal fikse det raskere, ta gjerne med:',
    reportingItems: [
      'Telefonmodellen din og iOS-versjonen',
      'Hvilken versjon av Notix du har, hvis du vet det',
      'Hva du gjorde, hva du ventet deg, og hva som skjedde i stedet',
      'Et skjermbilde eller et skjermopptak, hvis det går',
    ],

    billingTitle: 'Abonnement og betaling',
    billingTextLead:
      'Notix Pro belastes gjennom Apple-ID-en din. Du kan administrere eller si opp abonnementet når som helst i innstillingene på enheten:',
    billingSettingsPath: 'Innstillinger → navnet ditt → Abonnementer',
    billingRefundsLead:
      'Refusjoner for kjøp i App Store håndteres av Apple — du søker om en på',

    accountTitle: 'Konto og data',
    accountTextLead: 'Du kan slette kontoen din og alle tilhørende data rett i appen:',
    accountSettingsPath: 'Settings → Account details → Delete account',
    accountTextTail:
      'Kontoen og dataene dine slettes permanent etter 30 dager; logger du inn igjen innenfor den perioden, avbrytes slettingen.',
    accountPrivacyLead: 'Spørsmål om data? Les',
    accountPrivacyLink: 'personvernerklæringen vår',
    accountPrivacyTail: 'eller send oss en e-post.',

    recordingTitle: 'Ta opp forelesninger og møter',
    recordingText:
      'Notix hjelper deg å fange opp det du har lov til å fange opp. Reglene for opptak er forskjellige fra lærested til lærested, fra arbeidsplass til arbeidsplass og fra land til land, og noen steder må alle i rommet si ja før du starter — så sjekk hvilke regler som gjelder for deg før du trykker på opptak.',
  },

  notFound: {
    seoTitle: 'Siden ble ikke funnet — Notix',
    seoDescription:
      'Siden ble ikke funnet — Notix. Siden du leter etter, finnes ikke eller er flyttet.',
    titleLead: '404 — denne siden tok',
    titleEmphasis: 'ingen notater',
    text: 'Siden du leter etter, finnes ikke eller er flyttet.',
    cta: 'Tilbake til forsiden',
  },

  resetPassword: {
    seoTitle: 'Tilbakestill passordet ditt — Notix',
    seoDescription:
      'Åpne denne lenken på telefonen der Notix-appen er installert, for å velge et nytt passord.',
    title: 'Åpne denne lenken på telefonen din',
    text: 'Passordet tilbakestilles inne i Notix-appen. Åpne lenken fra e-posten på den iPhone- eller Android-telefonen der Notix er installert — du kommer rett til skjermen for nytt passord.',
    noAppText:
      'Ingen telefon med Notix ennå? Installer appen først, og trykk på lenken igjen. Lenken gjelder i 30 minutter.',
    cta: 'Last ned i App Store',
  },
} satisfies Dictionary;
